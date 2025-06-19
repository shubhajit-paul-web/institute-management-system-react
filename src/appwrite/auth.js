import {Client, Account, ID, Databases, Storage, Query} from "appwrite";
import appwriteConfig from "../config/appwriteConfig";
import {login, logout} from "../features/auth/authSlice";

export class AuthService {
	client = new Client();
	account;
	databases;
	bucket;

	constructor() {
		this.client.setEndpoint(appwriteConfig.URL).setProject(appwriteConfig.PROJECT_ID);
		this.databases = new Databases(this.client);
		this.account = new Account(this.client);
		this.bucket = new Storage(this.client);
	}

	// Upload file (logo)
	async uploadFile(file) {
		try {
			const uploadedFile = await this.bucket.createFile(appwriteConfig.storage.bucketId, ID.unique(), file);
			return uploadedFile?.$id;
		} catch (error) {
			console.error(`Appwrite :: uploadFile error: ${error}`);
			return false;
		}
	}

	// Signup
	async createAccount(data) {
		const {EmailAddress, Password, InstituteName, RegistrationNumber, Type, EstablishedYear, Logo, About, Address, City, State, Pincode, Country, PhoneNumber, OfficialWebsite} = data;

		try {
			const userID = ID.unique();

			// Create user account
			const userAccount = await this.account.create(userID, EmailAddress, Password, InstituteName);

			// Auto-login user
			if (userAccount) {
				await this.login({EmailAddress, Password});
			}

			// Store additional institute data in database
			console.log("➡️ Creating document...");
			const updatedDocument = await this.databases.createDocument(appwriteConfig.database.id, appwriteConfig.database.collections.instituteAccount, userID, {
				// userId: userAccount?.$id,
				InstituteName,
				RegistrationNumber,
				Type,
				EstablishedYear,
				Logo: await this.uploadFile(Logo),
				About,
				Address,
				City,
				State,
				Pincode,
				Country,
				PhoneNumber,
				EmailAddress,
				OfficialWebsite,
			});
			console.log("✅ Document created!");

			return updatedDocument;
		} catch (error) {
			console.error("❌ Error creating account:", error);
			return error.message;
		}
	}

	// Login
	async login({EmailAddress, Password}) {
		try {
			await this.account.createEmailPasswordSession(EmailAddress, Password);
		} catch (error) {
			throw new Error(error);
		}
	}

	// Get current user
	async getCurrentAccount() {
		try {
			return await this.account.get();
		} catch (error) {
			console.error("❌ Not logged in.", error.message);
		}
	}

	// Generate the file view URL
	generateFileURL(fileId) {
		return this.bucket.getFileView(appwriteConfig.storage.bucketId, fileId);
	}

	// Fetch the document from the instituteInfo collection
	async fetchInstituteInfo(userId, dispatch) {
		try {
			const response = await this.databases.listDocuments(appwriteConfig.database.id, appwriteConfig.database.collections.instituteAccount, [
				// Filters
				Query.equal("$id", [userId]), // Ensure that userId matches the logged-in user
			]);

			if (response.documents.length > 0) {
				// Document found for the user
				const instituteInfo = response.documents[0];
				dispatch(
					login({
						...instituteInfo,
						Logo: this.generateFileURL(instituteInfo.Logo),
					})
				);
			}
		} catch (error) {
			console.error("Error fetching institute info:", error);
		}
	}

	// Logout
	async logout(dispatch) {
		try {
			await this.account.deleteSessions();
			dispatch(logout());
			return true;
		} catch (error) {
			throw new Error(error.message || "Logout failed");
		}
	}
}

const authService = new AuthService();

export default authService;

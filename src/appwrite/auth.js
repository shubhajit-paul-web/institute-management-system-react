import {Client, Account, ID, Databases, Storage} from "appwrite";
import appwriteConfig from "../config/appwriteConfig";

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
	async uploadLogo(file) {
		try {
			return await this.bucket.createFile(appwriteConfig.storage.bucketId, ID.unique(), file);
		} catch (error) {
			console.error(`Appwrite :: uploadFile error: ${error}`);
			return false;
		}
	}

	// Signup
	async createAccount(data) {
		const {EmailAddress, Password, InstituteName, RegistrationNumber, Type, EstablishedYear, Logo, About, Address, City, State, Pincode, Country, PhoneNumber, OfficialWebsite} = data;

		try {
            // Create user account
			const userAccount = await this.account.create(ID.unique(), EmailAddress, Password, InstituteName);

            // Auto-login user
            if (userAccount) {
				await this.login({EmailAddress, Password});
			}

            // Store additional institute data in database
            console.log("➡️ Creating document...");
			await this.databases.createDocument(appwriteConfig.database.id, appwriteConfig.database.collections.instituteAccount, ID.unique(), {
				userId: userAccount?.$id,
				InstituteName,
				RegistrationNumber,
				Type,
				EstablishedYear,
				Logo: this.uploadLogo(Logo),
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

			return userAccount;
		} catch (error) {
			console.error("❌ Error creating account:", error);
			throw error;
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

	// Logout
	async logout() {
		try {
			await this.account.deleteSessions();
		} catch (error) {
			throw new Error(error);
		}
	}
}

const authService = new AuthService();

export default authService;

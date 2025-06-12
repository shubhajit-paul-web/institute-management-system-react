import {Client, Account, ID} from "appwrite";
import appwriteConfig from "../config/appwriteConfig";

export class AuthService {
	client = new Client();
    account;

	constructor() {
		this.client.setEndpoint(appwriteConfig.URL).setProject(appwriteConfig.PROJECT_ID);
		this.account = new Account(this.client);
	}

    // Signup
	async createAccount({InstituteName, RegistrationNumber, Type, EstablishedYear, Logo, About, Address, City, State, Pincode, Country, PhoneNumber, EmailAddress, OfficialWebsite, Password}) {
		try {
			const userAccount = await this.account.create(ID.unique(), InstituteName, RegistrationNumber, Type, EstablishedYear, Logo, About, Address, City, State, Pincode, Country, PhoneNumber, EmailAddress, OfficialWebsite, Password);
            
            if (userAccount) {
                return this.login({EmailAddress, Password});
            } 

            return null;
		} catch (error) {
			throw new Error(error);
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
    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            throw new Error(error);
        }
    }

    // Logout
    async logout() {
        try {
            await this.account.deleteSession();
        } catch (error) {
            throw new Error(error);
        }
    }
}

const authService = new AuthService();

export default authService;

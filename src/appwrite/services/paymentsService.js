import appwriteConfig from "../../config/appwriteConfig";
import {Client, ID, Databases, Storage, Query} from "appwrite";

export class PaymentsService {
	client = new Client();
	databases;
	bucket;

	constructor() {
		this.client.setEndpoint(appwriteConfig.URL).setProject(appwriteConfig.PROJECT_ID);
		this.databases = new Databases(this.client);
		this.bucket = new Storage(this.client);
	}

	// Add new payment
	async addPayment({instituteID, studentName, studentId, course, paymentDate, paymentMode, amountPaid, totalFees, dueAmount, status, receiptNo}) {
		try {
			return await this.databases.createDocument(appwriteConfig.database.id, appwriteConfig.database.collections.payments, ID.unique(), {
                instituteID,
				studentName,
				studentId,
				course,
				paymentDate,
				paymentMode,
				amountPaid,
				totalFees,
				dueAmount,
				status,
				receiptNo,
			});
		} catch (error) {
			console.error(`Appwrite :: addPayment error: ${error}`);
		}
	}

	// Update payment details
	async updatePayment(paymentId, {studentName, studentId, course, paymentDate, paymentMode, amountPaid, totalFees, dueAmount, status, receiptNo}) {
		try {
			return await this.databases.updateDocument(appwriteConfig.database.id, appwriteConfig.database.collections.payments, paymentId, {
				studentName,
				studentId,
				course,
				paymentDate,
				paymentMode,
				amountPaid,
				totalFees,
				dueAmount,
				status,
				receiptNo,
			});
		} catch (error) {
			console.error(`Appwrite :: updateStudent error: ${error}`);
		}
	}

	// Remove payment
	async removePayment(paymentId) {
		try {
			return await this.databases.deleteDocument(appwriteConfig.database.id, appwriteConfig.database.collections.payments, paymentId);
		} catch (error) {
			console.error(`Appwrite :: removePayment error: ${error}`);
		}
	}

	// Get payment details
	async getPaymentInfo(paymentId) {
		try {
			return await this.databases.getDocument(appwriteConfig.database.id, appwriteConfig.database.collections.payments, paymentId);
		} catch (error) {
			console.error(`Appwrite :: getPaymentInfo error: ${error}`);
		}
	}

	// Get all payments details
	async getAllPayments(instituteID) {
		try {
			return await this.databases.listDocuments(appwriteConfig.database.id, appwriteConfig.database.collections.payments, [Query.equal("instituteID", instituteID)]);
		} catch (error) {
			console.error(`Appwrite :: getAllPayments error: ${error}`);
		}
	}
}

const paymentsService = new PaymentsService();
export default paymentsService;

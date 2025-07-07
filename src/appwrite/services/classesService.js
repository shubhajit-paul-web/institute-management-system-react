import appwriteConfig from "../../config/appwriteConfig";
import {Client, ID, Databases, Storage, Query} from "appwrite";

export class ClassesService {
	client = new Client();
	databases;
	bucket;
    
	constructor() {
		this.client.setEndpoint(appwriteConfig.URL).setProject(appwriteConfig.PROJECT_ID);
		this.databases = new Databases(this.client);
		this.bucket = new Storage(this.client);
	}

	// Add new class
	async addClass({instituteID, classTopic, course, batch, teacher, noOfStudents, classroom, timing, status}) {        
		try {
			return await this.databases.createDocument(appwriteConfig.database.id, appwriteConfig.database.collections.classes, ID.unique(), {
				instituteID,
				classTopic,
				course,
				batch,
				teacher,
				noOfStudents,
				classroom,
				timing,
				status,
			});
		} catch (error) {
			console.error(`Appwrite :: addClass error: ${error}`);
		}
	}

	// Update class
	async updateClass(classId, {classTopic, course, batch, teacher, noOfStudents, classroom, timing, status}) {
		try {
			return await this.databases.updateDocument(appwriteConfig.database.id, appwriteConfig.database.collections.classes, classId, {
				classTopic,
				course,
				batch,
				teacher,
				noOfStudents,
				classroom,
				timing,
				status,
			});
		} catch (error) {
			console.error(`Appwrite :: updateClass error: ${error}`);
		}
	}

	// Remove class
	async removeClass(classId) {
		try {
			return await this.databases.deleteDocument(appwriteConfig.database.id, appwriteConfig.database.collections.classes, classId);
		} catch (error) {
			console.error(`Appwrite :: removeClass error: ${error}`);
		}
	}

	// Get class details
	async getClassDetails(classId) {
		try {
			return await this.databases.getDocument(appwriteConfig.database.id, appwriteConfig.database.collections.classes, classId);
		} catch (error) {
			console.error(`Appwrite :: getClassDetails error: ${error}`);
		}
	}

	// Get all classes
	async getAllClasses(instituteID) {
		try {
			return await this.databases.listDocuments(appwriteConfig.database.id, appwriteConfig.database.collections.classes, [Query.equal("instituteID", instituteID)]);
		} catch (error) {
			console.error(`Appwrite :: getAllClasses error: ${error}`);
		}
	}
}

const classesService = new ClassesService();
export default classesService;

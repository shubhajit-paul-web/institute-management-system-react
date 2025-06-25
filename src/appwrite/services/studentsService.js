import appwriteConfig from "../../config/appwriteConfig";
import {Client, ID, Databases, Storage, Query} from "appwrite";

export class StudentsService {
	client = new Client();
	databases;
	bucket;

	constructor() {
		this.client.setEndpoint(appwriteConfig.URL).setProject(appwriteConfig.PROJECT_ID);
		this.databases = new Databases(this.client);
		this.bucket = new Storage(this.client);
	}

	// File/image upload service
	async uploadFile(file) {
		try {
			const uploadedFile = await this.bucket.createFile(appwriteConfig.storage.bucketId, ID.unique(), file);

			return uploadedFile?.$id;
		} catch (error) {
			console.error(`Appwrite :: uploadFile error: ${error}`);
			return false;
		}
	}

	// Add new student
	async addStudent({admissionDate, studentName, fatherName, motherName, photo, gender, dob, religion, mobile, email, course, batch, studentType, fullAddress, city, state, country, pincode, previousSchool, extraInfo, studentId, instituteID}) {
		try {
			return await this.databases.createDocument(appwriteConfig.database.id, appwriteConfig.database.collections.students, ID.unique(), {
				admissionDate,
				studentName,
				fatherName,
				motherName,
				photo: await this.uploadFile(photo),
				gender,
				dob,
				religion,
				mobile,
				email,
				course,
				batch,
				studentType,
				fullAddress,
				city,
				state,
				country,
				pincode,
				previousSchool,
				extraInfo,
				studentId,
				instituteID,
			});
		} catch (error) {
			console.error(`Appwrite :: addStudent error: ${error}`);
			return false;
		}
	}

	// Update student details
	async updateStudent(studentID, {studentName, fatherName, motherName, gender, dob, religion, mobile, email, course, batch, studentType, fullAddress, city, state, country, pincode, previousSchool, extraInfo}) {
		try {
			return await this.databases.updateDocument(appwriteConfig.database.id, appwriteConfig.database.collections.students, studentID, {
				studentName,
				fatherName,
				motherName,
				gender,
				dob,
				religion,
				mobile,
				email,
				course,
				batch,
				studentType,
				fullAddress,
				city,
				state,
				country,
				pincode,
				previousSchool,
				extraInfo,
			});
		} catch (error) {
			console.error(`Appwrite :: updateStudent error: ${error}`);
			return false;
		}
	}

	// Remove student
	async removeStudent(studentID) {
		try {
			return await this.databases.deleteDocument(appwriteConfig.database.id, appwriteConfig.database.collections.students, studentID);
		} catch (error) {
			console.error(`Appwrite :: removeStudent error: ${error}`);
			return false;
		}
	}

	// Get student details
	async getStudent(studentID) {
		try {
			return await this.databases.getDocument(appwriteConfig.database.id, appwriteConfig.database.collections.students, studentID);
		} catch (error) {
			console.error(`Appwrite :: getStudent error: ${error}`);
			return false;
		}
	}

	// Get all students details
	async getAllStudents(instituteID) {
		try {
			return await this.databases.listDocuments(appwriteConfig.database.id, appwriteConfig.database.collections.students, [Query.equal("instituteID", instituteID)]);
		} catch (error) {
			console.error(`Appwrite :: getAllStudents error: ${error}`);
			return false;
		}
	}

	// Generate the file view URL
	generateFileURL(fileId) {
		return this.bucket.getFileView(appwriteConfig.storage.bucketId, fileId);
	}
}

const studentsService = new StudentsService();
export default studentsService;

import appwriteConfig from "../../config/appwriteConfig";
import {Client, ID, Databases, Storage, Query} from "appwrite";

export class CoursesService {
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

	// Add new course
	async addCourse({instituteID, courseCreatedDate, title, category, tags, startDate, duration, weeklyTime, level, mode, thumbnail, price, discountPrice, eligibility, language, promoVideo, websiteLink, seats, certification, placement, status, learnings, description, faqs, instructors, syllabus}) {
		try {
			return await this.databases.createDocument(appwriteConfig.database.id, appwriteConfig.database.collections.courses, ID.unique(), {
                instituteID,
                courseCreatedDate,
				title,
				category,
				tags,
				startDate,
				duration,
				weeklyTime,
				level,
				mode,
				thumbnail: await this.uploadFile(thumbnail),
				price,
				discountPrice,
				eligibility,
				language,
				promoVideo,
				websiteLink,
				seats,
				certification,
				placement,
				status,
				learnings,
				description,
				faqs,
				instructors,
				syllabus,
			});
		} catch (error) {
			console.error(`Appwrite :: addCourse error: ${error}`);
		}
	}

	// Update course details
	async updateCourse(courseId, {title, category, tags, startDate, duration, weeklyTime, level, mode, thumbnail, price, discountPrice, eligibility, language, promoVideo, websiteLink, seats, certification, placement, status, learnings, description, faqs, instructors, syllabus}) {
		try {
			return await this.databases.updateDocument(appwriteConfig.database.id, appwriteConfig.database.collections.courses, courseId, {
				title,
				category,
				tags,
				startDate,
				duration,
				weeklyTime,
				level,
				mode,
				thumbnail: this.uploadFile(thumbnail),
				price,
				discountPrice,
				eligibility,
				language,
				promoVideo,
				websiteLink,
				seats,
				certification,
				placement,
				status,
				learnings,
				description,
				faqs,
				instructors,
				syllabus,
			});
		} catch (error) {
			console.error(`Appwrite :: updateCourse error: ${error}`);
		}
	}

	// Remove course
	async removeCourse(courseId) {
		try {
			return await this.databases.deleteDocument(appwriteConfig.database.id, appwriteConfig.database.collections.courses, courseId);
		} catch (error) {
			console.error(`Appwrite :: removeCourse error: ${error}`);
		}
	}

	// Get course details
	async getCourse(courseId) {
		try {
			return await this.databases.getDocument(appwriteConfig.database.id, appwriteConfig.database.collections.courses, courseId);
		} catch (error) {
			console.error(`Appwrite :: getCourse error: ${error}`);
		}
	}

	// Get all courses
	async getAllCourses(instituteID) {
		try {
			return await this.databases.listDocuments(appwriteConfig.database.id, appwriteConfig.database.collections.courses, [Query.equal("instituteID", instituteID)]);
		} catch (error) {
			console.error(`Appwrite :: getCourse error: ${error}`);
		}
	}

	// Generate the file view URL
	generateFileURL(fileId) {
		return this.bucket.getFileView(appwriteConfig.storage.bucketId, fileId);
	}
}

const coursesService = new CoursesService();
export default coursesService;

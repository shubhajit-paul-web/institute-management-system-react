// Appwrite config
const appwriteConfig = {
	URL: String(import.meta.env.VITE_APPWRITE_URL),
	PROJECT_ID: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),

	database: {
		id: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
		collections: {
			students: String(import.meta.env.VITE_APPWRITE_STUDENTS_COLLECTION_ID),
			courses: String(import.meta.env.VITE_APPWRITE_COURSES_COLLECTION_ID),
		},
	},

	storage: {
		bucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
	},
};

export default appwriteConfig;

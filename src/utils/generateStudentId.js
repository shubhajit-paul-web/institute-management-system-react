import {customAlphabet} from "nanoid";

const alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const generateStudentId = () => {
	const nanoid = customAlphabet(alphabet, 8); // 8-character ID
	return `STU-${new Date().getFullYear()}-${nanoid()}`;
};

export default generateStudentId;

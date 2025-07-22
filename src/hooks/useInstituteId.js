import {useSelector} from "react-redux";

const useInstituteId = () => useSelector((state) => state.authReducer.instituteDetails?.$id);

export default useInstituteId;

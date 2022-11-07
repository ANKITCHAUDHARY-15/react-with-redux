import { SET_FROM_INF } from "../Constants/Comman"

const setFormInfo = (data) => {
    console.log("Action Form info data ", data);
    return {
        type: SET_FROM_INF,
        formInfo: data
    }
}
export default setFormInfo;
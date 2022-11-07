import { SET_FROM_INF } from "../Constants/Comman"

const initialSate = {
    formInfo: {}
}
const formInfo = (state = initialSate, action) => {
    console.log("Reducer form info action ", action, " state", state);
    switch (action.type) {
        case SET_FROM_INF:
            return {
                ...state,
                formInfo: action.formInfo
            }
        default:
            return state;
    }
}
export default formInfo;
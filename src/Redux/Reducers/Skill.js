import { ADD_SKILL, REMOVE_SKILL, RESET_SKILL } from "../Constants/Comman";


const initialState = {
    skillList: []
};
const SkillList = (state = initialState, action) => {
    console.log(state);
    switch (action.type) {
        case ADD_SKILL:
            if (!state.skillList.includes(action.data)) {
                state.skillList.push(action.data);
            };
            return {
                ...state,
                skillList: [...state.skillList]
            };
            break;
        case REMOVE_SKILL:
            let index = state.skillList.indexOf(action.data);
            if (index >= 0) {
                state.skillList.splice(index, 1);
            }
            return {
                ...state,
                skillList: [...state.skillList]
            };
            break;
        case RESET_SKILL:
            return {
                ...state,
                skillList: [],
            };
            break;
        default:
            return state;
    }
}
export default SkillList;
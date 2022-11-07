import { ADD_SKILL, REMOVE_SKILL, RESET_SKILL } from "../Constants/Comman"

export const setSkill = (data) => {
    console.log("Action set skill data ", data);
    return {
        type: ADD_SKILL,
        data
    }
}
export const removeSkill = (data) => {
    return {
        type: REMOVE_SKILL,
        data
    }
}
export const resetSkill = (data) => {
    return {
        type: RESET_SKILL,
        data
    }
}
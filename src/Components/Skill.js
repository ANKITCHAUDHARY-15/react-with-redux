import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from "redux"
import { setSkill, removeSkill } from '../Redux/Actions/Skill';

const Skill = (props) => {
    const {
        name = "",
        action = "ADD",
    } = props;
    const handleOnClick = () => {
        if (action === "ADD") {
            props.setSkill(name);
        }
        else {
            props.removeSkill(name);
        }
    }
    return (
        < >
            <button onClick={handleOnClick} className="m-2">{action}</button>
        </ >
    )
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        setSkill,
        removeSkill
    }, dispatch)
};
const mapStateToProps = (state) => {
    // console.warn("redux store", state);
    return {};
}
export default connect(mapStateToProps, mapDispatchToProps)(Skill);
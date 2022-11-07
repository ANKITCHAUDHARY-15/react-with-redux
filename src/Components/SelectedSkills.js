import React from 'react'
import { connect } from 'react-redux';

const SelectedSkills = (props) => {
    const { skills } = props;
    const render = () => {
        if (!!skills) {
            return skills.map(s => {
                return <li key={s}>{s}</li>
            })
        }
    }
    return (
        <div>
            <div>{skills.length} Skills Selected</div>
            <div>
                <ul>
                    {render()}
                </ul>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    const { skillList } = state.SkillList
    return {
        skills: skillList,
    }
}
export default connect(mapStateToProps)(SelectedSkills);

import React from 'react'
import SelectedSkills from '../Components/SelectedSkills';
import Skill from '../Components/Skill';

const SkillContainer = () => {
    const skills = ["c#", "JAVA", "REACT", "MySql", "python", "c", "c++", "JS", "data structure"];
    const render = () => {
        return skills.map(s => {
            return <div key={s} className="d-flex-bw border-1 m-2">
                <p>{s}</p>
                <Skill name={s} action="ADD" />
                <Skill name={s} action="REMOVE" />
            </div>
        })
    }
    return (
        <div className='border-1 p-4 d-flex-bw'>
            <div className='width-full'>
                <div className='ml-10 border-1 p-4'>
                    {render()}
                </div>
            </div>
            <div className='width-full'>
                <div className='ml-10 border-1 p-4 width-half'>
                    <SelectedSkills />
                </div>
            </div>
        </div>
    )
}
export default SkillContainer;

import React from 'react'
import ShowFormInfo from '../Components/ShowFormInfo';
import Form from './Form';
import SkillContainer from './SkillContainer';

const Home = () => {
    return (
        <div className='mt-10'>
            <h1 className='text-align-center'>Welcome on Home Page</h1>
            <SkillContainer />
            <Form />
            <ShowFormInfo />
        </div>
    )
}
export default Home;

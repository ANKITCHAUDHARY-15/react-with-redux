import React, { useState } from 'react'
import Input from '../Components/Input';
import TextArea from '../Components/TextArea';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux"
import setFormInfo from '../Redux/Actions/FormInfo'

function Form(props) {
    const [formInfo, setFormInfo] = useState({ name: "", collageName: "", complain: "" })
    const handleOnNameChange = (name) => {
        setFormInfo({ ...formInfo, name });
    };
    const handleOnCollageChange = (collageName) => {
        setFormInfo({ ...formInfo, collageName });
    };
    const handleOnComplainChange = (complainText) => {
        setFormInfo({ ...formInfo, complain: complainText });
    }
    const handleOnSubmit = () => {
        props.setFormInfo(formInfo);
    }
    return (
        <div className='border-1 m-2 p-4'>
            <div className='text-align-center'>Form</div>
            <div className='ml-10'>
                <Input lable='Enter Name' handleOnChange={handleOnNameChange} />
                <Input lable='Enter Collage Name' handleOnChange={handleOnCollageChange} />
                <TextArea heading='' subHeading='Write your complane' handleOnChange={handleOnComplainChange} />
                <button onClick={handleOnSubmit}>Submit</button>
            </div>

        </div>
    )
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        setFormInfo
    }, dispatch);
}
export default connect(null, mapDispatchToProps)(Form);

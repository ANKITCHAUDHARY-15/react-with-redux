import React from 'react'
import { connect } from 'react-redux';

function ShowFormInfo(props) {
    const { formInfo } = props;
    return (
        <div className='d-flex-bw m-4 p-4 border-1'>
            <div>
                <label>Name</label>
                <p>{formInfo.name}</p>
            </div>
            <div>
                <label>Collage</label>
                <p>{formInfo.collageName}</p>
            </div>
            <div>
                <label>Complain Details</label>
                <p>{formInfo.complain}</p>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    console.warn("Show form info redux state", state);
    const { formInfo } = state.formInfo;
    return {
        formInfo
    }

}
export default connect(mapStateToProps)(ShowFormInfo);

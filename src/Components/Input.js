import React from "react";

const subHeadingClasses = "";
const titleAreaClasses = " ";

const Input = ({
    lable = "subheading",
    placeholder = "Enter info",
    containerClasses = "",
    type = "text",
    name = "input-field",
    maxLength = 200,
    minLength = 10,
    handleOnChange
}) => {
    const handleOnInputChange = (event) => {
        console.log(event.target.value);
        if (!!handleOnChange) {
            handleOnChange(event.target.value);
        }
    }
    return (
        <div className={containerClasses}>
            <div className={subHeadingClasses}>{lable}</div>
            <div>
                <input
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    maxLength={maxLength}
                    minLength={minLength}
                    className={titleAreaClasses}
                    onChange={handleOnInputChange}
                ></input>
            </div>
        </div>
    );
};
export default Input;

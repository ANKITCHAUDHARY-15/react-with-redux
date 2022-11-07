import React from "react";

const defaultTextAreaClasses = "m-4 p-2 width-half";
const headingClasses = "m-4 p-2";
const subHeadingClasses = "m-4 p-2";

const TextArea = ({
    heading = "Heading",
    subHeading = "Subhedaing",
    dataTestingId = "text-area",
    maxLength = 200,
    minLength = 20,
    containerClasses = "",
    handleOnChange
}) => {
    const handleOnChangeEvent = (event) => {
        console.log(event.target.value);
        if (!!handleOnChange) {
            handleOnChange(event.target.value);
        }
    }
    return (
        <>
            <div className={containerClasses}>
                <h2 className={headingClasses}  >{heading}</h2>
                <h4 className={subHeadingClasses}  >{subHeading}</h4>
                <div>
                    <textarea
                        className={defaultTextAreaClasses}
                        maxLength={maxLength}
                        minLength={minLength}
                        data-testing-id={dataTestingId}
                        onChange={handleOnChangeEvent}
                    ></textarea>
                </div>
            </div>
        </>
    );
};

export default TextArea;

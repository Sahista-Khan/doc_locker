import React from 'react'
import './InputText.css';



// Hi this is tesing
function InputText(props) {
    console.log(props.valueText);
    return (
        <>
            <div className="subunit_name">
                <div className="imageLabel">
                    <img src={props.imgsrc} alt="" className="image" />
                    <label>{props.label}</label>

                </div>
                <input className="inputText"
                    name={props.label.toLowerCase()  }
                    type="text"
                    onChange={props.inputChange}
                    value={props.valueText}
                />
            </div>

            



        </>


    )
}


export default InputText

import React from 'react'
import './Predefined.css'

 function Predefined(props) {
    return (
        <>
           <div className="preDefined_tag">
                <div className="imagePreTag">
                    <img src={props.imgsrc} alt="" className="image" />
                    <label>{props.label}</label>

                </div>
                <input className="inputText"
                    name={props.label.toLowerCase().replace(" ",'')} onChange={props.inputChange} type="text"
                    value={props.valueText}
                />


            </div>
           
 
        </>
    )
}

export default Predefined

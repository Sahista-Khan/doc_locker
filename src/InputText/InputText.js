import React from 'react'
import './InputText.css';
import BUImg from '../assets/Image/bu-icon.png'
import DomainImg from '../assets/Image/domain-icon.jpg'
import OfferingImg from '../assets/Image/offering-icon.png'



function InputText() {
    return (

        <form className="main_Upload" >
            <div className="main_Row">
                <div className="subunit_name">
                    <div className="imageLabel">
                        <img src={BUImg} alt="" className="image" />
                        <label>BU</label>

                    </div>
                    <input className="inputText"
                        name="bu" type="text"
                    />
                </div>
                <div className="subunit_name">
                    <div className="imageLabel">
                        <img src={DomainImg} alt="" className="image" />
                        <label>Domain</label>

                    </div>
                    <input className="inputText"
                        name="domain" type="text"
                    />

                </div>

                <div className="subunit_name">
                    <div className="imageLabel">
                        <img src={OfferingImg} alt="" className="image" />
                        <label>Offering</label>

                    </div>
                    <input className="inputText"
                        name="offering" type="text"
                    />


                </div>

                <div className="subunit_name">
                    <div className="imageLabel">
                        <img src={OfferingImg} alt="" className="image" />
                        <label>Offering</label>

                    </div>
                    <input className="inputText"
                        name="offering" type="text"
                    />


                </div>

            </div>
            <div class="main_second">
                <div className="preDefined_tag">
                    <div className="imagePreTag">
                        <img src={OfferingImg} alt="" className="image" />
                        <label>Predefined Tag</label>

                    </div>
                    <input className="inputText"
                        name="offering" type="text"
                    />


                </div>
                <div className="subunit_name">
                    <div className="imageLabel">
                        <img src={OfferingImg} alt="" className="image" />
                        <label>Browse File</label>

                    </div>
                    <input className="inputText"
                        name="offering" type="text"
                    />


                </div>


            </div>
            <div className="openTag">
                <div className="openTag_Unit">
                    <div className="imageLabel">
                        <img src={OfferingImg} alt="" className="image" />
                        <label>Open Tag</label>

                    </div>
                    <input className="inputText"
                        name="offering" type="text"
                    />


                </div>
                <label>Attatchments</label>

            </div>
            <button className="button" type="submit">Submit</button>

        </form>

    )
}


export default InputText

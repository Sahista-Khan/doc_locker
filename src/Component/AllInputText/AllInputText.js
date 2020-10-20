import React from 'react'
import BUImg from '../../assets/Image/bu-icon.png'
import DomainImg from '../../assets/Image/domain-icon.jpg'
import OfferingImg from '../../assets/Image/offering-icon.png'
import ServiceImg from '../../assets/Image/Service.png'
import InputText from '../../InputText/InputText'


function AllInputText(props) {
    return (

        <div className="main_Row">
            <InputText label="BU" imgsrc={BUImg} inputChange={props.inputChange}
                valueText={props.valueTextAll.bu} />
            <InputText label="Domain" imgsrc={DomainImg} inputChange={props.inputChange}
                valueText={props.valueTextAll.domain} />
            <InputText label="Offering" imgsrc={OfferingImg} inputChange={props.inputChange}
                valueText={props.valueTextAll.offering} />
            <InputText label="Service" imgsrc={ServiceImg} inputChange={props.inputChange}
                valueText={props.valueTextAll.service} />


        </div>


    )
}

export default AllInputText

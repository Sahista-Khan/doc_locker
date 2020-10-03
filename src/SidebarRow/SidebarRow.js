import React from 'react'
import './SidebarRow.css'

function SidebarRow(props) {
    const{title,Icon}=props
    return (
        <div className="sidebarRow_title">
         <Icon className="iconImage"/>
       <p>{title} </p> 
        
        </div>
       
    )
}

export default SidebarRow

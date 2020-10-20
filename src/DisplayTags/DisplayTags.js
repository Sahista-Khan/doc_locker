import React from 'react'
import './DisplayTag.css'

function DisplayTags() {
    return (
        <div className="main_display">
            <div className="diplayTag">
               <span>Tag Cloud</span> 
                </div>
            <div className="recent_five">
                <span>Recent Upload</span>

               <marquee direction="up" scrolldelay="100" >
               <ul > 
                    
                    <li>Color.png</li>
                    <li>Color.png</li>
                    <li>Color.png</li>
                    <li>Color.png</li>
                    <li>Color.png</li>
                </ul>

               </marquee>
               
            </div>
        </div>

    )
}

export default DisplayTags

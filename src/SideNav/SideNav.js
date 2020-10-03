import React from 'react'
import './SideNav.css';
import SidebarRow from '../SidebarRow/SidebarRow';
import TestimonialsIcon from '@material-ui/icons/Apps';
import ClientReferenceIcon from '@material-ui/icons/SportsHandball';
import ClientVisitsIcon from '@material-ui/icons/Group';
import BlogIcon from '@material-ui/icons/SupervisedUserCircle';
import WinsIcon from '@material-ui/icons/DonutSmall';
import MarketIcon from '@material-ui/icons/TrendingUp';


const SideNav = () => {
    return (
        <div className="sideBar">
            <div className="sidecontent">
                <SidebarRow Icon={TestimonialsIcon} title="Testimonials" />
                <SidebarRow Icon={ClientReferenceIcon} title="Client References" />
                <SidebarRow Icon={ClientVisitsIcon} title="Client Visits" />
                <SidebarRow Icon={BlogIcon} title="Community Blogs" />
                <SidebarRow Icon={WinsIcon} title="Key Client Wins" />
                <SidebarRow Icon={MarketIcon} title="Market Trends" />
            </div>
        </div>
    )
}

export default SideNav

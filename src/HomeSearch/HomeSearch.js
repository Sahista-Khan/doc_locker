import { Table } from '@material-ui/core'
import React from 'react'
import CombineSearch from '../CombineSearch/CombineSearch'
import DisplayTags from '../DisplayTags/DisplayTags'
import SideNav from '../SideNav/SideNav'
import './HomeSearch.css'


function HomeSearch(props) {
    return (
        <div className="HomeSearch">
            <SideNav />
            <CombineSearch link={props}  />
            <DisplayTags/>
        </div>
        
    )
}

export default HomeSearch

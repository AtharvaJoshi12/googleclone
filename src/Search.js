import React from 'react'
import "./Search.css"
import SearchIcon from "@material-ui/icons/Search"
import MicIcon from "@material-ui/icons/Mic"
import { Button } from '@material-ui/core'
export default function Search() {
    const search =  e =>{
        e.preventDefault();
    } 
    
    return (
        <div className="Search">
            <div className="search_input">
                <SearchIcon className="search_inputIcon"/>
                <input/>
                <MicIcon/>
            </div>

            <div className="search_button">
                <Button onClick={search}variant='outlined'>Google Search</Button>
                <Button variant='outlined'>I'm Feeling Lucky</Button>
            </div>
        </div>
    )
}

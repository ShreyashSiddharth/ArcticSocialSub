import React from 'react'
import "./Widgets.css"
import InfoIcon from '@material-ui/icons/Info'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

function Widgets() {

    const newsArticle = (heading , subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
    return (
        <div className = "widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("This Clone Was Built By Shreyash Siddharth","Top-News 9000 readers")}
            {newsArticle("This is the Ultimate Flex of all time -  Linkedin founder","Technology -800 readers")}
            {newsArticle("Donate For The Cause - Backlight Keyboard For Shreyash Siddharth","Local-News 700 readers")}
            {newsArticle("Simran Will You Go Out with Me - Creator","Entertainment 200 readers")}
            {newsArticle("No More Albums - Kanye West","Music 100 readers")}
        </div>
    )
}

export default Widgets

import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AppsIcon from '@material-ui/icons/Apps';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from './features/userSlice';
import { auth } from './Firebase';
import { selectUser } from './features/userSlice';
function Header() {
    
    const dispatch = useDispatch();
    const logoutOfApp = () => {
        dispatch(logOut());
        auth.signOut();
    };
    return (
        <div className= 'Header'>
       
            <div className="header__left">
            <img src="https://i.ibb.co/xSBHR45/logo.jpg" alt="" />
            <div className="header__search">
                <SearchIcon/>
                <input type="text" placeholder = "Search" />
            </div>

            </div>
            <div className="header__right">
            <HeaderOptions Icon={HomeIcon} title = 'Home'/>
            <HeaderOptions Icon = {SupervisorAccountIcon} title ='My Network' />
            <HeaderOptions Icon = {BusinessCenterIcon} title ='Jobs' />
            <HeaderOptions Icon = {ChatIcon} title ='Messaging' />
            <HeaderOptions Icon = {NotificationsIcon} title ='Notifications' />
            <HeaderOptions avatar ={true} title = 'Sign Out'
            onClick ={logoutOfApp} />
            <HeaderOptions Icon = {AppsIcon} title ='Work' />
            </div>
        </div>
        
    )
}

export default Header

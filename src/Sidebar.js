import React from 'react';
import './Sidebar.css';
import { Avatar } from '@material-ui/core'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function Sidebar() {

    const user = useSelector(selectUser);

    return (
        <div className ='Sidebar'>
            <div className="Sidebar__top">
                <img src="https://wallpaperaccess.com/full/90278.jpg" alt="" />
                <Avatar src = {user.photoUrl} className = 'Sidebar__avatar' >{user.email[0]}</Avatar>
                <h2> {user.displayName}</h2>
                <h4>{user.email}</h4>

            </div>
            <div className="Sidebar__stats">
                <div className="Sidebar__stat">
               
                <p className="sidebar__statNumber">61</p>
                <p>Who's viewed your profile</p>
                </div>
                <div className="Sidebar__stat">
                <p className="sidebar__statNumber">297</p>
                <p>Views of your post</p>
                </div>
                
            </div>
            <div className="Sidebar__bottom">
            <p>See All Premium Features</p>
            </div>

        </div>
    )
}

export default Sidebar

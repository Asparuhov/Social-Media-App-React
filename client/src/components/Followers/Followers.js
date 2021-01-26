import React from 'react';
import classes from './Followers.module.css';
import Follower from './Follower';
import logo from '../../assets/profile.png';
const Followers = (props) => {
    return (
        <div className={classes.Followers}>
            <Follower src={logo} username='Krismata' />
            <Follower src={logo} username='Krismata' />
            <Follower src={logo} username='Krismata' />
            <Follower src={logo} username='Krismata' />
            <Follower src={logo} username='Krismata' />
            <Follower src={logo} username='Krismata' />
            <Follower src={logo} username='Krismata'/>
            
        </div>
    )
}


export default Followers
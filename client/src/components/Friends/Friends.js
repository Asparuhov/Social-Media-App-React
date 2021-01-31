import React from 'react';
import classes from './Friends.module.css';
import Friend from './Friend';
import logo from '../../assets/profile.png';
const Friends = (props) => {
    return (
        <div className={classes.Friends}>
            <Friend src={logo} username='Krismata' />
            <Friend src={logo} username='Krismata' />
            <Friend src={logo} username='Krismata' />
            <Friend src={logo} username='Krismata' />
            <Friend src={logo} username='Krismata' />
            <Friend src={logo} username='Krismata' />
            <Friend src={logo} username='Krismata'/>
            
        </div>
    )
}


export default Friends
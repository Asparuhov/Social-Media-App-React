import React from 'react';
import classes from './Followers.module.css';

const Followers = (props) => {
    return (
        <div className={classes.Followers}>
            <img src={props.src} alt='default' />
            <p>@{props.username}</p>
            <button>Unfollow</button>
        </div>
    )
}


export default Followers
import React from 'react'
import classes from './User.module.css';
export default function User(props) {
    return (
        <div className={classes.user}>
            <img src={props.search} alt='default' />
            <p>{props.username}</p>
            <button>Add</button>
        </div>
    )
}

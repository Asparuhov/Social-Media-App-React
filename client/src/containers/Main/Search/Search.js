import React, {useState, useEffect} from 'react'
import classes from './Search.module.css';
const Search = (props) => {
    return (
        <div className={classes.search}>
            <input
          placeholder="Username"
            />
            <button>Search</button>
        </div>
    )
}
export default Search;
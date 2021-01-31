import React, { useState, useEffect } from "react";
import classes from "./Search.module.css";
import User from "./User";
import logo from '../../../assets/profile.png';
const Search = (props) => {
  return (
    <>
      <div className={classes.search}>
        <input placeholder="Username" />
        <button>Search</button>
      </div>
      <div className={classes.users}>
        <User src={logo}/>
      </div>
    </>
  );
};
export default Search;

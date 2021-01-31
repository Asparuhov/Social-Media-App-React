import React, { useState, useEffect } from "react";
import classes from "./Search.module.css";
import User from "./User";
import logo from "../../../assets/profile.png";
import axios from "axios";
const Search = (props) => {
  let [searchInfo, setSearchInfo] = useState({
    username: "",
  });
  let [searchResults, setSearchResults] = useState();
  const search = () => {
    console.log(searchInfo);
    axios
      .post("search", searchInfo)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className={classes.search}>
        <input
          placeholder="Username"
          onChange={(e) =>
            setSearchInfo({ ...searchInfo, username: e.target.value })
          }
        />
        <button onClick={search}>Search</button>
      </div>
      <div className={classes.users}>
        <User src={logo} username="Krismata" />
      </div>
    </>
  );
};
export default Search;

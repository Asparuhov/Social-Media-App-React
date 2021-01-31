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
      .then((res) => {
        if (res.data !== "not found") {
          setSearchResults(res.data[0]);
        } else {
          setSearchResults("not found");
        }
      })
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
        {searchResults ? (
          <User src={logo} username={searchResults.username} />
        ) : null}
      </div>
    </>
  );
};
export default Search;

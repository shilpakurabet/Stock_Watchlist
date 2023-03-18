/** @format */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addStock, getAllData } from "../Redux/Action";
import { PUBLIC_IMAGES_PATH } from "../Redux/Constants";
import "./CSS/Home.css";

const Home = () => {
  const [focused, setFocused] = useState("");
  const [query, setQuery] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.Reducer.getAllData);
  const wishlistData = useSelector((state) => state.Reducer.addStock);
  function handleInputChange(event) {
    const { value } = event.target;
    if (value) {
      setQuery(value);
    } else setQuery("");
  }
  let modal = document.getElementById("modal");
  window.onclick = (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  };
  if (showPopup) {
    setTimeout(() => {
      setShowPopup(false);
    }, 1000);
  }
  useEffect(() => {
    dispatch(getAllData(query));
  }, [dispatch, query]);
  return (
    <div className="container">
      <header className="header">
        <div className="title">Home</div>
        <nav>
          <ul>
            <li>
              <Link to="/watch-list">
                <div className="wishMain">
                  <div class="circle">
                    <span class="number"> {wishlistData?.length} </span>
                  </div>
                  <span>Watchlist</span>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <form className="search-form">
        <input
          id="searchBox"
          type="text"
          placeholder="Search..."
          onFocus={() => setFocused({ name: true })}
          focused={focused.name?.toString()}
          className="SearchInput"
          value={query}
          onChange={handleInputChange}
        />
        <img
          src={PUBLIC_IMAGES_PATH + "/close.png"}
          alt=""
          className={`closeIcon ${query ? "active" : ""}`}
          onClick={() => {
            setQuery("");
            document.getElementById("searchBox").focus();
          }}
        />

        {query.length > 0 && (
          <div className="suggestions-container" id="modal">
            {data?.bestMatches?.map((item, index) => {
              return (
                <div className="suggestion" key={index}>
                  <div>
                    {" "}
                    {item["2. name"]} - score ({item["9. matchScore"]}){" "}
                  </div>{" "}
                  <button
                    className="addBtn"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(addStock(item, setShowPopup));
                    }}>
                    +
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </form>
      {showPopup && <div className="popup"> Item added successfully </div>}
    </div>
  );
};

export default Home;

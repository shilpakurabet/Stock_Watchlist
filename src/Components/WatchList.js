/** @format */

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteStock } from "../Redux/Action";
import { PUBLIC_IMAGES_PATH } from "../Redux/Constants";
import "./CSS/WatchList.css";
function WatchList() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.Reducer.addStock);
  const [watchList, setWatchList] = useState(data);

  useEffect(() => {
    setWatchList(data);
  }, [data]);

  return (
    <div>
      <header className="header">
        <div className="title">WatchList</div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
      </header>
      {watchList.length !== 0 ? (
        <div className="tableContainer">
          <table>
            <thead>
              <tr>
                <th>Company</th>
                <th>Region</th>
                <th>Currency</th>
                <th>MatchScore</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {watchList.map((item, index) => (
                <tr key={index}>
                  <td>{item["2. name"]}</td>
                  <td>{item["4. region"]}</td>
                  <td>{item["8. currency"]}</td>
                  <td>{item["9. matchScore"]}</td>
                  <td>
                    <button
                      onClick={() => dispatch(deleteStock(item["2. name"]))}
                      className="delete-btn">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="watch-list">
          <Link to="/">
            <img src={PUBLIC_IMAGES_PATH + "/empty.png"} alt="" />
            <p className="empty-message">
              Your watch list is empty. Add some stocks data to get started!
            </p>
          </Link>
        </div>
      )}
    </div>
  );
}

export default WatchList;

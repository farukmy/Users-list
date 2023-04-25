import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Card.css";

const Card = () => {
  const [userData, setUserData] = useState([]);

  const fetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      let users = res.data;
    });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="cards">
      {userData.map((data) => {
        return (
          <div className="card" key={data.id.value}>
            <div className="blob-top"></div>
            <span>M</span>
            <span>
              <h4>Name</h4>
            </span>
            <span>
              <h3>Age</h3>
            </span>
            <span>
              <h3>Country</h3>
            </span>
            <div className="blob bottom"></div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;

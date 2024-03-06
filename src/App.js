import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import { useEffect } from "react";
export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("https://dummyjson.com/products");
      setData(response.data.products);
    }
    fetchData();
  }, []);

  let show = data.slice(0,15).map((res, index) => (
    <div key={index} className="card all" style={{ width: "12rem", margin: "auto",fontSize: "2.8vh", marginTop: "1vh", }} >

      <img src={res.images[0]} className="card-img-top" alt="..." />
      <div className="card-body   ">
        <h5 className="card-title " style={{ textAlign: "center" }}> {res.title} </h5>
        <p className="card-text  " style={{ textAlign: "center" }}> {res.description} </p>
        <a href="/" className="btn btn-primary" style={{ marginLeft: "6vw" }}> ${res.price} </a>
      </div>
    </div>
  ));
  return <div className="parent">{show}</div>;
}


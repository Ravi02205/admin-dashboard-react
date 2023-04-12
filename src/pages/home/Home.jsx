import React from 'react';
import "./home.css";
import { Outlet } from 'react-router-dom';
import Sidebar from "../../componenets/sidebar/Sidebar";
import Topbar from "../../componenets/topbar/Topbar";
const Home = () => {
  return (
    <>
      <div>
        <Topbar />
        <div className="container">
          <Sidebar />
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Home

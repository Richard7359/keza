import React from 'react';
import Header from '../components/dashboard/Header';
import SideBar from "../components/dashboard/SideBar";
import "../css/dashboard.css";
import "../css/bootstrap.min.css";
import "../css/bootstrap-icons.css";
import "../css/style.css";

const page = () => {
  return (
    <div>
      <Header />
      <SideBar />
    </div>
  )
}

export default page

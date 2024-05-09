import React from 'react';
import Header from '../components/dashboard/Header';
import SideBar from "../components/dashboard/SideBar";
import "../css/dashboard.css";
import "../css/bootstrap.min.css";
import "../css/bootstrap-icons.css";
import "../css/style.css";

const DashboardWrapper = ({
    children,
  }: Readonly<{
    children?: React.ReactNode;
  }>) => {
  return (
    <div>
        <Header />
        <SideBar />
      <div className='sm:ml-[300px] sm:mt-[60px]'>{children}</div>
    </div>
  )
}

export default DashboardWrapper

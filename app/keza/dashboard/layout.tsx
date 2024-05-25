import React from "react";
import Header from "../../components/dashboard/Header";
import SideBar from "../../components/dashboard/SideBar";
import "../../css/dashboard.css";
import "../../css/bootstrap.min.css";
import "../../css/bootstrap-icons.css";
import "../../css/style.css";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb";
  

const DashboardWrapper = ({
  children,
}: Readonly<{
  children?: React.ReactNode;
}>) => {
  return (
    <div className="">
      <Header />
      <SideBar />
      <div className="sm:ml-[150px] sm:mt-[60px] ">     
        {children}
      </div>
    </div>
  );
};

export default DashboardWrapper;

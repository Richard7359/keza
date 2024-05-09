import React from "react";
import Header from "../components/dashboard/Header";
import SideBar from "../components/dashboard/SideBar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

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
      <div className="sm:ml-[300px] sm:mt-[10px] fixed">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/dashboard">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/components">Components</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="sm:ml-[300px] sm:mt-[60px]">{children}</div>
    </div>
  );
};

export default DashboardWrapper;

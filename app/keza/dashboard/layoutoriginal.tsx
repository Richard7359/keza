import React from "react";
import NavBar from "@/app/components/dashboard/NavBar";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb";
import SideBar1 from "@/app/components/dashboard/SideBar";
const DashboardWrapper = ({
  children,
}: Readonly<{
  children?: React.ReactNode;
}>) => {
  return (
    <div className="dashboard-bg flex">
      <div className="position-fixed">
        <SideBar1 />
      </div>
      <div className="w-[100%]">
        <NavBar />
        <div className="bg-white-dashboard dashboard-border px-3">
        <Breadcrumb className="h-[45px] flex">
          <BreadcrumbList className="w-full mb-0 bg-white">
            <BreadcrumbItem>
              <BreadcrumbLink href="/keza/dashboard">Home</BreadcrumbLink>
            </BreadcrumbItem>
            {/* <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/components">Components</BreadcrumbLink>
            </BreadcrumbItem> */}
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Add Course</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
         {children}
      </div>
    </div>
  );
};

export default DashboardWrapper;

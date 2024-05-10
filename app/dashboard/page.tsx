import DashboardWrapper from "./layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const page = () => {
  return (
    <DashboardWrapper>
      <div>
        <div className="">
          <Breadcrumb className="h-[45px] flex">
            <BreadcrumbList className="w-full mb-0 breadcumb_shadow bg-white">
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
      </div>
      <div className="flex justify-center">
     <div className="w-[98%] bg-white p-2 mt-2 rounded-sm uc">
     <div><p className="">Staff members</p></div>
      </div>
      </div>
    </DashboardWrapper>
  );
};

export default page;

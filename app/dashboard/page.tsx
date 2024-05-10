import DashboardWrapper from "./layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Input } from "@/components/ui/input";

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
          <div className="flex justify-between">
            {" "}
            <div className="flex font-medium text-sm">
              <p className="">Staff members</p>
              <p className="mx-2 bg-success text-[11px] text-white px-1 rounded-full font-medium">
                14
              </p>
            </div>
            <div>
              {/* <Input type="email" placeholder="Email"/> */}
              <input type="text" placeholder="search by names" className="text-sm uc py-1 px-2 rounded-md"/>
              <button></button>
            </div>
          </div>
        </div>
      </div>
    </DashboardWrapper>
  );
};

export default page;

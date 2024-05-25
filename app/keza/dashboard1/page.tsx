import SideBar1 from "@/app/components/dashboard/SideBar1";
import NavBar from "@/app/components/dashboard/NavBar";

const page = () => {
  return (
    <div className="dashboard-bg flex">
      <div className="position-fixed">
        <SideBar1 />
      </div>
      <div className="w-[100%]">
        <NavBar />
      </div>
    </div>
  );
};

export default page;

import { RiDashboardLine } from "react-icons/ri";

const page = () => {
  return (
    <div className="h-[100vh] w-[270px] bg-white-dashboard dashboard-border p-4">
      <div className="mb-8 font-bold">
        <p>Keza Education Future Lab</p>
      </div>
      <div>
        <ul>
          <li className="flex items-center gap-2 p-2 rounded-sm item-hover cursor-pointer">
            <RiDashboardLine className="text-2xl" />
            <p>Dashboard</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default page;

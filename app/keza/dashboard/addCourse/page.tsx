import { MdAddCard } from "react-icons/md";
import BasicCourseInfo from "@/app/components/dashboard/BasicCourseInfo";

const page = () => {
  return (
    <div className="flex justify-center text-sm">
      <div className="w-[98%] bg-white p-2 mt-2 rounded-sm uc grid  grid-cols-2">
        <div>
          <p className="font-bold my-3">Add Course</p>
          <BasicCourseInfo />
        </div>
        <div>
          <p className=" font-bold">Preview</p>
          <div className="pt-4">
            <p>Basic course information</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

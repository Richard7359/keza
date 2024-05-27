import { MdAddCard } from "react-icons/md";
import AddCourseForm from "@/app/components/dashboard/AddCourseForm";
import Preview from "@/app/components/courses/Preview";

const page = () => {
  return (
    <div className="flex justify-center text-sm">
      <div className="w-[98%] bg-white p-2 mt-2 rounded-sm uc grid  grid-cols-2">
        <div className="">
          <p className="font-bold mb-3">Add Course</p>
          <AddCourseForm />
        </div>
        <div className="">
          <p className=" font-bold">Preview</p>
          <div className="mt-2 ">
            <Preview />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

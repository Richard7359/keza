import { MdAddCard } from "react-icons/md";
import Link from "next/link";
import Button from "@/app/components/form/Button";

const Page = () => {
  return (
      <div className="flex justify-center">
        <div className="w-[98%] bg-white p-2 mt-2 rounded-sm uc">
          <div className="flex justify-between">
            {" "}
            <div className="flex font-medium text-sm">
              <p className="">Staff members</p>
              <p className="mx-2 text-[11px] text-black rounded-full font-medium">
                14
              </p>
            </div>
            <div>
              <input
                type="text"
                placeholder="search by names"
                className="text-sm uc py-1 px-2 rounded-md"
              />
              <Button className="mx-2">
                <p className="flex items-center gap-2">
                  <MdAddCard />
                  <Link href="/keza/dashboard/addCourse">Add Course</Link>
                </p>
              </Button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Page;

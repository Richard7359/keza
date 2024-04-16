import Image from "next/image";
import bootcamp from "../../images/bootcamp-image-2.jpg";
import TextIpunt from "@/app/components/input";

const page = () => {
  return (
    <div className="grid grid-cols-2 h-[100vh]">
      <div className="bg-green flex">
        <div className="bg-white w-full">
        {/* <div className="flex content-center justify-center rounded-l-md bg-white"> */}
          <div className="">
            {/* <h1 className="text-xl font-semibold">Welcome back</h1>
            <small className="text-gray-400 bg-green">
              Welcome back! Please enter your details
            </small> */}
                            <label className="text-sm">Email Address</label>
                <input type="text" className="w-full p-2 mt-2 rounded-md border border-black" />

            {/* <form className="">
              <div className="w-full">
                <label className="text-sm">Email Address</label>
                <input type="text" className="w-full p-2 mt-2 rounded-md border border-black" />
              </div>
              <div className="mb-3 flex flex-wrap content-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="mr-1 checked:bg-purple-700"
                />{" "}
                <label
                  htmlFor="remember"
                  className="mr-auto text-xs font-semibold"
                >
                  Remember for 30 days
                </label>
                <a href="#" className="text-xs font-semibold text-purple-700">
                  Forgot password?
                </a>
              </div>

              <div className="mb-3">
                <button className="mb-1.5 block w-full text-center text-white bg-purple-700 hover:bg-purple-900 px-2 py-1.5 rounded-md">
                  Sign in
                </button>
                <button className="flex flex-wrap justify-center w-full border border-gray-300 hover:border-gray-500 px-2 py-1.5 rounded-md">
                </button>
              </div>
            </form> */}

            {/* <div className="text-center">
              <span className="text-xs text-gray-400 font-semibold">
                Don&apos;t have account?
              </span>
              <a href="#" className="text-xs font-semibold text-purple-700">
                Sign up
              </a>
            </div> */}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Image
          src={bootcamp}
          alt="KEFL Logo image"
          loading="lazy"
          className="w-[98%] h-[98vh] object-cover cursor-pointer rounded-2xl"
        />
      </div>
    </div>
  );
};

export default page;

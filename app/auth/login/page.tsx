import Image from "next/image";
import bootcamp from "../../images/bootcamp-image-2.jpg";
import TextIpunt from "@/app/components/input";

const page = () => {
  return (
    <div className="grid grid-cols-2 h-[100vh]">
      <div className="bg-green flex justify-center items-center">
        <div className="flex flex-wrap content-center justify-center rounded-l-md bg-white  w-[80%]">
          <div className="">
            <h1 className="text-xl font-semibold">Welcome back</h1>
            <small className="text-gray-400">
              Welcome back! Please enter your details
            </small>

            <form className="mt-4">
              <div className="mb-3">
               <TextIpunt />
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
                  {/* <img className="w-5 mr-2" src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"> */}
                </button>
              </div>
            </form>

            <div className="text-center">
              <span className="text-xs text-gray-400 font-semibold">
                Don&apos;t have account?
              </span>
              <a href="#" className="text-xs font-semibold text-purple-700">
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Image
          src={bootcamp}
          alt="KEFL Logo image"
          className="w-[98%] h-[98vh] object-cover cursor-pointer rounded-2xl"
        />
      </div>
    </div>
  );
};

export default page;

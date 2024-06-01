import Image from "next/image";
import bootcamp from "../../../images/bootcamp-image-2.jpg";
import Google from "../../../images/google.png";
import Keza_logo from "../../../images/burgundy-logo.webp";

const page = () => {
  return (
    <div className="grid grid-cols-2 h-[100vh]">
      <div className="bg-green flex">
        <div className="bg-white w-full">
          <div className="">
            <div className="flex justify-center items-center h-[100vh]">
              <div className="w-[70%] ">
                <a href="/">
                <Image
                  src={Keza_logo}
                  alt="KEFL Logo image"
                  className="w-15 md:w-12 object-cover cursor-pointer mb-6"
                />
                </a>
                <h1 className="text-xl font-semibold">Welcome back</h1>
                <small className="text-gray-400 text-center">
                  So glad to have you here! Please enter your credentials!{" "}
                </small>
                <br />
                <button className="flex justify-center items-center mb-1.5 mt-8 w-full text-center text-black font-semibold text-sm border border-burgundy cursor-pointer  px-2 py-1.5 rounded-2xl">
                  <Image
                    src={Google}
                    alt="google image image"
                    className="w-[30px] h-[30px] rounded-lg bg-red-500"
                  />
                  continue with google
                </button>
                <label className="text-sm">Email Address</label>
                <input
                  type="text"
                  className="w-full p-2 mb-2 rounded-lg border border-black"
                />
                <label className="text-sm">Password</label>
                <input
                  type="text"
                  className="w-full p-2 mb-2 rounded-lg border border-black"
                />
                 <input
                  type="text"
                  className="w-full p-2 mb-2 rounded-lg border border-black"
                />
                <label className="text-sm">Confirm Password</label>
                <input
                  type="text"
                  className="w-full p-2 mb-2 rounded-lg border border-black"
                />
                <button className="mb-1.5 block w-full text-center text-white bg-burgundy cursor-pointer hover:bg-burgundy-light text-black px-2 py-1.5 rounded-2xl">
                  Sign up
                </button>
                <div className="text-center">
                  <span className="text-xs text-gray-400 font-semibold">
                    arleady have account?
                  </span>
                  {/* <a
                    href="/auth/signup"
                    className="text-xs font-semibold text-burgundy"
                  > */}
                  <a
                    href="/auth/login"
                    className="text-xs font-semibold text-burgundy"
                  >
                    Login
                  </a>
                </div>
              </div>
            </div>
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

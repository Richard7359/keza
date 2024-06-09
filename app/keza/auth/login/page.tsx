// import Image from "next/image";
import bootcamp from "../../../images/bootcamp-image-2.jpg";
// import Google from "../../../images/google.png";
import Keza_logo from "../../../images/burgundy-logo.webp";

// const page = () => {
//   return (
//     <div className="grid grid-cols-2 h-[100vh]">
//       <div className="bg-green flex">
//         <div className="bg-white w-full">
//           <div className="">
//             <div className="flex justify-center items-center h-[100vh]">
//               <div className="w-[70%] ">
//                 <a href="/">
//                 <Image
//                   src={Keza_logo}
//                   alt="KEFL Logo image"
//                   className="w-15 md:w-12 object-cover cursor-pointer mb-6"
//                 />
//                 </a>
//                 <h1 className="text-xl font-semibold">Welcome back</h1>
//                 <small className="text-gray-400 text-center">
//                   So glad to have you here! Please enter your credentials!{" "}
//                 </small>
//                 <br />
//                 <button className="flex justify-center items-center mb-1.5 mt-8 w-full text-center text-black font-semibold text-sm border border-burgundy cursor-pointer  px-2 py-1.5 rounded-2xl">
//                   <Image
//                     src={Google}
//                     alt="google image image"
//                     className="w-[30px] h-[30px] rounded-lg bg-red-500"
//                   />
//                   continue with google
//                 </button>
//                 <label className="text-sm">Email Address</label>
//                 <input
//                   type="text"
//                   className="w-full p-2 mb-2 border border-black rounded-full"
//                 />
//                 <label className="text-sm">Password</label>
//                 <input
//                   type="text"
//                   className="w-full p-2 mb-2 rounded-lg border border-black"
//                 />
//                 <div className="mb-3 flex flex-wrap content-center">
//                   <input
//                     id="remember"
//                     type="checkbox"
//                     className="mr-1 checked:text-burgundy"
//                   />{" "}
//                   <label
//                     htmlFor="remember"
//                     className="mr-auto text-xs font-semibold"
//                   >
//                     Remember for 30 days
//                   </label>
//                   <a href="#" className="text-xs font-semibold text-burgundy">
//                     Forgot password?
//                   </a>
//                 </div>
//                 <button className="mb-1.5 block w-full text-center text-white bg-burgundy cursor-pointer hover:bg-burgundy-light text-black px-2 py-1.5 rounded-2xl">
//                   Login
//                 </button>
//                 <div className="text-center">
//                   <span className="text-xs text-gray-400 font-semibold">
//                     Don&apos;t have account?
//                   </span>
//                   {/* <a
//                     href="/auth/signup"
//                     className="text-xs font-semibold text-burgundy"
//                   > */}
//                   <a
//                     href="/auth/signup"
//                     className="text-xs font-semibold text-burgundy"
//                   >
//                     Sign up
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="flex items-center justify-center">
//         <Image
//           src={bootcamp}
//           alt="KEFL Logo image"
//           loading="lazy"
//           className="w-[98%] h-[98vh] object-cover cursor-pointer rounded-2xl"
//         />
//       </div>
//     </div>
//   );
// };

// export default page;
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FcGoogle } from "react-icons/fc";

function Page() {

  return (
    <div className="h-[100vh] w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div>
            <div className="flex items-center gap-3">
              <a href="/">
                <Image
                  src={Keza_logo}
                  alt="KEFL Logo image"
                  className="w-15 md:w-12 object-cover cursor-pointer"
                />
              </a>
              <h1 className="text-xl font-semibold">Welcome back</h1>
            </div>
            <small className="text-gray-400 text-center">
              So glad to have you here! Please enter your credentials!{" "}
            </small>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="youremail@keza.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="#"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
            <Button variant="outline" className="w-full gap-2">
              <FcGoogle /> Login with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="#" className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-muted lg:block">
        <Image
          src={bootcamp}
          alt="KEFL Logo image"
          loading="lazy"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}

export default Page;

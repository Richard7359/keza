import bootcamp from "../../../images/bootcamp-image-2.jpg";
import Keza_logo from "../../../images/burgundy-logo.webp";
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

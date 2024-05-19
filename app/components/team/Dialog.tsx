import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MdOutlineReadMore } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

export function TeamDialog({
  trigger,
  description,
  image,
  names,
  media,
}: {
  trigger: string;
  description: string;
  image: any;
  names: string;
  media: { icon: any; url: string }[];
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <p className="cursor-pointer text-gray-700 text-sm font-light">
          {trigger.length > 190
            ? `${trigger.substring(0, Math.min(trigger.length, 190))}........`
            : trigger}
        </p>
      </DialogTrigger>
      <DialogContent className="sm:flex w-[80%]">
        <div
          className=" 
        flex justify-center items-center w-[32%]"
        >
          <Image
            src={image}
            alt={names}
            className="w-full h-[52vh] object-cover rounded-lg bg-image"
          />
        </div>
        <div className="m-4 w-[63%]">
          <p className="font-bold text-lg">{names}</p>
          <p>{description}</p>
        </div>
        <div className="w-[5%] mt-4 flex flex-col items-center">
          {media.map((social) => (
            <div
              key={social.url}
              className="bg-burgundy text-white hover:text-slate-300 p-2 w-8 h-8 rounded-full flex justify-center items-center cursor-pointer mb-3"
            >
              <Link href={social.url} target="_blank" rel="noopener noreferrer">
                {social.icon}
              </Link>{" "}
            </div>
          ))}
        </div>
        {/* <DialogContent className="sm:max-w-[425px]"> */}
        {/* <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&lsquo;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
}

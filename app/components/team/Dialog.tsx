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
import { TbArrowsMoveVertical } from "react-icons/tb";

export function TeamDialog({
  trigger,
  description,
  image,
  names,
  media,
  position,
}: {
  trigger: string;
  description: string;
  image: any;
  names: string;
  media: { icon: any; url: string }[];
  position: string;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <p className="cursor-pointer text-gray-700 text-sm font-light">
          {trigger.length > 190
            ? position.length > 38 ?  `${trigger.substring(0, Math.min(trigger.length, 190))}.....` : `${trigger.substring(0, Math.min(trigger.length, 230))}.....` 
            : trigger}
        </p>
      </DialogTrigger>
      <DialogContent className="w-[95%] sm:flex sm:w-[80%] h-[95vh] sm:h-[54vh]  overflow-auto p-2 sm:p-3">
      {/* <DialogContent className="w-[95%] sm:flex sm:w-[80%] sm:p-3"> */}
        <div
          className=" 
        flex justify-center items-center w-full sm:w-[32%]"
        >
          <Image
            src={image}
            alt={names}
            className="w-[90%] sm:w-full h-[32vh] sm:h-[52vh] object-cover rounded-lg bg-image"
          />
        </div>
        <div className="m-0 text-sm sm:m-4 sm:w-[63%]">
          <div className="flex items-center sm:gap-3">
            <p className="font-bold text-lg">{names}</p>{" "}
            <TbArrowsMoveVertical />
            <p className="text-gray-600 font-bold tracking-wider text-xs uppercase">
              {position}
            </p>
          </div>
          <p>{description}</p>
        </div>
        <div className="sm:w-[5%] mt-4 flex gap-2 sm:gap-0 sm:flex-col items-center">
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
      </DialogContent>
    </Dialog>
  );
}

// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { MdOutlineReadMore } from "react-icons/md";
// import Image from "next/image";
// import Link from "next/link";
// import { TbArrowsMoveVertical } from "react-icons/tb";

// export function TeamDialog({
//   trigger,
//   description,
//   image,
//   names,
//   media,
//   position,
// }: {
//   trigger: string;
//   description: string;
//   image: any;
//   names: string;
//   media: { icon: any; url: string }[];
//   position: string;
// }) {
//   return (
//     <Dialog>
//       <DialogTrigger asChild>
//         <p className="cursor-pointer text-gray-700 text-sm font-light">
//           {trigger.length > 190
//             ? position.length > 38 ?  `${trigger.substring(0, Math.min(trigger.length, 190))}.....` : `${trigger.substring(0, Math.min(trigger.length, 230))}.....` 
//             : trigger}
//         </p>
//       </DialogTrigger>
//       <DialogContent className="sm:flex w-[80%] p-3">
//         <div
//           className=" 
//         flex justify-center items-center w-[32%]"
//         >
//           <Image
//             src={image}
//             alt={names}
//             className="w-full h-[52vh] object-cover rounded-lg bg-image"
//           />
//         </div>
//         <div className="m-4 w-[63%]">
//           <div className="flex items-center gap-3">
//             <p className="font-bold text-lg">{names}</p>{" "}
//             <TbArrowsMoveVertical />
//             <p className="text-gray-600 font-bold tracking-wider text-xs uppercase">
//               {position}
//             </p>
//           </div>
//           <p>{description}</p>
//         </div>
//         <div className="w-[5%] mt-4 flex flex-col items-center">
//           {media.map((social) => (
//             <div
//               key={social.url}
//               className="bg-burgundy text-white hover:text-slate-300 p-2 w-8 h-8 rounded-full flex justify-center items-center cursor-pointer mb-3"
//             >
//               <Link href={social.url} target="_blank" rel="noopener noreferrer">
//                 {social.icon}
//               </Link>{" "}
//             </div>
//           ))}
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// }

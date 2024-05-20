import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import image from "../../images/ai2.png";

const ViewMaterials = () => {
  return (
    <Dialog >
      <DialogTrigger disabled={true} className="border border-level4 font-semibold bg-level4 bg-opacity-5 hover:border-level4 hover:bg-level4 hover:text-white rounded-full text-sm px-4 py-1">
        View materials
      </DialogTrigger>
      <DialogContent>
        <div className="grid grid-cols-3">
          <div className="bg-green">
            <Image
              src={image}
              alt="KEFL Logo image"
              className="w-[130px] h-[130px] object-cover cursor-pointer rounded-[5px] border-custom hover:w-[170px] hover:h-[170px] hover:scale-105 transition duration-500 ease-in-out"
            />
          </div>
          <div>
            <Image
              src={image}
              alt="KEFL Logo image"
              className="w-[130px] h-[130px] object-cover cursor-pointer rounded-[5px] border-custom hover:w-[170px] hover:h-[170px] hover:scale-105 transition duration-500 ease-in-out"
            />
          </div>
        </div>
        {/* <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader> */}
      </DialogContent>
    </Dialog>
  );
};

export default ViewMaterials;

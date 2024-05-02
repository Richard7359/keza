import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ViewMaterials = () => {
  return (
    <Dialog>
      <DialogTrigger className="border border-level4 font-semibold bg-level4 bg-opacity-5 hover:border-level4 hover:bg-level4 hover:text-white rounded-full text-sm px-4 py-1">View materials</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ViewMaterials;

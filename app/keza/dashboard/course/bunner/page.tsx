"use client";

import { ChangeEvent, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TbTrashX } from "react-icons/tb";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GrCloudUpload } from "react-icons/gr";
import { trpc } from "@/app/_trpc/client";
import { toast } from "sonner";
import useGetAllBunners from "@/app/hooks/bunner/useGetBunner";

const FormSchema = z.object({
  title: z.string(),
});

function Page() {
  const {
    handleSubmit,
    register,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
    },
  });

 const {refetch} = useGetAllBunners();

  const { mutate, isLoading } = trpc.addBunner.addBunner.useMutation({
    onSuccess: () => {
      toast.success(`Bunner added successfuly!!`, {
        position: "top-right",
      });
      setPdf(null);
      refetch();
    },
    onError: (error: any) => {
      console.log("Error", error);
      alert("Error adding Bunner");
    },
  });

  const [pdf, setPdf] = useState<File | null>(null);

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    if (!pdf) {
      alert("Please select a pdf file");
      return;
    }
    const formData = new FormData();
    formData.append("file", pdf);
    formData.append("folder", "courses");

    try {
      const response = await fetch("/api/s3-upload", {
        method: "POST",
        body: formData
      });
      const uploadedPdf = await response.json();
      mutate({description: data.title, pdf: uploadedPdf.fileName})
      console.log(uploadedPdf.fileName);
      console.log(data);
    } catch (error) {
      console.error(error);
      alert("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full h-full flex justify-center items-center"
    >
      <Card className="w-[60%]">
        <CardHeader>
          <CardTitle className="text-2xl">Bunner Section</CardTitle>
          <CardDescription>
            Enter the description of the bunner and select pdf which describe
            the bunner.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Description</Label>
            <Input id="title" type="text" placeholder="" {...register("title")} required />
          </div>
          <div className="grid gap-2">
            {!pdf?.name ? (
              <label className="opacity-1  text-xs font-bold hover:cursor-pointer">
                Attach file
                <input
                  type="file"
                  accept="application/pdf"
                  hidden={true}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    console.log("selected pdf file");
                    console.log(e.target.files![0]);
                    setPdf(e.target.files![0]);
                  }}
                />
                <div className="mt-2 flex h-52 flex-col items-center justify-center rounded-xl border border-dashed py-8 input_bg">
                  <span className="opacity-1 hover:shadow:sm flex h-20 w-20 items-center justify-center rounded-full bg-white">
                    <GrCloudUpload
                      size={34}
                      className="text-primary-500 text-deepSkyBlue"
                      strokeLinejoin="miter"
                    />
                  </span>
                  <p className="mt-2 text-xs">
                    Drop your files here or
                    <span className="cursor-pointer text-deepSkyBlue underline">
                      {" "}
                      browse
                    </span>
                  </p>
                  <p className="mt-2 text-xsm text_gray-400">
                    Max file size 10MB, PDF, JPG,PNG or JPEG file supported.
                  </p>
                </div>
              </label>
            ) : (
              <div className="mt-1 flex flex-col  gap-2 ">
                <label className="opacity-1 text-xs font-bold capitalize">
                  Selected file
                </label>
                <div className="flex items-center justify-center gap-7 h-52">
                  <span className="flex cursor-pointer text-sky-600 font-bold text-sm">
                    {pdf?.name}
                  </span>
                  <button
                    onClick={() => setPdf(null)}
                    className="flex items-center justify-center gap-2 rounded-lg px-[5px] py-1 text-xs font-semibold"
                    type="button"
                  >
                    <TbTrashX
                      size={20}
                      className="text-primary text-red"
                      strokeLinejoin="miter"
                    />
                  </button>
                </div>
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" type="submit">
            {Save Bunner}
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}

export default Page;

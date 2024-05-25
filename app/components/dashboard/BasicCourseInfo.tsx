"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Button from "../form/Button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { TbPlayerTrackNext } from "react-icons/tb";
import { useState } from "react";

const FormSchema = z.object({
  title: z.string(),
});

function BasicCourseInfo() {
  const {handleSubmit, register, formState : {errors}} = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
    },
  });

  const [error , setError] = useState<string>("");

  function onSubmit(data: z.infer<typeof FormSchema>) {
    if(data.title === ""){
      setError("Title is required");
  }
    setError("");
    console.log(data);
}

  return (
      <form onSubmit={handleSubmit(onSubmit)} className="w-2/3 ">
        <div className="flex flex-col gap-2 ">
          <label htmlFor="title" className="text-sm font-medium">
            Title
          </label>
          <input
            type="text"
            id="title"
            placeholder="Enter the course title"
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none"
            {...register("title")}
          />
        </div>
        {error ? <p className="text-red text-sm">{error}</p> : null}
        <div className="flex justify-end mt-2">
          <Button type="submit" className="">
            <p className="flex items-center gap-2 ">
              <p>Next</p>
              <TbPlayerTrackNext />
            </p>
          </Button>
        </div>
      </form>
  );
}

export default BasicCourseInfo;

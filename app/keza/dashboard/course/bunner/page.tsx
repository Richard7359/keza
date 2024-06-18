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

import Image from "next/image";
import Link from "next/link";
import {
  File,
  Home,
  LineChart,
  ListFilter,
  MoreHorizontal,
  Package,
  Package2,
  PanelLeft,
  PlusCircle,
  Search,
  Settings,
  ShoppingCart,
  Users2,
} from "lucide-react";

import ichigo from "../../../images/TrafficLight/inner.jpeg";

import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FiDatabase } from "react-icons/fi";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import useGetAllUnArchivedCourse from "@/app/hooks/courses/useGetAllUnArchivedCourse";
import { useEffect } from "react";

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

  function formatDate(isoDateString: string) {
    const date = new Date(isoDateString);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${year}-${month}-${day} ${hours}:${minutes} AM`;
  }

  const { refetch, data } = useGetAllBunners();
  const [isLoading, setIsLoading] = useState(false);

  const { mutate } = trpc.addBunner.addBunner.useMutation({
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
    setIsLoading(true);
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
        body: formData,
      });
      const uploadedPdf = await response.json();
      mutate({ description: data.title, pdf: uploadedPdf.fileName });
      console.log(uploadedPdf.fileName);
      console.log(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
      alert("error");
    }
  }

  return (
    <div>
      <div className="flex w-full flex-col bg-muted/40">
        <div className="flex flex-col sm:gap-4 sm:py-4 ">
          <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
            <Tabs defaultValue="all">
              <div className="flex items-center">
                <div className="ml-auto flex items-center gap-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm" className="h-8 gap-1">
                        <ListFilter className="h-3.5 w-3.5" />
                        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                          Filter
                        </span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuCheckboxItem checked>
                        Active
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>
                        Archived
                      </DropdownMenuCheckboxItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <Button size="sm" variant="outline" className="h-8 gap-1">
                    <File className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                      Export
                    </span>
                  </Button>
                  <Link href="/keza/dashboard/course/addCourse">
                    <Button size="sm" className="h-8 gap-1">
                      <PlusCircle className="h-3.5 w-3.5" />
                      <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        Add Course
                      </span>
                    </Button>
                  </Link>
                </div>
              </div>
              <TabsContent value="all">
                <Card x-chunk="dashboard-06-chunk-0">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-start gap-3">
                      Courses{" "}
                      <Badge className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                        3
                      </Badge>
                    </CardTitle>
                    <CardDescription>
                      Manage your Courses and view their history.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="hidden w-[180px] sm:table-cell">
                            <span className="sr-only">Image</span>
                          </TableHead>
                          <TableHead>Title</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="hidden md:table-cell">
                            Created by
                          </TableHead>
                          <TableHead className="hidden md:table-cell">
                            Created at
                          </TableHead>
                          <TableHead className="hidden md:table-cell">
                            Action
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      {/* {data && !isLoading ? (
                        data.courses?.length > 0 ? (
                          <TableBody>
                            {data.courses?.map((course) => {
                              return (
                                <TableRow key={course.id}>
                                  <TableCell className="hidden sm:table-cell">
                                    <Image
                                      alt="course image"
                                      className="aspect-square rounded-md object-contain w-[150px] h-[100px]"
                                      src={
                                        process.env.NEXT_PUBLIC_IMAGE_URL +
                                        course.CourseDetails?.basicInfo
                                          ?.attachment
                                      }
                                      height="500"
                                      width="500"
                                    />
                                  </TableCell>
                                  <TableCell className="font-medium">
                                    {course.CourseDetails?.basicInfo?.title}
                                  </TableCell>
                                  <TableCell>
                                    {!course?.isArchived ? (
                                      <Badge className="text-green easy-bg">
                                        active
                                      </Badge>
                                    ) : (
                                      <Badge className="medium medium-bg">
                                        archived
                                      </Badge>
                                    )}
                                  </TableCell>
                                  <TableCell className="hidden md:table-cell">
                                    {
                                      course.CourseDetails?.basicInfo
                                        ?.uploadedBy
                                    }
                                  </TableCell>
                                  <TableCell className="hidden md:table-cell">
                                    {formatDate(course?.CreatedOn)}
                                  </TableCell>
                                  <TableCell>
                                    {!isArchiving ? (
                                      <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                          <Button
                                            aria-haspopup="true"
                                            size="icon"
                                            variant="ghost"
                                          >
                                            <MoreHorizontal className="h-4 w-4" />
                                            <span className="sr-only">
                                              Toggle menu
                                            </span>
                                          </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                          <DropdownMenuItem
                                            onClick={() =>
                                              mutate({
                                                id: course?.id,
                                                status: !course?.isArchived,
                                              })
                                            }
                                          >
                                            {!course?.isArchived
                                              ? "Archive"
                                              : "UnArchive"}
                                          </DropdownMenuItem>
                                          <DropdownMenuItem>
                                            Edit
                                          </DropdownMenuItem>
                                        </DropdownMenuContent>
                                      </DropdownMenu>
                                    ) : (
                                      <div className="loader"></div>
                                    )}
                                  </TableCell>
                                </TableRow>
                              );
                            })}
                          </TableBody>
                        ) : (
                          ""
                        )
                      ) : (
                        ""
                      )} */}
                      {data && !isLoading ? (
                        data.bunner?.length > 0 ? (
                          <TableBody>
                            <TableRow key={data.bunner[data.bunner.length - 1]?.id}>
                              <TableCell className="font-medium">
                                {data.bunner[data.bunner.length - 1]?.description}
                              </TableCell>
                              <TableCell>
                                {!data.bunner[data.bunner.length - 1]?.isActive ? (
                                  <Badge className="text-green easy-bg">
                                    active
                                  </Badge>
                                ) : (
                                  <Badge className="medium medium-bg">
                                    archived
                                  </Badge>
                                )}
                              </TableCell>
                              <TableCell className="hidden md:table-cell">
                                {formatDate(data.bunner[data.bunner.length - 1]?.id)}
                              </TableCell>
                              <TableCell>
                                {!isLoading ? (
                                  <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                      <Button
                                        aria-haspopup="true"
                                        size="icon"
                                        variant="ghost"
                                      >
                                        <MoreHorizontal className="h-4 w-4" />
                                        <span className="sr-only">
                                          Toggle menu
                                        </span>
                                      </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                      {/* <DropdownMenuItem
                                        onClick={() =>
                                          mutate({
                                            id: course?.id,
                                            status: !course?.isArchived,
                                          })
                                        }
                                      >
                                        {!course?.isArchived
                                          ? "Archive"
                                          : "UnArchive"}
                                      </DropdownMenuItem> */}
                                      <DropdownMenuItem>Edit</DropdownMenuItem>
                                    </DropdownMenuContent>
                                  </DropdownMenu>
                                ) : (
                                  <div className="loader"></div>
                                )}
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        ) : (
                          ""
                        )
                      ) : (
                        ""
                      )}
                    </Table>
                  </CardContent>
                  <CardFooter>
                    <div className="w-full flex justify-center">
                      {data && !isLoading ? (
                        data.courses?.length == 0 ? (
                          <div className="flex items-center gap-1">
                            <FiDatabase /> No courses available
                          </div>
                        ) : (
                          ""
                        )
                      ) : isLoading ? (
                        "Loading..."
                      ) : (
                        ""
                      )}
                    </div>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex justify-center items-center"
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
              <Input
                id="title"
                type="text"
                placeholder=""
                {...register("title")}
                required
              />
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
              {isLoading ? "adding Bunner...." : "Save Bunner"}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}

export default Page;

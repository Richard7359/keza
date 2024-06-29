"use client";

import Image from "next/image";
import Link from "next/link";
import {
  File,
  ListFilter,
  MoreHorizontal,
  PlusCircle,
} from "lucide-react";

import ichigo from "../../../images/TrafficLight/inner.jpeg";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { toast } from "sonner";
import { trpc } from "@/app/_trpc/client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import useGetAllUnArchivedCourse from "@/app/hooks/courses/useGetAllUnArchivedCourse";
import { useEffect } from "react";

function Page() {
  const { data, isLoading, refetch } = useGetAllUnArchivedCourse();
  const { mutate , isLoading : isArchiving} = trpc.archiveCourse.archiveCourse.useMutation({
    onSuccess: () => {
        refetch();
        toast.success(`Course added successfuly!!`, {
            position: "top-right",
          });
    },
    onError: (error) => {
      console.log("error : ", error);
    },
  });

  useEffect(() => {
    console.log("all data : ", data);
  }, [data]);

  function formatDate(isoDateString: string) {
    const date = new Date(isoDateString);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${year}-${month}-${day} ${hours}:${minutes} AM`;
  }

  return (
    <div className="flex h-full w-full flex-col bg-muted/40">
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
                    {data && !isLoading ? (
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
                                  {course.CourseDetails?.basicInfo?.uploadedBy}
                                </TableCell>
                                <TableCell className="hidden md:table-cell">
                                  {formatDate(course?.CreatedOn)}
                                </TableCell>
                                <TableCell>
                                  {!isArchiving ? <DropdownMenu>
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
                                      <DropdownMenuItem onClick={() => mutate({id: course?.id, status: !course?.isArchived})}>
                                        {!course?.isArchived
                                          ? "Archive"
                                          : "UnArchive"}
                                      </DropdownMenuItem>
                                      <DropdownMenuItem>
                                        Edit
                                      </DropdownMenuItem>
                                    </DropdownMenuContent>
                                  </DropdownMenu> : <div className="loader"></div>}
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
  );
}

export default Page;

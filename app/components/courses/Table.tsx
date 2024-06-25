import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function CourseTable({activity} : {activity : {activitie: string, tasks: string[]}[]}) {
  return (
    <Table className="border-custom rounded-sm">
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
      <TableHeader>
        <TableRow>
          <TableHead className="w-[40%] font-bold">ACTIVITIES</TableHead>
          <TableHead className="w-[60%] font-bold">Tasks</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="border border-custom">
        {activity.map((course) => (
          <TableRow key={course.activitie}>
            <TableCell>
              <ul>
                <li>● {course.activitie}</li>
              </ul>
            </TableCell>
            <TableCell>
              {" "}
              <ul>
                {course.tasks.map((task, index) => <li key={index}>{index + 1}. {task}</li>)}
              </ul>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default CourseTable;

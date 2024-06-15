import { trpc } from '../../_trpc/client';
import { courseDataTypes } from '@/app/store/courseData';

interface Attachment {
    position: string;
    file: string;
  }
  
  interface Step {
    title: string;
    step: number;
    template: string;
    attachment: Attachment[];
  }
  
  interface BasicInfo {
    title: string;
    level: string;
    complexity: number;
    uploadedBy: string;
    attachment: string;
  }
  
  interface CourseDetails {
    basicInfo: BasicInfo;
    steps: Step[];
  }
  
  interface ResponseItem {
    id: number;
    userId: string;
    courseDetails: CourseDetails;
    createdAt: string;
    updatedAt: string;
  }

const useGetCourse = () => {
  const data = trpc.getCourse.getCourse.useQuery();

  // const responseItems: ResponseItem[] = data.data?.courses.map(course => ({
  //   id: course.id,
  //   userId: course.UserId,
  //   courseDetails: {
  //     basicInfo: {
  //       title: course.CourseDetails.title,
  //       level: course.CourseDetails.level,
  //       complexity: course.CourseDetails.complexity,
  //       uploadedBy: course.CourseDetails.uploadedBy,
  //       attachment: course.CourseDetails.attachment,
  //     },
  //     steps: course.CourseDetails.steps.map((step : any) => ({
  //       title: step.template,
  //       step: step.step,
  //       template: step.template,
  //       attachment: step.attachment.map((att : any) => ({ position: att.position, file: att.file })),
  //     })),
  //   },
  //   createdAt: course.CreatedOn,
  //   updatedAt: course.UpdatedOn,
  // })) || [];

  return { ...data };
};

export default useGetCourse

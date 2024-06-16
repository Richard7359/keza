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

  return { ...data };
};

export default useGetCourse

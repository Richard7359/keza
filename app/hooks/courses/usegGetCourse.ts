import { trpc } from '../../_trpc/client';
import { courseDataTypes } from '@/app/store/courseData';

const useGetCourse = () => {
 const data = trpc.getCourse.getCourse.useQuery();
 return { ...data }
}

export default useGetCourse

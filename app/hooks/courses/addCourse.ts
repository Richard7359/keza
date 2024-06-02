import { trpc } from '../../_trpc/client';
import { courseDataTypes } from '@/app/store/courseData';

const useAddCourse = () => {
 const data = trpc.addCourse.addCourse.useMutation();
 return { ...data }
}

export default useAddCourse

import { trpc } from '../../_trpc/client';


const useGetAllBunners = () => {
  const data = trpc.getAllBunners.getAllBunners.useQuery();

  return { ...data };
};

export default useGetAllBunners

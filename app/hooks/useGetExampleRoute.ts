import { trpc } from '../_trpc/client'

const useGetExampleRoute = () => {
//  const data = trpc.exampleRouter.sayHello.useQuery();
 const data = trpc.exampleRouter.getUsers.useQuery();
 return { ...data }
}

export default useGetExampleRoute

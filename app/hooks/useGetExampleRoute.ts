import { trpc } from '../_trpc/client'

const useGetExampleRoute = () => {
 const data = trpc.exampleRouter.sayHello.useQuery();
 return { ...data }
}

export default useGetExampleRoute

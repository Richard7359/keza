import { trpc } from '../_trpc/client'

const useAddUser = () => {
 const data = trpc.exampleRouter.addUser.useMutation();
 return { ...data }
}

export default useAddUser


import Image from "next/image";
import bootcamp from "../../images/bootcamp-image-2.jpg"

const page = () => {
  return (
    <div className='grid grid-cols-2 h-[100vh]'>
      <div className='flex items-center justify-center'>
      <Image
          src={bootcamp}
          alt="KEFL Logo image"
          className="w-[98%] h-[98%] object-cover cursor-pointer rounded-2xl"
        />
      </div>
      <div className='bg-green'>
        
      </div>
    </div>
  )
}

export default page

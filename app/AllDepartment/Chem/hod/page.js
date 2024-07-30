import Image from "next/image"
import BackDepartment from "../../../../components/BackDepartment"

function Page(){
    return (
      <div className=" flex flex-col p-10 max-sm:p-2 h-screen">
        <div className="flex flex-col mb-16">
          <div>
            <p className="text-red-900 text-3xl max-sm:text-2xl font-bold">
              HOD
            </p>
          </div>
          <div className="mt-2">
            <p className="text-gray-500 text-xl font-semibold">Chemistry</p>
          </div>
          <BackDepartment navigate={'/AllDepartment/Chem'} />
        </div>
        {/* section 1 */}
        <div className="w-full grid grid-cols-5 border shadow-lg shadow-slate-500 h-[50%]">
          <div className="col-span-2 flex justify-center items-center  rounded-lg">
            <Image
              src={
                'https://drive.google.com/thumbnail?authuser=0&sz=w320&id=1JDx-0LS5pxsMcYpcyAFBbq3If3Kfubcg'
              }
              width={350}
              height={350}
              alt="Loading.."
              className="rounded-lg object-contain"
            />
          </div>
          <div className="col-span-3 p-4">
            <div>
              <div className="flex justify-center mb-10 text-2xl max-md:text-md max-sm:text-sm text-black font-bold">
                Head of Department
              </div>
              <div className="text-2xl max-md:text-md max-sm:text-sm font-bold text-red-900 mb-2">
                Dr. Subrata Das
              </div>
              <div className="text-2xl max-md:text-md max-sm:text-sm mb-2 font-bold text-green-800">
                Professor
              </div>
              <div className="text-1xlmax-md:text-md max-sm:text-sm mb-2">
                Email: head.ch@nitp.ac.in
              </div>
              <div className="text-1xl max-md:text-md max-sm:text-sm">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Page

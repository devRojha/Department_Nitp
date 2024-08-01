



import Image from 'next/image'
import BackDepartment from '../../../../components/BackDepartment'

function Page() {
  return (
    <div className=" flex flex-col p-10 max-sm:p-2 h-screen">
      <div className="flex flex-col mb-16">
        <div>
          <p className="text-red-900 text-xl lg:text-2xl font-bold">HOD</p>
        </div>
        <div className="lg:mt-2">
          <p className="text-gray-500 text-sm lg:text-base font-semibold">MATHEATICS</p>
        </div>
        <BackDepartment navigate={'/AllDepartment/Math'} />
      </div>
      {/* section 1 */}
      <div className="w-full grid grid-cols-5 border shadow-lg shadow-slate-500 h-[50%]">
        <div className="col-span-2 flex justify-center items-center  rounded-lg">
          <Image
            src={
              'https://lh3.googleusercontent.com/d/1-TK7XcNCqXlnNON5BWASENxjYXsw_ouB=w320?authuser=0'
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
              Dr. Gowrisankar S
            </div>
            <div className="text-2xl max-md:text-md max-sm:text-sm mb-2 font-bold text-green-800">
              Associate Professor & HOD
            </div>
            <div className="text-1xlmax-md:text-md max-sm:text-sm mb-2">
              Email: head.ma@nitp.ac.in
            </div>
            <div className="text-1xl max-md:text-md max-sm:text-sm">
              Extn: +91-612-(2371715/2715/2371929/ 2370419/2370843/2371930) *
              117
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page

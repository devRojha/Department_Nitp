import Image from 'next/image'

function page() {
  return (
    <div className="bg-orange-50 flex flex-col p-10 max-sm:p-2 h-screen">
      <div className="flex flex-col  mb-16">
        <div>
          <p className="text-red-900 text-3xl max-sm:text-2xl font-bold">HOD</p>
        </div>
        <div className="mt-2">
          <p className="text-gray-500 text-xl font-semibold">
            IMSc Math
          </p>
        </div>
      </div>
      {/* section 1 */}
      <div className="w-full grid grid-cols-5 border border-red-500 h-[60%]">
        <Image
          src={
            'https://lh3.googleusercontent.com/d/1f2bFo1KIY1xF6MOmTAjM3gNYZcUySBaG=w320?authuser=0'
          }
          width={700}
          height={1000}
          alt="Loading.."
          className="col-span-2 rounded-lg bg-rose-200 h-full"
        />
        <div className=" col-span-3 border">hii</div>
      </div>
    </div>
  )
}
export default page

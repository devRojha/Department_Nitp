
function Compo({project, pi, year,sno }){
    return (
        <>
            <div className="col-span-1 border border-black pl-4 py-2 flex flex-col justify-center">
                {sno}
            </div>
            <div className="col-span-2 border border-black pl-4 py-2 flex flex-col justify-center">
                {pi}
            </div>
            <div className="col-span-2 border border-black pl-4 py-2 flex flex-col justify-center">
                {project}
            </div>
            <div className="col-span-1 border border-black pl-4 py-2 flex flex-col justify-center">
                {year}
            </div>
        </>
    )
}
function Page(){
    return (
        <div className="bg-orange-50 flex flex-col p-5">  
            <div className="flex flex-col md:ml-10">
                <div>
                    <p className="text-red-900 text-3xl font-bold">
                        ACHIEVMENTS
                    </p>
                </div>
                <div className="mt-10">
                    <p className="text-red-900 text-xl font-semibold">
                    List of Short-Term Courses / Faculty Development Program / Workshop / Gian Program:
                    </p>
                </div>
                <div className="mb-10 overflow-x-auto lg:mr-10 mt-8">
                    <div className="grid grid-cols-6 border min-w-[800px]">
                    {/* heading  */}
                        <div className=" col-span-1 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold">
                            Sr. No.
                        </div>
                        <div className=" col-span-2 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold">
                            Name of the Faculty
                        </div>
                        <div className="  col-span-2 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold">
                        Organized Workshop/FDP/STC/GIAN program
                        </div>
                        <div className="  col-span-1 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold">
                        Duration
                        </div>
                        {/* grid  */}
                        <Compo
                        sno={'1.'}
                        project={'National Mission on Education through Information and communication tech.'}
                        pi={'Dr. D.K. Singh and Mr. B.C. Sahana'}
                        year={'2013, June 06-07'}
                        />
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Page
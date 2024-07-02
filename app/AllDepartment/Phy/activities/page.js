
function Compo({project, pi, sponsor, amount,year,sno }){
    return (
        <>
            <div className="col-span-1 border border-black pl-4 py-2 flex flex-col justify-center">
                {sno}
            </div>
            <div className="col-span-2 border border-black pl-4 py-2 flex flex-col justify-center">
                {project}
            </div>
            <div className="col-span-2 border border-black pl-4 py-2 flex flex-col justify-center">
                {pi}
            </div>
            <div className="col-span-2 border border-black pl-4 py-2 flex flex-col justify-center">
                {sponsor}
            </div>
            <div className="col-span-1 border border-black pl-4 py-2 flex flex-col justify-center">
                {year}
            </div>
            <div className="col-span-2 border border-black pl-4 py-2 flex flex-col justify-center">
                {amount}
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
                        ACTIVITIES
                    </p>
                </div>
                <div className="mt-10">
                    <p className="text-red-900 text-xl font-semibold">
                    Externally Sponsored Projects:
                    </p>
                </div>
                <div className="mb-10 overflow-x-auto lg:mr-10">
                    <div className="grid grid-cols-10 border min-w-[1000px]">
                    {/* heading  */}
                        <div className=" col-span-1 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold">
                            Sr. No.
                        </div>
                        <div className=" col-span-2 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold">
                            Name of the Project
                        </div>
                        <div className="  col-span-2 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold">
                            Name of the faculty
                        </div>
                        <div className="  col-span-2 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold">
                        Major funding agency
                        </div>
                        <div className="col-span-1 border border-black pl-2 py-2 flex flex-col justify-center text-red-900 font-semibold pr-2">
                            Completed / Ongoing
                        </div>
                        <div className=" col-span-2 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold">
                            Grant Sanctioned(INR in Lakhs)
                        </div>
                        {/* grid  */}
                        <Compo
                        sno={'1.'}
                        project={'Development of Signal Processing algorithms for remote detection of humans trapped under Debris in disaster affected areas using RF sensing of cardiopulmonary motion'}
                        pi={'Dr. G. Pradhan (PI), Dr. B. Gupta (Co-PI), Dr. P. Kishore Kumar (Co-PI)'}
                        sponsor={'DeitY Under SMDP'}
                        amount={'98.4'}
                        year={'On going'}
                        />
                    </div>
                </div>

            </div>
        </div>

    )
}
export default Page
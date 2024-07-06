
function Compo({ project, pi, sponsor, amount, year, sno }) {
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
            <div className="col-span-2 border border-black pl-4 py-2 flex flex-col justify-center">
                {year}
            </div>
            <div className="col-span-2 border border-black pl-4 py-2 flex flex-col justify-center">
                {amount}
            </div>

        </>
    )
}
function Page() {
    return (
        <div className="bg-orange-50 flex flex-col p-5">
            <div className="flex flex-col md:ml-10">
                <div>
                    <p className="text-red-900 text-3xl font-bold">
                        Activities
                    </p>
                </div>
                <div className="mt-10">
                    <p className="text-red-900 text-xl font-semibold">
                        Externally Funded Projects Running in the Department
                    </p>
                </div>
                <div className="mb-10 overflow-x-auto lg:mr-10">
                    <div className="grid grid-cols-11 border min-w-[1000px]">
                        {/* heading  */}
                        <div className=" col-span-1 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold">
                            Sr. No.
                        </div>
                        <div className=" col-span-2 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold">
                            Name of the Projects
                        </div>
                        <div className="  col-span-2 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold">
                            Name of the faculty
                        </div>
                        <div className="  col-span-2 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold">
                            Major funding agency
                        </div>
                        <div className=" col-span-2 border border-black pl-2 py-2 flex flex-col justify-start text-red-900 font-semibold">
                            Completed/ Ongoing
                        </div>
                        <div className=" col-span-2 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold">
                            Grant Sanctioned (INR in Lakhs)
                        </div>
                        {/* grid  */}
                        <Compo
                            sno={'1.'}
                            project={'Development Multifunctional Perovskite Materials for Device Application'}
                            pi={'Dr. D.K. Mahato'}
                            sponsor={'DRDO'}
                            amount={'16.5552'}
                            year={'Ongoing'}
                        />
                        <Compo
                            sno={'2.'}
                            project={'Study Spin Injection & Spin Dynamics in Semiconductors for Spintronic Application'}
                            pi={'Dr. Samrat Mukherjee'}
                            sponsor={'CSIR'}
                            amount={'18.94'}
                            year={'Ongoing'}
                        />
                        <Compo
                            sno={'3.'}
                            project={'Characterizations of Magnetically Doped Semiconductor for possible Spintronic Applications'}
                            pi={'Dr. Samrat Mukherjee'}
                            sponsor={'UGC'}
                            amount={'12.43'}
                            year={'Ongoing'}
                        />
                        <Compo
                            sno={'4.'}
                            project={'Facile Synthesis and Characterization of Magnetically Modulated Luminescent Nanocomposites'}
                            pi={'Dr. Samrat Mukherjee'}
                            sponsor={'AICTE'}
                            amount={'8.5'}
                            year={'Completed'}
                        />

                    </div>
                </div>

            </div>
        </div>

    )
}
export default Page
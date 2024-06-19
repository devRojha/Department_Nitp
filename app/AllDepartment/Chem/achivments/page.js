
function Compo({project, pi, sponsor, amount,year,sno }){
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
            <div className="col-span-2 border border-black pl-4 py-2 flex flex-col justify-center">
                {year}
            </div>
            <div className="col-span-1 border border-black pl-4 py-2 flex flex-col justify-center">
                {amount}
            </div>
            <div className="col-span-2 border border-black pl-4 py-2 flex flex-col justify-center">
                {sponsor}
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
                            Name of the PI
                        </div>
                        <div className="  col-span-2 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold">
                            Title of the Project
                        </div>
                        <div className="  col-span-2 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold">
                        Project No./ Time Period
                        </div>
                        <div className=" col-span-1 border border-black pl-2 py-2 flex flex-col justify-start text-red-900 font-semibold">
                            Sanctioned Amount(in lakh)
                        </div>
                        <div className=" col-span-2 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold">
                            Funding Agency
                        </div>
                        {/* grid  */}
                        <Compo
                        project={'Development of Signal Processing algorithms for remote detection of humans trapped under Debris in disaster affected areas using RF sensing of cardiopulmonary motion'}
                        pi={'Dr. G. Pradhan (PI), Dr. B. Gupta (Co-PI), Dr. P. Kishore Kumar (Co-PI)'}
                        sponsor={'DeitY Under SMDP'}
                        amount={'98.4'}
                        year={'On going'}
                        />
                    </div>
                </div>
                <div className="mt-10">
                    <p className="text-red-900 text-xl font-semibold">
                    Patents:
                    </p>
                </div>
                <ol className='list-decimal mt-4 ml-4'>
                    <li>
                        <p>
                       <span className='font-semibold text-red-800 text-lg'>Subrata Das</span>, P. K. Sukul and A. Mondal.
                       <span className='font-semibold'>“Superhydrophobic Photostable Dye Coated Magnetic Nano Materials for Separating Contaminated Oil”.</span>
                       <span className='text-blue-800'> Indian Patent. 2017. Patent No: 332217 (Granted).</span>
                       </p>
                    </li>
                    <li>
                        <p>
                       <span className='font-semibold text-red-800 text-lg'>Subrata Das</span>, Shibu Naskar, S. Mal, T. Das and P. Kumar. 
                       <span className='font-semibold'>“An Improved Batch-flow photo-reactor”.</span>
                       <span className='text-blue-800'> Indian Patent. 2022. Patent no: 412866 (Granted).</span>
                       </p>
                    </li>
                    <li>
                        <p>
                       <span className='font-semibold text-red-800 text-lg'>Subrata Das</span>, P. K. Sukul and A. Mondal.
                       <span className='font-semibold'>“Superhydrophobic Photostable Dye Coated Magnetic Nano Materials for Separating Contaminated Oil”.</span>
                       <span className='text-blue-800'> Indian Patent. 2017. Patent No: 332217 (Granted).</span>
                       </p>
                    </li>
                    <li>
                        <p>
                       <span className='font-semibold text-red-800 text-lg'>Subrata Das</span>, P. K. Sukul and A. Mondal.
                       <span className='font-semibold'>“Superhydrophobic Photostable Dye Coated Magnetic Nano Materials for Separating Contaminated Oil”.</span>
                       <span className='text-blue-800'> Indian Patent. 2017. Patent No: 332217 (Granted).</span>
                       </p>
                    </li>
                    <li>
                        <p>
                       <span className='font-semibold text-red-800 text-lg'>Subrata Das</span>, P. K. Sukul and A. Mondal.
                       <span className='font-semibold'>“Superhydrophobic Photostable Dye Coated Magnetic Nano Materials for Separating Contaminated Oil”.</span>
                       <span className='text-blue-800'> Indian Patent. 2017. Patent No: 332217 (Granted).</span>
                       </p>
                    </li>
                </ol>
            </div>
        </div>

    )
}
export default Page
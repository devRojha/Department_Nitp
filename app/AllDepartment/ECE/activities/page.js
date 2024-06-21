
function ActComp({title,content}){
    return(
        <div className="flex flex-col mt-8 lg:ml-10">
            <p className="text-2xl font-semibold mb-4">
                {title}
            </p>
            <ul>
                {content.map((points,i)=>{
                    return(
                        <li key={i} className="list-disc ml-4 md:text-lg
                        pb-2">
                           {points}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

function Compo({project, pi, sponsor, amount,year }){
    return (
        <>
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
                {amount}
            </div>
            <div className="col-span-1 border border-black pl-4 py-2 flex flex-col justify-center">
                {year}
            </div>
        </>
    )
}
function Page(){
    return (
        <div className="bg-orange-50 flex flex-col p-5 h-screen">  
            <div className="flex flex-col md:ml-10">
                <div>
                    <p className="text-red-900 text-3xl font-bold">
                        ACTIVITIES
                    </p>
                </div>
            </div>
            <ActComp title={"Inter Departmental Activity:"}
            content={['ICT academy has been established for development/upgradation to improve the employability of the graduates/diploma holders in various streams in cooperation with other departments.'
            ]}
            />
            <div className="mt-8 lg:ml-10">
                <div className="text-2xl font-semibold mb-5">
                    Projects
                </div>
                <div className="mb-10 overflow-x-auto lg:mr-10">
                    <div className="grid grid-cols-8 border min-w-[900px]">
                    {/* heading  */}
                        <div className="col-span-2 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold">
                            Name of the Project
                        </div>
                        <div className="col-span-2 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold">
                            Name of the PI
                        </div>
                        <div className="col-span-2 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold">
                            Sponsoring Agency
                        </div>
                        <div className="col-span-1 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold">
                            Sanctioned Amount(in lakh)
                        </div>
                        <div className="col-span-1 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold">
                            Status
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
            </div>
        </div>

    )
}
export default Page
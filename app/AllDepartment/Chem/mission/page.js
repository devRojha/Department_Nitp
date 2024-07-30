import BackDepartment from "@/components/BackDepartment"

function Comp({content}){
    return(
        <div className="flex flex-col mt-8 lg:ml-10">
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

function Page(){
    return (
        <div className="flex flex-col p-5">  
            <div className="flex flex-col md:ml-10">
                <div className="flex flex-col  mb-6">
                    <div>
                        <p className="text-red-900 text-2xl  font-bold">
                            Syllabus
                        </p>
                    </div>
                    <div className="mt-2">
                        <p className="text-gray-500 text-base font-semibold">
                            CHEMISTRY
                        </p>
                    </div>
                    <BackDepartment navigate={"/AllDepartment/Chem"}/>
                </div>
            </div>
            <div className="max-sm:mx-6 max-md:mx-8 mx-20 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md">
                <div>
                    <p className="text-red-900 text-3xl font-bold">
                        VISION
                    </p>
                    <Comp
                    content={['To serve the country through this institution by pursuing excellence in scientific and technical education and research',
                        'To make this department a center of excellence for cutting edge fundamental and applied research.',
                    ]}
                    />
                </div>
                <div className="mt-10">
                    <p className="text-red-900 text-3xl font-bold">
                        MISSION
                    </p>
                    <Comp
                    content={[
                        'To develop and promote innovations in Education at all levels, and generate fundamental and applied knowledge by engaging in scientific research by adopting suitable steps.',
                        'To promote academic growth by offering state-of-the-art education in undergraduate, postgraduate and doctoral programmes.',
                        'To pursue quality research output by developing necessary and adequate research facilities and undertaking collaborative / sponsored research projects.',
                        'Maintaining and enhancing the diversity of students, staff, faculty and curricula.',
                    ]}
                    />
                </div>
            </div>
        </div>

    )
}
export default Page
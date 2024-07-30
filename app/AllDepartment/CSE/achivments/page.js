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
        <div className=" flex flex-col p-5">  
            <div className="flex flex-col md:ml-10 h-screen">
                <div className="mb-2">
                    <p className="text-red-900 text-3xl font-bold">
                        ACHIEVEMENTS
                    </p>
                    <div>
                    <BackDepartment navigate={'/AllDepartment/CSE'}/>
                    </div>
                </div>
                <div className="max-sm:mx-6 max-md:mx-8 mx-20 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md h-screen">
                    <Comp
                    content={['ISEA Project Phase – I (Completed)',
                    'ISEA Project Phase – II (Ongoing)',
                    'ICT-Academy Project (Ongoing)',
                    '“Digital Literacy” Course under Skill Development Program (PMRY scheme) Completed'
                    ]}
                    />
                </div>

            </div>
        </div>

    )
}
export default Page
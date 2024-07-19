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
        <div className="bg-orange-50 flex flex-col p-5">  
            <div className="flex flex-col md:ml-10 h-screen">
                <div>
                    <p className="text-red-900 text-3xl font-bold">
                        ACHIEVEMENTS
                    </p>
                    <div>
                    <BackDepartment navigate={'/AllDepartment/CSE'}/>
                    </div>
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
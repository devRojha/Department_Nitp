import BackDepartment from "@/components/BackDepartment"

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


function Page(){
    return (
        <div className="bg-orange-50 flex flex-col p-5 h-screen">  
            <div className="flex flex-col md:ml-10">
                <div>
                    <p className="text-red-900 text-4xl font-bold">
                    Research Highlights
                    </p>
                    <BackDepartment navigate={"/AllDepartment/Phy"}/>
                </div>
            </div>

        </div>

    )
}
export default Page



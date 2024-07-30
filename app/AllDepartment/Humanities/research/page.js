import BackDepartment from "../../../../components/BackDepartment"


function Page(){
    return (
        <div className=" flex flex-col p-10 max-sm:p-2 h-screen">  
            <div className="flex flex-col  mb-16">
                <div>
                    <p className="text-red-900 text-3xl max-sm:text-2xl font-bold">
                        RESEARCH AND HIGHLIGHT
                    </p>
                </div>
                <div className="mt-2">
                    <p className="text-gray-500 text-xl font-semibold">
                        Humanities & Social Sciences
                    </p>
                </div>
                <BackDepartment navigate={"/AllDepartment/Humanities"}/>

            </div>
            {/* LINKS */}
            <div className="mb-10">
                <p></p>
            </div>
        </div>
    )
}
export default Page
import BackDepartment from "@/components/BackDepartment";


export default function achivments(){
    return (
        <div className=" flex flex-col p-10 max-sm:p-2 h-screen">  
            <div className="flex flex-col  mb-16">
                <div>
                    <p className="text-red-900 text-xl lg:text-2xl font-bold">
                        LIST OF NON-TEACHING STAFF
                    </p>
                </div>
                <div className="lg:mt-2">
                    <p className="text-gray-500  text-sm lg:text-base font-semibold">
                        MECHANICAL ENGINEERING
                    </p>
                </div>
                <BackDepartment navigate={"/AllDepartment/ME"}/>
            </div>
            {/* Achivment */}
            
        </div>
    )
}
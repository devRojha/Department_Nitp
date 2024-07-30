

function page(){
    return (
        <div className="bg-orange-50 flex flex-col p-5 h-screen">  
            <div className="flex flex-col md:ml-10">
                <div>
                    <p className="text-red-900 text-3xl font-bold">
                        SYLLABUS
                    </p>
                </div>
                <div className="mt-2">
                    <p className="text-gray-500 text-xl font-semibold">
                        Computer Science and Engineering
                    </p>
                </div>
                <BackDepartment navigate={"/AllDepartment/IMSc"}/>
            </div>
        </div>

    )
}
export default page
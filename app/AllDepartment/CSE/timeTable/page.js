import BackDepartment from "@/components/BackDepartment"


function Page(){
    return (
        <div className="bg-orange-50 flex flex-col p-5 h-screen">  
            <div className="flex flex-col md:ml-10">
                <div>
                    <p className="text-red-900 text-3xl font-bold">
                        TIME TABLE
                    </p>
                </div>
                <div className="mt-2">
                    <p className="text-gray-500 text-xl font-semibold">
                        Computer Science and Engineering
                    </p>
                </div>
                <div>
                <BackDepartment navigate={'/AllDepartment/CSE'}/>
                </div>
                <div className='mt-14'>
                    <a href={'https://www.dropbox.com/scl/fo/kmdu6u1erwn18lwo0qe4p/h?rlkey=rl1xo6nzihg0j5yc9zvfidfr0&dl=0'} className='lg:text-lg text-gray-500 font-semibold border-b-2 border-black' target="_blank">
                        Click here for the time table of CSED (for all semesters)
                    </a>
                </div>
            </div>
        </div>

    )
}
export default Page
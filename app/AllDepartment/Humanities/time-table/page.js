import BackDepartment from "../../../../components/BackDepartment"


function page(){
    return (
        <div className="bg-orange-50 flex flex-col p-10 max-sm:p-2 h-screen">  
            <div className="flex flex-col  mb-16">
                <div>
                    <p className="text-red-900 text-3xl max-sm:text-2xl font-bold">
                        Time Table
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
                <ul className="list-disc list-inside ml-5 space-y-4 text-lg max-md:text-[15px] max-sm:text-sm">
                    <li className="hover:text-blue-800"><a href="https://drive.google.com/file/d/1-wloDSEABGjEYgzoEOAYat7FPkiSffW_/view">Click here for the time table of UG 3rd, 5th and 7th semesters (All Branches), July-December 2022.</a></li>
                    <li className="hover:text-blue-800"><a href="https://drive.google.com/file/d/1rTH9iuLex7glBjKZqinMKlhHunp4fljL/view?usp=sharing">Click here for the time table of MTech & PhD (All Branches), July-December 2022.</a></li>
                    <li className="hover:text-blue-800"><a href="https://drive.google.com/file/d/1ebFsyL3l2ZXxaLDtYup74gPsJq6P6rM4/view?usp=sharing">Click here for the time table of all the subjects offered by HSS to 1st year students (All Branches), January-June 2022.</a></li>
                </ul>
            </div>
        </div>
    )
}
export default page
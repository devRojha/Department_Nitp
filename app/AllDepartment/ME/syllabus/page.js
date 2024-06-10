

export default function page(){
    return (
        <div className="bg-orange-50 flex flex-col p-10 max-sm:p-2">  
            <div className="flex flex-col  mb-16">
                <div>
                    <p className="text-red-900 text-3xl max-sm:text-2xl font-bold">
                        SYLLABUS
                    </p>
                </div>
                <div className="mt-2">
                    <p className="text-gray-500 text-xl font-semibold">
                        MECHANICAL ENGINEERING
                    </p>
                </div>
            </div>
            {/* UG PROGRAM */}
            <div className="mb-10">
                <div className="text-red-900 font-bold text-3xl max-sm:text-2xl mb-8">UG PROGRAM :-</div>
                <ul className="list-disc list-inside ml-5 space-y-4 text-lg max-md:text-[15px] max-sm:text-sm">
                    <li className="hover:text-blue-800"><a href="">B.Tech_Course_Structure_2021 - (2024 April update)</a></li>
                    <li className="hover:text-blue-800"><a href="">B.Tech_Course_Structure_2022 onwards - (2024 April update)</a></li>
                    <li className="hover:text-blue-800"><a href="">B.Tech_Detailed Syllabus_3rd Semester Onwards.</a></li>
                    <li className="hover:text-blue-800"><a href="">B.Tech 1st Year Even Semester Syllabus</a></li>
                    <li className="hover:text-blue-800"><a href="">B.Tech 1st Year Odd Semester Syllabus</a></li>
                </ul>
            </div>
            {/* Dual degree PROGRAM  */}
            <div className="mb-10">
                <div className="text-red-900 font-bold text-3xl max-sm:text-2xl mb-8">DUAl DEGREE PROGRAM :-</div>
                <ul className="list-disc list-inside ml-5 space-y-4 text-lg max-md:text-[15px] max-sm:text-sm">
                    <li className="hover:text-blue-800"><a href="">Dual Degree (B.Tech + M.Tech) _ Course Structure _ 2022 Onwards.</a></li>
                    <li className="hover:text-blue-800"><a href="">Dual Degree ( B.Tech + M.Tech) _ Detailed Syllabus _ 3rd Semester Onwards.</a></li>
                </ul>
            </div>
            {/* pg PROGRAM  */}
            <div className="mb-10">
                <div className="text-red-900 font-bold text-3xl max-sm:text-2xl mb-8">PG PROGRAM :-</div>
                <ul className="list-disc list-inside ml-5 space-y-4 text-lg max-md:text-[15px] max-sm:text-sm">
                    <li className="hover:text-blue-800"><a href="">M.Tech _ Course Structure _ All Specializations.</a></li>
                    <li className="hover:text-blue-800"><a href="">M.Tech _ Detailed Syllabus _ All Specializations.</a></li>
                </ul>
            </div>
            {/* PHD PROGRAM  */}
            <div className="mb-10">
                <div className="text-red-900 font-bold text-3xl max-sm:text-2xl mb-8">PHD PROGRAM :-</div>
                <ul className="list-disc list-inside ml-5 space-y-4 text-lg max-md:text-[15px] max-sm:text-sm">
                    <li className="hover:text-blue-800"><a href="">Ph.D. in Mechanical Engineering</a></li>
                </ul>
            </div>
        </div>
    )
}
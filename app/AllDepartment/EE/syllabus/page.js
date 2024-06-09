

function page(){
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
                        ELECTRICAL ENGINEERING
                    </p>
                </div>
            </div>
            {/* UG PROGRAM */}
            <div className="mb-10">
                <div className="text-red-900 font-bold text-3xl max-sm:text-2xl mb-8">UG PROGRAM :-</div>
                <ul className="list-disc list-inside ml-5 space-y-4 text-lg max-md:text-[15px] max-sm:text-sm">
                    <li className="hover:text-blue-800"><a href="https://drive.google.com/file/d/1A0l-C3vXUjL3qrV6dZutObFlQKiVhOuJ/view">B.Tech_EE_Course Structure_Batch-2021</a></li>
                    <li className="hover:text-blue-800"><a href="">B.Tech_Detailed Syllabus_Batch-2021</a></li>
                    <li className="hover:text-blue-800"><a href="">B.Tech_EE_Course Structure_Batch-2022</a></li>
                    <li className="hover:text-blue-800"><a href="">B.Tech_Detailed Syllabus_Batch-2022</a></li>
                    <li className="hover:text-blue-800"><a href="">B.Tech_EE_Course Structure_Batch-2023_Onwards</a></li>
                    <li className="hover:text-blue-800"><a href="">B.Tech_Detailed Syllabus_Batch-2023_Onwards</a></li>
                    <li className="hover:text-blue-800"><a href="">Dual Degree (B.Tech + M.Tech (PSE))_Course Structure_Batch-2022</a></li>
                    <li className="hover:text-blue-800"><a href="">Dual Degree (B.Tech + M.Tech (PSE))_Detailed Syllabus_Batch-2022</a></li>
                    <li className="hover:text-blue-800"><a href="">Dual Degree (B.Tech + M.Tech (PSE))_Course Structure_Batch-2023_Onwards</a></li>
                    <li className="hover:text-blue-800"><a href="">Dual Degree (B.Tech + M.Tech (PSE))_Detailed Syllabus_Batch-2023_Onwards</a></li>
                </ul>
            </div>
            {/* PG PROGRAM  */}
            <div className="mb-10">
                <div className="text-red-900 font-bold text-3xl max-sm:text-2xl mb-8">PG PROGRAM :-</div>
                <ul className="list-disc list-inside ml-5 space-y-4 text-lg max-md:text-[15px] max-sm:text-sm">
                    <li className="hover:text-blue-800"><a href="">M.Tech- Control System Engg_and_Power System Engg_Course structure</a></li>
                    <li className="hover:text-blue-800"><a href="">M.Tech- Control System Engg_and_Power System Engg_Detailed Syllabus</a></li>
                </ul>
            </div>
            {/* PHD PROGRAM  */}
            <div className="mb-10">
                <div className="text-red-900 font-bold text-3xl max-sm:text-2xl mb-8">PHD PROGRAM :-</div>
                <ul className="list-disc list-inside ml-5 space-y-4 text-lg max-md:text-[15px] max-sm:text-sm">
                    <li className="hover:text-blue-800"><a href="">Ph.D. in Electrical Engineering</a></li>
                </ul>
            </div>
        </div>
    )
}
export default page
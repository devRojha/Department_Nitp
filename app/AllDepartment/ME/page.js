"use client"
import { DepartmentNavigationButton } from "@/components/DepartmentNavigationButton"
import Image from "next/image"
export default function ME() {
    return (
        <div className="p-10 max-sm:px-0 border border-red-700 bg-orange-50">
           {/* heading */}
           <div className="text-3xl max-sm:text-2xl max-sm:ml-2 font-bold text-red-900 mb-10">MECHANICAL ENGINEERING</div>
           {/* Section one */}
           <div className="grid grid-cols-6 max-md:grid-cols-1">
               {/* Department Picture */}
               <div className="h-[500px] flex justify-start py-10 col-span-3 mr-4 max-sm:mr-0">
                   <Image src="/cseimg.png" className="rounded-lg shadow-lg shadow-slate-600" alt="Logo" width={700} height={1000}/>
               </div>
               {/* HOD */}
               <div className="h-[500px] max-sm:h-[400px] flex justify-end py-10 col-span-3">
                   <div className="bg-amber-50 rounded-lg shadow-lg shadow-slate-600 w-full py-8 px-8 grid grid-cols-2">
                       <div className="col-span-1  border rounded-lg bg-rose-200 mr-2">Image</div>
                       <div className="col-span-1 flex justify-center">
                           <div className="flex flex-col justify-between">
                               <div className="text-2xl max-sm:text-lg font-semibold text-green-800 text-center">Head of Department</div>
                               <div className="text-2xl max-sm:text-lg font-semibold text-red-900 text-center">Prof. Maheshwari Prashad Shingh</div>
                               <div className="text-2xl max-sm:text-lg font-semibold text-slate-600 text-center">Professor</div>
                               <div className="text-1xl max-sm:text-sm text-black text-center">Email: head.cs@nitp.ac.in</div>
                               <div className="text-1xl max-sm:text-sm text-black text-center">Extn: +91-612-(2371715/ 2715/ 2371929/ 2370419/ 2370843/ 2371930) 201</div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
           {/* Section 2 */}
           <div className="grid grid-cols-6 max-md:grid-cols-1">
               {/* Notice  */}
               <div className="bg-white px-2 py-4 h-[600px] rounded-lg shadow-lg shadow-slate-600 col-span-2 flex flex-col max-md:mb-10">
                   <div className="mb-6 flex justify-between text-lg font-semibold text-slate-500">
                       <div>Importent Notice</div>
                       <div>View All</div>
                   </div>
                   <div>- incoming Notice</div>
               </div>
               <div className="col-span-4 flex flex-col justify-between ml-4">
                   {/* About */}
                   <div className="px-6 max-sm:px-2">
                       <div className="mb-4 text-2xl max-sm:text-lg font-semibold text-red-950">About</div>
                       <div className="text-justify max-sm:text-[12px]">The Department of Computer Science and Engineering offers courses leading to Bachelor of Technology in Computer Science and Engineering. The department has a very good infrastructure and faculty to provide excellent education. The curriculum is updated regularly to keep up with the growing demands and the changing trends of the software industry and research laboratories. The department provides a wide range of courses. The prominent among them includes Data Structures, Design and Analysis of Algorithms, System Programming, Computer Networks, Data Mining and Warehousing, Distributed and Parallel Computing, Mobile and Wireless Computing, Real-time Systems, Cryptography, Genetic Algorithm and Artificial Intelligence. Apart from these, students are also offered a wide variety of electives.</div>
                   </div>
                   {/* Navigation Button  */}
                   <div className="grid grid-cols-3 max-sm:grid-cols-2 mt-10">
                       <DepartmentNavigationButton onClick={()=>console.log("hii")} Title={"SYLLABUS"}/>
                       <DepartmentNavigationButton onClick={()=>console.log("hii")} Title={"ACTIVITIES"}/>
                       <DepartmentNavigationButton onClick={()=>console.log("hii")} Title={"FACULTY"}/>
                       <DepartmentNavigationButton onClick={()=>console.log("hii")} Title={"LABS"}/>
                       <DepartmentNavigationButton onClick={()=>console.log("hii")} Title={"MISSION AND VISSION"}/>
                       <DepartmentNavigationButton onClick={()=>console.log("hii")} Title={"ACHIVMENTS"}/>
                       <DepartmentNavigationButton onClick={()=>console.log("hii")} Title={"TIME TABLE"}/>
                   </div>
               </div>
           </div>
        </div>
       )
   }
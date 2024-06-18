"use client"
import { DepartmentNavigationButton } from "@/components/DepartmentNavigationButton"
import DepartmentNotify from "@/components/DepartmentNotify";
import Image from "next/image"
import {useRouter} from 'next/navigation';

const Notices = [
    {
        id:1,
        notice:"this is notice1",
        fun:""
    },
    {
        id:2,
        notice:"this is notice2",
        fun:""
    },
    {
        id:3,
        notice:"this is notice3",
        fun:""
    },
    {
        id:4,
        notice:"this is notice4",
        fun:""
    },
    {
        id:5,
        notice:"this is notice5",
        fun:""
    },
    {
        id:6,
        notice:"this is notice6",
        fun:""
    },

    {
        id:7,
        notice:"this is notice7",
        fun:""
    },
    {
        id:8,
        notice:"this is notice8",
        fun:""
    },
    {
        id:9,
        notice:"this is notice9",
        fun:""
    },
    {
        id:10,
        notice:"this is notice10",
        fun:""
    },
    {
        id:11,
        notice:"this is notice11",
        fun:""
    },
    {
        id:12,
        notice:"this is notice12",
        fun:""
    },
    {
        id:13,
        notice:"this is notice13",
        fun:""
    },
    {
        id:14,
        notice:"this is notice14",
        fun:""
    },
    {
        id:15,
        notice:"this is notice15",
        fun:""
    },
    {
        id:16,
        notice:"this is notice16",
        fun:""
    },
    
]

export default function EE() {
    const router=useRouter();
    return (
        <div className="p-10 max-sm:px-0 border border-red-700 bg-orange-50">
           {/* heading */}
           <div className="text-3xl max-sm:text-2xl max-sm:ml-2 font-bold text-red-900 mb-10">ELECTRICAL ENGINEERING</div>
           {/* Section one */}
           <div className="grid grid-cols-6 max-md:grid-cols-1">
               {/* Department Picture */}
               <div className="h-[500px] flex justify-start py-10 col-span-3 mr-4 max-sm:mr-0">
                   <Image src="/cseimg.png" className="rounded-lg max-sm:rounded-none shadow-lg shadow-slate-600 h-full" alt="Logo" width={700} height={1000}/>
               </div>
               {/* HOD */}
               <div className="h-[500px] max-sm:h-[400px] flex justify-end py-10 col-span-3">
                   <div className="bg-amber-50 rounded-lg shadow-lg shadow-slate-600 w-full py-8 px-8 grid grid-cols-2">
                       <Image src={"https://lh3.googleusercontent.com/d/1Q0TgCyX0bpbtiKhYiqtDBQ0N_7JzwiQI=w320?authuser=0"} width={700} height={1000} alt="Loading.." className="col-span-1  border rounded-lg bg-rose-200 h-full" />
                       <div className="col-span-1 flex justify-center">
                           <div className="flex flex-col max-sm:space-y-3 max-sm:justify-normal justify-between ml-4">
                               <div className="text-1xl max-sm:text-sm max-md:text-md font-semibold text-green-800 text-center">Head of Department</div>
                               <div className="text-1xl max-sm:text-sm max-md:text-md font-semibold text-red-900 text-center">Dr. Rajiv Kumar MANDAL</div>
                               <div className="text-1xl max-sm:text-sm max-md:text-md font-semibold text-slate-600 text-center">Professor</div>
                               <div className="text-[15px] max-sm:text-[8px] max-md:text-[10px] text-black text-center">Email: head.cs@nitp.ac.in</div>
                               <div className="text-[10px] max-sm:text-[8px] max-md:text-sm text-black text-center">Extn: +91-612-(2371715/ 2715/ 2371929/ 2370419/ 2370843/ 2371930) 201</div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
           {/* Section 2 */}
           <div className="grid grid-cols-6 max-md:grid-cols-1">
               {/* Notice  */}
               <div className="bg-white px-2 py-4 h-[600px] rounded-lg shadow-lg shadow-slate-600 col-span-2 max-lg:col-span-3 flex flex-col max-md:mb-10">
                   <div className="mb-6 flex justify-between text-lg font-semibold text-slate-500">
                       <div>Important Notice</div>
                       <button className="hover:text-blue-500">View All</button>
                   </div>
                   <div className="overflow-hidden space-y-2">
                    {Notices.map((notice, id)=>{
                        return (
                            <DepartmentNotify key={id} title={notice.notice} fun={notice.fun} />
                        )
                    })}
                   </div>
               </div>
               <div className="col-span-4 max-lg:col-span-3 flex flex-col justify-between ml-4">
                   {/* About */}
                   <div className="px-6 max-sm:px-2">
                       <div className="mb-4 text-2xl max-sm:text-lg font-semibold text-red-950">About</div>
                       <div className="text-justify max-sm:text-[12px]">The Department of Electrical Engineering in National Institute of Technology Patna (Formerly known as Bihar College of Engineering) was established in 1945 under Patna University with an intake of 45 students leading to a Bachelor of Science (Engineering) degree of four-year duration. In the year 1978 AICTE approved Post Graduate (PG) course leading to M.Sc. (Engg.) Degree in two specializations: (i) Power System Engineering and (ii) Control System Engineering. The department is also offering the Ph.D. research program since 2009. <button onClick={()=>router.push('/AllDepartment/EE/about')} className="text-blue-600">more...</button></div>
                   </div>
                   {/* Navigation Button  */}
                   <div className="grid grid-cols-3 max-sm:grid-cols-2 mt-10">
                       <DepartmentNavigationButton onClick={()=>router.push('/AllDepartment/EE/mission')} Title={"MISSION AND VISSION"}/>
                       <DepartmentNavigationButton onClick={()=>router.push('/AllDepartment/EE/faculty')} Title={"FACULTY"}/>
                       <DepartmentNavigationButton onClick={()=>router.push('/AllDepartment/EE/labs')} Title={"LABS"}/>
                       <DepartmentNavigationButton onClick={()=>router.push('/AllDepartment/EE/syllabus')} Title={"SYLLABUS"}/>
                       <DepartmentNavigationButton onClick={()=>router.push('/AllDepartment/EE/activities')} Title={"ACTIVITIES"}/>
                       <DepartmentNavigationButton onClick={()=>router.push('/AllDepartment/EE/achivments')} Title={"ACHIEVMENTS"}/>
                       <DepartmentNavigationButton onClick={()=>router.push('/AllDepartment/EE/research')} Title={"RESEARCH HIGHLIGHT"}/>
                       <DepartmentNavigationButton onClick={()=>router.push('/AllDepartment/EE/usefullLinks')} Title={"USEFULL LINKS"}/>
                   </div>
               </div>
           </div>
        </div>
       )
   }
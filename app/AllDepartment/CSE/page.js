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

export default function CSE() {
    const router=useRouter();
    return (
      <div className="p-10 max-sm:px-0 border border-red-700 bg-orange-50">
        {/* heading */}
        <div className="text-3xl max-sm:text-2xl max-sm:ml-2 font-bold text-red-900 mb-10">
          COMPUTER SCIENCE AND ENGINEERING
        </div>
        {/* Section one */}
        <div className="grid grid-cols-6 max-md:grid-cols-1">
          {/* Department Picture */}
          <div className="h-[500px] flex justify-start py-10 col-span-3 mr-4 max-sm:mr-0">
            <Image
              src="/cseimg.png"
              className="rounded-lg max-sm:rounded-none shadow-lg shadow-slate-600 h-full"
              alt="Logo"
              width={700}
              height={1000}
            />
          </div>
         

          {/* Notice  */}
          <div className="h-[500px] py-10  col-span-3 max-lg:col-span-3 flex flex-col max-md:mb-10">
            <div className="bg-white overflow-hidden rounded-lg shadow-lg shadow-slate-600 px-2 ">
              <div className="flex justify-between text-lg font-semibold text-slate-500">
                <div>Important Notice</div>
                <button className="hover:text-blue-500">View All</button>
              </div>
              <div className="overflow-hidden space-y-2">
                {Notices.map((notice, id) => {
                  return (
                    <DepartmentNotify
                      key={id}
                      title={notice.notice}
                      fun={notice.fun}
                    />
                  )
                })}
              </div>
            </div>
          </div>
        </div>
        {/* Section 2 */}
        <div className="grid grid-cols-2 max-md:grid-cols-1">
          {/* About */}
          <div className="px-6 max-sm:px-2 ">
            <div className="mb-4 text-2xl max-sm:text-lg font-semibold text-red-950">
              About
            </div>
            <div className="text-justify max-sm:text-[12px]">
              The Department of Computer Science and Engineering offers courses
              leading to Bachelor of Technology in Computer Science and
              Engineering. The department has a very good infrastructure and
              faculty to provide excellent education. The curriculum is updated
              regularly to keep up with the growing demands and the changing
              trends of the software industry and research laboratories. The
              department provides a wide range of courses. The prominent among
              them includes Data Structures, Design and Analysis of Algorithms,
              System Programming, Computer Networks, Data Mining and
              Warehousing, Distributed and Parallel Computing, Mobile and
              Wireless Computing, Real-time Systems, Cryptography, Genetic
              Algorithm and Artificial Intelligence. Apart from these, students
              are also offered a wide variety of electives.
            </div>
          </div>
          {/* Navigation Button  */}
          <div className="grid grid-cols-3 max-sm:grid-cols-2 mt-10">
            <DepartmentNavigationButton
              onClick={() => router.push('/AllDepartment/CSE/hod')}
              Title={'HOD Info'}
            />
            <DepartmentNavigationButton
              onClick={() => router.push('/AllDepartment/CSE/syllabus')}
              Title={'SYLLABUS'}
            />
            <DepartmentNavigationButton
              onClick={() => router.push('/AllDepartment/CSE/activities')}
              Title={'ACTIVITIES'}
            />
            <DepartmentNavigationButton
              onClick={() => router.push('/AllDepartment/CSE/faculty')}
              Title={'FACULTY'}
            />
            <DepartmentNavigationButton
              onClick={() => router.push('/AllDepartment/CSE/labs')}
              Title={'LABS'}
            />
            <DepartmentNavigationButton
              onClick={() => router.push('/AllDepartment/CSE/mission')}
              Title={'MISSION AND VISSION'}
            />
            <DepartmentNavigationButton
              onClick={() => router.push('/AllDepartment/CSE/achivments')}
              Title={'ACHIEVMENTS'}
            />
            <DepartmentNavigationButton
              onClick={() => router.push('/AllDepartment/CSE/timeTable')}
              Title={'TIME TABLE'}
            />
          </div>
        </div>
      </div>
    )
   }
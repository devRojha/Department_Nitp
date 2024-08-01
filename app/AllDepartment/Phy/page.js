"use client"
import BackDepartment from "@/components/BackDepartment";
import { DepartmentNavigationButton } from "@/components/DepartmentNavigationButton"
import DepartmentNotify from "@/components/DepartmentNotify";
import Image from "next/image"
import { useRouter } from 'next/navigation';

const Notices = [
  {
    id: 1,
    notice: "No any notice for now",
    link: ""
  },

]

export default function ME() {
  const router = useRouter();
  return (
    <div className="p-10 max-sm:px-0 border border-red-700">
      {/* heading */}
      <div className="text-3xl max-sm:text-2xl max-sm:ml-2 font-bold text-red-900 mb-4">
        PHYSICS
      </div>
      <BackDepartment navigate={"/"} />
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
        <div className=" py-10  col-span-3 max-lg:col-span-3 flex flex-col max-md:mb-10">
          <div className="bg-white rounded-lg shadow-lg shadow-slate-600 px-4 h-[420px] overflow-y-auto">
            <div className="flex justify-between mb-4 text-lg font-semibold text-slate-500">
              <div>Important Notice</div>
              <button className="hover:text-blue-500">View All</button>
            </div>
            <div className="overflow-hidden flex flex-col-reverse">
              {Notices.map((notice, id) => {
                return (
                  <DepartmentNotify
                    key={id}
                    title={notice.notice}
                    link={notice.link ? notice.link : ""}
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
            The Department of Physics was established in 1924 and since then
            has been functioning as an important part of the institute. As of
            now, the Department has eight faculty members and four support
            staffs at different levels. At present, there are 12 students
            enrolled in Integrated M. Sc. And 8 students enrolled in the Ph.
            D. program.The Department is mentored by Prof. K.L.Chopra, Ex-Director, IIT Kharagpur.
          </div>
        </div>
        {/* Navigation Button  */}
        <div className="grid grid-cols-3 max-sm:grid-cols-2 mt-10">
          <DepartmentNavigationButton
            onClick={() => router.push('/AllDepartment/Phy/mission')}
            Title={'MISSION AND VISSION'}
          />
          <DepartmentNavigationButton
            onClick={() => router.push('/AllDepartment/Phy/faculty')}
            Title={'FACULTY'}
          />
          <DepartmentNavigationButton
            onClick={() => router.push('/AllDepartment/Phy/syllabus')}
            Title={'SYLLABUS'}
          />
          <DepartmentNavigationButton
            onClick={() => router.push('/AllDepartment/Phy/faculty')}
            Title={'TIME TABLE'}
          />
          <DepartmentNavigationButton
            onClick={() => router.push('/AllDepartment/Phy/faculty')}
            Title={'LABS'}
          />
          <DepartmentNavigationButton
            onClick={() => router.push('/AllDepartment/Phy/activities')}
            Title={'ACTIVITIES'}
          />


          <DepartmentNavigationButton
            onClick={() => router.push('/AllDepartment/Phy/achievements')}
            Title={'ACHIEVEMENTS'}
          />
          <DepartmentNavigationButton
            onClick={() => router.push('/AllDepartment/Phy/research')}
            Title={'Research Highlights'}
          />
        </div>
      </div>
    </div>
  )
}




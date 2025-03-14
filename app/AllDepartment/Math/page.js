'use client'
import BackDepartment from '@/components/BackDepartment'
import { DepartmentNavigationButton } from '@/components/DepartmentNavigationButton'
import DepartmentNotify from '@/components/DepartmentNotify'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Notices = [
  {
    id: 1,
    notice: 'No any notice for now',
    link: '',
  },
  
]

export default function Math() {
  const router = useRouter()
  return (
    <div className="p-10 max-sm:px-0 border border-red-700 ">
      {/* heading */}
      <div className="text-3xl max-sm:text-2xl max-sm:ml-2 font-bold text-red-900 mb-10">
        MATHEMATICS
      </div>
      <BackDepartment navigate={"/"}/>
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
          <div className="bg-white overflow-hidden rounded-lg shadow-lg shadow-slate-600 px-2 h-[420px] overflow-y-auto">
            <div className="flex justify-between text-lg font-semibold text-slate-500">
              <div>Announcement</div>
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
            The Department of Mathematics was established in 1924 and department
            offer several courses that support other engineering departments.
            Recently a new program Integrated M. Sc. in Mathematics is started
            and running successfully from the academic year 2015-2016. Current
            faculty strength of the department is nine and they are experienced
            in teaching and research in several branches of Mathematics.
            Department of Mathematics is one of the backbone of the Institution
            as it is an essential department for engineering courses up to Ph.D
            level. 
            <button
              onClick={() => router.push('/AllDepartment/Phy/about')}
              className="text-blue-600"
            >
             more...
          </button>
          </div>

        </div>
        {/* Navigation Button  */}
        <div className="grid grid-cols-3 max-sm:grid-cols-2 mt-10">
          
          <DepartmentNavigationButton
            onClick={() => router.push('/AllDepartment/Math/mission')}
            Title={'MISSION AND VISSION'}
          />
          <DepartmentNavigationButton
            onClick={() => router.push('/AllDepartment/Math/faculty')}
            Title={'FACULTY'}
          />
          <DepartmentNavigationButton
            onClick={() => router.push('/AllDepartment/Math/syllabus')}
            Title={'SYLLABUS'}
          />
          <DepartmentNavigationButton
            onClick={() => router.push('/AllDepartment/Math/timeTable')}
            Title={'TIME TABLE'}
          />

          <DepartmentNavigationButton
            onClick={() => router.push('/AllDepartment/Math/hod')}
            Title={'LABS'}
          />

          <DepartmentNavigationButton
            onClick={() => router.push('/AllDepartment/Math/activities')}
            Title={'ACTIVITIES'}
          />
          <DepartmentNavigationButton
            onClick={() => router.push('/AllDepartment/Math/research')}
            Title={'RESEARCH HIGHLIGHTS'}
          />

        </div>
      </div>
    </div>
  )
}




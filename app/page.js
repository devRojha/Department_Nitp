"use client"
import { DepartmentNavigateButton } from "@/components/DepartmentNavigateButton"
import { useRouter } from "next/navigation"


export default function Home() {  
  const router = useRouter();
 return (
  <div className="bg-orange-50   flex justify-center py-10 px-0">
    <div className="flex flex-col w-full">
        {/* heading */}
        <div className="font-bold text-3xl text-red-900 flex justify-center">DEPARTMENTS</div>
          <div className="mt-10 mx-0 max-sm:mx-2 grid grid-cols-3 max-md:grid-cols-2  max-sm:grid-cols-1">
            <DepartmentNavigateButton onClick={()=>{router.push("/AllDepartment/Archi");}}department={"Architecture & Planning"}/>
            <DepartmentNavigateButton onClick={()=>{router.push("/AllDepartment/Chem");}}department={"Chemistry"}/>
            <DepartmentNavigateButton onClick={()=>{router.push("/AllDepartment/CE");}}department={"Civil"}/>
            <DepartmentNavigateButton onClick={()=>{router.push("/AllDepartment/CSE");}}department={"Computer Science"}/>
            <DepartmentNavigateButton onClick={()=>{router.push("/AllDepartment/EE");}}department={"Electrical"}/>
            <DepartmentNavigateButton onClick={()=>{router.push("/AllDepartment/ECE");}}department={"Electronics And Comunication"}/>
            <DepartmentNavigateButton onClick={()=>{router.push("/AllDepartment/IMSc");}}department={"IMSc Math"}/>
            <DepartmentNavigateButton onClick={()=>{router.push("/AllDepartment/Math");}}department={"Mathmatics And Computing"}/>
            <DepartmentNavigateButton onClick={()=>{router.push("/AllDepartment/ME");}}department={"Mechanical"}/>
            <DepartmentNavigateButton onClick={()=>{router.push("/AllDepartment/Phy");}}department={"Physics"}/>
            <DepartmentNavigateButton onClick={()=>{router.push("/AllDepartment/Humanities");}}department={"Humanities & Social Sciences"}/>
            <DepartmentNavigateButton onClick={()=>{router.push("/AllDepartment/Mechatronics");}}department={"Mechatronics & Automation"}/>
          </div>                      
      </div>
  </div>
 )
}

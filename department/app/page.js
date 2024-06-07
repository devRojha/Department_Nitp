"use client"
import { DepartmentButton } from "@/components/DepartmentButton"
import { useRouter } from "next/navigation"


export default function Home() {  
  const router = useRouter();
 return (
  <div className="border bg-orange-50 border-red-500  flex justify-center p-20">
    <div className="flex flex-col w-full">
        {/* heading */}
        <div className="font-bold text-3xl text-red-900 flex justify-center">DEPARTMENTS</div>
        <div className="mt-10 mx-20 max-sm:mx-10 grid grid-cols-2 max-md:grid-cols-1">
            <DepartmentButton onClick={()=>{router.push("/AllDepartment/Archi");}}department={"Architecture & Planning"}/>
            <DepartmentButton onClick={()=>{router.push("/AllDepartment/Chem");}}department={"Chemistry"}/>
            <DepartmentButton onClick={()=>{router.push("/AllDepartment/CSE");}}department={"Computer Science"}/>
            <DepartmentButton onClick={()=>{router.push("/AllDepartment/ECE");}}department={"Electronics And Comunication"}/>
            <DepartmentButton onClick={()=>{router.push("/AllDepartment/EE");}}department={"Electrical"}/>
            <DepartmentButton onClick={()=>{router.push("/AllDepartment/ME");}}department={"Mechanical"}/>
            <DepartmentButton onClick={()=>{router.push("/AllDepartment/CE");}}department={"Civil"}/>
            <DepartmentButton onClick={()=>{router.push("/AllDepartment/Math");}}department={"Mathmatics And Computing"}/>
            <DepartmentButton onClick={()=>{router.push("/AllDepartment/IMSc");}}department={"IMSc Math"}/>
            
        </div>                      
    </div>
  </div>
 )
}

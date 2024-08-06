"use client"
import { DepartmentNavigateButton } from "@/components/DepartmentNavigateButton"
import Image from "next/image";
import { useRouter } from "next/navigation"


export default function Home() {  
  const router = useRouter();
 return (
  <div className="flex justify-center py-10 px-0">
    <div className="flex flex-col w-full">
        {/* heading */}
        <div className="font-bold text-3xl text-red-900 flex justify-center">DEPARTMENTS</div>
          <div className="mt-10 mx-0 max-sm:mx-2 grid grid-cols-3 max-md:grid-cols-2  max-sm:grid-cols-1">
            <DepartmentNavigateButton onClick={()=>{router.push("/AllDepartment/Archi");}}department={"Architecture & Planning"} icon={"/architecture_icon.png"}/>
            <DepartmentNavigateButton onClick={()=>{router.push("/AllDepartment/Chem");}}department={"Chemistry"} icon={"/chemistry_icon.png"}/>
            <DepartmentNavigateButton onClick={()=>{router.push("/AllDepartment/Chemical");}}department={"Chemical Engineering and Technology"} icon={"/chemical_icon.png"}/>
            <DepartmentNavigateButton onClick={()=>{router.push("/AllDepartment/CE");}}department={"Civil"} icon={"/civil_icon.png"}/>
            <DepartmentNavigateButton onClick={()=>{router.push("/AllDepartment/CSE");}}department={"Computer Science"} icon={"/computer_icon.png"}/>
            <DepartmentNavigateButton onClick={()=>{router.push("/AllDepartment/EE");}}department={"Electrical"} icon={"/electric_icon.png"} />
            <DepartmentNavigateButton onClick={()=>{router.push("/AllDepartment/ECE");}}department={"Electronics And Comunication"} icon={"/electronics_icon.png"}/>
            <DepartmentNavigateButton onClick={()=>{router.push("/AllDepartment/Humanities");}}department={"Humanities & Social Sciences"} icon={"/humanities_icon.png"}/>
            <DepartmentNavigateButton onClick={()=>{router.push("/AllDepartment/Material");}}department={"Material Science & Engineering"} icon={"/mathematics-icon.png"}/>
            <DepartmentNavigateButton onClick={()=>{router.push("/AllDepartment/Math");}}department={"Mathmatics And Computing"} icon={"/mathematics-icon.png"}/>
            {/* <DepartmentNavigateButton onClick={()=>{router.push("/AllDepartment/MCA");}}department={"Master of Computer Applications"} icon={"/mathematics-icon.png"}/> */}
            <DepartmentNavigateButton onClick={()=>{router.push("/AllDepartment/ME");}}department={"Mechanical"} icon={"/mechanical_icon.png"}/>
            <DepartmentNavigateButton onClick={()=>{router.push("/AllDepartment/Mechatronics");}}department={"Mechatronics & Automation"} icon={"/mechatronics_icon.png"}/>
            <DepartmentNavigateButton onClick={()=>{router.push("/AllDepartment/Phy");}}department={"Physics"} icon={"/physics_icon.png"}/>
          </div>                      
      </div>
  </div>
 )
}

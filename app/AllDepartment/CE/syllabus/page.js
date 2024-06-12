"use client"

import { useState } from "react"


export default function Page(){
    const [ug , setUg] = useState(true);
    const [pg , setPg] = useState(false);
    const [dual , setdual] = useState(false);
    const [phd , setphd] = useState(false);
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
                        CIVIL ENGINEERING
                    </p>
                </div>
            </div>
            <div className="mb-10 flex space-x-1 max-sm:text-[10px]">
                <button onClick={()=>{
                    setUg(true);
                    setPg(false);
                    setdual(false);
                    setphd(false);
                }} className={`border border-black rounded ${(ug)?"text-white bg-red-900":"text-red-900"} px-2`}>UG Course</button>
                <button onClick={()=>{
                    setUg(false);
                    setPg(true);
                    setdual(false);
                    setphd(false);
                }} className={`border border-black rounded ${(pg)?"text-white bg-red-900":"text-red-900"} px-2`}>PG (M.Tech/MURP) Course</button>
                <button onClick={()=>{
                    setUg(false);
                    setPg(false);
                    setdual(false);
                    setphd(true);
                }} className={`border border-black rounded ${(phd)?"text-white bg-red-900":"text-red-900"} px-2`}>PhD Course</button>
                <button onClick={()=>{
                    setUg(false);
                    setPg(false);
                    setdual(true);
                    setphd(false);
                }} className={`border border-black rounded ${(dual)?"text-white bg-red-900":"text-red-900"} px-2`}>Dual Degree</button>
            </div>
            {/* UG PROGRAM */}
            <div className={`mb-10 ${(ug == false)?"hidden":""}`}>
                <div className="text-red-900 font-bold text-3xl max-sm:text-2xl mb-8">UG PROGRAM :-</div>
                <div className=" overflow-x-auto">
                <div className="border grid grid-cols-12 min-w-[1100px]">
                    <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Dept.</div>
                    <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Sem / Electives</div>
                    <div className="col-span-2 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Course Code</div>
                    <div className="col-span-4 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Course Title</div>
                    <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">L</div>
                    <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">T</div>
                    <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">P</div>
                    <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Credits</div>
                   <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"1HS101"}
                        title={"English Literature"}
                        L={"2"} T={"1"} P={"0"}
                        cred={"3"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"MA101"}
                        title={"Engineering Mathematics I"}
                        L={"3"} T={"1"} P={"0"}
                        cred={"4"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"1PH101"}
                        title={"Engineering Physics TH"}
                        L={"3"} T={"1"} P={"0"}
                        cred={"4"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"1PH102"}
                        title={"Engineering Physics Lab"}
                        L={"0"} T={"0"} P={"3"}
                        cred={"1"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"1CS101"}
                        title={"Introduction to Computing"}
                        L={"2"} T={"1"} P={"0"}
                        cred={"3"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"1CS102"}
                        title={"Computing Lab"}
                        L={"0"} T={"0"} P={"3"}
                        cred={"1"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"1EE101"}
                        title={"Elements of Electrical Engg"}
                        L={"3"} T={"1"} P={"0"}
                        cred={"4"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"1EC102"}
                        title={"Elements of Electronics Engg Lab"}
                        L={"0"} T={"0"} P={"3"}
                        cred={"1"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"2EC101"}
                        title={"Engineering Graphics"}
                        L={"1"} T={"0"} P={"3"}
                        cred={"2"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"1CE105"}
                        title={"Fluid Mechanics & Hydraulics "}
                        L={"3"} T={"1"} P={"0"}
                        cred={"4"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"CE106"}
                        title={"Fluid Mechanics & Hydraulics Lab"}
                        L={"0"} T={"0"} P={"3"}
                        cred={"1"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"CE107"}
                        title={"Mechanics of Solids"}
                        L={"3"} T={"1"} P={"0"}
                        cred={"4"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"CE108"}
                        title={"Surveying"}
                        L={"3"} T={"1"} P={"0"}
                        cred={"4"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"CE109"}
                        title={"Surveying lab"}
                        L={"0"} T={"0"} P={"3"}
                        cred={"1"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"CH104"}
                        title={"Green Technology(Environmental Science)"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"MA104"}
                        title={"Tools of Applied Mathematics"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"PH104"}
                        title={"Material Science & Technology - 1"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"CE110"}
                        title={"Design of Concrete Structures"}
                        L={"3"} T={"1"} P={"0"}
                        cred={"4"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"CE111"}
                        title={"Cement Concrete Lab"}
                        L={"0"} T={"0"} P={"3"}
                        cred={"1"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"CE112"}
                        title={"Geotechnical Engineering -I"}
                        L={"3"} T={"1"} P={"0"}
                        cred={"4"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"CE113"}
                        title={"Geotechnical Engineering -I Lab"}
                        L={"0"} T={"0"} P={"3"}
                        cred={"1"}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"CE114"}
                        title={"Environmental Engineering -I"}
                        L={"3"} T={"1"} P={"0"}
                        cred={"4"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"CH105A"}
                        title={"Bio Science"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"MA108"}
                        title={"Numerical Methods for Engineers"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"GE105"}
                        title={"EAA - I NSS"}
                        L={"-"} T={"-"} P={"-"}
                        cred={"-"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"CE116"}
                        title={"Design of steel structures"}
                        L={"3"} T={"1"} P={"0"}
                        cred={"4"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"CE117"}
                        title={"Design of steel structures Lab"}
                        L={"0"} T={"0"} P={"3"}
                        cred={"1"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"CE118"}
                        title={"Geotechnical Engineering - II"}
                        L={"3"} T={"1"} P={"0"}
                        cred={"4"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"CE119"}
                        title={"Material Testing Lab"}
                        L={"0"} T={"0"} P={"3"}
                        cred={"1"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"CE121"}
                        title={"Transportation Engineering -I"}
                        L={"3"} T={"1"} P={"0"}
                        cred={"4"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"CE122"}
                        title={"Transportation Engineering -I Lab"}
                        L={"0"} T={"0"} P={"3"}
                        cred={"1"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"CE1xx"}
                        title={"Department Elective -I "}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"xx1xx"}
                        title={"Engineering/Open- I(Elective)"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"CE123"}
                        title={"Hydrology and Open channel Flow"}
                        L={"3"} T={"1"} P={"0"}
                        cred={"4"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"CE124"}
                        title={"Hydrology and OCF Lab"}
                        L={"0"} T={"0"} P={"3"}
                        cred={"1"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"CE125"}
                        title={"Transportation Engg -II"}
                        L={"3"} T={"1"} P={"0"}
                        cred={"4"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"CE191"}
                        title={"Minor Project-I"}
                        L={"0"} T={"0"} P={"3"}
                        cred={"1"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"CE1XX"}
                        title={"Department Elective -II"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"CE1XX"}
                        title={"Engineering/Open- II(Elective)"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"GE103"}
                        title={"Industrial Interaction & Soft Skill Development"}
                        L={"-"} T={"-"} P={"-"}
                        cred={"-"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"GE106"}
                        title={"EAA - II NSS"}
                        L={"-"} T={"-"} P={"-"}
                        cred={"-"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"CE1XX"}
                        title={"Department Elective -III"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"CE1XX"}
                        title={"Department Elective -IV"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"XX1XX"}
                        title={"Engineering/Open- III/HSS/Science/(Elective)"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"xx1XX"}
                        title={"Engineering/Open- IV/HSS/Science/(Elective)"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"CE193"}
                        title={"Minor Project-II"}
                        L={"0"} T={"0"} P={"6"}
                        cred={"2"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"CE192"}
                        title={"Industrial Training(4 to 6 weeks after 6th Sem"}
                        L={"-"} T={"-"} P={"-"}
                        cred={"1"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"CE194"}
                        title={"General Seminar"}
                        L={"0"} T={"0"} P={"6"}
                        cred={"2"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"CE195"}
                        title={"Major Project"}
                        L={""} T={""} P={""}
                        cred={"20"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"CE196"}
                        title={"Comprehensive Viva"}
                        L={""} T={""} P={""}
                        cred={"2"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"CE141"}
                        title={"Advanced Design of Steel Structures"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"CE142"}
                        title={"Prestressed Concrete Design"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"CE144"}
                        title={"Design of Dams"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"CE145"}
                        title={"Disaster Management and Mitigation"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"CE146"}
                        title={"Finite Element Method"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"CE147"}
                        title={"Computer Aided Design"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"CE148"}
                        title={"Water and Land Management"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"CE149"}
                        title={"Air Pollution Engineering"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"CE150"}
                        title={"Traffic engineering"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"CE151"}
                        title={"Advanced Soil Mechanics"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"CE153"}
                        title={"Structured Dynamics"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"CE154"}
                        title={"River Hydraulics and Sediment Transport"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"CE155"}
                        title={"Civil Engineering Drawing Using Auto CAD"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"CE156"}
                        title={"Ground Water Engineering"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"CE157"}
                        title={"Airport Planning and Design"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"CE158"}
                        title={"Design of Plate and Shell"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"CE159"}
                        title={"Industrial Waste Treatment"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"CE160"}
                        title={"Water Resources Planning and Management"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"CE161"}
                        title={"Soil Dynamics"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"CE162"}
                        title={"System Engineering "}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"CE163"}
                        title={"Water Power Engineering"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"CE164"}
                        title={"Bridge Engineering"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"CE165"}
                        title={"Floods and Droughts"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"CE166"}
                        title={"Solid Waste Management"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"CE167"}
                        title={"Advanced Foundation Engineering"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"CE168"}
                        title={"Transportation System and Planning"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"CE169"}
                        title={"Land Drainage"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"CE170"}
                        title={"Building Science"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"CE171"}
                        title={"Mechanics of Composite Materials"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"CE172"}
                        title={"Advanced surveying"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"CE173"}
                        title={"Irrigation Engineering and Hydraulics structure"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"CE174"}
                        title={"Rock Mechanics"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"CE175"}
                        title={"Earthquake Resistant Structures"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"CE182"}
                        title={"Environmental Impact Assesments"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                        url={""}
                    />
                    <SyallbusComp
                        dep={"CEUG"}
                        sem={""}
                        code={"CE183"}
                        title={"Structural Analysis"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                        url={""}
                    />

                </div>
                </div>
            </div>
            {/* PG PROGRAM  */}
            <div className={`mb-10 ${(pg == false)?"hidden":""}`}>
                <div className="text-red-900 font-bold text-3xl max-sm:text-2xl mb-8">PG PROGRAM :-</div>
                <div className=" overflow-x-auto">
                <div className="border grid grid-cols-12 min-w-[1100px]">
                    <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Dept.</div>
                    <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Sem / Electives</div>
                    <div className="col-span-2 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Course Code</div>
                    <div className="col-span-4 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Course Title</div>
                    <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">L</div>
                    <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">T</div>
                    <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">P</div>
                    <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Credits</div>
                              <SyallbusComp
                        dep={"CEPG"}
                        sem={"1"}
                        code={"CE601"}
                        title={"Advanced Structure Analysis"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"1"}
                        code={"CE602"}
                        title={"Theory of Elasticity and Plasiticity"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"1"}
                        code={"CE6xx"}
                        title={"Elective I"}
                        L
                        ={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"1"}
                        code={"CE6XX"}
                        title={"Elective II"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"1"}
                        code={"CE6xx"}
                        title={"Elective III/Open Elective"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"1"}
                        code={"CE6081"}
                        title={"Advanced Civil Engineering Lab I"}
                        L={"0"} T={"0"} P={"6"}
                        cred={"4"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"2"}
                        code={"CE603"}
                        title={"Advanced Design of Concrete and Steel Structures"}
                        L={"0"} T={"0"} P={"3"}
                        cred={"2"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"2"}
                        code={"CE6xx"}
                        title={"Elective IV"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"2"}
                        code={"CE6xx"}
                        title={"Elective V"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"2"}
                        code={"CE6xx"}
                        title={"Elective VI"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"2"}
                        code={"CE6xx"}
                        title={"Elective VII/Open Elective"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"2"}
                        code={"CE690"}
                        title={"Seminar"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"2"}
                        code={"CE686"}
                        title={"Advanced Civil Engineering Lab II"}
                        L={"0"} T={"0"} P={"6"}
                        cred={"4"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"3"}
                        code={"CE691"}
                        title={"Seminar and Comprehensive Viva I"}
                        L={"0"} T={"0"} P={"3"}
                        cred={"2"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"3"}
                        code={"CE692"}
                        title={"Dissertion (to be continued in 4th sem)"}
                        L={"0"} T={"0"} P={"12"}
                        cred={"8"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"4"}
                        code={"CE693"}
                        title={"Seminar and Comprehensive Viva II"}
                        L={"0"} T={"0"} P={"3"}
                        cred={"2"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"4"}
                        code={"CE694"}
                        title={"Dissertation"}
                        L={"0"} T={"0"} P={"15"}
                        cred={"10"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"EL-x"}
                        code={"CE604"}

                        title={"Advanced Concrete Technology"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"EL-x"}
                        code={"CE605"}
                        title={"Pre-Stressed Concrete Structure"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"EL-x"}
                        code={"CE606"}
                        title={"Bridge Engineering"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"EL-x"}
                        code={"CE607"}
                        title={"Theory of Plates and Shells"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"EL-x"}
                        code={"CE608"}
                        title={"Stuctural Stability"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"EL-x"}
                        code={"CE609"}
                        title={"Earthquakes Resistant Design of Structures"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"EL-x"}
                        code={"CE610"}
                        title={"Finite Element Method"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"EL-x"}
                        code={"CE611"}
                        title={"Structural Dynamics "}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"EL-x"}
                        code={"CE612"}
                        title={"Construction Technology and Management"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"EL-x"}
                        code={"CE613"}
                        title={"Mechanics of Composite Materials"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"EL-x"}
                        code={"CE614"}
                        title={"Reliability Engineering"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"EL-x"}
                        code={"CE615"}
                        title={"Fracture Mechanics"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />

                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"EL-x"}
                        code={"CE616"}
                        title={"Structural Health Monitoring"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"EL-x"}
                        code={"CE617"}
                        title={"Optimization Techniques in Civil Engineering"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />


                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"EL-x"}
                        code={"CE618"}
                        title={"Fuzzy Logic and Artificial Intelligence in Civil Engineering Applications"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"EL-x"}
                        code={"CE619"}
                        title={"Computational Plasticity"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />

                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"EL-x"}
                        code={"MA604"}
                        title={"Probability and Statistics"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />

                    <SyallbusComp
                        dep={""}
                        sem={""}
                        code={""}
                        title={"Transport Engineering"}
                        L={""} T={""} P={""}
                        cred={""}
                    />

                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"1"}
                        code={"CE631"}
                        title={"Transportation Planning"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />

                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"1"}
                        code={"CE632"}
                        title={"Pavement Analysis and Design"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />

                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"1"}
                        code={"CE6xx"}
                        title={"Elective I"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />

                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"1"}
                        code={"CE6XX"}
                        title={"Elective II"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"1"}
                        code={"CE6xx"}
                        title={"Elective III/Open Elective"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"1"}
                        code={"CE681"}
                        title={"Advanced Civil Engineering Lab -I"}
                        L={"0"} T={"0"} P={"6"}
                        cred={"4"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"1"}
                        code={""}
                        title={"Tatal Semester Credit"}
                        L={"15"} T={"0"} P={"6"}
                        cred={"19"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"2"}
                        code={"CE633"}
                        title={"Traffic Engineering and Management"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"2"}
                        code={"CE6XX"}
                        title={"Elective IV"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"2"}
                        code={"CE6XX"}
                        title={"Elective V"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"2"}
                        code={"CE6XX"}
                        title={"Elective VI"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"2"}
                        code={"CE6XX"}
                        title={"Elective VII/Open Elective"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"2"}
                        code={"CE686"}
                        title={"Advanced Civil Engineering Lab -II"}
                        L={"0"} T={"0"} P={"3"}
                        cred={"2"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"2"}
                        code={"CE690"}
                        title={`seminar`}
                        L={"0"} T={"0"} P={"6"}
                        cred={"4"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"2"}
                        code={""}
                        title={"Total semester Credit"}
                        L={"15"} T={"0"} P={"9"}
                        cred={"21"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"3"}
                        code={"CE691"}
                        title={`"sem_elect"inar and Comprehensive Viva-I`}
                        L={"0"} T={"0"} P={"3"}
                        cred={"2"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"3"}
                        code={"CE692"}
                        title={`Dissertion (to be continued in 4th sem)`}
                        L={"0"} T={"0"} P={"12"}
                        cred={"8"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"3"}
                        code={""}
                        title={"Total semester Credit"}
                        L={"0"} T={"0"} P={"15"}
                        cred={"10"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"4"}
                        code={"CE693"}
                        title={`"sem_elect"inar and Comprehensive Viva-II`}
                        L={"0"} T={"0"} P={"3"}
                        cred={"2"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"4"}
                        code={"CE694"}
                        title={"Elective VI"}
                        L={"0"} T={"0"} P={"15"}
                        cred={"10"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"4"}
                        code={""}
                        title={"Total Semester Credit"}
                        L={"0"} T={"0"} P={"18"}
                        cred={"12"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={""}
                        code={""}
                        title={"Comulative Total Credit"}
                        L={""} T={""} P={""}
                        cred={"62"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={""}
                        code={"CE634"}
                        title={"Airport Planning and Desingn"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={""}
                        code={"CE635"}
                        title={"Hignway Economics"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={""}
                        code={"CE636"}
                        title={"Railway Engineering"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={""}
                        code={"CE637"}
                        title={"Remote Sensing and GIS and their Appications"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={""}
                        code={"CE638"}
                        title={"Highway Construction Practices and Maintenance"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={""}
                        code={"CE639"}
                        title={"Multi-Modal Transportation System Planning and Design"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={""}
                        code={"CE640"}
                        title={"Intelligent Transportation Systems"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={""}
                        code={"CE641"}
                        title={"Advance Highway Design"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={""}
                        code={"CE642"}
                        title={"Traffic Flow Theory"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={""}
                        code={"CE643"}
                        title={"Highway Subgrade and Foundation"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={""}
                        code={"CE644"}
                        title={"Pavement Materials"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={""}
                        code={"CE645"}
                        title={"Urban Transportation Planning"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />

                    <SyallbusComp
                        dep={"CEPG"}
                        sem={""}
                        code={"CE646"}
                        title={"Pavement Management System"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={""}
                        code={"CE647"}
                        title={"System Analysis and Optimization Techniques"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={""}
                        code={"CE648"}
                        title={"Environmental Impact Assessment"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={""}
                        code={"MA604"}
                        title={"Probability and Statistics"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={""}
                        code={"CE649"}
                        title={"Ground Improvement Techniques"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                    <SyallbusComp
                        dep={""}
                        sem={""}
                        code={""}
                        title={"River Engineering"}
                        L={""} T={""} P={""}
                        cred={""}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"1"}
                        code={"CE761"}
                        title={"River Morphology and Hydraulics"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"1"}
                        code={"CE662"}
                        title={"Advanced Hydrology"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"1"}
                        code={"CExxx"}
                        title={"Elective I"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"1"}
                        code={"CExxx"}
                        title={"Elective II"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"1"}
                        code={"CE6xx"}
                        title={"Elective III/Open Elective"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"1"}
                        code={"CE681"}
                        title={"Advanced Civil Engineering Lab -Ia"}
                        L={"0"} T={"0"} P={"6"}
                        cred={"4"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"1"}
                        code={""}
                        title={"Total Semester Credit"}
                        L={"15"} T={"0"} P={"6"}
                        cred={"19"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"2"}
                        code={"CE762"}
                        title={"River Training and flood control"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"2"}
                        code={"CExxx"}
                        title={"Elective IV"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"2"}
                        code={"CECCC"}
                        title={"Elective V"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"2"}
                        code={"CE6XX"}
                        title={"Elective VI"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"2"}
                        code={"CE6xx"}
                        title={"Elective VII/Open Elective"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"2"}
                        code={"CE645"}
                        title={"Advanced Civil Engineering Lab-II"}
                        L={"3"} T={"0"} P={"6"}
                        cred={"4"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"2"}
                        code={"CE690"}
                        title={`"Sem_elect"inar`}
                        L={"0"} T={"0"} P={"3"}
                        cred={"2"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"2"}
                        code={""}
                        title={"Total semester Credit"}
                        L={"12"} T={"0"} P={"9"}
                        cred={"18"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"3"}
                        code={"CE691"}
                        title={`"sem_elect"inar and Comprehensive Viva -I`}
                        L={"0"} T={"0"} P={"3"}
                        cred={"2"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"3"}
                        code={"CE692"}
                        title={`Dissertation (to be contiued in 4th "sesm_elect")`}
                        L={"0"} T={"0"} P={"12"}
                        cred={"8"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"3"}
                        code={""}
                        title={"Total semester Credit"}
                        L={"0"} T={"0"} P={"15"}
                        cred={"10"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"4"}
                        code={"CE693"}
                        title={`seminar and Comprehensive Viva -II`}
                        L={"0"} T={"0"} P={"3"}
                        cred={"2"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"4"}
                        code={"CE694"}
                        title={`Dissertation (Final)`}
                        L={"0"} T={"0"} P={"15"}
                        cred={"10"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"4"}
                        code={""}
                        title={"Total semester Credit"}
                        L={"0"} T={"0"} P={"18"}
                        cred={"12"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={""}
                        code={""}
                        title={"Comulative Total Credit"}
                        L={""} T={""} P={""}
                        cred={"62"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={""}
                        code={"CE661"}
                        title={"Advanced Hydraulics"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={""}
                        code={"CE663"}
                        title={"Advanced Groundwater Engineering"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={""}
                        code={"CE668"}
                        title={"Reservoir Operation and Planning"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={""}
                        code={"CE669"}
                        title={"River Pollution and control"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={""}
                        code={"CE670"}
                        title={"Remote Sensing and GIS for Water Resources"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={""}
                        code={"CE671"}
                        title={"Hydro Power Engineering"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={""}
                        code={"CE672"}
                        title={"Irrigation Water Management "}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={""}
                        code={"CE675"}
                        title={"Flood and Drought Management"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={""}
                        code={"CE676"}
                        title={"Design of Hydraulic Structures"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={""}
                        code={"CE764"}
                        title={"Environmental Impact Assessment of River Valley Projects"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={""}
                        code={"CE765"}
                        title={"Climate Change Implications on River Flows"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={""}
                        code={"CE766"}
                        title={"Computational Hydraulics"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={""}
                        code={"CE767"}
                        title={"River Ecology and Environmental Flows"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"1"}
                        code={"CE701"}
                        title={"Environmental Chemistry and Microbiology"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"1"}
                        code={"CE702"}
                        title={"Water and Wastewater Treatment"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"1"}
                        code={"CE6xx"}
                        title={"Elective I"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"1"}
                        code={"CE6xx"}
                        title={"Elective II"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"1"}
                        code={"CE6xx"}
                        title={"Elective III/Open Elective"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"1"}
                        code={"CE681"}
                        title={"Advanced Civil Engineering Lab I"}
                        L={"0"} T={"0"} P={"6"}
                        cred={"4"}
                    />
                    <SyallbusComp
                        dep={"CEPG"}
                        sem={"1"}
                        code={""}
                        title={"Total semester Credit"}
                        L={"12"} T={"0"} P={"6"}
                        cred={"16"}
                    />
                    <SyallbusComp
                        dep="CEPG"
                        sem="2"
                        code="CE703"
                        title="Air and Noise Pollution"
                        L="3" T="0" P="0"
                        cred="3" />
                    <SyallbusComp
                        dep="CEPG"
                        sem="2"
                        code="CE6xx"
                        title="Elective IV"
                        L="3" T="0" P="0"
                        cred="3" />
                    <SyallbusComp
                        dep="CEPG"
                        sem="2"
                        code="CE6xx"
                        title="Elective V"
                        L="3" T="0" P="0"
                        cred="3" />
                    <SyallbusComp
                        dep="CEPG"
                        sem="2"
                        code="CE6xx"
                        title="Elective VI"
                        L="3" T="0" P="0"
                        cred="3" />
                    <SyallbusComp
                        dep="CEPG"
                        sem="2"
                        code="CE6xx"
                        title="Elective VII/Open Elective"
                        L="3" T="0" P="0"
                        cred="3" />
                    <SyallbusComp
                        dep="CEPG"
                        sem="2"
                        code="CE686"
                        title="Advanced Civil Engineering Lab II"
                        L="0" T="0" P="6"
                        cred="4" />
                    <SyallbusComp
                        dep="CEPG"
                        sem="2"
                        code="CE690"
                        title="Seminar"
                        L="0" T="0" P="3"
                        cred="2" />
                    <SyallbusComp
                        dep="CEPG"
                        sem="2"
                        code=""
                        title="Total semester Credit"
                        L="15" T="0" P="9"
                        cred="21" />
                    <SyallbusComp
                        dep="CEPG"
                        sem="3"
                        code="CE691"
                        title="Seminar and Comprehensive Viva I"
                        L="0" T="0" P="3"
                        cred="2" />
                    <SyallbusComp
                        dep="CEPG"
                        sem="3"
                        code="CE692"
                        title="Dissertation (to be continued in 4th sem)"
                        L="0" T="0" P="12"
                        cred="8" />
                    <SyallbusComp
                        dep="CEPG"
                        sem="3"
                        code=""
                        title="Total semester Credit"
                        L="0" T="0" P="15"
                        cred="10" />
                    <SyallbusComp
                        dep="CEPG"
                        sem="4"
                        code="CE693"
                        title="Seminar and Comprehensive Viva II"
                        L="0" T="0" P="3"
                        cred="2" />
                    <SyallbusComp
                        dep="CEPG"
                        sem="4"
                        code="CE694"
                        title="Dissertation"
                        L="0" T="0" P="15"
                        cred="10" />
                    <SyallbusComp
                        dep="CEPG"
                        sem="4"
                        code=""
                        title="Total semester Credit"
                        L="0" T="0" P="18"
                        cred="12" />
                    <SyallbusComp
                        dep="CEPG"
                        sem=""
                        code=""
                        title="Cumulative Total Credit"
                        L="" T="" P=""
                        cred="62" />
                    <SyallbusComp
                        dep="CEPG"
                        sem=""
                        code="CE704"
                        title="Environmental Management"
                        L="3" T="0" P="0"
                        cred="3" />
                    <SyallbusComp
                        dep="CEPG"
                        sem=""
                        code="CE705"
                        title="Ecology"
                        L="3" T="0" P="0"
                        cred="3" />
                    <SyallbusComp
                        dep="CEPG"
                        sem=""
                        code="CE706"
                        title="Environmental Impact Assessment"
                        L="3" T="0" P="0"
                        cred="3" />
                    <SyallbusComp
                        dep="CEPG"
                        sem=""
                        code="CE707"
                        title="Environmental Sanitation"
                        L="3" T="0" P="0"
                        cred="3" />
                    <SyallbusComp
                        dep="CEPG"
                        sem=""
                        code="CE708"
                        title="Air Quality Modelling"
                        L="3" T="0" P="0" cred="3" />
                    <SyallbusComp
                        dep="CEPG"
                        sem=""
                        code="CE709"
                        title="Advance Industrial Waste Management"
                        L="3" T="0" P="0"
                        cred="3" />
                    <SyallbusComp
                        dep="CEPG"
                        sem=""
                        code="CE710"
                        title="Hazardous and Nuclear Waste Management"
                        L="3" T="0" P="0"
                        cred="3" />
                    <SyallbusComp
                        dep="CEPG"
                        sem=""
                        code="CE711"
                        title="Chemo Dynamics"
                        L="3" T="0" P="0"
                        cred="3" />
                    <SyallbusComp
                        dep="CEPG"
                        sem=""
                        code="CE712"
                        title="Solid Waste Management"
                        L="3" T="0" P="0"
                        cred="3" />
                    <SyallbusComp
                        dep="CEPG"
                        sem=""
                        code="CE713"
                        title="Environmental Management in Construction Projects"
                        L="3" T="0" P="0"
                        cred="3" />
                    <SyallbusComp
                        dep="CEPG"
                        sem=""
                        code="CE714"
                        title="Advance Biological Processes and Treatment"
                        L="3" T="0" P="0"
                        cred="3" />
                    <SyallbusComp
                        dep="CEPG"
                        sem=""
                        code="CE716"
                        title="Environmental Fluid Mechanics"
                        L="3" T="0" P="0"
                        cred="3" />
                    <SyallbusComp
                        dep="CEPG"
                        sem=""
                        code="MA604"
                        title="Probability and Statistics"
                        L="3" T="0" P="0"
                        cred="3" />
                    <SyallbusComp
                        dep="CEPG"
                        sem="1"
                        code="CE731"
                        title="Advanced Foundation Engineering"
                        L="3" T="0" P="0"
                        cred="3" />
                    <SyallbusComp
                        dep="CEPG"
                        sem="1"
                        code="CE732"
                        title="Geotechnical Investigations and Ground Improvement Techniques"
                        L="3" T="0" P="0"
                        cred="3" />
                    <SyallbusComp
                        dep="CEPG"
                        sem="1"
                        code="CE6xx"
                        title="Elective I"
                        L="3" T="0" P="0"
                        cred="3" />
                    <SyallbusComp
                        dep="CEPG"
                        sem="1"
                        code="CE6xx"
                        title="Elective II"
                        L="3" T="0" P="0"
                        cred="3" />

                    <SyallbusComp
                        dep="CEPG"
                        sem="1"
                        code="CE6xx"
                        title="Elective III/Open Elective"
                        L="3" T="0" P="0"
                        cred="3" />
                    <SyallbusComp
                        dep="CEPG"
                        sem="1"
                        code="CE681"
                        title="Advanced Civil Engineering Lab -I"
                        L="0" T="0" P="6"
                        cred="4" />
                    <SyallbusComp
                        dep="CEPG"
                        sem="1"
                        code=""
                        title="Total Semsester Credit"
                        L="12" T="0" P="6"
                        cred="16" />

                    <SyallbusComp
                        dep="CEPG"
                        sem="2"
                        code="CE733"
                        title="Rock Mechanics and Tunnel Engineering"
                        L="3" T="0" P="0"
                        cred="3" />
                    <SyallbusComp
                        dep="CEPG"
                        sem="2"
                        code="CE6xx"
                        title="Elective IV"
                        L="3" T="0" P="0"
                        cred="3" />
                    <SyallbusComp
                        dep="CEPG" 
                        sem="2"
                         code="CE6xx"
                          title="Elective V"
                           L="3" T="0" P="0" 
                           cred="3" />
                    <SyallbusComp
                        dep="CEPG"
                         sem="2"
                          code="CE6xx"
                           title="Elective VI"
                            L="3" T="0" P="0" 
                            cred="3" />
                    <SyallbusComp
                        dep="CEPG" 
                        sem="2" 
                        code="CE6xx"
                         title="Elective VII/Open Elective" 
                         L="3" T="0" P="0" 
                         cred="3" />
                    <SyallbusComp
                        dep="CEPG" 
                        sem="2" 
                        code="CE686"
                         title="Advanced Civil Engineering Lab II"
                          L="0" T="0" P="6" 
                          cred="4" />
                    <SyallbusComp
                        dep="CEPG" 
                        sem="2" 
                        code="CE690"
                         title="Seminar" 
                         L="0" T="0" P="3" 
                         cred="2" />
                    <SyallbusComp
                        dep="CEPG"
                         sem="2" 
                         code="" 
                         title="Total semester Credit" 
                         L="12" T="0" P="9" 
                         cred="18" />

                    {/* Semester 3 */}
                    <SyallbusComp
                        dep="CEPG" 
                        sem="3" 
                        code="CE691" 
                        title="Seminar and Comprehensive Viva I" 
                        L="0" T="0" P="3" 
                        cred="2" />
                    <SyallbusComp
                        dep="CEPG" 
                        sem="3" 
                        code="CE692" 
                        title="Dissertation (to be continued in 4th sem)"
                         L="0" T="0" P="12" 
                         cred="8" />
                    <SyallbusComp
                        dep="CEPG"
                         sem="3"
                          code="" 
                          title="Total semester Credit" 
                          L="0" T="0" P="15"
                           cred="10" />

                    {/* Semester 4 */}
                    <SyallbusComp
                        dep="CEPG" 
                        sem="4" 
                        code="CE693"
                         title="Seminar and Comprehensive Viva II" 
                         L="0" T="0" P="3" 
                         cred="2" />
                    <SyallbusComp
                        dep="CEPG" 
                        sem="4" 
                        code="CE694"
                         title="Dissertation"
                          L="0" T="0" P="15" 
                          cred="10" />
                    <SyallbusComp
                        dep="CEPG" 
                        sem="4" 
                        code="" 
                        title="Total semester Credit"
                         L="0" T="0" P="18" 
                         cred="12" />
                    <SyallbusComp
                        dep="CEPG" 
                        sem="" 
                        code="" 
                        title="Cumulative Credit" 
                        L="" T="" P="" 
                        cred="62" />

                    {/* Electives */}
                    <SyallbusComp
                        dep="CEPG" sem="" code="CE617" title="Optimization Techniques in Civil Engineering" L="3" T="0" P="0" cred="3" />
                    <SyallbusComp
                        dep="CEPG" sem="" code="CE734" title="Soil Stabilization" L="3" T="0" P="0" cred="3" />
                    <SyallbusComp
                        dep="CEPG" sem="" code="CE735" title="Earth Pressure and Retaining Structures" L="3" T="0" P="0" cred="3" />
                    <SyallbusComp
                        dep="CEPG" sem="" code="CE737" title="Earth and Rock-fill Dams" L="3" T="0" P="0" cred="3" />
                    <SyallbusComp
                        dep="CEPG" sem="" code="CE738" title="Soil Structure Interaction" L="3" T="0" P="0" cred="3" />
                    <SyallbusComp
                        dep="CEPG" sem="" code="CE739" title="Geo-environmental Engineering" L="3" T="0" P="0" cred="3" />
                    <SyallbusComp
                        dep="CEPG" sem="" code="CE740" title="Soil Dynamics and Geotechnical Earthquake Engineering" L="3" T="0" P="0" cred="3" />
                    <SyallbusComp
                        dep="CEPG" sem="" code="CE741" title="Reinforced Earth and Geotextiles" L="3" T="0" P="0" cred="3" />
                    <SyallbusComp
                        dep="CEPG" sem="" code="CE742" title="Continuum Mechanics" L="3" T="0" P="0" cred="3" />
                    <SyallbusComp
                        dep="CEPG" sem="" code="CE743" title="Slope Stability and Earthen Dams" L="3" T="0" P="0" cred="3" />
                    <SyallbusComp
                        dep="CEPG" sem="" code="MA604" title="Probability and Statistics" L="3" T="0" P="0" cred="3" />

                    {/* Water Resources Engineering Semester 1 */}
                    <SyallbusComp
                        dep="CEPG" sem="1" code="CE661" title="Advanced Hydraulics" L="3" T="0" P="0" cred="3" />
                    <SyallbusComp
                        dep="CEPG" sem="1" code="CE662" title="Advanced Hydrology" L="3" T="0" P="0" cred="3" />
                    <SyallbusComp
                        dep="CEPG" sem="1" code="CE6xx" title="Elective I" L="3" T="0" P="0" cred="3" />
                    <SyallbusComp
                        dep="CEPG" sem="1" code="CE6xx" title="Elective II" L="3" T="0" P="0" cred="3" />
                    <SyallbusComp
                        dep="CEPG" sem="1" code="CE6xx" title="Elective III/Open Elective" L="3" T="0" P="0" cred="3" />
                    <SyallbusComp
                        dep="CEPG" sem="1" code="CE681" title="Advanced Civil Engineering Lab I" L="0" T="0" P="6" cred="4" />
                    <SyallbusComp
                        dep="CEPG" sem="1" code="" title="Total semester Credit" L="15" T="0" P="6" cred="19" />

                    {/* Water Resources Engineering Semester 2 */}
                    <SyallbusComp
                        dep="CEPG" sem="2" code="CE663" title="Advanced Ground Water Engineering" L="3" T="0" P="0" cred="3" />
                    <SyallbusComp
                        dep="CEPG" sem="2" code="CE6xx" title="Elective IV" L="3" T="0" P="0" cred="3" />
                    <SyallbusComp
                        dep="CEPG" sem="2" code="CE6xx" title="Elective V" L="3" T="0" P="0" cred="3" />
                    <SyallbusComp
                        dep="CEPG" sem="2" code="CE6xx" title="Elective VI" L="3" T="0" P="0" cred="3" />
                    <SyallbusComp
                        dep="CEPG" sem="2" code="CE6xx" title="Elective VII/Open Elective" L="3" T="0" P="0" cred="3" />
                    <SyallbusComp
                        dep="CEPG" sem="2" code="CE686" title="Advanced Civil Engineering Lab II" L="0" T="0" P="6" cred="4" />
                    <SyallbusComp
                        dep="CEPG" sem="2" code="CE690" title="Seminar" L="0" T="0" P="3" cred="2" />
                    <SyallbusComp
                        dep="CEPG" sem="2" code="" title="Total semester Credit" L="15" T="0" P="9" cred="21" />
                    <SyallbusComp
                        dep="CEPG" sem="3" code="CE691" title="Seminar and Comprehensive Viva I" L="0" T="0" P="3" cred="2" />
                    <SyallbusComp
                        dep="CEPG" sem="3" code="CE692" title="Dissertation (to be continued in 4th sem)" L="0" T="0" P="12" cred="8" />

                    <SyallbusComp
                        dep="CEPG" sem="3" code="" title="Total semester Credit" L="0" T="0" P="15" cred="10" />

                    {/* Semester 4 */}
                    <SyallbusComp
                        dep="CEPG" sem="4" code="CE693" title="Seminar and Comprehensive Viva II" L="0" T="0" P="3" cred="2" />
                    <SyallbusComp
                        dep="CEPG" sem="4" code="CE694" title="Dissertation" L="0" T="0" P="15" cred="10" />
                    <SyallbusComp dep="CEPG" sem="4" code="" title="Total semester Credit" L="0" T="0" P="18" cred="12" />
                    <SyallbusComp dep="CEPG" sem="" code="" title="Cumulative Total Credit" L="" T="" P="" cred="62" />

                    {/* Electives */}
                    <SyallbusComp
                        dep="CEPG" sem="" code="CE664" title="Water Resources System's Planning and Economic Analysis" L="3" T="0" P="0" cred="3" />
                    <SyallbusComp
                        dep="CEPG" sem="" code="CE665" title="Optimization Techniques" L="3" T="0" P="0" cred="3" />
                    <SyallbusComp
                        dep="CEPG" sem="" code="CE666" title="Unsteady Flows" L="3" T="0" P="0" cred="3" />
                    <SyallbusComp
                        dep="CEPG" sem="" code="CE667" title="River Engineering" L="3" T="0" P="0" cred="3" />
                    <SyallbusComp
                        dep="CEPG" sem="" code="CE668" title="Reservoir Operation and Planning" L="3" T="0" P="0" cred="3" />
                    <SyallbusComp
                        dep="CEPG" sem="" code="CE669" title="River Pollution and Control" L="3" T="0" P="0" cred="3" />
                    <SyallbusComp
                        dep="CEPG" sem="" code="CE670" title="Remote Sensing and GIS for Water Resources" L="3" T="0" P="0" cred="3" />
                    <SyallbusComp
                        dep="CEPG" sem="" code="CE671" title="Hydro Power Engineering" L="3" T="0" P="0" cred="3" />
                    <SyallbusComp
                        dep="CEPG" sem="" code="CE672" title="Irrigation Water Management" L="3" T="0" P="0" cred="3" />
                    <SyallbusComp
                        dep="CEPG" sem="" code="CE673" title="Advanced Land Drainage" L="3" T="0" P="0" cred="3" />
                    <SyallbusComp
                        dep="CEPG" 
                        sem="" 
                        code="CE674" 
                        title="Hydrodynamics" 
                        L="3" T="0" P="0" 
                        cred="3" />
                    <SyallbusComp
                        dep="CEPG" 
                        sem=""
                         code="CE675" 
                         title="Floods and Droughts" 
                         L="3" T="0" P="0" 
                         cred="3" />
                    <SyallbusComp
                        dep="CEPG" 
                        sem="" 
                        code="CE676"
                         title="Design of Hydraulic Structures" 
                         L="3" T="0" P="0" 
                         cred="3" />
                    <SyallbusComp
                        dep="CEPG"
                         sem="" 
                         code="CE677"
                          title="Contaminant Transport in Porous Media"
                           L="3" T="0" P="0" 
                           cred="3" />
                    <SyallbusComp
                        dep="CEPG"
                         sem="" 
                         code="CE678"
                          title="Finite Element Analysis"
                           L="3" T="0" P="0" 
                           cred="3" />
                    <SyallbusComp
                        dep="CEPG"
                         sem="" 
                         code="MA604"
                          title="Probability and Statistics" 
                          L="3" T="0" P="0" 
                          cred="3" />

                </div>
                </div>
            </div>
            {/* PhD  */}
            <div className={`mb-10 ${(phd == false)?"hidden":""}`}>
                <div className="text-red-900 font-bold text-3xl max-sm:text-2xl mb-8">PhD PROGRAM :-</div>
                <div className=" overflow-x-auto">
                <div className="border grid grid-cols-12 min-w-[1100px]">
                    <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Dept.</div>
                    <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Sem / Electives</div>
                    <div className="col-span-2 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Course Code</div>
                    <div className="col-span-4 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Course Title</div>
                    <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">L</div>
                    <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">T</div>
                    <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">P</div>
                    <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Credits</div>
                  <SyallbusComp
                        dep={""}
                        sem={""}
                        code={"xxxx"}
                        title={"Research Methodology"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                      <SyallbusComp
                        dep={""}
                        sem={""}
                        code={"xxxx"}
                        title={"Seminar and Technical report Writing"}
                        L={"0"} T={"0"} P={"3"}
                        cred={"2"}
                    />
                      <SyallbusComp
                        dep={""}
                        sem={""}
                        code={"xxxx"}
                        title={"Comprehensive Viva & Presentation"}
                        L={"0"} T={"0"} P={"2"}
                        cred={"1"}
                    />
                      <SyallbusComp
                        dep={""}
                        sem={""}
                        code={"xxxx"}
                        title={"Course -I"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                      <SyallbusComp
                        dep={""}
                        sem={""}
                        code={"xxxx"}
                        title={"Course -II"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                      <SyallbusComp
                        dep={""}
                        sem={""}
                        code={"xxxx"}
                        title={"Lab Course"}
                        L={"0"} T={"0"} P={"6"}
                        cred={"4"}
                    />
                      <SyallbusComp
                        dep={""}
                        sem={""}
                        code={"xxxx"}
                        title={"Course -III"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                      <SyallbusComp
                        dep={""}
                        sem={""}
                        code={"xxxx"}
                        title={"Course -IV"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                      <SyallbusComp
                        dep={""}
                        sem={""}
                        code={"xxxx"}
                        title={"Course -V"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                </div>
                </div>
            </div>
            {/* Dual PROGRAM  */}
            <div className={`mb-10 ${(dual == false)?"hidden":""}`}>
                <div className="text-red-900 font-bold text-3xl max-sm:text-2xl mb-8">DUAL DEGREE PROGRAM :-</div>
                <ul className="list-disc list-inside ml-5 space-y-4 text-lg max-md:text-[15px] max-sm:text-sm">
                    <li className="hover:text-blue-800"><a href="">Civil Engineering with Specialization in Construction Technology and Management (5 Years, Bachelor and Master of Technology (Dual Degree))</a></li>
                </ul>
            </div>
        </div>
    )
}

function SyallbusComp({ dep, sem, code, title, L, T, P, cred, url }) {
    return (
        <>
            <div className="col-span-1 border border-black flex flex-col justify-center pl-4 py-2">{dep}</div>
            <div className="col-span-1 border border-black flex flex-col justify-center pl-4 py-2">{sem}</div>
            <div className="col-span-2 border border-black flex flex-col justify-center pl-4 py-2">{code}</div>
            <a href={url} className="col-span-4 border border-black flex flex-col justify-center pl-4 py-2 cursor-pointer">{title}</a>
            <div className="col-span-1 border border-black flex flex-col justify-center pl-4 py-2">{L}</div>
            <div className="col-span-1 border border-black flex flex-col justify-center pl-4 py-2">{T}</div>
            <div className="col-span-1 border border-black flex flex-col justify-center pl-4 py-2">{P}</div>
            <div className="col-span-1 border border-black flex flex-col justify-center pl-4 py-2">{cred}</div>
        </>
    )
}

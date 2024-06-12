"use client"

import { useState } from "react"


export default function Page(){
    const [ug , setUg] = useState(true);
    const [ug2021 , setUg2021] = useState(true);
    const [pg , setPg] = useState(false);
    const [dualCyber , setDualCyber] = useState(false);
    const [phd , setPhd] = useState(false);
    const [ug2022,setUg2022]=useState(false);
    const [dualData,setDualData]=useState(false);
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
                        COMPUTER SCIENCE ENGINEERING
                    </p>
                </div>
            </div>
            <div className="mb-10 flex space-x-1 overflow-x-auto ">
                <div className="min-w-[800px] flex space-x-1 text-sm lg:text-base">
                <button onClick={()=>{
                    setUg2021(false);
                    setPg(false);
                    setDualCyber(false);
                    setPhd(false);
                    setDualData(false);
                    setUg2022(false);
                    setUg(true)
                }} className={`border border-black rounded ${(ug)?"text-white bg-red-900":"text-red-900"} px-2`}>UG Courses</button>
                <button onClick={()=>{
                    setUg2021(false);
                    setPg(false);
                    setDualCyber(false);
                    setPhd(false);
                    setDualData(false);
                    setUg2022(true);
                    setUg(false)
                }} className={`border border-black rounded ${(ug2022)?"text-white bg-red-900":"text-red-900"} px-2`}>UG Courses-2022 Onwards</button>
                <button onClick={()=>{
                    setUg2021(true);
                    setPg(false);
                    setDualCyber(false);
                    setPhd(false);
                    setDualData(false);
                    setUg2022(false);
                    setUg(false)
                }} className={`border border-black rounded ${(ug2021)?"text-white bg-red-900":"text-red-900"} px-2`}>UG Course-2021</button>
                <button onClick={()=>{
                    setUg2021(false);
                    setPg(true);
                    setDualCyber(false);
                    setPhd(false);
                    setDualData(false);
                    setUg2022(false);
                    setUg(false);
                }} className={`border border-black rounded ${(pg)?"text-white bg-red-900":"text-red-900"} px-2`}>PG (M.Tech/MURP) Course</button>
                <button onClick={()=>{
                    setUg2021(false);
                    setDualCyber(false);
                    setPg(false);
                    setDualData(false);
                    setPhd(true);
                    setUg2022(false);
                    setUg(false);
                }} className={`border border-black rounded ${(phd)?"text-white bg-red-900":"text-red-900"} px-2`}>PhD Course</button>
                <button onClick={()=>{
                    setUg2021(false);
                    setPg(false);
                    setDualCyber(true);
                    setPhd(false);
                    setDualData(false);
                    setUg2022(false);
                    setUg(false);
                }} className={`border border-black rounded ${(dualCyber)?"text-white bg-red-900":"text-red-900"} px-2`}>Dual Degree (Cyber Security)</button>
                <button onClick={()=>{
                    setUg2021(false);
                    setPg(false);
                    setDualCyber(false);
                    setPhd(false);
                    setDualData(true);
                    setUg2022(false);
                    setUg(false);
                }} className={`border border-black rounded ${(dualData)?"text-white bg-red-900":"text-red-900"} px-2`}>Dual Degree (Data Science and Engineering)</button>
                </div>
            </div>
            {/* UG PROGRAM 2022*/}
            <div className={`mb-10 ${(ug2022 == false)?"hidden":""}`}>
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
                        dep={"CSUG"}
                        sem={"1"}
                        code={"CS14102"}
                        title={"Programming in C"}
                        L={"3"} T={"0"} P={"2"}
                        cred={"4"}
                        url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CS14102_Programming%20in%20C.docx"}
                    />

                </div>
                </div>
            </div>
            {/* Dual degree cyber security */}
            <div className={`mb-10 ${(dualCyber == false)?"hidden":""}`}>
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
                        dep={"CSUG"}
                        sem={"1"}
                        code={"CS14102"}
                        title={"Programming in C"}
                        L={"3"} T={"0"} P={"2"}
                        cred={"4"}
                        url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CS14102_Programming%20in%20C.docx"}
                    />

                </div>
                </div>
            </div>
            {/* dual degree data science */}
            <div className={`mb-10 ${(dualData == false)?"hidden":""}`}>
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
                        dep={"CSUG"}
                        sem={"1"}
                        code={"CS14102"}
                        title={"Programming in C"}
                        L={"3"} T={"0"} P={"2"}
                        cred={"4"}
                        url={"https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CS14102_Programming%20in%20C.docx"}
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
                        dep={"CSPG"}
                        sem={"1"}
                        code={"1CS601"}
                        title={"Advanced Data Structurs and File systems"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
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
            <div className={`mb-10 ${(dualCyber == false)?"hidden":""}`}>
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

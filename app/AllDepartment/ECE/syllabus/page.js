"use client"

import {useState} from 'react';

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
function ActComp({content}){
    return(
        <div className="flex flex-col mt-8 lg:ml-10">
            <ul>
                {content.map((points,i)=>{
                    return(
                        <li key={i} className="list-disc ml-4 md:text-lg
                        pb-2">
                           {points}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

function Page(){
    const [ug , setUg] = useState(true);
    const [pg , setPg] = useState(false);
    const [dual , setdual] = useState(false);
    const [phd , setphd] = useState(false);
    return (
        <div className="bg-orange-50 flex flex-col p-5">  
            <div className="flex flex-col md:ml-10">
                <div>
                    <p className="text-red-900 text-3xl font-bold">
                        SYLLABUS
                    </p>
                </div>
                <div className="mt-2">
                    <p className="text-gray-500 text-xl font-semibold">
                        Electronics and Communications Engineering
                    </p>
                </div>
                <div>
                    <ActComp
                    content={['Course structure for of Minor courses floated by ECE Dept. for B.Tech. (CSE, EE, CE, ME)',
                       'B.Tech. Detailed syllabus wef 2021-2022 ( As per NEP )' ,
                       'Detailed syllabus Dual Degree Programme B.Tech-ECE and M.Tech. (Microelectronics & VLSI Design) ( As per NEP )',
                       'M.Tech. (Communication systems) wef 2021-2022 ( As per NEP )',
                       'M.Tech. (Microelectronics & VLSI Design) wef 2021-2022'
                    ]}
                    />
                </div>
                <div className="mt-6">
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
                    }} className={`border border-black rounded ${(pg)?"text-white bg-red-900":"text-red-900"} px-2`}>M.Tech Course</button>
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
            {/* UG PROGRAM 2022*/}
            <div className={`mb-10 ${(ug == false)?"hidden":""}`}>
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
                <div className="text-red-900 font-bold text-3xl max-sm:text-2xl mb-8">M.Tech PROGRAM :-</div>
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
                        dep={"ECE"}
                        sem={""}
                        code={"xxxx"}
                        title={"Research Methodology"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                      <SyallbusComp
                        dep={"ECE"}
                        sem={""}
                        code={"xxxx"}
                        title={"Seminar and Technical report Writing"}
                        L={"0"} T={"0"} P={"3"}
                        cred={"2"}
                    />
                      <SyallbusComp
                        dep={"ECE"}
                        sem={""}
                        code={"xxxx"}
                        title={"Comprehensive Viva & Presentation"}
                        L={"0"} T={"0"} P={"2"}
                        cred={"1"}
                    />
                      <SyallbusComp
                        dep={"ECE"}
                        sem={""}
                        code={"xxxx"}
                        title={"Course -I"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                      <SyallbusComp
                        dep={"ECE"}
                        sem={""}
                        code={"xxxx"}
                        title={"Course -II"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                      <SyallbusComp
                        dep={"ECE"}
                        sem={""}
                        code={"xxxx"}
                        title={"Lab Course"}
                        L={"0"} T={"0"} P={"6"}
                        cred={"4"}
                    />
                      <SyallbusComp
                        dep={"ECE"}
                        sem={""}
                        code={"xxxx"}
                        title={"Course -III"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                      <SyallbusComp
                        dep={"ECE"}
                        sem={""}
                        code={"xxxx"}
                        title={"Course -IV"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                      <SyallbusComp
                        dep={"ECE"}
                        sem={""}
                        code={"xxxx"}
                        title={"Course -V"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                </div>
                </div>
            </div>
                    {/* dual degree */}
                    <div className={`mb-10 ${(dual == false)?"hidden":""}`}>
                <div className=" overflow-x-auto">
                    <p>
                    Electronics and Communication Engineering with Specialization in Microelectronics and VLSI System Design (5 Years, Bachelor and Master of Technology (Dual Degree))
                    </p>
                </div>
            </div>
                </div>
            </div>
        </div>

    )
}
export default Page
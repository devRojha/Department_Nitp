"use client"

import { useState } from "react";



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
                        Architecture
                    </p>
                </div>
                <div>
                    <ActComp
                    content={['B.Arch All Semester course structure',
                        'M.Arch.(Sustainable Architecture) Syllabus',
                        'MURP Syllabus'
                    ]}
                    />
                </div>
                <div className="mt-6">
                    <div className="mb-10 flex space-x-1 max-sm:text-[10px]">
                    <button onClick={()=>{
                        setUg(true);
                        setPg(false);
                    }} className={`border border-black rounded ${(ug)?"text-white bg-red-900":"text-red-900"} px-2`}>UG Course</button>
                    <button onClick={()=>{
                        setUg(false);
                        setPg(true);
                    }} className={`border border-black rounded ${(pg)?"text-white bg-red-900":"text-red-900"} px-2`}>PG (M.Tech/MURP) Courses</button>
                    </div>
            {/* UG PROGRAM */}
            <div className={`mb-10 ${(ug == false)?"hidden":""}`}>
                <div className=" overflow-x-auto mr-10">
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
                        dep={"ARUG"}
                        sem={"1"}
                        code={""}
                        title={"PARICHAY"}
                        L={"0"} T={"0"} P={"1"}
                        cred={"0"}
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
                        dep={"MURP"}
                        sem={"1"}
                        code={"AR601"}
                        title={"Planning Principles & Techniques"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                    />
                </div>
                </div>
            </div>
                </div>
            </div>
        </div>

    )
}
export default Page
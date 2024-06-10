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
            <div className="mb-10 flex space-x-1">
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
                <div className="border grid grid-cols-12">
                    <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Dept.</div>
                    <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Sem / Electives</div>
                    <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Course Code</div>
                    <div className="col-span-2 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Course Title</div>
                    <div className="col-span-4 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">L</div>
                    <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">T</div>
                    <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">P</div>
                    <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Credits</div>
                    <SyallbusComp
                        dep={""}
                        sem={""}
                        code={""}
                        title={""}
                        L={""} T={""} P={""}
                        cred={""}
                    />
                </div>
            </div>
            {/* PG PROGRAM  */}
            <div className={`mb-10 ${(pg == false)?"hidden":""}`}>
                <div className="text-red-900 font-bold text-3xl max-sm:text-2xl mb-8">PG PROGRAM :-</div>
                <div className="border grid grid-cols-12">
                    <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Dept.</div>
                    <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Sem / Electives</div>
                    <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Course Code</div>
                    <div className="col-span-2 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Course Title</div>
                    <div className="col-span-4 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">L</div>
                    <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">T</div>
                    <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">P</div>
                    <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Credits</div>
                    <SyallbusComp
                        dep={""}
                        sem={""}
                        code={""}
                        title={""}
                        L={""} T={""} P={""}
                        cred={""}
                    />
                </div>
            </div>
            {/* PhD  */}
            <div className={`mb-10 ${(phd == false)?"hidden":""}`}>
                <div className="text-red-900 font-bold text-3xl max-sm:text-2xl mb-8">PhD PROGRAM :-</div>
                <div className="border grid grid-cols-12">
                    <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Dept.</div>
                    <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Sem / Electives</div>
                    <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Course Code</div>
                    <div className="col-span-2 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Course Title</div>
                    <div className="col-span-4 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">L</div>
                    <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">T</div>
                    <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">P</div>
                    <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Credits</div>
                    <SyallbusComp
                        dep={""}
                        sem={""}
                        code={""}
                        title={""}
                        L={""} T={""} P={""}
                        cred={""}
                    />
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

function SyallbusComp({dep, sem, code, title, L, T, P, cred}){
    return (
        <>
            <div className="col-span-1 border border-black flex flex-col justify-center pl-4 py-2">{dep}</div>
            <div className="col-span-1 border border-black flex flex-col justify-center pl-4 py-2">{sem}</div>
            <div className="col-span-1 border border-black flex flex-col justify-center pl-4 py-2">{code}</div>
            <div className="col-span-2 border border-black flex flex-col justify-center pl-4 py-2">{title}</div>
            <div className="col-span-4 border border-black flex flex-col justify-center pl-4 py-2">{L}</div>
            <div className="col-span-1 border border-black flex flex-col justify-center pl-4 py-2">{T}</div>
            <div className="col-span-1 border border-black flex flex-col justify-center pl-4 py-2">{P}</div>
            <div className="col-span-1 border border-black flex flex-col justify-center pl-4 py-2">{cred}</div>
        </>
    )
}
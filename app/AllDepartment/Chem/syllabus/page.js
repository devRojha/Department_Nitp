"use client"

import { useState } from "react";

function ActComp({title,content}){
    return(
        <div className="flex flex-col mt-8 lg:ml-10">
            <p className="text-2xl font-semibold mb-4">
                {title}
            </p>
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

function SyallbusComp({ sem, code, title, L, T, P, cred, url, semH }) {
    return (
        <>
            <div className={semH?`font-semibold col-span-1 border border-black flex flex-col justify-start pl-2 py-2 text-sm`:
                `col-span-1 border border-black flex flex-col justify-center pl-4 py-2`}>{sem}</div>
            <div className="col-span-2 border border-black flex flex-col justify-center pl-4 py-2">{code}</div>
            <a href={url} className="col-span-4 border border-black flex flex-col justify-center pl-4 py-2 cursor-pointer">{title}</a>
            <div className="col-span-1 border border-black flex flex-col justify-center pl-4 py-2">{L}</div>
            <div className="col-span-1 border border-black flex flex-col justify-center pl-4 py-2">{T}</div>
            <div className="col-span-1 border border-black flex flex-col justify-center pl-4 py-2">{P}</div>
            <div className="col-span-1 border border-black flex flex-col justify-center pl-4 py-2">{cred}</div>
        </>
    )
}

function SyallbusComp2({ code, title, L, T, P, cred, url,titleH }) {
    return (
        <>
            <div className="col-span-2 border border-black flex flex-col justify-center pl-4 py-2">{code}</div>
            <a href={url} className={titleH?` font-semibold col-span-4 border border-black flex flex-col justify-center pl-4 py-2 cursor-pointer`:
                `col-span-4 border border-black flex flex-col justify-center pl-4 py-2 cursor-pointer`
            }>{title}</a>
            <div className="col-span-1 border border-black flex flex-col justify-center pl-4 py-2">{L}</div>
            <div className="col-span-1 border border-black flex flex-col justify-center pl-4 py-2">{T}</div>
            <div className="col-span-1 border border-black flex flex-col justify-center pl-4 py-2">{P}</div>
            <div className="col-span-1 border border-black flex flex-col justify-center pl-4 py-2">{cred}</div>
        </>
    )
}
function page(){
    const [msc , setMsc] = useState(true);
    const [phd , setPhd] = useState(false);
    return (
        <div className="bg-orange-50 flex flex-col p-5">  
            <div className="flex flex-col md:ml-10">
                <div>
                    <p className="text-red-900 text-3xl font-bold">
                        SYLLABUS
                    </p>
                </div>

            </div>
            <ActComp
            title={'Chemistry'}
            content={['Engineering Chemistry Course for ALL Engg. Branches(B.Tech NewSyllabus) 2021',
                'B. Tech. 1st year (1st and 2nd Semester) General Chemistry course (600 students) Chemical Sciences (1CH101)',
                'B. Tech. 1st year (1st and 2nd Semester) General Chemistry Lab (600 students) Chemical Sciences Lab (1CH102)',
                'B. Tech. 3rd and 4th Semester UG Course (600 students) Green Technology (CH104)',
                'B. Tech. 3rd and 4th Semester UG Course (600 students) Bio-Science',
                '5 year Integrated MSc Chemistry (30 students)',
                'PhD',
            ]}
            />
            <div className="mt-6">
                    <div className="mb-10 flex space-x-1 max-sm:text-[10px]">
                    <button onClick={()=>{
                        setMsc(true);
                        setPhd(false);
                    }} className={`border border-black rounded ${(msc)?"text-white bg-red-900":"text-red-900"} px-2`}>Integrated M.Sc Course</button>
                    <button onClick={()=>{
                        setMsc(false);
                        setPhd(true);
                    }} className={`border border-black rounded ${(phd)?"text-white bg-red-900":"text-red-900"} px-2`}>PhD Courses</button>
                    </div>
            {/* Msc PROGRAM */}
            <div className={`mb-10 ${(msc == false)?"hidden":""}`}>
                <div className=" overflow-x-auto mr-10">
                <div className="border grid grid-cols-11 min-w-[1100px]">
                    <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Sem / Electives</div>
                    <div className="col-span-2 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Course Code</div>
                    <div className="col-span-4 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Course Title</div>
                    <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">L</div>
                    <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">T</div>
                    <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">P</div>
                    <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Credits</div>
                   <SyallbusComp
                        sem={"1"}
                        code={"HS19101"}
                        title={"Communicative English"}
                        L={"3"} T={"0"} P={"2"}
                        cred={"4"}
                        url={""}
                    />
                    {/* add semH={true} wherever you want to write semester in bold */}

                </div>
                </div>
            </div>
            <div className={`mb-10 ${(msc == false)?"hidden":""}`}>
                <div className=" overflow-x-auto mr-10">
                <div className="border grid grid-cols-10 min-w-[1100px]">
                    <div className="col-span-2 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Course Code</div>
                    <div className="col-span-4 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Course Title</div>
                    <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">L</div>
                    <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">T</div>
                    <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">P</div>
                    <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Credits</div>
                   <SyallbusComp2
                        code={""}
                        title={"Group 1(Polymer, Petroleum & Petrochemical Technology):"}
                        L={""} T={""} P={""}
                        cred={""}
                        url={""}
                        titleH={true}
                    />
                   <SyallbusComp2
                        code={"-"}
                        title={"Advanced polymer Processing Technologies"}
                        L={"3"} T={"0"} P={"0"}
                        cred={"3"}
                        url={""}
                        
                    />

                </div>
                </div>
            </div>
            {/* Phd PROGRAM  */}
            <div className={`mb-10 ${(phd == false)?"hidden":""}`}>
                <div className="text-red-900 font-bold text-3xl max-sm:text-2xl mb-8">PhD PROGRAM :-</div>
                <div className=" overflow-x-auto">
                <div className="border grid grid-cols-11 min-w-[1100px]">
                    <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Sem / Electives</div>
                    <div className="col-span-2 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Course Code</div>
                    <div className="col-span-4 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Course Title</div>
                    <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">L</div>
                    <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">T</div>
                    <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">P</div>
                    <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">Credits</div>
                  <SyallbusComp
                        sem={"Department Elective"}
                        code={""}
                        title={""}
                        L={""} T={""} P={""}
                        cred={""}
                        semH={true}
                    />
                </div>
                </div>
            </div>
            </div>
        </div>

    )
}
export default page
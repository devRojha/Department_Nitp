function Compo({name,research,sno }){
    return (
        <>
            <div className="col-span-1 border border-black pl-4 py-2 flex flex-col justify-center">
                {sno}
            </div>
            <div className="col-span-2 border border-black pl-4 py-2 flex flex-col justify-center">
                {name}
            </div>
            <div className="col-span-3 border border-black pl-4 py-2 flex flex-col justify-center">
                {research}
            </div>
        </>
    )
}

function Page(){
    return (
        <div className="bg-orange-50 flex flex-col p-5">  
            <div className="flex flex-col md:ml-10">
                <div>
                    <p className="text-red-900 text-3xl font-bold ">
                        RESEARCH HIGHLIGHTS
                    </p>
                    <p className="mt-6 md:text-lg text-justify lg:w-3/4">
                    The Doctoral program in the department of Architecture and Planning at National Institute of Technology Patna welcomes individuals with excellent academic record, strong motivation, and a penchant for innovative research. This prepares the students for careers as researchers as well as academicians
                    </p>
                    <p className="mt-6 md:text-lg text-justify lg:w-3/4">
                    The department has 11 faculty members with PhD degrees, specialized in various domains related to architecture, rural planning, urban planning as well as regional planning, supervise research scholars on cutting edge research on burning issues of the present times. The students get exposure to researches and consultancies going on in the department and opportunities to undergo training workshops, short-term courses, conferences, guest lectures etc. in the institute, in the country, as well as outside the country.
                    </p>
                    <p className="mt-6 md:text-lg text-justify lg:w-3/4">
                    The department/institute provides various facilities for research as well as collaborations with other organizations within the city as well as the country and outside, facilities for purchase of equipment. Apart from high-quality publications, students may also file patents related to their research. Full time students admitted to PhD program are eligible for fellowships that cover all their expenses. The institute provides excellent facilities including computer lab, climatology lab, and library-with subscriptions to journals in various domains.
                    </p>
                    <p className="mt-6 md:text-lg text-justify lg:w-3/4">
                    Doctoral program places its students in teaching, research and consulting roles in various organizations. Part time PhD degrees are also availed by those already employed.
                    </p>
                    <p className="mt-6 md:text-lg text-justify lg:w-3/4">
                    Advertisements can be found on the institute website twice a year. Once in May and the second in November. Once applied, they have to take written examination for appearing for interview.
                    </p>
                </div>
                <div className="mt-10">
                <div className="mb-10 overflow-x-auto lg:mr-10">
                    <div className="grid grid-cols-6 border min-w-[500px]">
                    {/* heading  */}
                        <div className=" col-span-1 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold">
                            Sr. No.
                        </div>
                        <div className=" col-span-2 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold">
                            Name
                        </div>
                        <div className="  col-span-3 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold">
                            Research Profile
                        </div>
                        {/* grid  */}
                        <Compo
                        sno={'1.'}
                        name={'Prof. Fulena Rajak'}
                        research={'	Architecrture and Conservation'}
                        />
                    </div>
                </div>
                </div>
            </div>
        </div>

    )
}
export default Page
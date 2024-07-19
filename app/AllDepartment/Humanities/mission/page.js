import BackDepartment from "@/components/BackDepartment";


export default function mission(){
    return (
        <div className="bg-orange-50 flex flex-col p-10 max-sm:p-2">  
            <div className="flex flex-col  mb-16">
                <div>
                    <p className="text-red-900 text-3xl max-sm:text-2xl font-bold">
                        MISSION AND VISION
                    </p>
                </div>
                <div className="mt-2">
                    <p className="text-gray-500 text-xl font-semibold">
                        MECHANICAL ENGINEERING
                    </p>
                </div>
                <BackDepartment navigate={"/AllDepartment/ME"}/>
            </div>
            {/* vision */}
            <div className="mb-10">
                <div className="text-red-900 font-bold text-3xl max-sm:text-2xl mb-8">VISION :-</div>
                <ul className="list-none list-inside ml-5 space-y-4 text-lg max-sm:text-sm">
                    <li>The vision of the Department is to achieve excellence in undergraduate and postgraduate education and research through a synergic combination and thereby lead to development of new knowledge.</li>
                </ul>
            </div>
            {/* mission */}
            <div className="mb-10">
                <div className="text-red-900 font-bold text-3xl max-sm:text-2xl mb-8">MISSION :-</div>
                <ol className="list-none list-inside ml-5 space-y-4 text-lg max-sm:text-sm">
                    <li>The Department of Mathematics will offer courses and programs of study that will ensure that the student learner will be able to contribute to today&apos;s society. The students will obtain abilities to critically assess numerical and graphical information; learn to formulate strategies for solving problems; and acknowledge the importance of being intellectually curious throughout their adult lives. The Department, through its faculty, will continue to contribute to the body of knowledge of the discipline, whether in traditional research, applied research, or research in the teaching of mathematics.</li>
                    <li>The main mission of the Department of Mathematics is to offer high quality instruction in mathematics, statistics and the applied sciences to all students that it serves. The department strives to teach the main ideas and methods of mathematics and to build up the students reasoning and analytical skills. The department maintains programs and teaching practices that match those at most Undergraduate/Postgraduate programs at Institute. As the department offers core courses and in addition support other engineering degree programs, our mission is to make sure that these courses are taught at a high standard and meet the needs of those programs. For its majors, the department mission is to provide students with a number of degree programs and a wide spectrum of courses, and to offer them a rigorous training that enables them to pursue graduate degrees or work in jobs that require a high degree of mathematical skills.</li>
                    
                </ol>
            </div>
        </div>
    )
}
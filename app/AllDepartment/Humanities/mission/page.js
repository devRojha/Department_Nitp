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
                    Humanities & Social Sciences
                    </p>
                </div>
                <BackDepartment navigate={"/AllDepartment/Humanities"}/>
            </div>
            {/* vision */}
            <div className="mb-10">
                <div className="text-red-900 font-bold text-3xl max-sm:text-2xl mb-8">VISION :-</div>
                <ul className="list-none list-inside ml-5 space-y-4 text-lg max-sm:text-sm">
                    <li>The Department aspires to be a national exemplar in undergraduate teaching and research in the humanities and social sciences. Upon completion of the program, the students will be prepared to compete, sustain and advance their communities and the world.</li>
                </ul>
            </div>
            {/* mission */}
            <div className="mb-10">
                <div className="text-red-900 font-bold text-3xl max-sm:text-2xl mb-8">MISSION :-</div>
                <ol className="list-none list-inside ml-5 space-y-4 text-lg max-sm:text-sm">
                    <li>To provide quality teaching, learning, and research in the field of Humanities and Social Sciences by creating, preserving, transmitting and utilizing knowledge especially to engineering students so that intellectually capable and imaginatively gifted leaders can emerge in the technical education and industry.</li>
                </ol>
            </div>
            <div className="mb-10">
                <div className="text-red-900 font-bold text-3xl max-sm:text-2xl mb-8">Program Objectives :-</div>
                <ul className="list-disc list-inside ml-5 space-y-4 text-lg max-sm:text-sm">
                    <li>To involve entire range of knowledge pertinent to human relationship with society interaction and teaching towards problems solving of the nation.</li>
                    <li>To develop into well rounded personalities and to propagate knowledge that is utilitarian and aesthetic in its makeup.</li>
                    <li>To develop good technological skills with the ability to interact with different organs of an organization.</li>
                    <li>To develop essential skills in critical thinking and writing along with the knowledge of literature,society, economic value, and philosophies of the mind and body.</li>
                </ul>
            </div>
            <div className="mb-10">
                <div className="text-red-900 font-bold text-3xl max-sm:text-2xl mb-8">Program Outcomes :-</div>
                <ul className="list-disc list-inside ml-5 space-y-4 text-lg max-sm:text-sm">
                    <li>Producing Technocrats with all round knowledge and development skills.</li>
                    <li>Developing professional ethics, communication skills and managerial knowledge among students to work in corporate world effectively and efficiently.</li>
                </ul>
            </div>
        </div>
    )
}
import BackDepartment from "@/components/BackDepartment"


function Page(){
    return (
        <div className="bg-orange-50 flex flex-col p-5 ">  
            <div className="flex flex-col md:ml-10 lg:w-1/2">
                <BackDepartment navigate={"/AllDepartment/Phy"}/>
                <div className='text-justify'>
                    <p className="text-red-900 text-3xl font-bold">
                        VISION
                    </p>
                    <p className="mt-6 md:text-lg">
                    The vision of the Department is to achieve excellence in undergraduate and postgraduate education and research through a synergic combination and thereby lead to development of new knowledge.
                    </p>
                </div>
                <div className="mt-10 text-justify">
                    <p className="text-red-900 text-3xl font-bold">
                        MISSION
                    </p>
                    <p className="mt-6 md:text-lg">
                    To train the students to be lifelong learners who will contribute to the creation of new knowledge, new technology, and innovation through excellence in research in emerging areas and disciplines.
                    <br/><br/>
                    To educate students to be future leaders in science, technology, industry, education and other professions and succeed in a globally competitive environment.
                    <br/><br/>
                    To create National and International collaborations for research engagement in strategic areas of research
                    <br/><br/>
                    To undertake joint initiatives which offer opportunities for long-term interaction with academia, industry, government and society.
                    <br/><br/>
                    To create National and International collaborations for research engagement in strategic areas of research
                    </p>
                </div>
            </div>
        </div>

    )
}
export default Page
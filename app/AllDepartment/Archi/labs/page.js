import Image from 'next/image';

function page(){
    var labUrl = [
        "https://web.nitp.ac.in/dept/arch/labs/DSC_0686.jpg",
        "https://web.nitp.ac.in/dept/arch/labs/DSC_0680.jpg",
        "https://web.nitp.ac.in/dept/arch/labs/DSC_0675.jpg",
        "https://web.nitp.ac.in/dept/arch/labs/DSC_0666.jpg",
        "https://web.nitp.ac.in/dept/arch/labs/DSC_0663.jpg",
    ]
    var image = labUrl[0];
    var idx = 0;
    setInterval(()=>{
        image = labUrl[idx]
        idx++
        if(idx >= 6){
            idx = 0;
        }
    },2000)
    return (
        <div className="bg-orange-50 flex flex-col p-5">  
            <div className="flex flex-col md:ml-10">
                <div>
                    <p className="text-red-900 text-3xl font-bold">
                        LABS
                    </p>
                </div>
            </div>
            <div className="mb-10 flex flex-col lg:flex-row justify-between mt-6">
                <div className="flex flex-col">
                    <p className="text-red-900 font-bold text-2xl max-sm:text-1xl mb-4">
                        Departmental Laboratories
                    </p>
                    <div className="lg:w-2/3">
                        <p className="text-justify font-semibold pl-6">
                        The Department has 4 lecture room, 8 Studios and 5 laboratories. 
                        Apart from these there are a number of common class rooms, laboratories 
                        and infrastructure of the Institute which are as per Council of Architecture 
                        norms. Besides these Department has enough spaces, which are available for the 
                        meet the requirements of all the faculty members, staff, office and students.
                        <br/><br/>
                        Architecture Department, NIT Patna has well-equipped laboratories for the academic and research requirements of UG and PG students.
                        <ol className="mt-4 list-decimal ml-4">
                            <li>
                                Building Material Lab
                            </li>
                            <li>
                                Climatology Lab
                            </li>
                            <li>
                                Computer Lab
                            </li>
                        </ol>
                        </p>

                    </div>
                </div>
                <Image
                src={"https://web.nitp.ac.in/dept/cse/labs/DSC_0002.jpg"}
                alt="labs"
                width={400}
                height={300}
                className="mt-6 lg:mt-0 ml-6 lg:pl-0 lg:mr-6 rounded-lg bg-rose-200  "
                />
            </div>
        </div>

    )
}
export default page
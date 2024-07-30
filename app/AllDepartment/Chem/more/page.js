import BackDepartment from "@/components/BackDepartment"
import Image from "next/image"

const ActComp=({scholar,sp,title,curr,year,sno})=>{
    return(
    <div className='flex flex-col mt-10'>
        <div className='flex flex-col lg:flex-row'>
            <div>
                <span className='text-lg font-semibold'>{sno}. Scholar:</span> {scholar}
            </div>
            <div className='ml-4 lg:ml-12'>
                <span className='text-lg font-semibold'>Supervisor:</span> {sp}
            </div>
            <div className='ml-4 lg:ml-12'>
                <span className='text-lg font-semibold'>Year:</span> {year}
            </div>
        </div>
        <div className='ml-4 lg:mt-3'>
            <span className='text-lg font-semibold'>Thesis Title:</span> {title}
        </div>
        <div className={curr?`ml-4 lg:mt-3`:`hidden`}>
            <span className='text-lg font-semibold'>Current Status:</span> {curr}
        </div>
    </div>
    )
}

function Page(){
    return (
        <div className=" flex flex-col p-5">  
            <div className="flex flex-col md:ml-10">
                <div>
                    <p className="text-red-900 text-3xl font-bold">
                        More Info
                    </p>
                    <div>
                    <BackDepartment navigate={'/AllDepartment/Chem'}/>
                    </div>
                    
                    <p className="text-red-900 text-xl mt-4 font-bold">
                        Ph.D. Alumini:
                    </p>
                    <p className="text-red-900 text-xl mt-4 font-bold">
                        Ph.D. Thesis Awarded:
                    </p>
                </div>
                <ActComp
                sno={'1'}
                scholar={'Manisha Prakashni'}
                sp={'Dr. Suvankar Dasgupta'}
                year={'2024'}
                title={'Templated Synthesis of Mechanically Interlocked Molecules (MIMs) Involving Dialkylammonium Salts and [23]Crown Ethers'}
                />
                <ActComp
                sno={'2'}
                scholar={'Dr. Pramanand Kumar'}
                sp={'Dr. Subrata Das'}
                year={'2023'}
                title={'Graphene oxide/Reduced graphene oxide-based Nanomaterials and Their Applications'}
                curr={'Assistant Professor (Guest) in Motihari College of Engineering'}
                />

                <div className='mt-10'>

                    <p className="text-red-900 text-xl font-bold">
                    Thesis Submitted:
                    </p>
                </div>
                <ActComp
                sno={'1'}
                scholar={'Aprajita'}
                sp={'Dr. Mukesh Choudhary'}
                year={'2023'}
                title={' Synthesis, Characterization And Properties Of Copper(II)/Nickel(II) Coordination Complexes'}
                curr={'Assistant Professor, Department of Chemistry, Govt. College of Engineering, Bhagalpur Bihar.'}
                />
            </div>
        </div>

    )
}
export default Page
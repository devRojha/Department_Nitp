"use client"
import BackDepartment from '@/components/BackDepartment';
import Image from 'next/image';
import {useState,useEffect} from "react";

function Carousel({children:pics,
    autoSlideInterval=3000,
    autoSlide=true,}){
    const [curr,setCurr]=useState(0)
    const prev=()=>{
        setCurr((curr)=>(curr===0?pics.length-1:curr-1))
    }
    const next=()=>{
        setCurr((curr)=>(curr===pics.length-1?0:curr+1))
    }
    useEffect(()=>{
        if(!autoSlide) return 
        const slideInterval=setInterval(next,autoSlideInterval)
        return ()=>clearInterval(slideInterval)
    },[])
    return(
        <div className=' relative overflow-hidden'>
            <div className='flex transition-transform ease-out duration-1000'
            style={{transform:`translateX(-${curr*100}%)`}}>
                {pics}
            </div>
        </div>
    )
}

function Page(){
    var labUrl = [
        "https://web.nitp.ac.in/dept/arch/labs/DSC_0686.jpg",
        "https://web.nitp.ac.in/dept/arch/labs/DSC_0680.jpg",
        "https://web.nitp.ac.in/dept/arch/labs/DSC_0675.jpg",
        "https://web.nitp.ac.in/dept/arch/labs/DSC_0666.jpg",
        "https://web.nitp.ac.in/dept/arch/labs/DSC_0663.jpg",
    ]
    return (
        <div className="bg-orange-50 flex flex-col p-5">  
            <div className="flex flex-col md:ml-10">
                <div>
                    <p className="text-red-900 text-3xl font-bold">
                        LABS
                    </p>
                </div>
                <div>
                <BackDepartment navigate={'/AllDepartment/Archi'}/>
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
                        </p>
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
                        

                    </div>
                </div>
                <div className='w-[300px] sm:w-[400px] lg:w-[500px] m-auto mt-8'>
                <Carousel autoSlide={true}>
                {labUrl.map((img,i)=>(
                    
                    <Image src={img} alt='image' width={500}
                    height={500} key={i} className='object-fill w-full rounded-lg bg-red-200'
                    />
                    
                ))}
                </Carousel>
                </div>
            </div>
        </div>

    )
}
export default Page
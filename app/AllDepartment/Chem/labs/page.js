'use client'
import Image from 'next/image'
import {useState,useEffect} from 'react';

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
            <div className='absolute bottom-3 right-0 left-0 '>
                <div className='flex items-center justify-center gap-2'>
                    {pics.map((_,i)=>(
                        <div className={`transition-all w-3 h-3
                        bg-black rounded-full ${curr===i?"p-2":"bg-opacity-50"}`} key={i}>

                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

function page(){
    var labUrl = [
        "https://web.nitp.ac.in/dept/chem/labs/tl_04.jpg",
        "https://web.nitp.ac.in/dept/chem/labs/tl_03.jpg",
        "https://web.nitp.ac.in/dept/chem/labs/tl_02.jpg",
        "https://web.nitp.ac.in/dept/chem/labs/tl_01.jpg",
        "https://web.nitp.ac.in/dept/chem/labs/tl_04.jpg",
    ]
    var resLab=[
        'https://web.nitp.ac.in/dept/chem/labs/rl_08.jpg',
        'https://web.nitp.ac.in/dept/chem/labs/rl_07.jpg',
        'https://web.nitp.ac.in/dept/chem/labs/rl_06.jpg',
        'https://web.nitp.ac.in/dept/chem/labs/rl_05.jpg',
        'https://web.nitp.ac.in/dept/chem/labs/rl_04.jpg',
        'https://web.nitp.ac.in/dept/chem/labs/rl_03.jpg',
        'https://web.nitp.ac.in/dept/chem/labs/rl_02.jpg',
        'https://web.nitp.ac.in/dept/chem/labs/rl_01.jpg',
        'https://web.nitp.ac.in/dept/chem/labs/rl_08.jpg',
    ]
    var InsLab=[
        'https://web.nitp.ac.in/dept/chem/labs/il_03.jpg',
        'https://web.nitp.ac.in/dept/chem/labs/il_02.jpg',
        'https://web.nitp.ac.in/dept/chem/labs/il_01.jpg',
        'https://web.nitp.ac.in/dept/chem/labs/il_03.jpg',
    ]

    return (
        <div className="bg-orange-50 flex flex-col p-5">  
            <div className="flex flex-col md:ml-10">
                <div>
                    <p className="text-red-900 text-3xl font-bold">
                        LABS
                    </p>
                </div>
                <div className="mt-14 mx-auto">
                    <p className="text-red-900 text-3xl lg:text-4xl font-semibold">
                        Teaching Lab
                    </p>
                </div>
                <div className='w-[300px] sm:w-[400px] lg:w-[500px] m-auto mt-8'>
                <Carousel autoSlide={true}>
                {labUrl.map((img,i)=>(
                    
                    <Image src={img} alt='image' width={500}
                    height={500} key={i} className='object-fill w-full rounded-lg'
                    />
                    
                ))}
                </Carousel>
                </div>
                <div className="mt-14 mx-auto">
                    <p className="text-red-900 text-3xl lg:text-4xl font-semibold">
                        Instrument Lab
                    </p>
                </div>
                <div className='w-[300px] sm:w-[400px] lg:w-[500px] m-auto mt-8'>
                <Carousel autoSlide={true}>
                {InsLab.map((img,i)=>(
                    
                    <Image src={img} alt='image' width={500}
                    height={500} key={i} className='object-fill w-full rounded-lg'
                    />
                    
                ))}
                </Carousel>
                </div>
                <div className="mt-14 mx-auto">
                    <p className="text-red-900 text-3xl lg:text-4xl font-semibold">
                        Research Lab
                    </p>
                </div>
                <div className='w-[300px] sm:w-[400px] lg:w-[500px] m-auto mt-8'>
                <Carousel autoSlide={true}>
                {resLab.map((img,i)=>(
                    
                    <Image src={img} alt='image' width={500}
                    height={500} key={i} className='object-fill w-full rounded-lg'
                    />
                    
                ))}
                </Carousel>
                </div>
                <div className="mt-20">
                    <p className="text-red-900 text-3xl lg:text-4xl font-semibold">
                    Individual Faculty Research Lab:-
                    </p>
                </div>
                <ol className="mt-10 font-semibold list-decimal ml-4 md:ml-10">
                            <li>
                            Applied Chemistry Lab (Dr. Subrata Das)
                            </li>
                            <li>
                            Bioorganic Lab (Dr. Rima Thakur)
                            </li>
                            <li>
                            Biophysical Chemistry Lab (Dr. Niki Sweta Jha)
                            </li>
                            <li>
                            Green Synthesis Lab (Dr. Tasneem Parvin)  
                            </li>
                            <li>
                            Inorganic Lab (Dr. Mukesh Choudhary)
                            </li>
                            <li>
                            Supramolecular Materials Lab (Dr. Suvankar Dasgupta)
                            </li>
                            <li>
                            Synthetic Research Lab (Dr. Khursheed Ahmad)
                            </li>
                        </ol>
            </div>
        </div>

    )
}
export default page
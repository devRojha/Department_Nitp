import Image from "next/image"

export default function labs(){
    var labUrl = [
        "https://web.nitp.ac.in/dept/ee/labs/DSC_0063.jpg",
        "https://web.nitp.ac.in/dept/ee/labs/DSC_0056.jpg",
        "https://web.nitp.ac.in/dept/ee/labs/DSC_0057.jpg",
        "https://web.nitp.ac.in/dept/ee/labs/DSC_0058.jpg",
        "https://web.nitp.ac.in/dept/ee/labs/DSC_0061.jpg",
        "https://web.nitp.ac.in/dept/ee/labs/DSC_0063.jpg",
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
        <div className="bg-orange-50 flex flex-col p-10 max-sm:p-2">  
            <div className="flex flex-col  mb-16">
                <div>
                    <p className="text-red-900 text-3xl max-sm:text-2xl font-bold">
                        LABS
                    </p>
                </div>
                <div className="mt-2">
                    <p className="text-gray-500 text-xl font-semibold">
                        MECHANICAL ENGINEERING
                    </p>
                </div>
            </div>
            {/* Lab list */}
            <div className="mb-10">
                <div className="text-red-900 font-bold text-2xl max-sm:text-lg mb-8">Laboratory Facilities Available in the Department:-</div>
                <div className=" grid grid-cols-2 max-md:grid-cols-1">
                    <ol className="list-decimal list-inside ml-5 space-y-4 text-lg max-md:text-[15px] max-sm:text-sm">
                        <li>Strength of Materials Lab.</li>
                        <li>Internal Combustion Gas Turbine Lab.</li>
                        <li>Engine Testing Lab.</li>
                        <li>Heat and Mass Transfer Lab.</li>
                        <li>Applied Thermodynamics Lab.</li>
                        <li>Refrigeration and Air Conditioning Lab.</li>
                        <li>Dynamics of Machinery Lab.</li>
                        <li>Fuel Cell Lab.</li>
                        <li>Renewable Energy Lab.</li>
                        <li>Computer Aided Manufacturing Lab.</li>
                        <li>Flexible Manufacturing System Lab.</li>
                        <ul className="ml-10 list-disc">
                            <li>Machine Shop</li>
                            <li>Welding Shop</li>
                            <li>Carpentry Shop</li>
                            <li>Fitting Shop</li>
                            <li>Black Smithy Shop</li>
                        </ul>
                    </ol>
                    <div className=" flex justify-center max-md:hidden">
                        <div className="flex flex-col justify-center">
                            <Image src={"https://lh3.googleusercontent.com/d/1Q0TgCyX0bpbtiKhYiqtDBQ0N_7JzwiQI=w320?authuser=0"} width={700} height={1000} alt="Loading.." className="col-span-1 h-80 border rounded-lg bg-rose-200" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-10">
                <div className=" max-md:flex justify-center hidden">
                    <div className="flex flex-col justify-center">
                        <Image src={"https://lh3.googleusercontent.com/d/1Q0TgCyX0bpbtiKhYiqtDBQ0N_7JzwiQI=w320?authuser=0"} width={700} height={1000} alt="Loading.." className="col-span-1 h-80 border rounded-lg bg-rose-200" />
                    </div>
                </div>
            </div>      
        </div>
    )
}
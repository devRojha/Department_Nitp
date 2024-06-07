"use client"

export const DepartmentButton = ({department, onClick})=>{
    return(
        <button onClick={()=>onClick()}  className="mt-10">
            <div className="flex justify-center">
                <div className="w-[80%] max-sm:w-full py-8 rounded-lg shadow-2xl bg-amber-50 hover:bg-amber-100 active:text-white text-1xl font-semibold text-red-900">{department}</div>
            </div>
        </button>
    )
}
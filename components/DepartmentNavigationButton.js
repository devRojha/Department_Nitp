"use client"

export const DepartmentNavigationButton = ({Title , onClick})=>{
    return (
        <div className="flex justify-center mb-10">
            <button onClick={onClick()} className="w-[80%] py-5 rounded-lg bg-amber-50 shadow-lg shadow-slate-600 text-red-950 font-semibold hover:bg-amber-100 active:text-white text-center text-sm">{Title}</button>
        </div>
    )
}
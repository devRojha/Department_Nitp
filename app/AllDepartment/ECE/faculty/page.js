"use client"
import BackDepartment from '@/components/BackDepartment';
import FacultyCards from '@/components/facultyCards';
function page() {
    const faculty=[
        {
            id:1,
            name:"Maheshwari Prasad Singh",
            designation:"Professor & HOD",
            img:"https://lh3.googleusercontent.com/d/1f2bFo1KIY1xF6MOmTAjM3gNYZcUySBaG=w320?authuser=0",
            research:"Machine Learning, AI, WSN, Security"
        },
        {
            id:2,
            name:"Dr. B Balaji Naik",
            designation:"Assistant Professor",
            img:"https://lh3.googleusercontent.com/d/1Abn5VMv4oWnpUYyNtO_j-mrh5YBNzD-C=w320?authuser=0",
            research:"Cloud Computing, Nature Inspired Algorithms, Edge Computing, Workflow Scheduling Algorithm, Optimization, Quantum Computing"
        },
        {
            id:3,
            name:"Dr. B Balaji Naik",
            designation:"Assistant Professor",
            img:"https://lh3.googleusercontent.com/d/1Abn5VMv4oWnpUYyNtO_j-mrh5YBNzD-C=w320?authuser=0",
            research:"Cloud Computing, Nature Inspired Algorithms, Edge Computing, Workflow Scheduling Algorithm, Optimization, Quantum Computing"
        },
        {
            id:4,
            name:"Dr. B Balaji Naik",
            designation:"Assistant Professor",
            img:"https://lh3.googleusercontent.com/d/1Abn5VMv4oWnpUYyNtO_j-mrh5YBNzD-C=w320?authuser=0",
            research:"Cloud Computing, Nature Inspired Algorithms, Edge Computing, Workflow Scheduling Algorithm, Optimization, Quantum Computing"
        },
        {
            id:4,
            name:"Dr. B Balaji Naik",
            designation:"Assistant Professor",
            img:"https://lh3.googleusercontent.com/d/1Abn5VMv4oWnpUYyNtO_j-mrh5YBNzD-C=w320?authuser=0",
            research:"Cloud Computing, Nature Inspired Algorithms, Edge Computing, Workflow Scheduling Algorithm, Optimization, Quantum Computing"
        },
        {
            id:4,
            name:"Dr. B Balaji Naik",
            designation:"Assistant Professor",
            img:"https://lh3.googleusercontent.com/d/1Abn5VMv4oWnpUYyNtO_j-mrh5YBNzD-C=w320?authuser=0",
            research:"Cloud Computing, Nature Inspired Algorithms, Edge Computing, Workflow Scheduling Algorithm, Optimization, Quantum Computing"
        },
        {
            id:4,
            name:"Dr. B Balaji Naik",
            designation:"Assistant Professor",
            img:"https://lh3.googleusercontent.com/d/1Abn5VMv4oWnpUYyNtO_j-mrh5YBNzD-C=w320?authuser=0",
            research:"Cloud Computing, Nature Inspired Algorithms, Edge Computing, Workflow Scheduling Algorithm, Optimization, Quantum Computing"
        },
        {
            id:4,
            name:"Dr. B Balaji Naik",
            designation:"Assistant Professor",
            img:"https://lh3.googleusercontent.com/d/1Abn5VMv4oWnpUYyNtO_j-mrh5YBNzD-C=w320?authuser=0",
            research:"Cloud Computing, Nature Inspired Algorithms, Edge Computing, Workflow Scheduling Algorithm, Optimization, Quantum Computing"
        },
        {
            id:5,
            name:"Dr. B Balaji Naik",
            designation:"Assistant Professor",
            img:"https://lh3.googleusercontent.com/d/1Abn5VMv4oWnpUYyNtO_j-mrh5YBNzD-C=w320?authuser=0",
            research:"Cloud Computing, Nature Inspired Algorithms, Edge Computing, Workflow Scheduling Algorithm, Optimization, Quantum Computing"
        }
    ];
  return (
    <div className="bg-orange-50 flex flex-col p-5">
        <div className="flex flex-col md:ml-10">
            <div>
                <p className="text-red-900 text-3xl font-bold">
                    Faculty
                </p>
            </div>
            <div className="mt-2">
                <p className="text-gray-500 text-xl font-semibold">
                    Computer Science and Engineering
                </p>
            </div>
            <div>
            <BackDepartment navigate={'/AllDepartment/ECE'}/>
            </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5
        justify-items-center mt-16 ml-5 mr-5 gap-10 ">
            {faculty.map((faculties,id)=>{
                return(
                    <FacultyCards
                    key={id}
                    name={faculties.name}
                    desig={faculties.designation}
                    img={faculties.img}
                    research={faculties.research}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default page
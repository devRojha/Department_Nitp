import FacultyList from '@/components/facultycomponents/FacultyList';
import React from 'react'

// import pdf from '@/components/pdf.pdf
const Home=() =>{
  return (
   <>
    <div>
      <FacultyList url={"/AllDepartment/CSE/faculty"} branch={"cse"}/>
    </div>
   </>
  )
}
export default Home;
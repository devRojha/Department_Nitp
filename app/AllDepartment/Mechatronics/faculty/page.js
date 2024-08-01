import FacultyList from '@/components/facultycomponents/FacultyList';
import React from 'react'

// import pdf from '@/components/pdf.pdf
const Home=() =>{
  return (
   <>
    <div>
      <FacultyList url={"/AllDepartment/Mechatronics/faculty"} branch={"mae"}/>
    </div>
   </>
  )
}
export default Home;
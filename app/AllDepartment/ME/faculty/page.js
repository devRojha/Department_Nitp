import FacultyList from '@/components/facultycomponents/FacultyList';
import React from 'react'

// import pdf from '@/components/pdf.pdf
const Home=() =>{
  return (
   <>
    <div>
      <FacultyList url={"/AllDepartment/ME/faculty"} branch={"me"}/>
    </div>
   </>
  )
}
export default Home;
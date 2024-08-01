import FacultyList from '@/components/facultycomponents/FacultyList';
import React from 'react'

// import pdf from '@/components/pdf.pdf
const Home=() =>{
  return (
   <>
    <div>
      <FacultyList url={"/AllDepartment/CE/faculty"} branch={"ce"}/>
    </div>
   </>
  )
}
export default Home;
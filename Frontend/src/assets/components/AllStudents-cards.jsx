// import { useEffect, useState } from 'react'
// import "../componentsCSS/studentcard.css/"


// function AllStudentsCard() {
//     const [studentList, setStudentlist] = useState(null)

//     function getStudents() {
//         fetch("http://127.0.0.1:8000/Student/list/")
//             .then((res) => {
//                 return res.json()
//                     .then((data) => {
//                         setStudentlist(data.results)
//                     })
//             })
//     }

//     useEffect(getStudents, [])

//     return (
//         <div className='row'>
//             {studentList && studentList.map((student) => (
//                 <div className='col-md-3' key={student.id}>
//                     <Card firstname={student.firstname} lastname={student.firstname} educational_background={student.educational_background} />
//                 </div>
//             ))}
//         </div>
//     )
// }


// export default AllStudentsCard
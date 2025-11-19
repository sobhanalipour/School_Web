import { useEffect, useState } from 'react'
import "../componentsCSS/card.css/"
import Card from "./Card"


function Allcards() {
    const [studentList, setStudentlist] = useState(null)

    function getStudents() {
        fetch("http://127.0.0.1:8000/Student/list/")
            .then((res) => {
                return res.json()
                    .then((data) => {
                        setStudentlist(data)
                    })
            })
    }

    useEffect(getStudents, [])

    return (
        <div className='row'>
            {studentList && studentList.map((movie) => (
                <div className='col-md-3'>
                    <Card firstname={movie.firstname} lastname={movie.firstname} educational_background={movie.educational_background} />
                </div>
            ))}
        </div>
    )
}

export default Allcards
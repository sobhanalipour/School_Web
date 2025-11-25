import { useState, useEffect } from 'react'
import Navbar from './assets/components/Navbar'
import Footer from './assets/components/Footer'


function StudentsPage() {
    const [getStudents, setStudents] = useState(null)

    function Students() {
        fetch("http://127.0.0.1:8000/Student/list/")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setStudents(data.results);
            })
    }

    useEffect(Students, []);

    return (
        <section>
            <Navbar />

            <h2 className='text-center text-white fw-bold mt-5'>
                School <span>Students</span>
            </h2>

            <p className='text-center text-white mt-3'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis iste quibusdam quas error asperiores harum autem necessitatibus, et totam natus.
            </p>

            <div className='container'>
                <div className='row'>
                    <div className='col-md-9 mx-auto'>
                        <table className="table table-striped table-dark mt-5 border">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Firstname</th>
                                    <th scope="col">Lastname</th>
                                    <th scope="col">Gender</th>
                                    <th scope='col'>field of studey</th>
                                    <th scope="col">Educational background</th>
                                </tr>
                            </thead>
                            <tbody>
                                {getStudents && getStudents.map((list) => (
                                    <tr>
                                        <th scope="row">{list.id}</th>
                                        <td>{list.firstname}</td>
                                        <td>{list.lastname}</td>
                                        <td>{list.gender}</td>
                                        <td>{list.field_of_studey}</td>
                                        <td>{list.educational_background}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <Footer />
        </section>
    )
}



export default StudentsPage
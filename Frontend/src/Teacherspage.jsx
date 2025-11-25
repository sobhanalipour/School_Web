import { useState, useEffect } from 'react'
import Navbar from './assets/components/Navbar'
import Footer from './assets/components/Footer'


function TeachersPage() {
    const [getTeachers, setTeachers] = useState(null)

    function Typeteaching() {
        fetch("http://127.0.0.1:8000/Student/teacher/")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setTeachers(data.results);
            })
    }

    useEffect(Typeteaching, []);

    return (
        <section>
            <Navbar />

            <h2 className='text-center text-white fw-bold mt-5'>
                School <span>Teachers</span>
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
                                    <th scope="col">Name</th>
                                    <th scope="col">Type of Teaching</th>
                                </tr>
                            </thead>
                            <tbody>
                                {getTeachers && getTeachers.map((list) => (
                                    <tr>
                                        <th scope="row">{list.id}</th>
                                        <td>{list.title}</td>
                                        <td>{list.type}</td>
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



export default TeachersPage
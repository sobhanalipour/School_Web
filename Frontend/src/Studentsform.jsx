import { useEffect, useRef, useState } from "react";
import axios from 'axios'
import "./css/studentsform.css/"
import Navbar from "./assets/components/Navbar"
import Footer from "./assets/components/Footer"


function StudentsForm() {

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


    const [getSchool, setSchool] = useState(null)

    function School() {
        fetch("http://127.0.0.1:8000/Student/school/")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setSchool(data.results);
            })
    }

    useEffect(School, []);


    const [getEducational, setEducational] = useState(null)

    function Educational() {
        fetch("http://127.0.0.1:8000/Student/educational_background/")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setEducational(data);
            })
    }

    useEffect(Educational, []);


    const [getfield, setfield] = useState(null)

    function field() {
        fetch("http://127.0.0.1:8000/Student/field_of_studey/")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setfield(data);
            })
    }

    useEffect(field, []);


    const [getGender, setGender] = useState(null)

    function Gender() {
        fetch("http://127.0.0.1:8000/Student/gender/")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setGender(data);
            })
    }

    useEffect(Gender, []);


    const [getCity, setCity] = useState(null)

    function City() {
        fetch("http://127.0.0.1:8000/Student/city/")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setCity(data.results);
            })
    }

    useEffect(City, []);


    const InputFirstname = useRef(null)
    const InputLastname = useRef(null)
    const InputAge = useRef(null)
    const InputPhonenumber = useRef(null)
    const InputSchool = useRef(null)
    const InputNationalcode = useRef(null)
    const InputEducationalbackground = useRef(null)
    const InputFieldofstudey = useRef(null)
    const InputTeacher = useRef(null)
    const InputGender = useRef(null)
    const InputCity = useRef(null)
    const InputGPA = useRef(null)


    const saveStudent = (event) => {
        event.preventDefault();
        axios.post("http://127.0.0.1:8000/Student/create/", {
            "firstname": InputFirstname.current.value,
            "lastname": InputLastname.current.value,
            "age": InputAge.current.value,
            "phonenumber": InputPhonenumber.current.value,
            "school": InputSchool.current.value,
            "national_code": InputNationalcode.current.value,
            "educational_background": InputEducationalbackground.current.value,
            "field_of_studey": InputFieldofstudey.current.value,
            "teacher": InputTeacher.current.value,
            "gender": InputGender.current.value,
            "city": InputCity.current.value,
            "GPA": InputGPA.current.value,
        }, {
            headers: {
                "Content-Type": 'multipart/form-data'
            }
        })

            .then((res) => {
                console.log(res)
            })
    }


    useEffect(() => { })


    return (
        <section id="Studentform" class="min-vh-100 d-flex d-column align-items-center mt-5">
            <div class="container">
                <div class="row">
                    <div class="Studentform-card col-md-6 g-4 mb-4 pb-4 mx-auto">
                        <h1 class="text-white text-center">
                            Add New Student
                        </h1>

                        <form>
                            <div class="mb-2 text-info">
                                <label class="form-label">First name</label>
                                <input ref={InputFirstname} type="text" class="form-control border-3 border-info"
                                    aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-2 text-info">
                                <label class="form-label">Last name</label>
                                <input ref={InputLastname} type="text" class="form-control border-3 border-info"
                                    aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-2 text-info">
                                <label class="form-label">Age</label>
                                <input ref={InputAge} type="text" class="form-control border-3 border-info"
                                    aria-describedby="emailHelp" />
                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div class="mb-2 text-info">
                                <label class="form-label">Phonenumber</label>
                                <input ref={InputPhonenumber} type="number" class="form-control border-3 border-info" />
                            </div>
                            <div class="mb-2 text-info mt-4">
                                <select ref={InputSchool} type="text" class="form-control border-3 border-info"
                                    aria-describedby="emailHelp">
                                    <option value="">School</option>
                                    {getSchool && getSchool.map((list) => (
                                        <option value="1">{list.title}</option>
                                    ))}
                                </select>
                            </div>
                            <div class="mb-2 text-info">
                                <label class="form-label">National code</label>
                                <input ref={InputNationalcode} type="number" class="form-control border-3 border-info"
                                    aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-2 text-info mt-4">
                                <select ref={InputEducationalbackground} type="text" class="form-control border-3 border-info"
                                    aria-describedby="emailHelp">
                                    <option value="">Educational background</option>
                                    {getEducational && getEducational.map((list) => (
                                        <option value="1">{list.title}</option>
                                    ))}
                                </select>
                            </div>
                            <div class="mb-2 text-info mt-4">
                                <select ref={InputFieldofstudey} type="text" class="form-control border-3 border-info"
                                    aria-describedby="emailHelp">
                                    <option value="">Field of studey</option>
                                    {getfield && getfield.map((list) => (
                                        <option value="1">{list.title}</option>
                                    ))}
                                </select>
                            </div>
                            <div class="mb-2 text-info mt-4">
                                <select ref={InputTeacher} type="text" class="form-control border-3 border-info"
                                    aria-describedby="emailHelp">
                                    <option value="">Teacher</option>
                                    {getTeachers && getTeachers.map((list) => (
                                        <option value="1">{list.title}</option>
                                    ))}
                                </select>
                            </div>
                            <div class="mb-2 text-info mt-4">
                                <select ref={InputGender} type="text" class="form-control border-3 border-info"
                                    aria-describedby="emailHelp">
                                    <option value="">Gender</option>
                                    {getGender && getGender.map((list) => (
                                        <option value="1">{list.title}</option>
                                    ))}
                                </select>
                            </div>
                            <div class="mb-2 text-info mt-4">
                                <select ref={InputCity} type="text" class="form-control border-3 border-info"
                                    aria-describedby="emailHelp">
                                    <option value="">City</option>
                                    {getCity && getCity.map((list) => (
                                        <option value="1">{list.title}</option>
                                    ))}
                                </select>
                            </div>
                            <div class="mb-2 text-info mt-4">
                                <label class="form-label">GPA</label>
                                <input ref={InputGPA} type="number" class="form-control border-3 border-info"
                                    aria-describedby="emailHelp" />
                            </div>
                            <button onClick={saveStudent} type="submit" class="btn btn-info mt-4">Send Resume</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}



export default StudentsForm
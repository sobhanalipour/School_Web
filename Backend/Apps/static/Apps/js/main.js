let csrftoken = getCookie('csrftoken');


function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}



let getstudents = document.getElementById("getstudents")
let addstudent = document.getElementById("addstudent")
let Studentlist = document.getElementById("Studentlist")


function renderstudent(students) {
    Studentlist.innerHTML = ''

    for (const student of students) {
        Studentlist.innerHTML += `
        <div class="col-md-3">
                <div class="card">
                    <p class="d-flex heading gap-3">
                        Student name : ${student.firstname}
                        ${student.lastname}
                    </p>
                    <p>
                        Educational_background : ${student.educational_background}
                    </p>
                    <p>
                        School : ${student.school}
                    </p>

                    <div class="d-flex">
                        <button id="edit-${student.id}" onclick="editStudent('${student.id}' , '${student.firstname}' , '${student.lastname}' , '${student.age}' , '${student.phonenumber}' , '${student.educational_background}' , '${student.GPA}' , '${student.school}' , '${student.national_code}' , '${student.field_of_studey}' , '${student.gender}' , '${student.city}')" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                            aria-controls="offcanvasRight">Update!!</button>

                        <button onclick="Deletestudent(${student.id})"> Delete!!
                        </button>
                    </div>

                    <div class="d-flex">
                        <button onclick="getStudentDetail(${student.id})" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop"
                            aria-controls="offcanvasTop">See More...</button>

                        <button id="edit-${student.id}" onclick="editStudentscore('${student.id}' , '${student.math}' , '${student.physic}' , '${student.chemistry}' , '${student.hendese}' , '${student.persion}')" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Update Score...</button>
                    </div>
                </div>
            </div>`
    }
}


function getstudentslist() {
    fetch("http://127.0.0.1:8000/Student/list/")
        .then(res => res.json())
        .then((data) => {
            renderstudent(data)
        })
}

getstudents.addEventListener('click', getstudentslist)




function Deletestudent(id) {
    fetch(`http://127.0.0.1:8000/Student/detail/${id}/`, {
        method: "DELETE",
        headers: {
            "X-CSRFToken": csrftoken,
            "Accept": "application/json, text/plain, */*",
            "Content-Type": "application/json",
        },
    })
        .then(res => res)
        .then((data) => {
            getstudentslist()
        })
}


let information = document.getElementById("information")


function getStudentDetail(id) {
    fetch(`http://127.0.0.1:8000/Student/detail/${id}/`)

        .then(res => res.json())
        .then((data) => {
            information.innerHTML = ''

            for (const key of Object.keys(data)) {
                let x = document.createElement("x")
                let text = document.createTextNode(`${key} : ${data[key]} / `)
                x.appendChild(text)
                information.appendChild(x)
            }
        })
}



let studentsumbit = document.getElementById("studentsumbit")

let studentid = document.getElementById("studentid")
let student_firstname = document.getElementById("student_firstname")
let student_lastname = document.getElementById("student_lastname")
let student_age = document.getElementById("student_age")
let student_phonenumber = document.getElementById("student_phonenumber")
let student_GPA = document.getElementById("student_GPA")
let student_school = document.getElementById("student_school")
let student_national_code = document.getElementById("student_national_code")
let student_gender = document.getElementById("student_gender")
let student_city = document.getElementById("student_city")
let student_educational_background = document.getElementById("student_educational_background")
let studnet_field_of_studey = document.getElementById("studnet_field_of_studey")



function resetform() {
    student_firstname.value = ''
    student_lastname.value = ''
    student_age.value = ''
    student_phonenumber.value = ''
    student_GPA.value = ''
    student_school.value = ''
    student_national_code.value = ''
    student_gender.value = ''
    student_city.value = ''
    student_educational_background.value = ''
    studnet_field_of_studey.value = ''
}


function editStudent(id, firstname, lastname, age, phonenumber, educational_background, GPA, school, national_code, field_of_studey, gender, city) {
    studentid.value = id
    student_firstname.value = firstname
    student_lastname.value = lastname
    student_age.value = age
    student_phonenumber.value = phonenumber
    student_educational_background.value = educational_background
    student_GPA.value = GPA
    student_school.value = school
    student_national_code.value = national_code
    studnet_field_of_studey.value = field_of_studey
    student_gender.value = gender
    student_city.value = city

    changeFormState("update")
}



let lessonid = document.getElementById("lessonid")
let lesson1 = document.getElementById("lesson1")
let lesson2 = document.getElementById("lesson1")
let lesson3 = document.getElementById("lesson1")
let lesson4 = document.getElementById("lesson1")
let lesson5 = document.getElementById("lesson1")
let Scoresumbit = document.getElementById("Scoresumbit")


function resetscoreform() {
    lesson1.value = ''
    lesson2.value = ''
    lesson3.value = ''
    lesson4.value = ''
    lesson5.value = ''
}


function editStudentscore(id, math, physic, chemistry, hendese, persion) {
    lessonid.value = id
    lesson1.value = math
    lesson2.value = physic
    lesson3.value = chemistry
    lesson4.value = hendese
    lesson5.value = persion

    changeFormState("update")
}



let formtitle2 = document.getElementById("formtitle2")
function changeFormState(mode) {
    if (mode == "update") {
        Scoresumbit.innerText = "Update Score"
        formtitle2.innerText = "Update Score"
        Scoresumbit.dataset.mode = "update"
    }
}


studentsumbit.addEventListener("click", (e) => {
    e.preventDefault()
    if (e.target.dataset.mode == "update") {
        fetch(`http://127.0.0.1:8000/Student/Scoreupdate/${lessonid.value}/`, {
            method: "PUT",
            body: JSON.stringify({
                math: lesson1.value,
                physic: lesson2.value,
                chemistry: lesson3.value,
                hendese: lesson4.value,
                persion: lesson5.value,
            }),
            headers: {
                "X-CSRFToken": csrftoken,
                "Accept": "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
        })
            .then(res => res.json())
            .then((data) => {
                getstudentslist()
            })
    }
})



studentsumbit.addEventListener("click", (e) => {
    e.preventDefault()
    if (e.target.dataset.mode == "create") {
        fetch("http://127.0.0.1:8000/Student/list/", {
            method: "POST",
            body: JSON.stringify({
                firstname: student_firstname.value,
                lastname: student_lastname.value,
                age: student_age.value,
                phonenumber: student_phonenumber.value,
                educational_background: student_educational_background.value,
                GPA: student_GPA.value,
                school: student_school.value,
                national_code: student_national_code.value,
                field_of_studey: studnet_field_of_studey.value,
                gender: student_gender.value,
                city: student_city.value,
            }),
            headers: {
                "X-CSRFToken": csrftoken,
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
            },
        })
            .then(res => { })
            .then((data) => {
                getstudentslist()
            })
    } else if (e.target.dataset.mode == "update") {
        fetch(`http://127.0.0.1:8000/Student/detail/${studentid.value}/`, {
            method: "PUT",
            body: JSON.stringify({
                firstname: student_firstname.value,
                lastname: student_lastname.value,
                age: student_age.value,
                phonenumber: student_phonenumber.value,
                educational_background: student_educational_background.value,
                GPA: student_GPA.value,
                school: student_school.value,
                national_code: student_national_code.value,
                field_of_studey: studnet_field_of_studey.value,
                gender: student_gender.value,
                city: student_city.value,
            }),
            headers: {
                "X-CSRFToken": csrftoken,
                "Accept": "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
        })
            .then(res => res.json())
            .then((data) => {
                getstudentslist()
                changeFormState("create")
            })
    }
})



document.addEventListener("DOMContentLoaded", () => {
    fetch(`http://127.0.0.1:8000/Student/educational_background/`)
        .then(res => res.json())
        .then((data) => {
            for (const educational of data) {
                let option = document.createElement('option')
                let text = document.createTextNode(educational.title)

                option.appendChild(text)
                option.value = educational.id
                student_educational_background.appendChild(option)
            }
        })
})

resetform()


document.addEventListener("DOMContentLoaded", () => {
    fetch(`http://127.0.0.1:8000/Student/field_of_studey/`)
        .then(res => res.json())
        .then((data) => {
            for (const field of data) {
                let option = document.createElement('option')
                let text = document.createTextNode(field.title)

                option.appendChild(text)
                option.value = field.id
                studnet_field_of_studey.appendChild(option)
            }
        })
})

resetform()


document.addEventListener("DOMContentLoaded", () => {
    fetch(`http://127.0.0.1:8000/Student/gender/`)
        .then(res => res.json())
        .then((data) => {
            console.log(data)
            for (const g of data) {
                let option = document.createElement('option')
                let text = document.createTextNode(g.title)

                option.appendChild(text)
                option.value = g.id
                student_gender.appendChild(option)
            }
        })
})

resetform()


document.addEventListener("DOMContentLoaded", () => {
    fetch(`http://127.0.0.1:8000/Student/Score/`)
        .then(res => res.json())
        .then((data) => {
            for (const score of data) {
                let option = document.createElement('option')
                let text = document.createTextNode(score.id)

                option.appendChild(text)
                option.value = score.id
                lesson1.appendChild(option)
            }
        })
})

resetscoreform()
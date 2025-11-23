import { useState } from 'react'
import { Link } from "react-router";
// import AllStudentsCard from './assets/components/AllStudents-cards'
import Navbar from './assets/components/Navbar'
import './css/App.css/'
import panter from "./assets/img/School.png/"
import panter2 from "./assets/img/Students.png/"
import Button from './assets/components/button'
import Card1 from './assets/components/Cards1'


function App() {
    return (
        <section>
            <Navbar />

            <div className='container'>
                <div className='row'>
                    <div id='header' className='col-md-6 text-white'>
                        <h1>School .....</h1>
                        <p className='mt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum perferendis vero, magni architecto excepturi repellendus voluptatem ex, natus dolorum beatae eum assumenda minima sunt tenetur earum quae! Distinctio nemo quidem officia illo accusamus libero facere iusto illum tempore obcaecati adipisci amet blanditiis harum magnam, ipsam nostrum perferendis? Obcaecati, autem possimus!</p>
                        <Link to="/about-school"><Button title="See More ..."></Button></Link>
                    </div>

                    <div className='col-md-6'>
                        <img className='img-fluid' src={panter} alt="School" />
                    </div>
                </div>
            </div>

            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-9 text-white mx-auto'>
                        <h2 className='fw-bold text-center'>
                            About tihs school
                        </h2>

                        <p className='mt-3'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur optio iusto perspiciatis ipsum magni. Nisi aut deleniti porro vel? Officia molestiae veniam doloremque ad! Nobis eum dicta, amet consectetur repellendus tempore doloremque. Esse temporibus eius debitis! Necessitatibus, aspernatur? Aliquid debitis consequatur assumenda, cupiditate totam commodi exercitationem veritatis nihil incidunt animi? ldkvlkd dlkvlkd dvlv d dlk fpdkvd;l;mvpdsmlkv kdmslv dskmdsf kvmpdask vdlml;dlkmd lvkdl;a v,d ;lcv dvlkd lcvdsfkffffl
                        </p>

                        <Link to="/about-school"><Button title="See More ..."></Button></Link>
                    </div>
                </div>
            </div>

            <div id='Seecard' className='container '>
                <div className='row g-3'>
                    <div className='col-md-4'>
                        <div class="notification">
                            <div class="notiglow"></div>
                            <div class="notiborderglow"></div>
                            <div class="notititle"><Link to="/students-school"><a href="">See Students List</a></Link></div>
                            <div class="notibody">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae voluptates distinctio in explicabo!</div>
                        </div>
                    </div>

                    <div className='col-md-4'>
                        <div class="notification">
                            <div class="notiglow"></div>
                            <div class="notiborderglow"></div>
                            <div class="notititle"><a href="">See Top Students</a></div>
                            <div class="notibody">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iure doloremque labore accusantium!</div>
                        </div>
                    </div>

                    <div className='col-md-4'>
                        <div class="notification">
                            <div class="notiglow"></div>
                            <div class="notiborderglow"></div>
                            <div class="notititle"><a href="">See Teachers List</a></div>
                            <div class="notibody">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat iste aliquam beatae assumenda!</div>
                        </div>
                    </div>

                    <div className='col-md-4'>
                        <div class="notification">
                            <div class="notiglow"></div>
                            <div class="notiborderglow"></div>
                            <div class="notititle"><a href="">See Students List</a></div>
                            <div class="notibody">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae voluptates distinctio in explicabo!</div>
                        </div>
                    </div>

                    <div className='col-md-4'>
                        <div class="notification">
                            <div class="notiglow"></div>
                            <div class="notiborderglow"></div>
                            <div class="notititle"><a href="">See Students List</a></div>
                            <div class="notibody">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae voluptates distinctio in explicabo!</div>
                        </div>
                    </div>

                    <div className='col-md-4'>
                        <div class="notification">
                            <div class="notiglow"></div>
                            <div class="notiborderglow"></div>
                            <div class="notititle"><a href="">See Students List</a></div>
                            <div class="notibody">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae voluptates distinctio in explicabo!</div>
                        </div>
                    </div>
                </div>
            </div>

            <div id='imgstudents' className='container'>
                <div className='row'>
                    <div className='col-md-6 mx-auto'>
                        <img id='imgstudents' className='img-fluid mx-auto' src={panter2} alt="Students" />
                    </div>
                </div>
            </div>

            <div className='container mt-5'>
                <h2 className='fw-bold text-center text-white'>Blog</h2>
                <div className='row mt-5'>
                    <div className='col-md-3'>
                        <Card1 />
                    </div>

                    <div className='col-md-3'>
                        <Card1 />
                    </div>

                    <div className='col-md-3'>
                        <Card1 />
                    </div>

                    <div className='col-md-3'>
                        <Card1 />
                    </div>
                </div>
            </div>

            <div className='bg-dark mt-5 pt-5 pb-4'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <p className='fw-bold text-white'>
                                Phonenumber : 09147917122
                            </p>
                        </div>

                        <div className='col-md-3'>
                            <p className='fw-bold text-white'>
                                Email : School@gmail.com
                            </p>
                        </div>

                        <div className='col-md-6'>
                            <p className='fw-bold text-primary'>
                                Address : Lorem, ipsum dolor sit amet consectetur adipisicingfdvklvm kmdpvfldk l.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <footer className='bg-dark mt-5'>
                <div className='container'>
                    <h2 className='fw-bold text-white text-center pt-5'>School</h2>

                    <div className='row'>
                        <div className='d-flex fw-bold justify-content-center gap-5 mt-4'>
                            <Link to="/">
                                <a>
                                    Home
                                </a>
                            </Link>

                            <Link to="/about-school">
                                <a>
                                    About
                                </a>
                            </Link>

                            <a href=''>
                                Students
                            </a>

                            <a href=''>
                                Teachers
                            </a>
                        </div>

                        <div className='d-flex text-white justify-content-center gap-5 mt-4'>
                            <a href="">
                                <i class="bi bi-instagram"></i>
                            </a>

                            <a href="">
                                <i class="bi bi-whatsapp"></i>
                            </a>

                            <a href="">
                                <i class="bi bi-facebook"></i>
                            </a>
                        </div>
                    </div>

                    <p className='fw-bold text-white text-center mt-4 pb-4'>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
            </footer>
        </section>
    )
}

export default App
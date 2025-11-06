import { useState } from 'react'
import Allcards from './assets/components/Allcards'
import Navbar from './assets/components/Navbar'
import './App.css'
import panter from "./assets/img/School.png/"
import panter2 from "./assets/img/Students.png/"
import panter3 from "./assets/img/Students2.png/"
import panter4 from "./assets/img/Students3.png/"
import Button from './assets/components/button'
import Gender from './assets/components/Gender'


function App() {
    return (
        <section>
            <Navbar></Navbar>

            <div className='container'>
                <div className='row'>
                    <div id='header' className='col-md-6 text-white'>
                        <h1>School .....</h1>
                        <p className='mt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum perferendis vero, magni architecto excepturi repellendus voluptatem ex, natus dolorum beatae eum assumenda minima sunt tenetur earum quae! Distinctio nemo quidem officia illo accusamus libero facere iusto illum tempore obcaecati adipisci amet blanditiis harum magnam, ipsam nostrum perferendis? Obcaecati, autem possimus!</p>
                        <Button title="See More ..."></Button>
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

                        <Button title="See More ..."></Button>
                    </div>
                </div>
            </div>

            <div id='Seecard' className='container '>
                <div className='row g-3'>
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
                </div>
            </div>

            <div id='imgstudents' className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <img id='imgstudents' className='img-fluid mx-auto' src={panter2} alt="Students" />
                    </div>

                    <div className='col-md-4'>
                        <img id='imgstudents' className='img-fluid mx-auto' src={panter3} alt="Students" />
                    </div>

                    <div className='col-md-4'>
                        <img id='imgstudents' className='img-fluid mx-auto' src={panter4} alt="Students" />
                    </div>
                </div>
            </div>
        </section>
        // <div className='container'>
        //     <Gender gender={true}></Gender>
        //     <Gender gender={true}></Gender>
        //     <Gender gender={false}></Gender>
        //     <Gender gender={false}></Gender>
        // </div>
    )
}

export default App
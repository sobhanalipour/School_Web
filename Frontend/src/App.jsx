import { useState } from 'react'
import Allcards from './assets/components/Allcards'
import Navbar from './assets/components/Navbar'
import './App.css'
import panter from "./assets/img/School.png/"
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
import { Link } from "react-router";
import "../componentsCSS/footer.css/"


function Footer() {
    return (
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

                    <p className='fw-bold text-white text-center mt-4'>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
            </div>
        </footer>
    )
}



export default Footer
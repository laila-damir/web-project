import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import './Home.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import exemple1 from '../../assets/morocco-earthquake-red-crescent-response-p-mar0258.jpg';
import exemple2 from '../../assets/1.jpg';
import exemple3 from '../../assets/2.webp';
import back from '../../assets/back.png';
import 'primereact/resources/primereact.min.css';
import Navbar from './NavBar.jsx';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
};

const Home = () => {

    const [nav, setNav] = useState(false);
    const navigate = useNavigate();

    const openNav = () => {
        setNav(!nav);
    };

    const handleStartVolunteering = () => {
        navigate('/login');
    };

    return (
        <div className='page'>
            <Navbar openNav={openNav} nav={nav} />

            <div className="centre">
                <div className="texte">
                    <h1>Discover A World Of Volunteering Possibilities</h1>
                    <p>Connecting eager hearts with impactful opportunities to make a difference in communities worldwide.</p>
                    <div className="nav-Start-Volunteeing">
                        <button onClick={handleStartVolunteering}>Start Volunteering!</button>
                    </div>
                </div>
                <div className='nav-pic'>
                    <Slider {...settings}>
                        <div>
                            <img src={exemple1} alt="Example 1" />
                        </div>
                        <div>
                            <img src={exemple2} alt="Example 2" />
                        </div>
                        <div>
                            <img src={exemple3} alt="Example 3" />
                        </div>
                    </Slider>
                </div>
            </div>
            <div className="stat">
                <div className="stats">
                    <ul className="stats-menu">
                        <li>
                            <span className="stats-number">15k+ </span>
                            <p>Active Volunteers</p>
                        </li>
                        <hr className="my-divider" />
                        <li>
                            <span className="stats-number">35k+ Hours </span>
                            <p>Completed Volunteer Hours</p>
                        </li>
                        <hr className="my-divider" />
                        <li>
                            <span className="stats-number">60% </span>
                            <p>Successful Matches</p>
                        </li>
                        <hr className="my-divider" />
                        <li>
                            <span className="stats-number">&gt;10 k</span>
                            <p>Good Testimonials</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="p-inputgroup">
                <InputText placeholder=" Social worker " className="my-input" />
                <Button icon="pi pi-search" className="p-button-warning">
                    <span>Search</span>
                </Button>
            </div>

            <div className="new-image-section">
                <img src={back} alt="New Section" className="new-image"/>
            </div>
        </div>
    );
}

export default Home;

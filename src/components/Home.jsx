import React, { useEffect, useState } from 'react';
import github from './Images/github.png';
import linkedin from './Images/linkedin.png';
import facebook from './Images/facebook.png';
import instagram from './Images/instagram.png';
import tiktok from './Images/tiktok.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  const [hoveredButton, setHoveredButton] = useState(null); // Track the hovered button

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });

    const handleScroll = () => {
      AOS.refresh();
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <style>
        {`
          body {
            overflow-x: hidden; /* Prevent horizontal scrolling */
          }

          #home {
            width: 100%;
          }
          .hero-section {
            text-align: center;
            margin-top: 100px;
            padding: 0 20px;
          }
          .intro-text {
            font-size: 30px;
            color: #6DC7D1;
            font-weight: 600;
            margin: 0;
            padding-top: 190px;
            margin-bottom: -20px;
          }
          .name {
            font-size: 180px;
            font-weight: bolder;
            color: #6DC7D1;
            margin: 10px 0;
          }
          .underline {
            width: 80%;
            max-width: 1060px;
            height: 3px;
            background-color: #6DC7D1;
            margin: 10px auto;
            margin-top: -20px;
          }
          .role {
            font-size: 25px;
            color: #6DC7D1;
            font-weight: 500;
            margin-top: 20px;
          }
          .hero-buttons {
            margin-top: 120px;
            display: flex;
            justify-content: center;
            gap: 20px;
            flex-wrap: wrap;
          }
          .btn {
            text-decoration: none;
            padding: 10px 20px;
            font-size: 1rem;
            font-weight: 600;
            border-radius: 5px;
            transition: background-color 0.3s, color 0.3s;
          }
          .btn-primary {
            width: 140px;
            background-color: #E2F3F4;
            color: #6DC7D1;
            border: 2px solid #6DC7D1;
          }
          .btn-primary:hover {
            background-color: #6DC7D1;
            color: white;
          }
          .btn-secondary {
            width: 140px;
            background-color: #E2F3F4;
            color: #6DC7D1;
            border: 2px solid #6DC7D1;
          }
          .btn-secondary:hover {
            background-color: #6DC7D1;
            color: white;
          }
          .social-container {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            flex-wrap: wrap;
            padding: 20px 0;
            gap: 10px;
            height: 120px;
            width: 100vw;
            background-color: #F2F3F4;
            margin-top: 200px;
            margin-left: -20px;
          }
          .social-link {
            display: flex;
            align-items: center;
            text-decoration: none;
            color: black;
            font-weight: 600;
            transition: color 0.3s ease;
          }
          .social-link:hover {
            color: #00bcd4;
          }
          .social-image {
            width: 40px;
            height: 40px;
            margin-right: 10px;
          }
          .social-text {
            font-size: 20px;
            margin: 0;
          }

          @media (max-width: 1024px) {
            .name {
              font-size: 120px;
            }
            .role {
              font-size: 20px;
            }
            .hero-buttons {
              margin-top: 80px;
            }
          }

          @media (max-width: 768px) {
            .intro-text {
              font-size: 24px;
              padding-top: 150px;
            }
            .underline {
              width: 61%;
            }
            .name {
              font-size: 80px;
            }
            .role {
              font-size: 18px;
            }
            .hero-buttons {
              margin-top: 60px;
            }
            .btn {
              font-size: 0.9rem;
              padding: 8px 16px;
            }
            .btn-primary,
            .btn-secondary {
              width: 120px;
            }
            .social-container {
              gap: 40px;
              margin-top: 180px;
            }
            .social-image {
              width: 35px;
              height: 35px;
            }
            .social-text {
              font-size: 16px;
            }
          }

          @media (max-width: 425px) {
            .intro-text {
              font-size: 20px;
              padding-top: 120px;
            }
            .name {
              font-size: 80px;
            }
            .role {
              font-size: 16px;
            }
            .underline {
              width: 50%;
            }
            .btn {
              font-size: 0.8rem;
              padding: 6px 12px;
            }
            .btn-primary,
            .btn-secondary {
              width: 100px;
            }
            .social-container {
              gap: 20px;
              margin-top: 150px;
            }
            .social-image {
              width: 30px;
              height: 30px;
            }
            .social-text {
              font-size: 14px;
            }
          }

          @media (max-width: 375px) {
            .intro-text {
              font-size: 18px;
              padding-top: 100px;
            }
            .name {
              font-size: 70px;
            }
            .role {
              font-size: 14px;
            }
            .btn {
              font-size: 0.7rem;
              padding: 5px 10px;
            }
            .btn-primary,
            .btn-secondary {
              width: 90px;
            }
            .social-container {
              gap: 15px;
              margin-top: 120px;
            }
            .social-image {
              width: 25px;
              height: 25px;
            }
            .social-text {
              font-size: 12px;
            }
          }

          @media (max-width: 320px) {
            .intro-text {
              font-size: 16px;
              padding-top: 80px;
            }
            .underline {
              width: 46%;
            }
            .name {
              font-size: 60px;
            }
            .role {
              font-size: 12px;
            }
            .btn {
              font-size: 0.6rem;
              padding: 4px 8px;
            }
            .btn-primary,
            .btn-secondary {
              width: 80px;
            }
            .social-container {
            display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: row;
              height: 100px;
              gap: 10px;
              margin-top: 60px;
            }
            .social-image {
              width: 20px;
              height: 20px;
            }
            .social-text {
              font-size: 10px;
            }
          }
        `}
      </style>
      <section id="home" className="hero-section">
        <p className="intro-text" data-aos="fade-right">HELLO! I AM</p>
        <h1 className="name" data-aos="fade-left">AIMEE ROSE</h1>
        <div className="underline" data-aos="fade-right"></div>
        <p className="role" data-aos="fade-left">UI/UX DESIGNER</p>
        <div className="hero-buttons">
          <a
            href="#projects"
            className={`btn btn-primary ${
              hoveredButton === 'primary' ? 'hover' : ''
            }`}
            onMouseEnter={() => setHoveredButton('primary')}
            onMouseLeave={() => setHoveredButton(null)}
          >
            My Work
          </a>
          <a
            href="#contact"
            className={`btn btn-secondary ${
              hoveredButton === 'secondary' ? 'hover' : ''
            }`}
            onMouseEnter={() => setHoveredButton('secondary')}
            onMouseLeave={() => setHoveredButton(null)}
          >
            Contact Me
          </a>
        </div>
        <div className="social-icons">
          <div className="social-container">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <img
                src={github}
                alt="GitHub"
                className="social-image"
                data-aos="zoom-in"
                data-aos-delay="100"
              />
              <span
                className="social-text"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                GitHub
              </span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <img
                src={linkedin}
                alt="LinkedIn"
                className="social-image"
                data-aos="zoom-in"
                data-aos-delay="100"
              />
              <span
                className="social-text"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                LinkedIn
              </span>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <img
                src={facebook}
                alt="Facebook"
                className="social-image"
                data-aos="zoom-in"
                data-aos-delay="100"
              />
              <span
                className="social-text"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                Facebook
              </span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <img
                src={instagram}
                alt="Instagram"
                className="social-image"
                data-aos="zoom-in"
                data-aos-delay="100"
              />
              <span
                className="social-text"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                Instagram
              </span>
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <img
                src={tiktok}
                alt="TikTok"
                className="social-image"
                data-aos="zoom-in"
                data-aos-delay="100"
              />
              <span
                className="social-text"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                TikTok
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

import React from 'react';
import aimee from './Images/aimee.png';


const About = () => {
  return (
    <>
      <style>
        {`
          #about {
            padding: 50px 20px;
            background-color: #FDFDFD;
            color: #333;
          }
          .about-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 1200px;
            margin: 0 auto;
            flex-wrap: wrap;
          }
          .about-text {
            flex: 1;
            padding-left: 60px;
            margin-top: -60px;
            text-align: left;
          }
          .about-text h3 {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 20px;
            background-color: #6DC7D1;
            color: white;
            width: 150px;
            height: 40px;
            text-align: center;
            margin-top: 50px;
          }
          .about-text h2 {
            font-size: 2.5rem;
            color: #333;
            margin-bottom: 20px;
          }
          .about-text p {
            font-size: 1.2rem;
            line-height: 1.8;
            margin-bottom: 20px;
          }
          .about-details {
            list-style: none;
            padding: 0;
            font-size: 1rem;
          }
          .about-details li {
            margin-bottom: 10px;
            color: #6DC7D1;
            gap: 20px;
            display: flex;
            line-height: 1.5;
          }
          .about-details strong {
            color: black;
          }
          .image-container {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #6DC7D1;
            height: 760px;
            margin-bottom: 20px;
          }
          .about-me {
            margin-top: 70px;
            width: 500px;
            max-width: 100%;
            height: auto;
          }
          .interests-section {
            display: flex;
            justify-content: center;
            gap: 40px;
            margin-top: 20px;
            flex-wrap: wrap;
            margin-left: 450px;
          }
          .interest {
            display: flex;
            position: relative;
            flex-direction: row;
            align-items: center;
            text-align: center;
            margin-top: -200px;
          }
          .circle-container {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: #6DC7D1;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 10px;
          }
          .circle-image {
            width: 25px;
            height: 25px;
          }
          .interest-text {
            font-size: 1rem;
            color: black;
            font-weight: 600;
            padding-left: 10px;
            margin-top: -10px;
          }

          /* Responsive Design */
          @media (max-width: 1024px) {
            .about-me {
              height: 650px;
              margin-top: -50px;
        }
            .about-text {
              padding-left: 30px;
              margin-top: 0;
            }
            .about-text h2 {
              font-size: 2rem;
            }
            .about-text p {
              font-size: 1.1rem;
            }
            .image-container {
              height: 600px;
            }
          }

          @media (max-width: 768px) {
            .about-content {
              flex-direction: column;
              text-align: center;
            }
            .about-text {
              padding-left: 0;
              margin-top: 20px;
              text-align: center;
            }
            .about-text h3 {
              margin: 0 auto 10px;
            }
            .about-text h2 {
              font-size: 1.8rem;
            }
            .about-text p {
              font-size: 1rem;
            padding-left: 10px;
            }
            .about-details {
              display: flex;
              flex-direction: column;
              align-items: center;
            }
            .image-container {
              height: 500px;
            }
            .interests-section {
              gap: 20px;
            }
          }

          @media (max-width: 425px) {
            .about-text h2 {
              font-size: 1.5rem;
            }
            .about-text p {
              font-size: 0.9rem;
            }
            .about-details li {
              font-size: 0.9rem;
            }
            .image-container {
              height: 400px;
            }
            .circle-container {
              width: 40px;
              height: 40px;
            }
            .circle-image {
              width: 20px;
              height: 20px;
            }
            .interest-text {
              font-size: 0.9rem;
            }
          }

          @media (max-width: 375px) {
            .about-text h2 {
              font-size: 1.3rem;
            }
            .about-text p {
              font-size: 0.8rem;
            }
            .about-details li {
              font-size: 0.8rem;
            }
            .image-container {
              height: 350px;
            }
            .circle-container {
              width: 35px;
              height: 35px;
            }
            .circle-image {
              width: 18px;
              height: 18px;
            }
            .interest-text {
              font-size: 0.8rem;
            }
          }

          @media (max-width: 320px) {
            .about-text h2 {
              font-size: 1.2rem;
            }
            .about-text p {
              font-size: 0.7rem;
            }
            .about-details li {
              font-size: 0.7rem;
            }
            .image-container {
              height: 300px;
            }
            .circle-container {
              width: 30px;
              height: 30px;
            }
            .circle-image {
              width: 15px;
              height: 15px;
            }
            .interest-text {
              font-size: 0.7rem;
            }
          }
        `}
      </style>
      <section id="about">
        <div className="about-content">
          <div className="image-container">
            <img src={aimee} alt="Aimee Rose" className="about-me" data-aos="fade-left" />
          </div>
          <div className="about-text" data-aos="fade-right">
            <h3>MY INTRO</h3>
            <h2>About Me</h2>
            <p>
              Passionate Information Technology student aspiring to become a UI/UX designer. 
              I love creating intuitive and visually appealing digital experiences that enhance 
              user interaction. Always eager to learn, experiment, and bring ideas to life through 
              design and technology.
            </p>
            <ul className="about-details">
              <li><strong>Name:</strong> Aimee Rose Ballatan</li>
              <li><strong>Date of Birth:</strong> July 22, 2003</li>
              <li><strong>Address:</strong> Merchan St. Barangay 11, Lucena City</li>
              <li><strong>Zip Code:</strong> 4301</li>
              <li><strong>Email:</strong> aimeeballatan22@gmail.com</li>
              <li><strong>Phone:</strong> +639 993 950 9044</li>
            </ul>
          </div>
        </div>

      </section>
    </>
  );
};

export default About;
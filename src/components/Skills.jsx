import React from 'react';
import html from './Images/html.png';
import css from './Images/css.png';
import python from './Images/python.png';
import react from './Images/react.png';
import figma from './Images/figma.png';
import js from './Images/js.png';

const Skills = () => {
  return (
    <>
      <style>
        {`
          #skills {
            margin-top: -20px;
            background-color: #F2F3F4;
            padding: 80px 20px;
            text-align: center;
            padding-bottom: 150px;
          }
          .section-heading {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 20px;
            background-color: #6DC7D1;
            color: white;
            width: 150px;
            height: 40px;
            text-align: center;
            margin: 70px auto 10px auto;
          }
          .section-subheading {
            font-size: 36px;
            color: #6DC7D1;
            margin-bottom: 20px;
          }
          .section-description {
            font-size: 18px;
            color: #666;
            line-height: 1.8;
            margin-bottom: 40px;
            white-space: pre-line;
          }
          .skills-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            justify-content: center;
            align-items: center;
            margin: 0 auto;
            max-width: 900px;
          }
          .skill {
            background-color: white;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            padding: 30px;
            width: 200px;
            height: 200px;
            text-align: center;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .skill:hover {
            transform: translateY(-10px);
            box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
          }
          .skill-title {
            font-size: 1.5rem;
            color: black;
            padding-top: 10px;
          }
          .skill-description {
            font-size: 1rem;
            color: #666;
          }
          .skill-image {
            width: 100px;
            height: 100px;
            margin-top: 30px;
            object-fit: contain;
          }

          @media (max-width: 1024px) {
            .skills-container {
              grid-template-columns: repeat(3, 1fr);
              gap: 15px;
              margin-left: 70px;
            }
            .skill {
              width: 180px;
              height: 180px;
            }
            .skill-title {
              font-size: 1.3rem;
            }
            .skill-image {
              width: 90px;
              height: 90px;
            }
          }

          @media (max-width: 768px) {
            .skills-container {
              grid-template-columns: repeat(2, 1fr);
              gap: 15px;
              margin-left: 90px;
            }
              .section-description {
                font-size: 16px;
                margin-left: 10px;
                margin: 0 auto;
                line-height: 1.8;
                padding: 20px 0px 50px 0px;

              }
            .skill {
              width: 160px;
              height: 160px;
            }
            .skill-title {
              font-size: 1.2rem;
            }
            .skill-image {
              width: 80px;
              height: 80px;
            }
          }

          @media (max-width: 425px) {
            .skills-container {
              grid-template-columns: 1fr;
              gap: 10px;
            }
            .skill {
              width: 140px;
              height: 140px;
            }
            .skill-title {
              font-size: 1rem;
            }
            .skill-image {
              width: 70px;
              height: 70px;
            }
          }

          @media (max-width: 375px) {
            .skills-container {
              grid-template-columns: 1fr;
              gap: 10px;
            }
            .skill {
              width: 130px;
              height: 130px;
            }
            .skill-title {
              font-size: 0.9rem;
            }
            .skill-image {
              width: 60px;
              height: 60px;
            }
          }

          @media (max-width: 320px) {
            .skills-container {
              grid-template-columns: 1fr;
              gap: 8px;
              margin-right: 80px;
            }
            .skill {
              width: 120px;
              height: 120px;
            }
            .skill-title {
              font-size: 0.8rem;
            }
            .skill-image {
              width: 50px;
              height: 50px;
            }
          }
        `}
      </style>
      <section id="skills">
        <h1 className="section-heading" data-aos="fade-down" data-aos-duration="1000">
          SKILLS
        </h1>
        <h2 className="section-subheading" data-aos="fade-down" data-aos-duration="1000">
          What can I do
        </h2>
        <p className="section-description" data-aos="fade-up" data-aos-duration="1000">
          I am from the Philippines and currently an Information Technology student, developing my skills in 
          design and development <br></br> with a passion for creating seamless UI/UX experiences.
        </p>
        <div className="skills-container">
          <div className="skill" data-aos="zoom-in">
            <img src={html} alt="HTML" className="skill-image" />
            <h3 className="skill-title">HTML</h3>
          </div>
          <div className="skill" data-aos="zoom-in">
            <img src={css} alt="CSS" className="skill-image" />
            <h3 className="skill-title">CSS</h3>
          </div>
          <div className="skill" data-aos="zoom-in">
            <img src={python} alt="Python" className="skill-image" />
            <h3 className="skill-title">Python</h3>
          </div>
          <div className="skill" data-aos="zoom-in">
            <img src={react} alt="React" className="skill-image" />
            <h3 className="skill-title">React</h3>
          </div>
          <div className="skill" data-aos="zoom-in">
            <img src={figma} alt="Figma" className="skill-image" />
            <h3 className="skill-title">Figma</h3>
          </div>
          <div className="skill" data-aos="zoom-in">
            <img src={js} alt="JavaScript" className="skill-image" />
            <h3 className="skill-title">JavaScript</h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
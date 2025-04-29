import React from 'react';
import webPage from './Images/web-page.png';
import enrollment from './Images/enrollment.png';
import tala from './Images/tala.png';

const Projects = () => {
  return (
    <>
      <style>
        {`
          #projects {
            padding: 20px;
            font-family: 'Raleway', sans-serif;
            text-align: center;
            background-color: #f9f9f9;
            margin-top: -70px;
            width: 100%;
            padding-bottom: 200px;
          }
          .title {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 20px;
            font-weight: bold;
            color: white;
            background-color: #6DC7D1;
            margin-bottom: 20px;
            text-align: center;
            width: 15%;
            height: 40px;
            margin-left: auto;
            margin-right: auto;
            margin-top: 120px;
          }
          .subtitle {
            font-size: 34px;
            font-weight: bold;
            margin-bottom: 10px;
            color: #6DC7D1;
            text-align: center;
          }
          .description {
            font-size: 18px;
            color: #666;
            margin-bottom: 30px;
            text-align: center;
            line-height: 1.6;
          }
          .project-container {
            display: flex;
            gap: 20px;
            justify-content: center;
            flex-wrap: wrap;
            margin-top: 90px;
          }
          .card {
            width: 300px;
            height: 350px;
            margin: 10px;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            text-align: center;
            padding: 20px;
            background-color: white;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .card:hover {
            transform: translateY(-10px);
            box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
          }
          .card-image {
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-radius: 8px;
          }
          .card-title {
            font-size: 18px;
            font-weight: bold;
            margin-top: 15px;
            color: #333;
            text-align: center;
          }
          .card-p {
            font-size: 16px;
            color: #666;
            margin-top: 10px;
            text-align: center;
          }

          /* Responsive Design */
          @media (max-width: 1024px) {
            .project-container {
              display: flex;
              flex-direction: row;
              justify-content: center;
              flex-wrap: wrap;
              gap: 15px;
            }
            .card {
              width: 280px;
              height: 320px;
            }
            .card-title {
              font-size: 16px;
            }
            .card-p {
              font-size: 14px;
            }
            .title {
              width: 30%;
              font-size: 22px;
            }
          }

          @media (max-width: 768px) {
            .subtitle {
              font-size: 30px;
            }
            .description {
              font-size: 15px;
            }
            .project-container {
              gap: 10px;
            }
            .card {
              width: 240px;
              height: 300px;
            }
            .card-title {
              font-size: 15px;
              padding-top: 5px;
            }
            .card-p {
              font-size: 13px;
            }
          }

          @media (max-width: 425px) {
            .title {
              width: 50%;
              font-size: 18px;
            }
            .subtitle {
              font-size: 24px;
            }
            .description {
              font-size: 14px;
            }
            .card {
              width: 270px;
              height: 270px;
            }
            .card-title {
              font-size: 14px;
              margin-top: 10px;
            }
            .card-p {
              font-size: 12px;
            }
          }

          @media (max-width: 375px) {
            .title {
              width: 60%;
              font-size: 16px;
            }
            .subtitle {
              font-size: 22px;
            }
            .description {
              font-size: 13px;
            }
            .card {
              width: 240px;
              height: 240px;
            }
            .card-title {
              font-size: 13px;
            }
            .card-p {
              font-size: 11px;
            }
            .card-image {
              height: 170px;
            }
          }

          @media (max-width: 320px) {
            .title {
              width: 70%;
              font-size: 14px;
            }
            .subtitle {
              font-size: 20px;
            }
            .description {
              font-size: 12px;
            }
            .card {
              width: 180px;
              height: 220px;
            }
            .card-title {
              font-size: 12px;
            }
            .card-p {
              font-size: 10px;
            }
            .card-image {
              height: 150px;
            }
          }
        `}
      </style>
      <div id="projects">
        <h1 className="title" data-aos="fade-down" data-aos-duration="1000">ACCOMPLISHMENTS</h1>
        <h2 className="subtitle" data-aos="fade-down" data-aos-duration="1000">My Projects</h2>
        <p className="description" data-aos="fade-up" data-aos-duration="1000">
          Projects I've built and designed — websites, user interfaces, and more. Focused on clean design and <br /> good user experience.
        </p>
        <div className="project-container" data-aos="zoom-in" data-aos-duration="1000">
          <div className="card">
            <img src={webPage} alt="Web Page" className="card-image" />
            <h3 className="card-title">Web Page</h3>
            <p className="card-p">A responsive web page designed with modern UI/UX principles.</p>
          </div>
          <div className="card">
            <img src={enrollment} alt="Enrollment System" className="card-image" />
            <h3 className="card-title">Enrollment System</h3>
            <p className="card-p">A system to manage student enrollment efficiently and effectively.</p>
          </div>
          <div className="card">
            <img src={tala} alt="Tala Project" className="card-image" />
            <h3 className="card-title">Tala Study App</h3>
            <p className="card-p">An educational app designed to help students with their studies.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
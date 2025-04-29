import React from 'react';
import web from './Images/web.png';
import programming from './Images/programming.png';
import graphics from './Images/graphics.png';

const Services = () => {
  return (
    <>
      <style>
        {`
          #services {
            background-color: #FDFDFD;
            padding: 70px 20px;
            text-align: center;
          }
          .section-heading {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 20px;
            background-color: #6DC7D1;
            color: white;
            width: 180px;
            height: 40px;
            text-align: center;
            margin: 50px auto 10px auto;
          }
          .section-subheading {
            font-size: 35px;
            color: #6DC7D1;
            margin-bottom: 20px;
          }
          .section-description {
            font-size: 18px;
            color: #666;
            line-height: 1.8;
            margin-bottom: 90px;
            white-space: pre-line;
          }
          .cards-container {
            display: flex;
              gap: 70px;

            justify-content: center;
          }
          .card-box {
            background-color: white;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            padding: 20px;
            width: 300px;
            height: 200px;
            text-align: center;
            transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
          }
          .card-box:hover {
            transform: translateY(-10px);
            box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
            background-color: #6DC7D1;
            color: white;
          }
          .card-box:hover .round-container {
            background-color: white;
            transform: translateY(-10px);
            transition: transform 0.3s ease, background-color 0.3s ease;
          }
          .round-container {
            width: 80px;
            height: 80px;
            background-color: #6DC7D1;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: -60px auto 20px auto;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, background-color 0.3s ease;
          }
          .round-image {
            width: 50%;
            height: 50%;
            object-fit: contain;
          }
          .card-title {
            font-size: 18px;
            color: #333;
            margin-bottom: 10px;
            padding-top: 30px;
          }
          .card-description {
            font-size: 14px;
            color: #666;
            line-height: 1.6;
          }
          .idea-container {
            background-color: #6DC7D1;
            color: white;
            text-align: center;
            height: 300px;
            margin-top: 150px;
            width: 100vw;
            margin-left: -20px;
          }
          .idea-heading {
            font-size: 35px;
            margin-bottom: 20px;
            color: white;
            padding-top: 30px;
          }
          .idea-description {
            font-size: 18px;
            line-height: 1.8;
            margin-bottom: 30px;
            color: white;
          }
          .btn-contact {
            display: inline-block;
            background-color: white;
            color: #6DC7D1;
            padding: 10px 20px;
            font-size: 16px;
            font-weight: bold;
            text-decoration: none;
            border-radius: 5px;
            transition: background-color 0.3s ease, color 0.3s ease;
          }
          .btn-contact:hover {
            border: 2px solid white;
            background-color: #6DC7D1;
            color: white;
            transition: background-color 0.3s ease, color 0.3s ease;
          }

          @media (max-width: 1024px) {
            .cards-container {
              gap: 30px;
            }
            .card-box {
              width: 240px;
              height: 200px;
            }
            .card-title {
              font-size: 16px;
            }
            .card-description {
              font-size: 13px;
            }
          }

          @media (max-width: 768px) {
            .cards-container {
              flex-direction: column;
              align-items: center;
              gap: 80px;
            }
            .card {
              width: 240px;
              height: 240px;
            }
            .card-title {
              font-size: 15px;
            }
            .card-description {
              font-size: 15px;
            }
          }

          @media (max-width: 425px) {
            .section-subheading {
              font-size: 28px;
            }
            .section-description {
              font-size: 16px;
            }
            .card-box {
              width: 270px;
              height: 250px;
            }
            .card-title {
              font-size: 14px;
            }
            .card-description {
              font-size: 15px;
            }
            .idea-heading {
              font-size: 30px;
            }
            .idea-description {
              font-size: 14px;
            }
            .btn-contact {
              font-size: 14px;
            }
          }

          @media (max-width: 375px) {
            .section-subheading {
              font-size: 25px;
            }
            .section-description {
              font-size: 14px;
            }
            .card-box {
              width: 220px;
              height: 220px;
            }
            .card-title {
              font-size: 13px;
            }
            .card-description {
              font-size: 14px;
            }
            .idea-heading {
              font-size: 28px;
            }
            .idea-description {
              font-size: 12px;
            }
            .btn-contact {
              font-size: 13px;
            }
            .idea-container {
              height: 270px;
          }

          @media (max-width: 320px) {
            .section-subheading {
              font-size: 22px;
            }
            .section-description {
              font-size: 12px;
            }
            .card-box {
              width: 180px;
              height: 180px;
            }
            .card-title {
              font-size: 12px;
            }
            .card-description {
              font-size: 10px;
            }
          }
        `}
      </style>
      <section id="services">
        <h1 className="section-heading" data-aos="fade-down" data-aos-duration="1000">I AM GREAT AT</h1>
        <h2 className="section-subheading" data-aos="fade-down" data-aos-duration="1000">My Services</h2>
        <p className="section-description" data-aos="fade-up" data-aos-duration="1000">
          Offering UI/UX design, prototyping, and front-end development to create seamless and user-friendly digital <br />experiences.
        </p>
        <div className="cards-container">
          <div className="card-box" data-aos="zoom-in">
            <div className="round-container">
              <img src={web} alt="Design" className="round-image" />
            </div>
            <h3 className="card-title">Web Design</h3>
            <p className="card-description">Crafting visually appealing and user-friendly website interfaces to enhance user experience.</p>
          </div>
          <div className="card-box" data-aos="zoom-in" data-aos-delay="100">
            <div className="round-container">
              <img src={programming} alt="Prototyping" className="round-image" />
            </div>
            <h3 className="card-title">Web Development</h3>
            <p className="card-description">Building responsive and functional websites with clean code for seamless performance.</p>
          </div>
          <div className="card-box" data-aos="zoom-in" data-aos-delay="200">
            <div className="round-container">
              <img src={graphics} alt="Development" className="round-image" />
            </div>
            <h3 className="card-title">Graphic Design</h3>
            <p className="card-description">Creating eye-catching visuals for digital and print media to communicate ideas effectively.</p>
          </div>
        </div>
        <div className="idea-container">
          <h2 className="idea-heading" data-aos="fade-down" data-aos-duration="1000">Got an idea in mind?</h2>
          <p className="idea-description" data-aos="fade-up" data-aos-duration="1000">
            I’d love to bring your ideas to life! Feel free to reach out for <br />web design, development, or graphic design services, 
            and let's create something <br />amazing together.
          </p>
          <a href="#contact" className="btn-contact">Contact Me</a>
        </div>
      </section>
    </>
  );
};

export default Services;
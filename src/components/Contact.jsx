import React from 'react';

const Contact = () => {
  return (
    <>
      <style>
        {`
          #contact {
            padding: 20px;
            font-family: 'Raleway', sans-serif;
            text-align: center;
            background-color: white;
            margin-top: -70px;
            width: 100%;
            height: 100vh;
          }
          .contact-title {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 20px;
            font-weight: bold;
            color: white;
            background-color: #6DC7D1;
            text-align: center;
            width: 7%;
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
          }
          .form-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
            margin-top: 50px;
            background-color: #f9f9f9;
            width: 50%;
            height: 480px;
            padding: 20px;
            border-radius: 10px;
            margin-left: auto;
            margin-right: auto;
          }
          .row {
            display: flex;
            justify-content: space-between;
            width: 92%;
            gap: 20px;
            margin-top: 55px;
          }
          .input {
            width: 90%;
            padding: 10px;
            border-radius: 5px;
            border: 1px solid #ccc;
            font-size: 16px;
          }
          .textarea {
            width: 90%;
            height: 150px;
            padding: 10px;
            border-radius: 5px;
            border: 1px solid #ccc;
            font-size: 16px;
          }
          .button {
            width: 200px;
            padding: 10px;
            border-radius: 5px;
            border: none;
            background-color: #6DC7D1;
            color: white;
            font-size: 16px;
            margin-top: 20px;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }
          .button:hover {
            background-color: #5bb3c0;
          }
          .footer {
            margin-top: 150px;
            margin-left: -20px;
            text-align: center;
          }
          .copy {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #1e252d;
            height: 70px;
            width: 100%;
            font-family: 'Raleway', sans-serif;
            text-align: center;
            color: #ccc;
            font-size: 15px;
          }

          @media (max-width: 1024px) {
            .contact-title {
              width: 20%;
            }
          }

            @media (max-width: 425px) {
              .input {
                width: 90%;
                font-size: 14px;
              }

              .button {
                width: 80%;
              }

            }

            @media (max-width: 375px) {
              .input {
                width: 90%;
                font-size: 13px;
              }

              .button {
                width: 80%;
              }

        }
        `}
      </style>
      <div id="contact">
        <h1 className="contact-title" data-aos="fade-down" data-aos-duration="1000">CONTACT</h1>
        <h2 className="subtitle" data-aos="fade-down" data-aos-duration="1000">Get in Touch</h2>
        <p className="description" data-aos="fade-up" data-aos-duration="1000">
          Feel free to reach out to me for collaborations, project inquiries, or just to say hello!
        </p>
        <div className="form-container">
          <div className="row">
            <input
              type="text"
              placeholder="Name"
              className="input"
              data-aos="fade-up"
              data-aos-duration="1000"
            />
            <input
              type="email"
              placeholder="Email"
              className="input"
              data-aos="fade-up"
              data-aos-duration="1000"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="input"
            data-aos="fade-up"
            data-aos-duration="1000"
          />
          <textarea
            placeholder="Your Message"
            className="textarea"
            data-aos="fade-up"
            data-aos-duration="1000"
          ></textarea>
          <button
            className="button"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Send Message
          </button>
        </div>
        <footer className="footer">
          <div className="copy">
            <p>
              Copyright ©2025 All rights reserved | Aimee Rose.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Contact;
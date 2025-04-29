import React, { useState } from 'react';

const Navbar = () => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const handleNavClick = (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <style>
        {`
          .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 26px;
            background-color: #FDFDFD;
            color: black;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            position: fixed;
            top: 0;
            width: 100%;
            height: 35px;
            z-index: 1000;
          }
          .logo {
            font-size: 24px;
            font-weight: bold;
            color: #6DC7D1;
            margin-left: 20px;
          }
          .logo span {
            color: #333;
          }
          .nav-links {
            display: flex;
            list-style: none;
            gap: 20px;
            margin-right: 100px;
          }
          .nav-link-item {
            font-size: 16px;
            font-weight: 500;
            padding: 10px 15px;
            position: relative;
          }
          .nav-link {
            text-decoration: none;
            color: black;
            transition: color 0.3s ease;
          }
          .nav-link:hover {
            color: #6DC7D1;
          }
          .nav-link-underline {
            content: "";
            position: relative;
            top: 5%;
            bottom: 0;
            left: 0;
            width: 0;
            height: 2px;
            background-color: #6DC7D1;
            transition: width 0.3s ease;
          }
          .nav-link-underline-hover {
            width: 100%;
          }
          .hamburger {
            display: none;
            flex-direction: column;
            justify-content: space-between;
            width: 25px;
            height: 20px;
            cursor: pointer;
            margin-right: 20px;
          }
          .hamburger div {
            width: 100%;
            height: 3px;
            background-color: black;
            transition: all 0.3s ease;
          }
          .mobile-menu {
            display: none;
            flex-direction: column;
            align-items: center;
            font-size: 18px;
            font-weight: 500;
            padding: 20px;
            list-style: none;
            margin: 0;
            gap: 10px;
            text-align: center;
            position: absolute;
            top: 70px;
            right: 0;
            background-color: #FDFDFD;
            width: 100%;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            z-index: 999;
          }
          .mobile-menu a {
            text-decoration: none;
            color: black;
            transition: color 0.3s ease;
          }
          .mobile-menu a:hover {
            color: #6DC7D1;
          }
          .mobile-menu.open {
            display: flex;
          }
          .mobile-menu .nav-link-item {
            margin: 10px 0;
          }

          @media (max-width: 1024px) {
            .nav-links {
              gap: 15px;
            }
          }

          @media (max-width: 768px) {
            .nav-links {
              display: none;
            }
            .hamburger {
              display: flex;
              margin-right: 100px;
            }
          }

          @media (max-width: 425px) {
            .logo {
              font-size: 20px;
            }
            .hamburger {
              display: flex;
              margin-rigt: 20px;
            }
            .hamburger div {
              height: 2px;
            }
          }

          @media (max-width: 375px) {
            .logo {
              font-size: 18px;
            }
          }

          @media (max-width: 320px) {
            .logo {
              font-size: 16px;
            }
          }
        `}
      </style>
      <header>
        <nav className="navbar">
          <div className="logo">
            AIMEE <span>ROSE</span>
          </div>
          <ul className="nav-links">
            {['HOME', 'ABOUT', 'SKILLS', 'SERVICES', 'PROJECTS', 'CONTACT'].map((link) => (
              <li
                className="nav-link-item"
                key={link}
                onMouseEnter={() => setHoveredLink(link)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <a
                  href={`#${link.toLowerCase()}`}
                  className="nav-link"
                  onClick={handleNavClick}
                >
                  {link}
                </a>
                <div
                  className={
                    hoveredLink === link
                      ? 'nav-link-underline nav-link-underline-hover'
                      : 'nav-link-underline'
                  }
                ></div>
              </li>
            ))}
          </ul>
          <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
            {['HOME', 'ABOUT', 'SKILLS', 'SERVICES', 'PROJECTS', 'CONTACT'].map((link) => (
              <a
                href={`#${link.toLowerCase()}`}
                className="nav-link"
                key={link}
                onClick={handleNavClick}
              >
                {link}
              </a>
            ))}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
import React from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import useScrollPosition from './useScrollPosition';
import { BrowserRouter as Router, Route, Link, Routes, Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import './App.css';
import Blog from './Blog';
import InteractiveProjects from './InteractiveProjects';

export default function App() {
  const content = [
    { image: 'gl1.png', text: 'Image 1 description' },
    { image: 'gl2.png', text: 'Image 2 description' },
    { image: 'gl3.png', text: 'Image 3 description' },
    { image: 'gl4.png', text: 'Image 4 description' },
  ];

  const scrollPosition = useScrollPosition();

  return (
    <Router>
      <ParallaxProvider>
        <header className="navbar">
          <nav>
            <ul className="nav-links">
              <li>
                <Link to="/InteractiveProjects">Interactive Projects</Link>
              </li>
              <li>
                <Link to="/code-editor">Code Editor</Link>
              </li>
              <li>
                <Link to="/Blog">Blog</Link>
              </li>
              <li>
                <Link to="/chatbot">Chatbot</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home content={content} scrollPosition={scrollPosition} />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/InteractiveProjects" element={<InteractiveProjects />} />
          {/* Add routes for other pages */}
        </Routes>
      </ParallaxProvider>
    </Router>
  );
}

function Home({ content, scrollPosition }) {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const scaleIn = {
    hidden: { scale: 0.95 },
    visible: { scale: 1 },
  };

  return (
    <>
      <Parallax y={[20, -20]}>
        <div
          className="main"
          style={{
            backgroundSize: `auto ${100 + scrollPosition / 10}%`,
          }}
        >
          <h1 className="overlay-text">Welcome to my Portfolio Website</h1>
        </div>
      </Parallax>
      <div className="section">
        {content.map((item, index) => (
          <div className="row" key={index}>
            {index % 2 === 0 ? (
              <>
                <div className="column">
                  <motion.img
                    src={item.image}
                    alt={item.text}
                    initial="hidden"
                    animate="visible"
                    variants={scaleIn}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <div className="column">
                  <motion.div
                    className="card"
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    transition={{ duration: 0.5 }}
                  >
                    <p className="column-text">{item.text}</p>
                  </motion.div>
                </div>
              </>
            ) : (
              <>
                <div className="column">
                  <motion.div
                    className="card"
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    transition={{ duration: 0.5 }}
                  >
                    <p className="column-text">{item.text}</p>
                  </motion.div>
                </div>
                <div className="column">
                  <motion.img
                    src={item.image}
                    alt={item.text}
                    initial="hidden"
                    animate="visible"
                    variants={scaleIn}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      <Footer />
      <Outlet />
    </>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-item">
        <h2>My Tech Startup</h2>
        <p>1234 Address St, City, Country</p>
        <p>Email: contact@mytechstartup.com</p>
        <p>Phone: +1234567890</p>
      </div>
      <div className="footer-item">
        <h3>Follow us on</h3>
        <p>Twitter: @mytechstartup</p>
        <p>LinkedIn: My Tech Startup</p>
        <p>Instagram: @mytechstartup</p>
      </div>
      <div className="footer-item">
        <h3>Quick Links</h3>
        <ul>
          <li>
            <Link to="/InteractiveProjects">Interactive Projects</Link>
          </li>
          <li>
            <Link to="/code-editor">Code Editor</Link>
          </li>
          <li>
            <Link to="/Blog">Blog</Link>
          </li>
          <li>
            <Link to="/chatbot">Chatbot</Link>
          </li>
        </ul>
      </div>
      <div className="footer-item">
        <p>&copy; {new Date().getFullYear()} My Tech Startup. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
import React from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import useScrollPosition from './useScrollPosition';
import { BrowserRouter as Router, Route, Link, Routes, Outlet } from 'react-router-dom';
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
          <Route path="/InteractiveProjects" element={<InteractiveProjects/>} />
          {/* Add routes for other pages */}
        </Routes>
      </ParallaxProvider>
    </Router>
  );
}

function Home({ content, scrollPosition }) {
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
                  <img src={item.image} alt={item.text} />
                </div>
                <div className="column">
                  <p className="column-text">{item.text}</p>
                </div>
              </>
            ) : (
              <>
                <div className="column">
                  <p className="column-text">{item.text}</p>
                </div>
                <div className="column">
                  <img src={item.image} alt={item.text} />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      <Outlet />
    </>
  );
}
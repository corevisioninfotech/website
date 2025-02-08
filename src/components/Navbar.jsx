import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PopupWidget } from 'react-calendly';
import '../styles/navbar.css';
import Logo from '../assets/logo6.png';

const Navbar = () => {
  const [showShadow, setShowShadow] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const lastScrollY = useState(window.scrollY);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  // Handle scroll for shadow
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowShadow(currentScrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeout) clearTimeout(hoverTimeout);
    };
  }, [hoverTimeout]);

  return (
    <>
      <nav className={`navbar ${showShadow ? 'shadow' : ''}`}>
        <div className="logo"><img src={Logo} alt="Logo" /></div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          
          {/* Services Dropdown with Hover Handling */}
          <li 
            className="dropdown"
            onMouseEnter={() => {
              if (hoverTimeout) clearTimeout(hoverTimeout);
              setDropdownOpen(true);
            }}
            onMouseLeave={() => {
              const timeout = setTimeout(() => setDropdownOpen(false), 100);
              setHoverTimeout(timeout);
            }}
          >
            <button className="dropdown-btn">Services</button>
            {dropdownOpen && (
              <ul 
                className="dropdown-menu"
                onMouseEnter={() => {
                  if (hoverTimeout) clearTimeout(hoverTimeout);
                }}
                onMouseLeave={() => {
                  const timeout = setTimeout(() => setDropdownOpen(false), 300);
                  setHoverTimeout(timeout);
                }}
              >
                <li><Link to="/services/web-development">Website Development</Link></li>
                <li><Link to="/services/web-design">Website Design</Link></li>
                <li><Link to="/services/e-commerce">E-Commerce Solutions</Link></li>
                <li><Link to="/services/wordpress">WordPress Solutions</Link></li>
                <li><Link to="/services/woo-commerce">Woo-Commerce Support</Link></li>
                <li><Link to="/services/mobile-apps">Mobile Application Developement</Link></li>
                <li><Link to="/services/ui-ux">UI/UX Designing</Link></li>
                <li><Link to="/services/customer-support">Customer Support</Link></li>
              </ul>
            )}
          </li>
          
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/blog">Blogs</Link></li>
        </ul>
        <Link className='nav-btn' to="/contactus">Contact Us</Link>
      </nav>

      <button>
        <PopupWidget
          url="https://calendly.com/vrajchovatiya11/30min"
          rootElement={document.getElementById('root')}
          text="Schedule a Meeting"
        />
      </button>
    </>
  );
};

export default Navbar;
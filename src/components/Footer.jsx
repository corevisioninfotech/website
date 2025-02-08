import React from 'react';
import '../styles/footer.css';

const Footer = () => {
    return (
        <>
            {/* Footer Section */}
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-about">
                        <h2 className="footer-logo">CoreVision Infotech</h2>
                        <p>CoreVision Infotech is one of the best web design and development companies in Surat. We build websites with the latest technology and framework.</p>
                        <div className="social-icons">
                            <a href="#" className="social-icon">🌐</a>
                            <a href="#" className="social-icon">📸</a>
                            <a href="#" className="social-icon">💼</a>
                            <a href="#" className="social-icon">✖️</a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <div>
                            <h3>Company</h3>
                            <ul>
                                <li>About Us</li>
                                <li>Meet Our Team</li>
                                <li>Life at Scriptus</li>
                                <li>Career</li>
                                <li>Testimonials</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Our Success Stories</h3>
                            <ul>
                                <li>E-Commerce</li>
                                <li>Financial</li>
                                <li>Real Estate</li>
                                <li>Food</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Resources</h3>
                            <ul>
                                <li>Newsletter</li>
                                <li>Events</li>
                                <li>Help Centre</li>
                                <li>Tutorials</li>
                                <li>Support</li>
                            </ul>
                        </div>
                    </div>

                    {/* <div className="footer-contact">
                        <h3>Visit Us</h3>
                        <p>B-316, IT Park, opp. Shell petrol pump, beside Dosa Charcoal, Digital Valley (Mota Varachha), Surat, Gujarat</p>
                        <p><strong>Looking for collaboration?</strong><br />contact@scriptussolutions.com</p>
                        <p><strong>Monday-Friday: 9:30am-7:00pm</strong><br />+91 8320 829 476</p>
                    </div> */}
                </div>
                <div className="footer-bottom">
                    <p>© 2025 CoreVision Infotech. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
};

export default Footer;
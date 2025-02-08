import React, { useEffect, useRef } from 'react';
import '../../styles/homePage.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, ShoppingCart, Store, Mouse, Cpu } from 'lucide-react';
import { useSpring, animated } from '@react-spring/web';
import Node from '../../assets/node.png';
import Reactjs from '../../assets/react.png';
import Shopify from '../../assets/shopify.png';
import Sql from '../../assets/sql.png';
import Wordpress from '../../assets/wordpress.png';
import Html from '../../assets/html.png';
import Css from '../../assets/css.png';
import Js from '../../assets/js.png';
import View from '../../assets/view.png';
import AnimatedCanvas from '../../components/animation/AnimatedCanvas';
import SVG from "../../assets/timeline.svg";

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
    const contentRef = useRef(null);
    const services = [
        { title: 'Development', description: 'Our development is pixel perfect in all ways.', icon: <Code size={55} /> },
        { title: 'Woo Commerce', description: 'We have a best team for your shopping websites.', icon: <ShoppingCart size={55} /> },
        { title: 'Shopify Store', description: 'We enhance customer experiences for success.', icon: <Store size={55} /> },
        { title: 'Web Design', description: 'We create vibrant, intuitive, and minimalist web.', icon: <Mouse size={55} /> },
        { title: 'IT Support', description: 'We offer expert assistance for your IT issues.', icon: <Cpu size={55} />, badge: 'free' },
    ];

    const techIcons = [
        Html, Css, Js, Reactjs, Node, View, Shopify, Sql, Wordpress
    ];

    const stats = [
        { count: '6+', label: 'Professionals' },
        { count: '25+', label: 'Countries Served' },
        { count: '60+', label: 'Projects Completed' },
        { count: '3+', label: 'Years of Experience' },
    ];

    const testimonials = [
        {
            name: 'mosidze111',
            country: 'From United Kingdom',
            feedback: 'We now have one of the best websites in the business, at a fraction of a price. Thanks to this kind gentleman. Highly recommended.',
            avatar: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/5e61418f50a3923916228279a5984da7-1677322739274/5cd9a938-c316-4931-9414-303ef01d0828.png',
        },
        {
            name: 'skybridge_group',
            country: 'From United States',
            feedback: 'Was able to complete the job accurately and quickly. I highly recommend.',
            avatar: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/dc484b6b66451dcc51f316f3b1351b95-377774491643554244.137175/9F21F7C8-41B3-43EE-9288-F7581053CD2A',
        },
        {
            name: 'sangina981',
            country: 'From United States',
            feedback: 'Umang listen every concern and deliver a fabulous end work! I will recommend him over and over again!',
            avatar: 'https://images.pexels.com/photos/6084178/pexels-photo-6084178.jpeg?auto=compress&cs=tinysrgb&w=600',
        },

    ];

    const springs = useSpring({
        from: { x: 50 },
        to: { x: 50 },
        config: { duration: 1000 },
        reverse: false,
        loop: false,
    });

    useEffect(() => {
        gsap.from(contentRef.current, {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: 'power2.out',
        });
    }, []);

    return (
        <>
            <div className="homepage-container">
                <div className="content" ref={contentRef}>
                    <p className="subheading">ACCELERATED GROWTH</p>
                    <h1 className="headline">
                        Empowering business with <br /> modern rules and insights
                    </h1>
                    {/* <img src={SVG} alt="" /> */}
                    <p className="description">
                        Welcome to slack business consulting and solutions, <br />
                        where success is not just a destination.
                    </p>
                    <button className="cta-button">Let's talk to our team →</button>
                </div>
                {/* Animated Background */}
                <div className="animated-box">
                    {/* <AnimatedCanvas /> */}
                </div>
            </div>



            {/* Service Section */}

            <div className="services-container">
                <div className="header">
                    <p className="subheading">WHAT WE'RE OFFERING</p>
                    <h1 className="title">Dealing in all professional IT services.</h1>
                    <p className="description">
                        One fundamental aspect of IT services is infrastructure management. This involves the design,
                        implementation, and maintenance of the hardware, software, networks, and servers.
                    </p>
                </div>
                <div className="cards">
                    {services.map((service, index) => (
                        <div key={index} className="card">
                            {service.badge && <span className="badge">{service.badge}</span>}
                            <div className="icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>


            {/* Slider Section */}

            <div className="slider">
                <div className="slide-track">
                    {techIcons.map((icon, index) => (
                        <div className="slide" key={index}>
                            <img src={icon} alt={icon.split('.')[0]} />
                        </div>
                    ))}
                    {techIcons.map((icon, index) => (
                        <div className="slide" key={index + techIcons.length}>
                            <img src={icon} alt={icon.split('.')[2]} />
                        </div>
                    ))}
                </div>
            </div>


            {/* Showcase Exp. Section */}
            <div className='showcase-container'>
                <div className="service-overview-container">
                    {/* Left Side */}
                    <div className="service-overview-left">
                        <p className="subheading">OUR EXPERIENCE</p>
                        <h1 className="title">We have the experience.</h1>
                        <p className="description">
                            We are an experienced IT software development company dedicated to making your dreams come true. These stats speak for themselves: in just 2 years, we've gained <span style={{ color: "#3b82f6" }}>30+ clients</span> worldwide and served over 25 countries. We have successfully completed <span style={{ color: "#3b82f6" }}>60+ projects</span> on time, achieving 100% client satisfaction.
                        </p>
                    </div>

                    {/* Right Side */}
                    <div className="service-overview-right">
                        {stats.map((stat, index) => (
                            <div key={index} className="stat-card">
                                <h2 className="stat-count">{stat.count}</h2>
                                <p className="stat-label">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            {/* Testimonial section  */}

            <div className='testimonial-container'>
                <div className="testimonial-section">
                    <h2 className="testimonial-title">What Our Client Says</h2>
                    <div className="testimonial-cards">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="testimonial-card">
                                <img src={testimonial.avatar} alt={testimonial.name} className="testimonial-avatar" />
                                <p className="testimonial-feedback">"{testimonial.feedback}"</p>
                                <h3 className="testimonial-name">{testimonial.name}</h3>
                                <p className="testimonial-role">{testimonial.country}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;

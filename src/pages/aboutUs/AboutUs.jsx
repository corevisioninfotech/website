import React from 'react';
import StatsSection from '../../components/statsSection';
import AnimeDesign from '../../components/animation/AnimeDesign';
import '../../styles/aboutpage.css';
import VrajImage from '../../assets/vraj2.JPG';
import UmangImage from '../../assets/umang.jpg';
import DixitImage from '../../assets/dixit.png';
import MeetImage from '../../assets/meet.png';
import LinkedIn from '../../assets/linkedIn.png';
import Instagram from '../../assets/instagram.png';
import step1 from '../../assets/step1.png';
import step2 from '../../assets/step2.png';
import step3 from '../../assets/step3.png';
import HTML5 from '../../components/icons/HTML5';

const AboutUs = () => {

    const teamMembers = [
         {
            name: "Vraj Chovatiya",
            role: "Full Stack Developer",
            image: VrajImage,
        },
        {
            name: "Umang Dhandhukiya",
            role: "Android & Web Developer",
            image: UmangImage,
        },
        {
            name: "Dixit Ramani",
            role: "UI-UX Designer",
            image: DixitImage,
        },
        {
            name: "Meet Kheni",
            role: "WordPress Developer",
            image: MeetImage,
        },
    ];

    const steps = [
        {
            id: "01",
            title: "Project Analysis ✅",
            description: "We provide in-depth project analysis to identify requirements, optimize strategies, and ensure successful execution.",
            image: step1,
        },
        {
            id: "02",
            title: "Design & Development ✅",
            description: "We offer end-to-end design and development services, creating visually appealing and high-performing digital solutions.",
            image: step2,
        },
        {
            id: "03",
            title: "Deliver to Success ✅",
            description: "We are committed to delivering innovative solutions that drive growth, ensuring your success with quality and efficiency.",
            image: step3,
        },
    ];



    return (
        <>
            <section className="aboutus-container">
                <div className="content">
                    {/* <p className="subheading">ACCELERATED GROWTH</p> */}
                    <h1 className="headline">
                        About Us
                        {/* <HTML5 /> */}
                    </h1>
                    <p className="description">
                        We are a dedicated team committed to delivering innovative solutions that drive business success, focusing on quality and customer satisfaction. 🌟
                    </p>
                </div>
            </section>
            <section>
                {/* <AnimeDesign /> */}
            </section>
            <section>
                <StatsSection />
            </section>
            <section>
                <div className="working-process">
                    <h5 className="section-subtitle">Working Process</h5>
                    <h2 className="section-title">We Follow the Easy Working Steps</h2>
                    <div className="steps-container">
                        {steps.map((step, index) => (
                            <div key={index} className="step">
                                <div className="step-circle">
                                    <span className="step-number">{step.id}</span>
                                    <img src={step.image} alt={step.title} className="step-image" />
                                </div>
                                <h3 className="step-title">{step.title}</h3>
                                <p className="step-description">{step.description}</p>
                                {index !== steps.length - 1 && <div className="arrow">→</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="team-section">
                <div className="team-header">
                    <div>
                        <h4 className="team-subtitle">OUR TEAM</h4>
                        <h2 className="team-title">Our professional experts</h2>
                        <p className="team-description">
                            Our team is a collective force of top talents, experts, and visionaries from diverse fields.
                        </p>
                    </div>
                    <button className="team-button">Book an appointment with our expert now</button>
                </div>
                <div className="team-grid">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="team-card">
                            <img src={member.image} alt={member.name} className="team-image" />
                            <h3 className="team-name">{member.name}</h3>
                            <p className="team-role">{member.role}</p>
                            {/* <div className="team-socials">
                                <a href="#"><img src={LinkedIn} alt="" /></a>
                                <a href="#"><img src={Instagram} alt="" /></a>
                            </div> */}
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
};


export default AboutUs;
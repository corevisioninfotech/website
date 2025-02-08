import React from 'react';
import { useParams } from 'react-router-dom';
import '../../styles/servicespage.css';

const Services = () => {

    const { serviceType } = useParams();

    // Mapping URL param to readable heading
    const serviceHeadings = {
        "web-development": "Website Development",
        "web-design": "Website Design",
        "e-commerce": "E-Commerce Solutions",
        "wordpress": "WordPress Solutions",
        "woo-commerce": "Woo-Commerce Support",
        "mobile-apps": "Mobile Application Development",
        "ui-ux": "UI/UX Designing",
        "customer-support": "Customer Support"
    };

    const serviceDescription = {
        "web-development": "We build fast, responsive, and scalable websites tailored to your business needs, ensuring a strong online presence. 🚀",
        "web-design": "We create visually stunning, user-friendly designs that enhance your brand identity and provide an engaging user experience. 🎨✨",
        "e-commerce": "We develop powerful e-commerce platforms with seamless functionality, secure payments, and a smooth shopping experience. 🛍️🚀",
        "wordpress": "We provide custom WordPress solutions, from stunning websites to feature-rich plugins, ensuring flexibility and ease of management. ⚡🌐",
        "woo-commerce": "We offer expert WooCommerce support, helping you optimize, customize, and scale your online store for maximum growth. 🛒🚀",
        "mobile-apps": "We create high-performance mobile apps with intuitive UI/UX, ensuring seamless functionality across iOS and Android devices. 📱🚀",
        "ui-ux": "We craft intuitive and engaging UI/UX designs that enhance user experience and drive customer satisfaction. 🎨✨",
        "customer-support": "We provide reliable and responsive customer support, ensuring timely solutions and a seamless experience for your clients. 🤝💬"
    };

    return(
        <>
            <section className="service-container">
                <div className="content">
                    <h1 className="headline">
                        {serviceType ? serviceHeadings[serviceType] : "Services"}
                    </h1>
                    <p className="description">
                        {serviceType ? serviceDescription[serviceType] : "Empower your business with smart solutions. We're here to help you grow your business."} 
                    </p>
                </div>
            </section>
        </>
    )
};

export default Services;
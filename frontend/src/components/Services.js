import React from 'react';
import './styles/Services.css';
import AluminiumFabricationBathroom from '../assets/Aluminium_Fabrication_Bathroom.jpg';
import AluminiumFabricationDining from '../assets/Aluminium_Fabrication_Dining.jpg';
import AluminiumFabricationKitchen from '../assets/Aluminium_Fabrication_Kitchen.jpg';
import AluminiumFabricationLivingroom from '../assets/Aluminium_Fabrication_Livingroom.jpg';
import AluminiumFabricationMosquito from '../assets/Aluminium_Fabrication_Mosquito.jpg';
import AluminiumFabricationPartition from '../assets/Aluminium_Fabrication_Partition.jpg';

const Services = () => {
    const servicesData = [
        { img: AluminiumFabricationBathroom, title: 'Bathroom Fabrication', description: 'High-quality aluminium fabrication for bathrooms.' },
        { img: AluminiumFabricationDining, title: 'Dining Fabrication', description: 'Elegant aluminium fabrication for dining areas.' },
        { img: AluminiumFabricationKitchen, title: 'Kitchen Fabrication', description: 'Durable aluminium fabrication for kitchens.' },
        { img: AluminiumFabricationLivingroom, title: 'Living Room Fabrication', description: 'Stylish aluminium fabrication for living rooms.' },
        { img: AluminiumFabricationMosquito, title: 'Mosquito Nets', description: 'Effective aluminium mosquito nets for windows.' },
        { img: AluminiumFabricationPartition, title: 'Partition Fabrication', description: 'Functional aluminium partitions for various spaces.' },
    ];

    return (
        <div className="services-section">
            <h2>Our Services</h2>
            <div className="services-grid">
                {servicesData.map((service, index) => (
                    <div className="service-card" key={index}>
                        <img src={service.img} alt={service.title} />
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;

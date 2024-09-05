import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/HeroSection.css';
import { useNavigate } from 'react-router-dom'; 

const HeroSection = () => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [districts, setDistricts] = useState([]);
    const [localAreas, setLocalAreas] = useState([]);
    const [services, setServices] = useState([]);
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedLocalArea, setSelectedLocalArea] = useState('');
    const [selectedService, setSelectedService] = useState('');
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/districts/')
            .then(response => setDistricts(response.data))
            .catch(error => console.error('Error fetching districts:', error));
        
        axios.get('http://127.0.0.1:8000/api/services/')
            .then(response => setServices(response.data))
            .catch(error => console.error('Error fetching services:', error));
    }, []);

    useEffect(() => {
        if (selectedDistrict) {
            axios.get(`http://127.0.0.1:8000/api/local-areas/${selectedDistrict}/`)
                .then(response => setLocalAreas(response.data))
                .catch(error => console.error('Error fetching local areas:', error));
        }
    }, [selectedDistrict]);

    const validatePhone = (phone) => /^\d{10}$/.test(phone);

    const validateForm = () => {
        let tempErrors = {};
        tempErrors.name = name ? "" : "Name is required.";
        tempErrors.phoneNumber = validatePhone(phoneNumber) ? "" : "Phone number must be 10 digits.";
        tempErrors.district = selectedDistrict ? "" : "District is required.";
        tempErrors.localArea = selectedLocalArea ? "" : "Local area is required.";
        tempErrors.service = selectedService ? "" : "Service is required.";
        setErrors(tempErrors);
        return Object.values(tempErrors).every(x => x === "");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            const leadData = {
                name,
                phone_number: phoneNumber,
                district: selectedDistrict,
                local_area: selectedLocalArea,
                service: selectedService,
            };
            axios.post('http://127.0.0.1:8000/api/leads/', leadData)
                .then(response => {
                    console.log('Form submitted successfully:', response.data);
                    navigate('/success'); // Redirect to success page
                })
                .catch(error => console.error('Error submitting form:', error));
        }
    };

    return (
        <div className="hero-section">
            <div className="hero-image-container">
                <img src={require('../assets/hero-banner.jpg')} alt="Hero Banner" className="hero-image" />
            </div>
            <div className="hero-form-container">
                <h1>Get a Call</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
                    {errors.name && <div className="error">{errors.name}</div>}
                    
                    <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Phone Number" />
                    {errors.phoneNumber && <div className="error">{errors.phoneNumber}</div>}
                    
                    <select value={selectedDistrict} onChange={(e) => setSelectedDistrict(e.target.value)}>
                        <option value="">Select District</option>
                        {districts.map(district => (
                            <option key={district.district_id} value={district.district_id}>{district.district_name}</option>
                        ))}
                    </select>
                    {errors.district && <div className="error">{errors.district}</div>}
                    
                    <select value={selectedLocalArea} onChange={(e) => setSelectedLocalArea(e.target.value)}>
                        <option value="">Select Local Area</option>
                        {localAreas.map(area => (
                            <option key={area.local_area_id} value={area.local_area_id}>{area.local_area_name}</option>
                        ))}
                    </select>
                    {errors.localArea && <div className="error">{errors.localArea}</div>}
                    
                    <select value={selectedService} onChange={(e) => setSelectedService(e.target.value)}>
                        <option value="">Select Service</option>
                        {services.map(service => (
                            <option key={service.service_id} value={service.service_id}>{service.service_name}</option>
                        ))}
                    </select>
                    {errors.service && <div className="error">{errors.service}</div>}
                    
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default HeroSection;

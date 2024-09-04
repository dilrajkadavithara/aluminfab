import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PublicForm = () => {
    const [services, setServices] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [localAreas, setLocalAreas] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        phone_number: '',
        district: '',
        local_area: '',
        service: '',
    });

    useEffect(() => {
        // Fetch services and districts from the backend when the component mounts
        const fetchData = async () => {
            try {
                const servicesResponse = await axios.get('http://127.0.0.1:8000/api/services/');
                const districtsResponse = await axios.get('http://127.0.0.1:8000/api/districts/');
                setServices(servicesResponse.data);
                setDistricts(districtsResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    // Fetch local areas when a district is selected
    useEffect(() => {
        if (formData.district) {
            const fetchLocalAreas = async () => {
                try {
                    const response = await axios.get(`http://127.0.0.1:8000/api/local-areas/${formData.district}/`);
                    setLocalAreas(response.data);
                } catch (error) {
                    console.error('Error fetching local areas:', error);
                }
            };

            fetchLocalAreas();
        }
    }, [formData.district]);

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://127.0.0.1:8000/api/leads/', formData);
            alert('Form submitted successfully!');
            // Reset form data after submission
            setFormData({
                name: '',
                phone_number: '',
                district: '',
                local_area: '',
                service: '',
            });
            setLocalAreas([]); // Clear local areas after submission
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Failed to submit the form. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Public Form</h2>
            <label>
                Name:
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                />
            </label>
            <br />
            <label>
                Phone Number:
                <input
                    type="text"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleInputChange}
                    required
                />
            </label>
            <br />
            <label>
                District:
                <select
                    name="district"
                    value={formData.district}
                    onChange={handleInputChange}
                    required
                >
                    <option value="">Select District</option>
                    {districts.map(district => (
                        <option key={district.district_id} value={district.district_id}>
                            {district.district_name}
                        </option>
                    ))}
                </select>
            </label>
            <br />
            <label>
                Local Area:
                <select
                    name="local_area"
                    value={formData.local_area}
                    onChange={handleInputChange}
                    required
                >
                    <option value="">Select Local Area</option>
                    {localAreas.map(localArea => (
                        <option key={localArea.local_area_id} value={localArea.local_area_id}>
                            {localArea.local_area_name}
                        </option>
                    ))}
                </select>
            </label>
            <br />
            <label>
                Service:
                <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                >
                    <option value="">Select Service</option>
                    {services.map(service => (
                        <option key={service.service_id} value={service.service_id}>
                            {service.service_name}
                        </option>
                    ))}
                </select>
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
};

export default PublicForm;

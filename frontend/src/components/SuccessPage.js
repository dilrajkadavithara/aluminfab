import React from 'react';
import './styles/SuccessPage.css';

const SuccessPage = () => {
    return (
        <div className="success-container">
            <h1>Thank You for Reaching Out to Us!</h1>
            <h2>Your request for aluminum fabrication services has been successfully submitted.</h2>
            <p className="catchy-phrase">We bring precision and elegance to every project!</p>
            <p className="description">
                Our team at AluminFab will get back to you shortly. We specialize in transforming spaces with top-quality aluminum fabrication, whether it’s for kitchens, bathrooms, or bespoke interior designs.
            </p>
            <p className="contact-info">
                Need to talk to us immediately? Call us at <span className="phone-number">6238804932</span>.
            </p>
        </div>
    );
};

export default SuccessPage;

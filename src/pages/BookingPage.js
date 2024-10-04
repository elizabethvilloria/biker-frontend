// src/pages/BookingPage.js
import React, { useState } from 'react';
import './BookingPage.css';

function BookingPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Booking confirmed for ${name} on ${date}!`);
        // Here, we’ll later add functionality to save booking details to the backend.
    };

    return (
        <div className="booking-container">
            <h1 className="booking-title">Book a Bike</h1>
            <form onSubmit={handleSubmit} className="booking-form">
                <div className="form-group">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="date" className="form-label">Booking Date:</label>
                    <input
                        id="date"
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                        className="form-input"
                    />
                </div>
                <button type="submit" className="submit-button">Confirm Booking</button>
            </form>
        </div>
    );
}

export default BookingPage;

// src/pages/BookingPage.js
import { useState } from 'react';

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
        <div>
            <h1>Book a Bike</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </label>
                <br />
                <label>
                    Booking Date:
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
                </label>
                <br />
                <button type="submit">Confirm Booking</button>
            </form>
        </div>
    );
}

export default BookingPage;

import React from 'react';

function HomePage() {
    return (
        <div>
            <h1>Welcome to Bike Booking</h1>
            <div>
                <h2>Our Bike</h2>
                <img src="/images/bike.png" alt="Our Bike" style={{ width: '300px', height: 'auto' }} />
                <p>Description of the bike. For example, "A high-quality mountain bike perfect for trails and rough terrain."</p>
                <button onClick={() => window.location.href = '/booking'}>Book This Bike</button>
            </div>
        </div>
    );
}

export default HomePage;

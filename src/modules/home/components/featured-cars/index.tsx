// filepath: c:\Users\qkawe\my-medusa-store-storefront\src\modules\home\components\featured-cars\index.tsx
import React from 'react';

const FeaturedCars = () => {
    const cars = [
        { id: 1, name: 'Tesla Model S', price: '$80,000', image: '/images/tesla-model-s.jpg' },
        { id: 2, name: 'BMW 3 Series', price: '$50,000', image: '/images/bmw-3-series.jpg' },
        { id: 3, name: 'Audi A4', price: '$45,000', image: '/images/audi-a4.jpg' },
        // Add more cars here
    ];

    return (
        <section className="py-12">
            <h2 className="text-3xl font-bold mb-6">Featured Cars</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cars.map(car => (
                    <div key={car.id} className="border p-4 rounded-lg">
                        <img src={car.image} alt={car.name} className="w-full h-48 object-cover mb-4" />
                        <h3 className="text-xl font-bold mb-2">{car.name}</h3>
                        <p className="text-lg mb-4">{car.price}</p>
                        <button className="bg-black text-white px-4 py-2 rounded-lg transition-transform transform hover:scale-105">
                            View Details
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedCars;
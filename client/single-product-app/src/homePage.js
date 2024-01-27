import React from 'react';
import Blogs from './blogs';
import Products from './products';


function HomePage() {
    return (
        <div className="bg-white">
            <Products />
            <Blogs />
        </div>
    )
}

export default HomePage;
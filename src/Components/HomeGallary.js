import React from 'react';
import './css/HomeGallary.css';
import img1 from '../assets/img/banner1.jpg';
import img2 from '../assets/img/banner2.jpg';
import img3 from '../assets/img/banner3.jpg';
import img4 from '../assets/img/b10.jpg';
import img5 from '../assets/img/b6.jpg';
import img6 from '../assets/img/chocolate-brownie-cake-piece-stack-plate-homemade-pastries.jpg';

function HomeGallary() {
    const images = [img1, img2, img3, img4, img5, img6];

    return (
        <div className='container img-content my-5'>
            <h2 className="text-center text-muted title">Gallery</h2>

            <div className="row g-3"> 
                {images.map((img, index) => (
                    <div key={index} className="col-lg-4 col-md-6 col-sm-6">
                        <div className="image-container">
                            <img src={img} alt={`Gallery ${index + 1}`} className="img-fluid rounded shadow-sm gallery-img" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomeGallary;

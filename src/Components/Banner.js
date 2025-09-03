import React from 'react';
import "./css/Banner.css";
import banner1 from '../assets/img/b8.jpg';
import banner2 from '../assets/img/b4.jpg';
import banner3 from '../assets/img/b6.jpg';

function Banner() {
    const images = [banner1, banner2, banner3];

    return (
        <div className="container-fluid p-0 position-relative mt-5 ">
            <div id="bannerCarousel" className="carousel slide" data-bs-touch="true" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {images.map((img, index) => (
                        <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                            <img src={img} className="d-block w-100" alt={`Slide ${index + 1}`} />
                        </div>
                    ))}
                </div>

                {/* Carousel Navigation Controls */}
                <button className="carousel-control-prev" type="button" data-bs-target="#bannerCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#bannerCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* Banner Text */}
            <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
                <h1 className="fw-bold ">Order <span className='indigo'>Online</span> & Get Sweetness Delivered!</h1>
                    <p className="fs-4 ">Freshly Baked | Custom Designs | Delivered with Love</p>
                
            </div>
        </div>
    );
}

export default Banner;

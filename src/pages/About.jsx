import React from 'react';
import './About.css';
import AboutChef1 from '../utils/img/about-che12.jpg';
import AboutChef2 from '../utils/img/about-chef22.jpg';
import { ImageGallery } from '../components/ImageGallery';
import { Reviews } from '../components/Reviews';

function About() {
    return (
        <div className='about-page'>
            <header className='mt-5'>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                    <h1 className='text-light'>About</h1>
                </div>
            </header>

            <div className='container my-5'>
                <p> Welcome to *Qui Qui Café*, your cozy retreat in the heart of Paris! We’re all about blending the charm of classic Parisian café culture with a modern twist. Here, you’ll find a selection of expertly brewed coffees, mouthwatering pastries like buttery croissants and decadent pain au chocolat, and light French dishes that’ll make you feel right at home. Whether you’re grabbing a quick coffee or relaxing for the afternoon, our friendly team is here to make your experience special. Come by and enjoy a true taste of Paris with a quirky touch!</p>

                <div className='row'>
                    <div className='col-lg-6'>
                        <img src={AboutChef1} className='img-fluid my-4' alt="" />
                    </div>
                    <div className='col-lg-6'>
                        <img src={AboutChef2} className='img-fluid my-4' alt="" />
                    </div>
                </div>

                <p>At Qui Qui Café*, we believe that a great café experience goes beyond what’s on the menu—though ours is a tempting showcase of French indulgence. Start your day with our golden, flaky croissants or savor the rich, buttery layers of a pain au chocolat. As the sun climbs higher, delight in our assortment of artisanal sandwiches, light quiches, and salads crafted with fresh ingredients. Our passion for excellence is evident in every bite, and our chefs take pride in bringing traditional recipes to life with a touch of creativity.</p>
            </div>

            <div className='bg-dark text-light'>
                <ImageGallery />
            </div>

            <div className='my-5'>
                <Reviews />
            </div>
        </div>
    )
}

export default About;
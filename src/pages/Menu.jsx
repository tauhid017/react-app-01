import React from 'react';
import './Menu.css';
import { Card, CardBody, CardText, CardTitle } from 'react-bootstrap';
import BreakfastImg from '../utils/img/breakfast.jpg';
import LunchImg from '../utils/img/breakfast2.jpg';
import DinnerImg from '../utils/img/dinner2.jpg';
import DessertImg from '../utils/img/desser2.jpg';

const breakfast = [
    {
        id: 1,
        name: 'English Breakfast',
        description: 'smoked bacon, sausage, tomato, mushrooms, black pudding, baked beans, eggs',
        price: '₹250'
    },
    {
        id: 2,
        name: 'Pain au Chocolat-Flour',
        description: 'sugar, butter, milk, salt, yeast, dark chocolate, egg',
        price: '₹250'
    },
    {
        id: 3,
        name: 'Crepes',
        description: 'Flour, eggs, milk, sugar, salt, butter.',
        price: '₹350'
    }
];
const lunch = [
    {
        id: 1,
        name: 'Ratatouille',
        description: 'Stewed vegetable dish with tomatoes, zucchini, eggplant, and bell peppers',
        price: '₹600'
    },
    {
        id: 2,
        name: 'Salade Niçoise',
        description: 'Mixed greens with tuna, olives, tomatoes, hard-boiled eggs, and anchovies',
        price: '₹700'
    },
    {
        id: 3,
        name: 'Coq au Vin',
        description: 'Chicken braised with red wine, mushrooms, and onions',
        price: '₹1500'
    }
];

const dinner = [
    {
        id: 1,
        name: 'Duck Confit (Confit de Canard)',
        description: 'Slow-cooked duck leg in its own fat, crispy on the outside, tender on the inside',
        price: '₹1800'
    },
    {
        id: 2,
        name: 'Salmon en Papillote',
        description: 'Salmon baked in parchment paper with herbs, vegetables, and a light sauce',
        price: '₹1600'
    },
    {
        id: 3,
        name: 'Bouillabaisse',
        description: 'A traditional Provençal fish stew with a variety of fish, shellfish, and aromatic herbs.',
        price: '₹1500'
    }
];

const dessert = [
    {
        id: 1,
        name: 'Crème Brûlée',
        description: 'A rich custard topped with a layer of caramelized sugar',
        price: '₹550'
    },
    {
        id: 2,
        name: 'Mille-Feuille',
        description: 'Layered puff pastry with cream filling, also known as "Napoleon.',
        price: '₹600'
    },
    {
        id: 3,
        name: 'Soufflé',
        description: 'Light and airy dessert made with whipped egg whites, often chocolate-flavored',
        price: '₹700'
    }
];

function Menu() {
    return (
        <div className='menu-page'>
            <header className='mt-5'>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                    <h1 className='text-light'>Menu</h1>
                </div>
            </header>

            <div className='breakfast my-5'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Breakfast</h2>
                    <div className='row flex-column-reverse flex-lg-row'>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={BreakfastImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
                        </div>
                        <div className='col-lg-6 d-flex flex-column justify-content-around'>
                            {breakfast.map((breakfast) => (
                                <div key={breakfast.id}>
                                    <Card className='border-0'>
                                        <CardBody>
                                            <CardTitle className='text-center fs-3'>
                                                {breakfast.name}
                                            </CardTitle>
                                            <CardText className='text-center fs-5'>
                                                {breakfast.description}
                                            </CardText>
                                            <CardText className='text-center fs-3 fw-bold text-success'>
                                                {breakfast.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className='lunch bg-dark text-light py-5'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Lunch</h2>
                    <div className='row'>
                        <div className='col-lg-6 d-flex flex-column justify-content-around'>
                            {lunch.map((lunch) => (
                                <div key={lunch.id}>
                                    <Card className='border-0 bg-dark text-light'>
                                        <CardBody>
                                            <CardTitle className='text-center fs-3'>
                                                {lunch.name}
                                            </CardTitle>
                                            <CardText className='text-center fs-5'>
                                                {lunch.description}
                                            </CardText>
                                            <CardText className='text-center fs-3 fw-bold text-success'>
                                                {lunch.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={LunchImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='dinner my-5'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Dinner</h2>
                    <div className='row flex-column-reverse flex-lg-row'>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={DinnerImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
                        </div>
                        <div className='col-lg-6 d-flex flex-column justify-content-around'>
                            {dinner.map((dinner) => (
                                <div key={dinner.id}>
                                    <Card className='border-0'>
                                        <CardBody>
                                            <CardTitle className='text-center fs-3'>
                                                {dinner.name}
                                            </CardTitle>
                                            <CardText className='text-center fs-5'>
                                                {dinner.description}
                                            </CardText>
                                            <CardText className='text-center fs-3 fw-bold text-success'>
                                                {dinner.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className='dessert bg-dark text-light py-5'>
                <div className='container'>
                    <h2 className='text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-success'>Dessert</h2>
                    <div className='row'>
                        <div className='col-lg-6 d-flex flex-column justify-content-around'>
                            {dessert.map((dessert) => (
                                <div key={dessert.id}>
                                    <Card className='border-0 bg-dark text-light'>
                                        <CardBody>
                                            <CardTitle className='text-center fs-3'>
                                                {dessert.name}
                                            </CardTitle>
                                            <CardText className='text-center fs-5'>
                                                {dessert.description}
                                            </CardText>
                                            <CardText className='text-center fs-3 fw-bold text-success'>
                                                {dessert.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={DessertImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu;
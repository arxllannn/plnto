import React, { useState } from 'react';
import bottleImage from '../assets/images/bottle-image2.png';
import { CalenderSvg2, CalenderSvg, GreenCartSvg, CalenderSvg3, DotSvg, BinSvg } from '../components/Icons';

const CreateSubscription = () => {

    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Whole Oat Milk",
            volume: "1L",
            price: 2.99,
            quantity: 2,
            image: bottleImage,
        },
        {
            id: 2,
            name: "Almond Milk",
            volume: "500ml",
            price: 1.99,
            quantity: 1,
            image: bottleImage,
        },
    ]);

    const [selectedSize, setSelectedSize] = useState("500ml – £1.99");
    const [deliveryDate, setDeliveryDate] = useState("2025-05-14");

    const formatDate = (isoDate) => {
        const date = new Date(isoDate);
        return date.toLocaleDateString("en-GB", { weekday: "long", month: "long", day: "numeric" });
    };

    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const deliveryCost = 2.99;
    const total = subtotal + deliveryCost;


    const [quantity, setQuantity] = useState(1);
    const increment = () => setQuantity(prev => prev + 1);
    const decrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

    return (
        <div className="container my-5">
            <h2 className="mb-4 font-weight-700 font-36 text-brown line-height-40">Create Your Subscription</h2>
            <div className="row">
                {/* Left Column */}
                <div className="col-lg-8">
                    <div className="card p-4 mb-4">
                        <div className=''>
                            <h5 className='text-brown font-weight-600 font-24 line-height-32'>Select Your Products</h5>
                        </div>

                        <div className='create-subscription-card row border rounded px-1 py-4' style={{ margin: '0' }}>
                            <div className='col-md-1 mb-3'>
                                <img src={bottleImage} className='rounded' alt="Whole Oat Milk" style={{ width: 60 }} />
                            </div>
                            <div className='col-md-10 create-subscription-card-center'>
                                <div className="ms-3 w-100">
                                    <div className="">
                                        <h5 className='font-weight-500 text-brown font-20 line-height-28'>Whole Oat Milk</h5>
                                        <span className='text-gray font-weight-400 font-16 line-height-20'>£1.99 per unit</span>
                                    </div>
                                    <div className="my-2">
                                        <label className="text-blue-500 font-weight-500 font-16 line-height-20">Size</label>
                                        <select className="form-select theme-input text-card-body" value={selectedSize} onChange={e => setSelectedSize(e.target.value)}>
                                            <option>500ml – £1.99</option>
                                            <option>1L – £2.99</option>
                                        </select>
                                    </div>
                                    <div className='create-subscription-card-body'>
                                        <div className='mb-2'>
                                            <div className='bg-white px-0 px-md-3  py-2 rounded'>
                                                <div className='row'>
                                                    <div className="col-12">
                                                        <p className="d-flex align-items-center text-center mt-2 mb-0">
                                                            <span className="me-2 mt-r-3">{CalenderSvg}</span>
                                                            Delivery Days
                                                        </p>
                                                        <p className='font-weight-400 mt-4 text-river font-16 line-height-24'>
                                                            Choose which days you'd like your products delivered and how many
                                                            items you want on each delivery day
                                                        </p>
                                                    </div>
                                                    <div className="col-12 d-flex justify-content-between align-items-center">
                                                        <div className="d-flex align-items-center">
                                                            <p className="bg-light-orange px-2 py-2 font-12 line-height-16 rounded mb-0 me-2">
                                                                Wed
                                                            </p>
                                                            <p className="font-weight-500 text-brown font-18 line-height-24 mb-0">
                                                                Wednesday
                                                            </p>
                                                        </div>
                                                        <div className='squre-border rounded'>
                                                            <div className="input-group" style={{ width: '150px' }}>
                                                                <button className="btn bg-white text-card-body px-3" onClick={decrement}>-</button>
                                                                <input
                                                                    type="text"
                                                                    className="form-control border-none text-card-body px-4 text-center"
                                                                    value={quantity}
                                                                    readOnly
                                                                />
                                                                <button className="btn bg-white text-card-body px-3" onClick={increment}>+</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='bottom-border mb-4 mt-4'></div>
                                                    <div className="col-12 d-flex justify-content-between align-items-center">
                                                        <div className="d-flex align-items-center">
                                                            <p className="bg-light-orange px-2 py-2 font-12 line-height-16 rounded mb-0 me-2">
                                                                THU
                                                            </p>
                                                            <p className="font-weight-500 text-brown font-18 line-height-24 mb-0">
                                                                Thursday
                                                            </p>
                                                        </div>
                                                        <div className='squre-border rounded'>
                                                            <div className="input-group" style={{ width: '150px' }}>
                                                                <button className="btn bg-white text-card-body px-3" onClick={decrement}>-</button>
                                                                <input
                                                                    type="text"
                                                                    className="form-control border-none text-card-body px-4 text-center"
                                                                    value={quantity}
                                                                    readOnly
                                                                />
                                                                <button className="btn bg-white text-card-body px-3" onClick={increment}>+</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='bottom-border mb-4 mt-4'></div>
                                                    <div className='col-12'>
                                                        <button className="btn bg-theme py-2 text-river w-100 font-16 line-height-20 d-flex align-items-center justify-content-center">
                                                            <span className='me-2 mt-r-3'>{CalenderSvg2}</span> Add Another Delivery Day
                                                        </button>

                                                        <div className='bg-theme px-3 py-2 rounded mt-3'>
                                                            <h6 className='font-weight-500 text-orange font-18 line-height-24 mt-2'>Please select at least one delivery day</h6>
                                                            <p className='font-weight-400 mt-1 text-orange font-14 line-height-20'>
                                                                Choose which days you'd like your products delivered and set the quantity
                                                                for each day
                                                            </p>
                                                        </div>
                                                        <div className='bg-theme px-3 py-2 rounded mt-3 mb-2'>
                                                            <h6 className='font-weight-500 text-brown font-18 line-height-24 mt-2'>Delivery Information</h6>
                                                            <p className='font-weight-400 mt-1 text-card-body font-14 line-height-20 mb-0'>
                                                                We deliver fresh, plant-based milk straight to your doorstep — zero waste, always fresh.
                                                            </p>
                                                            <p className='font-weight-400 text-card-body font-14 line-height-20 mb-0'>
                                                                Wednesday between 6:00 AM - 9:00 PM
                                                            </p>
                                                            <p className='font-weight-400 text-card-body font-14 line-height-20'>
                                                                Saturday before 8:00 AM
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-1'>
                                <div className='d-flex justify-content-start justify-content-md-center ms-3 ms-md-0'>
                                    {BinSvg}
                                </div>
                            </div>
                        </div>
                        <div className='border-bottom my-4'></div>
                        {/* Add Products Section */}
                        <div className="row px-1">
                            <h6 className="mb-2 text-brown font-weight-500 font-18 line-height-28">Add Products</h6>
                            {[1, 2, 3].map((item, index) => (
                                <div className="col-12 col-md-6 mb-3" key={index}>
                                    <div className="d-flex align-items-center justify-content-between border border-color-brown rounded p-3">
                                        <div className="d-flex align-items-center">
                                            <img
                                                src={bottleImage}
                                                alt="Whole Oat Milk"
                                                className="rounded"
                                                style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                                            />
                                            <div className="ms-3">
                                                <h6 className="mb-1 text-brown font-weight-500 font-18 line-height-24">Whole Oat Milk</h6>
                                                <small className="text-gray font-weight-400 font-14 line-height-20">From £1.99</small>
                                            </div>
                                        </div>
                                        <button className="btn bg-theme border font-weight-500 text-brown px-3 py-2">
                                            ADD
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Delivery Date Section */}
                    <div className="card p-4">
                        <div className="d-flex align-items-center mb-2">
                            <span className="me-2">{CalenderSvg3}</span>
                            <p className='font-weight-500 text-brown font-20 line-height-28 mb-0'>Choose Your Delivery Date</p>
                        </div>
                        <p className="text-gray font-weight-400 font-16 line-height-20">Select your preferred delivery date.</p>
                        <input type="date" className="form-control theme-input mb-3" value={deliveryDate} onChange={(e) => setDeliveryDate(e.target.value)} />
                        <div className="bg-theme p-3 rounded mb-3 d-flex">
                            <div className="text-center bg-white border rounded p-2 me-3">
                                <div className="text-brown">{new Date(deliveryDate).toLocaleString("default", { month: "short" })}</div>
                                <div className="fs-4">{new Date(deliveryDate).getDate()}</div>
                            </div>
                            <div className='mt-2'>
                                <strong>{formatDate(deliveryDate)}</strong>
                                <div>Your items will be delivered between 6:00pm – 9:00pm</div>
                            </div>
                        </div>
                        <ul className="list-unstyled text-muted small mb-2 p-3 bg-light rounded">
                            <li className="text-brown font-weight-400 font-16 line-height-20 mb-2"><span className="me-2">{DotSvg}</span>Orders placed before 2pm will be delivered as early as the next day</li>
                            <li className="text-brown font-weight-400 font-16 line-height-20 mb-2"><span className="me-2">{DotSvg}</span>  We deliver 7 days a week, including weekends and bank holidays</li>
                            <li className="text-brown font-weight-400 font-16 line-height-20"><span className="me-2">{DotSvg}</span> You don't need to be home - we'll leave your delivery in a safe place</li>
                        </ul>
                    </div>
                </div>

                {/* Right Column - Order Summary */}
                <div className="col-md-4 mt-3 mt-md-0">
                    <div className="card p-4">
                        <h5 className="mb-3 font-weight-600 text-brown font-24 line-height-32"><span className='me-2 icon-center'>{GreenCartSvg}</span>Order Summary</h5>
                        <div className="d-flex justify-content-between mb-2">
                            <div>
                                <span className="text-brown font-weight-400 font-18 line-height-20">Whole Oat Milk</span>
                                <p className="text-gray font-weight-400 font-14 line-height-20 mb-0">500ml x 1</p>
                            </div>
                            <p className="text-brown font-weight-500 font-16 line-height-20 mb-0">£{subtotal.toFixed(2)}</p>
                        </div>
                        <div className="border-bottom my-3"></div>
                        <div className="d-flex justify-content-between mb-2">
                            <span className="text-gray font-weight-400 font-14 line-height-20">Delivery Frequency</span>
                            <p className="text-card-body font-weight-400 font-14 line-height-20">Monthly</p>
                        </div>
                        <div className="d-flex justify-content-between mb-2">
                            <div>
                                <span className="text-brown font-weight-400 font-18 line-height-20">Subtotal</span>
                                <p className="text-gray font-weight-400 font-14 line-height-20 mb-0">Monthly Payemnt</p>
                            </div>
                            <p className="text-brown font-weight-500 font-16 line-height-20 mb-0">£{subtotal.toFixed(2)}</p>
                        </div>
                        <button className="btn bg-green text-white w-100 mt-3">PROCEED TO CHECKOUT</button>
                        <div className="text-center mt-2 py-2">
                            <a className="text-gray font-12 font-weight-400 small" style={{ textDecoration: 'none' }} >You can pause or cancel your subscription at any time</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateSubscription;
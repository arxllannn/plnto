import React, { useState } from "react";
import bottleImage2 from '../assets/images/bottle-image2.png';
import { InfoSvg, CardSvg, GreenCartSvg } from '../components/Icons';

const Checkout = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Whole Oat Milk",
            volume: "1L",
            price: 2.99,
            quantity: 2,
            image: bottleImage2,
        },
        {
            id: 2,
            name: "Almond Milk",
            volume: "500ml",
            price: 1.99,
            quantity: 1,
            image: bottleImage2,
        },
    ]);

    const [deliveryDate, setDeliveryDate] = useState("2025-05-14");

    const handleRemove = (id) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    const handleDateChange = (e) => {
        setDeliveryDate(e.target.value);
    };

    const formatDate = (isoDate) => {
        const date = new Date(isoDate);
        const options = { weekday: "long", month: "long", day: "numeric" };
        return date.toLocaleDateString("en-GB", options);
    };

    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const deliveryCost = 2.99;
    const total = subtotal + deliveryCost;

    return (
        <div className="container my-5">
            <h2 className="mb-4 font-weight-700 font-36 text-brown line-height-40">Checkout</h2>
            <div className="row">
                {/* Cart Items */}
                <div className="col-md-8 mb-4">
                    <div className="p-4 bg-white rounded">
                        <h5 className="mb-4 font-weight-700 font-24 text-brown line-height-40">Delivery Information</h5>
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label htmlFor="firstName" className="form-label text-brown font-weight-500 font-16 line-height-14">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    className="theme-input"
                                    id="firstName"
                                    placeholder="First Name"
                                />
                            </div>
                            <div className="col-md-6 mt-3 mt-md-0">
                                <label htmlFor="lastName" className="form-label text-brown font-weight-500 font-16 line-height-14">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    className="theme-input"
                                    id="lastName"
                                    placeholder="Last Name"
                                />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label htmlFor="email" className="form-label text-brown font-weight-500 font-16 line-height-14">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="theme-input"
                                    id="email"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="col-md-6 mt-3 mt-md-0">
                                <label htmlFor="phone" className="form-label text-brown font-weight-500 font-16 line-height-14">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    className="theme-input"
                                    id="phone"
                                    placeholder="Phone Number"
                                />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-12">
                                <label htmlFor="street" className="form-label text-brown font-weight-500 font-16 line-height-14">
                                    Street Address
                                </label>
                                <input
                                    type="text"
                                    className="theme-input"
                                    id="street"
                                    placeholder="Street Address"
                                />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label htmlFor="city" className="form-label text-brown font-weight-500 font-16 line-height-14">
                                    City
                                </label>
                                <input
                                    type="text"
                                    className="theme-input"
                                    id="city"
                                    placeholder="City"
                                />
                            </div>
                            <div className="col-md-6 mt-3 mt-md-0">
                                <label htmlFor="postcode" className="form-label text-brown font-weight-500 font-16 line-height-14">
                                    Postcode
                                </label>
                                <input
                                    type="text"
                                    className="theme-input"
                                    id="postcode"
                                    placeholder="Postcode"
                                />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-12">
                                <label htmlFor="instructions" className="form-label text-brown font-weight-500 font-16 line-height-14">
                                    Delivery Instructions (Optional)
                                </label>
                                <textarea
                                    className="theme-input"
                                    id="instructions"
                                    rows="4"
                                    placeholder="Any special delivery instructions..."
                                />
                            </div>
                        </div>
                    </div>

                    {/* Subscription Details */}
                    <div className="bg-white rounded mt-4 p-3">
                        <div className="d-flex align-items-center mt-2 mb-3">
                            <strong className="font-weight-600 font-24 line-height-32 text-brown">Subscription Details</strong>
                        </div>
                        <div className="bg-theme p-3 rounded mb-3">
                            <div className="d-flex justify-content-between">
                                <div>
                                    <p className="font-weight-500 font-18 line-height-24 mb-0 pe-5">Current Delivery Frequency</p>
                                    <h5 className="text-green font-weight-600 font-16 line-height-24">Monthly</h5>
                                </div>
                                <button className="btn bg-white text-green px-4 text-brown h-40">Monthly</button>
                            </div>
                            <div className="row">
                                <div className="d-flex mt-3">
                                    <div className="me-2 mt-r-3">{InfoSvg}</div>
                                    <p className="font-weight-400 text-river font-14 line-height-20 pe-5">
                                        You can change your delivery frequency at any time in your account settings.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 mt-4 bg-white rounded">
                        <h5 className="mb-4 font-weight-700 font-24 text-brown line-height-40">Payment Details <span>{CardSvg}</span></h5>
                        <div className="row mb-3">
                            <div className="col-md-12">
                                <label htmlFor="cardholderName" className="form-label text-brown font-weight-500 font-16 line-height-14">
                                    Cardholder Name
                                </label>
                                <input
                                    type="text"
                                    className="theme-input"
                                    id="CardholderName"
                                    placeholder="Name on card"
                                />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-12">
                                <label htmlFor="cardNumber" className="form-label text-brown font-weight-500 font-16 line-height-14">
                                    Card Number
                                </label>
                                <input
                                    type="number"
                                    className="theme-input"
                                    id="cardNumber"
                                    placeholder="0000 0000 0000 0000"
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label htmlFor="email" className="form-label text-brown font-weight-500 font-16 line-height-14">
                                    Expiry Date
                                </label>
                                <input
                                    type="date"
                                    className="theme-input"
                                    id="email"
                                    placeholder="MM/YY"
                                />
                            </div>
                            <div className="col-md-6 mt-3 mt-md-0">
                                <label htmlFor="email" className="form-label text-brown font-weight-500 font-16 line-height-14">
                                    CVV
                                </label>
                                <input
                                    type="number"
                                    className="theme-input"
                                    id="cvv"
                                    placeholder="123"
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-12 mt-2">
                                <input type="checkbox" className="form-check-input me-2" id="billing" />
                                <label className="form-check-label" htmlFor="billing">
                                    Billing address same as delivery address
                                </label>
                            </div>
                            <div className="col-md-12 mt-2">
                                <input type="checkbox" className="form-check-input me-2" id="savecard" />
                                <label className="form-check-label" htmlFor="savecard">
                                    Save card for future orders
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column - Order Summary */}
                <div className="col-md-4 mt-3 mt-md-0">
                    <div className="card p-3">
                        <h5 className="mb-3 font-weight-600 text-brown font-24 line-height-32"><span className='me-2'>{GreenCartSvg}</span>Order Summary</h5>
                        <div className="d-flex justify-content-between">
                            <div>
                                <span className="text-brown font-weight-400 font-18 line-height-20">Whole Oat Milk</span>
                                <p className="text-gray font-weight-400 font-14 line-height-20 mb-0">500ml x 1</p>
                            </div>
                            <p className="text-brown font-weight-500 font-16 line-height-20 mb-0">£{subtotal.toFixed(2)}</p>
                        </div>
                        <div className="border-bottom my-3"></div>
                        <div className="d-flex justify-content-between mb-2">
                            <div>
                                <span className="text-brown font-weight-400 font-18 line-height-20">Whole Oat Milk</span>
                                <p className="text-gray font-weight-400 font-14 line-height-20 mb-0">500ml x 1</p>
                            </div>
                            <p className="text-brown font-weight-500 font-16 line-height-20 mb-0">£{subtotal.toFixed(2)}</p>
                        </div>
                        <div className="border-bottom my-3"></div>
                        <div className="d-flex justify-content-between">
                            <span className="text-gray font-weight-400 font-14 line-height-20">Delivery Frequency</span>
                            <p className="text-card-body font-weight-400 font-14 line-height-20 mb-1">Monthly</p>
                        </div>
                        <div className="d-flex justify-content-between mb-2">
                            <span className="text-gray font-weight-400 font-14 line-height-20">Subtotal </span>
                            <p className="text-card-body font-weight-400 font-14 line-height-20">£{subtotal.toFixed(2)}</p>
                        </div>
                        <div className="d-flex justify-content-between mb-2">
                            <div>
                                <span className="text-brown font-weight-400 font-18 line-height-20">Total</span>
                                <p className="text-gray font-weight-400 font-14 line-height-20 mb-0">Monthly Payemnt</p>
                            </div>
                            <p className="text-brown font-weight-500 font-16 line-height-20 mb-0">£{subtotal.toFixed(2)}</p>
                        </div>
                        <button className="btn bg-green text-white w-100 mt-3">Place Order</button>
                        <div className="text-center mt-2 py-2">
                            <a className="text-gray font-12 font-weight-400 small" style={{ textDecoration: 'none' }} >You can pause or cancel your subscription at any time</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;

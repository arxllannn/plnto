import React, { useState } from "react";
import bottleImage2 from '../assets/images/bottle-image2.png';
import { CalenderSvg3, DotSvg } from '../components/Icons';

const Cart = () => {
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
            <h2 className="mb-4 font-weight-700 font-30 text-brown line-height-36">Your Cart</h2>
            <div className="row">
                {/* Cart Items */}
                <div className="col-md-8 mb-4">
                    <div className="card">
                        <div className="p-3">
                            <h5 className="mt-2">Cart Items ({cartItems.length})</h5>
                        </div>
                        <div className="border-bottom"></div>
                        <div className="p-3">
                            {cartItems.length === 0 ? (
                                <p className="text-muted">Your cart is empty.</p>
                            ) : (
                                cartItems.map((item, index) => (
                                    <div
                                        key={item.id}
                                        className={`d-flex align-items-center mt-3 pb-3 ${index !== cartItems.length - 1 ? 'border-bottom' : ''
                                            }`}
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="rounded"
                                            style={{ width: "70px", height: "auto" }}
                                        />
                                        <div className="ms-3 flex-grow-1">
                                            <div className="font-weight-500 font-18 text-brown line-height-24">{item.name}</div>
                                            <div className="text-card-body font-weight-400 font-14">{item.volume}</div>
                                            <div className="font-weight-500 font-16 text-card-body line-height-24">£{item.price.toFixed(2)}</div>
                                        </div>
                                        <div className="d-flex align-items-end flex-column">
                                            <div className="d-flex align-items-center cart-quantity-buttons squre-border rounded">
                                                <button className="btn btn-sm mx-1 text-card-body">-</button>
                                                <span className="mx-3 text-card-body">{item.quantity}</span>
                                                <button className="btn  btn-sm mx-1 text-card-body">+</button>
                                            </div>
                                            <button
                                                onClick={() => handleRemove(item.id)}
                                                className="btn btn-link text-card-body btn-sm ms-3"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>

                    {/* Delivery Date */}
                    <div className="card mt-4 p-3">
                        <div className="d-flex align-items-center mt-2 mb-3">
                            <span className="me-2 mt-r-3">{CalenderSvg3}</span>
                            <strong className="font-weight-500 font-18 line-height-28 text-brown">Choose Your Delivery Date</strong>
                        </div>
                        <p className="text-river">Select your preferred delivery date.</p>
                        <input
                            type="date"
                            className="theme-input mb-3"
                            value={deliveryDate}
                            onChange={handleDateChange}
                        />
                        <div className="bg-theme p-3 rounded mb-3">
                            <div className="d-flex mb-2">
                                <div className="text-center bg-white border rounded p-2 me-3">
                                    <div className="text-brown font-weight-600">
                                        {new Date(deliveryDate).toLocaleString("default", { month: "short" })}
                                    </div>
                                    <div className="fs-4">
                                        {new Date(deliveryDate).getDate()}
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <strong className="text-card-body font-18 line-height-24 font-weight-600">{formatDate(deliveryDate)}</strong>
                                    <div className="text-card-body font-weight-400 font-16 line-height-20">
                                        Your items will be delivered between 6:00am - 8:30am
                                    </div>
                                </div>
                            </div>
                        </div>

                        <ul className="list-unstyled text-muted small mb-2 p-3 bg-light rounded">
                            <li className="text-brown font-weight-400 font-16 line-height-20 mb-2"><span className="me-2">{DotSvg}</span> Orders placed before 2pm will be delivered as early as the next day</li>
                            <li className="text-brown font-weight-400 font-16 line-height-20 mb-2"><span className="me-2">{DotSvg}</span>  We deliver 2 days a week, including weekends and bank holidays</li>
                            <li className="text-brown font-weight-400 font-16 line-height-20"><span className="me-2">{DotSvg}</span>  You don’t need to be home – we’ll leave your delivery in a safe place</li>
                        </ul>
                    </div>
                </div>

                {/* Order Summary */}
                <div className="col-md-4">
                    <div className="card p-3">
                        <h5 className="mb-3 font-weight-500 font-20 line-height-28">Order Summary</h5>
                        <div className="d-flex justify-content-between mb-2">
                            <span className="text-card-body font-weight-400 font-14 line-height-20">Subtotal</span>
                            <p className="text-card-body font-weight-400 font-14 line-height-20 mb-0">£{subtotal.toFixed(2)}</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <span className="text-card-body font-weight-400 font-14 line-height-20">Delivery</span>
                            <p className="text-card-body font-weight-400 font-14 line-height-20 mb-0">£{deliveryCost.toFixed(2)}</p>
                        </div>
                       <div className="border-bottom my-3"></div>
                        <div className="d-flex justify-content-between">
                            <span className="text-brown font-weight-500 font-18 line-height-24">TOTAL</span>
                            <span className="text-brown font-weight-500 font-18 line-height-24">£{total.toFixed(2)}</span>
                        </div>
                        <button className="btn bg-green text-white w-100 mt-3">PROCEED TO CHECKOUT</button>
                        <div className="border-bottom mt-3"></div>
                        <div className="text-center mt-2 py-2">
                            <a className="text-card-body small" style={{ textDecoration: 'none' }} >← Continue Shopping</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;

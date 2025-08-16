import { RightAngleSvg } from '../components/Icons'
import React, { useState } from 'react';


const orders = [
    {
        id: 'ORD2345',
        date: 'May 3, 2025',
        status: 'Delivered',
        items: '2 items',
        total: '£52.50',
        statusButton: [
            {
                backgroundColor: 'bg-theme',
                textColor: 'text-success'
            }
        ]
    },
    {
        id: 'ORD2346',
        date: 'May 10, 2025',
        status: 'Processing',
        items: '2 items',
        total: '£52.50',
        statusButton: [
            {
                backgroundColor: 'bg-pink',
                textColor: 'text-gold-color'
            }
        ]
    },
    {
        id: 'ORD2347',
        date: 'May 10, 2025',
        status: 'Upcoming',
        items: '2 items',
        total: '£52.50',
        statusButton: [
            {
                backgroundColor: 'bg-theme',
                textColor: 'text-gold-color'
            }
        ]
    },
    {
        id: 'ORD2348',
        date: 'April 26, 2025',
        status: 'Cancelled',
        items: '1 item',
        total: '£52.50',
        statusButton: [
            {
                backgroundColor: 'bg-pink',
                textColor: 'text-danger'
            }
        ]
    }
];

const Orders = () => {
    const [filter, setFilter] = useState('all');

    const filteredOrders = filter === 'all'
        ? orders
        : orders.filter(order => order.status === filter);

    return (
        <div className="container-fluid bg-theme min-vh-100 d-flex flex-column">
            <div className="container py-4">
                <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
                     <div>
                         <h4 className="text-brown font-weight-700 line-height-40 font-36">Your Orders</h4>
                         <p className="text-card-body font-weight-400 line-height-24 pe-5">Here’s a record of all your recent and upcoming deliveries.</p>
                     </div>
                     <button className="btn bg-wheat text-brown border-color-brown d-none d-md-inline">
                         Back to Dashboard
                     </button>
                 </div>
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-3 gap-2">
                    <div>
                        <label className="me-2">Filter:</label>
                        <select
                            className="form-select d-inline-block w-auto bg-wheat text-brown border-color-brown"
                            onChange={(e) => setFilter(e.target.value)}
                        >
                            <option value="all" className="bg-white text-brown border-color-brown">All Orders</option>
                            <option value="Delivered" className="bg-white text-brown border-color-brown">Delivered</option>
                            <option value="Processing" className="bg-white text-brown border-color-brown">Processing</option>
                            <option value="Upcoming" className="bg-white text-brown border-color-brown">Upcoming</option>
                            <option value="Cancelled" className="bg-white text-brown border-color-brown">Cancelled</option>
                        </select>
                    </div>
                    <button className="btn bg-wheat text-brown border-color-brown">VIEW BY CALENDAR</button>
                </div>

                {/* Desktop Table View */}
                <div className="d-none d-md-block">
                    <table className="orders-table table">
                        <thead>
                            <tr>
                                <th scope="col">Order ID</th>
                                <th scope="col">Delivery Date</th>
                                <th scope="col">Status</th>
                                <th scope="col">Items</th>
                                <th scope="col">Total</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredOrders.map((order, index) => (
                                <tr key={index}>
                                    <td>{order.id}</td>
                                    <td>{order.date}</td>
                                    <td><span className="">{order.status}</span></td>
                                    <td>
                                        <span className={`badge rounded-pill px-2 py-1 ${order.statusButton[0].backgroundColor} ${order.statusButton[0].textColor}`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td>{order.total}</td>
                                    <td>VIEW <span>{RightAngleSvg}</span></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Mobile Card View */}
                <div className="d-block d-md-none">
                    <div className="row row-cols-1 g-3">
                        {filteredOrders.map((order, index) => (
                            <div key={index} className="col">
                                <div key={index} className="col">
                                    <div className="card h-100">
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between align-items-start">
                                                <h6 className='font-weight-500 font-18 line-height-24 text-brown'>{order.id}</h6>
                                                <span className={`badge rounded-pill px-2 py-1 ${order.statusButton[0].backgroundColor} ${order.statusButton[0].textColor}`}>
                                                    {order.status}
                                                </span>
                                            </div>
                                            <div className='d-flex justify-content-between mb-1'>
                                                <div className='font-weight-400 font-14 line-height-20 text-card-body'>
                                                    Delivery:
                                                </div>
                                                <div className='font-weight-400 font-14 line-height-20 text-brown'>
                                                    {order.date}
                                                </div>
                                            </div>
                                            <div className='d-flex justify-content-between mb-1'>
                                                <div className='font-weight-400 font-14 line-height-20 text-card-body'>
                                                    Items:
                                                </div>
                                                <div className='font-weight-400 font-14 line-height-20 text-brown'>
                                                    {order.items}
                                                </div>
                                            </div>
                                            <div className='d-flex justify-content-between mb-3'>
                                                <div className='font-weight-400 font-14 line-height-20 text-card-body'>
                                                    Total:
                                                </div>
                                                <div className='font-weight-400 font-14 line-height-20 text-brown'>
                                                    {order.total}
                                                </div>
                                            </div>
                                            <button className="btn btn-sm w-100 d-flex align-items-center justify-content-center gap-1">
                                                VIEW DETAILS <span className="icon-center">{RightAngleSvg}</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Orders;
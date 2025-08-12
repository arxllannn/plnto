import React, { useState } from "react";
import { EditButtonSvg, DeleteButtonSvg } from '../../../components/Icons';
import * as XLSX from 'xlsx';
import productImage from '../../../admin-assets/assets/media/stock-600x600/img-14.jpg';
import { Link } from "react-router-dom";


const ORDERS = [
    {
        name: "Sant Outstanding",
        email: "bprow@bnc.cc",
        role: "manager",
        avatar: productImage,
        amount: "$2,000",
        paymentStatus: "Paid",
        quantity: "2",
        size: "500Ml, 1L",
        status: "Pending",
        oneTimePurchased: "Yes",
        subscription: "No",
        subscriptionStatus: "Active",
        subscriptionDate: "2022-05-01",
        statusColor: "primary"
    },

    ...Array(12).fill().map((_, i) => ({
        name: "Sant Outstanding",
        email: "bprow@bnc.cc",
        role: "manager",
        avatar: productImage,
        amount: "$2,000",
        paymentStatus: "Paid",
        quantity: "2",
        size: "500Ml, 1L",
        status: "Pending",
        oneTimePurchased: "Yes",
        subscription: "No",
        subscriptionStatus: "Active",
        subscriptionDate: "2022-05-01",
        statusColor: "primary"
    })),
];

const ITEMS_PER_PAGE = 10;

const AdminDashboardOrders = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(ORDERS.length / ITEMS_PER_PAGE);
    const paginatedOrders = ORDERS.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const exportToExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(ORDERS);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Orders");
        XLSX.writeFile(workbook, "orders.xlsx");
    };

    return (
        <div className="container pb-4 px-4 pt-0 min-height-80">
            <div className="row">
                <div className="col-xxl-12 mt-5 order-2 order-xxl-1 mb-50">
                    <div className="card card-custom card-stretch gutter-b">
                        <div className="card-header border-0 pt-5">
                            <h3 className="card-title align-items-start flex-column">
                                <span className="card-label font-weight-bolder text-dark">Orders</span>
                                <span className="text-muted mt-3 font-weight-bold font-size-sm">Customer Orders</span>
                            </h3>
                            <div className="card-toolbar">
                                <ul className="nav nav-pills nav-pills-sm nav-dark-75">
                                    <li className="nav-item">
                                        <button onClick={exportToExcel} className="btn btn-info font-weight-bolder font-size-sm mr-3">
                                            Export
                                        </button>
                                    </li>
                                    <li className="nav-item">
                                        <a href="/create-product" className="btn btn-danger font-weight-bolder font-size-sm">
                                            Create
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="card-body pt-3 pb-0">
                            <div className="table-responsive">
                                <table className="table table-borderless table-vertical-center table-hover mb-0">
                                    <thead>
                                        <tr className="border-bottom">
                                            <th>Product Image</th>
                                            <th>User Details</th>
                                            <th className="text-center">Amount</th>
                                            <th className="text-center">Qty & Size</th>
                                            <th className="text-center">One Time / Sub</th>
                                            <th className="text-center">Sub Status</th>
                                            <th className="text-center">Status</th>
                                            <th className="text-right">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {paginatedOrders.map((order, index) => (
                                            <tr className="border-bottom" key={index}>
                                                <td>
                                                    <div className="symbol symbol-50 symbol-light mr-1">
                                                        <span className="symbol-label">
                                                            <img src={order.avatar} className="h-50 align-self-center" alt="avatar" />
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="text-dark-75 font-weight-bolder mb-1 font-size-lg">
                                                        {order.name}
                                                    </span>
                                                    <div>
                                                        <p className="text-muted font-weight-bold mb-0" href="#">
                                                            {order.email}
                                                        </p>
                                                    </div>
                                                </td>
                                                <td className="text-center">
                                                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">{order.amount}</span>
                                                    <span className="text-muted font-weight-bold">{order.paymentStatus}</span>
                                                </td>
                                                <td className="text-center">
                                                    <span className="d-block font-weight-bold">{order.quantity}</span>
                                                    <span className="text-muted font-weight-500">{order.size}</span>
                                                </td>
                                                <td className="text-center">
                                                    <span className="d-block font-weight-bold">{order.oneTimePurchased}</span>
                                                    <span className="text-muted font-weight-500">{order.subscription}</span>
                                                </td>
                                                <td className="text-center">
                                                    <span className="d-block font-weight-bold">{order.subscriptionStatus}</span>
                                                    <span className="text-muted font-weight-500">{order.subscriptionDate}</span>
                                                </td>
                                                <td className="text-center">
                                                    <span className={`label label-lg label-light-${order.statusColor} label-inline`}>
                                                        {order.status}
                                                    </span>
                                                </td>
                                                <td className="text-right pr-2">
                                                    <Link to={`/admin/order-details`} className="btn btn-icon btn-light btn-hover-primary btn-sm mx-1">
                                                        <i className="flaticon-visible icon-lg text-warning"></i>
                                                    </Link>
                                                    <Link to={`/admin/order-update`} className="btn btn-icon btn-light btn-hover-primary btn-sm mx-1">
                                                        <span className="svg-icon svg-icon-md svg-icon-primary">
                                                            {EditButtonSvg}
                                                        </span>
                                                    </Link>
                                                    <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm mx-1">
                                                        <span className="svg-icon svg-icon-md svg-icon-danger">
                                                            {DeleteButtonSvg}
                                                        </span>
                                                    </a>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center my-5">
                                <div className="text-muted font-weight-bold mb-3 mb-sm-0">
                                    Showing {paginatedOrders.length} of {ORDERS.length} entries
                                </div>
                                {totalPages > 1 && (
                                    <div>
                                        <button
                                            className="btn btn-sm btn-light mx-1"
                                            disabled={currentPage === 1}
                                            onClick={() => handlePageChange(currentPage - 1)}
                                        >
                                            Prev
                                        </button>
                                        <span className="font-weight-bold mx-2">
                                            {currentPage} / {totalPages}
                                        </span>
                                        <button
                                            className="btn btn-sm btn-light mx-1"
                                            disabled={currentPage === totalPages}
                                            onClick={() => handlePageChange(currentPage + 1)}
                                        >
                                            Next
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboardOrders;
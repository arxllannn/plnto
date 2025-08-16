import React, { useState } from "react";
import { Link } from "react-router-dom";
import { EditButtonSvg, DeleteButtonSvg, DashboardTotalSalesSvg,DashboardMonthlySalesSvg, DashboardWeeklySalesSvg, DashboardItemsOrderSvg, DashboardContactSvg, DashboardProductSvg , DashboardUserAppSvg } from '../../components/Icons';
import productImage from '../../admin-assets/assets/media/stock-600x600/img-14.jpg';

const USERS = [
    {
        name: "Sant Outstanding",
        email: "bprow@bnc.cc",
        role: "manager",
        avatar: productImage,
        registrationDate: "2025-05-01",
        status: "active",
        statusColor: "primary"
    },

    ...Array(12).fill().map((_, i) => ({
        name: `Admin User ${i + 1}`,
        email: `admin${i + 1}@site.com`,
        role: "admin",
        avatar: productImage,
        registrationDate: "2025-05-01",
        status: "active",
        statusColor: "warning"
    })),
];

const ITEMS_PER_PAGE = 5;


const AdminDashboard = () => {


    const [role, setRole] = useState("admin");
    const [currentPage, setCurrentPage] = useState(1);

    const filteredUsers = USERS.filter(user => user.role === role);
    const totalPages = Math.ceil(filteredUsers.length / ITEMS_PER_PAGE);
    const paginatedUsers = filteredUsers.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };


    return (
        <div className="container pb-4 px-4 pt-0 min-height-80">
            <div className="p-4">
                <div className="row bg-white rounded px-4 pt-5">
                    {/* Total Sales  */}
                    <div className="col-md-4 col-xl-4 py-3">
                        <div className="bg-light-info d-flex justify-content-between px-4 py-5 rounded-xl h-100">
                            <div>
                                <span className="svg-icon svg-icon-3x svg-icon-info d-block mb-3">
                                    {DashboardTotalSalesSvg}
                                </span>
                                <a href="#" className="text-info font-weight-bold font-size-h6">Total Sales</a>
                            </div>
                            <div className="d-flex flex-column text-right">
                                <span className="text-info font-weight-bolder font-size-h3">$5000</span>
                            </div>
                        </div>
                    </div>

                    {/* Monthly Sales */}
                    <div className="col-md-4 col-xl-4 py-3">
                        <div className="bg-light-danger d-flex justify-content-between px-4 py-5 rounded-xl h-100">
                            <div>
                                <span className="svg-icon svg-icon-3x svg-icon-danger d-block mb-3">
                                    {DashboardMonthlySalesSvg}
                                </span>
                                <a href="#" className="text-danger font-weight-bold font-size-h6">Monthly Sales</a>
                            </div>
                            <div class="d-flex flex-column text-right">
                                <span class="text-danger font-weight-bolder font-size-h3">$1000</span>
                            </div>
                        </div>
                    </div>

                    {/* Weekly Sales */}
                    <div className="col-md-4 col-xl-4 py-3">
                        <div className="bg-light-warning d-flex justify-content-between px-4 py-5 rounded-xl h-100">
                            <div>
                                <span className="svg-icon svg-icon-3x svg-icon-warning d-block mb-3">
                                   {DashboardWeeklySalesSvg}
                                </span>
                                <a href="#" className="text-warning font-weight-bold font-size-h6">Weekly Sales</a>
                            </div>
                            <div className="d-flex flex-column text-right">
                                <span className="text-warning font-weight-bolder font-size-h3">$740</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row bg-white rounded px-4">
                    {/* Products */}
                    <div className="col-md-4 col-xl-4 py-3">
                        <div className="bg-light-primary d-flex justify-content-between px-4 py-5 rounded-xl h-100">
                            <div>
                                <span className="svg-icon svg-icon-3x svg-icon-primary d-block mb-3">
                                    {DashboardProductSvg}
                                </span>
                                <a href="#" className="text-primary font-weight-bold font-size-h6">Products</a>
                            </div>
                            <div className="d-flex flex-column text-right">
                                <span className="text-primary font-weight-bolder font-size-h3">140</span>
                            </div>
                        </div>
                    </div>

                    {/* Item Orders */}
                    <div className="col-md-4 col-xl-4 py-3">
                        <div className="bg-light-secondary d-flex justify-content-between px-4 py-5 rounded-xl h-100">
                            <div>
                                <span class="svg-icon svg-icon-3x svg-icon-dark-50 d-block mb-3">
                                    {DashboardItemsOrderSvg}
                                </span>
                                <a href="#" className="text-dark-75 font-weight-bold font-size-h6">Item Orders</a>
                            </div>
                            <div className="d-flex flex-column text-right">
                                <span className="text-dark-75 font-weight-bolder font-size-h3">120</span>
                            </div>
                        </div>
                    </div>
                    {/* User Contacts */}
                    <div className="col-md-4 col-xl-4 py-3">
                        <div className="bg-light-info d-flex justify-content-between px-4 py-5 rounded-xl h-100">
                            <div>
                                <span className="svg-icon svg-icon-3x svg-icon-info d-block mb-3">
                                    {DashboardContactSvg}
                                </span>
                                <a href="#" className="text-info font-weight-bold font-size-h6">User Contacts</a>
                            </div>
                            <div className="d-flex flex-column text-right">
                                <span className="text-info font-weight-bolder font-size-h3">33</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row bg-white rounded px-4 pb-5">
                    {/* System Users */}
                    <div className="col-md-6 col-xl-6 py-3">
                        <div className="bg-light-warning d-flex justify-content-between px-4 py-5 rounded-xl h-100">
                            <div>
                                <span className="d-block mb-3">
                                    <i className="fas fa-user-cog icon-3x text-warning"></i>
                                </span>
                                <a href="#" className="text-warning font-weight-bold font-size-h6">System Users</a>
                            </div>
                            <div className="d-flex flex-column text-right">
                                <span className="text-warning font-weight-bolder font-size-h3">40</span>
                            </div>
                        </div>
                    </div>

                    {/* User */}
                    <div className="col-md-6 col-xl-6 py-3">
                        <div className="bg-light-success d-flex justify-content-between px-4 py-5 rounded-xl h-100">
                            <div>
                                <span className="svg-icon svg-icon-3x svg-icon-success d-block mb-3">
                                    {DashboardUserAppSvg}
                                </span>
                                <a href="#" className="text-success font-weight-bold font-size-h6">Users</a>
                            </div>
                            <div className="d-flex flex-column text-right">
                                <span className="text-success font-weight-bolder font-size-h3">33</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-xxl-12 mt-5 order-2 order-xxl-1">
                    <div className="card card-custom card-stretch gutter-b">
                        <div className="card-header border-0 pt-5">
                            <h3 className="card-title align-items-start flex-column">
                                <span className="card-label font-weight-bolder text-dark">Users</span>
                                <span className="text-muted mt-3 font-weight-bold font-size-sm">System Users</span>
                            </h3>
                            <div className="d-flex align-items-center">
                                <select
                                    className="form-control mr-4"
                                    value={role}
                                    onChange={(e) => {
                                        setRole(e.target.value);
                                        setCurrentPage(1);
                                    }}
                                >
                                    <option value="admin">Admins</option>
                                    <option value="manager">Managers</option>
                                </select>
                            </div>
                        </div>
                        <div className="card-body pt-3 pb-0">
                            {/* table */}
                            <div className="table-responsive">
                                <table className="table table-borderless table-vertical-center">
                                    <thead>
                                        <tr className="border-bottom">
                                            <th style={{ width: '50px' }}></th>
                                            <th style={{ minWidth: '200px' }}>User</th>
                                            <th style={{ minWidth: '100px' }}>Role</th>
                                            <th style={{ minWidth: '125px' }}>Registration Date</th>
                                            <th style={{ minWidth: '110px' }}>Status</th>
                                            <th style={{ minWidth: '150px' }} className="text-right">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {paginatedUsers.map((user, index) => (
                                            <tr className="border-bottom" key={index}>
                                                <td className="pl-0 py-4">
                                                    <div className="symbol symbol-50 symbol-light mr-1">
                                                        <span className="symbol-label">
                                                            <img src={user.avatar} className="h-50 align-self-center" alt="" />
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="pl-0">
                                                    <a href="#" className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg">{user.name}</a>
                                                    <div>
                                                        <a className="text-muted font-weight-bold text-hover-primary" href="#">{user.email}</a>
                                                    </div>
                                                </td>
                                                <td className="text-start">
                                                    <span className="text-muted font-weight-bolder d-block font-size-lg">{user.role}</span>
                                                </td>
                                                <td className="text-start">
                                                    <span className="text-muted font-weight-500">{user.registrationDate}</span>
                                                </td>
                                                <td className="text-start">
                                                    <span className={`label label-lg label-light-${user.statusColor} label-inline`}>{user.status}</span>
                                                </td>
                                                <td className="text-right pr-0">
                                                    <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm mx-1">
                                                        <span className="svg-icon svg-icon-md svg-icon-primary">
                                                            {EditButtonSvg}
                                                        </span>
                                                    </a>
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
                                {/* table pagination  */}
                                <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center my-5">
                                    <div className="text-muted font-weight-bold mb-3 mb-sm-0">
                                        Showing {paginatedUsers.length} of {filteredUsers.length} entries
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
                                            <span className="font-weight-bold mx-2">{currentPage} / {totalPages}</span>
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
        </div>
    );
};

export default AdminDashboard;
import React, { useState } from "react";
import { EditButtonSvg, DeleteButtonSvg } from '../../../components/Icons';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import productImage from '../../../admin-assets/assets/media/stock-600x600/img-14.jpg';
import { Link } from "react-router-dom";

const USERS = [
    {
        name: "Sant Outstanding",
        email: "bprow@bnc.cc",
        avatar: productImage,
        registrationDate: "2025-05-01",
        status: "Active",
        statusColor: "primary"
    },
    ...Array(12).fill().map((_, i) => ({
        name: `Admin User ${i + 1}`,
        email: `admin${i + 1}@site.com`,
        avatar: productImage,
        registrationDate: "2025-05-01",
        status: "Active",
        statusColor: "warning"
    })),
];

const ITEMS_PER_PAGE = 5;

const DashboardUsers = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(USERS.length / ITEMS_PER_PAGE);
    const paginatedUsers = USERS.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const exportToExcel = () => {
        const data = paginatedUsers.map(user => ({
            Name: user.name,
            Email: user.email,
            RegistrationDate: user.registrationDate,
            Status: user.status
        }));

        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Users");

        const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
        const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
        saveAs(blob, "Users.xlsx");
    };

    return (
        <div className="container pb-4 px-4 pt-0 min-height-80">
            <div className="row">
                <div className="col-xxl-12 mt-5 order-2 order-xxl-1">
                    <div className="card card-custom card-stretch gutter-b">
                        <div className="card-header border-0 pt-5 d-flex justify-content-between align-items-center">
                            <div>
                                <h3 className="card-title align-items-start flex-column">
                                    <span className="card-label font-weight-bolder text-dark">Users</span>
                                    <span className="text-muted mt-3 font-weight-bold font-size-sm">Website Users</span>
                                </h3>
                            </div>
                            <div className="d-flex align-items-center">
                                <button onClick={exportToExcel} className="btn btn-info btn-sm mr-2">Export</button>
                                <a href="/create-product" className="btn btn-danger btn-sm">Create</a>
                            </div>
                        </div>
                        <div className="card-body pt-3 pb-0">
                            <div className="table-responsive">
                                <table className="table table-borderless table-vertical-center">
                                    <thead>
                                        <tr className="border-bottom">
                                            <th style={{ width: '50px' }}></th>
                                            <th style={{ minWidth: '200px' }}>User</th>
                                            <th style={{ minWidth: '125px' }}>Registration Date</th>
                                            <th style={{ minWidth: '110px' }}>Status</th>
                                            <th style={{ minWidth: '150px' }} className="text-right">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {paginatedUsers.map((user, index) => (
                                            <tr className="border-bottom" key={index}>
                                                <td>
                                                    <div className="symbol symbol-50 symbol-light mr-1">
                                                        <span className="symbol-label">
                                                            <img src={user.avatar} className="h-50 align-self-center" alt="" />
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="#" className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg">{user.name}</a>
                                                    <div>
                                                        <a className="text-muted font-weight-bold text-hover-primary" href="#">{user.email}</a>
                                                    </div>
                                                </td>
                                                <td className="text-start">
                                                    <span className="text-muted font-weight-500">{user.registrationDate}</span>
                                                </td>
                                                <td className="text-start">
                                                    <span className={`label label-lg label-light-${user.statusColor} label-inline`}>{user.status}</span>
                                                </td>
                                                <td className="text-right pr-0">
                                                    <Link to={`/admin/system-user-details`} className="btn btn-icon btn-light btn-hover-primary btn-sm mx-1">
                                                        <i className="flaticon-visible icon-lg text-warning"></i>
                                                    </Link>
                                                    <Link to={`/admin/system-user-update`} className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3">
                                                        <span className="svg-icon svg-icon-md svg-icon-primary">{EditButtonSvg}</span>
                                                    </Link>
                                                    <Link className="btn btn-icon btn-light btn-hover-primary btn-sm">
                                                        <span className="svg-icon svg-icon-md svg-icon-danger">{DeleteButtonSvg}</span>
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center mb-5 mt-2">
                                <div className="text-muted font-weight-bold mb-3 mb-sm-0">
                                    Showing {paginatedUsers.length} of {USERS.length} entries
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
    );
};

export default DashboardUsers;

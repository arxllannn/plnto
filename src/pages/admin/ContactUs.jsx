import React, { useState } from "react";
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

const CONTACTUSES = [
    {
        name: "Sant Outstanding",
        email: "bprow@bnc.cc",
        phone: "1234567890",
        message: "this is user message",
    },
    ...Array(12).fill().map((_, i) => ({
        name: `Customer ${i + 1}`,
        email: `customer${i + 1}@site.com`,
        phone: "1234567890",
        message: "this is user message  this is user message  this is user message  this is user message  this is user message  this is user message  this is user message ",
    })),
];

const ITEMS_PER_PAGE = 5;

const AdminContactUs = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(CONTACTUSES.length / ITEMS_PER_PAGE);
    const paginatedUsers = CONTACTUSES.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );


    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const exportToExcel = () => {
        const data = CONTACTUSES.map(user => ({
            Name: user.name,
            Email: user.email,
            Phone: user.phone,
            Message: user.message
        }));

        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "ContactUs");

        const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
        const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
        saveAs(blob, "ContactUs.xlsx");
    };

    return (
        <div className="container pb-4 px-4 pt-0 min-height-80">
            <div className="row">
                <div className="col-xxl-12 mt-5 order-2 order-xxl-1">
                    <div className="card card-custom card-stretch gutter-b">
                        <div className="card-header border-0 pt-5 d-flex justify-content-between align-items-center">
                            <div>
                                <h3 className="card-title align-items-start flex-column">
                                    <span className="card-label font-weight-bolder text-dark">Contact List</span>
                                    <span className="text-muted mt-3 font-weight-bold font-size-sm">Users Queries</span>
                                </h3>
                            </div>
                            <div className="d-flex align-items-center">
                                <button onClick={exportToExcel} className="btn btn-info btn-sm mr-2">Export</button>
                            </div>
                        </div>
                        <div className="card-body pt-3 pb-0">
                            <div className="table-responsive">
                                <table className="table table-borderless table-vertical-center">
                                    <thead>
                                        <tr className="border-bottom">
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Phone</th>
                                            <th className="text-start" style={{ minWidth: '200px' }}>Message</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {paginatedUsers.map((user, index) => (
                                            <tr className="border-bottom" key={index}>
                                                <td>
                                                    <div className="symbol symbol-50 symbol-light mr-1">
                                                        <a href="#" className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg">
                                                            {user.name}
                                                        </a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <a className="text-muted font-weight-bold text-hover-primary" href="#">
                                                            {user.email}
                                                        </a>
                                                    </div>
                                                </td>
                                                <td className="text-start">
                                                    <span className="text-muted font-weight-bolder d-block font-size-lg">
                                                        {user.phone}
                                                    </span>
                                                </td>
                                                <td className="text-start">
                                                    <span className="text-muted font-weight-500 d-inline-block w-100">
                                                        {user.message}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center my-5">
                                <div className="text-muted font-weight-bold mb-3 mb-sm-0">
                                    Showing {paginatedUsers.length} of {CONTACTUSES.length} entries
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

export default AdminContactUs;
import React, { useState } from "react";
import { EditButtonSvg, DeleteButtonSvg } from '../../../components/Icons';
import * as XLSX from 'xlsx';
import productImage from '../../../admin-assets/assets/media/stock-600x600/img-14.jpg';
import { Link } from "react-router-dom";

const PRODUCTS = [
    {
        avatar: productImage,
        name: "Product Name",
        code: "32205642",
        size: "500Ml, 1L",
        price: "$1200",
        description: "This is a long product description to demonstrate how word wrapping works within the table layout for better readability.",
        status: "Active",
        statusColor: "primary",
        productCreated: "2022-05-01",
    },
    ...Array(12).fill().map(() => ({
        avatar: productImage,
        name: "Product Name",
        code: "32205642",
        size: "500Ml, 1L",
        price: "$1200",
        description: "This is a long product description to demonstrate how word wrapping works within the table layout for better readability.",
        status: "Active",
        statusColor: "primary",
        productCreated: "2022-05-01",
    })),
];

const ITEMS_PER_PAGE = 10;

const AdminDashboardProducts = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(PRODUCTS.length / ITEMS_PER_PAGE);
    const paginatedProducts = PRODUCTS.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };


    const exportToExcel = () => {
        const exportData = PRODUCTS.map(({ statusColor, ...rest }) => rest);
        const worksheet = XLSX.utils.json_to_sheet(exportData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Products");
        XLSX.writeFile(workbook, "Products.xlsx");
    };


    return (
        <div className="container pb-4 px-4 pt-0 min-height-80">
            <div className="row">
                <div className="col-xxl-12 mt-5 order-2 order-xxl-1 mb-50">
                    <div className="card card-custom card-stretch gutter-b">
                        <div className="card-header border-0 pt-5">
                            <h3 className="card-title align-items-start flex-column">
                                <span className="card-label font-weight-bolder text-dark">Products</span>
                                <span className="text-muted mt-3 font-weight-bold font-size-sm">System Products</span>
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
                            <div className="table-responsive w-100" style={{ overflowX: 'auto' }}>
                                <table className="table table-borderless table-vertical-center table-hover mb-0">
                                    <thead>
                                        <tr className="border-bottom">
                                            <th>Product Image</th>
                                            <th>Name</th>
                                            <th className="text-center d-none d-sm-table-cell">Product Code</th>
                                            <th className="text-center d-none d-sm-table-cell">Size</th>
                                            <th className="text-center">Price</th>
                                            <th className="text-center d-none d-md-table-cell" style={{ minWidth: '200px' }}>Description</th>
                                            <th className="text-center d-none d-md-table-cell">Status</th>
                                            <th className="text-center d-none d-lg-table-cell">Date</th>
                                            <th className="text-right">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {paginatedProducts.map((product, index) => (
                                            <tr className="border-bottom" key={index}>
                                                <td>
                                                    <div className="symbol symbol-50 symbol-light mr-1">
                                                        <span className="symbol-label">
                                                            <img src={product.avatar} className="h-50 align-self-center" alt="avatar" />
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="text-dark-75 font-weight-bolder mb-1 font-size-lg">
                                                        {product.name}
                                                    </span>
                                                </td>
                                                <td className="text-center">
                                                    <span className="font-weight-bold">{product.code}</span>
                                                </td>
                                                <td className="text-center d-none d-sm-table-cell">
                                                    <span className="text-muted font-weight-500">{product.size}</span>
                                                </td>
                                                <td className="text-center">
                                                    <span className="font-weight-bold">{product.price}</span>
                                                </td>
                                                <td
                                                    className="text-center d-none d-md-table-cell"
                                                    style={{
                                                        maxWidth: '300px',
                                                        overflow: 'hidden',
                                                        textOverflow: 'ellipsis',
                                                        display: '-webkit-box',
                                                        WebkitLineClamp: 2,
                                                        WebkitBoxOrient: 'vertical'
                                                    }}
                                                    title={product.description}
                                                >
                                                    {(() => {
                                                        const words = product.description.trim().split(/\s+/);
                                                        const isLong = words.length > 10;
                                                        const shortText = words.slice(0, 10).join(' ');
                                                        return isLong ? shortText + '...' : product.description;
                                                    })()}
                                                </td>
                                                <td className="text-center d-none d-md-table-cell">
                                                    <span className={`label label-lg label-light-${product.statusColor} label-inline`}>
                                                        {product.status}
                                                    </span>
                                                </td>
                                                <td className="text-center d-none d-lg-table-cell">{product.productCreated}</td>
                                                <td className="text-right pr-2">
                                                    <Link to={`/admin/product-details`} className="btn btn-icon btn-light btn-hover-primary btn-sm mx-1">
                                                        <i className="flaticon-visible icon-lg text-warning"></i>
                                                    </Link>
                                                    <Link to={`/admin/product-update`} className="btn btn-icon btn-light btn-hover-primary btn-sm mx-1">
                                                        <span className="svg-icon svg-icon-md svg-icon-primary">
                                                            {EditButtonSvg}
                                                        </span>
                                                    </Link>
                                                    <Link to={`/admin/product-delete`} className="btn mt-1 btn-icon btn-light btn-hover-primary btn-sm mx-1">
                                                        <span className="svg-icon svg-icon-md svg-icon-danger">
                                                            {DeleteButtonSvg}
                                                        </span>
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center my-5">
                                <div className="text-muted font-weight-bold mb-3 mb-sm-0">
                                    Showing {paginatedProducts.length} of {PRODUCTS.length} entries
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

export default AdminDashboardProducts;
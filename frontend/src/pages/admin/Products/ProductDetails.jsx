import React, { useState } from "react";
import defaultProductImage from "../../../admin-assets/assets/media/stock-600x600/img-14.jpg";
import { Link } from "react-router-dom";
import "../../../admin-assets/assets/css/admin.css";

const DashboardProductDetails = () => {
    const [product] = useState({
        image: defaultProductImage,
        name: "Product Name",
        code: "050450",
        sizes: ["500Ml", "1L"],
        price: "$1200",
        description: "This is a long product description to demonstrate how word wrapping works within the table layout for better readability.",
        status: "Active",
        productCreated: "2022-05-01",
    });

    return (
        <div className="container py-5 px-3 min-vh-100">
            <div className="row justify-content-center">
                <div className="col-lg-8 mb-4">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h3 className="card-title mb-4">Product Details</h3>

                            {/* Product Image */}
                            <div className="mb-3">
                                <label>Product Image:</label>
                                <div className="product-image-wrapper">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="product-image rounded"
                                        style={{ cursor: "default", width: "60px" }}
                                    />
                                </div>
                            </div>

                            {/* Product Name */}
                            <div className="mb-3">
                                <label className="fw-semibold">Name:</label>
                                <div className="p-2 bg-light rounded">{product.name}</div>
                            </div>

                            <div className="mb-3">
                                <label className="fw-semibold">Product Code:</label>
                                <div className="p-2 bg-light rounded">{product.code}</div>
                            </div>

                            {/* Sizes */}
                            <div className="mb-3">
                                <label className="fw-semibold">Sizes:</label>
                                <div>
                                    {product.sizes.map((size, idx) => (
                                        <span
                                            key={idx}
                                            className="label label-danger label-inline mr-2"
                                            style={{ fontSize: "1rem" }}
                                        >
                                            {size}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Price */}
                            <div className="mb-3">
                                <label className="fw-semibold">Price:</label>
                                <div className="p-2 bg-light rounded">{product.price}</div>
                            </div>

                            {/* Product Created */}
                            <div className="mb-3">
                                <label className="fw-semibold">Product Created:</label>
                                <div className="p-2 bg-light rounded">{product.productCreated}</div>
                            </div>

                            {/* Status */}
                            <div className="mb-3">
                                <label className="fw-semibold">Status:</label>
                                <div className="p-2 bg-light rounded">{product.status}</div>
                            </div>

                            {/* Description */}
                            <div className="mb-4">
                                <label className="fw-semibold">Description:</label>
                                <div className="p-3 bg-light rounded" style={{ whiteSpace: "pre-wrap" }}>
                                    {product.description}
                                </div>
                            </div>

                            {/* Back Button */}
                            <div className="d-flex justify-content-end pt-3">
                                <Link to="/admin/products" className="btn btn-secondary">
                                    Back to Products
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardProductDetails;

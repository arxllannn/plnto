import React, { useState } from "react";
import productImage from "../../../admin-assets/assets/media/stock-600x600/img-14.jpg";

const OrderUpdate = () => {
    const ORDER = [
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
            statusColor: "primary",
            productName: "Lemon Water",
            image: productImage,
        },
    ];

    const [formData, setFormData] = useState(ORDER[0]);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
            setFormData({ ...formData, image: imageUrl });
        }
    };

    const removeSelectedImage = () => {
        setSelectedImage(null);
        setFormData({ ...formData, image: productImage });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Updated order data:", formData);
    };

    return (
        <div className="container py-5 px-3 min-vh-100">
            <div className="row justify-content-center">
                <div className="col-lg-10 mb-50">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <h3 className="card-title mb-4">Update Order</h3>

                                {/* Product image and name */}
                                <div className="row mb-3">
                                    <div className="col-md-6 mb-3 d-flex flex-column">
                                        <label>Product Image:</label>
                                        <div
                                            style={{
                                                position: "relative",
                                                display: "inline-block",
                                                cursor: "pointer",
                                                width: "60px",
                                            }}
                                            onClick={() => document.getElementById("imageInput").click()}
                                        >
                                            <img
                                                src={formData.image}
                                                className="rounded"
                                                style={{
                                                    width: "60px",
                                                    height: "60px",
                                                    objectFit: "cover",
                                                    border: "1px solid #ddd"
                                                }}
                                                alt="Product"
                                            />
                                            {selectedImage && (
                                                <button
                                                    type="button"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        removeSelectedImage();
                                                    }}
                                                    style={{
                                                        position: "absolute",
                                                        top: "-10px",
                                                        right: "-10px",
                                                        background: "#dc3545",
                                                        color: "white",
                                                        border: "none",
                                                        borderRadius: "50%",
                                                        width: "20px",
                                                        height: "20px",
                                                        fontSize: "12px",
                                                        cursor: "pointer"
                                                    }}
                                                >
                                                    ×
                                                </button>
                                            )}
                                        </div>
                                        <input
                                            type="file"
                                            id="imageInput"
                                            accept="image/*"
                                            style={{ display: "none" }}
                                            onChange={handleImageChange}
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label>Product Name:</label>
                                        <input
                                            type="text"
                                            name="productName"
                                            className="form-control"
                                            value={formData.productName}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                {/* Name and Email */}
                                <div className="row mb-3">
                                    <div className="col-md-6 mb-3">
                                        <label>Customer Name:</label>
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label>Email Address:</label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                {/* Amount & Payment Status */}
                                <div className="row mb-3">
                                    <div className="col-md-6 mb-3">
                                        <label>Amount:</label>
                                        <input
                                            type="text"
                                            name="amount"
                                            className="form-control"
                                            value={formData.amount}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label>Payment Status:</label>
                                        <select
                                            name="paymentStatus"
                                            className="form-control"
                                            value={formData.paymentStatus}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select</option>
                                            <option value="Paid">Paid</option>
                                            <option value="Unpaid">Unpaid</option>
                                            <option value="Failed">Failed</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Quantity & Order Status */}
                                <div className="row mb-3">
                                    <div className="col-md-6 mb-3">
                                        <label>Quantity:</label>
                                        <input
                                            type="text"
                                            name="quantity"
                                            className="form-control"
                                            value={formData.quantity}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label>Status:</label>
                                        <select
                                            name="status"
                                            className="form-control"
                                            value={formData.status}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select</option>
                                            <option value="Pending">Pending</option>
                                            <option value="Processing">Processing</option>
                                            <option value="Shipped">Shipped</option>
                                            <option value="Delivered">Delivered</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Size, One-Time, Subscription */}
                                <div className="row mb-3">
                                    <div className="col-md-4 mb-3">
                                        <label>Size:</label>
                                        <input
                                            type="text"
                                            name="size"
                                            className="form-control"
                                            value={formData.size}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <label>One-Time Purchase:</label>
                                        <select
                                            name="oneTimePurchased"
                                            className="form-control"
                                            value={formData.oneTimePurchased}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                        </select>
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <label>Subscription:</label>
                                        <select
                                            name="subscription"
                                            className="form-control"
                                            value={formData.subscription}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Subscription Date */}
                                <div className="row mb-4">
                                    <div className="col-md-6 mb-3">
                                        <label>Subscription Date:</label>
                                        <input
                                            type="date"
                                            name="subscriptionDate"
                                            className="form-control"
                                            value={formData.subscriptionDate}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                {/* Buttons */}
                                <div className="d-flex justify-content-end">
                                    <button type="submit" className="btn btn-primary mr-2">
                                        Update
                                    </button>
                                    <button type="reset" className="btn btn-secondary">
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderUpdate;

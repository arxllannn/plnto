import React, { useState, useRef } from "react";
import defaultProductImage from "../../../admin-assets/assets/media/stock-600x600/img-14.jpg";
import { Link } from "react-router-dom";
import "../../../admin-assets/assets/css/admin.css";

const DashboardProductUpdate = () => {
    const [formData, setFormData] = useState({
        image: defaultProductImage,
        name: "Product Name",
        code: "386239",
        sizes: ["500Ml", "1L"],
        price: "$1200",
        description: "This is a long product description to demonstrate how word wrapping works within the table layout for better readability.",
        status: "Active",
        productCreated: "2022-05-01",
    });

    const fileInputRef = useRef(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setFormData({ ...formData, image: imageUrl });
        }
    };

    const handleImageClick = () => {
        fileInputRef.current && fileInputRef.current.click();
    };

    const handleRemoveImage = (e) => {
        e.stopPropagation();
        setFormData({ ...formData, image: defaultProductImage });
        if (fileInputRef.current) {
            fileInputRef.current.value = null;
        }
    };

    const handleSizeChange = (index, value) => {
        const updatedSizes = [...formData.sizes];
        updatedSizes[index] = value;
        setFormData({ ...formData, sizes: updatedSizes });
    };

    const handleAddSize = () => {
        setFormData({ ...formData, sizes: [...formData.sizes, ""] });
    };

    const handleRemoveSize = (index) => {
        const updatedSizes = [...formData.sizes];
        updatedSizes.splice(index, 1);
        setFormData({ ...formData, sizes: updatedSizes });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Updated Product Data:", formData);
    };

    const isDefaultImage = formData.image === defaultProductImage;

    return (
        <div className="container py-5 px-3 min-vh-100 create-product">
            <div className="row justify-content-center">
                <div className="col-lg-8 mb-4">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h3 className="card-title mb-4">Update Product</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label>Product Image:</label>
                                    <div className="product-image-wrapper" onClick={handleImageClick}>
                                        <img
                                            src={formData.image}
                                            alt="Product"
                                            className="product-image"
                                        />
                                        {!isDefaultImage && (
                                            <button
                                                type="button"
                                                className="remove-image-btn"
                                                onClick={handleRemoveImage}
                                                aria-label="Remove image"
                                            >
                                                &times;
                                            </button>
                                        )}
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleImageChange}
                                            ref={fileInputRef}
                                            className="d-none"
                                        />
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label className="fw-semibold">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control bg-light"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="fw-semibold">Product Code</label>
                                    <input
                                        type="text"
                                        name="productCode"
                                        className="form-control bg-light"
                                        value={formData.code}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="fw-semibold">Sizes</label>
                                    {formData.sizes.map((size, index) => (
                                        <div key={index} className="input-group mb-2">
                                            <input
                                                type="text"
                                                className="form-control bg-light"
                                                value={size}
                                                onChange={(e) => handleSizeChange(index, e.target.value)}
                                                placeholder={`Size ${index + 1}`}
                                            />
                                            <button
                                                type="button"
                                                className="btn btn-outline-danger"
                                                onClick={() => handleRemoveSize(index)}
                                                disabled={formData.sizes.length === 1}
                                            >
                                                &times;
                                            </button>
                                        </div>
                                    ))}
                                    <button type="button" className="btn btn-sm btn-outline-primary mt-2" onClick={handleAddSize}>
                                        + Add Size
                                    </button>
                                </div>

                                <div className="mb-3">
                                    <label className="fw-semibold">Price</label>
                                    <input
                                        type="text"
                                        name="price"
                                        className="form-control bg-light"
                                        value={formData.price}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="fw-semibold">Product Created</label>
                                    <input
                                        type="date"
                                        name="productCreated"
                                        className="form-control bg-light"
                                        value={formData.productCreated}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="fw-semibold">Status</label>
                                    <select
                                        name="status"
                                        className="form-control bg-light"
                                        value={formData.status}
                                        onChange={handleChange}
                                    >
                                        <option value="Active">Active</option>
                                        <option value="Inactive">Inactive</option>
                                    </select>
                                </div>

                                <div className="mb-4">
                                    <label className="fw-semibold">Description</label>
                                    <textarea
                                        name="description"
                                        className="form-control bg-light"
                                        rows="4"
                                        value={formData.description}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="d-flex justify-content-end pt-5">
                                    <button type="submit" className="btn btn-primary mr-2">Update Product</button>
                                    <Link to="/admin/products" className="btn btn-secondary">Cancel</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardProductUpdate;

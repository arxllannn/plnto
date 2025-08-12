import React, { useState, useRef } from "react";
import productImage from '../../../admin-assets/assets/media/stock-600x600/img-14.jpg';
import { Link } from "react-router-dom";
import '../../../admin-assets/assets/css/admin.css';

const DashboardRegisterUsers = () => {
    const [formData, setFormData] = useState({
        avatar: productImage,
        name: "",
        email: "",
        role: "admin",
        registrationDate: new Date().toISOString().split("T")[0],
        status: "Active"
    });

    const fileInputRef = useRef(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setFormData({ ...formData, avatar: imageUrl });
        }
    };

    const handleAvatarClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleRemoveImage = (e) => {
        e.stopPropagation();
        setFormData({ ...formData, avatar: productImage });
        if (fileInputRef.current) {
            fileInputRef.current.value = null;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Registered User Data:", formData);
    };

    const isDefaultImage = formData.avatar === productImage;

    return (
        <div className="container py-5 px-3 min-vh-100 user-register">
            <div className="row justify-content-center">
                <div className="col-lg-8 mb-4">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h3 className="card-title mb-4">Register User</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3 d-flex flex-column">
                                    <label>User Avatar:</label>
                                    <div className="avatar-wrapper" onClick={handleAvatarClick}>
                                        <img
                                            src={formData.avatar}
                                            className="user-avatar"
                                            alt="Avatar"
                                        />
                                        {!isDefaultImage && (
                                            <button
                                                type="button"
                                                className="remove-avatar-btn"
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
                                    <label className="fw-semibold">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control bg-light"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="fw-semibold">Role</label>
                                    <select
                                        name="role"
                                        className="form-control bg-light"
                                        value={formData.role}
                                        onChange={handleChange}
                                    >
                                        <option value="admin">Admin</option>
                                        <option value="manager">Manager</option>
                                        <option value="user">User</option>
                                    </select>
                                </div>

                                <div className="mb-3">
                                    <label className="fw-semibold">Registration Date</label>
                                    <input
                                        type="date"
                                        name="registrationDate"
                                        className="form-control bg-light"
                                        value={formData.registrationDate}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="mb-5">
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

                                <div className="d-flex mt-5 justify-content-end">
                                    <button type="submit" className="btn btn-primary mr-2">Register</button>
                                    <Link to="/admin/users" className="btn btn-secondary">Cancel</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardRegisterUsers;

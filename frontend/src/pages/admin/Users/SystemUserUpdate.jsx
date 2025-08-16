import { useRef, useState } from "react";
import productImage from "../../../admin-assets/assets/media/stock-600x600/img-14.jpg";
import { Link } from "react-router-dom";

const DashboardUserProfile = () => {
    const fileInputRef = useRef(null);
    const [originalAvatar] = useState(productImage);
    const [user, setUser] = useState({
        avatar: productImage,
        name: "Sant Outstanding",
        email: "bprow@bnc.cc",
        role: "Manager",
        status: "Active",
        statusColor: "success",
        registrationDate: "2025-05-01",
    });

    const [tempAvatar, setTempAvatar] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        if (tempAvatar) {
            setUser((prev) => ({ ...prev, avatar: tempAvatar }));
            setTempAvatar(null);
        }
        // Save other user changes here
    };

    const handleImageClick = () => {
        fileInputRef.current.click();
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setTempAvatar(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleRemoveImage = () => {
        setTempAvatar(null);
    };

    const renderInputRow = (label, value, fieldName) => (
        <div className="mb-3">
            <label className="fw-semibold">{label}</label>
            <input
                type="text"
                name={fieldName}
                value={value}
                onChange={handleChange}
                className="form-control"
            />
        </div>
    );

    return (
        <div className="container p-3 min-vh-100 mb-50">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="card shadow-sm">
                        <div className="card-body text-center">
                            <div
                                className="position-relative d-inline-block"
                                style={{ width: "100px", height: "100px" }}
                            >
                                <img
                                    src={tempAvatar || user.avatar}
                                    alt="User Avatar"
                                    onClick={handleImageClick}
                                    className="rounded"
                                    style={{
                                        width: "100px",
                                        height: "100px",
                                        objectFit: "cover",
                                        cursor: "pointer",
                                    }}
                                />

                                {tempAvatar && (
                                    <button
                                        className="btn btn-sm btn-danger p-0"
                                        style={{
                                            position: "absolute",
                                            top: "-8px",
                                            right: "-8px",
                                            width: "24px",
                                            height: "24px",
                                            borderRadius: "50%",
                                            fontSize: "16px",
                                            lineHeight: "1",
                                        }}
                                        onClick={handleRemoveImage}
                                        title="Remove Image"
                                    >
                                        ×
                                    </button>
                                )}
                            </div>

                            <input
                                type="file"
                                accept="image/*"
                                style={{ display: "none" }}
                                ref={fileInputRef}
                                onChange={handleImageChange}
                            />

                            <h4 className="fw-bold mb-0 mt-3">{user.name}</h4>
                            <small className="text-muted text-capitalize">{user.role}</small>
                            <div className={`badge ml-2 bg-${user.statusColor} mt-2`}>{user.status}</div>
                        </div>

                        <hr />

                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    {renderInputRow("Full Name", user.name, "name")}
                                </div>
                                <div className="col-md-6">
                                    {renderInputRow("Email Address", user.email, "email")}
                                </div>
                                <div className="col-md-6">
                                    {renderInputRow("Role", user.role, "role")}
                                </div>
                                <div className="col-md-6">
                                    {renderInputRow("Status", user.status, "status")}
                                </div>
                            </div>

                            {/* Action */}
                            <div className="d-flex justify-content-end mt-4">
                                <Link to={"/admin/system-users"} className="btn btn-light mr-2">
                                    Cancel
                                </Link>
                                <button onClick={handleSave} className="btn btn-success">
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardUserProfile;

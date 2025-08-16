import { useState } from "react";

const DashboardUserChangePassword = () => {
    const [form, setForm] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        if (form.newPassword !== form.confirmPassword) {
            alert("New password and confirm password do not match!");
            return;
        }
    };

    return (
        <div className="container p-3 min-vh-100 mb-50">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h4 className="text-center fw-bold mb-4">Change Password</h4>

                            <div className="mb-3">
                                <label className="fw-semibold">Current Password</label>
                                <input
                                    type="password"
                                    name="currentPassword"
                                    value={form.currentPassword}
                                    onChange={handleChange}
                                    className="form-control"
                                    placeholder="Enter your current password"
                                />
                            </div>

                            <div className="mb-3">
                                <label className="fw-semibold">New Password</label>
                                <input
                                    type="password"
                                    name="newPassword"
                                    value={form.newPassword}
                                    onChange={handleChange}
                                    className="form-control"
                                    placeholder="Enter your new password"
                                />
                            </div>

                            <div className="mb-3">
                                <label className="fw-semibold">Confirm New Password</label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={form.confirmPassword}
                                    onChange={handleChange}
                                    className="form-control"
                                    placeholder="Confirm your new password"
                                />
                            </div>

                            <div className="d-flex justify-content-end mt-4">
                                <button onClick={handleSave} className="btn btn-success">Update Password</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardUserChangePassword;

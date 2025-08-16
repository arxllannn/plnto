import productImage from "../../../admin-assets/assets/media/stock-600x600/img-14.jpg";
import { Link } from "react-router-dom";

const DashboardUserProfileDetails = () => {
    const user = {
        avatar: productImage,
        name: "Sant Outstanding",
        email: "bprow@bnc.cc",
        role: "Manager",
        status: "Active",
        statusColor: "success",
        registrationDate: "2025-05-01",
    };

    const renderDetailRow = (label, value) => (
        <div className="mb-3">
            <label className="fw-semibold d-block">{label}</label>
            <div className="text-muted">{value}</div>
        </div>
    );

    return (
        <div className="container p-3 min-vh-100 mb-50">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="card shadow-sm">
                        <div className="card-body text-center">
                            <img
                                src={user.avatar}
                                alt="User Avatar"
                                className="rounded-circle"
                                style={{
                                    width: "100px",
                                    height: "100px",
                                    objectFit: "cover",
                                }}
                            />
                            <h4 className="fw-bold mb-0 mt-3">{user.name}</h4>
                            <small className="text-muted text-capitalize">{user.role}</small>
                            <div className={`badge ml-2 bg-${user.statusColor} mt-2`}>
                                {user.status}
                            </div>
                        </div>

                        <hr />

                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    {renderDetailRow("Full Name", user.name)}
                                </div>
                                <div className="col-md-6">
                                    {renderDetailRow("Email Address", user.email)}
                                </div>
                                <div className="col-md-6">
                                    {renderDetailRow("Role", user.role)}
                                </div>
                                <div className="col-md-6">
                                    {renderDetailRow("Status", user.status)}
                                </div>
                                <div className="col-md-6">
                                    {renderDetailRow("Registration Date", user.registrationDate)}
                                </div>
                            </div>
                            <div className="d-flex justify-content-end">
                                <Link to="/admin/system-users" className="btn btn-secondary">Back</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardUserProfileDetails;

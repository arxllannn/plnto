import productImage from '../../../admin-assets/assets/media/stock-600x600/img-14.jpg';
import { Link } from 'react-router-dom';


const OrderDetails = () => {
    const order = {
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
    };

    const renderTextRow = (label, value) => (
        <div className="mb-2">
            <label className="fw-semibold">{label}</label>
            <div className="form-control-plaintext border p-2 rounded bg-light">{value}</div>
        </div>
    );

    return (
        <div className="container py-5 px-3 min-vh-100">
            <div className="row justify-content-center">
                <div className="col-lg-10 mb-50">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h3 className="card-title mb-4">Order Details</h3>

                            {/* Product Image and Name */}
                            <div className="row mb-3">
                                <div className="col-md-6 mb-3">
                                    <label>Product Image:</label>
                                    <div>
                                        <img
                                            src={order.image}
                                            className="rounded"
                                            style={{ width: "60px", height: "60px", objectFit: "cover" }}
                                            alt="Product"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    {renderTextRow("Product Name", order.productName)}
                                </div>
                            </div>

                            {/* Name and Email */}
                            <div className="row mb-3">
                                <div className="col-md-6 mb-3">
                                    {renderTextRow("Customer Name", order.name)}
                                </div>
                                <div className="col-md-6 mb-3">
                                    {renderTextRow("Email Address", order.email)}
                                </div>
                            </div>

                            {/* Amount & Payment Status */}
                            <div className="row mb-3">
                                <div className="col-md-6 mb-3">
                                    {renderTextRow("Amount", order.amount)}
                                </div>
                                <div className="col-md-6 mb-3">
                                    {renderTextRow("Payment Status", order.paymentStatus)}
                                </div>
                            </div>

                            {/* Quantity & Order Status */}
                            <div className="row mb-3">
                                <div className="col-md-6 mb-3">
                                    {renderTextRow("Quantity", order.quantity)}
                                </div>
                                <div className="col-md-6 mb-3">
                                    {renderTextRow("Status", order.status)}
                                </div>
                            </div>

                            {/* Size, One-Time, Subscription */}
                            <div className="row mb-3">
                                <div className="col-md-4 mb-3">
                                    {renderTextRow("Size", order.size)}
                                </div>
                                <div className="col-md-4 mb-3">
                                    {renderTextRow("One-Time Purchase", order.oneTimePurchased)}
                                </div>
                                <div className="col-md-4 mb-3">
                                    {renderTextRow("Subscription", order.subscription)}
                                </div>
                            </div>

                            {/* Subscription Date */}
                            <div className="row mb-3">
                                <div className="col-md-6 mb-3">
                                    {renderTextRow("Subscription Date", order.subscriptionDate)}
                                </div>
                            </div>

                            {/* Optional Back Button */}
                            <div className="d-flex justify-content-end">
                                <Link to="/admin/orders" className="btn btn-secondary">Back</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;

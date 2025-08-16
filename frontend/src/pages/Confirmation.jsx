import { CircleTickSvg } from "../components/Icons";
const Confirmation = () => {
    return (
        <div className="confirmation-content bg-theme d-flex flex-column justify-content-center align-items-center p-4">
            <div className="confirmation-content-body">
                <div className="text-center mb-4">
                    <div className="p-3 mb-3">
                        <span>{CircleTickSvg}</span>
                    </div>
                    <h2 className="font-weight-600 font-36 line-height-40 text-brown">Order Confirmed!</h2>
                    <p className="text-brown font-weight-400 font-16 line-height-24">Thank you for your order. We've received your purchase and are getting it ready.<br />
                        A confirmation email has been sent to your registered email address.</p>
                </div>
                <div className="bg-white shadow rounded p-4">
                    <div className="d-flex justify-content-between mb-3">
                        <div className="d-flex flex-column">
                            <h5 className="font-weight-600 font-18 line-height-28 text-brown mb-0">Order #ORD-599319</h5>
                            <small className="text-muted">Placed on 6/5/2025</small>
                        </div>
                        <div className="text-end d-flex flex-column">
                            <h5 className="font-weight-600 font-16 line-height-28 text-brown mb-0">Delivery Date</h5>
                            <small className="text-muted">6/7/2025</small>
                        </div>
                    </div>

                    <hr />

                    <div className="mb-3">
                        <h6 className="font-weight-600 font-16 line-height-28 text-brown mb-0">Order Summary</h6>
                        <div className="d-flex justify-content-between">
                            <span className="my-2 text-brown font-weight-400 font-16 line-height-24">2x Oat Milk</span>
                            <span className="text-brown font-weight-400 font-16 line-height-24">£11.98</span>
                        </div>
                        <div className="d-flex justify-content-between">
                            <span className="text-brown font-weight-400 font-16 line-height-24">1x Almond Milk</span>
                            <span className="text-brown font-weight-400 font-16 line-height-24">£5.49</span>
                        </div>
                    </div>

                    <hr />

                    <div className="d-flex justify-content-between">
                        <span className="text-brown font-weight-400 font-16 line-height-24">Subtotal</span>
                        <span className="text-brown font-weight-400 font-16 line-height-24">£17.47</span>
                    </div>
                    <div className="d-flex justify-content-between">
                        <span className="my-2 text-brown font-weight-400 font-16 line-height-24">Shipping</span>
                        <span className="my-2 text-brown font-weight-400 font-16 line-height-24">£5.00</span>
                    </div>
                    <div className="d-flex justify-content-between fw-bold">
                        <span className="text-brown font-weight-600 font-18 line-height-28">Total</span>
                        <span className="text-brown font-weight-600 font-18 line-height-28">£22.46</span>
                    </div>
                    <hr />
                    <div>
                        <h6 className="text-brown font-weight-600 font-16 line-height-28">Delivery Details</h6>
                        <p className="text-brown font-weight-400 mb-1 font-16 line-height-24">123 Plant St, London, E16 4N</p>
                        <small className="text-gray font-weight-400 font-14 line-height-20">Expected delivery: 6/7/2025</small>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="d-flex gap-2 mt-4 w-100 justify-content-center confirmation-button">
                        <button className="btn bg-green text-white w-25">
                            TRACK ORDER
                        </button>
                        <button className="btn text-brown font-weight-500 w-auto font-16 line-height-20 bg-wheat border border-color-brown">
                            CONTINUE SHOPPING
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Confirmation;
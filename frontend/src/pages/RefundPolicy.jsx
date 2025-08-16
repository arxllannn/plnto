const RefundPolicy = () => {
    return (
        <div className="refund-policy-content py-5 px-3 d-flex justify-content-center">
            <div className="page-content">
                <h4 className="font-weight-600 mb-4 line-height-40  text-brown">Refund Policy</h4>
                <div className="bg-white p-4 rounded shadow-sm">
                    <p className="text-primary-80 font-eight-400 line-height-20 font-14">Last updated: May 5, 2025</p>
                    <h5 className='text-brown mb-0 font-eight-400 line-height-24 font-16 pe-5'>
                        At Plnto, we take pride in delivering the freshest, highest-quality juices. If you are not completely satisfied with your order, please review our refund policy below:
                    </h5>

                    <p className="text-primary-80 mb-0 font-eight-400 line-height-24 font-16">Order Issues or Damaged Products</p>
                    <p className="text-primary-80 mb-0 font-eight-400 line-height-24 font-16 pe-5">
                        Since our drinks are freshly made, we do not accept returns. However, if you believe there is a freshness issue, please reach out within 24 hours of receiving your order so we can resolve it.
                    </p>
                    <p className="text-brown mb-0 font-eight-400 line-height-24 font-16">Cancellations & Changes</p>
                    <ul className="ps-3 mb-0">
                        <li className="text-primary-80 mb-0 font-eight-400 line-height-24 font-16 mt-2 pe-5">
                            Subscription Orders: To avoid being charged, changes or cancellations must be made at least 48 hours before your next delivery.
                        </li>
                        <li className="text-primary-80 mb-0 font-eight-400 line-height-24 font-16 mt-2 pe-5">
                            One-Time Orders: We cannot cancel an order once it has been processed for delivery.
                        </li>
                    </ul>

                    <p className="text-brown mb-0 font-eight-400 line-height-24 font-16">Refund Process</p>
                    <p className="text-brown mb-0 font-eight-400 line-height-24 font-16 pe-5">
                        Approved refunds will be processed within 5–7 business days using your original payment method.
                    </p>

                    <p className="text-brown mb-0 font-eight-400 line-height-24 font-16">How to Request a Refund</p>
                    <p className="text-brown mb-0 font-eight-400 line-height-24 font-16">
                        Email us at: <a href="mailto:support@drinkplnto.co.uk" className="text-green">support@drinkplnto.co.uk</a>
                    </p>
                    <p className="text-brown mb-0 font-eight-400 line-height-24 font-16 mt-1 pe-5">Include: Order number, issue details, and a photo (if applicable).</p>
                    <div className="border-bottom my-4"></div>
                    <p className="fst-italic text-brown mb-0 font-eight-400 line-height-24 font-16 pe-5">
                        We are committed to ensuring your satisfaction—please let us know how we can help!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RefundPolicy;
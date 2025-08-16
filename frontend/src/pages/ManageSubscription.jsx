import { PauseSvg2, InfoSvg, RedInfoSvg } from "../components/Icons";

const ManageSubscription = () => {
    return (
        <div className="coming-soon-content py-5 px-3 justify-content-center d-flex">
            <div className="page-content-768">
                <h3 className="font-weight-700 font-36 line-height-400 text-brown">Manage Subscription</h3>
                <p className="text-card-body font-weight-400 font-16 line-height-24">Need a break? You can pause or cancel your subscription anytime.</p>
                <div className="row g-4 mt-1 mt-md-4 ">
                    <div className="col-md-12 mt-4 mt-md-0">
                        <div className="card border-color-brown h-100 p-4">
                            <div className="mb-3">
                                <h6 className="font-weight-600 font-20 line-height-28 text-brown d-flex align-items-center">
                                    Current Subscription
                                </h6>
                            </div>
                            <div className="mb-3">
                                <div className="d-flex justify-content-between">
                                    <h6 className="text-brown font-16 mb-0 font-weight-500 line-height-24">Status:</h6>
                                    <div class="badge rounded-pill bg-theme p-2 text-success">
                                        Active
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="d-flex justify-content-between">
                                    <h6 className="text-brown font-16 mb-0 font-weight-500 line-height-24">Plan:</h6>
                                    <p className="text-card-body font-16 mb-0 font-weight-500 line-height-24">Standard Plan</p>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="d-flex justify-content-between">
                                    <h6 className="text-brown font-16 mb-0 font-weight-500 line-height-24">FREQUENCY:</h6>
                                    <p className="text-card-body font-16 mb-0 font-weight-500 line-height-24">Weekly</p>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="d-flex justify-content-between">
                                    <h6 className="text-brown font-16 mb-0 font-weight-500 line-height-24">NEXT DELIVERY:</h6>
                                    <p className="text-card-body font-16 mb-0 font-weight-500 line-height-24">Wednesday, May 7, 2025</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-4 mt-1 mt-md-4">
                    <div className="col-md-12 mt-4 mt-md-0">
                        <div className="card border-color-brown h-100 p-4">
                            <div className="row">
                                <div className="col-12 col-md-7 mb-3 mb-md-0">
                                    <h6 className="font-weight-600 font-20 line-height-28 text-brown d-flex align-items-center">
                                        Pause Subscription
                                    </h6>
                                    <p className="text-card-body font-weight-300 font-16 line-height-24">
                                        Temporarily pause deliveries until you're ready to resume.
                                    </p>
                                </div>
                                <div className="col-12 col-md-5 d-flex align-items-start justify-content-md-end">
                                    <button className="btn pause-subscription-btn bg-theme border-color-brown text-brown font-weight-500 font-12 line-height-20 mb-2">
                                        <span className="icon-center me-2">{PauseSvg2}</span>
                                        PAUSE SUBSCRIPTION
                                    </button>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-12">
                                    <p className="text-card-body font-16 mb-0 font-weight-500 line-height-24 d-flex align-items-start">
                                        <span className="icon-center me-2">{InfoSvg}</span>
                                        You can resume your subscription anytime from your dashboard. Pausing will take effect immediately.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-4 mt-1 mt-md-4">
                    <div className="col-md-12 mt-4 mt-md-0">
                        <div className="card border-color-pink h-100 p-4">
                            <div className="row">
                                <div className="col-12 col-md-7 mb-3 mb-md-0">
                                    <h6 className="font-weight-600 font-20 line-height-28 text-dark-red d-flex align-items-center">
                                        Cancel Subscription
                                    </h6>
                                    <p className="text-card-body font-weight-300 font-16 line-height-24 mb-0">
                                        Permanently cancel your subscription. This action cannot be undone.
                                    </p>
                                </div>
                                <div className="col-12 col-md-5 d-flex align-items-start justify-content-md-end">
                                    <button className="btn pause-subscription-btn bg-theme border-color-brown text-brown font-weight-500 font-12 line-height-20 mb-2 border-color-pink">
                                        <span className="icon-center me-2">{PauseSvg2}</span>
                                        CANCEL SUBSCRIPTION
                                    </button>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-12">
                                    <p className="text-card-body font-16 mb-0 font-weight-500 line-height-24 d-flex align-items-start">
                                        <span className="icon-center me-2">{RedInfoSvg}</span>
                                        If you cancel, you'll lose your current plan and preferences. You can always sign up again in the future.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageSubscription;
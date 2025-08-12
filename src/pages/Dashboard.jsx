import { CalenderSvg4, TimeClockSvg, BoxSvg, BoxSvg2, LocationPinSvg, PauseSvg, RightAngleSvg, QuickBoxSvg, QuickUserSvg, QuickLocationSvg, QuickPauseSvg } from "../components/Icons";

const Dashboard = () => {
    return (
        <div className="container py-5">
            <h3 className="font-weight-700 font-36 line-height-400 text-brown">Welcome back, Sarah!</h3>
            <p className="text-card-body font-weight-400 font-16 line-height-24">Here’s your current delivery schedule and account overview.</p>

            <div className="row g-4 mt-1 mt-md-4 ">
                {/* Subscription Status */}
                <div className="col-md-6">
                    <div className="card border-color-brown h-100 p-4">
                        <div className="mb-3">
                            <h6 className="font-weight-600 font-20 line-height-28 text-brown d-flex align-items-center">
                                <span className="me-2 mt-r-3">{CalenderSvg4}</span>
                                Subscription Status
                            </h6>
                            <p className="text-card-body font-weight-400 font-14 line-height-24">Your current subscription details</p>
                        </div>
                        <div className="mb-3">
                            <div className="d-flex">
                                <div className="me-3 icon-bg">
                                    <span>{TimeClockSvg}</span>
                                </div>
                                <div>
                                    <h6 className="text-brown mb-0 font-weight-500 line-height-24">NEXT DELIVERY</h6>
                                    <p className="mb-1 text-card-body font-weight-400 line-height-24">Wednesday, May 7, 2025</p>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="d-flex">
                                <div className="me-3 icon-bg">
                                    <span>{BoxSvg}</span>
                                </div>
                                <div>
                                    <h6 className="text-brown mb-0 font-weight-500 line-height-24">FREQUENCY</h6>
                                    <p className="mb-1 text-card-body font-weight-400 line-height-24">Weekly</p>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="d-flex">
                                <div className="me-3 icon-bg">
                                    <span>{LocationPinSvg}</span>
                                </div>
                                <div>
                                    <h6 className="text-brown mb-0 font-weight-500 line-height-24">DELIVERY ADDRESS</h6>
                                    <p className="mb-1 text-card-body font-weight-400 line-height-24">123 London Road,E1 6AA</p>
                                </div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <span class="badge rounded-pill bg-theme p-2 text-success">Active</span>
                        </div>
                        <button className="btn dashboard-btn bg-theme border-color-brown text-brown font-weight-500 font-14 line-height-20 w-100 mb-2"><span className="me-2 icon-center">{PauseSvg}</span> <span className="mt-r-3">PAUSE SUBSCRIPTION</span></button>
                        <button className="btn dashboard-btn bg-theme border-color-brown text-brown font-weight-500 font-14 line-height-20 w-100 mb-2">CHANGE FREQUENCY</button>
                    </div>
                </div>

                {/* Recent Orders */}
                <div className="col-md-6">
                    <div className="card border-color-brown h-100 p-4">
                        <div className="mb-3">
                            <h6 className="font-weight-600 font-20 line-height-28 text-brown d-flex align-items-center">
                                <span className="me-2 mt-r-3">{BoxSvg2}</span>
                                Recent Orders
                            </h6>
                            <p className="text-card-body font-weight-400 font-14 line-height-24">Your most recent deliveries</p>
                        </div>
                        <div className="mb-3">
                            <div className="row">
                                <div className="col-8">
                                    <h6 className="text-brown mb-0 font-weight-500 line-height-24">THURSDAY, MAY 1, 2025</h6>
                                    <p className="mb-1 text-card-body font-weight-400 line-height-24">Order #27834235</p>
                                    <p className="small text-brown mb-0 font-weight-500 line-height-24">Items:</p>
                                    <div className="mb-3">
                                        <p className="mb-0 text-card-body font-weight-400 line-height-24">White Oat Milk - 2L</p>
                                        <p className="mb-0 text-card-body font-weight-400 line-height-24">Cacao Milk - 1L</p>
                                    </div>
                                    <button className="btn btn-link text-green p-0 text-decoration-none d-inline-flex align-items-center">
                                        <span className="me-2">VIEW ORDER DETAILS</span>
                                        <span className="svg-center">{RightAngleSvg}</span>
                                    </button>
                                </div>
                                <div className="col-4 text-end">
                                    <div className="mb-4">
                                        <span class="badge rounded-pill bg-theme p-2 text-success">Delivered</span>
                                    </div>
                                </div>
                                <div className="col-12 mt-3">
                                    <div className="border-bottom"></div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="row">
                                <div className="col-8">
                                    <h6 className="text-brown mb-0 font-weight-500 line-height-24">THURSDAY, MAY 1, 2025</h6>
                                    <p className="mb-1 text-card-body font-weight-400 line-height-24">Order #27834235</p>
                                    <p className="small text-brown mb-0 font-weight-500 line-height-24">Items:</p>
                                    <div className="mb-3">
                                        <p className="mb-0 text-card-body font-weight-400 line-height-24">White Oat Milk - 2L</p>
                                        <p className="mb-0 text-card-body font-weight-400 line-height-24">Cacao Milk - 1L</p>
                                    </div>
                                    <button className="btn btn-link text-green p-0 text-decoration-none d-inline-flex align-items-center">
                                        <span className="me-2">VIEW ORDER DETAILS</span>
                                        <span className="svg-center">{RightAngleSvg}</span>
                                    </button>
                                </div>
                                <div className="col-4 text-end">
                                    <div className="mb-4">
                                        <span class="badge rounded-pill bg-theme p-2 text-success">Delivered</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button className="btn bg-theme w-100 py-2 text-brown border-color-brown font-weight-500 font-14 line-height-20 mt-4 dashboard-btn">View All Orders</button>
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="row bg-white py-4 px-2 m-0 rounded g-4 mt-4 border border-color-brown">
                <h6 className="font-weight-600 font-20 mt-2 mb-0 line-height-28 text-brown d-flex align-items-center">
                    Quick Actions
                </h6>
                <div className="col-md-3 mt-3">
                    <div className="card border-color-brown bg-theme text-center p-3">
                        <div className="d-flex align-items-center ms-2">
                            <div>
                                <span>{QuickBoxSvg}</span>
                            </div>
                            <div className="text-start ms-3">
                                <p className="font-weight-500 line-height-20 font-18 text-brown mb-1">View Orders</p>
                                <small className="font-weight-400 line-height-20 font-14 text-card-body">Order history & details</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mt-3">
                    <div className="card border-color-brown bg-theme text-center p-3">
                        <div className="d-flex align-items-center ms-2">
                            <div>
                                <span>{QuickUserSvg}</span>
                            </div>
                            <div className="text-start ms-3">
                                <p className="font-weight-500 line-height-20 font-18 text-brown mb-1">EDIT PROFILE</p>
                                <small className="font-weight-400 line-height-20 font-14 text-card-body">Update personal info</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mt-3">
                    <div className="card border-color-brown bg-theme text-center p-3">
                        <div className="d-flex align-items-center ms-2">
                            <div>
                                <span>{QuickLocationSvg}</span>
                            </div>
                            <div className="text-start ms-3">
                                <p className="font-weight-500 line-height-20 font-18 text-brown mb-1">DELIVERY ADDRESS</p>
                                <small className="font-weight-400 line-height-20 font-14 text-card-body">Change delivery location</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mt-3">
                    <div className="card border-color-brown bg-theme text-center p-3">
                        <div className="d-flex align-items-center ms-2">
                            <div>
                                <span>{QuickPauseSvg}</span>
                            </div>
                            <div className="text-start ms-3">
                                <p className="font-weight-500 line-height-20 font-18 text-brown mb-1">MANAGE PLAN</p>
                                <small className="font-weight-400 line-height-20 font-14 text-card-body">Manage subscription</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
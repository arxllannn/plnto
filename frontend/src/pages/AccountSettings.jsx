import React, { useState } from 'react';
import { UserSvg, AccountEyeSvg, AccountUserSvg, AccountEmailSvg, AccountPhoneSvg, AccountLocationSvg, AccountLockSvg } from "../components/Icons";

const AccountSettings = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);


    return (
        <div className="d-flex justify-content-center align-items-center py-5">
            <div className="page-content-768 px-3">
                <h2 className="font-weight-700 font-36 line-height-40 text-brown">Account Settings</h2>
                <p className="font-weight-400 font-16 line-height-24 text-card-body">Keep your details up to date so your deliveries reach the right place.</p>
                <div className="card shadow-sm my-4">
                    <div className="card-body px-4">
                        <h5 className="font-weight-600 mt-3 font-20 line-height-28 text-brown">
                            <span className="me-2 icon-center">{UserSvg}</span>Personal Details
                        </h5>
                        <p className="text-card-body font-weight-400 font-16 line-height-24 mb-4">Update your personal information and delivery address</p>
                        <div className="row mb-3">
                            <div className="col-md-6 mb-3 mb-md-0">
                                <label htmlFor="first_name" className="form-label font-weight-500 font-14 line-height-14 text-brown">
                                    First Name
                                </label>
                                <div className="position-relative">
                                    <input type="text" name="first_name" required className="theme-input border-right-none pe-5" placeholder="Sarah"
                                    />
                                    <span className="theme-input-group-text position-absolute border-none top-50 end-0 translate-middle-y me-1">
                                        {AccountUserSvg}
                                    </span>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="last_name" className="form-label font-weight-500 font-14 line-height-14 text-brown">
                                    Last Name
                                </label>
                                <div className="position-relative">
                                    <input type="text" name="last_name" required className="theme-input border-right-none pe-5" placeholder="Johnson"
                                    />
                                    <span className="theme-input-group-text position-absolute border-none top-50 end-0 translate-middle-y me-1">
                                        {AccountUserSvg}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="email" className="form-label font-weight-500 font-14 line-height-14 text-brown">
                                    Email Address
                                </label>
                                <div className="position-relative">
                                    <input type="email" name="email" required className="theme-input border-right-none pe-5" placeholder="sarah.johnson@example.com"
                                    />
                                    <span className="theme-input-group-text position-absolute border-none top-50 end-0 translate-middle-y me-1">
                                        {AccountEmailSvg}
                                    </span>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="phone_number" className="form-label font-weight-500 font-14 line-height-14 text-brown">
                                    Phone Number
                                </label>
                                <div className="position-relative">
                                    <input type="number" name="phone_number" required className="theme-input border-right-none pe-5" placeholder="07700 900123"
                                    />
                                    <span className="theme-input-group-text position-absolute border-none top-50 end-0 translate-middle-y me-1">
                                        {AccountPhoneSvg}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <h5 className="font-weight-600 font-20 line-height-28 text-brown">
                                Delivery Address
                            </h5>
                            <div className="col-md-12">
                                <label htmlFor="street_address" className="form-label font-weight-500 font-14 line-height-14 text-brown">
                                    Street Address
                                </label>
                                <div className="position-relative">
                                    <input type="text" name="street_address" required className="theme-input border-right-none pe-5" placeholder="123 London Road"
                                    />
                                    <span className="theme-input-group-text position-absolute border-none top-50 end-0 translate-middle-y me-1">
                                        {AccountLocationSvg}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col-md-6 mb-3 mb-md-0">
                                <label htmlFor="city" className="form-label font-weight-500 font-14 line-height-14 text-brown">
                                    City
                                </label>
                                <input type="text" name="city" required className="theme-input border-right-none pe-5" placeholder="London" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="Postcode" className="form-label font-weight-500 font-14 line-height-14 text-brown">
                                    Postcode
                                </label>
                                <input type="text" name="postcode" required className="theme-input border-right-none pe-5" placeholder="E1 6AA" />
                            </div>
                        </div>

                        <button className="btn bg-green text-white">SAVE PERSONAL DETAILS</button>
                    </div>
                </div>
                <div className="card shadow-sm">
                    <div className="card-body px-4">
                        <h5 className="font-weight-600 mt-3 font-20 line-height-28 text-brown">
                            <span className="me-1 icon-center">{AccountLockSvg}</span> Security
                        </h5>
                        <p className="text-card-body font-weight-400 font-16 line-height-24 mb-4">Update your password</p>

                        <div className="mb-3">
                            <label className="form-label font-weight-500 font-14 line-height-14 text-brown">Password</label>
                            <div className="position-relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    required
                                    className="theme-input border-right-none pe-5"
                                    placeholder="Enter your current password"
                                />
                                <span
                                    className="theme-input-group-text position-absolute border-none top-50 end-0 translate-middle-y me-1 cursor-pointer"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {AccountEyeSvg}
                                </span>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label font-weight-500 font-14 line-height-14 text-brown">New Password</label>
                            <div className="position-relative">
                                <input
                                    type={showNewPassword ? 'text' : 'password'}
                                    name="new_password"
                                    required
                                    className="theme-input border-right-none pe-5"
                                    placeholder="Enter your new password"
                                />
                                <span
                                    className="theme-input-group-text position-absolute border-none top-50 end-0 translate-middle-y me-1 cursor-pointer"
                                    onClick={() => setShowNewPassword(!showNewPassword)}
                                >
                                    {AccountEyeSvg}
                                </span>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="form-label font-weight-500 font-14 line-height-14 text-brown">Confirm Password</label>
                            <div className="position-relative">
                                <input
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    name="confirm_password"
                                    required
                                    className="theme-input border-right-none pe-5"
                                    placeholder="Confirm your new password"
                                />
                                <span
                                    className="theme-input-group-text position-absolute border-none top-50 end-0 translate-middle-y me-1 cursor-pointer"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                >
                                    {AccountEyeSvg}
                                </span>
                            </div>
                        </div>
                        <button className="btn bg-green text-white">UPDATE PASSWORD</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccountSettings;
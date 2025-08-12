import React, { useState } from 'react';
import { EmailSvg2, EyeSvg, UserSvg } from '../components/Icons';

const Auth = () => {
  const [activeTab, setActiveTab] = useState('login');

  // Show Password in input state 
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showSignupPassword, setShowSignupPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="auth-content d-flex justify-content-center align-items-center">
      <div className="text-center py-100">
        <h1 className="text-brown font-36 font-weight-700 line-height-40">Client Portal</h1>
        <p className="text-card-body font-weight-400 font-18 mb-4">Manage your subscription and deliveries</p>

        <div className="bg-white auth-content-body p-3 p-md-4 rounded shadow-sm">
          {/* Tabs */}
          <div className="d-flex mb-3 px-1 py-1 bg-theme border rounded overflow-hidden">
            <button className={`btn flex-fill ${activeTab === 'login' ? 'bg-brown-dark text-white' : 'bg-theme text-card-body'}`} onClick={() => setActiveTab('login')}>
              Log In
            </button>
            <button className={`btn flex-fill ${activeTab === 'signup' ? 'bg-brown-dark text-white' : 'bg-theme text-card-body'}`} onClick={() => setActiveTab('signup')}>
              Sign Up
            </button>
          </div>
          {/* Login Form */}
          {activeTab === 'login' && (
            <>
              <div className="mb-3 text-start mt-4">
                <label htmlFor="email" className="form-label font-weight-500 font-14 line-height-14 text-brown">
                  Email
                </label>
                <div className="position-relative">
                  <input type="email" name="email" required className="theme-input border-right-none pe-5" placeholder="your@email.com"
                  />
                  <span className="theme-input-group-text position-absolute border-none top-50 end-0 translate-middle-y me-1">
                    {EmailSvg2}
                  </span>
                </div>
              </div>
              <div className="mb-3 text-start mt-4">
                <label htmlFor="password" className="form-label font-weight-500 font-14 line-height-14 text-brown">
                  Password
                </label>
                <div className="position-relative">
                  <input
                    type={showLoginPassword ? "text" : "password"}
                    name="password"
                    required
                    className="theme-input border-right-none pe-5"
                    placeholder="Password"
                  />
                  <span
                    className="theme-input-group-text cursor-pointer position-absolute border-none top-50 end-0 translate-middle-y me-1"
                    onClick={() => setShowLoginPassword(prev => !prev)}>
                    {EyeSvg}
                  </span>
                </div>
              </div>

              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="form-check">
                  <input className="form-check-input border-green" type="checkbox" id="remember" />
                  <label className="form-check-label form-label font-weight-500 font-14 line-height-14 text-brown" htmlFor="remember">
                    Remember me
                  </label>
                </div>
                <a href="#" className="text-green font-weight-400 font-14 line-height-14  text-underline-none">Forgot password?</a>
              </div>
              <button className="btn w-100 py-2 font-14 font-weight-500 line-height-20 text-white bg-green">
                LOG IN
              </button>
            </>
          )}

          {/* Sign Up Form */}
          {activeTab === 'signup' && (
            <>
              <div className="mb-3 text-start mt-4">
                <label htmlFor="full_name" className="form-label font-weight-500 font-14 line-height-14 text-brown">
                  Full name
                </label>
                <div className="position-relative">
                  <input type="text" name="full_name" required className="theme-input border-right-none pe-5" placeholder="Your name"
                  />
                  <span className="theme-input-group-text position-absolute border-none top-50 end-0 translate-middle-y me-1">
                    {UserSvg}
                  </span>
                </div>
              </div>
              <div className="mb-3 text-start mt-4">
                <label htmlFor="email" className="form-label font-weight-500 font-14 line-height-14 text-brown">
                  Email
                </label>
                <div className="position-relative">
                  <input type="email" name="email" required className="theme-input border-right-none pe-5" placeholder="your@email.com"
                  />
                  <span className="theme-input-group-text position-absolute border-none top-50 end-0 translate-middle-y me-1">
                    {EmailSvg2}
                  </span>
                </div>
              </div>
              <div className="mb-3 text-start mt-4">
                <label htmlFor="password" className="form-label font-weight-500 font-14 line-height-14 text-brown">
                  Password
                </label>
                <div className="position-relative">
                  <input
                    type={showSignupPassword ? "text" : "password"}
                    name="password"
                    required
                    className="theme-input border-right-none pe-5"
                    placeholder="Password"
                  />
                  <span
                    className="theme-input-group-text cursor-pointer position-absolute border-none top-50 end-0 translate-middle-y me-1"
                    onClick={() => setShowSignupPassword(prev => !prev)}>
                    {EyeSvg}
                  </span>
                </div>
              </div>
              <div className="mb-3 text-start mt-4">
                <label htmlFor="confirm_password" className="form-label font-weight-500 font-14 line-height-14 text-brown">
                  Confirm Password
                </label>
                <div className="position-relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirm_password"
                    required
                    className="theme-input border-right-none pe-5"
                    placeholder="Password"
                  />
                  <span
                    className="theme-input-group-text cursor-pointer position-absolute border-none top-50 end-0 translate-middle-y me-1"
                    onClick={() => setShowConfirmPassword(prev => !prev)}>
                    {EyeSvg}
                  </span>
                </div>
              </div>
              <div className="form-check mb-3 text-start">
                <input className="form-check-input" type="checkbox" id="terms" />
                <label className="form-check-label form-label font-weight-500 font-14 line-height-14 text-card-body" htmlFor="terms">
                  I agree to the <a href="#" className="text-green text-underline-none">Terms & Conditions</a>
                </label>
              </div>
              <button className="btn w-100 bg-green text-white">
                CREATE ACCOUNT
              </button>
            </>
          )}
        </div>
        <div className="mt-3">
          {activeTab === 'login' ? (
            <div className='text-card-body font-weight-400 line-height-24 mt-4'>
              Don’t have an account? <span className="text-green font-weight-400 line-height-24" role="button" onClick={() => setActiveTab('signup')}>SIGN UP</span>
            </div>
          ) : (
            <div className='text-card-body font-weight-400 line-height-24 mt-4'>
              Already have an account? <span className="text-green font-weight-400 line-height-24" role="button" onClick={() => setActiveTab('login')}>LOG IN</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;

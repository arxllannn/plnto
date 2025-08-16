import { useState, useEffect, useRef } from 'react';


const AdminNavbar = () => {
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const offcanvasRef = useRef(null);

    const toggleOffcanvas = () => {
        setShowOffcanvas(prev => !prev);
    };

    const handleClickOutside = (e) => {
        if (
            showOffcanvas &&
            offcanvasRef.current &&
            !offcanvasRef.current.contains(e.target)
        ) {
            setShowOffcanvas(false);
        }
    };

    useEffect(() => {
        if (showOffcanvas) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showOffcanvas]);

    return (
        <>
            <div className="header header-fixed">
                <div className="container-fluid d-flex align-items-stretch justify-content-end">
                    <div className="topbar">
                        <div
                            className="topbar-item"
                            onClick={toggleOffcanvas}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="btn btn-icon w-auto btn-clean d-flex align-items-center btn-lg px-2">
                                <span className="text-muted font-weight-bold font-size-base d-none d-md-inline mr-1">Hi,</span>
                                <span className="text-dark-50 font-weight-bolder font-size-base d-none d-md-inline mr-3">Sean</span>
                                <span className="symbol symbol-35 symbol-light-success">
                                    <span className="symbol-label font-size-h5 font-weight-bold">S</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Overlay */}
            {showOffcanvas && (
                <div
                    className="offcanvas-overlay"
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: 'rgba(0, 0, 0, 0.2)',
                        zIndex: 1049,
                    }}
                />
            )}

            {/* Right Offcanvas */}
            <div ref={offcanvasRef}
                className={`offcanvas offcanvas-right ${showOffcanvas ? 'show' : ''}`}
                style={{
                    position: 'fixed',
                    top: 0,
                    right: showOffcanvas ? 0 : '-400px',
                    width: '350px',
                    height: '100%',
                    backgroundColor: '#fff',
                    boxShadow: '-2px 0 10px rgba(0,0,0,0.1)',
                    transition: 'right 0.3s ease-in-out',
                    zIndex: 1050,
                    padding: '20px',
                }}
            >
                <div className="offcanvas-header d-flex align-items-center justify-content-between pb-5">
                    <h3 className="font-weight-bold m-0">Settings</h3>
                    <button className="btn btn-xs btn-icon btn-light btn-hover-primary" onClick={toggleOffcanvas}>
                        <i className="ki ki-close icon-xs text-muted"></i>
                    </button>
                </div>
                <div className="offcanvas-content pr-5 mr-n5">
                    <div className="d-flex align-items-center mt-5">
                        <div className="symbol symbol-100 mr-5">
                            <div className="symbol-label">
                                <i className='flaticon2-user icon-3x text-secondary'></i>
                            </div>
                        </div>
                        <div className="d-flex flex-column">
                            <a href="#" className="font-weight-bold font-size-h5 text-dark-75 text-hover-primary">James Jones</a>
                            <div className="text-muted mt-1">Application Developer</div>
                            <div className="navi mt-2">
                                <a href="#" className="navi-item">
                                    <span className="navi-link p-0 pb-2">
                                        <i className='flaticon2-mail text-primary mr-2'></i>
                                        <span className="navi-text text-muted text-hover-primary">jm@softplus.com</span>
                                    </span>
                                </a>
                                <a href="#" className="btn btn-sm btn-light-primary font-weight-bolder py-2 px-5">Sign Out</a>
                            </div>
                        </div>
                    </div>
                    <div className="separator separator-dashed mt-8 mb-5"></div>
                    <div className="navi navi-spacer-x-0 p-0">
                        <a href="custom/apps/user/profile-1/personal-information.html" className="navi-item">
                            <div className="navi-link">
                                <div className="symbol symbol-40 bg-light mr-3">
                                    <div className="symbol-label">
                                        <i className='flaticon2-user text-secondary'></i>
                                    </div>
                                </div>
                                <div className="navi-text">
                                    <div className="font-weight-bold">My Profile</div>
                                    <div className="text-muted">Account settings
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    {/* <div className="separator separator-dashed my-7"></div> */}
                </div>
            </div>
        </>
    );
};

export default AdminNavbar;
import React, { useState, useEffect } from "react";
import '../../admin-assets/assets/css/admin.css';
import { sideBarToggleButton, DashboardContactSvg, DashboardUserSvg, DashboardProductSvg, DashboardOrderSvg, DashboardLockSvg, DashboardSvg } from "../../components/Icons";
import { Link, useLocation } from "react-router-dom";

const AdminSideBar = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
    const [collapsed, setCollapsed] = useState(window.innerWidth < 992);
    const [openMenu, setOpenMenu] = useState("");
    const location = useLocation();

    const isActive = (path) => location.pathname.startsWith(path);

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < 992;
            setIsMobile(mobile);
            setCollapsed(mobile);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const header = document.querySelector('.aside-enabled .header.header-fixed');
        const wrapper = document.querySelector('.aside-fixed .wrapper');

        if (!isMobile) {
            if (header) {
                header.style.left = collapsed ? "60px" : "265px";
            }
            if (wrapper) {
                wrapper.style.paddingLeft = collapsed ? "0px" : "265px";
            }
        } else {
            if (header) header.style.left = "0px";
            if (wrapper) wrapper.style.paddingLeft = "0px";
        }
    }, [collapsed, isMobile]);

    const toggleMenu = (menuName) => {
        setOpenMenu(prev => prev === menuName ? "" : menuName);
    };

    return (
        <>
            {isMobile && (
                <button
                    className="btn p-0 burger-icon burger-icon-left d-lg-none"
                    onClick={() => setCollapsed(!collapsed)}
                    style={{ position: 'fixed', top: 10, left: 10, zIndex: 9999 }}
                >
                    <span></span>
                </button>
            )}

            <div
                className={`aside aside-left aside-fixed d-flex flex-column flex-row-auto ${collapsed ? "collapsed" : ""}`}
                style={{
                    width: collapsed ? "60px" : "265px",
                    transition: "left 0.3s, width 0.3s",
                    overflow: "hidden",
                    position: "fixed",
                    height: "100vh",
                    zIndex: isMobile ? 1050 : "auto",
                    left: isMobile ? (collapsed ? "-265px" : "0") : "0",
                    backgroundColor: "#181c32",
                    boxShadow: isMobile ? "2px 0 12px rgb(0 0 0 / 0.1)" : "none",
                }}
            >
                <div className="brand flex-column-auto">
                    <Link to={"/admin"} className="brand-logo">
                        {!collapsed && <h4 className="text-white">Plnto</h4>}
                    </Link>
                    <button
                        className="brand-toggle btn btn-sm px-0"
                        onClick={() => setCollapsed(!collapsed)}
                    >
                        <span className="svg-icon svg-icon-xl">{sideBarToggleButton}</span>
                    </button>
                </div>

                <div className="aside-menu-wrapper flex-column-fluid">
                    <div className="aside-menu scroll">
                        <ul className="menu-nav">
                            {/* Dashboard */}
                            <li className={`menu-item ${isActive("/admin") && !isActive("/admin/") ? "menu-item-active" : ""}`}>
                                <Link to="/admin" className="menu-link" title={collapsed ? "Dashboard" : undefined}>
                                    <span className="svg-icon menu-icon">{DashboardSvg}</span>
                                    {!collapsed && <span className="menu-text">Dashboard</span>}
                                </Link>
                            </li>

                            {/* Products */}
                            <li className={`menu-item menu-item-submenu ${openMenu === "products" ? "menu-item-open" : ""}`}>
                                <div className="menu-link" onClick={() => toggleMenu("products")} style={{ cursor: "pointer" }}>
                                    <span className="svg-icon menu-icon">{DashboardProductSvg}</span>
                                    {!collapsed && <span className="menu-text">Products</span>}
                                </div>
                                {!collapsed && openMenu === "products" && (
                                    <ul className="menu-subnav pl-10">
                                        <li className={`menu-item ${isActive("/admin/products") ? "menu-item-active" : ""}`}>
                                            <Link to="/admin/products" className="menu-link">
                                                <i className="ki ki-minus font-5 menu-icon text-grey-500 mr-2"></i>
                                                <span className="menu-text">Products</span>
                                            </Link>
                                        </li>
                                        <li className={`menu-item ${isActive("/admin/product-create") ? "menu-item-active" : ""}`}>
                                            <Link to="/admin/product-create" className="menu-link">
                                                <i className="ki ki-minus font-5 menu-icon text-grey-500 mr-2"></i>
                                                <span class="menu-text">Add Product</span>
                                            </Link>
                                        </li>
                                    </ul>
                                )}
                            </li>

                            {/* Orders */}
                            <li className={`menu-item menu-item-submenu ${openMenu === "orders" ? "menu-item-open" : ""}`}>
                                <div className="menu-link" onClick={() => toggleMenu("orders")} style={{ cursor: "pointer" }}>
                                    <span className="svg-icon menu-icon">{DashboardOrderSvg}</span>
                                    {!collapsed && <span className="menu-text">Orders</span>}
                                </div>
                                {!collapsed && openMenu === "orders" && (
                                    <ul className="menu-subnav pl-10">
                                        <li className={`menu-item ${isActive("/admin/orders") ? "menu-item-active" : ""}`}>
                                            <Link to="/admin/orders" className="menu-link">
                                                <i className="ki ki-minus font-5 menu-icon text-grey-500 mr-2"></i>
                                                <span className="menu-text">Orders</span>
                                            </Link>
                                        </li>
                                        <li className={`menu-item ${isActive("/admin/order-create") ? "menu-item-active" : ""}`}>
                                            <Link to="/admin/order-create" className="menu-link">
                                                <i className="ki ki-minus font-5 menu-icon text-grey-500 mr-2"></i>
                                                <span className="menu-text">Add Orders</span>
                                            </Link>
                                        </li>
                                    </ul>
                                )}
                            </li>

                            {/* Users */}
                            <li className={`menu-item menu-item-submenu ${openMenu === "users" ? "menu-item-open" : ""}`}>
                                <div className="menu-link" onClick={() => toggleMenu("users")} style={{ cursor: "pointer" }}>
                                    <span className="svg-icon menu-icon">{DashboardUserSvg}</span>
                                    {!collapsed && <span className="menu-text">Users</span>}
                                </div>
                                {!collapsed && openMenu === "users" && (
                                    <ul className="menu-subnav pl-10">
                                        <li className={`menu-item ${isActive("/admin/users") ? "menu-item-active" : ""}`}>
                                            <Link to="/admin/users" className="menu-link">
                                                <i className="ki ki-minus font-5 menu-icon text-grey-500 mr-2"></i>
                                                <span className="menu-text">Users</span>
                                            </Link>
                                        </li>
                                        <li className={`menu-item ${isActive("/admin/system-users") ? "menu-item-active" : ""}`}>
                                            <Link to="/admin/system-users" className="menu-link">
                                                <i className="ki ki-minus font-5 menu-icon text-grey-500 mr-2"></i>
                                                <span className="menu-text">System Users</span>
                                            </Link>
                                        </li>
                                        <li className={`menu-item ${isActive("/admin/user-register") ? "menu-item-active" : ""}`}>
                                            <Link to="/admin/user-register" className="menu-link">
                                                <i className="ki ki-minus font-5 menu-icon text-grey-500 mr-2"></i>
                                                <span className="menu-text">Add User</span>
                                            </Link>
                                        </li>
                                    </ul>
                                )}
                            </li>

                            {/* Change Password */}
                            <li className={`menu-item ${isActive("/admin/change-password") ? "menu-item-active" : ""}`}>
                                <Link to="/admin/change-password" className="menu-link" title={collapsed ? "Change Password" : undefined}>
                                    <span className="svg-icon menu-icon">{DashboardLockSvg}</span>
                                    {!collapsed && <span className="menu-text">Change Password</span>}
                                </Link>
                            </li>

                            {/* Contact Us */}
                            <li className={`menu-item ${isActive("/admin/contact-us") ? "menu-item-active" : ""}`}>
                                <Link to="/admin/contact-us" className="menu-link" title={collapsed ? "Contact Us" : undefined}>
                                    <span className="svg-icon menu-icon">{DashboardContactSvg}</span>
                                    {!collapsed && <span className="menu-text">Contact Us</span>}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminSideBar;

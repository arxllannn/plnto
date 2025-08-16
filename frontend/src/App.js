import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardUserProfileDetails from './pages/admin/Users/UserDetails';


// Lazy load layouts
const UserLayout = lazy(() => import('./layouts/UserLayout'));
const AdminLayout = lazy(() => import('./layouts/AdminLayout'));

// Lazy load user pages
const Home = lazy(() => import('./pages/Home'));
const OutStory = lazy(() => import('./pages/OurStory'));
const Shop = lazy(() => import('./pages/Shop'));
const TheProcess = lazy(() => import('./pages/TheProcess'));
const Stockists = lazy(() => import('./pages/Stockists'));
const Contact = lazy(() => import('./pages/Contact'));
const Auth = lazy(() => import('./pages/Auth'));
const ProductDetails = lazy(() => import('./pages/ProductDetails'));
const ProductCart = lazy(() => import('./pages/Cart'));
const CreateSubscription = lazy(() => import('./pages/CreateSubscription'));
const Checkout = lazy(() => import('./pages/Checkout'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Orders = lazy(() => import('./pages/Orders'));
const ManageSubscription = lazy(() => import('./pages/ManageSubscription'));
const AccountSettings = lazy(() => import('./pages/AccountSettings'));
const Confirmation = lazy(() => import('./pages/Confirmation'));
const Faqs = lazy(() => import('./pages/Faqs'));
const TermCondition = lazy(() => import('./pages/TermCondition'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const CookiePolicy = lazy(() => import('./pages/CookiePolicy'));
const RefundPolicy = lazy(() => import('./pages/RefundPolicy'));
const ComingSoon = lazy(() => import('./pages/ComingSoon'));
const FindUs = lazy(() => import('./pages/FindUs'));

// Lazy load admin pages
const AdminDashboard = lazy(() => import('./pages/admin/Dashboard'));
const DashboardUsers = lazy(() => import('./pages/admin/Users/Users'));
const DashboardUserRegister = lazy(() => import('./pages/admin/Users/UserRegister'));
const DashboardSystemUsers = lazy(() => import('./pages/admin/Users/SystemUsers'));
const AdminDashboardOrders = lazy(() => import('./pages/admin/Orders/Orders'));
const AdminDashboardOrderCreate = lazy(() => import('./pages/admin/Orders/OrderCreate'));
const AdminDashboardOrdersUpdate = lazy(() => import('./pages/admin/Orders/OrderUpdate'));
const AdminDashboardOrdersDetails = lazy(() => import('./pages/admin/Orders/OrderDetails'));
const DashboardUserProfile = lazy(() => import('./pages/admin/Users/SystemUserUpdate'));
const DashboardUserChangePassword = lazy(() => import('./pages/admin/Users/ChangePassword'));
const AdminDashboardProducts = lazy(() => import('./pages/admin/Products/Products'));
const AdminDashboardProductCreate = lazy(() => import('./pages/admin/Products/ProductCreate'));
const AdminDashboardProductDetails = lazy(() => import('./pages/admin/Products/ProductDetails'));
const AdminDashboardProductUpdate = lazy(() => import('./pages/admin/Products/ProductUpdate'));
const AdminDashboardContactUs = lazy(() => import('./pages/admin/ContactUs'));


// screen loader
const Loader = lazy(() => import('./components/Loader'));


function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* User Routes */}
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="shop" element={<Shop />} />
            <Route path="orders" element={<Orders />} />
            <Route path="manage-subscription" element={<ManageSubscription />} />
            <Route path="account-settings" element={<AccountSettings />} />
            <Route path="product-details" element={<ProductDetails />} />
            <Route path="confirmation" element={<Confirmation />} />
            <Route path="faqs" element={<Faqs />} />
            <Route path="terms-conditions" element={<TermCondition />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="cookie-policy" element={<CookiePolicy />} />
            <Route path="refund-policy" element={<RefundPolicy />} />
            <Route path="coming-soon" element={<ComingSoon />} />
            <Route path="cart" element={<ProductCart />} />
            <Route path="create-subscription" element={<CreateSubscription />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="our-story" element={<OutStory />} />
            <Route path="find-us" element={<FindUs />} />
            <Route path="the-process" element={<TheProcess />} />
            <Route path="stockists" element={<Stockists />} />
            <Route path="contact" element={<Contact />} />
            <Route path="auth" element={<Auth />} />
          </Route>

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="users" element={<DashboardUsers />} />
            <Route path="user-register" element={<DashboardUserRegister />} />
            <Route path="system-users" element={<DashboardSystemUsers />} />
            <Route path="system-user-update" element={<DashboardUserProfile />} />
            <Route path="system-user-details" element={<DashboardUserProfileDetails />} />
            <Route path="change-password" element={<DashboardUserChangePassword />} />
            <Route path="products" element={<AdminDashboardProducts />} />
            <Route path="product-create" element={<AdminDashboardProductCreate />} />
            <Route path="product-details" element={<AdminDashboardProductDetails />} />
            <Route path="product-update" element={<AdminDashboardProductUpdate />} />
            <Route path="orders" element={<AdminDashboardOrders />} />
            <Route path="order-create" element={<AdminDashboardOrderCreate />} />
            <Route path="order-update" element={<AdminDashboardOrdersUpdate />} />
            <Route path="order-details" element={<AdminDashboardOrdersDetails />} />
            <Route path="contact-us" element={<AdminDashboardContactUs />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
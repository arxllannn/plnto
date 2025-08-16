import { Link } from 'react-router-dom';
import cartImage from '../../assets/icons/cart.png';
import collapseButton from '../../assets/icons/collapsebutton.png';


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light px-4 py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <Link className="navbar-brand fw-bold" to="/">PLNTO</Link>

        {/* Cart icon outside the collapse */}
        <div className="d-flex align-items-center gap-3 d-lg-none">
          <span><img src={cartImage} alt="cart" style={{ width: '36px', height: '36px' }} /></span>

          <button
            className="navbar-toggler border-0 p-0 bg-transparent shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            style={{ boxShadow: 'none', outline: 'none' }}
            onMouseDown={(e) => e.preventDefault()}
          >
            <img src={collapseButton} alt="Toggle" style={{ width: '36px', height: '36px' }} />
          </button>

        </div>

        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav mx-auto gap-2">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/shop">SHOP</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/our-story">OURSTORY</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/the-process">THEPROCESS</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/stockists">STOCKISTS</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">CONTACT</Link></li>
          </ul>

          {/* Cart + Login for large screens */}
          <div className="d-none d-lg-flex align-items-center gap-3">
            <Link to="/check-delivery" className="text-decoration-none text-dark">Check Delivery</Link>
            <Link to="/login" className="text-decoration-none text-dark">Sign In</Link>
            <span><img src={cartImage} alt="cart image" style={{ width: '36px', height: '36px' }} /></span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

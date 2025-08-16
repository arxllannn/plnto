import React, { useRef, useEffect, useState } from 'react';
import bottleImage2 from '../assets/images/bottle-image2.png';

const products = [
  { title: "Whole Oat Milk", desc: "Creamy and delicious", price: "£2.99", img: bottleImage2, category: "Oat Milk" },
  { title: "Almond Milk", desc: "Light and nutty", price: "£3.49", img: bottleImage2, category: "Almond Milk" },
  { title: "Coconut Milk", desc: "Rich and tropical", price: "£3.29", img: bottleImage2, category: "Coconut Milk" },
  { title: "Barista Oat Milk", desc: "Perfect for coffee", price: "£3.79", img: bottleImage2, category: "Oat Milk" },
  { title: "Cashew Milk", desc: "Smooth and creamy", price: "£3.59", img: bottleImage2, category: "Other Flavors" },
  { title: "Chocolate Oat Milk", desc: "Sweet and indulgent", price: "£3.89", img: bottleImage2, category: "Oat Milk" },
  { title: "Vanilla Almond Milk", desc: "Subtly sweet", price: "£3.69", img: bottleImage2, category: "Almond Milk" },
  { title: "Hazelnut Milk", desc: "Rich nutty flavor", price: "£3.89", img: bottleImage2, category: "Other Flavors" },
];

const Shop = () => {
  const [selectedFilter, setSelectedFilter] = useState("All Products");

  // filter products based on selected button 
  const filteredProducts = selectedFilter === "All Products"
    ? products
    : products.filter((product) => product.category === selectedFilter);

  const modalRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleOpenModal = () => {
    setShowModal(true);
    setShowError(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setShowError(false);
  };

  const handleCheckAvailability = () => {
    setShowError(true);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <div className="container shop-wrapper">
        <div className="top-bar py-3 px-3 rounded">
          <div className="d-flex flex-column flex-md-row justify-content-md-between align-items-center text-center text-md-start">
            <span className="font-14 text-brown mb-2 mb-md-0 w-100">Check if we deliver to your area to see available products</span>
            <p
              className="mb-0 text-green fw-semibold font-14 line-height-20 w-100 d-flex justify-content-center justify-content-md-end"
              onClick={handleOpenModal}
              style={{ cursor: 'pointer' }}
            >
              ENTER POSTCODE
              <span className="ms-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.3333 4L5.99999 11.3333L2.66666 8" stroke="#53433A" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </p>
          </div>
        </div>
        <div className="delivering-area-top-bar py-2 px-2 mt-4 rounded">
          <div className='d-flex justify-content-between align-items-center'>
            <div className="d-flex">
              <div className='d-flex justify-content-center align-items-center'>
                <svg width="44" height="20" viewBox="0 0 44 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_2_2824)"><path d="M30.1673 8.33332C30.5479 10.2011 30.2767 12.1428 29.3989 13.8348C28.5211 15.5268 27.0897 16.8667 25.3436 17.6311C23.5975 18.3955 21.642 18.5381 19.8034 18.0353C17.9648 17.5325 16.3542 16.4145 15.2401 14.8678C14.126 13.3212 13.5758 11.4394 13.6812 9.53615C13.7867 7.63294 14.5414 5.8234 15.8195 4.4093C17.0977 2.9952 18.822 2.06202 20.7049 1.76537C22.5878 1.46872 24.5155 1.82654 26.1665 2.77916" stroke="#10361A" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" /><path d="M19.5 9.16671L22 11.6667L30.3333 3.33337" stroke="#10361A" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" /></g><defs><clipPath id="clip0_2_2824"><rect width="20" height="20" fill="white" transform="translate(12)" /></clipPath></defs>
                </svg>
              </div>
              <div>
                <p className="mb-0 font-weight-600 text-brown font-16">DELIVERING TO: <span className='font-weight-400 text-brown'>E14 9GE</span></p>
                <p className="mb-0 text-card-body font-weight-400 font-14">Products available for delivery to your area</p>
              </div>
            </div>
            <div>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 12L12 20" stroke="#53433A" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12 12L20 20" stroke="#53433A" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <h2 className="mb-2 font-weight-700 line-height-40 text-brown">Shop</h2>
            <div className="col-md-6">
              <p className="text-card-body font-weight-400 font-18 mb-4">
                Browse our selection of fresh, plant-based milks crafted with care and delivered right to your door.
              </p>
            </div>
          </div>
          <div className="row align-items-start gy-2 mb-4">
            <div className="col-12 col-md d-flex flex-wrap align-items-center gap-2">
              <span className="font-weight-500 font-14 line-height-20 d-flex align-items-center">
                <span className="me-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.6667 2H1.33337L6.66671 8.30667V12.6667L9.33337 14V8.30667L14.6667 2Z" stroke="#53433A" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                Filter by:
              </span>

              {["All Products", "Oat Milk", "Almond Milk", "Coconut Milk", "Other Flavors"].map((filter, i) => (
                <button
                  key={i}
                  className={`btn btn-sm ${selectedFilter === filter ? "bg-green text-white" : "bg-white text-card-body"}`}
                  onClick={() => setSelectedFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
            <div className="col-12 col-md-auto">
              <div className="d-flex align-items-center">
                <label className="me-2 font-weight-500 font-14 line-height-20">Sort by:</label>
                <select className="form-select text-card-body form-select-sm w-auto">
                  <option>Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-white">
        <div className="container">
          <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-40 mt-5">
            {filteredProducts.map((product, i) => (
              <div className="col" key={i}>
                <div className="card h-100 text-center card-border">
                  <img
                    src={product.img}
                    className="card-img-top"
                    alt={product.title}
                    style={{ objectFit: "contain" }}
                  />
                  <div className="card-body">
                    <h6 className="card-title text-brown font-weight-600 line-height-28 font-18 text-start">{product.title}</h6>
                    <p className="card-text font-14 line-height-20 text-card-body text-start" style={{ fontSize: "13px" }}>{product.desc}</p>
                    <div className="font-weight-500 line-height-24 text-brown text-start">{product.price}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className={`modal fade show`}
          style={{ display: 'block' }}
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" ref={modalRef}>
            <div className="modal-content px-4">
              <div className="row py-4">
                <div className="col-md-12 d-flex align-items-center justify-content-between">
                  <h5 className="text-brown font-weight-600 line-height-28 font-20">Check Delivery Availablity</h5>
                  {!showError ? (
                    <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.1755 9L12.0088 18.1667L7.84216 14" stroke="#53433A" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : (
                    <svg onClick={handleCloseModal} style={{ cursor: 'pointer' }} width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 9.5L9 19.5" stroke="#53433A" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M9 9.5L19 19.5" stroke="#53433A" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  )}
                </div>

                {/* Show error-box */}
                {!isMobile && showError && (
                  <div className="col-md-12 mt-2 mb-4 error-box">
                    <div className='d-flex bg-pink rounded-3 p-2'>
                      <div className='d-flex justify-content-center'>
                        <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.89018 18.5756C11.5215 18.5756 14.4652 15.6316 14.4652 12.0001C14.4652 8.36851 11.5215 5.42456 7.89018 5.42456C4.25891 5.42456 1.31519 8.36851 1.31519 12.0001C1.31519 15.6316 4.25891 18.5756 7.89018 18.5756Z" stroke="#EF4444" stroke-width="1.3151" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M7.88989 9.36987V12.0001" stroke="#EF4444" stroke-width="1.3151" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M7.88989 14.6301H7.89647" stroke="#EF4444" stroke-width="1.3151" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </div>
                      <div>
                        <p className='mb-0 text-danger font-18 font-weight-500 line-height-24 text-dark-red'>Sorry, we're not delivering in your area yet.</p>
                        <p className="mb-0 text-danger-500 font-weight-400 font-14 text-light-red">Join our waiting list to be notified when we expand to your location</p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="col-md-12 mt-2">
                  <p className="mb-2 font-weight-500 line-height-20 font-14">
                    <span className="me-2"><svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_155_12098)">
                        <path d="M13.8421 6.66659C13.8421 9.99525 10.1494 13.4619 8.90942 14.5326C8.7939 14.6194 8.65328 14.6664 8.50875 14.6664C8.36422 14.6664 8.2236 14.6194 8.10808 14.5326C6.86808 13.4619 3.17542 9.99525 3.17542 6.66659C3.17542 5.2521 3.73732 3.89554 4.73751 2.89535C5.73771 1.89516 7.09426 1.33325 8.50875 1.33325C9.92324 1.33325 11.2798 1.89516 12.28 2.89535C13.2802 3.89554 13.8421 5.2521 13.8421 6.66659Z" stroke="#8A7968" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M8.50879 8.66675C9.61336 8.66675 10.5088 7.77132 10.5088 6.66675C10.5088 5.56218 9.61336 4.66675 8.50879 4.66675C7.40422 4.66675 6.50879 5.56218 6.50879 6.66675C6.50879 7.77132 7.40422 8.66675 8.50879 8.66675Z" stroke="#8A7968" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                      </g>
                      <defs>
                        <clipPath id="clip0_155_12098">
                          <rect width="16" height="16" fill="white" transform="translate(0.508789)" />
                        </clipPath>
                      </defs>
                    </svg>
                    </span>Enter your postcode to check if we deliver to your area
                  </p>
                  <input type="text" placeholder="e.g. E14 9GE" className="theme-input" />
                </div>

                <div className="col-md-12 mt-3">
                  <label className="font-weight-500 line-height-20 font-14 mb-2">Email</label>
                  <div className="position-relative">
                    <input type="email" placeholder="your@email.com" className="theme-input" />
                    <svg className="position-absolute top-25 right-10" width="21" height="20" viewBox="0 0 21 20">...</svg>
                  </div>
                </div>

                {/* Show error below email input if mobile */}
                {isMobile && showError && (
                  <div className="col-md-12 mt-4 mb-4 error-box">
                    <div className='d-flex bg-pink rounded-3 p-3'>
                      <div className='d-flex justify-content-center'>
                        <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.89018 18.5756C11.5215 18.5756 14.4652 15.6316 14.4652 12.0001C14.4652 8.36851 11.5215 5.42456 7.89018 5.42456C4.25891 5.42456 1.31519 8.36851 1.31519 12.0001C1.31519 15.6316 4.25891 18.5756 7.89018 18.5756Z" stroke="#EF4444" stroke-width="1.3151" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M7.88989 9.36987V12.0001" stroke="#EF4444" stroke-width="1.3151" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M7.88989 14.6301H7.89647" stroke="#EF4444" stroke-width="1.3151" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </div>
                      <div>
                        <p className='mb-0 text-danger font-18 font-weight-500 line-height-24 text-dark-red'>Sorry, we're not delivering in your area yet.</p>
                        <p className="mb-0 text-danger-500 font-weight-400 font-14 text-light-red">Join our waiting list to be notified when we expand to your location</p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="col-md-12">
                  <div>
                    <button className="mt-3 w-100 btn bg-green text-white" onClick={handleCheckAvailability}>
                      CHECK AVAILABLITY
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {showModal && <div className="modal-backdrop fade show" onClick={handleCloseModal}></div>}
    </div>
  );
};

export default Shop;
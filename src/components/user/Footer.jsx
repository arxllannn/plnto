const Footer = () => {
  return (
    <footer className="bg-green text-white pt-4 pb-3">
      <div className="container">
        <div className="row mb-4 mt-5">
          {/* Logo and Description */}
          <div className="col-md-3 mb-4 mb-md-0">
            <h5 className="fw-bold">PLNTO</h5>
            <p className="text-white-50">
              Fresh plant-based milk alternatives,<br />
              made with love and delivered to your door.
            </p>
            <div className="d-flex gap-3 mt-2">
              <a href="#" className="text-white">
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.1667 2.1665H5.83341C3.53223 2.1665 1.66675 4.03198 1.66675 6.33317V14.6665C1.66675 16.9677 3.53223 18.8332 5.83341 18.8332H14.1667C16.4679 18.8332 18.3334 16.9677 18.3334 14.6665V6.33317C18.3334 4.03198 16.4679 2.1665 14.1667 2.1665Z" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M13.3333 9.97476C13.4361 10.6683 13.3176 11.3766 12.9947 11.9989C12.6718 12.6213 12.1609 13.1259 11.5346 13.4412C10.9083 13.7564 10.1986 13.8661 9.50641 13.7547C8.81419 13.6433 8.17472 13.3165 7.67895 12.8207C7.18318 12.325 6.85636 11.6855 6.74497 10.9933C6.63359 10.3011 6.74331 9.59134 7.05852 8.96507C7.37374 8.33881 7.87841 7.82788 8.50074 7.50496C9.12307 7.18205 9.83138 7.06359 10.5249 7.16643C11.2324 7.27133 11.8873 7.60098 12.393 8.10669C12.8987 8.61239 13.2283 9.26733 13.3333 9.97476Z" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M14.5833 5.9165H14.5916" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </a>
              <a href="#" className="text-white">
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.9999 2.1665H12.4999C11.3948 2.1665 10.335 2.60549 9.55364 3.38689C8.77224 4.16829 8.33325 5.2281 8.33325 6.33317V8.83317H5.83325V12.1665H8.33325V18.8332H11.6666V12.1665H14.1666L14.9999 8.83317H11.6666V6.33317C11.6666 6.11216 11.7544 5.9002 11.9107 5.74391C12.0669 5.58763 12.2789 5.49984 12.4999 5.49984H14.9999V2.1665Z" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </a>
              <a href="#" className="text-white">
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.3334 3.83319C18.3334 3.83319 17.7501 5.58319 16.6667 6.66652C18.0001 14.9999 8.83341 21.0832 1.66675 16.3332C3.50008 16.4165 5.33341 15.8332 6.66675 14.6665C2.50008 13.4165 0.416748 8.49986 2.50008 4.66652C4.33341 6.83319 7.16675 8.08319 10.0001 7.99986C9.25008 4.49986 13.3334 2.49986 15.8334 4.83319C16.7501 4.83319 18.3334 3.83319 18.3334 3.83319Z" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div className="col-md-3 mb-4 mb-md-0">
            <h6 className="fw-bold mb-3">Shop</h6>
            <ul className="list-unstyled">
              <li className="mt-2"><a href="#" className="text-white-50 text-decoration-none">All Products</a></li>
              <li className="mt-2"><a href="#" className="text-white-50 text-decoration-none">Oat Milk</a></li>
              <li className="mt-2"><a href="#" className="text-white-50 text-decoration-none">Almond Milk</a></li>
              <li className="mt-2"><a href="#" className="text-white-50 text-decoration-none">Special Blends</a></li>
              <li className="mt-2"><a href="#" className="text-white-50 text-decoration-none">Subscriptions</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="col-md-3 mb-4 mb-md-0">
            <h6 className="fw-bold mb-3">Company</h6>
            <ul className="list-unstyled">
              <li className="mt-2"><a href="#" className="text-white-50 text-decoration-none">Our Story</a></li>
              <li className="mt-2"><a href="#" className="text-white-50 text-decoration-none">The Process</a></li>
              <li className="mt-2"><a href="#" className="text-white-50 text-decoration-none">Stockists</a></li>
              <li className="mt-2"><a href="#" className="text-white-50 text-decoration-none">Contact Us</a></li>
              <li className="mt-2"><a href="#" className="text-white-50 text-decoration-none">FAQ</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-3">
            <h6 className="fw-bold mb-3">Contact Us</h6>
            <p className="mb-1 mt-2 text-white-50">
              <span><svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_2_207)">
                  <path d="M15 3H3C2.17157 3 1.5 3.67157 1.5 4.5V13.5C1.5 14.3284 2.17157 15 3 15H15C15.8284 15 16.5 14.3284 16.5 13.5V4.5C16.5 3.67157 15.8284 3 15 3Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M16.5 5.25L9.7725 9.525C9.54095 9.67007 9.27324 9.74701 9 9.74701C8.72676 9.74701 8.45905 9.67007 8.2275 9.525L1.5 5.25" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_2_207">
                    <rect width="18" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              </span> hello@plnto.com
            </p>
            <p className="mt-2 text-white-50">
              <span><svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_2_216)">
                  <path d="M16.5001 12.6901V14.9401C16.5009 15.1489 16.4581 15.3557 16.3745 15.5471C16.2908 15.7385 16.168 15.9103 16.0141 16.0515C15.8602 16.1927 15.6785 16.3002 15.4806 16.3671C15.2828 16.434 15.0731 16.4589 14.8651 16.4401C12.5572 16.1893 10.3403 15.4007 8.39257 14.1376C6.58044 12.9861 5.04407 11.4497 3.89257 9.63757C2.62506 7.68098 1.83625 5.45332 1.59007 3.13507C1.57133 2.92767 1.59598 2.71864 1.66245 2.52129C1.72892 2.32394 1.83575 2.14259 1.97615 1.98879C2.11654 1.83499 2.28743 1.7121 2.47792 1.62796C2.6684 1.54382 2.87433 1.50027 3.08257 1.50007H5.33257C5.69655 1.49649 6.04942 1.62538 6.32539 1.86272C6.60137 2.10006 6.78163 2.42966 6.83257 2.79007C6.92754 3.51012 7.10366 4.21712 7.35757 4.89757C7.45848 5.16602 7.48032 5.45776 7.4205 5.73823C7.36069 6.01871 7.22172 6.27616 7.02007 6.48007L6.06757 7.43257C7.13524 9.31023 8.68991 10.8649 10.5676 11.9326L11.5201 10.9801C11.724 10.7784 11.9814 10.6395 12.2619 10.5796C12.5424 10.5198 12.8341 10.5417 13.1026 10.6426C13.783 10.8965 14.49 11.0726 15.2101 11.1676C15.5744 11.219 15.9071 11.4025 16.145 11.6832C16.3828 11.9639 16.5092 12.3223 16.5001 12.6901Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_2_216">
                    <rect width="18" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              </span> +44 207 123 4567
            </p>

            <h6 className="fw-bold mt-4 mb-2">Delivery Areas</h6>
            <p className="text-white-50 mb-0">
              Central London, East London, North London
            </p>
          </div>
        </div>

        <hr className="border-secondary" />

        <div className="footer-bottom row text-white-50 py-4">
          <div className="col-md-6 footer-copyright">
            <p className="mb-0 font-14">© 2025 Plnto. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-md-end mt-2 mt-md-0 footer-links">
            <a href="#" className="text-white-50 font-14 text-decoration-none me-3">Privacy Policy</a>
            <a href="#" className="text-white-50 font-14 text-decoration-none me-3">Terms of Service</a>
            <a href="#" className="text-white-50 font-14 text-decoration-none">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

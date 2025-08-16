import { LightGreenTickSvg } from '../components/Icons';

const TheStockists = () => {
  return (
    <div className="the-stocikists-content container bg-theme">
      {/* Stockist Header */}
      <div className="page-title my-5 pt-3">
        <div className="text-center mt-4 mb-3">
          <h2 className="text-brown font-60 font-weight-700 px-5 ">Stock Plnto – Plant-Based Milk for Forward-Thinking Businesses</h2>
          <div className="page-header-content">
            <p className="text-card-body font-eight-400 line-height-28 font-18 px-100">
              Are you a café owner, independent grocer, or retail buyer looking to offer your customers something fresher, more sustainable, and truly local?
            </p>
            <p className="text-card-body font-eight-400 line-height-28 font-18 px-100">
              At Plnto, we produce freshly made, oat-based milk in East London and deliver them twice a week in reusable glass bottles. Our award-winning milk is designed for modern businesses that care about the environment, food quality, the planet, and what goes into their fridges.
            </p>
            <p className="text-card-body font-eight-400 line-height-28 font-18 px-100">
              Whether you run a neighbourhood coffee shop, deli, or a retail store, we’d love to work with you.
            </p>
          </div>
        </div>
      </div>
      {/* Why Partner Section */}
      <div className="the-stocikists-body bg-white py-4 px-5 rounded shadow-sm mb-4">
        <h2 className="text-center pt-3 px-80 text-green font-weight-700 line-height-36 font-30 mb-4">Why Partner with Plnto?</h2>
        <div className="row">
          <div className="col-md-4">
            <div className='d-flex'>
              <div>{LightGreenTickSvg}</div>
              <div className='ms-3'>
                <h5 className="text-brown font-eight-500 line-height-28 font-18"> Fresh & Delicious</h5>
                <p className='text-card-body font-eight-400 line-height-28 font-16 pe-5'>Our milks are made fresh and delivered
                  within hours</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className='d-flex'>
              <div>{LightGreenTickSvg}</div>
              <div className='ms-3'>
                <h5 className="text-brown font-eight-500 line-height-28 font-18">Zero Waste</h5>
                <p className='text-card-body font-eight-400 line-height-28 font-16 pe-5'>Reusable glass bottles collected and
                  refilled</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className='d-flex'>
              <div>{LightGreenTickSvg}</div>
              <div className='ms-3'>
                <h5 className="text-brown font-eight-500 line-height-28 font-18">Clean Ingredients</h5>
                <p className='text-card-body font-eight-400 line-height-28 font-16 pe-5'>No gums, additives, or preservatives</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-3">
            <div className='d-flex'>
              <div>{LightGreenTickSvg}</div>
              <div className='ms-3'>
                <h5 className="text-brown font-eight-500 line-height-28 font-18">Reliable Delivery</h5>
                <p className='text-card-body font-eight-400 line-height-28 font-16 pe-5'>Twice-weekly drops across London</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-3">
            <div className='d-flex'>
              <div>{LightGreenTickSvg}</div>
              <div className='ms-3'>
                <h5 className="text-brown font-eight-500 line-height-28 font-18">Local & Independent</h5>
                <p className='text-card-body font-eight-400 line-height-28 font-16 pe-5'>Supporting a more sustainable food
                  system</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Trade Enquiry Form */}
      <div className="trade-enquiry-form bg-white p-4  mb-5 rounded shadow-sm">
        <h4 className="text-brown font-weight-700 font-30 line-height-36">Trade Enquiry Form</h4>
        <div className='row'>
          <div className='col-md-6'>
            <p className="py-3 text-card-body font-eight-400 line-height-28 font-18">
              Interested in stocking Plnto? Fill out the form below and we’ll be in touch within 1–2 business days.
            </p>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <div className="mb-3">
              <label htmlFor="businessName" className='form-label font-eight-500 font-14 line-height-14 text-brown'>Bussiness Name</label>
              <input type="text" className="theme-input border-color-brown" placeholder="Your business name" />
            </div>
          </div>
          <div className='col-md-12'>
            <div className="mb-3">
              <label htmlFor="businessName" className='form-label font-eight-500 font-14 line-height-14 text-brown'>Your Name</label>
              <input type="text" className="theme-input" placeholder="Your full name" />
            </div>
          </div>
        </div>
        <div className='row d-flex justify-content-center'>
          <div className='col-md-4'>
            <div className="mb-3">
              <label htmlFor="businessName" className='form-label font-eight-500 font-14 line-height-14 text-brown'>Email Address</label>
              <input type="email" className="theme-input" placeholder="your@business.com" />
            </div>
          </div>
          <div className='col-md-4'>
            <div className="mb-3">
              <label htmlFor="businessName" className='form-label font-eight-500 font-14 line-height-14 text-brown'>Phone Number</label>
              <input type="number" className="theme-input" placeholder="Your phone number" />
            </div>
          </div>
        </div>
        <div className='row trade-enquiry-bussiness-type'>
          <div className='col-md-12'>
            {/* Business Type */}
            <div className="mb-3">
              <label className="form-label font-eight-500 font-14 line-height-14 mb-3 text-brown">Business Type</label>
              <div className="form-check mb-1">
                <input className="form-check-input" type="checkbox" name="businessType" id="cafe" />
                <label className="form-check-label" htmlFor="cafe">Café / Coffee Shop</label>
              </div>
              <div className="form-check mb-1">
                <input className="form-check-input" type="checkbox" name="businessType" id="grocery" />
                <label className="form-check-label" htmlFor="grocery">Deli / Grocery</label>
              </div>
              <div className="form-check mb-1">
                <input className="form-check-input" type="checkbox" name="businessType" id="restaurant" />
                <label className="form-check-label" htmlFor="restaurant">Restaurant</label>
              </div>
              <div className="form-check mb-1">
                <input className="form-check-input" type="checkbox" name="businessType" id="other" />
                <label className="form-check-label" htmlFor="other">Other</label>
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label font-eight-500 font-14 line-height-14 text-brown mb-3">Location</label>
              <input type="text" className="theme-input" placeholder="Your business location" />
            </div>
            <div className="mb-3">
              <label className="form-label font-eight-500 font-14 line-height-14 mb-3 text-brown">Which products are you interested in?</label>
              <div className="form-check mb-1">
                <input className="form-check-input" type="checkbox" id="oatMilk" />
                <label className="form-check-label" htmlFor="oatMilk">Oat Milk</label>
              </div>
              <div className="form-check mb-1">
                <input className="form-check-input" type="checkbox" id="almondMilk" />
                <label className="form-check-label" htmlFor="almondMilk">Almond Milk</label>
              </div>
              <div className="form-check mb-1">
                <input className="form-check-input" type="checkbox" id="coconutMilk" />
                <label className="form-check-label" htmlFor="coconutMilk">Coconut Milk</label>
              </div>
              <div className="mb-3 mt-3">
                <label className="form-label font-eight-500 font-14 line-height-14 mb-2 text-brown">Tell us about your business</label>
                <textarea className="theme-input" rows="5" placeholder="Share some details about your business..."></textarea>
              </div>
              <div className="mb-3">
                <label className="form-label font-eight-500 font-14 line-height-14 mb-2 text-brown">How did you hear about Plnto?</label>
                <input type="text" className="theme-input" placeholder="Where did you discover us?" />
              </div>
              <button type="submit" className="btn bg-green mt-2 font-14 font-eight-500 line-height-20 text-white px-4 py-2">Submit Enquiry</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheStockists;
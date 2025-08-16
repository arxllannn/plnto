import React, { useState } from 'react';
import bottleImage2 from '../assets/images/bottle-image2.png';
import { TickSvg, ThumbSvg, LeafeSvg, TimeClockSvg, BottleSvg, CalenderSvg2, CalenderSvg, CartSvg } from '../components/Icons';

function ProductDetails() {
  const [activeTab, setActiveTab] = useState('one-time');
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity(prev => prev + 1);
  const decrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));


  return (
    <div className="container py-5">
      {/* Product Top Section */}
      <div className="row mb-4 product-details-wrapper">
        <div className="col-md-6 text-center product-details-header-img">
          <img src={bottleImage2} className="w-100 h-100 border rounded" />
        </div>
        <div className="col-md-6">
          <h3 className="font-weight-700 font-36 line-height-40 text-brown">Whole Oat Milk</h3>
          <p className="text-card-body font-weight-400 font-18">Creamy. Fresh. Naturally Nourishing.</p>
          <h4 className="font-24 font-weight-600 text-brown line-height-32">£2.99</h4>
          <p className="text-card-body font-weight-400 font-16 line-height-24 mt-3">
            Our flagship product, made with organic oats grown in the UK. This creamy, delicious plant milk is perfect for your morning coffee, cereal, or drinking straight from the glass.
          </p>
          <div className="mb-4">
            <label className="form-label text-brown font-weight-500 font-14 line-height-20">Size</label>
            <div className="d-flex gap-2">
              <button className="btn bg-white text-card-body">500ML - £1.99</button>
              <button className="btn bg-green text-white">1L - £2.99</button>
            </div>
          </div>
          <div className="button-tabs mb-4">
            <label className="form-label text-brown font-weight-500 font-14 line-height-20">Delivery Options</label>
            <div className="d-flex flex-column flex-md-row gap-2">
              <button
                className={`btn ${activeTab === 'one-time' ? 'bg-green text-white' : 'bg-white text-card-body'} w-sm-100`}
                onClick={() => setActiveTab('one-time')}
              >
                ONE-TIME PURCHASE
              </button>
              <button
                className={`btn ${activeTab === 'subscribe' ? 'bg-green text-white' : 'bg-white text-card-body'} w-sm-100`}
                onClick={() => setActiveTab('subscribe')}
              >
                SUBSCRIBE & SAVE
              </button>
            </div>
          </div>
          {activeTab === 'subscribe' && (
            <div className='subscribe-and-save-tab'>
              <div className="mb-4">
                <div className='bg-light-orange px-3 py-2 rounded'>
                  <p className='d-flex align-items-center mb-0'>Delivered fresh to your door multiple times a week. Pause or cancel anytime</p>
                </div>
              </div>
              <div className='mb-2'>
                <div className='bg-white px-3 py-2 rounded'>
                  <div className='row'>
                    <div className="col-12">
                      <p className="d-flex align-items-center text-center mt-3 mb-0">
                        <span className="me-2 mt-r-3">{CalenderSvg}</span>
                        Delivery Days
                      </p>
                      <p className='font-weight-400 mt-4 text-river font-16 line-height-24'>
                        Choose which days you'd like your products delivered and how many
                        items you want on each delivery day
                      </p>
                    </div>
                    <div className="col-12 d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <p className="bg-light-orange px-2 py-2 font-12 line-height-16 rounded mb-0 me-2">
                          Wed
                        </p>
                        <p className="font-weight-500 text-brown font-18 line-height-24 mb-0">
                          Wednesday
                        </p>
                      </div>
                      <div className='squre-border rounded'>
                        <div className="input-group" style={{ width: '150px' }}>
                          <button className="btn bg-white text-card-body px-3" onClick={decrement}>-</button>
                          <input
                            type="text"
                            className="form-control border-none text-card-body px-4 text-center"
                            value={quantity}
                            readOnly
                          />
                          <button className="btn bg-white text-card-body px-3" onClick={increment}>+</button>
                        </div>
                      </div>
                    </div>
                    <div className='bottom-border mb-4 mt-4'></div>
                    <div className="col-12 d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <p className="bg-light-orange px-2 py-2 font-12 line-height-16 rounded mb-0 me-2">
                          THU
                        </p>
                        <p className="font-weight-500 text-brown font-18 line-height-24 mb-0">
                          Thursday
                        </p>
                      </div>
                      <div className='squre-border rounded'>
                        <div className="input-group" style={{ width: '150px' }}>
                          <button className="btn bg-white text-card-body px-3" onClick={decrement}>-</button>
                          <input
                            type="text"
                            className="form-control border-none text-card-body px-4 text-center"
                            value={quantity}
                            readOnly
                          />
                          <button className="btn bg-white text-card-body px-3" onClick={increment}>+</button>
                        </div>
                      </div>
                    </div>
                    <div className='bottom-border mb-4 mt-4'></div>
                    <div className='col-12'>
                      <button className="btn bg-theme py-2 text-river w-100 font-16 line-height-20 d-flex align-items-center justify-content-center">
                        <span className='me-2 mt-r-3'>{CalenderSvg2}</span> Add Another Delivery Day
                      </button>

                      <div className='bg-theme px-3 py-2 rounded mt-3'>
                        <h6 className='font-weight-500 text-orange font-18 line-height-24 mt-2'>Please select at least one delivery day</h6>
                        <p className='font-weight-400 mt-1 text-orange font-14 line-height-20'>
                          Choose which days you'd like your products delivered and set the quantity
                          for each day
                        </p>
                      </div>
                      <div className='bg-theme px-3 py-2 rounded mt-3 mb-2'>
                        <h6 className='font-weight-500 text-brown font-18 line-height-24 mt-2'>Delivery Information</h6>
                        <p className='font-weight-400 mt-1 text-card-body font-14 line-height-20 mb-0'>
                          We deliver fresh, plant-based milk straight to your doorstep — zero waste, always fresh.
                        </p>
                        <p className='font-weight-400 text-card-body font-14 line-height-20 mb-0'>
                          Wednesday between 6:00 AM - 9:00 PM
                        </p>
                        <p className='font-weight-400 text-card-body font-14 line-height-20'>
                          Saturday before 8:00 AM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="btn bg-green font-weight-500 font-14 line-height-20 text-white btn-lg w-100 d-flex align-items-center justify-content-center mt-3">
                  <span className="me-2 d-flex align-items-center">
                    {CartSvg}
                  </span>
                  SUBSCRIBE NOW
                </button>
              </div>
            </div>
          )}

          {activeTab === 'one-time' && (
            <div className='one-time-tab'>
              <div className="mb-4">
                <label className="form-label text-brown font-weight-500 font-14 line-height-20">Quantity</label>
                <div className="input-group" style={{ width: '150px' }}>
                  <button className="btn bg-white squre-border text-card-body  px-3" onClick={decrement}>-</button>
                  <input
                    type="text"
                    className="form-control text-card-body px-4 card-border text-center"
                    value={quantity}
                    readOnly
                  />
                  <button className="btn bg-white squre-border text-card-body  px-3" onClick={increment}>+</button>
                </div>
              </div>
              <button className="btn bg-green font-weight-500 font-14 line-height-20 text-white btn-lg w-100 d-flex align-items-center justify-content-center mt-4">
                <span className="me-2 icon-center">
                  {CartSvg}
                </span>
                ADD TO CART
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Info Section */}
      <div className="info-section row pb-2 px-2 pt-4 rounded mb-4">
        <div className="col-md-4 bg-light pt-4 px-4 pb-2 rounded">
          <h6 className='font-weight-600 font-20 line-height-28'><span>
            {LeafeSvg}
          </span> Why You'll Love It</h6>
          <div>
            <p className='d-flex align-items-center text-card-body font-weight-400 font-16 line-height-24'>
              <span className='me-2 icon-center'>{TickSvg}</span>100% Plant-Based Goodness
            </p>
            <p className='d-flex align-items-center text-card-body font-weight-400 font-16 line-height-24'>
              <span className='me-2 icon-center'>{TickSvg}</span>Freshly Made – delivered twice a week
            </p>
            <p className='d-flex align-items-center text-card-body font-weight-400 font-16 line-height-24'>
              <span className='me-2 icon-center'>{TickSvg}</span>No Preservatives
            </p>
            <p className='d-flex align-items-center text-card-body font-weight-400 font-16 line-height-24'>
              <span className='me-2 icon-center mt-r-25'>{TickSvg}</span>Sustainably Packaged in reusable glass bottles
            </p>
          </div>
          <h6 className='font-weight-600 font-20 line-height-28'>Serving Ideas</h6>
          <div>
            <p className='d-flex align-items-center text-card-body font-weight-400 font-16 line-height-24'>
              <span className='me-2 icon-center'>{ThumbSvg}</span>Froths beautifully for coffee
            </p>
            <p className='d-flex align-items-center text-card-body font-weight-400 font-16 line-height-24'>
              <span className='me-2 icon-center'>{ThumbSvg}</span>Blends smoothly into smoothies
            </p>
            <p className='d-flex align-items-center text-card-body font-weight-400 font-16 line-height-24'>
              <span className='me-2 icon-center'>{ThumbSvg}</span>Enriches your breakfast bowls and bakes
            </p>
          </div>
        </div>
        <div className="col-md-4 bg-light p-4">
          <h6 className='font-weight-600 font-20 line-height-28'>Ingredients</h6>
          <p className='text-card-body font-weight-400 font-16 line-height-24'>Water, 10% Gluten-Free Oats, Sea Salt</p>
          <div className='d-flex'>
            <div className='me-2 d-flex align-items-center'>
              {TimeClockSvg}
            </div>
            <div>
              <h6 className='font-weight-500 font-18 line-height-24'>SHELF LIFE:</h6>
              <p className='text-card-body font-weight-400 font-14 line-height-24'>Keep refrigerated. Best enjoyed within 3-4 days of delivery.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 bg-light rounded p-4">
          <h6 className='font-weight-600 font-20 line-height-28'><span>
            {BottleSvg}
          </span> Bottle Collection</h6>
          <p className='text-card-body font-weight-400 font-16 line-height-20'>We collect your empty glass bottles on your next delivery day – just leave them out front – every bottle makes a big difference.</p>
          <div className='bg-theme px-3 pt-4 pb-1 rounded'>
            <h6 className='font-weight-500 font-16 line-height-28 text-green'><span className='me-2 icon-center'>{TickSvg}</span> Environmentally Friendly</h6>
            <p className='text-card-body font-weight-400 font-12 line-height-20 pe-5 pe-md-3'>We clean and reuse glass bottles again and again to reduce waste and environmental impact.</p>
          </div>
        </div>
      </div>
      {/* you may also like section */}
      <h5 className="mb-3 font-24 line-height-32 font-weight-700 text-brown">You May Also Like</h5>
      <div className="row px-3 mb-4">
        <div className="col-6 col-md-4 mb-4">
          <div className="bg-white shadow-sm rounded text-center p-0 h-100">
            <img src={bottleImage2} className="w-100 mb-2" alt="Almond Milk" />
            <p className="text-start font-weight-600 font-18 line-height-28 text-brown px-3">Almond Milk</p>
            <p className="text-card-body font-weight-400 font-14 line-height-20 text-start px-3">Light and nutty</p>
            <div className="font-weight-600 font-16 line-height-24 text-brown text-start px-3 pb-3">£3.49</div>
          </div>
        </div>

        <div className="col-6 col-md-4 mb-4">
          <div className="bg-white shadow-sm rounded text-center p-0 h-100">
            <img src={bottleImage2} className="w-100 mb-2" alt="Coconut Milk" />
            <p className="text-start font-weight-600 font-18 line-height-28 text-brown px-3">Coconut Milk</p>
            <p className="text-card-body font-weight-400 font-14 line-height-20 text-start px-3">Rich and tropical</p>
            <div className="font-weight-600 font-16 line-height-24 text-brown text-start px-3 pb-3">£2.99</div>
          </div>
        </div>

        <div className="col-6 col-md-4 mb-4">
          <div className="bg-white shadow-sm rounded text-center p-0 h-100">
            <img src={bottleImage2} className="w-100 mb-2" alt="Barista Oat Milk" />
            <p className="text-start font-weight-600 font-18 line-height-28 text-brown px-3">Barista Oat Milk</p>
            <p className="text-card-body font-weight-400 font-14 line-height-20 text-start px-3">Perfect for coffee</p>
            <div className="font-weight-600 font-16 line-height-24 text-brown text-start px-3 pb-3">£3.79</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
import { Link } from 'react-router-dom';
import bottleImage from '../assets/images/bottlehero.png';
import leafImage from '../assets/icons/leaf.png';
import plantImage from '../assets/icons/plant.png';
import dropImage from '../assets/icons/drop.png';
import glassBottleImage from '../assets/icons/bottle.png';
import bottleImage2 from '../assets/images/bottle-image2.png';
import { TickSvg, HomeLeafSvg, HomeNoSinglePlasticSvg, HomeTreeSvg, HomeTree2Svg , RightArrowSvg} from '../components/Icons';

// static json data for our products cards
const productData = [
  { id: 1, type: 'oat', title: 'Whole Oat Milk', desc: 'Creamy and delicious', price: '£2.99' },
  { id: 2, type: 'nut', title: 'Almond Milk', desc: 'Light and nutty', price: '£3.49' },
  { id: 3, type: 'special', title: 'Coconut Milk', desc: 'Rich and tropical', price: '£3.99' },
  { id: 4, type: 'oat', title: 'Barista Oat Milk', desc: 'Perfect for coffee', price: '£2.99' },
];

// component help for our products 
const ProductsSection = () => {
  const renderCards = (filterType, limit = 4) => {
    const filtered = filterType === 'all'
      ? productData.slice(0, limit)
      : productData.filter(p => p.type === filterType).slice(0, limit);

    return filtered.map((p, i) => (
      <div className="col-6" key={i}>
        <div className="card h-100">
          <img src={bottleImage2} className="card-img-top" alt="Product" />
          <div className="card-body">
            <h5 className="card-title text-start fw-bold text-brown">{p.title}</h5>
            <p className="card-text text-start text-card-body font-eight-400">{p.desc}</p>
            <p className="font-weight-500 line-height-24 text-brown text-start">{p.price}</p>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <section className="our-products py-100 text-center">
      <div className="container">
        <h2 className="fw-bold text-brown font-36">Our Products</h2>
        <p className="text-muted mb-4">
          Discover our range of freshly made plant milks, crafted with care and delivered to your door.
        </p>

        {/* Desktop Tabs */}
        <ul className="nav nav-pills justify-content-center mb-4 gap-2 d-none d-md-flex" id="productTabs" role="tablist">
          <li className="nav-item">
            <button className="nav-link active" data-bs-toggle="pill" data-bs-target="#all" type="button">ALL PRODUCTS</button>
          </li>
          <li className="nav-item">
            <button className="nav-link" data-bs-toggle="pill" data-bs-target="#oat" type="button">OAT MILK</button>
          </li>
          <li className="nav-item">
            <button className="nav-link" data-bs-toggle="pill" data-bs-target="#nut" type="button">NUT MILK</button>
          </li>
          <li className="nav-item">
            <button className="nav-link" data-bs-toggle="pill" data-bs-target="#special" type="button">SPECIAL BLENDS</button>
          </li>
        </ul>

        {/* Desktop Tab Content */}
        <div className="tab-content d-none d-md-block">
          <div className="tab-pane fade show active" id="all">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
              {renderCards('all')}
            </div>
          </div>
          <div className="tab-pane fade" id="oat">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
              {renderCards('oat')}
            </div>
          </div>
          <div className="tab-pane fade" id="nut">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
              {renderCards('nut')}
            </div>
          </div>
          <div className="tab-pane fade" id="special">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
              {renderCards('special')}
            </div>
          </div>
          <button className="btn bg-green text-white mt-4">VIEW ALL PRODUCTS</button>
        </div>

        {/* Mobile: Button First, then 2 Cards */}
        <div className="d-block d-md-none">
          <button className="btn bg-green text-white mb-3">VIEW ALL PRODUCTS</button>
          <div className="row g-3">
            {renderCards('all', 2)}
          </div>
        </div>
      </div>
    </section>
  );
};


function Home() {
  return (
    <div>
      <header className="header">
        <div className="container">
          <div className="row header-content">
            <div className="col-6 text-center text-md-start mb-5 mb-md-0">
              <div className="header-title">
                <h1 className="fw-bold display-5 text-brown">Fresh plant m*lk,</h1>
                <h1 className="fw-bold display-5 text-green">made in London.</h1>
              </div>
              <p className="header-description">
                Delicious plant-based drinks made from the finest ingredients, freshly prepared and delivered straight to your door.
              </p>
              <div className="header-buttons">
                <Link to="/shop" className="btn bg-green text-white">SHOP NOW
                  <span className="ms-2 icon-center">
                      {RightArrowSvg}
                  </span>
                </Link>
                <Link to="/our-story" className="btn bg-light-orange border-brown">OUR STORY</Link>
              </div>
            </div>
            <div className="col-6 text-center">
              <img src={bottleImage} alt="Oat Drink" style={{ height: '300px' }} />
            </div>
          </div>
        </div>
      </header>

      <section className="bg-light text-center py-100">
        <div className="container">
          <h2 className="fw-bold text-brown font-36">Why Choose Plnto</h2>
          <p className="text-muted mb-5 why-choose-title">Our commitment to quality and sustainability makes Plnto different from other milk alternatives</p>
          <div className='row g-4'>
            <div className='col-md-3'>
              <div className='card why-choose h-100'>
                <div className='card-body py-4'>
                  <img src={leafImage} alt="Oat Drink" className="card-img-top" />
                  <h5 className='card-title fw-bold font-20'>Fresh</h5>
                  <p className='card-text font-16 px-3 text-center text-card-body'>Made fresh daily with natural ingredients you can trust.</p>
                  <p className='card-text text-green font-weight-600'>
                    <span className='me-2'>{TickSvg}</span>
                    Plnto Promise
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='card why-choose h-100'>
                <div className='card-body py-4'>
                  <img src={plantImage} alt="Oat Drink" className="card-img-top" />
                  <h5 className='card-title fw-bold font-20'>Plant-Based</h5>
                  <p className='card-text font-16 px-3 text-center text-card-body'>100% plant-based and environmentally friendly.</p>
                  <p className='card-text text-green font-weight-600'>
                    <span className='me-2'>{TickSvg}</span>
                    Plnto Promise
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='card why-choose h-100'>
                <div className='card-body py-4'>
                  <img src={dropImage} alt="Oat Drink" className="card-img-top" />
                  <h5 className='card-title fw-bold font-20'>No Preservatives</h5>
                  <p className='card-text font-16 px-3 text-center text-card-body'>Free from artificial additives, UHT & added sugar.</p>
                  <p className='card-text text-green font-weight-600'>
                    <span className='me-2'>{TickSvg}</span>
                    Plnto Promise
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='card why-choose h-100'>
                <div className='card-body py-4'>
                  <img src={glassBottleImage} alt="Oat Drink" className="card-img-top" style={{ height: '55px', objectFit: 'scale-down' }} />
                  <h5 className='card-title fw-bold font-20'>Glass Packaging</h5>
                  <p className='card-text font-16 px-3 text-center text-card-body'>Sustainable glass bottles for better taste and zero waste.</p>
                  <p className='card-text text-green font-weight-600'>
                    <span className='me-2'>{TickSvg}</span>
                    Plnto Promise
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* start OUR PRODUCTS tabs */}
      <ProductsSection />
      {/* OUR PRODUCTS tabs ended */}

      <section className="bg-light text-center py-100">
        <div className="container">
          <h2 className="fw-bold text-brown font-36">How it works</h2>
          <p className="text-muted mb-5 how-work-title">
            Our simple process from order to doorstep, designed for freshness and sustainability.
          </p>
          <div className="row g-4">
            <div className="col-md-3">
              <div className="how-work-card position-relative overflow-hidden">
                <div className="image-wrapper position-relative">
                  <img src={bottleImage2} alt="Oat Drink" className="img-fluid w-100" />
                  <div className="image-shadow"></div>
                  <div className="step-number">01</div>
                </div>
                <div className="p-3">
                  <h5 className="fw-bold mb-2">Choose Your Products</h5>
                  <p className="small mb-0 text-card-body">Browse our selection of fresh plant milks and add your favorites to cart.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="how-work-card position-relative overflow-hidden">
                <div className="image-wrapper position-relative">
                  <img src={bottleImage2} alt="Oat Drink" className="img-fluid w-100" />
                  <div className="image-shadow"></div>
                  <div className="step-number">02</div>
                </div>
                <div className="p-3">
                  <h5 className="fw-bold mb-2">Select Delivery Frequency</h5>
                  <p className="small mb-0 text-card-body">One-time purchase or subscribe for regular deliveries at a discount</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="how-work-card position-relative overflow-hidden">
                <div className="image-wrapper position-relative">
                  <img src={bottleImage2} alt="Oat Drink" className="img-fluid w-100" />
                  <div className="image-shadow"></div>
                  <div className="step-number">03</div>
                </div>
                <div className="p-3">
                  <h5 className="fw-bold mb-2">We Prepare Fresh</h5>
                  <p className="small mb-0 text-card-body">We make your order fresh on the day of delivery for maximum quality.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="how-work-card position-relative overflow-hidden">
                <div className="image-wrapper position-relative">
                  <img src={bottleImage2} alt="Oat Drink" className="img-fluid w-100" />
                  <div className="image-shadow"></div>
                  <div className="step-number">04</div>
                </div>
                <div className="p-3">
                  <h5 className="fw-bold mb-2">Enjoy & Return Bottles</h5>
                  <p className="small mb-0 text-card-body">Enjoy your milk and leave empty bottles out for collection and reuse</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SUSTAINABILITY SECTION */}
      <section className="zero-waste-section py-100 text-center">
        <div className="container">
          <h4 className="fw-bold mb-3 font-36 text-brown">Zero-Waste. Fresh. Sustainable.</h4>
          <p className="text-card-body mb-5 py-25">
            At Plnto, sustainability is at the core of everything we do. We package our milk in glass
            bottles that are returned, refilled, and reused. No single-use plastic. Just pure plant milk,
            made fresh every day. Join us in helping the planet, one bottle at a time.
          </p>

          <div className="row row-cols-1 row-cols-md-4 g-4">
            <div className="col-md-3">
              {HomeNoSinglePlasticSvg}
              <p className="font-weight-500 py-25">No single-use plastic</p>
            </div>
            <div className="col-md-3">
              {HomeLeafSvg}
              <p className="font-weight-500 py-25">Glass bottles collected and refilled</p>
            </div>
            <div className="col-md-3">
              {HomeTreeSvg}
              <p className="font-weight-500 py-25">Local deliveries to reduce emissions</p>
            </div>
            <div className="col-md-3">
              {HomeTree2Svg}
              <p className="font-weight-500 py-25">Fresh, preservative- free plant milk</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

import { LocationSvg, VisitSvg, RightArrowSvg } from '../components/Icons';


const FindUs = () => {
  const stockists = [
    {
      name: 'Organic Corner',
      address: '24 High Street, Islington, London N1 8QP',
      link: '#',
    },
    {
      name: 'Green Grocer Deli',
      address: '198 Brick Lane, Shoreditch, London E1 6RL',
      link: '#',
    },
    {
      name: 'Eco Pantry',
      address: '50 Camden Passage, Angel, London N1 8EA',
      link: '#',
    },
    {
      name: 'Nature’s Basket',
      address: '7 Broadway Market, Hackney, London E8 4PH',
      link: '#',
    },
    {
      name: 'Farm Fresh Market',
      address: '105 Upper Street, Islington, London N1 1RQ',
      link: '#',
    },
    {
      name: 'The Refill Station',
      address: '93 Caledonian Road, Shoreditch, London E2 7RQ',
      link: '#',
    },
    {
      name: 'The Sustainable Grocer',
      address: '92 Northcote Road, Battersea, London SW11 6NZ',
      link: '#',
    },
    {
      name: 'Urban Pantry',
      address: '150 Bethnal Green Road, Church Street, London E2 0LD',
      link: '#',
    },
  ];


  const partnersLogo = [
    { logo: 'logo' },
    { logo: 'logo' },
    { logo: 'logo' },
    { logo: 'log' },
    { logo: 'logo' },
  ];

  return (
    <div className="the-process-content bg-theme">
      {/* Stockist Header */}
      <div className="page-title my-5 pt-3">
        <div className="text-center mt-4 mb-3">
          <h2 className="text-brown font-60 font-weight-700">Find Plnto Near You</h2>
          <p className="text-card-body font-eight-400 line-height-28 font-18 px-4">Prefer to shop in person? Here's where to find us in stores across London.</p>
        </div>
      </div>


      <div className="container text-center">
        <div className="mb-5">
          <div className="rounded shadow-sm overflow-hidden stockist-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13618.860294747662!2d74.30131529483499!3d31.47669183142665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904b85d5dbf1d%3A0xf0300c6e2cfdde36!2sModel%20Town%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1715861476234!5m2!1sen!2s"
              title="Model Town Lahore Map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <h4 className="text-start font-weight-700 font-size-24 line-height-32 text-brown mb-3">Our Stockists</h4>

        <div className="row g-3 text-start">
          {stockists.map((store, idx) => (
            <div className="col-md-6 px-4 py-2" key={idx}>
              <div className="row bg-white py-4 rounded shadow-sm h-100">
                <div className="col-1 d-flex justify-content-end p-0 m-0">
                  <div>{LocationSvg}</div>
                </div>
                <div className="col-11">
                  <div className="">
                    <h5 className="font-weight-500 font-size-18 line-height-28 text-brown mb-1">{store.name}</h5>
                    <p className="mb-1 text-card-body font-eight-400 line-height-24 py-1 font-16">{store.address}</p>
                    <a href={store.link} className="text-green font-weight-400 font-size-14 line-height-20" style={{ textDecoration: 'none' }}>
                      Visit website <span className='ms-1'> {VisitSvg}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h4 className="our-retail-partners-wrapper font-weight-700 font-24 line-height-32 text-brown mt-5">Our Retail Partners</h4>
        <div className="d-flex justify-content-center gap-3 flex-wrap pb-5 pt-3 mb-4">
          {partnersLogo.map((partner, index) => (
            <div
              key={index}
              className="our-retail-partners-body bg-light">
              <span className="text-muted text-center" style={{ fontSize: '10px', padding: '5px' }}>
                {partner.logo}
              </span>
            </div>
          ))}
        </div>

        <div className='find-us-footer bg-light-orange mb-5 rounded'>
          <div className="row p-2 p-4 p-md-5 d-flex justify-content-center">
            <div className='col-md-5 text-center'>
              <h3 className='font-weight-700 font-24 line-height-40 text-brown'>Don't see a store near you?</h3>
              <p className='text-card-body pt-2 pb-4 font-weight-400 font-18 line-height-24'>Order online and get fresh plant-based milk delivered directly to your
                doorstep.</p>
              <div className="our-story-be-part-btn d-flex flex-column justify-content-center flex-md-row gap-2">
                <button type="button" className="btn px-3 py-2 bg-green text-white font-weight-500 line-height-24 w-10">
                  Start Subsciption
                </button>
                <button type="button" className="btn px-3 py-2 bg-white text-card-body w-10">
                  Browse Products
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
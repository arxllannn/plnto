import { EmailSvg, PhoneSvg, LocationSvg, InstagramSvg, FacebookSvg, TwitterSvg } from '../components/Icons';

const Contact = () => {
  return (
    <div className="the-contact-content container bg-theme">
      {/* Stockist Header */}
      <div className="page-title  my-5 pt-3">
        <div className="text-center mt-4 mb-3">
          <h2 className="text-brown font-60 font-weight-700 px-5 ">Get in Touch</h2>
          <div className="page-header-content">
            <p className="text-card-body font-eight-400 line-height-28 font-18 px-100">
              We're here to help with any questions or feedback you might have.
            </p>
          </div>
        </div>
      </div>
      {/* Contact Form */}
      <div className="row g-4">
        <div className="col-lg-6">
          <div className="bg-white p-4 rounded shadow-sm">
            <h5 className="text-brown font-weight-700 font-24 line-height-32 mb-3">Send us a message</h5>
            <form>
              <div className="mb-3">
                <label className="form-label font-weight-500 font-14 line-height-20 text-brown">Full Name</label>
                <input type="text" className="theme-input" placeholder="Your name" />
              </div>
              <div className="mb-3">
                <label className="form-label text-card-body font-eight-400 line-height-20 font-14">Email Address</label>
                <input type="email" className="theme-input" placeholder="your@email.com" />
              </div>
              <div className="mb-3">
                <label className="form-label text-card-body font-eight-400 line-height-20 font-14">Message</label>
                <textarea className="theme-input" rows="5" placeholder="What would you like to tell us?"></textarea>
              </div>
              <button type="submit" className="btn bg-green font-weight-500 font-14 line-height-20 text-white w-100">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>

        {/* Right Column - Contact Info, Socials, Hours */}
        <div className="col-lg-6 d-flex flex-column gap-3">
          {/* Contact Info */}
          <div className="bg-white p-4 rounded shadow-sm">
            <h5 className="text-brown font-weight-700 font-24 line-height-32 mb-3">Contact Information</h5>
            <div className="d-flex gap-3 mb-3">
              <div>{EmailSvg}</div>
              <div>
                <h6 className='font-weight-500 font-16 line-height-24 text-brown mb-0'>Email Us</h6>
                <a href="mailto:hello@plnto.co.uk" className="text-decoration-none text-green font-weight-400">hello@plnto.co.uk</a>
              </div>
            </div>
            <div className="d-flex gap-3">
              <div>{PhoneSvg}</div>
              <div>
                <h6 className='font-weight-500 font-16 line-height-24 text-brown mb-0'>Call Us</h6>
                <p className='text-green font-weight-400'>+44 207 123 4567</p>
              </div>
            </div>
            <div className="d-flex gap-3">
              <div>{LocationSvg}</div>
              <div>
                <h6 className='font-weight-500 font-16 line-height-24 text-brown mb-0'>Visit Us</h6>
                <p className='text-card-body font-weight-400 mb-0'>
                  42 Broadway Market <br />
                  Hackney, London <br />
                  E8 4QJ
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded shadow-sm my-3">
            <h5 className="text-brown font-weight-700 font-24 line-height-32 mb-3">Follow Us</h5>
            <div className="d-flex gap-3">
              <a href="#" className="text-muted fs-5"><span>{InstagramSvg}</span></a>
              <a href="#" className="text-muted fs-5"><span>{FacebookSvg}</span></a>
              <a href="#" className="text-muted fs-5"><span>{TwitterSvg}</span></a>
            </div>
          </div>

          <div className="bg-white p-4 rounded shadow-sm">
            <h6 className="text-brown font-weight-700 font-24 line-height-32 mb-3">Business Hours</h6>
            <div className="d-flex justify-content-between mb-1">
              <span className="text-brown font-weight-500 font-16 line-height-24">MONDAY - FRIDAY</span>
              <span className="text-card-body">9:00am - 6:00pm</span>
            </div>
            <div className="d-flex justify-content-between mb-1">
              <span className="text-brown font-weight-500 font-16 line-height-24">SATURDAY</span>
              <span className="text-card-body">10:00am - 4:00pm</span>
            </div>
            <div className="d-flex justify-content-between">
              <span className="text-brown font-weight-500 font-16 line-height-24">SUNDAY</span>
              <span className="text-card-body">Closed</span>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="contact-page-faq-section my-5 p-4 text-center rounded bg-light-orange">
        <h5 className="text-brown font-weight-700 font-24 line-height-32 mb-3">Have more questions?</h5>
        <p className="text-card-body font-eight-400 line-height-28 font-18">
          Check out our frequently asked questions page for quick answers to common inquiries.
        </p>
        <button className="btn bg-white px-3 py-2 text-brown font-weight-500 font-14 line-height-20">View FAQ</button>
      </div>
    </div>
  );
};

export default Contact;
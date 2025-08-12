import { RightArrowSvg, ReturnSvg } from '../components/Icons';
import PlateImage from '../assets/icons/plate.png';

function TheProcess() {
  return (
    <div className="the-process-content bg-theme">
      {/* Header */}
      <div className="page-title py-80">
        <div className="text-center mt-4 mb-3">
          <h2 className="text-brown font-60 font-weight-700">The Process</h2>
          <p className="text-card-body font-eight-400 line-height-28 font-20 px-4">From ingredient to doorstep — here's how your milk is made.</p>
        </div>
      </div>


      <div class="the-process-body container-fluid bg-white mt-5">
        <div class="container py-100">
          <div className="row align-items-center py-5">
            <div className="col-md-5 text-md-end text-center mb-3 mb-md-0 pe-0 pe-md-5">
              <img src={PlateImage} alt="Plate" className="img-fluid" />
            </div>
            <div className="col-md-7 text-center text-md-start">
              <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-2">
                <h3 className="font-weight-600 font-30 line-height-36 text-card-body mb-0">01</h3>
                <h3 className="font-weight-600 font-30 line-height-36 text-green mb-0">High-Quality Ingredients</h3>
              </div>
              <p className="pt-2 pb-0 font-18 line-height-28 font-eight-400 text-card-body mb-0">
                We use British oats, premium almonds, and buttery cashews. No
                powders. No concentrates. Only whole foods.
              </p>
            </div>
          </div>
          <div className="row align-items-center py-5">
            <div className="col-md-5 text-md-end text-center mb-3 mb-md-0 pe-0 pe-md-5">
              <img src={PlateImage} alt="Plate" className="img-fluid" />
            </div>
            <div className="col-md-7 text-center text-md-start">
              <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-2">
                <h3 className="font-weight-600 font-30 line-height-36 text-card-body mb-0">02</h3>
                <h3 className="font-weight-600 font-30 line-height-36 text-green mb-0">Soaked for Freshness</h3>
              </div>
              <p className="pt-2 pb-0 font-18 line-height-28 font-eight-400 text-card-body mb-0">
                Ingredients are soaked overnight to unlock flavor and improve
                digestibility.
              </p>
            </div>
          </div>
          <div className="row align-items-center py-5">
            <div className="col-md-5 text-md-end text-center mb-3 mb-md-0 pe-0 pe-md-5">
              <img src={PlateImage} alt="Plate" className="img-fluid" />
            </div>
            <div className="col-md-7 text-center text-md-start">
              <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-2">
                <h3 className="font-weight-600 font-30 line-height-36 text-card-body mb-0">03</h3>
                <h3 className="font-weight-600 font-30 line-height-36 text-green mb-0">Cold-Pressed</h3>
              </div>
              <p className="pt-2 pb-0 font-18 line-height-28 font-eight-400 text-card-body mb-0">
                We cold-press to preserve nutrients and fresh taste.
              </p>
            </div>
          </div>
          <div className="row align-items-center py-5">
            <div className="col-md-5 text-md-end text-center mb-3 mb-md-0 pe-0 pe-md-5">
              <img src={PlateImage} alt="Plate" className="img-fluid" />
            </div>
            <div className="col-md-7 text-center text-md-start">
              <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-2">
                <h3 className="font-weight-600 font-30 line-height-36 text-card-body mb-0">04</h3>
                <h3 className="font-weight-600 font-30 line-height-36 text-green mb-0">Bottle Fresh in Glass</h3>
              </div>
              <p className="pt-2 pb-0 font-18 line-height-28 font-eight-400 text-card-body mb-0">
                Poured into reusable, sterilized glass bottles — chilled and ready.
              </p>
            </div>
          </div>
          <div className="row align-items-center py-5">
            <div className="col-md-5 text-md-end text-center mb-3 mb-md-0 pe-0 pe-md-5">
              <img src={PlateImage} alt="Plate" className="img-fluid" />
            </div>
            <div className="col-md-7 text-center text-md-start">
              <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-2">
                <h3 className="font-weight-600 font-30 line-height-36 text-card-body mb-0">05</h3>
                <h3 className="font-weight-600 font-30 line-height-36 text-green mb-0">Gently Pasteurised</h3>
              </div>
              <p className="pt-2 pb-0 font-18 line-height-28 font-eight-400 text-card-body mb-0">
                Light pasteurization (not UHT) for safety while maintaining nutrition.
              </p>
            </div>
          </div>
          <div className="row align-items-center py-5">
            <div className="col-md-5 text-md-end text-center mb-3 mb-md-0 pe-0 pe-md-5">
              <img src={PlateImage} alt="Plate" className="img-fluid" />
            </div>
            <div className="col-md-7 text-center text-md-start">
              <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-2">
                <h3 className="font-weight-600 font-30 line-height-36 text-card-body mb-0">06</h3>
                <h3 className="font-weight-600 font-30 line-height-36 text-green mb-0">Delivered Fresh Across London</h3>
              </div>
              <p className="pt-2 pb-0 font-18 line-height-28 font-eight-400 text-card-body mb-0">
                Twice-a-week deliveries + we collect your empty bottles.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='the-process-bottle-return container-fluid bg-theme'>
        <div className='container py-4'>
          <div className="row p-2 p-md-5">
            <div className='col-md-12 d-flex justify-content-center'>
              <div className='the-process-bottle-return-body bg-white rounded p-3 p-md-5 text-center'>
                <div className='py-3'>{ReturnSvg}</div>
                <h2 className='text-green font-weight-600 font-30 line-height-36'>Bottle Return</h2>
                <p className='text-card-body pt-2 px-3 pb-3 font-weight-400 font-18 line-height-28'>We collect your bottles with every delivery. Just rinse and leave them out — we'll
                  handle the rest.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid bg-light-orange'>
        <div className='container py-5'>
          <div className="row p-2 p-md-5">
            <div className='col-md-12 text-center'>
              <h4 className='font-weight-600 font-36 line-height-40 mt-4 text-brown'>Ready to taste the difference?</h4>
              <p className='text-card-body pt-2 pb-4 font-weight-400 font-16 line-height-24'>Experience fresh plant milk delivered right to your doorstep.</p>
              <div className="our-story-be-part-btn d-flex flex-column justify-content-center flex-md-row gap-2">
                <button
                  type="button"
                  className="btn px-3 py-2 bg-white-768 border-brown text-card-body font-weight-600 line-height-24 w-25"
                >
                  SEE OUR PRODUCTS
                </button>
                <button
                  type="button"
                  className="btn px-3 py-2 bg-green text-white w-25"
                >
                  START YOUR SUBSCRIPTION <span className="ms-2">{RightArrowSvg}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TheProcess;

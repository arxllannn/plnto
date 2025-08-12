import { CoominSoonClockSvg } from '../components/Icons';

function ComingSoon() {
    return (
        <div className="coming-soon-content py-5 px-3 justify-content-center d-flex">
            <div className="page-content-768 d-flex justify-content-center flex-column align-items-center">
                <div className="mb-4">
                    <span>{CoominSoonClockSvg}</span>
                </div>
                <div className='coming-soon-body d-flex justify-content-center flex-column'>
                    <h2 className="font-36 text-center line-height-40 text-green">Something Fresh Is Brewing</h2>
                    <p className="text-blue-500 text-center font-20 line-height-28 font-eight-400 px-2 mt-3 mb-4">
                        We’re putting the finishing touches on something special. Sign up to be the first to know when we launch.
                    </p>
                    <div className="notify-content d-flex justify-content-center align-items-center mb-3 flex-wrap">
                        <input
                            type="email"
                            className="form-control p-2 p-md-3"
                            placeholder="Enter your email"
                        />
                        <button className="btn bg-green font-weight-500 font-14 line-height-20 text-white p-2 p-md-3 ms-2">
                            NOTIFY ME
                        </button>
                    </div>
                    <small className="text-blue-500 font-14 line-height-20 font-eight-400 text-center">
                        We’ll only use your email to send you launch updates.
                    </small>
                    <div className="row justify-content-center mt-5">
                        <div className="col-12 col-md-4 mb-3 p-0 p-md-2">
                            <div className="bg-white border rounded-3 p-4 h-100">
                                <h5 className="font-weight-600 font-20 line-height-28 text-brown text-center">New Flavors</h5>
                                <p className="font-weight-400 font-16 text-blue-500 text-center">Exciting seasonal blends coming to our menu.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 mb-3 p-0 p-md-2">
                            <div className="bg-white border rounded-3 p-4 h-100">
                                <h5 className="font-weight-600 font-20 line-height-28 text-brown text-center">Expanded Delivery</h5>
                                <p className="font-weight-400 font-16 text-blue-500 text-center">We’re growing our delivery zones across London.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 mb-3 p-0 p-md-2">
                            <div className="bg-white border rounded-3 p-4 h-100">
                                <h5 className="font-weight-600 font-20 line-height-28 text-brown text-center">Online Shop</h5>
                                <p className="font-weight-400 font-16 text-blue-500 text-center">Shop our plant-based milk accessories and kits.</p>
                            </div>
                        </div>
                        <div className='col-12 mt-4 pt-2 d-flex justify-content-center'>
                            <button className="btn w-25 bg-wheat py-2 text-brown font-weight-500 font-14 line-height-20 border-color-brown">Back to Homepage</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ComingSoon;

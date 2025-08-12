import { CookieSvg } from '../components/Icons';

const CookiePolicy = () => {
    return (
        <div className="py-5 px-3 justify-content-center d-flex">
            <div className="page-content">
                <div className="cookie-policy-header d-flex justify-content-center align-items-center gap-2 mb-4">
                    <span>{CookieSvg}</span>
                    <h4 className="font-weight-600 mb-0 line-height-40 text-brown">Cookie Policy</h4>
                </div>
                <div className="card shadow-sm border-0">
                    <div className="card-body p-4 ">
                        <p className="text-primary-80 font-eight-400 line-height-20 font-14">Last Updated: Monday 5th May 2025</p>
                        <p className='text-brown font-eight-400 line-height-28 font-16 pe-5'>
                            Plnto ("we," "our," or "us") uses cookies and similar tracking technologies to enhance your browsing experience, improve our website, and ensure the smooth operation of our services.
                        </p>

                        <h4 className="font-weight-500 text-brown font-22 line-height-28 mt-4 mb-0">What Are Cookies?</h4>
                        <p className='text-brown font-eight-400 line-height-28 font-16 pe-5'>
                            Cookies are small text files stored on your device when you visit a website. They help us recognise your preferences, track website performance, and improve user experience.
                        </p>

                        <h4 className="font-weight-500 text-brown mb-0 font-22 line-height-28 mt-4">Types of Cookies We Use</h4>
                        <p className='text-brown font-eight-400 line-height-28 font-16'>We use the following types of cookies:</p>
                        <ul>
                            <li className='text-primary-80 font-eight-400 line-height-28 font-16 pe-5'><span className='text-brown font-eight-400 line-height-28 font-16'>Essential Cookies:</span> These are necessary for the website to function correctly, such as enabling secure checkout and remembering your cart.</li>
                            <li className='text-primary-80 font-eight-400 line-height-28 font-16 pe-5'><span className='text-brown font-eight-400 line-height-28 font-16'>Performance Cookies:</span> These collect anonymous data on how visitors use our website, helping us optimise its functionality.</li>
                            <li className='text-primary-80 font-eight-400 line-height-28 font-16 pe-5'><span className='text-brown font-eight-400 line-height-28 font-16'>Functional Cookies:</span> These remember your preferences (e.g., language and location) to enhance your experience.</li>
                            <li className='text-primary-80 font-eight-400 line-height-28 font-16 pe-5'><span className='text-brown font-eight-400 line-height-28 font-16'>Marketing Cookies:</span> These track browsing behaviour to show relevant ads and promotions.</li>
                        </ul>

                        <h4 className="font-weight-500 text-brown mb-0 font-22 line-height-28 mt-4">How We Use Cookies</h4>
                        <p className='text-brown font-eight-400 line-height-28 font-16'>We use cookies to:</p>
                        <ul className='text-primary-80 font-eight-400 line-height-28 font-16'>
                            <li className='pe-5'>Ensure a smooth shopping experience.</li>
                            <li className='pe-5'>Analyse website traffic and improve our content.</li>
                            <li className='pe-5'>Remember your preferences for future visits.</li>
                            <li className='pe-5'>Provide relevant marketing and promotional content.</li>
                        </ul>

                        <h4 className="font-weight-500 text-brown mb-0 font-22 line-height-28 mt-4">Managing Your Cookie Preferences</h4>
                        <p className='text-brown font-eight-400 line-height-28 font-16 pe-5'>
                            You can control or disable cookies through your browser settings. However, disabling certain cookies may affect the functionality of our website.
                        </p>

                        <h4 className="font-weight-500 text-brown mb-0 font-22 line-height-28 mt-4">Third-Party Cookies</h4>
                        <p className='text-brown font-eight-400 line-height-28 font-16 pe-5'>
                            Some cookies may be placed by third-party services we use, such as analytics providers (Google Analytics) and advertising partners. These third parties have their own privacy and cookie policies.
                        </p>

                        <h4 className="font-weight-500 text-brown mb-0 font-22 line-height-28 mt-4">Changes to This Policy</h4>
                        <p className='text-brown font-eight-400 line-height-28 font-16 pe-5'>
                            We may update this Cookie Policy from time to time. Any changes will be posted on this page, and continued use of our website implies acceptance of the revised terms.
                        </p>

                        <h4 className="font-weight-500 text-brown font-22 line-height-28 mt-4 mb-0">Contact Us</h4>
                        <p className="text-brown font-eight-400 line-height-28 font-16 mb-0">Email: <span className="text-green">support@plnto.co.uk</span></p>
                        <p className="text-brown font-eight-400 line-height-28 font-16 mb-0">Website: <span className="text-green">www.plnto.co.uk</span></p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default CookiePolicy;

import ourStoryHeaderImg from '../assets/images/our-story-header.png';
import ourStoryHeaderImgBackground from '../assets/images/our-story-header-background.png';
import { LeafeSvg2, RightArrowSvg } from '../components/Icons';

export default function OurStory() {
    return (
        <div className="our-story-content bg-theme">
            {/* Header */}
            <div className="page-title py-80">
                <div className="text-center mt-4 mb-5">
                    <h2 className="text-brown font-60 font-weight-700">Our Story</h2>
                    <p className="text-card-body font-eight-400 line-height-28 font-20">Fresh milk, no compromise.</p>
                </div>
            </div>

            {/* Story Section */}
            <div className="container-fluid bg-white mb-5">
                <div className='container py-80'>
                    <div className="row align-items-center">
                        <h4 className="font-weight-600 mb-4 text-brown font-36 line-height-40 ">A Journey Born from Necessity</h4>
                        <div className="col-md-7">
                            <p className='font-eight-400 line-height-28 font-18 text-card-body'>
                                Plnto started with a simple craving: fresh, honest plant milk. Yusuf, our founder, searched high and low in East London for something clean
                                — no preservatives, no weird ingredients, no ultra-processing — just something he could trust. But he came up empty.
                            </p>
                            <p className='font-eight-400 line-height-28 font-18 text-card-body py-3'>So, he rolled up his sleeves and made it himself.</p>
                            <p className='font-eight-400 line-height-28 font-18 text-card-body'>
                                What began as a home experiment in a tiny East London kitchen soon turned into something bigger.
                                Friends wanted in. Then neighbours. Then cafés. Plnto was born — a zero-waste, plant-based
                                milk brand with a fresh take on dairy alternatives
                            </p>
                            <p className='font-eight-400 line-height-28 font-18 text-card-body py-3'>
                                No preservatives. No shortcuts. Just real, whole ingredients, blended fresh and delivered the same day in reusable glass bottles.
                                From oat to almond to creamy cashew, every drop is made with care and crafted to taste like plant milk should.
                            </p>
                            <p className='font-eight-400 line-height-28 font-18 text-card-body'>
                                Today, Plnto delivers across London — nourishing people, reusing bottles, and rethinking the way plant milk should be made.
                                Fresh, local, circular.
                            </p>
                        </div>
                        <div className="col-md-5 text-center">
                            <div className="position-relative d-inline-block custom-bg-wrapper">
                                <img
                                    src={ourStoryHeaderImg}
                                    alt="Pinto Origin"
                                    className="img-fluid rounded z-index-2"
                                />
                                <img
                                    src={ourStoryHeaderImgBackground}
                                    alt="Background Decoration"
                                    className="bg-decor-image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container mt-5 mb-5">
                <div class="row">
                    <h4 className='our-story-journey text-center font-weight-600 font-36 line-height-40 mt-5 text-brown'>Our Journey</h4>
                    <div class="row">
                        <div class="col-md-6 p-0 m-0 md-offset-6 d-flex justify-content-end align-items-center">
                            <div class="text-section-left">
                                <h5 className='text-end text-green'>The Discovery</h5>
                                <p className='text-end'>When my son was diagnosed with a milk protein allergy, everything changed. We searched for alternatives, but nothing met our standards for both taste and nutrition.</p>
                            </div>
                            <div>
                                <div class="line-section h-100 position-relative">
                                    <div class="timeline-marker"></div>
                                    <div class="timeline-line"></div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'></div>
                        <div className='col-md-6'></div>
                        <div class="col-md-6 p-0 m-0 md-offset-6 d-flex justify-content-end align-items-center">
                            <div>
                                <div class="line-section h-100 position-relative">
                                    <div class="timeline-marker"></div>
                                    <div class="timeline-line"></div>
                                </div>
                            </div>
                            <div class="text-section-right">
                                <h5 className='text-start text-green'>Kitchen Experiments</h5>
                                <p className='text-start'>I began making plant-based milk at home,
                                    experimenting with different nuts, seeds, and
                                    techniques until I found the perfect recipe that was
                                    both delicious and nutritiou</p>
                            </div>
                        </div>
                        <div class="col-md-6 p-0 m-0 md-offset-6 d-flex justify-content-end align-items-center">
                            <div class="text-section-left">
                                <h5 className='text-end text-green'>Local Demand</h5>
                                <p className='text-end'>Friends and family couldn't get enough of our
                                    homemade plant milk. Soon, we were getting
                                    requests from neighbors and local cafes for our
                                    fresh, preservative-free milks.</p>
                            </div>
                            <div>
                                <div class="line-section h-100 position-relative">
                                    <div class="timeline-marker"></div>
                                    <div class="timeline-line"></div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'></div>
                        <div className='col-md-6'></div>
                        <div class="col-md-6 p-0 m-0 md-offset-6 d-flex justify-content-end align-items-center">
                            <div>
                                <div class="line-section h-100 position-relative">
                                    <div class="timeline-marker"></div>
                                    <div class="timeline-line"></div>
                                </div>
                            </div>
                            <div class="text-section-right">
                                <h5 className='text-start text-green'>Plnto is Born</h5>
                                <p className='text-start'>What started as a solution for my son became a
                                    mission to provide fresh, sustainable plant milk to
                                    everyone. Plnto officially launched with our
                                    sustainable glass bottle delivery system.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid bg-white'>
                <div className='container py-5'>
                    <div className="row p-2 p-md-5">
                        <div className='col-md-12 text-center'>
                            <div>{LeafeSvg2}</div>
                            <h4 className='font-weight-600 font-36 line-height-40 mb-5 mt-4 text-brown'>Our Mision</h4>
                        </div>
                        <div className='col-md-6'>
                            <div className='bg-theme p-4 rounded'>
                                <h5 className='font-weight-500 font-20 line-height-28 text-green'>Sustainablity First</h5>
                                <p className='text-card-body pe-4 font-weight-400 font-16 line-height-24'>We're committed to reducing waste
                                    through our returnable glass bottles and
                                    environmentally conscious packaging.
                                </p>
                            </div>
                        </div>
                        <div className='col-md-6 mt-4 mt-md-0'>
                            <div className='bg-theme p-4 rounded'>
                                <h5 className='font-weight-500 font-20 line-height-28 text-green'>Sustainablity First</h5>
                                <p className='text-card-body pe-4 font-weight-400 font-16 line-height-24'>We're committed to reducing waste
                                    through our returnable glass bottles and
                                    environmentally conscious packaging.
                                </p>
                            </div>
                        </div>
                        <div className='col-md-6 mt-4'>
                            <div className='bg-theme p-4 rounded'>
                                <h5 className='font-weight-500 font-20 line-height-28 text-green'>Sustainablity First</h5>
                                <p className='text-card-body pe-4 font-weight-400 font-16 line-height-24'>We're committed to reducing waste
                                    through our returnable glass bottles and
                                    environmentally conscious packaging.
                                </p>
                            </div>
                        </div>
                        <div className='col-md-6 mt-4'>
                            <div className='bg-theme p-4 rounded'>
                                <h5 className='font-weight-500 font-20 line-height-28 text-green'>Sustainablity First</h5>
                                <p className='text-card-body pe-4 font-weight-400 font-16 line-height-24'>We're committed to reducing waste
                                    through our returnable glass bottles and
                                    environmentally conscious packaging.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid bg-light-orange'>
                <div className='container py-5'>
                    <div className="row p-2 p-md-5">
                        <div className='col-md-12 text-center'>
                            <h4 className='font-weight-600 font-36 line-height-40 mt-4 text-brown'>Be Part of Our Story</h4>
                            <p className='text-card-body pt-2 pb-4 font-weight-400 font-16 line-height-24'>Join us in our journey to bring fresh, sustainable plant milk to your doorstep.</p>
                            <div className="our-story-be-part-btn d-flex flex-column justify-content-center flex-md-row gap-2">
                                <button
                                    type="button"
                                    className="btn px-3 py-2 border-brown text-card-body font-weight-500 line-height-24 w-25"
                                >
                                    SEE OUR PROCESS
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
                            <svg width="64" height="80" viewBox="0 0 64 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="path-1-inside-1_124_5992" fill="white">
                                    <path d="M0 32C0 14.3269 14.3269 0 32 0C49.6731 0 64 14.3269 64 32C64 49.6731 49.6731 64 32 64C14.3269 64 0 49.6731 0 32Z" />
                                </mask>
                                <path d="M32 64V62C15.4315 62 2 48.5685 2 32H0H-2C-2 50.7777 13.2223 66 32 66V64ZM64 32H62C62 48.5685 48.5685 62 32 62V64V66C50.7777 66 66 50.7777 66 32H64ZM32 0V2C48.5685 2 62 15.4315 62 32H64H66C66 13.2223 50.7777 -2 32 -2V0ZM32 0V-2C13.2223 -2 -2 13.2223 -2 32H0H2C2 15.4315 15.4315 2 32 2V0Z" fill="#10361A" mask="url(#path-1-inside-1_124_5992)" />
                                <path d="M25.3334 41.3332H22.4201C21.9995 41.3344 21.5858 41.2269 21.219 41.0211C20.8522 40.8152 20.5449 40.5181 20.3268 40.1585C20.1173 39.7973 20.0066 39.3874 20.0056 38.9699C20.0047 38.5524 20.1136 38.142 20.3214 37.7798L25.5948 28.6665" stroke="#10361A" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M30.6667 41.3331H41.6041C42.0226 41.3299 42.4333 41.219 42.7967 41.0112C43.16 40.8034 43.4638 40.5056 43.6787 40.1465C43.8853 39.7863 43.994 39.3783 43.994 38.9631C43.994 38.5479 43.8853 38.14 43.6787 37.7798L42.0441 34.9531" stroke="#10361A" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M34.6667 37.3335L30.6667 41.3335L34.6667 45.3335" stroke="#10361A" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M27.0573 34.1278L25.5946 28.6665L20.1333 30.1305" stroke="#10361A" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M28.4587 23.748L29.9161 21.2253C30.1253 20.8605 30.4253 20.556 30.787 20.3413C31.1486 20.1266 31.5596 20.0091 31.9801 20C32.3973 19.9992 32.8074 20.1082 33.1693 20.316C33.5311 20.5239 33.8318 20.8232 34.0414 21.184L39.2987 30.308" stroke="#10361A" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M33.8374 28.844L39.2987 30.308L40.7614 24.8467" stroke="#10361A" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p className="font-weight-500 py-25">No single-use plastic</p>
                        </div>
                        <div className="col-md-3">
                            <svg width="64" height="80" viewBox="0 0 64 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="path-1-inside-1_124_6004" fill="white">
                                    <path d="M0 32C0 14.3269 14.3269 0 32 0C49.6731 0 64 14.3269 64 32C64 49.6731 49.6731 64 32 64C14.3269 64 0 49.6731 0 32Z" />
                                </mask>
                                <path d="M32 64V62C15.4315 62 2 48.5685 2 32H0H-2C-2 50.7777 13.2223 66 32 66V64ZM64 32H62C62 48.5685 48.5685 62 32 62V64V66C50.7777 66 66 50.7777 66 32H64ZM32 0V2C48.5685 2 62 15.4315 62 32H64H66C66 13.2223 50.7777 -2 32 -2V0ZM32 0V-2C13.2223 -2 -2 13.2223 -2 32H0H2C2 15.4315 15.4315 2 32 2V0Z" fill="#10361A" mask="url(#path-1-inside-1_124_6004)" />
                                <path d="M30.6666 42.6665C28.3253 42.6736 26.0669 41.8005 24.3392 40.2204C22.6116 38.6403 21.5409 36.4686 21.3395 34.136C21.1382 31.8034 21.8208 29.4803 23.2521 27.6275C24.6834 25.7747 26.7587 24.5274 29.0666 24.1332C36.6666 22.6665 38.6666 21.9732 41.3332 18.6665C42.6666 21.3332 43.9999 24.2398 43.9999 29.3332C43.9999 36.6665 37.6266 42.6665 30.6666 42.6665Z" stroke="#10361A" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M18.6667 44C18.6667 40 21.1334 36.8533 25.4401 36C28.6667 35.36 32.0001 33.3333 33.3334 32" stroke="#10361A" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p className="font-weight-500 py-25">Glass bottles collected and refilled</p>
                        </div>
                        <div className="col-md-3">
                            <svg width="64" height="80" viewBox="0 0 64 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="path-1-inside-1_124_6013" fill="white">
                                    <path d="M0 32C0 14.3269 14.3269 0 32 0C49.6731 0 64 14.3269 64 32C64 49.6731 49.6731 64 32 64C14.3269 64 0 49.6731 0 32Z" />
                                </mask>
                                <path d="M32 64V62C15.4315 62 2 48.5685 2 32H0H-2C-2 50.7777 13.2223 66 32 66V64ZM64 32H62C62 48.5685 48.5685 62 32 62V64V66C50.7777 66 66 50.7777 66 32H64ZM32 0V2C48.5685 2 62 15.4315 62 32H64H66C66 13.2223 50.7777 -2 32 -2V0ZM32 0V-2C13.2223 -2 -2 13.2223 -2 32H0H2C2 15.4315 15.4315 2 32 2V0Z" fill="#10361A" mask="url(#path-1-inside-1_124_6013)" />
                                <path d="M33.3334 26.6667C33.3334 22.9867 30.0534 20 26.0001 20C21.9467 20 18.6667 22.9867 18.6667 26.6667H21.3334L22.6667 25.3333L24.0001 26.6667H29.3334" stroke="#10361A" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M33.3333 25.5202C34.6834 24.522 36.3209 23.9886 37.9999 24.0002C42.0533 24.0002 45.3333 26.9869 45.3333 30.6669H41.3333L39.9999 29.3335L38.6666 30.6669H34.6666" stroke="#10361A" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M23.8535 28.9466C20.9868 31.8133 20.7868 36.24 23.3868 38.8533L29.0401 33.1866L29.9735 32.2533L30.9201 31.3066L33.7468 28.48C31.1468 25.8666 26.7201 26.08 23.8535 28.9466Z" stroke="#10361A" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M30.6666 36.6665C31.3333 39.9998 30.4399 42.6665 29.3333 45.3332H34.6666C37.3333 37.9998 33.9999 29.3332 33.3333 26.6665" stroke="#10361A" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p className="font-weight-500 py-25">Local deliveries to reduce emissions</p>
                        </div>
                        <div className="col-md-3">
                            <svg width="64" height="80" viewBox="0 0 64 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="path-1-inside-1_124_6024" fill="white">
                                    <path d="M0 32C0 14.3269 14.3269 0 32 0C49.6731 0 64 14.3269 64 32C64 49.6731 49.6731 64 32 64C14.3269 64 0 49.6731 0 32Z" />
                                </mask>
                                <path d="M32 64V62C15.4315 62 2 48.5685 2 32H0H-2C-2 50.7777 13.2223 66 32 66V64ZM64 32H62C62 48.5685 48.5685 62 32 62V64V66C50.7777 66 66 50.7777 66 32H64ZM32 0V2C48.5685 2 62 15.4315 62 32H64H66C66 13.2223 50.7777 -2 32 -2V0ZM32 0V-2C13.2223 -2 -2 13.2223 -2 32H0H2C2 15.4315 15.4315 2 32 2V0Z" fill="#10361A" mask="url(#path-1-inside-1_124_6024)" />
                                <path d="M26.6666 41.3333C25.5226 41.3359 24.4081 40.9705 23.4876 40.2912C22.5671 39.6119 21.8895 38.6546 21.5547 37.5606C21.22 36.4667 21.2458 35.2941 21.6285 34.216C22.0112 33.1379 22.7304 32.2114 23.6799 31.5733C23.0945 30.8419 22.7428 29.9511 22.6706 29.017C22.5984 28.0829 22.809 27.1486 23.2751 26.3359C23.7412 25.5231 24.4411 24.8695 25.2838 24.46C26.1265 24.0505 27.0729 23.9042 27.9999 24.04V24C27.9999 22.9391 28.4213 21.9217 29.1715 21.1716C29.9216 20.4214 30.939 20 31.9999 20C33.0608 20 34.0782 20.4214 34.8283 21.1716C35.5785 21.9217 35.9999 22.9391 35.9999 24V24.0533C36.9269 23.9175 37.8733 24.0639 38.716 24.4733C39.5587 24.8828 40.2586 25.5365 40.7247 26.3492C41.1908 27.162 41.4014 28.0962 41.3292 29.0303C41.257 29.9644 40.9053 30.8552 40.3199 31.5867C41.2635 32.2269 41.977 33.1527 42.3559 34.2282C42.7347 35.3037 42.7588 36.4723 42.4247 37.5626C42.0906 38.6528 41.4159 39.6073 40.4996 40.2859C39.5832 40.9646 38.4735 41.3317 37.3332 41.3333H26.6666Z" stroke="#10361A" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M32 41.3335V45.3335" stroke="#10361A" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p className="font-weight-500 py-25">Fresh, preservative- free plant milk</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

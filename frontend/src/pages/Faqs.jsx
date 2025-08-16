import Faqbill from '../assets/icons/faqbill.png';
import Faqbag from '../assets/icons/faqbag.png';
import Faqcard from '../assets/icons/faqcard.png';

const faqItems = [
  {
    question: "What types of milk do you offer?",
    answer: ""
  },
  {
    question: "Do your milks contain allergens?",
    answer: `Yes.<br />
      <ul style="padding-left: 20px;">
        <li>Our Almond Milk contains nuts (almonds)</li>
        <li>Our Cashew Milk contains nuts (cashews)</li>
        <li>Our Oat Milk is made with gluten-free oats, but due to possible cross-contamination, it may not be suitable for those with severe oat or gluten sensitivities.</li>
      </ul>
      <p>All milks are produced in the same facility, so cross-contamination is possible. We recommend caution if you have a severe allergy.</p>`
  },
  { question: "Where do you deliver?", answer: "" },
  { question: "When do you deliver?", answer: "" },
  { question: "How does the bottle return system work?", answer: "" },
  { question: "How long does your milk last?", answer: "" },
  { question: "Do you offer wholesale or stockist pricing?", icon: Faqbag, answer: "" },
  { question: "How do I pay?", icon: Faqcard, answer: "" },
  { question: "Can I get a regular subscription?", icon: Faqbill, answer: "" }
];

const Faqs = () => {
  return (
    <div className='d-flex justify-content-center align-items-center'>
      <div className="page-content w-100 py-5 px-3">
        <div className='d-flex justify-content-center flex-column'>
          <h2 className="text-center font-weight-600 font-36 text-brown line-height-40 mb-4">
            Frequently Asked Questions
          </h2>

          <div className="px-4 rounded bg-white pt-2 pb-3">
            <div className="accordion border-none" id="faqAccordion">
              {faqItems.map((item, index) => (
                <div className="accordion-item border-0 border-bottom" key={index}>
                  <h2 className="accordion-header" id={`heading${index}`}>
                    <button
                      className="accordion-button collapsed bg-white shadow-none px-0 py-3 fw-normal"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${index}`}
                      aria-expanded="false"
                      aria-controls={`collapse${index}`}
                    >
                      {item.icon && (
                        <span className="d-md-none me-2">
                          <img src={item.icon} alt="icon" width={20} height={20} />
                        </span>
                      )}
                      {item.question}
                    </button>
                  </h2>
                  <div
                    id={`collapse${index}`}
                    className="accordion-collapse collapse"
                    aria-labelledby={`heading${index}`}
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body text-card-body font-eight-400 line-height-20 font-14 ps-0 pt-0 pb-3">
                      <div dangerouslySetInnerHTML={{ __html: item.answer }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-5 p-4">
            <h5 className="font-weight-500 line-height-32 font-24 text-brown mb-2">
              Still have questions?
            </h5>
            <p className="mb-3 text-card-body font-eight-400 line-height-24 font-16">
              We're here to help. Contact our customer support team.
            </p>
            <div className="faq-buttons d-flex justify-content-center gap-2 flex-wrap">
              <button className="btn text-white bg-green px-4">
                EMAIL US
              </button>
              <button className="btn bg-white border-color-brown text-brown font-weight-500 font-14 line-height-20 px-4">
                CALL US
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
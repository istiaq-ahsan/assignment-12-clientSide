import SectionTitle from "../../../shared/SectionTitle";

const Faq = () => {
  const faqs = [
    {
      question: "What can I expect when creating my wedding biodata?",
      answer:
        "When creating your wedding biodata, you will be asked to provide personal details about both partners, including names, ages, hobbies, and preferences for the ceremony. This helps us tailor our services to your specific needs and make your wedding day special.",
    },
    {
      question: "How do I become a premium user?",
      answer:
        "To become a premium user, simply make a payment through our secure platform. As a premium user, you will receive additional features such as exclusive wedding planning tips, priority consultations, and special discounts on packages.",
    },
    {
      question: "What contact information will I need to provide?",
      answer:
        "You will need to provide your full name, contact number, email address, and mailing address. This ensures we can reach you for important updates regarding your wedding and offer personalized assistance.",
    },
    {
      question: "Can I access payment options for the premium service?",
      answer:
        "Yes, you can easily access payment options on our website. We offer a variety of payment methods, including credit cards, bank transfers, and mobile payments to make the process seamless for you.",
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-12 mx-auto">
        <SectionTitle
          heading={"Frequently Asked Questions"}
          subHeading={"Here is some questions of our clients"}
        ></SectionTitle>

        <div className="grid grid-cols-1  gap-8 mt-8 lg:mt-16 md:grid-cols-2 ">
          {faqs.map((faq, index) => (
            <div key={index}>
              <div className="inline-block p-3 text-white bg-blue-600 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              <div>
                <h1 className="text-xl font-semibold text-gray-700 dark:text-white">
                  {faq.question}
                </h1>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;

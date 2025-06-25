import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Header from "./Header";

const FAQPage = () => {
  const faqs = [
    {
      question: "How do I get started with coaching?",
      answer: "Begin by booking a discovery session to discuss your goals and see if we’re a good fit.",
    },
    {
      question: "What is your coaching methodology?",
      answer: "I use a client-centered approach, combining active listening, powerful questioning, and accountability frameworks.",
    },
    {
      question: "How long are the sessions?",
      answer: "Sessions typically last 45-60 minutes, depending on your needs.",
    },
  ];

  const itemsRef = useRef([]);

  // Initialize GSAP animations
  useEffect(() => {
    itemsRef.current.forEach((item, index) => {
      const answer = item.querySelector(".faq-answer");
      gsap.set(answer, { height: 0, opacity: 0 }); // Start collapsed
    });
  }, []);

  const toggleFAQ = (index) => {
    const answer = itemsRef.current[index].querySelector(".faq-answer");
    const isOpen = answer.style.height !== "0px";

    gsap.to(answer, {
      height: isOpen ? 0 : "auto",
      opacity: isOpen ? 0 : 1,
      duration: 0.3,
      ease: "power1.inOut",
    });
  };

  return (

    <>
    <header>
           <Header/>
    </header>
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
     
      <div className="max-w-3xl mt-10 mx-auto">
        <h1 className="text-4xl font-bold text-center text-indigo-800 mb-12">
          Frequently Asked Questions
        </h1>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              ref={(el) => (itemsRef.current[index] = el)}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 focus:outline-none"
              >
                <h2 className="text-lg font-medium text-left text-indigo-700">
                  {faq.question}
                </h2>
                <span className="text-indigo-500 text-xl">
                  {itemsRef.current[index]?.querySelector(".faq-answer")?.style.height === "auto" ? "−" : "+"}
                </span>
              </button>

              <div className="faq-answer px-6 pb-0 text-gray-600">
                <p className="pb-6">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default FAQPage;
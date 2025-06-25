import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const FAQDemoPage = () => {
    const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(null);
  const faqItemsRef = useRef([]);
  const titleRef = useRef(null);
  const containerRef = useRef(null);

  const faqs = [
    {
      question: "How do I start my coaching journey?",
      answer: "Book a free discovery call to explore your goals and see if we’re a good fit. We’ll create a personalized roadmap for your growth.",
    },
    {
      question: "What makes your coaching unique?",
      answer: "I blend evidence-based psychology with intuitive guidance, ensuring deep transformation—not just surface-level advice.",
    },
    {
      question: "How often are sessions held?",
      answer: "Most clients meet weekly for 45-60 minutes. Flexible scheduling for busy professionals.",
    },
    {
      question: "Do you offer group coaching?",
      answer: "Yes! Group programs provide community support at a lower cost. Ask me about upcoming cohorts.",
    },
  ];

  // Animate title and FAQ container on load
  useEffect(() => {
    gsap.from(titleRef.current, {
      y: -20,
      opacity: 1,
      duration: 0.8,
      ease: "back.out(1.2)",
    });

    gsap.from(containerRef.current, {
      y: 30,
      opacity: 1,
      duration: 0.8,
      delay: 0.3,
      ease: "power2.out",
    });
  }, []);

  // FAQ toggle animation
  const toggleFAQ = (index) => {
    const answer = faqItemsRef.current[index].querySelector(".faq-answer");
    const isOpen = activeIndex === index;

    if (isOpen) {
      gsap.to(answer, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power1.inOut",
        onComplete: () => setActiveIndex(null),
      });
    } else {
      setActiveIndex(index);
      gsap.to(answer, {
        height: "auto",
        opacity: 1,
        duration: 0.4,
        ease: "power1.inOut",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Animated Title */}
        <h1
          ref={titleRef}
          className="text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-4"
        >
          Coaching FAQs
        </h1>
        <p className="text-center text-indigo-700 mb-12 text-lg">
          Get answers to your questions—click to expand!
        </p>

        {/* FAQ Container */}
        <div
          ref={containerRef}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              ref={(el) => (faqItemsRef.current[index] = el)}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 focus:outline-none group"
              >
                <h2 className="text-xl font-semibold text-left text-indigo-800 group-hover:text-indigo-600 transition-colors">
                  {faq.question}
                </h2>
                <span className="text-indigo-500 text-xl">
                  {activeIndex === index ? (
                    <FaMinus className="transform transition-transform duration-300" />
                  ) : (
                    <FaPlus className="transform transition-transform duration-300 group-hover:rotate-90" />
                  )}
                </span>
              </button>

              <div className="faq-answer px-6 overflow-hidden">
                <p className="pb-6 text-gray-700">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-indigo-700 mb-6 text-lg">
            Ready to transform? Let’s talk.
          </p>
          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300" onClick={()=>{navigate('/contact')}}>
            Book a Free Session
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQDemoPage;
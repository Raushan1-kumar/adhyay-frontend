import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import Header from "./Header"

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const coursesRef = useRef(null);
  const testimonialsRef = useRef(null);

  // Animation setup
  useEffect(() => {
    // Hero animation
    gsap.from(heroRef.current, {
      opacity: 1,
      y: 50,
      duration: 1,
      ease: "power3.out"
    });

    // Section animations
    const animateSection = (ref, y) => {
      gsap.from(ref.current, {
        opacity: 1,
        y,
        duration: 0.8,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 75%",
          toggleActions: "play none none none",
          markers: false // Set to true for debugging
        }
      });
    };

    animateSection(featuresRef, 100);
    animateSection(coursesRef, 100);
    animateSection(testimonialsRef, 50);

    // Card animations
    gsap.from(".feature-card", {
      opacity: 1,
      y: 30,
      stagger: 0.1,
      duration: 0.6,
      scrollTrigger: {
        trigger: featuresRef.current,
        start: "top 75%"
      }
    });

    gsap.from(".testimonial-card", {
      opacity: 1,
      x: -30,
      stagger: 0.2,
      duration: 0.8,
      scrollTrigger: {
        trigger: testimonialsRef.current,
        start: "top 75%"
      }
    });

    // Clean up ScrollTrigger instances
    return () => {
      ScrollTrigger.getAll().forEach(instance => instance.kill());
    };
  }, []);

  return (
    <div className="font-sans bg-white overflow-x-hidden">
      {/* Navigation */}
     <Header/>

      {/* Hero Section */}
      <section 
        id="home" 
        ref={heroRef} 
        className="pt-32 pb-16 md:pb-20 px-6 bg-gradient-to-r from-blue-900 to-blue-700 text-white min-h-screen flex items-center"
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Excel in <span className="text-orange-300">CBSE</span> with Adhyay
            </h1>
            <p className="text-lg sm:text-xl mb-6 md:mb-8 text-blue-100">
              Personalized coaching for classes 6-10 with proven results and expert faculty
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Link to="/demo" className="bg-orange-500 hover:bg-orange-600 px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium transition text-center">
                Free Demo Class
              </Link>
              <Link to="/courses" className="bg-transparent border-2 border-white hover:bg-blue-800 px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium transition text-center">
                View Courses
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img 
              src="https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
              alt="Students learning" 
              className="rounded-lg shadow-2xl w-full max-w-md mx-auto"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section 
        id="features" 
        ref={featuresRef} 
        className="py-16 md:py-20 px-6 bg-gray-50"
      >
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 text-blue-900">Why Choose Adhyay?</h2>
          <p className="text-lg sm:text-xl text-center mb-8 sm:mb-12 text-gray-600">Our unique approach to learning</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "📚", title: "CBSE-Aligned", desc: "Strict NCERT syllabus with reference materials" },
              { icon: "🧑‍🏫", title: "Expert Faculty", desc: "10+ years of CBSE teaching experience" },
              { icon: "📝", title: "Regular Tests", desc: "Weekly assessments with detailed feedback" },
              { icon: "💻", title: "Digital Learning", desc: "Online materials and recorded lectures" },
              { icon: "🏆", title: "Olympiad Prep", desc: "Integrated competitive exam preparation" },
              { icon: "👨‍👩‍👧", title: "Parent Portal", desc: "Track progress through our mobile app" }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="feature-card bg-white p-5 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
              >
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{feature.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-blue-800">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section 
        id="courses" 
        ref={coursesRef} 
        className="py-16 md:py-20 px-6 bg-white"
      >
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 text-blue-900">Our Courses</h2>
          <p className="text-lg sm:text-xl text-center mb-8 sm:mb-12 text-gray-600">Comprehensive CBSE coaching for classes 6 to 10</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[6, 7, 8, 9, 10].slice(0, 3).map((grade) => (
              <div 
                key={grade} 
                className="bg-blue-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
              >
                <div className="bg-blue-800 text-white py-3 px-6">
                  <h3 className="text-lg sm:text-xl font-bold">Class {grade} CBSE Program</h3>
                </div>
                <div className="p-5 sm:p-6">
                  <ul className="mb-4 sm:mb-6 space-y-2">
                    {["Mathematics", "Science", "English", "Social Studies"].map((subject) => (
                      <li key={subject} className="flex items-center text-sm sm:text-base">
                        <span className="text-blue-500 mr-2">✓</span>
                        {subject}
                      </li>
                    ))}
                  </ul>
                  <div className="mb-4 sm:mb-6 text-sm sm:text-base">
                    <p className="font-semibold">Duration: <span className="font-normal">10 Months</span></p>
                    <p className="font-semibold">Batch Size: <span className="font-normal">20 Students</span></p>
                  </div>
                  <Link 
                    to={`/courses/${grade}`} 
                    className="block w-full bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded transition text-center"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link 
              to="/courses" 
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-medium transition shadow-md"
            >
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section 
        id="testimonials" 
        ref={testimonialsRef} 
        className="py-16 md:py-20 px-6 bg-gray-50"
      >
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 text-blue-900">What Parents Say</h2>
          <p className="text-lg sm:text-xl text-center mb-8 sm:mb-12 text-gray-600">Success stories from our community</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                quote: "My daughter's science marks improved from 65% to 92% in just 6 months. Thank you Adhyay!",
                name: "Rahul Sharma",
                child: "Parent of Class 9 student"
              },
              {
                quote: "The personalized attention and regular tests helped my son build confidence in Mathematics.",
                name: "Priya Patel",
                child: "Parent of Class 8 student"
              },
              {
                quote: "Best coaching center in the area. Teachers are very dedicated and know the CBSE pattern well.",
                name: "Anil Gupta",
                child: "Parent of Class 10 student"
              },
              {
                quote: "The parent portal lets me track my child's progress anytime. Very transparent system.",
                name: "Sneha Verma",
                child: "Parent of Class 7 student"
              }
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className="testimonial-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <div className="text-yellow-400 mb-2">★★★★★</div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                <div className="font-semibold text-blue-800">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.child}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white mt-10 py-10 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-2xl font-bold">Adhyay</span>
                <span className="text-sm">Coaching Center</span>
              </div>
              <p className="max-w-xs text-blue-100">
                Empowering CBSE students from classes 6-10 to achieve academic excellence since 2010.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link to="/" className="hover:text-orange-300 transition">Home</Link></li>
                  <li><Link to="/courses" className="hover:text-orange-300 transition">Courses</Link></li>
                  <li><Link to="/about" className="hover:text-orange-300 transition">About Us</Link></li>
                  <li><Link to="/contact" className="hover:text-orange-300 transition">Contact</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <ul className="space-y-2">
                  <li>123 Education St, Learning City</li>
                  <li>+91 98765 43210</li>
                  <li>contact@adhyay.com</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-orange-300 transition">FB</a>
                  <a href="#" className="hover:text-orange-300 transition">IG</a>
                  <a href="#" className="hover:text-orange-300 transition">YT</a>
                  <a href="#" className="hover:text-orange-300 transition">LI</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-blue-800 mt-10 pt-6 text-center text-blue-300 text-sm">
            © {new Date().getFullYear()} Adhyay Coaching Center. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
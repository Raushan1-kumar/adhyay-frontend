import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import Header from './Header';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const CoursesPage = () => {
  const pageHeaderRef = useRef(null);
  const class6Ref = useRef(null);
  const class7Ref = useRef(null);
  const class8Ref = useRef(null);
  const class9Ref = useRef(null);
  const class10Ref = useRef(null);

  // Animation setup
  useEffect(() => {
    // Header animation
    gsap.from(pageHeaderRef.current, {
      opacity: 1,
      y: 50,
      duration: 1,
      ease: "power3.out"
    });

    // Class cards animation
    const classRefs = [class6Ref, class7Ref, class8Ref, class9Ref, class10Ref];
    
    classRefs.forEach((ref, index) => {
      gsap.from(ref.current, {
        opacity: 1,
        y: 50,
        duration: 0.8,
        delay: index * 0.1,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });
    });

    // Clean up ScrollTrigger instances
    return () => {
      ScrollTrigger.getAll().forEach(instance => instance.kill());
    };
  }, []);

  // Course data
  const courses = [
    {
      class: 6,
      subjects: ["Mathematics", "Science", "English", "Social Studies", "Hindi"],
      duration: "10 Months",
      batchSize: "20 Students",
      description: "Foundation building with interactive learning methods",
      highlights: [
        "Basic concept clarity",
        "Regular worksheets",
        "Creative writing skills",
        "Monthly parent-teacher meetings"
      ]
    },
    {
      class: 7,
      subjects: ["Mathematics", "Science", "English", "Social Studies", "Hindi/Sanskrit"],
      duration: "10 Months",
      batchSize: "20 Students",
      description: "Strengthening core concepts with practical applications",
      highlights: [
        "Experiment-based learning",
        "Olympiad preparation",
        "Grammar mastery",
        "Historical thinking skills"
      ]
    },
    {
      class: 8,
      subjects: ["Mathematics", "Science", "English", "Social Studies", "Hindi/Sanskrit"],
      duration: "10 Months",
      batchSize: "18 Students",
      description: "Preparing for advanced concepts with CBSE-aligned curriculum",
      highlights: [
        "NTSE foundation",
        "Lab activities",
        "Advanced writing skills",
        "Concept maps for history"
      ]
    },
    {
      class: 9,
      subjects: ["Mathematics", "Science", "English", "Social Studies", "Hindi"],
      duration: "12 Months",
      batchSize: "15 Students",
      description: "Intensive preparation for board exam patterns",
      highlights: [
        "Sample paper practice",
        "Practical lab skills",
        "Writing improvement",
        "Case study approach"
      ]
    },
    {
      class: 10,
      subjects: ["Mathematics", "Science", "English", "Social Studies", "Hindi"],
      duration: "12 Months",
      batchSize: "15 Students",
      description: "Board exam focused training with result-oriented approach",
      highlights: [
        "10-year paper analysis",
        "Important question banks",
        "Presentation skills",
        "Time management training"
      ]
    }
  ];

  return (
    <div className="font-sans bg-white">
        <header>
            <Header/>
        </header>
      {/* Page Header */}
      <section 
        ref={pageHeaderRef}
        className="pt-32 pb-20 px-6 bg-gradient-to-r from-blue-900 to-blue-700 text-white"
      >
        <div className="container mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Our Courses</h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto">
            Comprehensive CBSE coaching programs for classes 6 to 10 with personalized attention
          </p>
          <div className="mt-8">
            <Link 
              to="/contact" 
              className="inline-block bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-md font-medium transition mr-4"
            >
              Enquire Now
            </Link>
            <Link 
              to="/demo" 
              className="inline-block bg-transparent border-2 border-white hover:bg-blue-800 px-6 py-3 rounded-md font-medium transition"
            >
              Book Free Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Class 6 */}
      <section 
        ref={class6Ref}
        className="py-16 px-6 bg-gray-50"
        id="class-6"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-800 text-white text-xl font-bold rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    6
                  </div>
                  <h2 className="text-2xl font-bold text-blue-900">Class 6 CBSE Program</h2>
                </div>
                <p className="text-gray-700 mb-6">{courses[0].description}</p>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">Subjects Covered</h3>
                  <div className="flex flex-wrap gap-2">
                    {courses[0].subjects.map((subject, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-600">Duration</p>
                    <p className="font-semibold text-blue-800">{courses[0].duration}</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-600">Batch Size</p>
                    <p className="font-semibold text-blue-800">{courses[0].batchSize}</p>
                  </div>
                </div>
                
                <Link 
                  to="/contact?class=6" 
                  className="block w-full bg-orange-500 hover:bg-orange-600 text-white text-center py-3 rounded-md font-medium transition"
                >
                  Enroll Now
                </Link>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="bg-white p-6 rounded-lg shadow-lg h-full">
                <h3 className="text-lg font-semibold text-blue-800 mb-4">Program Highlights</h3>
                <ul className="space-y-3">
                  {courses[0].highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-orange-500 mr-2 mt-1">✓</span>
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">Sample Schedule</h3>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="grid grid-cols-3 gap-2 text-sm mb-2 font-semibold text-blue-800">
                      <div>Day</div>
                      <div>Time</div>
                      <div>Subject</div>
                    </div>
                    {[
                      { day: "Mon/Wed", time: "4-6 PM", subject: "Math" },
                      { day: "Tue/Thu", time: "4-6 PM", subject: "Science" },
                      { day: "Fri", time: "4-6 PM", subject: "English" },
                      { day: "Sat", time: "10-12 PM", subject: "Social Studies" }
                    ].map((item, index) => (
                      <div key={index} className="grid grid-cols-3 gap-2 text-sm py-2 border-b border-blue-100">
                        <div>{item.day}</div>
                        <div>{item.time}</div>
                        <div>{item.subject}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Class 7 */}
      <section 
        ref={class7Ref}
        className="py-16 px-6 bg-white"
        id="class-7"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-800 text-white text-xl font-bold rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    7
                  </div>
                  <h2 className="text-2xl font-bold text-blue-900">Class 7 CBSE Program</h2>
                </div>
                <p className="text-gray-700 mb-6">{courses[1].description}</p>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">Subjects Covered</h3>
                  <div className="flex flex-wrap gap-2">
                    {courses[1].subjects.map((subject, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-600">Duration</p>
                    <p className="font-semibold text-blue-800">{courses[1].duration}</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-600">Batch Size</p>
                    <p className="font-semibold text-blue-800">{courses[1].batchSize}</p>
                  </div>
                </div>
                
                <Link 
                  to="/contact?class=7" 
                  className="block w-full bg-orange-500 hover:bg-orange-600 text-white text-center py-3 rounded-md font-medium transition"
                >
                  Enroll Now
                </Link>
              </div>
            </div>
            
            <div className="lg:w-1/2 order-1 lg:order-2">
              <div className="bg-white p-6 rounded-lg shadow-lg h-full">
                <h3 className="text-lg font-semibold text-blue-800 mb-4">Program Highlights</h3>
                <ul className="space-y-3">
                  {courses[1].highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-orange-500 mr-2 mt-1">✓</span>
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">Teaching Methodology</h3>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Concept explanation through real-life examples</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Weekly doubt clearing sessions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Monthly progress reports</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>Interactive digital learning tools</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Class 8 */}
      <section 
        ref={class8Ref}
        className="py-16 px-6 bg-gray-50"
        id="class-8"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-800 text-white text-xl font-bold rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    8
                  </div>
                  <h2 className="text-2xl font-bold text-blue-900">Class 8 CBSE Program</h2>
                </div>
                <p className="text-gray-700 mb-6">{courses[2].description}</p>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">Subjects Covered</h3>
                  <div className="flex flex-wrap gap-2">
                    {courses[2].subjects.map((subject, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-600">Duration</p>
                    <p className="font-semibold text-blue-800">{courses[2].duration}</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-600">Batch Size</p>
                    <p className="font-semibold text-blue-800">{courses[2].batchSize}</p>
                  </div>
                </div>
                
                <Link 
                  to="/contact?class=8" 
                  className="block w-full bg-orange-500 hover:bg-orange-600 text-white text-center py-3 rounded-md font-medium transition"
                >
                  Enroll Now
                </Link>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="bg-white p-6 rounded-lg shadow-lg h-full">
                <h3 className="text-lg font-semibold text-blue-800 mb-4">Program Highlights</h3>
                <ul className="space-y-3">
                  {courses[2].highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-orange-500 mr-2 mt-1">✓</span>
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">Special Features</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="text-blue-500 font-bold mb-1">NTSE</div>
                      <p className="text-sm text-gray-700">Foundation course included</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="text-blue-500 font-bold mb-1">Olympiad</div>
                      <p className="text-sm text-gray-700">Special preparation</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="text-blue-500 font-bold mb-1">Labs</div>
                      <p className="text-sm text-gray-700">Practical experiments</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="text-blue-500 font-bold mb-1">Tests</div>
                      <p className="text-sm text-gray-700">Weekly assessments</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Class 9 */}
      <section 
        ref={class9Ref}
        className="py-16 px-6 bg-white"
        id="class-9"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-800 text-white text-xl font-bold rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    9
                  </div>
                  <h2 className="text-2xl font-bold text-blue-900">Class 9 CBSE Program</h2>
                </div>
                <p className="text-gray-700 mb-6">{courses[3].description}</p>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">Subjects Covered</h3>
                  <div className="flex flex-wrap gap-2">
                    {courses[3].subjects.map((subject, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-600">Duration</p>
                    <p className="font-semibold text-blue-800">{courses[3].duration}</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-600">Batch Size</p>
                    <p className="font-semibold text-blue-800">{courses[3].batchSize}</p>
                  </div>
                </div>
                
                <Link 
                  to="/contact?class=9" 
                  className="block w-full bg-orange-500 hover:bg-orange-600 text-white text-center py-3 rounded-md font-medium transition"
                >
                  Enroll Now
                </Link>
              </div>
            </div>
            
            <div className="lg:w-1/2 order-1 lg:order-2">
              <div className="bg-white p-6 rounded-lg shadow-lg h-full">
                <h3 className="text-lg font-semibold text-blue-800 mb-4">Program Highlights</h3>
                <ul className="space-y-3">
                  {courses[3].highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-orange-500 mr-2 mt-1">✓</span>
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">Board Exam Preparation</h3>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="flex items-center mb-3">
                      <div className="w-2/5 text-sm font-medium text-gray-600">Syllabus Completion</div>
                      <div className="w-3/5">
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-blue-600 h-2.5 rounded-full" style={{width: '90%'}}></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center mb-3">
                      <div className="w-2/5 text-sm font-medium text-gray-600">Sample Papers</div>
                      <div className="w-3/5">
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-blue-600 h-2.5 rounded-full" style={{width: '80%'}}></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2/5 text-sm font-medium text-gray-600">Revision Tests</div>
                      <div className="w-3/5">
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-blue-600 h-2.5 rounded-full" style={{width: '95%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Class 10 */}
      <section 
        ref={class10Ref}
        className="py-16 px-6 bg-gray-50"
        id="class-10"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-800 text-white text-xl font-bold rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    10
                  </div>
                  <h2 className="text-2xl font-bold text-blue-900">Class 10 CBSE Program</h2>
                </div>
                <p className="text-gray-700 mb-6">{courses[4].description}</p>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">Subjects Covered</h3>
                  <div className="flex flex-wrap gap-2">
                    {courses[4].subjects.map((subject, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-600">Duration</p>
                    <p className="font-semibold text-blue-800">{courses[4].duration}</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-600">Batch Size</p>
                    <p className="font-semibold text-blue-800">{courses[4].batchSize}</p>
                  </div>
                </div>
                
                <Link 
                  to="/contact?class=10" 
                  className="block w-full bg-orange-500 hover:bg-orange-600 text-white text-center py-3 rounded-md font-medium transition"
                >
                  Enroll Now
                </Link>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="bg-white p-6 rounded-lg shadow-lg h-full">
                <h3 className="text-lg font-semibold text-blue-800 mb-4">Program Highlights</h3>
                <ul className="space-y-3">
                  {courses[4].highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-orange-500 mr-2 mt-1">✓</span>
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">Success Statistics</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-blue-800 mb-1">98%</div>
                      <div className="text-sm text-gray-600">Pass Rate</div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-blue-800 mb-1">90%+</div>
                      <div className="text-sm text-gray-600">Scored 90%+</div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-blue-800 mb-1">100%</div>
                      <div className="text-sm text-gray-600">College Admissions</div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-blue-800 mb-1">25+</div>
                      <div className="text-sm text-gray-600">School Toppers</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-orange-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-4">Still Have Questions?</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Schedule a free counseling session with our academic advisors to discuss the best program for your child
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-medium transition shadow-md"
            >
              Book Free Session
            </Link>
            <Link 
              to="/faq" 
              className="bg-white border border-blue-800 text-blue-800 hover:bg-blue-50 px-6 py-3 rounded-md font-medium transition"
            >
              View FAQs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link, useParams } from 'react-router-dom';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Header from './Header';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const ClassCoursePage = () => {
  const { classId } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const pageHeaderRef = useRef(null);
  const syllabusRef = useRef(null);
  const resultsRef = useRef(null);
  const facultyRef = useRef(null);
  const graphRef = useRef(null);

  // Sample data for different classes
  const classData = {
    6: {
      title: "Class 6 Foundation Program",
      subjects: ["Mathematics", "Science", "English", "Social Studies", "Hindi"],
      duration: "10 Months",
      batchSize: "20 Students",
      description: "Build strong fundamentals with our interactive learning methods designed specifically for young CBSE students.",
      highlights: [
        "Conceptual clarity through activities",
        "Weekly worksheets",
        "Creative writing development",
        "Monthly progress reports"
      ],
      syllabus: {
        math: ["Number System", "Algebra", "Geometry", "Mensuration", "Data Handling"],
        science: ["Food & Nutrition", "Fibre to Fabric", "Sorting Materials", "Plants", "Body Movements"],
        english: ["Reading", "Writing", "Grammar", "Literature", "Vocabulary"],
        social: ["History", "Geography", "Civics", "Culture"],
        hindi: ["पठन", "लेखन", "व्याकरण", "साहित्य"]
      },
      performanceData: [
        { name: '2020', students: 18, average: 82 },
        { name: '2021', students: 22, average: 85 },
        { name: '2022', students: 25, average: 87 },
        { name: '2023', students: 28, average: 89 }
      ],
      faculty: [
        { name: "Mrs. Anjali Sharma", qualification: "M.Sc, B.Ed", experience: "12 years", subject: "Mathematics" },
        { name: "Mr. Rajesh Iyer", qualification: "M.Sc, M.Ed", experience: "10 years", subject: "Science" },
        { name: "Ms. Priya Menon", qualification: "MA English", experience: "8 years", subject: "English" }
      ]
    },
    // Similar data structures for classes 7-10...
    10: {
      title: "Class 10 Board Excellence Program",
      subjects: ["Mathematics", "Science", "English", "Social Studies", "Hindi"],
      duration: "12 Months",
      batchSize: "15 Students",
      description: "Comprehensive board exam preparation with intensive practice, sample papers, and personalized mentoring.",
      highlights: [
        "10-year paper pattern analysis",
        "Chapter-wise weightage focus",
        "Answer presentation training",
        "Time management strategies"
      ],
      syllabus: {
        math: ["Real Numbers", "Polynomials", "Pair of Equations", "Quadratic Equations", "Trigonometry"],
        science: ["Chemical Reactions", "Acids & Bases", "Light", "Electricity", "Life Processes"],
        english: ["Reading Skills", "Writing Skills", "Grammar", "Literature", "Project Work"],
        social: ["Nationalism", "Resources", "Democracy", "Globalization"],
        hindi: ["पठन कौशल", "लेखन कौशल", "व्याकरण", "साहित्य"]
      },
      performanceData: [
        { name: '2020', students: 15, average: 89, distinction: 60 },
        { name: '2021', students: 18, average: 91, distinction: 65 },
        { name: '2022', students: 20, average: 93, distinction: 75 },
        { name: '2023', students: 22, average: 94, distinction: 80 }
      ],
      faculty: [
        { name: "Dr. Sanjay Patel", qualification: "PhD, M.Sc", experience: "15 years", subject: "Mathematics" },
        { name: "Mrs. Neha Kapoor", qualification: "M.Sc, B.Ed", experience: "12 years", subject: "Science" },
        { name: "Mr. Amit Joshi", qualification: "MA, B.Ed", experience: "10 years", subject: "English" }
      ]
    }
  };

  // Set default to class 10 if invalid class
  const data = classData[classId] || classData[10];

  // Animation setup
  useEffect(() => {
    // Header animation
    gsap.from(pageHeaderRef.current, {
      opacity: 1,
      y: 50,
      duration: 1,
      ease: "power3.out"
    });

    // Section animations
    const animateSection = (ref) => {
      gsap.from(ref.current, {
        opacity: 1,
        y: 50,
        duration: 0.8,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 75%",
          toggleActions: "play none none none"
        }
      });
    };

    animateSection(syllabusRef);
    animateSection(resultsRef);
    animateSection(facultyRef);
    animateSection(graphRef);

    // Clean up ScrollTrigger instances
    return () => {
      ScrollTrigger.getAll().forEach(instance => instance.kill());
    };
  }, [classId]);

  return (
    <div className="font-sans bg-white">
      {/* Hero Header */}
      <Header/>
      <section 
        ref={pageHeaderRef}
        className="pt-32 pb-20 px-6 bg-gradient-to-r from-blue-900 to-blue-700 text-white"
      >
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <div className="flex items-center mb-4">
                <div className="bg-white text-blue-900 text-2xl font-bold rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  {classId}
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">{data.title}</h1>
              </div>
              <p className="text-lg sm:text-xl text-blue-100 mb-6">{data.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {data.subjects.map((subject, index) => (
                  <span key={index} className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">
                    {subject}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-md font-medium transition text-center"
                >
                  Enroll Now
                </Link>
                <Link 
                  to="/demo" 
                  className="bg-transparent border-2 border-white hover:bg-blue-800 px-6 py-3 rounded-md font-medium transition text-center"
                >
                  Book Free Demo
                </Link>
              </div>
            </div>
            {/* <div className="md:w-1/3 mt-8 md:mt-0">
              <div className="bg-opacity-1 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">Course Details</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-blue-200">Duration:</span>
                    <span className="font-medium">{data.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-200">Batch Size:</span>
                    <span className="font-medium">{data.batchSize}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-200">Classes:</span>
                    <span className="font-medium">5 days/week</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-200">Tests:</span>
                    <span className="font-medium">Weekly</span>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="container mx-auto px-6">
          <div className="flex overflow-x-auto">
            {['overview', 'syllabus', 'results', 'faculty', 'schedule'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 font-medium whitespace-nowrap border-b-2 transition ${activeTab === tab ? 'border-orange-500 text-orange-600' : 'border-transparent text-gray-600 hover:text-blue-800'}`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <section className="py-16 px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-6">Program Highlights</h2>
                <ul className="space-y-4">
                  {data.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-orange-100 p-2 rounded-full mr-4">
                        <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-blue-900 mb-6">Teaching Methodology</h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-blue-100 text-blue-800 rounded-lg p-3 mr-4">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-blue-800">Conceptual Learning</h3>
                        <p className="text-gray-600">Focus on understanding rather than rote memorization</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-100 text-blue-800 rounded-lg p-3 mr-4">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-blue-800">NCERT Focus</h3>
                        <p className="text-gray-600">Complete coverage of NCERT syllabus with extra practice</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-100 text-blue-800 rounded-lg p-3 mr-4">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-blue-800">Doubt Resolution</h3>
                        <p className="text-gray-600">Daily doubt clearing sessions</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Syllabus Tab */}
      {activeTab === 'syllabus' && (
        <section ref={syllabusRef} className="py-16 px-6 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold text-center text-blue-900 mb-12">Detailed Syllabus</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(data.syllabus).map(([subject, chapters]) => (
                <div key={subject} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4 capitalize">{subject}</h3>
                  <ul className="space-y-2">
                    {chapters.map((chapter, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span className="text-gray-700">{chapter}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Results Tab */}
      {activeTab === 'results' && (
        <section ref={resultsRef} className="py-16 px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold text-center text-blue-900 mb-12">Performance Trends</h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-6">Average Scores Over Years</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data.performanceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="average" stroke="#1D4ED8" strokeWidth={2} name="Average %" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-6">Student Performance Distribution</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data.performanceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="students" fill="#FF6B35" name="Students" />
                      {data.performanceData[0].distinction && (
                        <Bar dataKey="distinction" fill="#1E3A8A" name="Distinction %" />
                      )}
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
            
            <div className="mt-12 grid sm:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-800 mb-2">
                  {Math.max(...data.performanceData.map(d => d.average))}%
                </div>
                <div className="text-gray-600">Highest Average</div>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  {data.performanceData.reduce((acc, curr) => acc + curr.students, 0)}
                </div>
                <div className="text-gray-600">Total Students</div>
              </div>
              <div className="bg-blue-800 p-6 rounded-lg text-center text-white">
                <div className="text-3xl font-bold mb-2">
                  {classId === '10' ? '100%' : '98%'}
                </div>
                <div>Pass Rate</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Faculty Tab */}
      {activeTab === 'faculty' && (
        <section ref={facultyRef} className="py-16 px-6 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold text-center text-blue-900 mb-12">Our Expert Faculty</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.faculty.map((teacher, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition transform hover:-translate-y-1">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 text-blue-800 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-4">
                      {teacher.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-800">{teacher.name}</h3>
                      <p className="text-sm text-gray-600">{teacher.subject}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Qualification:</span>
                      <span className="font-medium">{teacher.qualification}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Experience:</span>
                      <span className="font-medium">{teacher.experience}</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-sm text-gray-600 italic">
                      "Focus on conceptual clarity and application-based learning"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Schedule Tab */}
      {activeTab === 'schedule' && (
        <section ref={graphRef} className="py-16 px-6 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold text-center text-blue-900 mb-12">Class Schedule</h2>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Day</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Time</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Subject</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Faculty</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { day: "Monday", time: "4:00 PM - 6:00 PM", subject: "Mathematics", faculty: data.faculty[0].name },
                      { day: "Tuesday", time: "4:00 PM - 6:00 PM", subject: "Science", faculty: data.faculty[1].name },
                      { day: "Wednesday", time: "4:00 PM - 6:00 PM", subject: "English", faculty: data.faculty[2].name },
                      { day: "Thursday", time: "4:00 PM - 6:00 PM", subject: "Mathematics", faculty: data.faculty[0].name },
                      { day: "Friday", time: "4:00 PM - 6:00 PM", subject: "Science", faculty: data.faculty[1].name },
                      { day: "Saturday", time: "10:00 AM - 1:00 PM", subject: "Test/Revision", faculty: "All" }
                    ].map((row, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-blue-50">
                        <td className="px-4 py-3 text-sm text-gray-700">{row.day}</td>
                        <td className="px-4 py-3 text-sm text-gray-700">{row.time}</td>
                        <td className="px-4 py-3 text-sm text-gray-700">{row.subject}</td>
                        <td className="px-4 py-3 text-sm text-gray-700">{row.faculty}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="mt-8 bg-blue-100 border-l-4 border-blue-500 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-blue-700">
                      Additional doubt clearing sessions available on Sundays (10 AM - 12 PM)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Ready to Join Class {classId}?</h2>
          <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto">
            Limited seats available. Secure your spot today for the upcoming batch starting next month.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-md font-medium transition shadow-lg"
            >
              Enroll Now
            </Link>
            <Link 
              to="/demo" 
              className="bg-transparent border-2 border-white hover:bg-blue-800 px-8 py-4 rounded-md font-medium transition"
            >
              Schedule Campus Visit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClassCoursePage;
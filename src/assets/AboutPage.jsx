import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import Header from './Header';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const aboutRef = useRef(null);
  const missionRef = useRef(null);
  const teamRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    // Section animations
    const sections = [
      { ref: aboutRef, y: 50 },
      { ref: missionRef, y: 50 },
      { ref: teamRef, y: 50 },
      { ref: statsRef, y: 50 }
    ];

    sections.forEach(({ ref, y }) => {
      gsap.from(ref.current, {
        opacity: 1,
        y,
        duration: 0.8,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 75%",
          toggleActions: "play none none none"
        }
      });
    });

    // Team member cards animation
    gsap.from(".team-card", {
      opacity: 1,
      y: 30,
      stagger: 0.1,
      duration: 0.6,
      scrollTrigger: {
        trigger: teamRef.current,
        start: "top 75%"
      }
    });
  }, []);

  return (
    <div className="font-sans bg-white">
        {/* Header */}
        <Header/>
      {/* Hero Banner */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">About Adhyay Coaching</h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto">
            Empowering CBSE students since 2010 with quality education and personalized mentoring
          </p>
          <div className="mt-6">
            <Link 
              to="/contact" 
              className="inline-block bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-md font-medium transition mr-4"
            >
              Contact Us
            </Link>
            <Link 
              to="/courses" 
              className="inline-block bg-transparent border-2 border-white hover:bg-blue-800 px-6 py-3 rounded-md font-medium transition"
            >
              Our Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section ref={aboutRef} className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-4">Our Story</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Adhyay Coaching Center" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-gray-700 mb-4">
                Founded in 2010 by Mrs. Anjali Deshpande, Adhyay Coaching Center began with a single classroom and a vision to transform CBSE education in our community.
              </p>
              <p className="text-gray-700 mb-4">
                What started as a small tuition center has now grown into a premier coaching institute with 5 branches across the city, serving over 1,000 students annually.
              </p>
              <p className="text-gray-700">
                Our journey has been guided by one simple principle: <span className="font-semibold text-blue-800">Every student deserves personalized attention to unlock their full potential.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section ref={missionRef} className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-4">Our Mission & Vision</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Our Mission</h3>
              <p className="text-gray-700">
                To provide affordable, high-quality CBSE coaching that focuses on conceptual understanding rather than rote learning, helping students develop critical thinking skills and academic confidence.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Our Vision</h3>
              <p className="text-gray-700">
                To become the most trusted CBSE coaching brand in our region, recognized for consistently producing well-rounded students who excel both academically and in life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section ref={teamRef} className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-4">Meet Our Team</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Our faculty members are CBSE experts with an average of 10+ years of teaching experience
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Mrs. Anjali Deshpande",
                role: "Founder & Math Expert",
                experience: "15 years",
                bio: "M.Sc in Mathematics, former CBSE board examiner"
              },
              {
                name: "Mr. Rajesh Iyer",
                role: "Science HOD",
                experience: "12 years",
                bio: "Specializes in Physics & Chemistry, NTSE mentor"
              },
              {
                name: "Ms. Priya Menon",
                role: "English Department",
                experience: "10 years",
                bio: "MA in English, creative writing specialist"
              },
              {
                name: "Mr. Amit Sharma",
                role: "Social Science",
                experience: "11 years",
                bio: "Gold medalist in History, CBSE paper setter"
              },
              {
                name: "Mrs. Neha Kapoor",
                role: "Mathematics",
                experience: "9 years",
                bio: "Olympiad trainer, problem-solving expert"
              },
              {
                name: "Dr. Sanjay Patel",
                role: "Academic Advisor",
                experience: "20 years",
                bio: "PhD in Education, curriculum developer"
              }
            ].map((member, index) => (
              <div key={index} className="team-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1 border-t-4 border-blue-500">
                <div className="h-40 bg-blue-100 rounded mb-4 flex items-center justify-center text-blue-800 text-4xl font-bold">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-lg font-semibold text-blue-800">{member.name}</h3>
                <p className="text-orange-600 font-medium mb-2">{member.role}</p>
                <p className="text-sm text-gray-600 mb-3">{member.bio}</p>
                <div className="text-xs text-blue-900 bg-blue-100 inline-block px-2 py-1 rounded">
                  {member.experience} experience
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-16 px-6 bg-blue-900 text-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Impact in Numbers</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { number: "13", label: "Years of Excellence" },
              { number: "1,200+", label: "Students Enrolled" },
              { number: "95%", label: "Average Pass Rate" },
              { number: "50+", label: "School Toppers" }
            ].map((stat, index) => (
              <div key={index} className="bg-blue-800 p-6 rounded-lg">
                <div className="text-3xl sm:text-4xl font-bold text-orange-300 mb-2">{stat.number}</div>
                <div className="text-sm sm:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-orange-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-4">Ready to Join Adhyay?</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Schedule a free counseling session with our academic advisors to discuss your child's educational needs
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md font-medium transition shadow-md"
          >
            Book Free Session
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
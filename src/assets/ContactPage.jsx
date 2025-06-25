import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { FaPhone, FaPaperPlane, FaMapMarkerAlt } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Fix for Leaflet marker icons in React
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { useNavigate } from "react-router-dom";


let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

  const biharCoords = [25.5941, 85.1376];
  const biharCities = [
    { name: "adhyay Institute", coords: [25.7066476,85.2004066] },
  ];
L.Marker.prototype.options.icon = DefaultIcon;

// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: require("node_modules/leaflet/dist/images/marker-icon-2x.png"),
//   iconUrl: require("node_modules/leaflet/dist/images/marker-icon.png"),
//   shadowUrl: require("node_modules/leaflet/dist/images/marker-shadow.png"),
// });

const ContactPage = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Refs for GSAP animations
  const titleRef = useRef(null);
  const formRef = useRef(null);
  const contactInfoRef = useRef(null);

  // Animation on component mount
  useEffect(() => {
    gsap.from(titleRef.current, {
      y: -30,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out",
    });

    gsap.from(formRef.current, {
      x: -30,
      opacity: 1,
      duration: 0.8,
      delay: 0.2,
      ease: "back.out(1.2)",
    });

    gsap.from(contactInfoRef.current, {
      x: 30,
      opacity: 1,
      duration: 0.8,
      delay: 0.4,
      ease: "back.out(1.2)",
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    gsap.to(formRef.current, {
      opacity: 0.9,
      duration: 0.3,
      yoyo: true,
      repeat: 1,
      onComplete: () => {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 3000);
      },
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Animated Title */}
        <h1
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-6"
        >
          Get in Touch
        </h1>
        <p className="text-center text-blue-700 mb-12 text-lg max-w-2xl mx-auto">
          Have questions? Reach out via the form below or call us directly.
        </p>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Enquiry Form (Left) */}
          <div
            ref={formRef}
            className="w-full lg:w-1/2 bg-white rounded-xl shadow-xl p-6 sm:p-8"
          >
            <h2 className="text-2xl font-semibold text-blue-900 mb-6">
              Send an Enquiry
            </h2>
            {isSubmitted && (
              <div className="p-4 bg-blue-100 text-blue-900 rounded-lg mb-6">
                Thank you! We'll contact you soon.
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-blue-900 font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-blue-900 font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-blue-900 font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-800 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                <FaPaperPlane /> Send Message
              </button>
            </form>
          </div>

          {/* Contact Info (Right) */}
          <div
            ref={contactInfoRef}
            className="w-full lg:w-1/2 bg-blue-900 text-white rounded-xl shadow-xl p-6 sm:p-8"
          >
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-800 p-3 rounded-full">
                  <FaPhone className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Call Us</h3>
                  <a
                    href="tel:+1234567890"
                    className="text-blue-200 hover:text-white transition-all"
                  >
                    +91 7277302670
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-800 p-3 rounded-full">
                  <FaMapMarkerAlt className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Location</h3>
                  <p className="text-blue-200">
                    Adhyay Institutes<br />
                    2nd floor, hathsarganj, Hajipur, Bihar 844101
                  </p>
                </div>
              </div>
            </div>


             <div className="mt-8 rounded-lg overflow-hidden h-64 z-0">
              <MapContainer
                center={biharCoords}
                zoom={7}
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {biharCities.map((city, index) => (
                  <Marker key={index} position={city.coords}>
                    <Popup>
                      <a href="https://www.google.com/maps/place/Adhyay+Institute/@25.7066476,85.2004066,17z/data=!3m1!4b1!4m6!3m5!1s0x39ed5deb39c5055f:0x7bc776fdb68e141!8m2!3d25.7066476!4d85.2029815!16s%2Fg%2F11m701q94d?entry=ttu&g_ep=EgoyMDI1MDYyMi4wIKXMDSoASAFQAw%3D%3D">{city.name}</a><br />
                      {city.coords[0].toFixed(4)}, {city.coords[1].toFixed(4)}
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
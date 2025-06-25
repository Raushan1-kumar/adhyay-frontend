import { useState } from "react";
import { Link } from "react-router-dom";
 
function Header() {
      const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    
    return ( 
         <nav className="fixed w-full bg-white text-black font-bold   shadow-md z-50">
        <div className="container mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-xl sm:text-2xl font-bold">Adhyay</span>
            <span className="text-xs sm:text-sm">Coaching Center</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 text-2xl lg:space-x-8">
            <Link to="/" className="hover:text-orange-300 transition">Home</Link>
            <Link to="/courses" className="hover:text-orange-300 transition">Courses</Link>
            <Link to="/about" className="hover:text-orange-300 transition">About</Link>
            <Link to="/contact" className="hover:text-orange-300 transition">Contact</Link>
            <Link to="/studentauth" className="hover:text-orange-300 transition">Student Portal</Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-black focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          
          <Link to="/contact" className="hidden md:block bg-orange-500 text-white hover:bg-orange-600 px-4 py-2 rounded-md transition">
            Enroll Now
          </Link>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white-200 px-4 py-2">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="hover:text-orange-300 transition" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <Link to="/courses" className="hover:text-orange-300 transition" onClick={() => setMobileMenuOpen(false)}>Courses</Link>
              <Link to="/about" className="hover:text-orange-300 transition" onClick={() => setMobileMenuOpen(false)}>About</Link>
              <Link to="/contact" className="hover:text-orange-300 transition" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
               <Link to="/studentauth" className="hover:text-orange-300 transition">Student Portal</Link>
              <Link to="/contact" className="bg-orange-500 text-white hover:bg-orange-600 px-4 py-2 rounded-md transition text-center">
                Enroll Now
              </Link>
            </div>
          </div>
        )}
      </nav>        
     );
}

export default Header;
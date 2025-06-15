import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Lucide icons for menu toggle

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white shadow">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-lg sm:text-xl font-bold">SARTHAK HOMEO HALL</h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 text-sm sm:text-base">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/doctor" className="hover:underline">Doctor</Link></li>
          <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          <li><Link to="/appointment" className="hover:underline">Book Appointment</Link></li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 px-4 py-3 space-y-2">
          <Link to="/" className="block text-white hover:underline" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/doctor" className="block text-white hover:underline" onClick={() => setIsOpen(false)}>Doctor</Link>
          <Link to="/contact" className="block text-white hover:underline" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link to="/appointment" className="block text-white hover:underline" onClick={() => setIsOpen(false)}>Book Appointment</Link>
        </div>
      )}
    </header>
  );
}

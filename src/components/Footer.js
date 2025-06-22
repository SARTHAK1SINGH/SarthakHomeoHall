import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <p className="text-sm mb-2 md:mb-0">
          &copy; {new Date().getFullYear()} Sarthak Homeo Hall. All rights
          reserved.
        </p>
        <div className="flex space-x-4 text-sm">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/doctor" className="hover:underline">
            Doctor
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
          <Link to="/appointment" className="hover:underline">
            Book Appointment
          </Link>
        </div>
      </div>
    </footer>
  );
}

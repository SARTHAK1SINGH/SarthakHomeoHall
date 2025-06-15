export default function DoctorDetails() {
  return (
    <section className="p-8 max-w-5xl mx-auto bg-white rounded-xl shadow-md">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        
        {/* Doctor Image */}
        <img
          src="/Doctor.jpg" // Replace with actual image path
          alt="Dr. Prem Lalit Mohan Singh"
          className="w-64 h-80 object-cover rounded-xl shadow-lg border-4 border-indigo-200"
        />
        
        {/* Doctor Details */}
        <div className="flex-grow">
          <h2 className="text-3xl font-bold text-indigo-800 mb-2">
            Dr. Prem Lalit Mohan Singh
          </h2>
          <p className="text-indigo-600 italic mb-1">
            BHMS, Gold Medalist (General Medicine)
          </p>
          <p className="mb-4 text-gray-700 font-medium">
            Experience: <span className="font-semibold">15+ years</span>
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Specializes in diabetes management, hypertension, infectious diseases, and lifestyle counseling.<br />
            Practicing at <strong>Sarthak Homeo Hall</strong>, WazirGanj, Gonda, Uttar Pradesh.
          </p>
          
          {/* Book Appointment Button */}
          <button
            onClick={() => window.location.href = '/appointment'}
            className="bg-indigo-600 text-white px-6 py-2 rounded-full shadow hover:bg-indigo-700 transition"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </section>
  );
}

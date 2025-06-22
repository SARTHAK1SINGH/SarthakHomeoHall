import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate(); // React Router hook for navigation

  return (
    <section className="relative w-full min-h-screen overflow-hidden m-0 p-0">
      {/* Background Image */}
      <div
        className="fixed top-0 left-0 w-full h-full bg-cover bg-center scale-105 blur-sm brightness-75 -z-10"
        style={{ backgroundImage: "url('/homeopathyHome.webp')" }}
      />

      {/* Gradient Overlay */}
      <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-b from-black/70 to-black/30 -z-10" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center min-h-screen px-4 md:px-8">
        {/* Heading */}
        <div className="mb-6">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-lg">
            Welcome to <br /> Sarthak Homeo Hall
          </h2>
        </div>

        {/* Paragraph */}
        <div className="max-w-2xl mb-8 px-2 sm:px-4">
          <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed drop-shadow-md">
            Since 2007, Sarthak Homeo Hall has focused on classical homeopathy
            to heal the root cause of illness—not just symptoms. We provide a
            gentle, holistic approach to conditions such as asthma, allergies,
            migraines, kidney stones, thyroid issues, and more.
          </p>
        </div>

        {/* Button */}
        <button
          onClick={() => navigate("/appointment")}
          className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 rounded-full shadow-lg transition-all duration-300"
        >
          Book an Appointment
        </button>
        <br />
        <button
          onClick={() => navigate("/store")}
          className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 rounded-full shadow-lg transition-all duration-300"
        >
          Buy Medicine
        </button>
      </div>
    </section>
  );
}

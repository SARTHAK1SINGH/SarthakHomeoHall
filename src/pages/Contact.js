import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section className="p-8 max-w-4xl mx-auto bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-indigo-800 mb-6 text-center">
        Contact Us
      </h2>

      <div className="space-y-6 text-gray-700 text-lg">
        <div className="flex items-start gap-4">
          <MapPin className="text-indigo-600 w-6 h-6 mt-1" />
          <p>
            <strong>Address:</strong><br />
            Sarthak Homeo Hall,<br />
            Near WazirGanj Police Station,<br />
            Gonda, Uttar Pradesh, 271124, India
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Phone className="text-indigo-600 w-6 h-6" />
          <p>
            <strong>Phone:</strong> <a href="tel:+918052515001" className="hover:underline">+918052515001</a>
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Mail className="text-indigo-600 w-6 h-6" />
          <p>
            <strong>Email:</strong> <a href="mailto:contact@drlalitsingh78@gmail.com" className="hover:underline">drlalitsingh78@gmail.com</a>
          </p>
        </div>

        {/* Timings Table */}
        <div className="flex items-start gap-4">
          <Clock className="text-indigo-600 w-6 h-6 mt-1" />
          <div className="w-full">
            <strong className="text-lg">Clinic Timings:</strong>
            <div className="overflow-x-auto mt-2">
              <table className="min-w-full border border-gray-300 text-left text-sm md:text-base">
                <thead className="bg-indigo-100 text-indigo-800 font-semibold">
                  <tr>
                    <th className="px-4 py-2 border-b">Day</th>
                    <th className="px-4 py-2 border-b">Morning</th>
                    <th className="px-4 py-2 border-b">Evening</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    'Sunday', 'Monday', 'Tuesday', 'Wednesday',
                    'Thursday', 'Friday', 'Saturday',
                  ].map((day) => (
                    <tr key={day} className="hover:bg-gray-50">
                      <td className="px-4 py-2 border-b">{day}</td>
                      <td className="px-4 py-2 border-b">9:00 AM – 1:00 PM</td>
                      <td className="px-4 py-2 border-b">3:00 PM – 8:00 PM</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

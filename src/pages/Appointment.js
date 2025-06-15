import { useState } from 'react';
import axios from 'axios';
import { Calendar, Phone, User, MessageCircle } from 'lucide-react';

export default function Appointment() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
  setStatus(''); // Reset status
  // 1. Compose message
  const smsMessage = 'Your appointment is confirmed with Sarthak Homeo Hall.';

  // 2. Send SMS using Textbelt API
  const smsResponse = await axios.post(
    'https://textbelt.com/text',
    new URLSearchParams({
      key: 'textbelt_test',
      phone: formData.phone.trim(), // Ensure no extra spaces
      message: smsMessage
    }),
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
  );

  // 3. Handle response
  if (smsResponse.data.success) {
    setStatus('Appointment confirmed and SMS sent successfully.');
  } else {
    setStatus('Failed to send SMS. Please try again later.');
  }

  // 4. Reset form
  setFormData({ name: '', phone: '', date: '', message: '' });
} catch (err) {
  console.error(err);
  setStatus('An error occurred. Please try again later.');
} finally {
  setLoading(false);
}
};

  return (
    <section className="p-8 max-w-3xl mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-3xl font-bold text-center text-indigo-800 mb-6">Book an Appointment</h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Your Name</label>
          <div className="relative">
            <User className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
          <div className="relative">
            <Phone className="absolute left-3 top-3 text-gray-400" />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Enter your phone number"
              pattern="[0-9]{10}"
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>
        </div>

        {/* Date */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Preferred Date</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-3 text-gray-400" />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Message / Symptoms</label>
          <div className="relative">
            <MessageCircle className="absolute left-3 top-3 text-gray-400" />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Describe your issue or symptoms"
              className="w-full pl-10 pr-4 py-2 border rounded-md resize-none focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-md transition duration-200"
        >
          {loading ? 'Sending...' : 'Book Appointment'}
        </button>

        {/* Status Message */}
        {status && (
          <p className={`mt-4 text-center ${status.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
            {status}
          </p>
        )}
      </form>
    </section>
  );
}

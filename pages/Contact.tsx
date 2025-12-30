import React, { useState } from 'react';
import { Content, Tour } from '../types';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

interface ContactProps {
  content: Content['contact'];
  tours: Tour[];
}

const Contact: React.FC<ContactProps> = ({ content, tours }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: '2',
    tourType: 'fullDay',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    let value = e.target.value;

    // Enforce max 12 guests
    if (e.target.name === 'guests' && parseInt(value) > 12) {
      value = '12';
    }

    setFormData({ ...formData, [e.target.name]: value });
  };

  const calculatePrice = (tourId: string, guests: number): number | null => {
    const tour = tours.find(t => t.id === tourId);
    if (!tour?.basePrice) return null;
    const extraGuests = Math.max(0, guests - (tour.maxPersons || 8));
    return tour.basePrice + extraGuests * (tour.extraPersonPrice || 0);
  };

  const getOptionLabel = (tourId: string): string => {
    const guests = parseInt(formData.guests) || 1;
    const price = calculatePrice(tourId, guests);
    const tour = tours.find(t => t.id === tourId);
    if (!price || !tour) {
      return content.form.options[tourId as keyof typeof content.form.options];
    }
    return `${tour.name} (${price}€)`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-sea-950 mb-4">{content.title}</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">{content.subtitle}</p>
        </div>

        <div className="grid xl:grid-cols-[2fr_3fr] gap-6 lg:gap-8 xl:gap-12 items-start">
          {/* Left Column - Image and Contact Info Stacked */}
          <div className="flex flex-col gap-6">
            {/* Image */}
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/contact.webp"
                alt="Mali Lošinj Harbor"
                className="w-full h-64 md:h-72 lg:h-80 xl:h-[380px] object-cover object-[center_35%]"
              />
            </div>

            {/* Contact Info Card */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <h3 className="font-serif text-xl font-bold text-sea-950 mb-4">{content.info.direct}</h3>
              <div className="space-y-4">
                <a href={`tel:${content.info.phone1.replace(/\s/g, '')}`} className="flex items-center group">
                  <div className="bg-sea-100 p-3 rounded-full text-sea-600 group-hover:bg-sea-600 group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Call / WhatsApp</p>
                    <p className="font-semibold text-sea-900">{content.info.phone1}</p>
                  </div>
                </a>
                <a href={`tel:${content.info.phone2.replace(/\s/g, '')}`} className="flex items-center group">
                  <div className="bg-sea-100 p-3 rounded-full text-sea-600 group-hover:bg-sea-600 group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Call</p>
                    <p className="font-semibold text-sea-900">{content.info.phone2}</p>
                  </div>
                </a>
                <a href={`mailto:${content.info.email}`} className="flex items-center group">
                  <div className="bg-sea-100 p-3 rounded-full text-sea-600 group-hover:bg-sea-600 group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Email</p>
                    <p className="font-semibold text-sea-900">{content.info.email}</p>
                  </div>
                </a>
                <div className="flex items-center">
                  <div className="bg-sea-100 p-3 rounded-full text-sea-600">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">{content.info.location}</p>
                    <p className="text-gray-700">{content.info.locationDesc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-2xl border border-gray-100">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6 animate-bounce">
                  <Send className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-3xl font-bold text-green-800 mb-4">Success!</h3>
                <p className="text-gray-600 mb-8">{content.form.success}</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-sea-600 font-semibold hover:text-sea-800"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">{content.form.name}</label>
                    <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-sea-500 focus:border-sea-500 outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">{content.form.email}</label>
                    <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-sea-500 outline-none" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">{content.form.phone}</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-sea-500 outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">{content.form.date}</label>
                    <input required type="date" name="date" value={formData.date} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-sea-500 outline-none" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">{content.form.guests}</label>
                    <input required type="number" min="1" max="12" name="guests" value={formData.guests} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-sea-500 outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">{content.form.tourType}</label>
                    <select name="tourType" value={formData.tourType} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-sea-500 outline-none">
                      <option value="fullDay">{getOptionLabel('fullDay')}</option>
                      <option value="halfDay">{getOptionLabel('halfDay')}</option>
                      <option value="custom">{getOptionLabel('custom')}</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">{content.form.message}</label>
                  <textarea name="message" rows={4} value={formData.message} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-sea-500 outline-none resize-none"></textarea>
                </div>
                <p className="text-center text-sm text-gray-500 mb-3">{content.form.disclaimer}</p>
                <button type="submit" className="w-full bg-sea-900 hover:bg-sea-800 text-white font-bold py-4 rounded-xl shadow-lg transition-all hover:scale-[1.01] flex justify-center items-center">
                  <Send className="w-5 h-5 mr-2" /> {content.form.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

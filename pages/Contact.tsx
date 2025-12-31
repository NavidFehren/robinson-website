import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Content, Tour } from '../types';
import { content as allContent } from '../content';
import { Phone, Mail, Send, ChevronDown, Loader2 } from 'lucide-react';

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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const calculatedPrice = calculatePrice(formData.tourType, parseInt(formData.guests) || 1);
      const enTour = allContent.en.tours.items.find(t => t.id === formData.tourType);
      const hrTour = allContent.hr.tours.items.find(t => t.id === formData.tourType);
      const tourName = `${hrTour?.name || ''} / ${enTour?.name || ''}`;

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          date: formData.date,
          guests: formData.guests,
          tourType: tourName,
          price: calculatedPrice ? `${calculatedPrice}€` : 'Na upit / On request',
          message: formData.message || 'No message',
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setSubmitted(true);
    } catch (err) {
      setError(content.form.error || 'Failed to send. Please try again or contact us directly.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sea-500 font-bold tracking-widest uppercase text-sm mb-2 block">
            <Mail className="w-4 h-4 inline-block mr-2" />
            {content.sectionLabel}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-sea-950 mb-4">{content.title}</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">{content.subtitle}</p>
        </div>

        <div className="grid xl:grid-cols-[2fr_3fr] gap-6 lg:gap-8 xl:gap-12 items-start">
          {/* Left Column - Image and Contact Info Stacked */}
          <div className="flex flex-col md:grid md:grid-cols-2 xl:flex xl:flex-col gap-6">
            {/* Google Maps Embed */}
            <div className="rounded-2xl overflow-hidden h-80 md:h-72 lg:h-80 xl:h-[380px]">
              <iframe
                src="https://www.google.com/maps?q=Anima+Maris+-+Robinson,+Riva+lošinjskih+kapetana,+Mali+Lošinj,+Croatia&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Meeting Point - Mali Lošinj Harbor"
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
                <h3 className="text-3xl font-bold text-green-800 mb-4">{content.form.successTitle}</h3>
                <p className="text-gray-600 mb-8">{content.form.success}</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-sea-600 font-semibold hover:text-sea-800"
                >
                  {content.form.sendAnother}
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
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-sea-500 outline-none"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">{content.form.guests}</label>
                    <input required type="number" min="1" max="12" name="guests" value={formData.guests} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-sea-500 outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">{content.form.tourType}</label>
                    <div className="relative">
                      <select name="tourType" value={formData.tourType} onChange={handleChange} className="w-full px-4 py-3 pr-10 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-sea-500 outline-none appearance-none cursor-pointer">
                        <option value="fullDay">{getOptionLabel('fullDay')}</option>
                        <option value="halfDay">{getOptionLabel('halfDay')}</option>
                        <option value="custom">{getOptionLabel('custom')}</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">{content.form.message}</label>
                  <textarea name="message" rows={4} value={formData.message} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-sea-500 outline-none resize-none"></textarea>
                </div>
                <p className="text-center text-sm text-gray-500 mb-3">{content.form.disclaimer}</p>
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4 text-center">
                    {error}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full gradient-primary text-white font-bold py-4 rounded-xl shadow-lg transition-all hover:scale-[1.01] flex justify-center items-center disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" /> {content.form.submit}
                    </>
                  )}
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

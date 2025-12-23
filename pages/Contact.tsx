import React, { useState } from 'react';
import { Content } from '../types';
import { Phone, Mail, MapPin, Send, MessageSquare } from 'lucide-react';

interface ContactProps {
  content: Content['contact'];
}

const Contact: React.FC<ContactProps> = ({ content }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: '2',
    tourType: 'islandHopping',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
        setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact" className="relative py-24 bg-sea-900 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
          <img src="https://picsum.photos/seed/darksea/1920/1080" className="w-full h-full object-cover opacity-20 grayscale mix-blend-overlay" alt="" />
          <div className="absolute inset-0 bg-gradient-to-t from-sea-950 via-sea-900/90 to-sea-900/90"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">{content.title}</h2>
            <p className="text-sea-200 text-lg max-w-2xl mx-auto">{content.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Form Side */}
            <div className="bg-white text-gray-800 p-8 md:p-10 rounded-3xl shadow-2xl">
                {submitted ? (
                    <div className="h-full flex flex-col items-center justify-center text-center py-20">
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
                                    <option value="islandHopping">{content.form.options.islandHopping}</option>
                                    <option value="sunset">{content.form.options.sunset}</option>
                                    <option value="custom">{content.form.options.custom}</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">{content.form.message}</label>
                            <textarea name="message" rows={3} value={formData.message} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-sea-500 outline-none"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-sea-900 hover:bg-sea-800 text-white font-bold py-4 rounded-xl shadow-lg transition-transform hover:scale-[1.01] flex justify-center items-center">
                            <Send className="w-5 h-5 mr-2" /> {content.form.submit}
                        </button>
                    </form>
                )}
            </div>

            {/* Info Side */}
            <div className="pt-10">
                <div className="mb-12">
                    <h3 className="font-serif text-2xl font-bold mb-8 border-l-4 border-sea-500 pl-4">{content.info.direct}</h3>
                    <div className="space-y-6">
                        <a href="tel:+385911234567" className="flex items-center group">
                            <div className="bg-sea-800 p-4 rounded-full text-white group-hover:bg-sea-500 transition-colors">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div className="ml-6">
                                <p className="text-sm text-sea-300 uppercase tracking-wide font-bold">Call / WhatsApp</p>
                                <p className="font-serif text-2xl text-white">+385 91 123 4567</p>
                            </div>
                        </a>
                        <a href="mailto:info@robinson-losinj.com" className="flex items-center group">
                            <div className="bg-sea-800 p-4 rounded-full text-white group-hover:bg-sea-500 transition-colors">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div className="ml-6">
                                <p className="text-sm text-sea-300 uppercase tracking-wide font-bold">Email</p>
                                <p className="font-serif text-2xl text-white">info@robinson-losinj.com</p>
                            </div>
                        </a>
                         <div className="flex items-center group">
                            <div className="bg-sea-800 p-4 rounded-full text-white">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div className="ml-6">
                                <p className="text-sm text-sea-300 uppercase tracking-wide font-bold">{content.info.location}</p>
                                <p className="text-lg text-white max-w-xs">{content.info.locationDesc}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="font-serif text-2xl font-bold mb-6 border-l-4 border-sea-500 pl-4">{content.faqTitle}</h3>
                    <div className="space-y-2">
                        {content.faqs.map((faq, idx) => (
                            <details key={idx} className="group bg-sea-800/50 rounded-lg overflow-hidden border border-sea-700">
                                <summary className="flex justify-between items-center cursor-pointer p-4 font-medium text-white hover:bg-sea-800 transition-colors">
                                    {faq.question}
                                    <span className="transform group-open:rotate-180 transition-transform text-sea-400">▼</span>
                                </summary>
                                <div className="p-4 text-sea-100 text-sm leading-relaxed border-t border-sea-700 bg-sea-900/50">
                                    {faq.answer}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
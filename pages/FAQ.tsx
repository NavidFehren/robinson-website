import React from 'react';
import { FaqItem } from '../types';
import { ChevronDown } from 'lucide-react';

interface FAQProps {
  title: string;
  faqs: FaqItem[];
  ctaSubtitle: string;
  ctaButton: string;
  onScrollToContact: () => void;
}

const FAQ: React.FC<FAQProps> = ({ title, faqs, ctaSubtitle, ctaButton, onScrollToContact }) => {
  return (
    <section className="py-24 bg-sea-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-white text-center mb-12">
          {title}
        </h2>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details
              key={idx}
              className="group bg-sea-800/50 rounded-xl overflow-hidden border border-sea-700/50"
            >
              <summary className="flex justify-between items-center cursor-pointer p-5 font-medium text-white hover:bg-sea-800/70 transition-colors">
                <span className="pr-4">{faq.question}</span>
                <ChevronDown className="w-5 h-5 text-sea-400 transform group-open:rotate-180 transition-transform flex-shrink-0" />
              </summary>
              <div className="px-5 pb-5 pt-2 text-sea-200 leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-sea-300 mb-4">{ctaSubtitle}</p>
          <button
            onClick={onScrollToContact}
            className="inline-flex items-center bg-white text-sea-900 font-semibold px-8 py-3 rounded-full hover:bg-sand-100 transition-colors shadow-lg"
          >
            {ctaButton}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

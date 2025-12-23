import React, { useState } from 'react';
import { FaqItem } from '../types';
import { ArrowRight, ChevronDown } from 'lucide-react';

interface FAQProps {
  title: string;
  faqs: FaqItem[];
  ctaSubtitle: string;
  ctaButton: string;
  onScrollToContact: () => void;
}

const FAQ: React.FC<FAQProps> = ({ title, faqs, ctaSubtitle, ctaButton, onScrollToContact }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const FaqCard = ({ faq, idx }: { faq: FaqItem; idx: number }) => {
    const isOpen = openIndex === idx;
    return (
      <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
        <button
          onClick={() => toggleFaq(idx)}
          className="w-full px-6 py-5 flex items-center justify-between text-left"
        >
          <h3 className="font-semibold text-sea-950 pr-4">{faq.question}</h3>
          <ChevronDown
            className={`w-5 h-5 text-sea-600 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>
        <div
          className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
        >
          <div className="overflow-hidden">
            <p className="px-6 pb-5 text-gray-600 leading-relaxed">{faq.answer}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-24 bg-sand-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-[320px_1fr] gap-6 items-start">

          {/* Left: Title Card (dark) */}
          <div className="bg-sea-900 text-white rounded-2xl p-8 md:sticky md:top-24">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-4">
              {title}
            </h2>
            <p className="text-sea-200 leading-relaxed mb-8">
              {ctaSubtitle}
            </p>
            <button
              onClick={onScrollToContact}
              className="inline-flex items-center text-white font-semibold group hover:text-sea-200 transition-colors"
            >
              {ctaButton}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right: All FAQ Cards */}
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <FaqCard key={idx} faq={faq} idx={idx} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;

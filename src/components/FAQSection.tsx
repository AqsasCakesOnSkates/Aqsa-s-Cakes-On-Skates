import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { PAYEE_UPI_ID, PAYMENT_PHONE, COMPANY_PHONE, WHATSAPP_NUMBER } from '../config/brand';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How does the direct UPI payment and order confirmation work?',
      a: `When you checkout, you can scan the dynamic UPI QR code on your desktop or tap "Pay with Any UPI App" on mobile. Your UPI app will auto-fill the total amount and payee VPA (${PAYEE_UPI_ID} • Payment Number: ${PAYMENT_PHONE}). After completing the payment, paste your 12-digit UPI Reference / UTR number to instantly verify. You can also click the 1-click WhatsApp button to send your receipt directly to Chef Aqsa's team (+91 ${COMPANY_PHONE}).`,
    },
    {
      q: 'Are eggless options available for all cakes and pastries?',
      a: 'Yes! A majority of our menu items are 100% eggless, crafted using European gelatin-free setting agents, pure dairy cream, and house-made fruit compotes without sacrificing texture or moisture.',
    },
    {
      q: 'Can I request custom designs, tiers, and inscriptions?',
      a: 'Absolutely. During checkout, use the "Chef’s Notes / Message on Cake" field to specify custom text or theme details. For multi-tier couture wedding cakes or complex floral sculpting, you can also contact Chef Aqsa directly on WhatsApp.',
    },
    {
      q: 'Which cities and regions do you deliver to?',
      a: 'We operate dual kitchen hubs in Belgaum and Goa. Deliveries are made via temperature-controlled carriers to ensure your mirror entremets and cheesecakes arrive in pristine condition.',
    },
    {
      q: 'How far in advance should I place my order?',
      a: 'Bento cakes, slices, cheesecakes, and bomboloni can often be fulfilled with same-day express (3–4 hours notice). Bespoke designer cakes and wedding tiers require 24 to 48 hours notice.',
    },
  ];

  return (
    <section id="faq" className="py-20 bg-white border-t border-[#E8A598]/20 scroll-mt-24">
      {/* Anchor alias for backwards compatibility */}
      <div id="faqs" className="sr-only" aria-hidden="true" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FCEFEF] text-[#2C1810] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#E8A598]/30">
            <HelpCircle className="w-3.5 h-3.5 text-[#E8A598]" />
            Ordering Guide
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2C1810]">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-[#2C1810]/70 font-sans">
            Everything you need to know about our ingredients, delivery, and direct UPI payment flow.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-[#E8A598]/30 overflow-hidden bg-[#FDFBF7] transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 hover:bg-[#FCEFEF]/30 transition-colors"
                >
                  <span className="font-serif font-bold text-base sm:text-lg text-[#2C1810]">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#2C1810] flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#2C1810]/80 leading-relaxed font-sans border-t border-[#E8A598]/20">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

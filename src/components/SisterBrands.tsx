import React, { useState } from 'react';
import { SISTER_BRANDS } from '../data/chefData';
import { Sparkles, ArrowRight, Utensils, IceCream, ChefHat, CheckCircle2, MessageCircle, Phone, BookOpen } from 'lucide-react';
import { COMPANY_PHONE, COMPANY_WHATSAPP } from '../config/brand';

export const SisterBrands: React.FC = () => {
  const [selectedBrand, setSelectedBrand] = useState<string>(SISTER_BRANDS[0].id);
  const [activeMenuSection, setActiveMenuSection] = useState<number>(0);
  const activeBrand = SISTER_BRANDS.find((b) => b.id === selectedBrand) || SISTER_BRANDS[0];

  const handleInquire = (brandName: string, itemName?: string) => {
    const text = encodeURIComponent(
      itemName
        ? `Hi! I would like to order "${itemName}" from ${brandName}. Please share availability and delivery slot.`
        : `Hi! I'm interested in ordering from ${brandName} (Contact: ${COMPANY_PHONE}). Could you please share today's specials and order details?`
    );
    window.open(`https://wa.me/${COMPANY_WHATSAPP}?text=${text}`, '_blank');
  };

  return (
    <section id="sister-brands" className="py-20 bg-[#FDFBF7] border-t border-[#E8A598]/20 scroll-mt-24">
      {/* Anchor alias for backwards compatibility */}
      <div id="brands" className="sr-only" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FCEFEF] text-[#2C1810] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#E8A598]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#E8A598]" />
            Sister Brands & Menus
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2C1810] tracking-tight">
            Chef Aqsa’s Culinary Ventures
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#2C1810]/70 leading-relaxed font-sans">
            Directly from our official kitchen menus: Explore Crave & Co. gourmet smash burgers and The Cream Room chemical-free small-batch ice creams.
          </p>
          <div className="mt-3 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E8A598]/40 shadow-xs text-xs font-medium text-[#2C1810]">
            <Phone className="w-3.5 h-3.5 text-emerald-600" />
            <span>Official Order & Inquiry Hotline: <strong>{COMPANY_PHONE}</strong></span>
          </div>
        </div>

        {/* Brand Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10">
          {SISTER_BRANDS.map((brand) => {
            const isSelected = brand.id === selectedBrand;
            return (
              <button
                key={brand.id}
                onClick={() => {
                  setSelectedBrand(brand.id);
                  setActiveMenuSection(0);
                }}
                className={`flex items-center gap-3 px-6 py-3.5 rounded-full font-serif text-base transition-all duration-300 border ${
                  isSelected
                    ? 'bg-[#2C1810] text-[#FDFBF7] border-[#2C1810] shadow-md scale-105'
                    : 'bg-white text-[#2C1810] border-[#E8A598]/40 hover:border-[#2C1810] hover:bg-[#FCEFEF]/50'
                }`}
              >
                {brand.id === 'the-crave-co' ? (
                  <Utensils className={`w-4 h-4 ${isSelected ? 'text-[#E8A598]' : 'text-[#2C1810]'}`} />
                ) : (
                  <IceCream className={`w-4 h-4 ${isSelected ? 'text-[#E8A598]' : 'text-[#2C1810]'}`} />
                )}
                <span>{brand.name}</span>
                <span
                  className={`text-xs px-2.5 py-0.5 rounded-full font-sans ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-[#FCEFEF] text-[#2C1810]/80'
                  }`}
                >
                  {brand.category}
                </span>
              </button>
            );
          })}
        </div>

        {/* Brand Overview Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8A598]/30 shadow-xl overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-5 relative group">
              <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden border border-[#E8A598]/20 shadow-inner bg-[#FCEFEF]/40">
                <img
                  src={activeBrand.image}
                  alt={activeBrand.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="inline-block px-3 py-1 bg-white/95 backdrop-blur-md rounded-full text-xs font-semibold text-[#2C1810] border border-white/40 shadow-sm">
                    {activeBrand.badge}
                  </span>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#2C1810]">
                    {activeBrand.name}
                  </h3>
                  <span className="px-3 py-1 rounded-full bg-[#FCEFEF] text-xs font-medium text-[#2C1810] border border-[#E8A598]/40">
                    {activeBrand.location}
                  </span>
                </div>
                <div className="text-xs font-mono font-semibold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Tel: {activeBrand.phone}
                </div>
              </div>

              <p className="text-base text-[#2C1810]/80 leading-relaxed font-sans">
                {activeBrand.description}
              </p>

              <div className="p-4 sm:p-5 rounded-2xl bg-[#FDFBF7] border border-[#E8A598]/20">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#2C1810]/70 mb-2 font-sans flex items-center gap-2">
                  <ChefHat className="w-4 h-4 text-[#E8A598]" />
                  Culinary Philosophy
                </h4>
                <p className="text-sm text-[#2C1810]/85 italic leading-relaxed">
                  "{activeBrand.fullStory}"
                </p>
              </div>

              {/* Popular Highlights */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#2C1810]/70 mb-2.5 font-sans">
                  Crowd Favorites
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeBrand.popularItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-[#E8A598]/20"
                    >
                      <span className="text-sm font-medium text-[#2C1810] flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        {item.name}
                      </span>
                      <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#FCEFEF] text-[#2C1810] font-sans font-medium">
                        {item.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => handleInquire(activeBrand.name)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-semibold transition-all shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  Order on WhatsApp ({COMPANY_PHONE})
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* FULL OFFICIAL MENU CARD SECTION */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8A598]/30 shadow-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E8A598]/20">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E8A598] mb-1 font-sans">
                <BookOpen className="w-4 h-4" />
                Official Menu Card
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#2C1810]">
                {activeBrand.name} — Complete Menu
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-[#2C1810]/70 font-sans">Hotline:</span>
              <a
                href={`tel:${COMPANY_PHONE}`}
                className="px-3 py-1 rounded-full bg-[#2C1810] text-white text-xs font-mono font-bold"
              >
                {COMPANY_PHONE}
              </a>
            </div>
          </div>

          {/* Menu Section Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto py-4 border-b border-[#E8A598]/10 scrollbar-none">
            {activeBrand.menuSections.map((sec, idx) => (
              <button
                key={idx}
                onClick={() => setActiveMenuSection(idx)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-serif whitespace-nowrap transition-all ${
                  activeMenuSection === idx
                    ? 'bg-[#2C1810] text-[#FDFBF7] shadow-sm font-bold'
                    : 'bg-[#FDFBF7] text-[#2C1810]/80 hover:bg-[#FCEFEF] border border-[#E8A598]/30'
                }`}
              >
                {sec.title} ({sec.items.length})
              </button>
            ))}
          </div>

          {/* Active Section Items */}
          {activeBrand.menuSections[activeMenuSection] && (
            <div className="pt-6 space-y-4">
              {activeBrand.menuSections[activeMenuSection].note && (
                <div className="p-3 rounded-xl bg-[#FCEFEF] text-xs font-medium text-[#2C1810] border border-[#E8A598]/30">
                  ✦ {activeBrand.menuSections[activeMenuSection].note}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activeBrand.menuSections[activeMenuSection].items.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#FDFBF7] border border-[#E8A598]/20 hover:border-[#2C1810] transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-3 mb-1">
                        <h4 className="font-serif font-bold text-base text-[#2C1810]">
                          {item.name}
                        </h4>
                        <span className="font-serif font-bold text-base text-[#2C1810] whitespace-nowrap">
                          ₹{item.price}/-
                        </span>
                      </div>
                      {item.description && (
                        <p className="text-xs text-[#2C1810]/70 font-sans leading-relaxed mb-2">
                          {item.description}
                        </p>
                      )}
                    </div>

                    <div className="pt-2 flex items-center justify-between border-t border-[#E8A598]/10 mt-2">
                      {item.tag ? (
                        <span className="text-[10px] px-2 py-0.5 rounded-md bg-white border border-[#E8A598]/30 text-[#2C1810] font-sans font-semibold">
                          {item.tag}
                        </span>
                      ) : <span />}

                      <button
                        onClick={() => handleInquire(activeBrand.name, item.name)}
                        className="text-xs font-sans font-semibold text-emerald-700 hover:text-emerald-900 flex items-center gap-1.5 transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        Order on WhatsApp
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

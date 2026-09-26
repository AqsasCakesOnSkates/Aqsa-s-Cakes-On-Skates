import React from 'react';
import { BRAND_NAME, BRAND_LOGO_URL, WHATSAPP_NUMBER } from '../config/brand';
import { ArrowDown, MessageCircle, Sparkles, CheckCircle2, Clock, ShieldCheck, Heart } from 'lucide-react';

interface HeroProps {
  onExploreMenu: () => void;
  onLearnChef?: () => void;
  activeCity?: 'goa' | 'belgaum';
}

export const Hero: React.FC<HeroProps> = ({
  onExploreMenu,
  onLearnChef,
  activeCity = 'belgaum',
}) => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#FDFBF7] via-[#FCEFEF]/30 to-[#FDFBF7]">
      {/* Decorative Pastel Background Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#FCEFEF]/60 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 right-[-100px] w-72 h-72 bg-[#E8A598]/20 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Story Headline & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Top Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 bg-[#FCEFEF] border border-[#E8A598]/40 px-3.5 py-1.5 rounded-full shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#865046]" />
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#865046]">
                APCA Trained • Goa & Belgaum's Boutique Pâtisserie
              </span>
            </div>

            {/* Main Title with Serif Typography */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#2C1810] leading-[1.15]">
              Artisanal Pâtisserie & Bespoke Designer Cakes,{' '}
              <span className="italic font-normal text-[#865046]">
                Crafted with Kinetic Joy.
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#2C1810]/80 max-w-2xl leading-relaxed">
              Founded by <strong>Chef Aqsa Lakdawala Khimjibhai</strong> (MSc Business Psychology, Manchester & APCA Bangalore). We blend classic French pastry precision, 100% pure European butter, and Belgian couverture chocolate into unforgettable celebration gateaux, bomboloni, and chilled cheesecakes.
            </p>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 w-full max-w-xl pt-1">
              <div className="flex items-center gap-2 bg-white/80 p-2.5 rounded-xl border border-[#2C1810]/5 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs font-medium text-[#2C1810]">100% Pure Dairy Butter</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 p-2.5 rounded-xl border border-[#2C1810]/5 shadow-xs">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs font-medium text-[#2C1810]">Dedicated Eggless Line</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 p-2.5 rounded-xl border border-[#2C1810]/5 shadow-xs col-span-2 sm:col-span-1">
                <Clock className="w-4 h-4 text-[#865046] shrink-0" />
                <span className="text-xs font-medium text-[#2C1810]">Express Same-Day Bake</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onExploreMenu}
                className="flex items-center gap-2 bg-[#2C1810] hover:bg-[#3D2217] text-[#FDFBF7] px-6 py-3.5 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:scale-95"
              >
                <span>Explore Flagship Menu</span>
                <ArrowDown className="w-4 h-4 text-[#E8A598]" />
              </button>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Chef%20Aqsa!%20I%20would%20like%20to%20order%20or%20enquire%20about%20a%20custom%20designer%20cake%20for%20${activeCity === 'goa' ? 'Goa' : 'Belgaum'}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white hover:bg-[#FCEFEF] text-[#2C1810] border border-[#2C1810]/15 px-6 py-3.5 rounded-full font-semibold text-sm shadow-sm transition-all transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Custom Cake Studio</span>
              </a>
            </div>

            {/* Active City & Kitchen Availability Indicator */}
            <div className="flex items-center gap-2 pt-2 text-xs text-[#2C1810]/70">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>
                Currently accepting online orders for{' '}
                <strong className="text-[#2C1810]">
                  {activeCity === 'goa' ? 'Goa (Panaji, Porvorim, St. Inez)' : 'Belgaum (Citywide & Camp)'}
                </strong>{' '}
                • Direct UPI Payment & WhatsApp Dispatch.
              </span>
            </div>
          </div>

          {/* Right Column: Character Mascot Logo & Pastry Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Mascot Showcase Card */}
              <div className="relative rounded-3xl p-6 bg-white/90 backdrop-blur-md border border-[#E8A598]/30 shadow-2xl overflow-hidden flex flex-col items-center text-center">
                {/* Brand Badge */}
                <div className="absolute top-4 right-4 bg-[#FCEFEF] px-2.5 py-1 rounded-full text-[10px] font-bold text-[#865046] tracking-wider uppercase">
                  Flagship Atelier
                </div>

                {/* Circular Mascot Logo Container */}
                <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full p-2 bg-gradient-to-tr from-[#FCEFEF] to-[#E8A598]/30 border-2 border-[#E8A598]/40 shadow-inner my-2 flex items-center justify-center">
                  <img
                    src={BRAND_LOGO_URL}
                    alt={BRAND_NAME}
                    className="w-full h-full object-contain rounded-full shadow-md transform hover:rotate-3 transition-transform duration-500"
                  />
                  {/* Floating heart badge */}
                  <div className="absolute -bottom-1 -right-1 bg-white p-2 rounded-full shadow-md border border-[#E8A598]/30">
                    <Heart className="w-4 h-4 text-[#865046] fill-[#865046]" />
                  </div>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2C1810] mt-2">
                  {BRAND_NAME}
                </h3>
                <p className="text-xs text-[#865046] font-medium tracking-wide uppercase mt-0.5">
                  Belgaum & Goa Cloud Kitchens
                </p>

                <p className="text-xs text-[#2C1810]/75 mt-3 px-4 leading-relaxed italic">
                  “Cakes on Skates was born out of speed and uncompromised freshness — fresh gateaux baked and dispatched in hours with pure couverture.”
                </p>

                {/* Dual Metrics */}
                <div className="grid grid-cols-2 gap-3 w-full mt-5 pt-4 border-t border-[#2C1810]/10">
                  <div className="text-center p-2 rounded-xl bg-[#FDFBF7]">
                    <span className="font-serif text-xl font-bold text-[#2C1810] block">12,000+</span>
                    <span className="text-[10px] text-[#2C1810]/70 uppercase tracking-wider">Cakes Handcrafted</span>
                  </div>
                  <div className="text-center p-2 rounded-xl bg-[#FDFBF7]">
                    <span className="font-serif text-xl font-bold text-[#2C1810] block">850+</span>
                    <span className="text-[10px] text-[#2C1810]/70 uppercase tracking-wider">Baking Students</span>
                  </div>
                </div>
              </div>

              {/* Overlapping Floating Pill */}
              <div className="absolute -bottom-4 -left-3 sm:-left-6 bg-[#2C1810] text-[#FDFBF7] p-3 rounded-2xl shadow-xl flex items-center gap-3 max-w-[240px] border border-[#E8A598]/30">
                <span className="text-2xl">⚡</span>
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold text-[#E8A598] tracking-wider">Express Deliveries</p>
                  <p className="text-xs font-semibold">Same-Day Urgent Orders</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

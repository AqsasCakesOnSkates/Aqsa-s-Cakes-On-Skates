import React from 'react';
import {
  BRAND_NAME,
  BRAND_TAGLINE,
  BRAND_LOGO_URL,
  PAYEE_NAME,
  PAYEE_UPI_ID,
  PAYMENT_PHONE,
  COMPANY_PHONE,
  COMPANY_WHATSAPP,
  WHATSAPP_NUMBER,
} from '../config/brand';
import { Heart, MessageCircle, MapPin, Mail, ShieldCheck, Sparkles, Award } from 'lucide-react';

interface FooterProps {
  onOpenOrderHistory: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenOrderHistory }) => {
  return (
    <footer className="bg-[#2C1810] text-[#FDFBF7] pt-16 pb-12 border-t-4 border-[#E8A598]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#FDFBF7]/10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={BRAND_LOGO_URL}
                alt={BRAND_NAME}
                className="w-12 h-12 object-contain rounded-full bg-white p-1 border-2 border-[#E8A598]"
              />
              <div>
                <h3 className="font-serif font-bold text-xl text-[#FDFBF7] tracking-tight">
                  {BRAND_NAME}
                </h3>
                <p className="text-xs text-[#E8A598] font-sans">
                  {BRAND_TAGLINE}
                </p>
              </div>
            </div>

            <p className="text-sm text-[#FDFBF7]/75 font-sans leading-relaxed max-w-sm">
              Confectionery artistry by APCA-trained Pastry Chef Aqsa Lakdawala Khimjibhai. Crafting pure couverture celebration cakes, Italian bomboloni, and velvety cheesecakes across Goa and Belgaum.
            </p>

            <div className="p-3.5 rounded-2xl bg-[#3D2318] border border-[#E8A598]/20 text-xs font-sans space-y-1">
              <div className="flex items-center gap-2 text-[#E8A598] font-bold">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Verified Merchant Account
              </div>
              <p className="text-[#FDFBF7]/80">
                Payee: <span className="font-semibold text-white capitalize">{PAYEE_NAME}</span>
              </p>
              <p className="text-[#FDFBF7]/80 font-mono text-[11px]">
                UPI VPA: <span className="text-[#E8A598]">{PAYEE_UPI_ID}</span>
              </p>
              <p className="text-[#FDFBF7]/80 text-[11px]">
                Payment Number: <span className="text-white font-mono font-bold">{PAYMENT_PHONE}</span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 font-sans">
            <h4 className="font-serif font-bold text-sm text-[#E8A598] uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#FDFBF7]/80">
              <li>
                <a href="#menu" className="hover:text-white transition-colors">
                  Patisserie Menu
                </a>
              </li>
              <li>
                <a href="#bakery-recipes" className="hover:text-white transition-colors text-pink-300 font-medium">
                  📖 Bakery Recipe Guides (Buy Online)
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Chef Aqsa
                </a>
              </li>
              <li>
                <a href="#press" className="hover:text-white transition-colors">
                  Press & Media Archive
                </a>
              </li>
              <li>
                <a href="#sister-brands" className="hover:text-white transition-colors">
                  Sister Brands (Crave Co. & Cream Room)
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">
                  Customer Reviews
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a href="#achievements" className="hover:text-white transition-colors">
                  Accreditations & Honors
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenOrderHistory}
                  className="hover:text-white transition-colors text-left"
                >
                  View Order History
                </button>
              </li>
            </ul>
          </div>

          {/* Sister Brands */}
          <div className="space-y-3 font-sans">
            <h4 className="font-serif font-bold text-sm text-[#E8A598] uppercase tracking-wider">
              Sister Ventures
            </h4>
            <div className="space-y-3 text-xs text-[#FDFBF7]/80">
              <div>
                <span className="font-bold text-white block">The Crave Co.</span>
                <span className="text-[#FDFBF7]/60">Gourmet Smash Burgers & Brioche Buns (Open till 12 AM)</span>
              </div>
              <div>
                <span className="font-bold text-white block">The Cream Room</span>
                <span className="text-[#FDFBF7]/60">100% French Custard Churned Gelato & Fruit Sorbets</span>
              </div>
            </div>
          </div>

          {/* Direct Kitchen Hubs */}
          <div className="space-y-3 font-sans">
            <h4 className="font-serif font-bold text-sm text-[#E8A598] uppercase tracking-wider">
              Kitchen Hubs
            </h4>
            <div className="space-y-3 text-xs text-[#FDFBF7]/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#E8A598] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Belgaum Kitchen Hub</strong>
                  <span>Tilakwadi / KLE Campus Region, Karnataka</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#E8A598] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Goa Hub</strong>
                  <span>St. Inez / Caranzalem & Panaji Coastal Belt</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={`https://wa.me/${COMPANY_WHATSAPP}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  Order WhatsApp: +91 {COMPANY_PHONE}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FDFBF7]/60 font-sans gap-4">
          <p>© {new Date().getFullYear()} {BRAND_NAME}. Handcrafted with passion by Chef Aqsa Lakdawala.</p>
          <div className="flex items-center gap-4">
            <span>Direct UPI Gateway • HDFC Bank</span>
            <span>•</span>
            <span>100% Belgian Couverture</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

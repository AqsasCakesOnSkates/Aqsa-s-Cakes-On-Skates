import React, { useState } from 'react';
import { BRAND_NAME, BRAND_LOGO_URL, WHATSAPP_NUMBER, COMPANY_PHONE, COMPANY_PHONE_DISPLAY } from '../config/brand';
import { ShoppingBag, MessageCircle, Clock, MapPin, History, Menu, X, Award, BookOpen } from 'lucide-react';

interface NavbarProps {
  cartCount?: number;
  cartItemCount?: number;
  cartSubtotal?: number;
  onOpenCart: () => void;
  onOpenOrderHistory: () => void;
  onNavigateSection?: (sectionId: string) => void;
  activeCity?: 'goa' | 'belgaum';
  onCityChange?: (city: 'goa' | 'belgaum') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount = 0,
  cartItemCount,
  cartSubtotal = 0,
  onOpenCart,
  onOpenOrderHistory,
  onNavigateSection,
  activeCity = 'belgaum',
  onCityChange,
}) => {
  const displayCartCount = cartCount || cartItemCount || 0;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    if (onNavigateSection) {
      onNavigateSection(sectionId);
    } else {
      let targetEl = document.getElementById(sectionId);

      // Smart fallback aliases
      if (!targetEl) {
        if (sectionId === 'sister-brands' || sectionId === 'brands') {
          targetEl = document.getElementById('sister-brands') || document.getElementById('brands');
        } else if (sectionId === 'faqs' || sectionId === 'faq') {
          targetEl = document.getElementById('faq') || document.getElementById('faqs') || document.getElementById('reviews');
        } else if (sectionId === 'reviews') {
          targetEl = document.getElementById('reviews') || document.getElementById('faq') || document.getElementById('faqs');
        } else if (sectionId === 'chef-story' || sectionId === 'about') {
          targetEl = document.getElementById('chef-story') || document.getElementById('about');
        } else if (sectionId === 'achievements' || sectionId === 'press') {
          targetEl = document.getElementById('achievements') || document.getElementById('press');
        }
      }

      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-[#FDFBF7]/95 backdrop-blur-md border-b border-[#2C1810]/5 transition-all duration-300">
      {/* Top Boutique Announcement Bar */}
      <div className="w-full bg-[#2C1810] text-[#FDFBF7] py-1.5 px-4 text-xs tracking-wider">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1 text-[#E8A598] font-medium">
              <Award className="w-3.5 h-3.5" />
              <span>APCA CERTIFIED</span>
            </span>
            <span className="text-[#E8A598]/40 hidden sm:inline">•</span>
            <span className="hidden sm:inline text-white/80">100% PURE DAIRY & COUVERTURE</span>
            <span className="text-[#E8A598]/40">•</span>
            <span className="flex items-center gap-1 text-white/90">
              <Clock className="w-3 h-3 text-[#E8A598]" />
              <span>12 PM – 12 AM EXPRESS</span>
            </span>
          </div>

          <div className="flex items-center gap-3 text-[11px] sm:text-xs">
            {/* Hub Selector */}
            <div className="flex items-center bg-white/10 rounded-full p-0.5 border border-white/10">
              <button
                onClick={() => onCityChange?.('goa')}
                className={`px-2 py-0.5 rounded-full transition-all text-[10px] sm:text-[11px] font-semibold flex items-center gap-1 ${
                  activeCity === 'goa'
                    ? 'bg-[#E8A598] text-[#2C1810]'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                <MapPin className="w-2.5 h-2.5" />
                Goa Hub
              </button>
              <button
                onClick={() => onCityChange?.('belgaum')}
                className={`px-2 py-0.5 rounded-full transition-all text-[10px] sm:text-[11px] font-semibold flex items-center gap-1 ${
                  activeCity === 'belgaum'
                    ? 'bg-[#E8A598] text-[#2C1810]'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                <MapPin className="w-2.5 h-2.5" />
                Belgaum Hub
              </button>
            </div>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1.5 text-[#25D366] hover:text-emerald-400 font-medium transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>{COMPANY_PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand & Logo Placement 1: Navigation Bar */}
        <div
          onClick={() => handleNavClick('hero')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#E8A598]/40 shadow-sm p-0.5 bg-white group-hover:scale-105 transition-transform duration-300">
            <img
              src={BRAND_LOGO_URL}
              alt={BRAND_NAME}
              className="w-full h-full object-cover rounded-full"
              onError={(e) => {
                // fallback if asset load fails
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#2C1810] group-hover:text-[#865046] transition-colors leading-tight">
              {BRAND_NAME}
            </span>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#865046] font-medium">
              Boutique French Pâtisserie
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#FCEFEF]/70 px-4 py-1.5 rounded-full border border-[#E8A598]/20">
          <button
            onClick={() => handleNavClick('menu')}
            className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#2C1810] hover:text-[#865046] hover:bg-white/80 transition-all"
          >
            Menu & Order
          </button>
          <button
            onClick={() => handleNavClick('bakery-recipes')}
            className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-pink-700 bg-pink-100/70 hover:bg-pink-100 transition-all flex items-center gap-1.5 border border-pink-200/60"
          >
            <BookOpen className="w-3.5 h-3.5 text-pink-600" />
            Recipe Guides
          </button>
          <button
            onClick={() => handleNavClick('chef-story')}
            className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#2C1810] hover:text-[#865046] hover:bg-white/80 transition-all"
          >
            About Chef Aqsa
          </button>
          <button
            onClick={() => handleNavClick('achievements')}
            className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#2C1810] hover:text-[#865046] hover:bg-white/80 transition-all"
          >
            Press & Credentials
          </button>
          <button
            onClick={() => handleNavClick('sister-brands')}
            className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#2C1810] hover:text-[#865046] hover:bg-white/80 transition-all"
          >
            Sister Brands
          </button>
          <button
            onClick={() => handleNavClick('reviews')}
            className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#2C1810] hover:text-[#865046] hover:bg-white/80 transition-all"
          >
            Reviews & FAQ
          </button>
        </nav>

        {/* Action Buttons: Order History, Cart, WhatsApp */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Order History Trigger */}
          <button
            onClick={onOpenOrderHistory}
            className="flex items-center gap-1.5 px-3 py-2 rounded-full border border-[#2C1810]/10 hover:bg-[#FCEFEF] text-xs font-semibold text-[#2C1810] transition-colors"
            title="View Order History & Past Receipts"
          >
            <History className="w-4 h-4 text-[#865046]" />
            <span className="hidden sm:inline">My Orders</span>
          </button>

          {/* Cart Trigger */}
          <button
            onClick={onOpenCart}
            className="relative flex items-center gap-2 bg-[#2C1810] hover:bg-[#3D2217] text-[#FDFBF7] px-4 py-2 rounded-full text-xs font-semibold shadow-md transition-all active:scale-95"
            aria-label="View Cart"
          >
            <ShoppingBag className="w-4 h-4 text-[#E8A598]" />
            <span className="hidden sm:inline">Box</span>
            {displayCartCount > 0 ? (
              <span className="bg-[#E8A598] text-[#2C1810] font-bold text-[11px] px-1.5 py-0.5 rounded-full min-w-5 text-center leading-none">
                {displayCartCount}
              </span>
            ) : (
              <span className="text-[11px] text-white/60">0</span>
            )}
            {cartSubtotal > 0 && (
              <span className="hidden md:inline font-mono font-bold text-[#E8A598] text-[11px] border-l border-white/20 pl-2">
                ₹{cartSubtotal}
              </span>
            )}
          </button>

          {/* WhatsApp Direct Help */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Chef%20Aqsa!%20I%20have%20an%20enquiry%20regarding%20Aqsa's%20Cakes%20on%20Skates.`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center p-2 rounded-full bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all"
            title="Message Chef Aqsa on WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full hover:bg-[#FCEFEF] text-[#2C1810] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FDFBF7] border-b border-[#2C1810]/10 px-4 pt-2 pb-6 space-y-3 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-1 text-sm font-semibold">
            <button
              onClick={() => handleNavClick('menu')}
              className="text-left px-3 py-2.5 rounded-xl hover:bg-[#FCEFEF] text-[#2C1810]"
            >
              🍰 Menu & Order (Eggless, Bomboloni, Tubs)
            </button>
            <button
              onClick={() => handleNavClick('bakery-recipes')}
              className="text-left px-3 py-2.5 rounded-xl bg-pink-50 text-pink-700 flex items-center justify-between font-bold"
            >
              <span className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-pink-500" />
                <span>Bakery Recipe Collection & Guides</span>
              </span>
              <span className="text-xs bg-pink-200/60 px-2 py-0.5 rounded-full font-semibold">Buy Recipes</span>
            </button>
            <button
              onClick={() => handleNavClick('chef-story')}
              className="text-left px-3 py-2.5 rounded-xl hover:bg-[#FCEFEF] text-[#2C1810]"
            >
              👩‍🍳 About Chef Aqsa Lakdawala
            </button>
            <button
              onClick={() => handleNavClick('achievements')}
              className="text-left px-3 py-2.5 rounded-xl hover:bg-[#FCEFEF] text-[#2C1810]"
            >
              📰 Newspaper Clippings & Credentials
            </button>
            <button
              onClick={() => handleNavClick('sister-brands')}
              className="text-left px-3 py-2.5 rounded-xl hover:bg-[#FCEFEF] text-[#2C1810]"
            >
              🍔 Sister Brands (The Crave Co. & The Cream Room)
            </button>
            <button
              onClick={() => handleNavClick('reviews')}
              className="text-left px-3 py-2.5 rounded-xl hover:bg-[#FCEFEF] text-[#2C1810]"
            >
              💬 Reviews & Dietary FAQs
            </button>
            <button
              onClick={() => {
                onOpenOrderHistory();
                setMobileMenuOpen(false);
              }}
              className="text-left px-3 py-2.5 rounded-xl bg-[#FCEFEF] text-[#865046] flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <History className="w-4 h-4" />
                <span>View Order History</span>
              </span>
              <span className="text-xs font-normal">Past UPI Orders</span>
            </button>
          </div>

          <div className="pt-2 border-t border-[#2C1810]/10 flex flex-col gap-2">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-2.5 rounded-xl font-bold text-xs shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Direct WhatsApp: {COMPANY_PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

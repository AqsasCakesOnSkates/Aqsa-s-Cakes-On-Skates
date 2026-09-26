import React, { useState } from 'react';
import { BAKERY_RECIPE_COLLECTIONS, RECIPE_FEATURES, convertRecipeGuideToProduct, RecipeCategoryGuide } from '../data/recipesData';
import { Product } from '../types';
import { BookOpen, CheckCircle, Sparkles, MessageCircle, Phone, ShoppingBag, ChevronDown, ChevronUp, Download, ShieldCheck, Award } from 'lucide-react';
import { COMPANY_PHONE, COMPANY_WHATSAPP } from '../config/brand';

interface BakeryRecipesSectionProps {
  onAddToCart: (product: Product) => void;
  onOpenCart?: () => void;
}

export const BakeryRecipesSection: React.FC<BakeryRecipesSectionProps> = ({
  onAddToCart,
  onOpenCart,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [addedEffect, setAddedEffect] = useState<string | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Collections' },
    { id: 'bundles', label: '⭐ Complete Master Bundles' },
    { id: 'Breads', label: '🥖 Breads & Sourdough' },
    { id: 'French Pastries', label: '🥐 French Pastries & Viennoiserie' },
    { id: 'Celebration Cakes', label: '🎂 Celebration Cakes & Gateaux' },
    { id: 'Tea Cakes', label: '🍞 Tea Cakes & Loaves' },
    { id: 'Cookies', label: '🍪 Cookies & Biscuits' },
    { id: 'Savoury Bakes', label: '🍕 Savoury & Puffs' },
    { id: 'Fried & Filled', label: '🍩 Bomboloni & Doughnuts' },
    { id: 'Café Desserts', label: '🍰 Café Desserts' },
  ];

  const filteredCollections = BAKERY_RECIPE_COLLECTIONS.filter((guide) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'bundles') return guide.isBundle;
    return guide.categoryGroup === selectedFilter;
  });

  const handleBuyRecipe = (guide: RecipeCategoryGuide) => {
    const product = convertRecipeGuideToProduct(guide);
    onAddToCart(product);
    setAddedEffect(guide.id);
    setTimeout(() => setAddedEffect(null), 1200);
    if (onOpenCart) {
      setTimeout(() => onOpenCart(), 300);
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedCard(prev => prev === id ? null : id);
  };

  return (
    <section id="bakery-recipes" className="py-20 bg-gradient-to-b from-[#FDFBF7] via-[#FFF9F9] to-[#FDFBF7] relative overflow-hidden scroll-mt-24">
      {/* Decorative ambient elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-100/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-100 text-pink-700 text-xs font-semibold tracking-wider uppercase mb-4 shadow-sm border border-pink-200">
            <BookOpen className="w-4 h-4 text-pink-500" />
            Official Pricing & Curriculum Guide
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#3D2817] font-bold tracking-tight mb-4">
            Professional Bakery Recipe Collection
          </h2>
          <p className="text-base sm:text-lg text-[#6C584C] font-light leading-relaxed">
            Master bakery-quality recipes with detailed step-by-step methods, professional tips & tricks, and dedicated 1-on-1 support from Chef Aqsa. Buy individual modules or complete master bundles.
          </p>
        </div>

        {/* Feature Highlights Banner */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 mb-12 shadow-sm border border-pink-100/80">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-pink-100/60">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-400 to-rose-400 flex items-center justify-center text-white shadow-md shadow-pink-200">
                <Award className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-lg font-serif font-bold text-[#3D2817]">What's Included With Every Recipe Guide:</h3>
                <p className="text-xs sm:text-sm text-[#7D6B5D]">Exact commercial baker formulas, gram measurements, and lifetime access</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`https://wa.me/${COMPANY_WHATSAPP}?text=${encodeURIComponent("Hi Chef Aqsa! I have a question about your Bakery Recipe Collection & Pricing Guide.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 text-xs font-medium transition"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                WhatsApp Recipe Help (+91 {COMPANY_PHONE})
              </a>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-pink-50 text-pink-700 text-xs font-medium border border-pink-200">
                <Download className="w-3.5 h-3.5" />
                Instant PDF Delivery
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-6">
            {RECIPE_FEATURES.slice(0, 4).map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-[#5C483C]">
                <CheckCircle className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-3">
            {RECIPE_FEATURES.slice(4).map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-[#5C483C]">
                <CheckCircle className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar scroll-smooth">
          {filterTabs.map((tab) => {
            const isActive = selectedFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#3D2817] text-white shadow-md'
                    : 'bg-white/80 text-[#6C584C] hover:bg-pink-50 border border-pink-100/60'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Recipe Collection Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCollections.map((guide) => {
            const isExpanded = expandedCard === guide.id;
            const isJustAdded = addedEffect === guide.id;

            return (
              <div
                key={guide.id}
                className={`bg-white rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col justify-between ${
                  guide.isBundle
                    ? 'border-pink-300 shadow-md hover:shadow-xl bg-gradient-to-b from-pink-50/30 to-white'
                    : 'border-pink-100/70 hover:border-pink-200 shadow-sm hover:shadow-md'
                }`}
              >
                <div>
                  {/* Top Bar with Badge */}
                  <div className="p-5 pb-3">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[11px] font-semibold text-pink-600 bg-pink-100/70 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                        {guide.categoryGroup}
                      </span>
                      {guide.badge && (
                        <span className="text-[11px] font-bold text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-200 flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-amber-600" />
                          {guide.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-serif font-bold text-[#3D2817] leading-snug">
                      {guide.title}
                    </h3>
                    <p className="text-xs text-[#7A675B] mt-2 line-clamp-2">
                      {guide.description}
                    </p>
                  </div>

                  {/* Recipe Count & Quick Preview */}
                  <div className="px-5 py-3 bg-[#FAF7F2]/60 border-y border-pink-100/60">
                    <div className="flex items-center justify-between text-xs text-[#5C483C] font-medium">
                      <span className="flex items-center gap-1.5">
                        <BookOpen className="w-4 h-4 text-pink-500" />
                        <strong>{guide.itemCount} Recipes</strong> in this guide
                      </span>
                      <button
                        onClick={() => toggleExpand(guide.id)}
                        className="text-pink-600 hover:text-pink-700 text-xs font-semibold flex items-center gap-1 cursor-pointer transition"
                      >
                        {isExpanded ? (
                          <>Hide List <ChevronUp className="w-3.5 h-3.5" /></>
                        ) : (
                          <>View Recipes ({guide.recipes.length}) <ChevronDown className="w-3.5 h-3.5" /></>
                        )}
                      </button>
                    </div>

                    {/* Expandable Recipe List */}
                    {isExpanded && (
                      <div className="mt-3 pt-3 border-t border-pink-100/60 max-h-56 overflow-y-auto pr-1 text-xs text-[#4A382D] space-y-1.5">
                        {guide.recipes.map((r, i) => (
                          <div key={i} className="flex items-start gap-1.5">
                            <span className="text-pink-400 font-bold">•</span>
                            <span>{r}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Price & Action Footer */}
                <div className="p-5 pt-4 bg-white border-t border-pink-50 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[11px] text-[#8C7A6E] block font-medium">Curriculum Price</span>
                    <span className="text-2xl font-serif font-bold text-[#3D2817]">
                      ₹{guide.price.toLocaleString('en-IN')}/-
                    </span>
                  </div>

                  <button
                    onClick={() => handleBuyRecipe(guide)}
                    className={`px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm flex items-center gap-2 transition duration-200 cursor-pointer shadow-sm ${
                      isJustAdded
                        ? 'bg-emerald-600 text-white'
                        : 'bg-[#3D2817] hover:bg-[#2C1C10] text-white hover:shadow-md'
                    }`}
                  >
                    <ShoppingBag className="w-4 h-4" />
                    {isJustAdded ? 'Added to Cart!' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Trust & Direct Consultation Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#3D2817] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-pink-300 text-xs font-semibold uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4" />
              100% Chef-Verified Formulations
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-2">
              Need a Custom Recipe Bundle or Commercial Advisory?
            </h3>
            <p className="text-xs sm:text-sm text-pink-100/80 leading-relaxed font-light">
              Connect directly with Chef Aqsa on WhatsApp for custom bakery business consultation, menu engineering, and personalized baking troubleshooting.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href={`https://wa.me/${COMPANY_WHATSAPP}?text=${encodeURIComponent("Hi Chef Aqsa! I am interested in purchasing your bakery recipes and would like to ask a question.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-medium text-xs sm:text-sm flex items-center justify-center gap-2 transition shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Chef (+91 {COMPANY_PHONE})
            </a>
            <a
              href={`tel:${COMPANY_PHONE}`}
              className="w-full sm:w-auto px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm flex items-center justify-center gap-2 transition"
            >
              <Phone className="w-4 h-4" />
              Call Support
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

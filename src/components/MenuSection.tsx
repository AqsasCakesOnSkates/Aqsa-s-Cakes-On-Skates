import React, { useState, useMemo } from 'react';
import { Product, ProductCategory, DietaryType } from '../types';
import { PRODUCTS } from '../data/products';
import { Search, Plus, Check, Sparkles, Filter, Info, Heart, ShoppingBag } from 'lucide-react';

interface MenuSectionProps {
  onAddToCart: (product: Product, selectedSize?: { label: string; price: number }) => void;
  cartItemCount: number;
  onOpenCart: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onAddToCart,
  cartItemCount,
  onOpenCart,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [dietaryFilter, setDietaryFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedSizes, setSelectedSizes] = useState<Record<string, { label: string; price: number }>>({});
  const [addedItemEffect, setAddedItemEffect] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Creations' },
    { id: 'bestsellers', label: 'Viral & Bestsellers' },
    { id: 'recipes', label: '📖 Bakery Recipe Guides' },
    { id: 'cheesecakes', label: 'Cheesecakes' },
    { id: 'bombolone', label: 'Bomboloni (Brioche)' },
    { id: 'cakes', label: 'Designer Cakes' },
    { id: 'bento', label: 'Bento Mini Cakes' },
    { id: 'pastries', label: 'Pastries & Tubs' },
    { id: 'breads', label: 'Breads & Viennoiserie' },
    { id: 'macarons', label: 'French Macarons' },
    { id: 'brownies', label: 'Brookies & Brownies' },
    { id: 'healthy', label: 'Healthy & Gluten-Free' },
  ];

  const handleSizeChange = (productId: string, size: { label: string; price: number }) => {
    setSelectedSizes((prev) => ({ ...prev, [productId]: size }));
  };

  const handleAdd = (product: Product) => {
    const size = selectedSizes[product.id] || (product.sizes ? product.sizes[0] : undefined);
    onAddToCart(product, size);
    setAddedItemEffect(product.id);
    setTimeout(() => setAddedItemEffect(null), 1200);
  };

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      // Category filter
      if (selectedCategory !== 'all') {
        if (selectedCategory === 'bestsellers') {
          if (!item.isChefSpecial && !item.badge?.toLowerCase().includes('viral') && !item.badge?.toLowerCase().includes('bestseller')) {
            return false;
          }
        } else if (item.category !== selectedCategory) {
          return false;
        }
      }

      // Dietary filter
      if (dietaryFilter !== 'all') {
        if (dietaryFilter === 'eggless' && item.dietary !== 'eggless') return false;
        if (dietaryFilter === 'egg' && item.dietary !== 'egg') return false;
        if (dietaryFilter === 'gluten-free' && item.dietary !== 'gluten-free' && !item.name.toLowerCase().includes('gluten')) return false;
      }

      // Search query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesCategory = item.category.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc && !matchesCategory) return false;
      }

      return true;
    });
  }, [selectedCategory, dietaryFilter, searchQuery]);

  return (
    <section id="menu" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FCEFEF] text-[#2C1810] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#E8A598]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#E8A598]" />
            Boutique Pâtisserie Menu
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2C1810] tracking-tight">
            Handcrafted with French Couverture & Pure Dairy
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#2C1810]/70 font-sans">
            Every gateau, cheesecake slice, and brioche bomboloni is freshly prepared in small batches under Chef Aqsa’s watchful eye.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="space-y-4 mb-10">
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#2C1810]/40" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search cheesecakes, bomboloni, bento..."
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-[#FDFBF7] border border-[#E8A598]/40 focus:outline-none focus:ring-2 focus:ring-[#2C1810] text-sm text-[#2C1810] placeholder-[#2C1810]/40"
              />
            </div>

            {/* Dietary Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1">
              <span className="text-xs font-semibold text-[#2C1810]/60 uppercase tracking-wider pl-1 hidden sm:inline">
                Dietary:
              </span>
              {[
                { id: 'all', label: 'All' },
                { id: 'eggless', label: '100% Eggless 🟢' },
                { id: 'egg', label: 'With Egg 🔴' },
                { id: 'gluten-free', label: 'Gluten-Free / Keto' },
              ].map((d) => (
                <button
                  key={d.id}
                  onClick={() => setDietaryFilter(d.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors border ${
                    dietaryFilter === d.id
                      ? 'bg-[#2C1810] text-white border-[#2C1810]'
                      : 'bg-[#FDFBF7] text-[#2C1810]/80 border-[#E8A598]/30 hover:border-[#2C1810]'
                  }`}
                >
                  {d.label}
                </button>
              ))}
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-[#E8A598]/20">
            {categories.map((c) => {
              const isActive = selectedCategory === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setSelectedCategory(c.id)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-serif whitespace-nowrap transition-all duration-200 border ${
                    isActive
                      ? 'bg-[#2C1810] text-white border-[#2C1810] shadow-sm'
                      : 'bg-[#FDFBF7] text-[#2C1810] border-[#E8A598]/30 hover:bg-[#FCEFEF]'
                  }`}
                >
                  {c.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-[#FDFBF7] rounded-3xl border border-dashed border-[#E8A598]/40 p-8">
            <p className="text-lg font-serif text-[#2C1810]">No confections found</p>
            <p className="text-sm text-[#2C1810]/60 mt-1 font-sans">
              Try adjusting your search terms or dietary filters.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setDietaryFilter('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 bg-[#2C1810] text-white rounded-full text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => {
              const activeSize = selectedSizes[product.id] || (product.sizes ? product.sizes[0] : null);
              const displayPrice = activeSize ? activeSize.price : product.price;
              const isAdded = addedItemEffect === product.id;

              return (
                <div
                  key={product.id}
                  className="bg-[#FDFBF7] rounded-3xl overflow-hidden border border-[#E8A598]/30 hover:border-[#2C1810] transition-all duration-300 hover:shadow-xl flex flex-col justify-between group"
                >
                  {/* Image & Badges */}
                  <div>
                    <div className="relative h-56 w-full overflow-hidden bg-[#FCEFEF]/60">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                      {/* Dietary Tag */}
                      <div className="absolute top-3 left-3 flex gap-1.5 flex-wrap">
                        {product.dietary === 'eggless' ? (
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-sans font-semibold bg-emerald-800 text-white shadow-sm flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-300" />
                            Eggless
                          </span>
                        ) : product.dietary === 'egg' ? (
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-sans font-semibold bg-amber-700 text-white shadow-sm flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-300" />
                            Contains Egg
                          </span>
                        ) : (
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-sans font-semibold bg-purple-700 text-white shadow-sm flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-300" />
                            Gluten-Free
                          </span>
                        )}

                        {product.badge && (
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-sans font-semibold bg-white/90 backdrop-blur-sm text-[#2C1810] shadow-sm">
                            {product.badge}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Content Details */}
                    <div className="p-5 sm:p-6">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="font-serif font-bold text-lg sm:text-xl text-[#2C1810] line-clamp-1">
                          {product.name}
                        </h3>
                        <div className="text-right flex-shrink-0">
                          <span className="font-serif font-bold text-lg text-[#2C1810]">
                            ₹{displayPrice}
                          </span>
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-[#2C1810]/75 font-sans leading-relaxed line-clamp-2 mb-4">
                        {product.description}
                      </p>

                      {product.portionNote && (
                        <p className="text-[11px] text-[#2C1810]/60 italic font-sans mb-3">
                          ✦ {product.portionNote}
                        </p>
                      )}

                      {/* Size Selector if available */}
                      {product.sizes && product.sizes.length > 1 && (
                        <div className="mb-4">
                          <label className="text-[10px] uppercase font-bold text-[#2C1810]/60 tracking-wider block mb-1.5 font-sans">
                            Select Size / Weight:
                          </label>
                          <div className="flex flex-wrap gap-1.5">
                            {product.sizes.map((s, idx) => {
                              const isSizeActive = activeSize?.label === s.label;
                              return (
                                <button
                                  key={idx}
                                  type="button"
                                  onClick={() => handleSizeChange(product.id, s)}
                                  className={`px-2.5 py-1 rounded-lg text-xs font-sans transition-colors border ${
                                    isSizeActive
                                      ? 'bg-[#2C1810] text-white border-[#2C1810]'
                                      : 'bg-white text-[#2C1810]/80 border-[#E8A598]/40 hover:border-[#2C1810]'
                                  }`}
                                >
                                  {s.label} (₹{s.price})
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Add to Cart CTA */}
                  <div className="p-5 sm:p-6 pt-0">
                    <button
                      onClick={() => handleAdd(product)}
                      className={`w-full py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                        isAdded
                          ? 'bg-emerald-600 text-white shadow-md'
                          : 'bg-[#2C1810] hover:bg-[#3D2318] text-[#FDFBF7] shadow-sm hover:shadow-md'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-4 h-4 animate-bounce" />
                          Added to Box!
                        </>
                      ) : (
                        <>
                          <Plus className="w-4 h-4 text-[#E8A598]" />
                          Add to Box • ₹{displayPrice}
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Floating Cart Access Pill for Quick Checkout */}
        {cartItemCount > 0 && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
            <button
              onClick={onOpenCart}
              className="flex items-center gap-3 px-6 py-3.5 bg-[#2C1810] text-[#FDFBF7] rounded-full shadow-2xl hover:scale-105 transition-all border border-[#E8A598]/50"
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5 text-[#E8A598]" />
                <span className="absolute -top-2 -right-2 bg-emerald-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {cartItemCount}
                </span>
              </div>
              <span className="font-serif font-bold text-sm">
                View Pastry Box & Checkout
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

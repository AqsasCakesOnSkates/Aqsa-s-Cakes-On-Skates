import React, { useState } from 'react';
import { CHEF_PROFILE, PRESS_ARTICLES, PressArticle } from '../data/chefData';
import { Award, GraduationCap, BookOpen, Quote, Sparkles, Newspaper, ChevronRight, CheckCircle2, Heart } from 'lucide-react';

export const ChefStory: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<PressArticle>(PRESS_ARTICLES[0]);
  const [activeTab, setActiveTab] = useState<'bio' | 'press' | 'philosophy'>('bio');

  return (
    <section id="chef-story" className="py-20 bg-[#FDFBF7] relative overflow-hidden scroll-mt-24">
      {/* Anchor alias for backwards compatibility */}
      <div id="about" className="sr-only" aria-hidden="true" />
      {/* Subtle background divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#FCEFEF] px-4 py-1.5 rounded-full mb-3 border border-[#E8A598]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#865046]" />
            <span className="text-xs uppercase font-bold tracking-widest text-[#865046]">
              Meet The Visionary Pâtissière
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#2C1810] tracking-tight">
            Chef Aqsa Lakdawala Khimjibhai
          </h2>
          <p className="text-sm sm:text-base text-[#2C1810]/75 mt-3 leading-relaxed">
            Where classical French culinary rigour, behavioral psychology from Manchester, and pure kinetic passion meet between the coasts of Goa and the heritage city of Belgaum.
          </p>

          {/* Tab Selector */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveTab('bio')}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                activeTab === 'bio'
                  ? 'bg-[#2C1810] text-[#FDFBF7] shadow-md'
                  : 'bg-white text-[#2C1810] hover:bg-[#FCEFEF] border border-[#2C1810]/10'
              }`}
            >
              👩‍🍳 The Journey & Accreditations
            </button>
            <button
              onClick={() => setActiveTab('press')}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                activeTab === 'press'
                  ? 'bg-[#2C1810] text-[#FDFBF7] shadow-md'
                  : 'bg-white text-[#2C1810] hover:bg-[#FCEFEF] border border-[#2C1810]/10'
              }`}
            >
              📰 Newspaper Clippings & Media
            </button>
            <button
              onClick={() => setActiveTab('philosophy')}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                activeTab === 'philosophy'
                  ? 'bg-[#2C1810] text-[#FDFBF7] shadow-md'
                  : 'bg-white text-[#2C1810] hover:bg-[#FCEFEF] border border-[#2C1810]/10'
              }`}
            >
              ✨ The 4 Kitchen Pillars
            </button>
          </div>
        </div>

        {/* Tab 1: Biography & Photo */}
        {activeTab === 'bio' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Chef Portrait with Mascot Backdrop */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#2C1810] aspect-[4/5] group">
                  <img
                    src="/assets/chef_aqsa.jpg"
                    alt="Pastry Chef Aqsa Lakdawala in chef jacket"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810] via-transparent to-transparent opacity-80" />

                  {/* Caption on image */}
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="font-serif text-2xl font-bold leading-tight">Chef Aqsa Lakdawala</p>
                    <p className="text-xs text-[#E8A598] font-medium tracking-wide uppercase mt-1">
                      Founder, Cakes on Skates • Head of Bakery, KLE University
                    </p>
                  </div>
                </div>

                {/* APCA Accreditation Floating Badge */}
                <div className="absolute -bottom-5 -right-4 sm:-right-6 bg-white p-4 rounded-2xl shadow-xl border border-[#E8A598]/30 max-w-[220px]">
                  <div className="flex items-center gap-2 mb-1">
                    <Award className="w-5 h-5 text-[#865046]" />
                    <span className="font-bold text-xs text-[#2C1810] uppercase tracking-wider">APCA Bangalore</span>
                  </div>
                  <p className="text-[11px] text-[#2C1810]/70 leading-snug">
                    Certified in French Pastry Arts (May 2022 Batch)
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Detailed Story & Credentials */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-4">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C1810]">
                  From University of Manchester to Haute Pâtisserie
                </h3>
                <p className="text-sm sm:text-base text-[#2C1810]/80 leading-relaxed">
                  Aqsa’s love for pastry began at age 11 when she baked her very first birthday cake for her mother. By age 16, she and her sister were walking door-to-door in their residential society offering freshly baked cupcake sample bites to neighbours. That spark led to the founding of <strong>Cakes on Skates</strong> in Caranzalem, Goa — named for her trademark ability to take an order at noon and deliver a fresh, warm cake by five in the evening.
                </p>
                <p className="text-sm sm:text-base text-[#2C1810]/80 leading-relaxed">
                  After completing her <strong>BSc in Psychology at Dhempe College Miramar</strong> and earning a <strong>Master of Science in Business Psychology from the prestigious University of Manchester</strong>, Aqsa realized corporate desk work could never replace her passion for the oven. She enrolled at the elite <strong>Academy of Pastry & Culinary Arts (APCA) Bangalore</strong>, mastering mirror glaze physics, European couverture tempering, viennoiserie, and multi-tier architectural gateaux under world-champion master chefs.
                </p>
                <p className="text-sm sm:text-base text-[#2C1810]/80 leading-relaxed">
                  Today, Chef Aqsa divides her time between running cloud kitchens in <strong>Goa & Belgaum</strong> and serving as the <strong>Head of the Bakery & Confectionery Department at KLE University’s Hotel Management College</strong>, where she trains the next generation of professional pastry chefs.
                </p>
              </div>

              {/* Diplomas & Roles Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {CHEF_PROFILE.almaMater.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-white border border-[#2C1810]/10 shadow-xs hover:border-[#E8A598] transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-1 text-[#865046]">
                      <GraduationCap className="w-4 h-4 shrink-0" />
                      <span className="font-bold text-xs">{item.institution}</span>
                    </div>
                    <p className="text-xs font-semibold text-[#2C1810]">{item.credential}</p>
                    <p className="text-[11px] text-[#2C1810]/70 mt-1 leading-snug">{item.description}</p>
                  </div>
                ))}
              </div>

              {/* Quote Banner */}
              <div className="p-4 rounded-2xl bg-[#FCEFEF] border-l-4 border-[#865046] flex items-start gap-3">
                <Quote className="w-6 h-6 text-[#865046] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-[#2C1810] italic leading-relaxed">
                  “{CHEF_PROFILE.philosophy}”
                  <span className="block mt-1 font-bold not-italic text-xs text-[#865046]">
                    — Chef Aqsa Lakdawala Khimjibhai
                  </span>
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Newspaper Clippings & Press Features */}
        {activeTab === 'press' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {PRESS_ARTICLES.map((article) => {
                const isSelected = selectedArticle.id === article.id;
                return (
                  <button
                    key={article.id}
                    onClick={() => setSelectedArticle(article)}
                    className={`text-left p-4 rounded-2xl transition-all border ${
                      isSelected
                        ? 'bg-[#2C1810] text-[#FDFBF7] border-[#2C1810] shadow-lg scale-[1.02]'
                        : 'bg-white hover:bg-[#FCEFEF] text-[#2C1810] border-[#2C1810]/10'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className={isSelected ? 'text-[#E8A598] font-bold' : 'text-[#865046] font-bold'}>
                        {article.source}
                      </span>
                      <Newspaper className="w-3.5 h-3.5 opacity-60" />
                    </div>
                    <h4 className="font-serif font-bold text-sm leading-snug line-clamp-2">
                      {article.headline}
                    </h4>
                    <p className={`text-[11px] mt-2 line-clamp-2 ${isSelected ? 'text-white/80' : 'text-[#2C1810]/70'}`}>
                      {article.summary}
                    </p>
                    <span className={`inline-block mt-3 text-[10px] uppercase font-bold tracking-wider ${isSelected ? 'text-[#E8A598]' : 'text-[#865046]'}`}>
                      {article.date} →
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Selected Article Viewer */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#2C1810]/10 shadow-xl">
              <div className="max-w-4xl mx-auto space-y-6">
                <div className="border-b border-[#2C1810]/10 pb-5">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#865046] font-bold uppercase tracking-wider mb-2">
                    <span className="flex items-center gap-1.5">
                      <Newspaper className="w-4 h-4" />
                      <span>{selectedArticle.source} • {selectedArticle.location}</span>
                    </span>
                    <span className="bg-[#FCEFEF] px-2.5 py-1 rounded-full">{selectedArticle.date}</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-4xl font-bold text-[#2C1810]">
                    {selectedArticle.headline}
                  </h3>
                  <p className="text-sm sm:text-base text-[#865046] font-medium mt-1">
                    {selectedArticle.subheadline}
                  </p>
                </div>

                {/* Key Quote Callout */}
                <div className="p-5 rounded-2xl bg-[#FCEFEF] border border-[#E8A598]/40">
                  <p className="font-serif text-base sm:text-lg italic text-[#2C1810] leading-relaxed">
                    “{selectedArticle.keyQuote}”
                  </p>
                </div>

                {/* Highlights List */}
                <div>
                  <h5 className="font-bold text-xs uppercase tracking-wider text-[#2C1810] mb-3">
                    Article Highlights & Milestones:
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedArticle.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 bg-[#FDFBF7] p-3 rounded-xl border border-[#2C1810]/5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-xs text-[#2C1810]/90 leading-snug">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Full Transcribed Excerpts from Original Clipping */}
                <div className="space-y-3 pt-2">
                  <h5 className="font-bold text-xs uppercase tracking-wider text-[#2C1810]">
                    Original Press Excerpt:
                  </h5>
                  {selectedArticle.fullExcerpt.map((para, i) => (
                    <p key={i} className="text-xs sm:text-sm text-[#2C1810]/80 leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: The 4 Kitchen Pillars */}
        {activeTab === 'philosophy' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in duration-300">
            <div className="bg-white p-6 rounded-3xl border border-[#2C1810]/10 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FCEFEF] text-[#865046] flex items-center justify-center mb-4 text-xl font-bold">
                  🧈
                </div>
                <h4 className="font-serif text-lg font-bold text-[#2C1810]">100% Real French Butter</h4>
                <p className="text-xs text-[#2C1810]/75 mt-2 leading-relaxed">
                  Strictly pure European dairy butter and authentic Belgian Callebaut couverture. Zero margarine, zero compound fats, zero hydrogenated vegetable oils.
                </p>
              </div>
              <span className="text-[10px] uppercase font-bold text-[#865046] tracking-wider mt-4">
                Purity Guaranteed
              </span>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-[#2C1810]/10 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FCEFEF] text-[#865046] flex items-center justify-center mb-4 text-xl font-bold">
                  🌱
                </div>
                <h4 className="font-serif text-lg font-bold text-[#2C1810]">Dedicated Eggless Facility</h4>
                <p className="text-xs text-[#2C1810]/75 mt-2 leading-relaxed">
                  Vegetarian and eggless gateaux are baked with dedicated equipment, mixing bowls, and silicones. No compromises on feather-light crumb or structure.
                </p>
              </div>
              <span className="text-[10px] uppercase font-bold text-[#865046] tracking-wider mt-4">
                Strict Separation
              </span>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-[#2C1810]/10 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FCEFEF] text-[#865046] flex items-center justify-center mb-4 text-xl font-bold">
                  ⚡
                </div>
                <h4 className="font-serif text-lg font-bold text-[#2C1810]">Express Same-Day Bake</h4>
                <p className="text-xs text-[#2C1810]/75 mt-2 leading-relaxed">
                  Never frozen. Sponges are soaked in slow-cooked vanilla syrups and assembled on the day of delivery for maximum freshness and flavor release.
                </p>
              </div>
              <span className="text-[10px] uppercase font-bold text-[#865046] tracking-wider mt-4">
                Baked Fresh
              </span>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-[#2C1810]/10 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FCEFEF] text-[#865046] flex items-center justify-center mb-4 text-xl font-bold">
                  🧠
                </div>
                <h4 className="font-serif text-lg font-bold text-[#2C1810]">Sensory Psychology</h4>
                <p className="text-xs text-[#2C1810]/75 mt-2 leading-relaxed">
                  Recipes crafted using Chef Aqsa's Manchester psychology background to balance sweetness, textural crunch, and aroma for maximum emotional comfort.
                </p>
              </div>
              <span className="text-[10px] uppercase font-bold text-[#865046] tracking-wider mt-4">
                Behavioral Flavor Craft
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

import React from 'react';
import { Star, Quote, Heart, CheckCircle2 } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const reviews = [
    {
      name: 'Rhea Fernandes',
      location: 'Miramar, Goa',
      rating: 5,
      date: '2 weeks ago',
      order: '3-Tier Floral Wedding Cake & Macaron Tower',
      comment:
        'Chef Aqsa created our dream wedding cake! The Belgian dark chocolate ganache with hazelnut praline was heavenly. The guests could not stop raving about how moist and elegant it was. Delivered right on time in our beach resort with zero stress.',
    },
    {
      name: 'Dr. Nikhil Kulkarni',
      location: 'Tilakwadi, Belgaum',
      rating: 5,
      date: '1 month ago',
      order: 'Lotus Biscoff Baked Cheesecake & Bomboloni Box',
      comment:
        'Easily the finest patisserie in Belgaum. The creme brulee bomboloni was warm, crisp with that authentic torched sugar crackle, and the cheesecake was perfectly dense without being overly sweet. Direct UPI checkout was seamless!',
    },
    {
      name: 'Ayesha Sayed',
      location: 'Panaji, Goa',
      rating: 5,
      date: '3 weeks ago',
      order: 'London Viral Cake Slice & Pistachio Entremet',
      comment:
        'I have been following Chef Aqsa since her St. Inez cloud kitchen days. She never compromises on ingredient quality — true Callebaut couverture and fresh dairy cream. The London viral slice is pure decadence!',
    },
    {
      name: 'Siddharth Patil',
      location: 'KLE Campus, Belgaum',
      rating: 5,
      date: 'Just recently',
      order: 'Eggless Nutella Bento Cake & Brookies',
      comment:
        'Ordered a surprise bento cake for my sister’s convocation. The calligraphy on the cake was exquisite, and the packaging is truly boutique. Love the WhatsApp confirmation update as well.',
    },
  ];

  return (
    <section id="reviews" className="py-20 bg-[#FDFBF7] border-t border-[#E8A598]/20 scroll-mt-24">
      {/* Anchor alias */}
      <div id="testimonials" className="sr-only" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FCEFEF] text-[#2C1810] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#E8A598]/30">
            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            Client Love
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2C1810] tracking-tight">
            Loved Across Belgaum & Goa
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#2C1810]/70 leading-relaxed font-sans">
            Hear from families, brides, and pastry connoisseurs who trust Chef Aqsa with their most milestone celebrations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 border border-[#E8A598]/30 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(r.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs font-semibold text-[#E8A598] mb-2 font-sans">
                  {r.order}
                </p>
                <p className="text-sm font-sans text-[#2C1810]/80 leading-relaxed italic mb-4">
                  "{r.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#E8A598]/20 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-serif font-bold text-[#2C1810]">{r.name}</h4>
                  <p className="text-xs font-sans text-[#2C1810]/60">{r.location}</p>
                </div>
                <span className="text-[11px] font-sans text-[#2C1810]/50">{r.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Award, GraduationCap, Users, Clock, Sparkles, Star, BookOpen, HeartHandshake } from 'lucide-react';
import { CHEF_PROFILE } from '../data/chefData';

export const AchievementsSection: React.FC = () => {
  const milestones = [
    {
      year: '2022',
      title: 'APCA Advanced Diploma in French Pastry',
      place: 'Bangalore Campus',
      desc: 'Mastered European pastry arts, entremets, praline confections, and mirror glazes under international master chefs.',
      icon: GraduationCap,
      badge: 'Elite Accreditation',
    },
    {
      year: '2021',
      title: 'Head of Bakery & Confectionery Department',
      place: 'KLE University Hotel Management',
      desc: 'Supervising university pastry curriculum, instructing food sanitation, classic sponge formulations, and mentoring future chefs.',
      icon: BookOpen,
      badge: 'Academic Leadership',
    },
    {
      year: '2020',
      title: 'All-Women Cloud Kitchen & Global Masterclasses',
      place: 'St. Inez, Goa',
      desc: 'Featured in The Navhind Times & Herald for establishing a rapid-delivery cloud kitchen and teaching students in Dubai, UK, and Norway.',
      icon: Users,
      badge: 'Press & Media Spotlight',
    },
    {
      year: '2019',
      title: 'MSc in Business Psychology',
      place: 'University of Manchester, UK',
      desc: 'Integrating cognitive sensory psychology with dessert flavour profiles to evoke genuine joy and nostalgic comfort.',
      icon: Award,
      badge: 'Academic Distinction',
    },
  ];

  const badges = [
    { label: '5,000+ Cakes Handcrafted', detail: 'Weddings, VIPs & Celebrations in Belgaum & Goa' },
    { label: '850+ Trained Students', detail: 'In-person workshops and online baking masterclasses' },
    { label: 'Dual-City Cloud Operations', detail: 'Serving Goa coastal belt and Belgaum with cold transport' },
    { label: '100% Callebaut Couverture', detail: 'No compound chocolates, pure European dairy butter' },
  ];

  return (
    <section id="achievements" className="py-20 bg-white border-t border-[#E8A598]/20 scroll-mt-24">
      {/* Anchor alias for backwards compatibility */}
      <div id="press" className="sr-only" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FCEFEF] text-[#2C1810] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#E8A598]/30">
            <Award className="w-3.5 h-3.5 text-[#E8A598]" />
            Accreditations & Honors
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2C1810] tracking-tight">
            Chef Aqsa’s Achievements & Heritage
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#2C1810]/70 leading-relaxed font-sans">
            A harmonious fusion of premier French culinary diplomas, academic distinction from the UK, and years of mentoring aspiring pastry chefs.
          </p>
        </div>

        {/* Milestone Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {milestones.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div
                key={idx}
                className="relative bg-[#FDFBF7] rounded-3xl p-6 sm:p-7 border border-[#E8A598]/30 hover:border-[#2C1810] transition-all duration-300 hover:shadow-lg flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-serif font-bold px-3 py-1 bg-[#2C1810] text-white rounded-full">
                      {m.year}
                    </span>
                    <span className="text-[11px] font-sans font-medium text-[#2C1810]/70 bg-[#FCEFEF] px-2 py-0.5 rounded-md border border-[#E8A598]/20">
                      {m.badge}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center border border-[#E8A598]/30 mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-[#2C1810]" />
                  </div>

                  <h3 className="text-lg font-serif font-bold text-[#2C1810] mb-1 line-clamp-2">
                    {m.title}
                  </h3>
                  <p className="text-xs font-sans font-semibold text-[#E8A598] mb-3">
                    {m.place}
                  </p>
                  <p className="text-sm font-sans text-[#2C1810]/75 leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Stat Banners */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-[#FDFBF7] rounded-3xl p-6 border border-[#E8A598]/30">
          {badges.map((b, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-white border border-[#E8A598]/20 flex items-start gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-[#FCEFEF] flex items-center justify-center flex-shrink-0 text-[#2C1810] font-bold text-xs">
                ✦
              </div>
              <div>
                <h4 className="text-sm font-serif font-bold text-[#2C1810]">{b.label}</h4>
                <p className="text-xs font-sans text-[#2C1810]/70 mt-0.5">{b.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

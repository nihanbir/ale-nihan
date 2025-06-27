
import React, { useEffect } from 'react';
import Hero from '@/components/home/Hero';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users, Utensils } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import RSVPBanner from '@/components/shared/RSVPBanner';
import { useToast } from "@/hooks/use-toast";

import {
  WEDDING_LOCATION,
  WEDDING_DATE_TIME,
  WEDDING_VENUE,
  WEDDING_ADDRESS, 
  CEREMONY_DETAILS, 
  RECEPTION_DETAILS
} from '@/constants/wedding';

const Index = () => {
  const { t } = useLanguage();

  return (
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow bg-white">
          <div className="bg-wedding-primary">
            <Hero
                names={{ partner1: 'Nihan', partner2: 'Ale' }}
                date={t('details.weddingDay')}
                location={WEDDING_LOCATION}
            />
          </div>
          {/* About Section */}
          <section id="about-section" className="py-20 bg-white">
            <div className="container max-w-5xl mx-auto px-6">
              <AnimatedSection className="text-center mb-16" animation="fade-in">
                <h2 className="font-serif text-4xl text-wedding-dark mb-4">{t('home.ourStory')}</h2>
                <div className="w-16 h-0.5 bg-wedding-primary mx-auto mb-8"></div>
                <p className="text-wedding-muted max-w-3xl mx-auto leading-relaxed">
                  {t('home.ourStoryContent')}
                </p>
              </AnimatedSection>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <AnimatedSection animation="slide-up" delay={200}>
                  <div className="rounded-lg overflow-hidden shadow-soft">
                    <img
                        src="https://raw.githubusercontent.com/nihanbir/ale-nihan/refs/heads/main/src/components/media/ring.jpg"
                        alt="Couple"
                        className="w-full h-full object-cover"
                    />
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="slide-up" delay={400}>
                  <h3 className="font-serif text-3xl text-wedding-dark mb-4">{t('home.ourVision')}</h3>
                  <p className="text-wedding-muted mb-6 leading-relaxed">
                    {t('home.ourVisionContent')}
                  </p>
                  <Link to="/details">
                    <Button className="bg-wedding-primary hover:bg-wedding-accent/90 text-white transition-all">
                      {t('home.exploreDetails')}
                    </Button>
                  </Link>
                </AnimatedSection>
              </div>
            </div>
          </section>

          {/* Event Highlights */}
          <section className="py-20 bg-wedding-secondary/30">
            <div className="container max-w-6xl mx-auto px-6">
              <AnimatedSection className="text-center mb-16" animation="fade-in">
                <h2 className="font-serif text-4xl text-wedding-dark mb-4">{t('home.eventHighlights')}</h2>
                <div className="w-16 h-0.5 bg-wedding-primary mx-auto mb-8"></div>
                <p className="text-wedding-muted max-w-3xl mx-auto">
                  {t('home.eventHighlightsContent')}
                </p>
              </AnimatedSection>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <AnimatedSection animation="scale-in" delay={200} className="bg-white rounded-lg p-8 shadow-soft transition-transform hover:translate-y-[-5px]">
                  <div className="mb-6 flex justify-center">
                    <div className="w-14 h-14 bg-wedding-primary/10 rounded-full flex items-center justify-center">
                      <Calendar className="text-wedding-primary h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="font-serif text-xl text-wedding-dark mb-2 text-center">{t('home.ceremonyReception')}</h3>
                  <p className="text-wedding-muted text-center text-sm">
                    {t('details.weddingDay')}
                    <br />{t('details.ceremony')}: {CEREMONY_DETAILS.time}
                    <br />{t('details.reception')}: {RECEPTION_DETAILS.time}
                  </p>
                </AnimatedSection>

                <AnimatedSection animation="scale-in" delay={300} className="bg-white rounded-lg p-8 shadow-soft transition-transform hover:translate-y-[-5px]">
                  <div className="mb-6 flex justify-center">
                    <div className="w-14 h-14 bg-wedding-primary/10 rounded-full flex items-center justify-center">
                      <MapPin className="text-wedding-primary h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="font-serif text-xl text-wedding-dark mb-2 text-center">{t('home.venue')}</h3>
                  <p className="text-wedding-muted text-center text-sm">
                    {WEDDING_VENUE}
                    <br />{WEDDING_ADDRESS}
                  </p>
                </AnimatedSection>

                <AnimatedSection animation="scale-in" delay={400} className="bg-white rounded-lg p-8 shadow-soft transition-transform hover:translate-y-[-5px]">
                  <div className="mb-6 flex justify-center">
                    <div className="w-14 h-14 bg-wedding-primary/10 rounded-full flex items-center justify-center">
                      <Utensils className="text-wedding-primary h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="font-serif text-xl text-wedding-dark mb-2 text-center">{t('home.menu')}</h3>
                  <p className="text-wedding-muted text-center text-sm">
                    {t('details.menuTBA')}
                    <br />
                    <br />
                  </p>
                </AnimatedSection>

                <AnimatedSection animation="scale-in" delay={500} className="bg-white rounded-lg p-8 shadow-soft transition-transform hover:translate-y-[-5px]">
                  <div className="mb-6 flex justify-center">
                    <div className="w-14 h-14 bg-wedding-primary/10 rounded-full flex items-center justify-center">
                      <Users className="text-wedding-primary h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="font-serif text-xl text-wedding-dark mb-2 text-center">{t('home.accommodations')}</h3>
                  <p className="text-wedding-muted text-center text-sm">
                    {t('details.accommodationsInfo')}
                  </p>
                </AnimatedSection>
              </div>

              <div className="text-center mt-12">
                <Link to="/details">
                  <Button variant="outline" className="bg-wedding-primary hover:bg-wedding-accent/90 hover:text-white text-white transition-all">
                    {t('home.seeFullDetails')}
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Replace RSVP Banner with component */}
          <RSVPBanner
              title={t('home.joinUs')}
              subtitle={t('home.joinUsContent')}
              buttonText={t('common.rsvpButton')}
          />
        </main>

        <Footer />
      </div>
  );
};

export default Index;

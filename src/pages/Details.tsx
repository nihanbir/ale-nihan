
import React from 'react';
import AnimatedSection from '@/components/shared/AnimatedSection';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Hotel, 
  Car, 
  Utensils, 
  Music, 
  Gift
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Details = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Header */}
        <section className="py-20 bg-wedding-secondary/30">
          <div className="container max-w-5xl mx-auto px-6">
            <AnimatedSection className="text-center" animation="fade-in">
              <h1 className="font-serif text-5xl text-wedding-dark mb-4">Wedding Details</h1>
              <div className="w-16 h-0.5 bg-wedding-primary mx-auto mb-8"></div>
              <p className="text-wedding-muted max-w-3xl mx-auto">
                We are so excited to celebrate our special day with you. Below you'll find all the important information to help you prepare for our wedding.
              </p>
            </AnimatedSection>
          </div>
        </section>
        
        {/* Schedule */}
        <section className="py-16 bg-white">
          <div className="container max-w-5xl mx-auto px-6">
            <AnimatedSection className="text-center mb-12" animation="fade-in">
              <h2 className="font-serif text-3xl text-wedding-dark mb-4">Schedule of Events</h2>
              <div className="w-12 h-0.5 bg-wedding-primary mx-auto mb-8"></div>
            </AnimatedSection>
            
            <div className="grid md:grid-cols-2 gap-12">
              <AnimatedSection animation="slide-up" delay={200}>
                <div className="bg-wedding-secondary/20 rounded-lg p-8 shadow-soft relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-wedding-primary/10 rounded-bl-lg flex items-center justify-center">
                    <Calendar className="text-wedding-primary h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-2xl text-wedding-dark mb-4">The Ceremony</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Clock className="text-wedding-primary h-5 w-5 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium">3:00 PM</p>
                        <p className="text-wedding-muted text-sm">Saturday, June 15, 2024</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="text-wedding-primary h-5 w-5 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Bella Vista Garden</p>
                        <p className="text-wedding-muted text-sm">123 Garden Lane, New York, NY 10001</p>
                      </div>
                    </div>
                  </div>
                  <p className="mt-6 text-wedding-muted">
                    Please arrive 30 minutes early to allow time for seating. The ceremony will begin promptly at 3:00 PM.
                  </p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="slide-up" delay={400}>
                <div className="bg-wedding-secondary/20 rounded-lg p-8 shadow-soft relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-wedding-primary/10 rounded-bl-lg flex items-center justify-center">
                    <Calendar className="text-wedding-primary h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-2xl text-wedding-dark mb-4">The Reception</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Clock className="text-wedding-primary h-5 w-5 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium">5:30 PM</p>
                        <p className="text-wedding-muted text-sm">Saturday, June 15, 2024</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="text-wedding-primary h-5 w-5 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Bella Vista Ballroom</p>
                        <p className="text-wedding-muted text-sm">123 Garden Lane, New York, NY 10001</p>
                      </div>
                    </div>
                  </div>
                  <p className="mt-6 text-wedding-muted">
                    Cocktail hour begins at 5:30 PM, followed by dinner at 7:00 PM. The celebration will continue with dancing until midnight.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
        
        {/* Accomodations */}
        <section className="py-16 bg-wedding-secondary/20">
          <div className="container max-w-5xl mx-auto px-6">
            <AnimatedSection className="text-center mb-12" animation="fade-in">
              <h2 className="font-serif text-3xl text-wedding-dark mb-4">Accommodations & Travel</h2>
              <div className="w-12 h-0.5 bg-wedding-primary mx-auto mb-8"></div>
              <p className="text-wedding-muted max-w-3xl mx-auto">
                We've arranged special rates at nearby hotels for our wedding guests. Please mention the "Smith-Johnson Wedding" when booking.
              </p>
            </AnimatedSection>
            
            <div className="space-y-8">
              <AnimatedSection animation="fade-in" delay={200}>
                <div className="bg-white rounded-lg p-8 shadow-soft">
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="md:w-1/4 flex justify-center md:justify-start">
                      <div className="w-16 h-16 bg-wedding-primary/10 rounded-full flex items-center justify-center">
                        <Hotel className="text-wedding-primary h-8 w-8" />
                      </div>
                    </div>
                    <div className="md:w-3/4">
                      <h3 className="font-serif text-xl text-wedding-dark mb-2">Recommended Hotels</h3>
                      <ul className="space-y-4 mt-4">
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-wedding-primary rounded-full mt-2 mr-2"></div>
                          <div>
                            <p className="font-medium">The Grand Hotel</p>
                            <p className="text-wedding-muted text-sm">0.5 miles from venue • $180/night • (555) 123-4567</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-wedding-primary rounded-full mt-2 mr-2"></div>
                          <div>
                            <p className="font-medium">City View Inn</p>
                            <p className="text-wedding-muted text-sm">1.2 miles from venue • $150/night • (555) 987-6543</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-wedding-primary rounded-full mt-2 mr-2"></div>
                          <div>
                            <p className="font-medium">Harbor Suites</p>
                            <p className="text-wedding-muted text-sm">2.0 miles from venue • $210/night • (555) 456-7890</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-in" delay={300}>
                <div className="bg-white rounded-lg p-8 shadow-soft">
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="md:w-1/4 flex justify-center md:justify-start">
                      <div className="w-16 h-16 bg-wedding-primary/10 rounded-full flex items-center justify-center">
                        <Car className="text-wedding-primary h-8 w-8" />
                      </div>
                    </div>
                    <div className="md:w-3/4">
                      <h3 className="font-serif text-xl text-wedding-dark mb-2">Transportation</h3>
                      <p className="text-wedding-muted mb-4">
                        We will provide shuttle service between the recommended hotels and the venue. Shuttles will depart from each hotel at 2:15 PM for the ceremony and will make return trips throughout the evening until midnight.
                      </p>
                      <p className="text-wedding-muted">
                        For guests driving to the venue, complimentary valet parking will be available.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
        
        {/* Menu */}
        <section className="py-16 bg-white">
          <div className="container max-w-5xl mx-auto px-6">
            <AnimatedSection className="text-center mb-12" animation="fade-in">
              <h2 className="font-serif text-3xl text-wedding-dark mb-4">Menu & Entertainment</h2>
              <div className="w-12 h-0.5 bg-wedding-primary mx-auto mb-8"></div>
            </AnimatedSection>
            
            <div className="grid md:grid-cols-2 gap-12">
              <AnimatedSection animation="slide-up" delay={200}>
                <div className="bg-wedding-secondary/20 rounded-lg p-8 shadow-soft relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-wedding-primary/10 rounded-bl-lg flex items-center justify-center">
                    <Utensils className="text-wedding-primary h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-2xl text-wedding-dark mb-4">Dining Experience</h3>
                  <p className="text-wedding-muted mb-6">
                    Our reception will feature a seasonal farm-to-table menu prepared by renowned chef Alex Martinez. Dietary restrictions can be accommodated with advance notice.
                  </p>
                  <h4 className="font-serif text-lg text-wedding-dark mb-2">Menu Preview</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-wedding-primary rounded-full mt-2 mr-2"></div>
                      <div>
                        <p className="font-medium">First Course</p>
                        <p className="text-wedding-muted text-sm">Heirloom tomato salad with burrata and basil</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-wedding-primary rounded-full mt-2 mr-2"></div>
                      <div>
                        <p className="font-medium">Main Course Options</p>
                        <p className="text-wedding-muted text-sm">Pan-seared salmon with lemon butter sauce</p>
                        <p className="text-wedding-muted text-sm">Herb-roasted chicken with wild mushroom risotto</p>
                        <p className="text-wedding-muted text-sm">Vegetable wellington (vegan option)</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-wedding-primary rounded-full mt-2 mr-2"></div>
                      <div>
                        <p className="font-medium">Dessert</p>
                        <p className="text-wedding-muted text-sm">Wedding cake and dessert station</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="slide-up" delay={400}>
                <div className="bg-wedding-secondary/20 rounded-lg p-8 shadow-soft relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-wedding-primary/10 rounded-bl-lg flex items-center justify-center">
                    <Music className="text-wedding-primary h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-2xl text-wedding-dark mb-4">Entertainment</h3>
                  <p className="text-wedding-muted mb-6">
                    We've planned a wonderful evening of music and celebration for all our guests to enjoy.
                  </p>
                  <h4 className="font-serif text-lg text-wedding-dark mb-2">Schedule</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-wedding-primary rounded-full mt-2 mr-2"></div>
                      <div>
                        <p className="font-medium">Cocktail Hour (5:30 - 6:30 PM)</p>
                        <p className="text-wedding-muted text-sm">String quartet playing classical music</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-wedding-primary rounded-full mt-2 mr-2"></div>
                      <div>
                        <p className="font-medium">Dinner (7:00 - 8:30 PM)</p>
                        <p className="text-wedding-muted text-sm">Soft background jazz ensemble</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-wedding-primary rounded-full mt-2 mr-2"></div>
                      <div>
                        <p className="font-medium">Dancing (8:30 PM - 12:00 AM)</p>
                        <p className="text-wedding-muted text-sm">Live band and DJ playing a mix of classics and contemporary hits</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
        
        {/* Registry */}
        <section className="py-16 bg-wedding-secondary/30">
          <div className="container max-w-4xl mx-auto px-6">
            <AnimatedSection className="text-center" animation="fade-in">
              <div className="w-16 h-16 bg-wedding-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="text-wedding-primary h-8 w-8" />
              </div>
              <h2 className="font-serif text-3xl text-wedding-dark mb-4">Registry</h2>
              <div className="w-12 h-0.5 bg-wedding-primary mx-auto mb-6"></div>
              <p className="text-wedding-muted max-w-3xl mx-auto mb-8">
                Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, we've registered at the following places:
              </p>
              <div className="grid sm:grid-cols-2 gap-6 max-w-xl mx-auto">
                <Button 
                  variant="outline" 
                  className="border-wedding-primary text-wedding-primary hover:bg-wedding-primary hover:text-white transition-all py-6"
                >
                  Amazon Registry
                </Button>
                <Button 
                  variant="outline" 
                  className="border-wedding-primary text-wedding-primary hover:bg-wedding-primary hover:text-white transition-all py-6"
                >
                  Crate & Barrel
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
        
        {/* RSVP Banner */}
        <section className="py-16 bg-cover bg-center relative" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=2000)' }}>
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"></div>
          <div className="container max-w-4xl mx-auto px-6 relative z-10">
            <AnimatedSection className="text-center" animation="fade-in">
              <h2 className="font-serif text-3xl text-white mb-4">Ready to Join Us?</h2>
              <div className="w-12 h-0.5 bg-wedding-primary mx-auto mb-6"></div>
              <p className="text-white/90 max-w-2xl mx-auto mb-8">
                Please let us know if you'll be able to attend by June 1, 2024. We look forward to celebrating with you!
              </p>
              <Link to="/rsvp">
                <Button className="bg-wedding-primary hover:bg-wedding-primary/90 text-white transition-all px-8 py-6 rounded-md">
                  RSVP Now
                </Button>
              </Link>
            </AnimatedSection>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Details;

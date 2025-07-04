import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import RSVPBanner from '@/components/shared/RSVPBanner';
import { useLanguage } from '@/contexts/LanguageContext';

// Import the new component sections
import DetailsHeader from '@/components/details/DetailsHeader';
import ScheduleSection from '@/components/details/ScheduleSection';
import AccommodationsSection from '@/components/details/AccommodationsSection';
import MenuSection from '@/components/details/MenuSection';
import DressCodeSection from '@/components/details/DressCodeSection';
import RegistrySection from '@/components/details/RegistrySection';

const Details = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Header Section */}
        <DetailsHeader />
        
        {/* Schedule Section */}
        <ScheduleSection />
        
        {/* Accommodations Section */}
        <AccommodationsSection />
        
        {/* Menu & Entertainment Section */}
        <MenuSection />

        {/* Dress code Section */}
        <DressCodeSection />

        {/* Registry Section */}
        <RegistrySection />
        
        {/* RSVP Banner */}
        <RSVPBanner
          title={t('home.joinUs')}
          subtitle={`${t('home.joinUsContent')}`}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Details;

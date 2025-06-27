
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { useLanguage } from '@/contexts/LanguageContext';

interface RSVPBannerProps {
    title?: string;
    subtitle?: string;
    buttonText?: string;
    backgroundImage?: string;
}

const RSVPBanner: React.FC<RSVPBannerProps> = ({
    title,
    subtitle,
    buttonText,
    backgroundImage = "https://www.fredriksborghotel.se/wp-content/uploads/2023/09/fredriksborg-21.jpg"
}) => {
    const { t } = useLanguage();

    return (
        <section
            className="py-16 bg-cover relative min-h-[50vh] md:min-h-[50vh]" // Reduced heights
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundPosition: 'center 75%', // Keeps focus on lower image portion
                backgroundSize: 'cover'
            }}
        >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"></div>
            <div className="container max-w-4xl mx-auto px-6 relative z-10">
                <AnimatedSection className="text-center" animation="fade-in">
                    <h2 className="font-serif text-3xl text-white mb-4">
                        {title || t('home.joinUs')}
                    </h2>
                    <div className="w-12 h-0.5 bg-wedding-primary mx-auto mb-6"></div>
                    <p className="text-white/90 max-w-2xl mx-auto mb-8">
                        {subtitle || t('home.joinUsContent')}
                    </p>
                    <Link
                        to="https://www.fredriksborghotel.se/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button size="lg" className="bg-wedding-primary hover:bg-wedding-accent/90 text-white transition-all px-8 py-6 rounded-md">
                            {buttonText || t('common.rsvpButton')}
                        </Button>
                    </Link>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default RSVPBanner;


import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import { Globe, ChevronDown } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const LanguageSwitcher: React.FC = () => {
    const { language, setLanguage } = useLanguage();

    const getLanguageName = (lang: Language) => {
        switch (lang) {
            case 'en': return 'English';
            case 'sv': return 'Svenska';
            case 'tr': return 'Türkçe';
            default: return 'English';
        }
    };

    const getLanguageShort = (lang: Language) => {
        switch (lang) {
            case 'en': return 'EN';
            case 'sv': return 'SV';
            case 'tr': return 'TR';
            default: return 'EN';
        }
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center gap-1 text-sm font-medium text-wedding-primary hover:text-wedding-primary hover:bg-wedding-secondary/10 rounded-full p-2"
                >
                    <Globe size={16} className="text-wedding-primary" />
                    <span>{getLanguageShort(language)}</span>
                    <ChevronDown size={14} className="opacity-70" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-[120px]">
                <DropdownMenuItem
                    onClick={() => setLanguage('en')}
                    className={language === 'en' ? 'bg-wedding-secondary/20 text-wedding-primary' : ''}
                >
                    English
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => setLanguage('sv')}
                    className={language === 'sv' ? 'bg-wedding-secondary/20 text-wedding-primary' : ''}
                >
                    Svenska
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => setLanguage('tr')}
                    className={language === 'tr' ? 'bg-wedding-secondary/20 text-wedding-primary' : ''}
                >
                    Türkçe
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default LanguageSwitcher;

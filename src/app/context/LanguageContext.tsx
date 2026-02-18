import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar' | 'ku';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    home: 'Home',
    services: 'Services',
    about: 'About',
    contact: 'Contact',
    solutions: 'Solutions',
    technologies: 'Technologies',
    
    // Home Page
    heroTitle: 'Transform Your Digital Presence',
    heroSubtitle: 'Cutting-edge Web Design, AI Automation & Digital Solutions for Iraqi Businesses',
    heroCTA: 'Start Your Project',
    heroSecondary: 'Explore Solutions',
    
    // Pain Points
    painPointsTitle: 'Challenges Iraqi Businesses Face',
    painPointsSubtitle: 'We understand your struggles and provide solutions',
    
    lackOnlinePresence: 'Limited Online Presence',
    lackOnlinePresenceDesc: 'Many Iraqi businesses struggle to establish a strong digital footprint',
    
    manualProcesses: 'Time-Consuming Manual Work',
    manualProcessesDesc: 'Repetitive tasks waste valuable time and resources',
    
    poorCustomerEngagement: 'Low Customer Engagement',
    poorCustomerEngagementDesc: 'Difficulty reaching and engaging with modern customers online',
    
    noAutomation: 'Lack of Automation',
    noAutomationDesc: 'Manual processes slow down business growth and efficiency',
    
    outdatedSystems: 'Outdated Technology',
    outdatedSystemsDesc: 'Legacy systems holding your business back from growth',
    
    lowVisibility: 'Poor Search Visibility',
    lowVisibilityDesc: 'Customers can\'t find your business when searching online',
    
    // Tech Stack
    techStackTitle: 'Technologies We Master',
    techStackSubtitle: 'Cutting-edge tools for modern solutions',
    
    frontend: 'Frontend Development',
    frontendDesc: 'React, Next.js, TypeScript - Beautiful, fast interfaces',
    
    backend: 'Backend Development',
    backendDesc: 'Node.js, Python, PostgreSQL - Robust server solutions',
    
    n8nAutomation: 'n8n Workflow Automation',
    n8nAutomationDesc: 'Automate business processes without coding',
    
    aiChatbots: 'AI Chatbots',
    aiChatbotsDesc: '24/7 intelligent customer support with AI',
    
    seoService: 'SEO Optimization',
    seoServiceDesc: 'Rank higher on Google and reach more customers',
    
    agoService: 'AGO (Automated Growth)',
    agoServiceDesc: 'Automated marketing and growth strategies',
    
    // Services
    ourServices: 'Our Services',
    ourServicesSubtitle: 'Comprehensive Digital Solutions',
    
    webDesign: 'Web Design & Development',
    webDesignDesc: 'Modern, responsive websites that convert visitors into customers',
    
    platformDev: 'Platform Development',
    platformDevDesc: 'Custom platforms and web applications built for your business needs',
    
    aiAutomation: 'AI Automation',
    aiAutomationDesc: 'Intelligent automation solutions to streamline your operations',
    
    digitalPresence: 'Digital Presence',
    digitalPresenceDesc: 'Complete digital marketing and branding strategies',
    
    ecommerce: 'E-Commerce Solutions',
    ecommerceDesc: 'Powerful online stores that drive sales and growth',
    
    consulting: 'Digital Consulting',
    consultingDesc: 'Expert guidance for your digital transformation journey',
    
    // About
    aboutTitle: 'About Our Agency',
    aboutSubtitle: 'Your Partner in Digital Excellence',
    aboutText1: 'We are a passionate digital agency in Iraq, dedicated to helping local businesses thrive in the digital age. Our mission is to empower Iraqi entrepreneurs with cutting-edge technology and innovative solutions.',
    aboutText2: 'With expertise in web development, AI automation, and digital marketing, we deliver projects that drive real business results. We understand the unique challenges of the Iraqi market and create tailored solutions.',
    
    ourMission: 'Our Mission',
    missionText: 'To transform the digital landscape in Iraq by providing world-class design, development, and automation services that empower local businesses.',
    
    ourVision: 'Our Vision',
    visionText: 'To be the most trusted digital partner for every Iraqi business looking to thrive in the digital age.',
    
    // Contact
    getInTouch: 'Get In Touch',
    getInTouchSubtitle: "Let's Build Something Amazing Together",
    
    yourName: 'Your Name',
    yourEmail: 'Your Email',
    yourPhone: 'Your Phone',
    yourMessage: 'Your Message',
    sendMessage: 'Send Message',
    
    contactInfo: 'Contact Information',
    location: 'Iraq, Baghdad',
    email: 'info@youragency.iq',
    phone: '+964 XXX XXX XXXX',
    
    formSuccess: 'Message sent successfully!',
    
    // Footer
    footerTagline: 'Empowering Iraqi Businesses with Digital Excellence',
    quickLinks: 'Quick Links',
    followUs: 'Follow Us',
    allRightsReserved: 'All rights reserved',
    
    // Common
    learnMore: 'Learn More',
    viewDetails: 'View Details',
    getStarted: 'Get Started',
    readMore: 'Read More',
  },
  ar: {
    // Navigation
    home: 'الرئيسية',
    services: 'الخدمات',
    about: 'من نحن',
    contact: 'اتصل بنا',
    solutions: 'الحلول',
    technologies: 'التقنيات',
    
    // Home Page
    heroTitle: 'حوّل حضورك الرقمي',
    heroSubtitle: 'تصميم مواقع حديث، أتمتة بالذكاء الاصطناعي وحلول رقمية للشركات العراقية',
    heroCTA: 'ابدأ مشروعك',
    heroSecondary: 'استكشف الحلول',
    
    // Pain Points
    painPointsTitle: 'التحديات التي تواجه الشركات العراقية',
    painPointsSubtitle: 'نحن نفهم مشاكلك ونقدم الحلول',
    
    lackOnlinePresence: 'وجود رقمي محدود',
    lackOnlinePresenceDesc: 'العديد من الشركات العراقية تعاني من ضعف البصمة الرقمية',
    
    manualProcesses: 'عمل يدوي يستهلك الوقت',
    manualProcessesDesc: 'المهام المتكررة تهدر الوقت والموارد الثمينة',
    
    poorCustomerEngagement: 'تفاعل ضعيف مع العملاء',
    poorCustomerEngagementDesc: 'صعوبة في الوصول والتفاعل مع العملاء العصريين عبر الإنترنت',
    
    noAutomation: 'نقص في الأتمتة',
    noAutomationDesc: 'العمليات اليدوية تبطئ نمو الأعمال والكفاءة',
    
    outdatedSystems: 'تقنيات قديمة',
    outdatedSystemsDesc: 'أنظمة قديمة تعيق نمو عملك',
    
    lowVisibility: 'ظهور ضعيف في البحث',
    lowVisibilityDesc: 'العملاء لا يمكنهم العثور على عملك عند البحث عبر الإنترنت',
    
    // Tech Stack
    techStackTitle: 'التقنيات التي نتقنها',
    techStackSubtitle: 'أدوات متطورة لحلول عصرية',
    
    frontend: 'تطوير الواجهة الأمامية',
    frontendDesc: 'React, Next.js, TypeScript - واجهات جميلة وسريعة',
    
    backend: 'تطوير الخادم',
    backendDesc: 'Node.js, Python, PostgreSQL - حلول خادم قوية',
    
    n8nAutomation: 'أتمتة سير العمل n8n',
    n8nAutomationDesc: 'أتمتة العمليات التجارية بدون برمجة',
    
    aiChatbots: 'روبوتات دردشة ذكية',
    aiChatbotsDesc: 'دعم عملاء ذكي على مدار الساعة بالذكاء الاصطناعي',
    
    seoService: 'تحسين محركات البحث',
    seoServiceDesc: 'احتل مرتبة أعلى في جوجل واصل لعملاء أكثر',
    
    agoService: 'النمو الآلي AGO',
    agoServiceDesc: 'استراتيجيات تسويق ونمو آلية',
    
    // Services
    ourServices: 'خدماتنا',
    ourServicesSubtitle: 'حلول رقمية شاملة',
    
    webDesign: 'تصميم وتطوير المواقع',
    webDesignDesc: 'مواقع حديثة ومتجاوبة تحول الزوار إلى عملاء',
    
    platformDev: 'تطوير المنصات',
    platformDevDesc: 'منصات مخصصة وتطبيقات ويب مصممة لاحتياجات عملك',
    
    aiAutomation: 'أتمتة الذكاء الاصطناعي',
    aiAutomationDesc: 'حلول أتمتة ذكية لتبسيط عملياتك',
    
    digitalPresence: 'الحضور الرقمي',
    digitalPresenceDesc: 'استراتيجيات تسويق رقمي وعلامة تجارية متكاملة',
    
    ecommerce: 'حلول التجارة الإلكترونية',
    ecommerceDesc: 'متاجر إلكترونية قوية تدفع المبيعات والنمو',
    
    consulting: 'الاستشارات الرقمية',
    consultingDesc: 'إرشاد خبير لرحلة التحول الرقمي الخاصة بك',
    
    // About
    aboutTitle: 'عن وكالتنا',
    aboutSubtitle: 'شريكك في التميز الرقمي',
    aboutText1: 'نحن وكالة رقمية متحمسة في العراق، مكرسة لمساعدة الشركات المحلية على الازدهار في العصر الرقمي. مهمتنا هي تمكين رواد الأعمال العراقيين بالتكنولوجيا المتطورة والحلول المبتكرة.',
    aboutText2: 'مع الخبرة في تطوير الويب وأتمتة الذكاء الاصطناعي والتسويق الرقمي، نقدم مشاريع تحقق نتائج أعمال حقيقية. نحن نفهم التحديات الفريدة للسوق العراقي ونخلق حلولاً مخصصة.',
    
    ourMission: 'مهمتنا',
    missionText: 'تحويل المشهد الرقمي في العراق من خلال توفير خدمات التصميم والتطوير والأتمتة على مستوى عالمي تمكن الشركات المحلية.',
    
    ourVision: 'رؤيتنا',
    visionText: 'أن نكون الشريك الرقمي الأكثر ثقة لكل شركة عراقية تتطلع إلى الازدهار في العصر الرقمي.',
    
    // Contact
    getInTouch: 'تواصل معنا',
    getInTouchSubtitle: 'لنبني شيئاً مذهلاً معاً',
    
    yourName: 'اسمك',
    yourEmail: 'بريدك الإلكتروني',
    yourPhone: 'رقم هاتفك',
    yourMessage: 'رسالتك',
    sendMessage: 'إرسال الرسالة',
    
    contactInfo: 'معلومات الاتصال',
    location: 'العراق، بغداد',
    email: 'info@youragency.iq',
    phone: '+964 XXX XXX XXXX',
    
    formSuccess: 'تم إرسال الرسالة بنجاح!',
    
    // Footer
    footerTagline: 'تمكين الشركات العراقية بالتميز الرقمي',
    quickLinks: 'روابط سريعة',
    followUs: 'تابعنا',
    allRightsReserved: 'جميع الحقوق محفوظة',
    
    // Common
    learnMore: 'اعرف المزيد',
    viewDetails: 'عرض التفاصيل',
    getStarted: 'ابدأ الآن',
    readMore: 'اقرأ المزيد',
  },
  ku: {
    // Navigation
    home: 'سەرەکی',
    services: 'خزمەتگوزاریەکان',
    about: 'دەربارە',
    contact: 'پەیوەندی',
    solutions: 'چارەسەرەکان',
    technologies: 'تەکنەلۆژیاکان',
    
    // Home Page
    heroTitle: 'ئامادەبوونی دیجیتاڵیت بگۆڕە',
    heroSubtitle: 'دیزاینی وێبسایتی پێشکەوتوو، ئۆتۆماتیکی AI و چارەسەری دیجیتاڵی بۆ بازرگانییەکانی عێراق',
    heroCTA: 'پڕۆژەکەت دەست پێبکە',
    heroSecondary: 'چارەسەرەکان بگەڕێ',
    
    // Pain Points
    painPointsTitle: 'ئەستەمەکانی بازرگانییەکانی عێراق',
    painPointsSubtitle: 'تێگەیشتنمان لە کێشەکانت هەیە و چارەسەر پێشکەش دەکەین',
    
    lackOnlinePresence: 'ئامادەبوونی ئۆنلاین سنووردار',
    lackOnlinePresenceDesc: 'زۆرێک لە بازرگانییەکانی عێراق لە دامەزراندنی شوێنپێی دیجیتاڵی بەهێز تێکۆشان',
    
    manualProcesses: 'کاری دەستی کە کات دەخوات',
    manualProcessesDesc: 'ئەرکە دووبارەبووەکان کات و سەرچاوەی بەنرخ بەفیڕۆ دەدەن',
    
    poorCustomerEngagement: 'بەشداریکردنی لاوازی کڕیار',
    poorCustomerEngagementDesc: 'سەختی لە گەیشتن و بەشداریکردن لەگەڵ کڕیارە مۆدێرنەکان لە ئۆنلاین',
    
    noAutomation: 'نەبوونی ئۆتۆماتیک',
    noAutomationDesc: 'پرۆسەی دەستی گەشەی بازرگانی و کارایی خاو دەکاتەوە',
    
    outdatedSystems: 'تەکنەلۆژیای کۆن',
    outdatedSystemsDesc: 'سیستەمی کۆن گەشەی بازرگانیت ڕێگر دەگرێت',
    
    lowVisibility: 'دیارکردنی لاواز لە گەڕان',
    lowVisibilityDesc: 'کڕیاران ناتوانن بازرگانیەکەت بدۆزنەوە کاتێک لە ئۆنلاین دەگەڕێن',
    
    // Tech Stack
    techStackTitle: 'تەکنەلۆژیاکانی شارەزاین',
    techStackSubtitle: 'ئامێرە پێشکەوتووەکان بۆ چارەسەری مۆدێرن',
    
    frontend: 'پەرەپێدانی ڕووکاری پێشەوە',
    frontendDesc: 'React, Next.js, TypeScript - ڕووکارە جوان و خێراکان',
    
    backend: 'پەرەپێدانی سێرڤەر',
    backendDesc: 'Node.js, Python, PostgreSQL - چارەسەری سێرڤەری بەهێز',
    
    n8nAutomation: 'ئۆتۆماتیکی کارپێکردنی n8n',
    n8nAutomationDesc: 'ئۆتۆماتیکی پرۆسەی بازرگانی بەبێ کۆدنووسین',
    
    aiChatbots: 'چاتبۆتی زیرەک',
    aiChatbotsDesc: 'پشتگیری کڕیاری زیرەک 24/7 بە AI',
    
    seoService: 'باشترکردنی بزوێنەری گەڕان',
    seoServiceDesc: 'پلەی بەرزتر لە گووگڵ و گەیشتن بە کڕیاری زیاتر',
    
    agoService: 'گەشەی ئۆتۆماتیک AGO',
    agoServiceDesc: 'ستراتیژی مارکێتینگ و گەشەی ئۆتۆماتیک',
    
    // Services
    ourServices: 'خزمەتگوزارییەکانمان',
    ourServicesSubtitle: 'چارەسەری دیجیتاڵی تەواو',
    
    webDesign: 'دیزاینی وێبسایت و پەرەپێدان',
    webDesignDesc: 'وێبسایتە نوێ و وەڵامدەرەکان کە سەردانکەران دەگۆڕن بۆ کڕیار',
    
    platformDev: 'پەرەپێدانی پلاتفۆرم',
    platformDevDesc: 'پلاتفۆرمی تایبەت و بەرنامەی وێب کە بۆ پێداویستییەکانی بازرگانیەکەت دروستکراوە',
    
    aiAutomation: 'ئۆتۆماتیکی AI',
    aiAutomationDesc: 'چارەسەری ئۆتۆماتیکی زیرەک بۆ ئاسانکاری کارەکانت',
    
    digitalPresence: 'ئامادەبوونی دیجیتاڵی',
    digitalPresenceDesc: 'ستراتیژی تەواوی مارکێتینگ و براندینگی دیجیتاڵی',
    
    ecommerce: 'چارەسەری ئی-کۆمێرس',
    ecommerceDesc: 'فرۆشگای ئۆنلاین بە هێز کە فرۆشتن و گەشەکردن زیاد دەکات',
    
    consulting: 'ڕاوێژکاری دیجیتاڵی',
    consultingDesc: 'ڕێنمایی شارەزا بۆ گەشتی گۆڕانکاری دیجیتاڵیت',
    
    // About
    aboutTitle: 'دەربارەی ئاژانسەکەمان',
    aboutSubtitle: 'هاوبەشەکەت لە تایبەتمەندی دیجیتاڵی',
    aboutText1: 'ئێمە ئاژانسێکی دیجیتاڵی پڕ بە سۆز لە عێراق، تەرخانکراوین بۆ یارمەتیدانی بازرگانییە ناوخۆییەکان بۆ گەشەکردن لە سەردەمی دیجیتاڵی. ئامانجمان ئەوەیە هێزی کارفەرمایانی عێراقی بە تەکنەلۆژیای پێشکەوتوو و چارەسەری داهێنەرانە زیاد بکەین.',
    aboutText2: 'لەگەڵ شارەزایی لە پەرەپێدانی وێب و ئۆتۆماتیکی AI و مارکێتینگی دیجیتاڵی، پڕۆژەکان ئەنجام دەدەین کە ئەنجامی بازرگانی ڕاستەقینە دەهێنن. تێگەیشتنمان لە تەحەدا تایبەتەکانی بازاڕی عێراق هەیە و چارەسەری تایبەتمەند دروست دەکەین.',
    
    ourMission: 'ئامانجمان',
    missionText: 'گۆڕینی دیمەنی دیجیتاڵی لە عێراق بە دابینکردنی خزمەتگوزاری دیزاین و پەرەپێدان و ئۆتۆماتیکی لە ئاستی جیهانی کە بازرگانییە ناوخۆییەکان بەهێز دەکات.',
    
    ourVision: 'بینینمان',
    visionText: 'بوون بە هاوبەشی دیجیتاڵی متمانەپێکراوترین بۆ هەر بازرگانیەکی عێراقی کە دەیەوێت لە سەردەمی دیجیتاڵیدا گەشە بکات.',
    
    // Contact
    getInTouch: 'پەیوەندیمان پێوە بکە',
    getInTouchSubtitle: 'با پێکەوە شتێکی سەرسوڕهێنەر بنیات بنێین',
    
    yourName: 'ناوت',
    yourEmail: 'ئیمەیڵەکەت',
    yourPhone: 'ژمارە تەلەفۆنەکەت',
    yourMessage: 'نامەکەت',
    sendMessage: 'ناردنی نامە',
    
    contactInfo: 'زانیاری پەیوەندی',
    location: 'عێراق، بەغدا',
    email: 'info@youragency.iq',
    phone: '+964 XXX XXX XXXX',
    
    formSuccess: 'نامەکە بە سەرکەوتوویی نێردرا!',
    
    // Footer
    footerTagline: 'بەهێزکردنی بازرگانییەکانی عێراق بە تایبەتمەندی دیجیتاڵی',
    quickLinks: 'لینکە خێراکان',
    followUs: 'شوێنمان بکەوە',
    allRightsReserved: 'هەموو مافێک پارێزراوە',
    
    // Common
    learnMore: 'زیاتر بزانە',
    viewDetails: 'بینینی وردەکاری',
    getStarted: 'دەست پێبکە ئێستا',
    readMore: 'زیاتر بخوێنەوە',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Apply RTL for Arabic
    if (language === 'ar') {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar';
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = language;
    }
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

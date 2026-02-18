import React, { createContext, useContext, useEffect, useState } from 'react';

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
    lowVisibilityDesc: "Customers can't find your business when searching online",
    
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
    aboutText1: 'We are a passionate digital agency dedicated to helping businesses thrive in the digital age.',
    aboutText2: 'With expertise in web development, AI automation, and digital marketing, we deliver projects that drive real business results.',
    ourMission: 'Our Mission',
    missionText: 'To transform the digital landscape by providing world-class design, development, and automation services that empower local businesses.',
    ourVision: 'Our Vision',
    visionText: 'To be the most trusted digital partner for every business looking to thrive in the digital age.',

    // Team
    meetOurTeam: 'Meet Our Team',
    teamSubtitle: 'The talented people behind your digital success',
    educationLabel: 'Education',
    experienceLabel: 'Experience',
    achievementsLabel: 'Achievements',

    // Dhanmeet
    dhanmeetRole: 'Co-Founder & SDE II @ iknowly',
    dhanmeetEdu1Degree: 'M.Sc. Computer Software Technology',
    dhanmeetEdu1School: 'Hochschule für Technik Stuttgart',
    dhanmeetEdu1Year: '2020–2023',
    dhanmeetExp1Role: 'Co-Founder & Software Developer',
    dhanmeetExp1Company: 'iknowly',
    dhanmeetExp1Years: 'Jul 2023–Present',
    dhanmeetExp2Role: 'Research Assistant',
    dhanmeetExp2Company: 'Hochschule für Technik Stuttgart',
    dhanmeetExp2Years: 'Jun–Nov 2021',
    dhanmeetExp3Role: 'Software Developer',
    dhanmeetExp3Company: 'LocalPay',
    dhanmeetExp3Years: 'Sep 2018–Jul 2020',
    dhanmeetAch1: 'Developed 150+ projects across web & AI domains',
    dhanmeetAch2: 'Building scalable platforms & diving into Agentic AI',
    dhanmeetAch3: 'ML thesis: House price prediction with ensemble methods & PCA/LDA',
    dhanmeetAch4: 'Skills: React.js · Node.js · Python · Docker · Machine Learning · Scikit-learn',

    // Taha
    tahaRole: 'Founder & CEO @ iknowly',
    tahaEdu1Degree: 'MEng Smart City Solutions',
    tahaEdu1School: 'Hochschule für Technik Stuttgart',
    tahaEdu1Year: '2019–2021',
    tahaEdu2Degree: 'Bachelor of Architecture',
    tahaEdu2School: 'University of Petra',
    tahaEdu2Year: '2011–2017',
    tahaExp1Role: 'Founder & CEO',
    tahaExp1Company: 'iknowly (Self-employed)',
    tahaExp1Years: 'Aug 2024–Present',
    tahaAch1: 'Bridging job seekers with top-tier companies across Germany',
    tahaAch2: "Building Germany's leading 1:1 mentorship platform",
    tahaAch3: 'MEng thesis: Smart finance for sustainable infrastructure in developing countries',
    tahaAch4: 'Skills: Leadership · Mentoring · Smart City · Urban Development · Strategy',

    // Values
    valuesTitle: 'Our Values',
    valuePassion: 'Passion',
    valuePassionDesc: 'We love what we do and it shows in our work',
    valueInnovation: 'Innovation',
    valueInnovationDesc: 'Always exploring cutting-edge solutions',
    valueClientFocused: 'Client-Focused',
    valueClientFocusedDesc: 'Your success is our top priority',
    valueExcellence: 'Excellence',
    valueExcellenceDesc: 'Committed to delivering the best quality',
    
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
    aboutText1: 'نحن وكالة رقمية متحمسة مكرسة لمساعدة الشركات على الازدهار في العصر الرقمي.',
    aboutText2: 'مع الخبرة في تطوير الويب وأتمتة الذكاء الاصطناعي والتسويق الرقمي، نقدم مشاريع تحقق نتائج أعمال حقيقية.',
    ourMission: 'مهمتنا',
    missionText: 'تحويل المشهد الرقمي من خلال توفير خدمات التصميم والتطوير والأتمتة على مستوى عالمي تمكن الشركات المحلية.',
    ourVision: 'رؤيتنا',
    visionText: 'أن نكون الشريك الرقمي الأكثر ثقة لكل شركة تتطلع إلى الازدهار في العصر الرقمي.',

    // Team
    meetOurTeam: 'تعرف على فريقنا',
    teamSubtitle: 'الأشخاص الموهوبون وراء نجاحك الرقمي',
    educationLabel: 'التعليم',
    experienceLabel: 'الخبرة',
    achievementsLabel: 'الإنجازات',

    // Dhanmeet
    dhanmeetRole: 'المؤسس المشارك ومطور برمجيات @ iknowly',
    dhanmeetEdu1Degree: 'ماجستير تقنيات برمجيات الحاسوب',
    dhanmeetEdu1School: 'جامعة التكنولوجيا التطبيقية شتوتغارت',
    dhanmeetEdu1Year: '٢٠٢٠–٢٠٢٣',
    dhanmeetExp1Role: 'المؤسس المشارك ومطور برمجيات',
    dhanmeetExp1Company: 'iknowly',
    dhanmeetExp1Years: 'يوليو ٢٠٢٣–حتى الآن',
    dhanmeetExp2Role: 'مساعد باحث',
    dhanmeetExp2Company: 'جامعة التكنولوجيا التطبيقية شتوتغارت',
    dhanmeetExp2Years: 'يونيو–نوفمبر ٢٠٢١',
    dhanmeetExp3Role: 'مطور برمجيات',
    dhanmeetExp3Company: 'LocalPay',
    dhanmeetExp3Years: 'سبتمبر ٢٠١٨–يوليو ٢٠٢٠',
    dhanmeetAch1: 'طوّر أكثر من ١٥٠ مشروعاً في مجالات الويب والذكاء الاصطناعي',
    dhanmeetAch2: 'يبني منصات قابلة للتوسع ويتعمق في الذكاء الاصطناعي الوكيل',
    dhanmeetAch3: 'رسالة ماجستير: التنبؤ بأسعار المنازل بأساليب التعلم الآلي',
    dhanmeetAch4: 'المهارات: React.js · Node.js · Python · Docker · تعلم الآلة · Scikit-learn',

    // Taha
    tahaRole: 'المؤسس والرئيس التنفيذي @ iknowly',
    tahaEdu1Degree: 'ماجستير هندسة حلول المدن الذكية',
    tahaEdu1School: 'جامعة التكنولوجيا التطبيقية شتوتغارت',
    tahaEdu1Year: '٢٠١٩–٢٠٢١',
    tahaEdu2Degree: 'بكالوريوس العمارة',
    tahaEdu2School: 'جامعة البترا',
    tahaEdu2Year: '٢٠١١–٢٠١٧',
    tahaExp1Role: 'المؤسس والرئيس التنفيذي',
    tahaExp1Company: 'iknowly (عمل حر)',
    tahaExp1Years: 'أغسطس ٢٠٢٤–حتى الآن',
    tahaAch1: 'ربط الباحثين عن عمل بالشركات الكبرى في ألمانيا',
    tahaAch2: 'بناء منصة الإرشاد المهني الرائدة في ألمانيا',
    tahaAch3: 'رسالة الماجستير: التمويل الذكي للبنية التحتية المستدامة في الدول النامية',
    tahaAch4: 'المهارات: القيادة · الإرشاد · المدن الذكية · التطوير الحضري · الاستراتيجية',

    // Values
    valuesTitle: 'قيمنا',
    valuePassion: 'الشغف',
    valuePassionDesc: 'نحب ما نفعله وهذا يظهر في عملنا',
    valueInnovation: 'الابتكار',
    valueInnovationDesc: 'نستكشف دائماً الحلول المتطورة',
    valueClientFocused: 'التركيز على العميل',
    valueClientFocusedDesc: 'نجاحك هو أولويتنا القصوى',
    valueExcellence: 'التميز',
    valueExcellenceDesc: 'ملتزمون بتقديم أفضل جودة',
    
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
    aboutText1: 'ئێمە ئاژانسێکی دیجیتاڵی پڕ بە سۆز، تەرخانکراوین بۆ یارمەتیدانی بازرگانییەکان بۆ گەشەکردن لە سەردەمی دیجیتاڵی.',
    aboutText2: 'لەگەڵ شارەزایی لە پەرەپێدانی وێب و ئۆتۆماتیکی AI و مارکێتینگی دیجیتاڵی، پڕۆژەکان ئەنجام دەدەین کە ئەنجامی بازرگانی ڕاستەقینە دەهێنن.',
    ourMission: 'ئامانجمان',
    missionText: 'گۆڕینی دیمەنی دیجیتاڵی بە دابینکردنی خزمەتگوزاری دیزاین و پەرەپێدان و ئۆتۆماتیکی لە ئاستی جیهانی.',
    ourVision: 'بینینمان',
    visionText: 'بوون بە هاوبەشی دیجیتاڵی متمانەپێکراوترین بۆ هەر بازرگانیەکی کە دەیەوێت لە سەردەمی دیجیتاڵیدا گەشە بکات.',

    // Team
    meetOurTeam: 'تیمەکەمان بناسە',
    teamSubtitle: 'خەڵکە بەتوانا ئەوانەی لە پشت سەرکەوتنی دیجیتاڵیت',
    educationLabel: 'خوێندن',
    experienceLabel: 'ئەزموون',
    achievementsLabel: 'دەستکەوتەکان',

    // Dhanmeet
    dhanmeetRole: 'هاوبەڕێزی دامەزرێنەر و پەرەپێدەری نەرمەکاڵا @ iknowly',
    dhanmeetEdu1Degree: 'ماستەر تەکنەلۆژیای نەرمەکاڵای کۆمپیوتەر',
    dhanmeetEdu1School: 'زانکۆی تەکنەلۆژیای کارمەندانەی شتوتگارت',
    dhanmeetEdu1Year: '٢٠٢٠–٢٠٢٣',
    dhanmeetExp1Role: 'هاوبەڕێزی دامەزرێنەر و پەرەپێدەری نەرمەکاڵا',
    dhanmeetExp1Company: 'iknowly',
    dhanmeetExp1Years: 'تەممووز ٢٠٢٣–ئێستا',
    dhanmeetExp2Role: 'یارمەتیدەری توێژینەوە',
    dhanmeetExp2Company: 'زانکۆی تەکنەلۆژیای کارمەندانەی شتوتگارت',
    dhanmeetExp2Years: 'حوزەیران–تشرینی دووەم ٢٠٢١',
    dhanmeetExp3Role: 'پەرەپێدەری نەرمەکاڵا',
    dhanmeetExp3Company: 'LocalPay',
    dhanmeetExp3Years: 'ئەیلوول ٢٠١٨–تەممووز ٢٠٢٠',
    dhanmeetAch1: 'زیاتر لە ١٥٠ پڕۆژەی پەرەپێدراوی لە وێب و AI',
    dhanmeetAch2: 'دروستکردنی پلاتفۆرمی گەورە و کارکردن لەسەر AI وکیل',
    dhanmeetAch3: 'تێزی ماستەر: پێشبینیکردنی نرخی خانوو بە یارمەتی فێربوونی ماکینە',
    dhanmeetAch4: 'شارەزاییەکان: React.js · Node.js · Python · Docker · فێربوونی ماکینە',

    // Taha
    tahaRole: 'دامەزرێنەر و بەڕێوەبەری گشتی @ iknowly',
    tahaEdu1Degree: 'ماستەری ئەندازیاری چارەسەری شاری زیرەک',
    tahaEdu1School: 'زانکۆی تەکنەلۆژیای کارمەندانەی شتوتگارت',
    tahaEdu1Year: '٢٠١٩–٢٠٢١',
    tahaEdu2Degree: 'بەکالۆریۆسی تەلارسازی',
    tahaEdu2School: 'زانکۆی پێترا',
    tahaEdu2Year: '٢٠١١–٢٠١٧',
    tahaExp1Role: 'دامەزرێنەر و بەڕێوەبەری گشتی',
    tahaExp1Company: 'iknowly (کاری سەربەخۆ)',
    tahaExp1Years: 'ئاب ٢٠٢٤–ئێستا',
    tahaAch1: 'پەیوەندیکردنی گەڕاوانی کار لەگەڵ کۆمپانیای باشی ئەڵمانیا',
    tahaAch2: 'دروستکردنی پلاتفۆرمی ئەڵمانیا بۆ ڕاهێنانی ١بۆ١',
    tahaAch3: 'تێزی ماستەر: دارایی زیرەک بۆ بنەماسازی بەردەوام لە وڵاتانی گەشەپێنەکراو',
    tahaAch4: 'شارەزاییەکان: سەرکردایەتی · ڕاهێنان · شاری زیرەک · گەشەپێدانی شارستانی · ستراتیژی',

    // Values
    valuesTitle: 'بەهاکانمان',
    valuePassion: 'خوازین',
    valuePassionDesc: 'ئەوەی دەیکەین خۆشمان پێی دێت و ئەمەش لە کارەکانمان دەردەکەوێت',
    valueInnovation: 'داهێنان',
    valueInnovationDesc: 'هەمیشە لە گەڕانی چارەسەری پێشکەوتوودا',
    valueClientFocused: 'سەرنج لەسەر کڕیار',
    valueClientFocusedDesc: 'سەرکەوتنی تۆ سەرەوەترین ئامانجمانە',
    valueExcellence: 'باشی',
    valueExcellenceDesc: 'پابەندین بە دابینکردنی باشترین کوالیتی',
    
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
    if (language === 'ar' || language === 'ku') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
    document.documentElement.lang = language;
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
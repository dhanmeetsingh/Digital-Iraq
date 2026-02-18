import {
  ArrowRight,
  Bot,
  Clock,
  Code,
  Globe,
  LineChart, Rocket,
  Search,
  Server,
  TrendingDown,
  Users,
  Workflow,
  Zap
} from 'lucide-react';
import { motion } from 'motion/react';
import React from 'react';
import { Link } from 'react-router';
import { SEO } from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';

// Stable floating elements — no Math.random() in render
const FLOAT_ELEMENTS = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  left: `${(i * 10.3) % 100}%`,
  top: `${(i * 7.7) % 100}%`,
  duration: 10 + (i % 10),
  delay: i * 0.5,
}));

export default function Home() {
  const { t } = useLanguage();

  const painPoints = [
    { icon: Globe, title: t('lackOnlinePresence'), description: t('lackOnlinePresenceDesc'), color: 'from-red-500 to-orange-500', link: '/solutions/online-presence' },
    { icon: Clock, title: t('manualProcesses'), description: t('manualProcessesDesc'), color: 'from-orange-500 to-yellow-500', link: '/solutions/manual-processes' },
    { icon: Users, title: t('poorCustomerEngagement'), description: t('poorCustomerEngagementDesc'), color: 'from-yellow-500 to-green-500', link: '/solutions/customer-engagement' },
    { icon: Zap, title: t('noAutomation'), description: t('noAutomationDesc'), color: 'from-green-500 to-cyan-500', link: '/solutions/automation' },
    { icon: TrendingDown, title: t('outdatedSystems'), description: t('outdatedSystemsDesc'), color: 'from-cyan-500 to-blue-500', link: '/solutions/outdated-systems' },
    { icon: Search, title: t('lowVisibility'), description: t('lowVisibilityDesc'), color: 'from-blue-500 to-purple-500', link: '/solutions/search-visibility' },
  ];

  const techStack = [
    { icon: Code, title: t('frontend'), description: t('frontendDesc'), color: 'from-cyan-500 to-blue-500', link: '/tech/frontend', tags: ['React', 'Next.js', 'TypeScript'] },
    { icon: Server, title: t('backend'), description: t('backendDesc'), color: 'from-blue-500 to-indigo-500', link: '/tech/backend', tags: ['Node.js', 'Python', 'PostgreSQL'] },
    { icon: Workflow, title: t('n8nAutomation'), description: t('n8nAutomationDesc'), color: 'from-indigo-500 to-purple-500', link: '/tech/n8n-automation', tags: ['n8n', 'Workflows', 'Integration'] },
    { icon: Bot, title: t('aiChatbots'), description: t('aiChatbotsDesc'), color: 'from-purple-500 to-pink-500', link: '/tech/ai-chatbots', tags: ['AI', 'ChatGPT', 'NLP'] },
    { icon: Search, title: t('seoService'), description: t('seoServiceDesc'), color: 'from-pink-500 to-rose-500', link: '/tech/seo', tags: ['SEO', 'Google', 'Rankings'] },
    { icon: LineChart, title: t('agoService'), description: t('agoServiceDesc'), color: 'from-rose-500 to-orange-500', link: '/tech/ago', tags: ['Automation', 'Growth', 'Marketing'] },
  ];

  return (
    <>
      <SEO
        title="Home"
        description="Transform your digital presence with cutting-edge web design, AI automation, and digital solutions for Iraqi businesses. Expert services in Baghdad, Iraq."
        keywords="web design Iraq, digital agency Baghdad, AI automation Iraq, website development Iraq, Iraqi businesses digital transformation"
      />
      
      <div className="min-h-screen text-white">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
          <div className="max-w-7xl mx-auto text-center w-full">
            {/* Hero text — no opacity:0 initial, just subtle slide */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 px-4"
              initial={{ opacity: 0.3, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                {t('heroTitle')}
              </span>
            </motion.h1>
            
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto px-4"
              initial={{ opacity: 0.3, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            >
              {t('heroSubtitle')}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
              initial={{ opacity: 0.3, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
            >
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-base md:text-lg font-semibold shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/80 transition-shadow flex items-center justify-center gap-2"
                >
                  {t('heroCTA')}
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                </motion.button>
              </Link>
              <Link to="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 border-2 border-cyan-500 rounded-full text-base md:text-lg font-semibold hover:bg-cyan-500/10 transition-colors"
                >
                  {t('heroSecondary')}
                </motion.button>
              </Link>
            </motion.div>

            {/* Floating dots — stable positions */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
              {FLOAT_ELEMENTS.map((el) => (
                <motion.div
                  key={`float-${el.id}`}
                  animate={{ y: [0, -30, 0], rotate: [0, 360] }}
                  transition={{ duration: el.duration, repeat: Infinity, ease: 'linear', delay: el.delay }}
                  style={{ left: el.left, top: el.top }}
                  className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-50"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Section header — always visible */}
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
                <span className="bg-gradient-to-r from-red-400 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                  {t('painPointsTitle')}
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-400">{t('painPointsSubtitle')}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {painPoints.map((pain, index) => (
                <Link key={pain.title} to={pain.link}>
                  <motion.div
                    initial={{ opacity: 0.4, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.07 }}
                    viewport={{ once: true, margin: '-50px' }}
                    whileHover={{ scale: 1.05, y: -10 }}
                    className="relative group cursor-pointer h-full"
                  >
                    <div className="relative p-6 md:p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-lg border border-gray-700/50 hover:border-orange-500/50 transition-all h-full">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`w-14 h-14 md:w-16 md:h-16 mb-6 bg-gradient-to-r ${pain.color} rounded-xl flex items-center justify-center`}
                      >
                        <pain.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                      </motion.div>
                      <h3 className="text-xl md:text-2xl font-bold mb-3 line-clamp-2">{pain.title}</h3>
                      <p className="text-gray-400 mb-4">{pain.description}</p>
                      <div className="flex items-center text-orange-400 font-semibold">
                        {t('learnMore')} <ArrowRight className="w-4 h-4 ml-2 rtl:mr-2 rtl:ml-0 rtl:rotate-180" />
                      </div>
                      <div className={`absolute inset-0 bg-gradient-to-r ${pain.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity blur-xl`} />
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  {t('techStackTitle')}
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-400">{t('techStackSubtitle')}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {techStack.map((tech, index) => (
                <Link key={tech.title} to={tech.link}>
                  <motion.div
                    initial={{ opacity: 0.4, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.07 }}
                    viewport={{ once: true, margin: '-50px' }}
                    whileHover={{ scale: 1.05, y: -10 }}
                    className="relative group cursor-pointer h-full"
                  >
                    <div className="relative p-6 md:p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-lg border border-gray-700/50 hover:border-cyan-500/50 transition-all h-full">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className={`w-14 h-14 md:w-16 md:h-16 mb-6 bg-gradient-to-r ${tech.color} rounded-xl flex items-center justify-center shadow-lg`}
                      >
                        <tech.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                      </motion.div>
                      <h3 className="text-xl md:text-2xl font-bold mb-4 text-white line-clamp-2">{tech.title}</h3>
                      <p className="text-gray-400 leading-relaxed mb-4">{tech.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {tech.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 text-xs font-semibold rounded-full bg-gray-800/50 border border-gray-700/50 text-gray-300">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center text-cyan-400 font-semibold">
                        {t('viewDetails')} <ArrowRight className="w-4 h-4 ml-2 rtl:mr-2 rtl:ml-0 rtl:rotate-180" />
                      </div>
                      <div className={`absolute -inset-1 bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity blur-xl -z-10`} />
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center relative">
            <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-lg border border-cyan-500/30">
              <Rocket className="w-16 h-16 md:w-20 md:h-20 text-cyan-400 mx-auto mb-6" />
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 mb-8">
                Let's create something extraordinary together
              </p>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-base md:text-lg font-semibold shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/80 transition-shadow"
                >
                  {t('getInTouch')}
                </motion.button>
              </Link>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-20 blur-2xl -z-10"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { SEO } from '../../components/SEO';
import { Search, CheckCircle, ArrowRight, Sparkles, TrendingUp, Target } from 'lucide-react';
import { Link } from 'react-router';

export default function SearchVisibility() {
  const { t } = useLanguage();

  const benefits = [
    'Rank #1 on Google for your keywords',
    'Increase organic traffic by 300%+',
    'Appear in local search results',
    'Build authority and trust online',
    'Outrank your competitors',
    'Long-term sustainable growth',
  ];

  const seoServices = [
    { icon: '🔍', title: 'Keyword Research', desc: 'Find what customers search for' },
    { icon: '📝', title: 'Content Optimization', desc: 'SEO-friendly content creation' },
    { icon: '🔗', title: 'Link Building', desc: 'Quality backlinks for authority' },
    { icon: '📍', title: 'Local SEO', desc: 'Dominate local search results' },
  ];

  return (
    <>
      <SEO
        title="Search Visibility & SEO Solutions"
        description="Improve your search engine rankings and get found by customers. Professional SEO services for Iraqi businesses in Baghdad."
        keywords="SEO Iraq, search engine optimization Baghdad, Google ranking Iraq, local SEO Iraq, increase website traffic"
      />
      
      <div className="min-h-screen text-white pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto shadow-2xl shadow-blue-500/50">
                <Search className="w-10 h-10 md:w-12 md:h-12 text-white" />
              </div>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                {t('lowVisibility')}
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Get found by customers when they search for your services
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-3">
                  <Target className="text-blue-500" />
                  The Problem
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  Your competitors appear on the first page of Google while your business is nowhere to be found. Potential customers can't discover your products or services.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Without proper SEO, you're losing thousands of potential customers every month who are actively searching for what you offer.
                </p>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative p-8 rounded-3xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-lg border border-blue-500/30 shadow-2xl"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-red-500/30 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">👻</span>
                    </div>
                    <div>
                      <p className="text-gray-200 font-semibold">Invisible online</p>
                      <p className="text-gray-400 text-sm">Not showing in search results</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-orange-500/30 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">📉</span>
                    </div>
                    <div>
                      <p className="text-gray-200 font-semibold">Low website traffic</p>
                      <p className="text-gray-400 text-sm">Few visitors discovering you</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-yellow-500/30 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">🏆</span>
                    </div>
                    <div>
                      <p className="text-gray-200 font-semibold">Competitors winning</p>
                      <p className="text-gray-400 text-sm">They get all the customers</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Our SEO Services
              </span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {seoServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-lg border border-gray-700/50 hover:border-blue-500/50 transition-all text-center"
                >
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-400 text-sm">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                What You'll Get
              </span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-lg border border-gray-700/50 hover:border-green-500/50 transition-all"
                >
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-300">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="relative p-12 rounded-3xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-lg border border-blue-500/30 shadow-2xl">
              <TrendingUp className="w-16 h-16 text-blue-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Rank on Google?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's get your business found by customers searching for you
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-lg font-semibold shadow-lg shadow-blue-500/50 flex items-center justify-center gap-2"
                  >
                    {t('getStarted')}
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
                <Link to="/tech/seo">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 border-2 border-blue-500 rounded-full text-lg font-semibold hover:bg-blue-500/10 transition-colors"
                  >
                    Learn About Our SEO Process
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

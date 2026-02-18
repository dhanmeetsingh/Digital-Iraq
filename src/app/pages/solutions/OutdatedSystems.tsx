import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { SEO } from '../../components/SEO';
import { TrendingDown, CheckCircle, ArrowRight, Sparkles, RefreshCw, Wrench } from 'lucide-react';
import { Link } from 'react-router';

export default function OutdatedSystems() {
  const { t } = useLanguage();

  const benefits = [
    'Modern cloud-based infrastructure',
    'Lightning-fast performance and reliability',
    'Mobile-friendly and accessible anywhere',
    'Automatic updates and security patches',
    'Seamless integration with modern tools',
    'Scalable architecture that grows with you',
  ];

  const modernizations = [
    { icon: '☁️', title: 'Cloud Migration', desc: 'Move to modern cloud platforms' },
    { icon: '🔄', title: 'System Upgrade', desc: 'Update legacy applications' },
    { icon: '🔗', title: 'API Integration', desc: 'Connect all your systems' },
    { icon: '📱', title: 'Mobile-First', desc: 'Access from any device' },
  ];

  return (
    <>
      <SEO
        title="Outdated Systems Modernization"
        description="Modernize legacy systems and outdated technology. Cloud migration, system upgrades, and digital transformation for Iraqi businesses."
        keywords="system modernization Iraq, legacy system upgrade Baghdad, cloud migration Iraq, digital transformation"
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
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto shadow-2xl shadow-cyan-500/50">
                <TrendingDown className="w-10 h-10 md:w-12 md:h-12 text-white" />
              </div>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                {t('outdatedSystems')}
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Modernize your technology stack and unlock new opportunities
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
                  <Wrench className="text-cyan-500" />
                  The Problem
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  Legacy systems slow down your operations, increase maintenance costs, and prevent you from adopting new technologies and features.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Outdated infrastructure makes you vulnerable to security risks and limits your ability to compete with modern businesses.
                </p>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative p-8 rounded-3xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-lg border border-cyan-500/30 shadow-2xl"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-red-500/30 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">🐌</span>
                    </div>
                    <div>
                      <p className="text-gray-200 font-semibold">Slow performance</p>
                      <p className="text-gray-400 text-sm">Frustrated users and lost productivity</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-orange-500/30 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">💰</span>
                    </div>
                    <div>
                      <p className="text-gray-200 font-semibold">High maintenance</p>
                      <p className="text-gray-400 text-sm">Expensive to keep running</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-yellow-500/30 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">🔒</span>
                    </div>
                    <div>
                      <p className="text-gray-200 font-semibold">Security risks</p>
                      <p className="text-gray-400 text-sm">Vulnerable to modern threats</p>
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
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Modernization Services
              </span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {modernizations.map((mod, index) => (
                <motion.div
                  key={mod.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-lg border border-gray-700/50 hover:border-purple-500/50 transition-all text-center"
                >
                  <div className="text-5xl mb-4">{mod.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{mod.title}</h3>
                  <p className="text-gray-400 text-sm">{mod.desc}</p>
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
                Benefits of Modernization
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
                  className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-lg border border-gray-700/50 hover:border-cyan-500/50 transition-all"
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
            <div className="relative p-12 rounded-3xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-lg border border-cyan-500/30 shadow-2xl">
              <RefreshCw className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Modernize Your Systems?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's transform your outdated technology into a modern powerhouse
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-lg font-semibold shadow-lg shadow-cyan-500/50 flex items-center justify-center gap-2"
                  >
                    {t('getStarted')}
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
                <Link to="/services">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 border-2 border-cyan-500 rounded-full text-lg font-semibold hover:bg-cyan-500/10 transition-colors"
                  >
                    View All Services
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

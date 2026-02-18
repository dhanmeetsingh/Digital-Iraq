import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { SEO } from '../../components/SEO';
import { Globe, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router';

export default function OnlinePresenceSolution() {
  const { t } = useLanguage();

  const benefits = [
    'Professional website design that represents your brand',
    'Mobile-responsive design for all devices',
    'Fast loading speeds for better user experience',
    'SEO optimization to rank on Google',
    'Social media integration',
    'Easy content management system',
  ];

  const process = [
    { step: '01', title: 'Consultation', desc: 'Understanding your business goals' },
    { step: '02', title: 'Design', desc: 'Creating your unique web presence' },
    { step: '03', title: 'Development', desc: 'Building with latest technologies' },
    { step: '04', title: 'Launch', desc: 'Going live and growing online' },
  ];

  return (
    <>
      <SEO
        title="Online Presence Solution"
        description="Establish a strong digital footprint for your Iraqi business with professional website design and development services in Baghdad, Iraq."
        keywords="online presence Iraq, website design Baghdad, digital footprint Iraq, business website Iraq"
      />
      
      <div className="min-h-screen text-white pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
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
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto">
                <Globe className="w-10 h-10 md:w-12 md:h-12 text-white" />
              </div>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-400 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                {t('lackOnlinePresence')}
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
              We help Iraqi businesses establish a strong digital presence that attracts customers and drives growth
            </p>
          </motion.div>

          {/* Problem Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">The Challenge</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  In today's digital age, customers search online before making purchasing decisions. Without a strong online presence, your Iraqi business is invisible to potential customers.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Many local businesses lose opportunities to competitors simply because they can't be found online. Your expertise deserves to be seen.
                </p>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative p-8 rounded-3xl bg-gradient-to-br from-red-500/20 to-orange-500/20 backdrop-blur-lg border border-red-500/30"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">📉</span>
                    </div>
                    <p className="text-gray-300">Lost customers to competitors</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🔍</span>
                    </div>
                    <p className="text-gray-300">Invisible in search results</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">💼</span>
                    </div>
                    <p className="text-gray-300">Missed business opportunities</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Solution Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Our Solution
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
                  className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-lg border border-gray-700/50"
                >
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-300">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Process */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                How We Work
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4"
                  >
                    {item.step}
                  </motion.div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="relative p-12 rounded-3xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-lg border border-cyan-500/30">
              <Sparkles className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Build Your Online Presence?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's create a website that brings you customers
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
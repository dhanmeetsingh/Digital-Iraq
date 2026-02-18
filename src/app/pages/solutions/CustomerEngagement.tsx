import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { SEO } from '../../components/SEO';
import { Users, CheckCircle, ArrowRight, Sparkles, MessageCircle, Heart } from 'lucide-react';
import { Link } from 'react-router';

export default function CustomerEngagement() {
  const { t } = useLanguage();

  const solutions = [
    '24/7 AI chatbots for instant customer support',
    'Personalized email marketing campaigns',
    'Social media management and engagement',
    'Customer feedback and review systems',
    'Live chat and messaging integration',
    'CRM systems to track customer journeys',
  ];

  return (
    <>
      <SEO
        title="Customer Engagement Solutions"
        description="Boost customer engagement with AI chatbots, personalized marketing, and social media management for Iraqi businesses in Baghdad."
        keywords="customer engagement Iraq, AI chatbot Baghdad, social media management Iraq, CRM Iraq"
      />
      
      <div className="min-h-screen text-white pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-20">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="inline-block mb-6">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-r from-yellow-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto shadow-2xl shadow-yellow-500/50">
                <Users className="w-10 h-10 md:w-12 md:h-12 text-white" />
              </div>
            </motion.div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-400 via-green-500 to-emerald-500 bg-clip-text text-transparent">
                {t('poorCustomerEngagement')}
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Connect with your customers in meaningful ways that build loyalty and drive sales
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                How We Help You Engage
              </span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions.map((solution, i) => (
                <motion.div key={solution} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} 
                  transition={{ delay: i * 0.1 }} viewport={{ once: true }}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-lg border border-gray-700/50">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-300">{solution}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center">
            <div className="relative p-12 rounded-3xl bg-gradient-to-r from-yellow-500/10 via-green-500/10 to-emerald-500/10 backdrop-blur-lg border border-green-500/30 shadow-2xl">
              <Heart className="w-16 h-16 text-green-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Build Lasting Customer Relationships</h2>
              <p className="text-xl text-gray-300 mb-8">Let's create engagement strategies that convert</p>
              <Link to="/contact">
                <motion.button whileHover={{ scale: 1.05 }} className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-lg font-semibold shadow-lg shadow-green-500/50 flex items-center justify-center gap-2 mx-auto">
                  {t('getStarted')} <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

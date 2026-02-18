import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { SEO } from '../../components/SEO';
import { Bot, CheckCircle, ArrowRight, Sparkles, MessageCircle } from 'lucide-react';
import { Link } from 'react-router';

export default function AIChatbots() {
  const { t } = useLanguage();

  const capabilities = [
    '24/7 customer support without human agents',
    'Answer questions instantly in multiple languages',
    'Handle thousands of conversations simultaneously',
    'Learn from interactions and improve over time',
    'Integrate with your CRM and databases',
    'Reduce support costs by up to 80%',
  ];

  const useCases = [
    { icon: '💬', title: 'Customer Support', desc: 'Answer FAQs instantly', color: 'from-blue-500 to-cyan-500' },
    { icon: '🛒', title: 'Sales Assistant', desc: 'Help customers buy products', color: 'from-purple-500 to-pink-500' },
    { icon: '📅', title: 'Booking & Scheduling', desc: 'Auto-schedule appointments', color: 'from-green-500 to-emerald-500' },
    { icon: '📊', title: 'Lead Qualification', desc: 'Collect and qualify leads', color: 'from-orange-500 to-yellow-500' },
  ];

  return (
    <>
      <SEO
        title="AI Chatbot Development Services"
        description="Build intelligent AI chatbots for 24/7 customer support. Automated conversations powered by GPT for Iraqi businesses."
        keywords="AI chatbot Iraq, chatbot development Baghdad, AI customer service Iraq, GPT chatbot"
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
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto shadow-2xl shadow-purple-500/50">
                <Bot className="w-10 h-10 md:w-12 md:h-12 text-white" />
              </div>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-rose-500 bg-clip-text text-transparent">
                {t('aiChatbots')}
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              {t('aiChatbotsDesc')}
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">AI-Powered Customer Service</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  Our AI chatbots use advanced natural language processing to understand and respond to customer inquiries just like a human would.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Available 24/7, they handle unlimited conversations simultaneously, providing instant support in English, Arabic, and Kurdish.
                </p>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative p-8 rounded-3xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg border border-purple-500/30 shadow-2xl"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-12 h-12 text-purple-400" />
                    <div>
                      <p className="text-gray-200 font-semibold">Intelligent Conversations</p>
                      <p className="text-gray-400 text-sm">Natural, human-like responses</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">🌍</span>
                    <div>
                      <p className="text-gray-200 font-semibold">Multi-Language</p>
                      <p className="text-gray-400 text-sm">English, Arabic, Kurdish support</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">🧠</span>
                    <div>
                      <p className="text-gray-200 font-semibold">Self-Learning</p>
                      <p className="text-gray-400 text-sm">Gets smarter over time</p>
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
                Use Cases
              </span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="relative p-6 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-lg border border-gray-700/50 hover:border-purple-500/50 transition-all text-center group"
                >
                  <div className="text-5xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{useCase.title}</h3>
                  <p className="text-gray-400 text-sm">{useCase.desc}</p>
                  <div className={`absolute inset-0 bg-gradient-to-r ${useCase.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity blur-xl`} />
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
                Features & Benefits
              </span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={capability}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-lg border border-gray-700/50 hover:border-purple-500/50 transition-all"
                >
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-300">{capability}</p>
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
            <div className="relative p-12 rounded-3xl bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-rose-500/10 backdrop-blur-lg border border-purple-500/30 shadow-2xl">
              <Sparkles className="w-16 h-16 text-purple-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Deploy Your AI Chatbot?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's create an intelligent assistant for your business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-lg font-semibold shadow-lg shadow-purple-500/50 flex items-center justify-center gap-2"
                  >
                    {t('getStarted')}
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
                <Link to="/services">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 border-2 border-purple-500 rounded-full text-lg font-semibold hover:bg-purple-500/10 transition-colors"
                  >
                    View All Technologies
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

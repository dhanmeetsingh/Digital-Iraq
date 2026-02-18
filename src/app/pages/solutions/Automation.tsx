import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { SEO } from '../../components/SEO';
import { Zap, CheckCircle, ArrowRight, Sparkles, Workflow, TrendingUp } from 'lucide-react';
import { Link } from 'react-router';

export default function Automation() {
  const { t } = useLanguage();

  const benefits = [
    '24/7 automated operations without human intervention',
    'Scale your business without hiring more staff',
    'Reduce operational costs by up to 70%',
    'Instant processing and response times',
    'Integration with all your existing tools',
    'Custom workflows tailored to your business',
  ];

  const automationTypes = [
    { icon: '🤖', title: 'AI Chatbots', desc: 'Automated customer service', color: 'from-blue-500 to-cyan-500' },
    { icon: '📧', title: 'Email Marketing', desc: 'Automated campaigns', color: 'from-purple-500 to-pink-500' },
    { icon: '📊', title: 'Data Processing', desc: 'Automatic analysis & reports', color: 'from-green-500 to-emerald-500' },
    { icon: '🔄', title: 'Workflow Automation', desc: 'End-to-end process automation', color: 'from-orange-500 to-yellow-500' },
  ];

  return (
    <>
      <SEO
        title="Business Automation Solutions"
        description="Scale your Iraqi business with intelligent automation. AI-powered workflows, chatbots, and automated processes that work 24/7."
        keywords="business automation Iraq, workflow automation Baghdad, AI automation Iraq, process automation"
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
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-r from-green-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto shadow-2xl shadow-green-500/50">
                <Zap className="w-10 h-10 md:w-12 md:h-12 text-white" />
              </div>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                {t('noAutomation')}
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Transform your business with intelligent automation that works around the clock
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">The Challenge</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  Without automation, your business is limited by human capacity. Growth means hiring more people, increasing costs, and managing complexity.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Modern businesses need to operate 24/7, respond instantly, and scale efficiently. Manual operations can't keep up with customer expectations.
                </p>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative p-8 rounded-3xl bg-gradient-to-br from-green-500/20 to-cyan-500/20 backdrop-blur-lg border border-green-500/30 shadow-2xl"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Workflow className="w-12 h-12 text-green-400" />
                    <div>
                      <p className="text-gray-200 font-semibold">Limited by human hours</p>
                      <p className="text-gray-400 text-sm">Business stops when staff leaves</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-12 h-12 text-cyan-400" />
                    <div>
                      <p className="text-gray-200 font-semibold">Can't scale efficiently</p>
                      <p className="text-gray-400 text-sm">More work = more hiring</p>
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
                Automation Solutions
              </span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {automationTypes.map((type, index) => (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="relative p-6 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-lg border border-gray-700/50 hover:border-cyan-500/50 transition-all text-center group"
                >
                  <div className="text-5xl mb-4">{type.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{type.title}</h3>
                  <p className="text-gray-400 text-sm">{type.desc}</p>
                  <div className={`absolute inset-0 bg-gradient-to-r ${type.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity blur-xl`} />
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
                Benefits of Automation
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
            <div className="relative p-12 rounded-3xl bg-gradient-to-r from-green-500/10 via-cyan-500/10 to-blue-500/10 backdrop-blur-lg border border-green-500/30 shadow-2xl">
              <Sparkles className="w-16 h-16 text-green-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Automate Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's build intelligent automation that scales with you
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full text-lg font-semibold shadow-lg shadow-green-500/50 flex items-center justify-center gap-2"
                  >
                    {t('getStarted')}
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
                <Link to="/services">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 border-2 border-green-500 rounded-full text-lg font-semibold hover:bg-green-500/10 transition-colors"
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

import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { SEO } from '../../components/SEO';
import { Workflow, CheckCircle, ArrowRight, Sparkles, Zap } from 'lucide-react';
import { Link } from 'react-router';

export default function N8nAutomation() {
  const { t } = useLanguage();

  const capabilities = [
    'Connect 300+ apps without coding',
    'Automate workflows across all platforms',
    'Trigger actions based on events',
    'Data transformation and processing',
    'Schedule automated tasks',
    'Error handling and notifications',
  ];

  const workflows = [
    { icon: '📧', title: 'Email to CRM', desc: 'Auto-save contacts from emails', color: 'from-blue-500 to-cyan-500' },
    { icon: '📱', title: 'Social Media', desc: 'Cross-post to all platforms', color: 'from-purple-500 to-pink-500' },
    { icon: '💰', title: 'Payment Processing', desc: 'Auto-invoice and receipts', color: 'from-green-500 to-emerald-500' },
    { icon: '📊', title: 'Reports', desc: 'Automated data compilation', color: 'from-orange-500 to-yellow-500' },
  ];

  return (
    <>
      <SEO
        title="n8n Workflow Automation Services"
        description="Automate business processes without coding using n8n. Connect apps, automate workflows, and boost productivity for Iraqi businesses."
        keywords="n8n automation Iraq, workflow automation Baghdad, no-code automation Iraq, business process automation"
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
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto shadow-2xl shadow-indigo-500/50">
                <Workflow className="w-10 h-10 md:w-12 md:h-12 text-white" />
              </div>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                {t('n8nAutomation')}
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              {t('n8nAutomationDesc')}
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">What is n8n?</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  n8n is a powerful workflow automation tool that connects your apps and services. Automate repetitive tasks without writing a single line of code.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  From simple tasks to complex business processes, n8n makes automation accessible to everyone, saving hours of manual work every day.
                </p>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative p-8 rounded-3xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-lg border border-indigo-500/30 shadow-2xl"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Zap className="w-12 h-12 text-indigo-400" />
                    <div>
                      <p className="text-gray-200 font-semibold">No Coding Required</p>
                      <p className="text-gray-400 text-sm">Visual workflow builder</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">🔗</span>
                    <div>
                      <p className="text-gray-200 font-semibold">300+ Integrations</p>
                      <p className="text-gray-400 text-sm">Connect all your tools</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">⚡</span>
                    <div>
                      <p className="text-gray-200 font-semibold">Real-time Automation</p>
                      <p className="text-gray-400 text-sm">Instant triggers and actions</p>
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
                Popular Workflows
              </span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {workflows.map((workflow, index) => (
                <motion.div
                  key={workflow.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="relative p-6 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-lg border border-gray-700/50 hover:border-indigo-500/50 transition-all text-center group"
                >
                  <div className="text-5xl mb-4">{workflow.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{workflow.title}</h3>
                  <p className="text-gray-400 text-sm">{workflow.desc}</p>
                  <div className={`absolute inset-0 bg-gradient-to-r ${workflow.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity blur-xl`} />
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
                Capabilities
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
                  className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-lg border border-gray-700/50 hover:border-indigo-500/50 transition-all"
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
            <div className="relative p-12 rounded-3xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-lg border border-indigo-500/30 shadow-2xl">
              <Sparkles className="w-16 h-16 text-indigo-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Automate with n8n?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's build powerful workflows that save you hours every day
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-lg font-semibold shadow-lg shadow-indigo-500/50 flex items-center justify-center gap-2"
                  >
                    {t('getStarted')}
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
                <Link to="/solutions/automation">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 border-2 border-indigo-500 rounded-full text-lg font-semibold hover:bg-indigo-500/10 transition-colors"
                  >
                    View Automation Solutions
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

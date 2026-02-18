import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { SEO } from '../../components/SEO';
import { Clock, CheckCircle, ArrowRight, Sparkles, Timer, AlertCircle } from 'lucide-react';
import { Link } from 'react-router';

export default function ManualProcesses() {
  const { t } = useLanguage();

  const benefits = [
    'Automated workflow systems that save hours daily',
    'Eliminate repetitive manual data entry',
    'Reduce human errors and improve accuracy',
    'Free your team for strategic work',
    'Real-time process monitoring and alerts',
    'Seamless integration with existing tools',
  ];

  const automationExamples = [
    { icon: '📧', title: 'Email Automation', desc: 'Auto-respond, sort, and route emails' },
    { icon: '📊', title: 'Report Generation', desc: 'Automated daily/weekly reports' },
    { icon: '🔄', title: 'Data Syncing', desc: 'Keep all systems updated automatically' },
    { icon: '📱', title: 'Social Media', desc: 'Schedule and post automatically' },
  ];

  return (
    <>
      <SEO
        title="Manual Process Automation Solutions"
        description="Stop wasting time on repetitive tasks. Automate manual processes with n8n workflows and AI-powered automation for Iraqi businesses."
        keywords="process automation Iraq, workflow automation Baghdad, eliminate manual work Iraq, business automation"
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
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto shadow-2xl shadow-orange-500/50">
                <Clock className="w-10 h-10 md:w-12 md:h-12 text-white" />
              </div>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-amber-500 bg-clip-text text-transparent">
                {t('manualProcesses')}
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Automate repetitive tasks and reclaim valuable hours every day
            </p>
          </motion.div>

          {/* Problem Visualization */}
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
                  <AlertCircle className="text-orange-500" />
                  The Problem
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  Your team spends hours on repetitive tasks like data entry, sending emails, creating reports, and updating spreadsheets. This manual work drains productivity and increases the risk of costly errors.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Time is money. Every hour spent on manual processes is an hour not spent growing your business or serving customers better.
                </p>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative p-8 rounded-3xl bg-gradient-to-br from-orange-500/20 to-yellow-500/20 backdrop-blur-lg border border-orange-500/30 shadow-2xl"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-orange-500/30 rounded-xl flex items-center justify-center">
                      <Timer className="w-6 h-6 text-orange-300" />
                    </div>
                    <div>
                      <p className="text-gray-200 font-semibold">5-10 hours/week</p>
                      <p className="text-gray-400 text-sm">wasted on repetitive tasks</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-yellow-500/30 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">💸</span>
                    </div>
                    <div>
                      <p className="text-gray-200 font-semibold">High costs</p>
                      <p className="text-gray-400 text-sm">Manual labor expenses add up</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-red-500/30 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">❌</span>
                    </div>
                    <div>
                      <p className="text-gray-200 font-semibold">Human errors</p>
                      <p className="text-gray-400 text-sm">Mistakes in data entry and processing</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Automation Examples */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                What We Can Automate
              </span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {automationExamples.map((example, index) => (
                <motion.div
                  key={example.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-lg border border-gray-700/50 hover:border-cyan-500/50 transition-all text-center"
                >
                  <div className="text-5xl mb-4">{example.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{example.title}</h3>
                  <p className="text-gray-400 text-sm">{example.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                Benefits You'll Gain
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

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="relative p-12 rounded-3xl bg-gradient-to-r from-orange-500/10 via-yellow-500/10 to-amber-500/10 backdrop-blur-lg border border-orange-500/30 shadow-2xl">
              <Sparkles className="w-16 h-16 text-orange-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Automate Your Workflow?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's eliminate manual tasks and boost your productivity
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full text-lg font-semibold shadow-lg shadow-orange-500/50 flex items-center justify-center gap-2"
                  >
                    {t('getStarted')}
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
                <Link to="/tech/n8n-automation">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 border-2 border-orange-500 rounded-full text-lg font-semibold hover:bg-orange-500/10 transition-colors"
                  >
                    Learn About n8n Automation
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

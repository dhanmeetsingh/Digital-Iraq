import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../context/LanguageContext';
import { SEO } from '../../components/SEO';
import { Server, CheckCircle, ArrowRight, Database, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router';

export default function Backend() {
  const { t } = useLanguage();

  const technologies = [
    { name: 'Node.js', desc: 'Fast, scalable JavaScript runtime', icon: '🟢' },
    { name: 'Python', desc: 'Powerful for AI and data processing', icon: '🐍' },
    { name: 'PostgreSQL', desc: 'Reliable relational database', icon: '🐘' },
    { name: 'MongoDB', desc: 'Flexible NoSQL database', icon: '🍃' },
    { name: 'Redis', desc: 'Lightning-fast caching', icon: '⚡' },
    { name: 'RESTful APIs', desc: 'Standard web service architecture', icon: '🔗' },
  ];

  return (
    <>
      <SEO title="Backend Development Services" description="Robust backend development with Node.js, Python, PostgreSQL for Iraqi businesses. Build scalable server infrastructure."
        keywords="backend development Iraq, Node.js Baghdad, Python developer Iraq, API development Iraq" />
      
      <div className="min-h-screen text-white pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-20">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="inline-block mb-6">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto shadow-2xl shadow-blue-500/50">
                <Server className="w-10 h-10 md:w-12 md:h-12 text-white" />
              </div>
            </motion.div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
                {t('backend')}
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">{t('backendDesc')}</p>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Technologies We Use</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologies.map((tech, i) => (
                <motion.div key={tech.name} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }} viewport={{ once: true }} whileHover={{ scale: 1.05, y: -5 }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-lg border border-gray-700/50 hover:border-blue-500/50 transition-all">
                  <div className="text-5xl mb-4">{tech.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{tech.name}</h3>
                  <p className="text-gray-400">{tech.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center">
            <div className="relative p-12 rounded-3xl bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 backdrop-blur-lg border border-blue-500/30 shadow-2xl">
              <Database className="w-16 h-16 text-blue-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Backend?</h2>
              <p className="text-xl text-gray-300 mb-8">Let's create a powerful server infrastructure</p>
              <Link to="/contact">
                <motion.button whileHover={{ scale: 1.05 }} className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full text-lg font-semibold shadow-lg shadow-blue-500/50 flex items-center justify-center gap-2 mx-auto">
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

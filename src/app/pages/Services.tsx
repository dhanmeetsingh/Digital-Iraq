import { Bot, Code, Layers, Lightbulb, Rocket, ShoppingCart, Sparkles, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import React from 'react';
import { SEO } from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';

export default function Services() {
  const { t } = useLanguage();

  const problemsSolved = [
    { problem: 'No Online Presence', solution: 'Professional website design', icon: '🌐' },
    { problem: 'Manual Time-Wasting Tasks', solution: 'Workflow automation & AI', icon: '⚡' },
    { problem: 'Low Customer Engagement', solution: 'AI chatbots & digital marketing', icon: '💬' },
    { problem: 'Invisible on Google', solution: 'SEO optimization & visibility', icon: '🔍' },
    { problem: 'Outdated Systems', solution: 'Modern tech stack upgrade', icon: '🚀' },
    { problem: 'Limited Growth Potential', solution: 'Scalable platforms & automation', icon: '📈' },
  ];

  const services = [
    { icon: Code, title: t('webDesign'), description: t('webDesignDesc'), color: 'from-cyan-500 to-blue-500' },
    { icon: Layers, title: t('platformDev'), description: t('platformDevDesc'), color: 'from-blue-500 to-indigo-500' },
    { icon: Bot, title: t('aiAutomation'), description: t('aiAutomationDesc'), color: 'from-indigo-500 to-purple-500' },
    { icon: TrendingUp, title: t('digitalPresence'), description: t('digitalPresenceDesc'), color: 'from-purple-500 to-pink-500' },
    { icon: ShoppingCart, title: t('ecommerce'), description: t('ecommerceDesc'), color: 'from-pink-500 to-rose-500' },
    { icon: Lightbulb, title: t('consulting'), description: t('consultingDesc'), color: 'from-rose-500 to-orange-500' },
  ];

  return (
    <>
      <SEO
        title="Our Services"
        description="Comprehensive digital services for Iraqi businesses: Web Design, Platform Development, AI Automation, E-Commerce, and Digital Marketing in Baghdad, Iraq."
        keywords="web services Iraq, digital services Baghdad, platform development Iraq, AI automation services, e-commerce Iraq"
      />
      
      <div className="min-h-screen text-white pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">

          {/* Header — always visible */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0.3, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto">
                <Rocket className="w-10 h-10 text-white" />
              </div>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0.3, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                {t('ourServices')}
              </span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto"
              initial={{ opacity: 0.3, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t('ourServicesSubtitle')}
            </motion.p>
          </div>

          {/* Services Grid — always visible */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0.4, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="relative group cursor-pointer"
              >
                <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-lg border border-gray-700/50 hover:border-cyan-500/50 transition-all overflow-hidden">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.1 }}
                    className={`absolute inset-0 bg-gradient-to-br ${service.color}`}
                  />
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`relative w-16 h-16 mb-6 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center shadow-lg`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="relative text-2xl font-bold mb-4 text-white">{service.title}</h3>
                  <p className="relative text-gray-400 leading-relaxed">{service.description}</p>
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="absolute top-4 right-4"
                  >
                    <Sparkles className="w-6 h-6 text-cyan-400" />
                  </motion.div>
                  <div className={`absolute -inset-1 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity blur-xl -z-10`} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Problems We Solve */}
          <div className="mb-32">
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Problems We Solve
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {problemsSolved.map((problem, index) => (
                <motion.div
                  key={problem.problem}
                  initial={{ opacity: 0.4, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.07 }}
                  viewport={{ once: true, margin: '-50px' }}
                  className="text-center"
                >
                  <div className="text-6xl mb-4">{problem.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{problem.problem}</h3>
                  <p className="text-gray-400">{problem.solution}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className="mb-32">
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Our Process
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Discovery', desc: 'Understanding your needs' },
                { step: '02', title: 'Design', desc: 'Creating the vision' },
                { step: '03', title: 'Development', desc: 'Building with precision' },
                { step: '04', title: 'Launch', desc: 'Delivering excellence' },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0.4, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.07 }}
                  viewport={{ once: true, margin: '-50px' }}
                  className="text-center"
                >
                  <div className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-16">
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Technologies We Use
              </span>
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              {['React', 'Next.js', 'Node.js', 'TypeScript', 'Python', 'AI/ML', 'AWS', 'Docker', 'PostgreSQL', 'MongoDB', 'GraphQL', 'REST APIs'].map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0.4, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.04 }}
                  viewport={{ once: true, margin: '-50px' }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="px-6 py-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-lg border border-gray-700/50 hover:border-cyan-500/50 rounded-full text-lg font-semibold transition-all"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
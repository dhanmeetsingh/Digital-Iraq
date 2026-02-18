import { CheckCircle, Mail, MapPin, Phone, Send } from 'lucide-react';
import { motion } from 'motion/react';
import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: t('location'),
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Mail,
      title: t('email'),
      color: 'from-blue-500 to-purple-500',
    },
    {
      icon: Phone,
      title: t('phone'),
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with our digital agency in Baghdad, Iraq. Let's discuss your web design, AI automation, and digital transformation needs."
        keywords="contact digital agency Iraq, web design inquiry Baghdad, digital services contact Iraq, get quote Iraq"
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                {t('getInTouch')}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
              {t('getInTouchSubtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-lg border border-gray-700/50">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-20"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                    >
                      <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-6" />
                    </motion.div>
                    <h3 className="text-3xl font-bold mb-4">{t('formSuccess')}</h3>
                    <p className="text-gray-400">We'll get back to you soon!</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-300">
                        {t('yourName')}
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-300">
                        {t('yourEmail')}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-300">
                        {t('yourPhone')}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-300">
                        {t('yourMessage')}
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all text-white resize-none"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl text-lg font-semibold shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/80 transition-shadow flex items-center justify-center gap-2"
                    >
                      {t('sendMessage')}
                      <Send className="w-5 h-5" />
                    </motion.button>
                  </form>
                )}

                {/* Animated Border */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-20 blur-2xl -z-10"
                />
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-8">
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    {t('contactInfo')}
                  </span>
                </h2>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.05, x: 10 }}
                      className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-lg border border-gray-700/50 hover:border-cyan-500/50 transition-all group"
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`w-14 h-14 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                      >
                        <info.icon className="w-7 h-7 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-semibold mb-1">{info.title}</h3>
                        <p className="text-gray-400">Click to contact</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="relative h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-lg border border-gray-700/50"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                    <p className="text-gray-400 text-lg">Baghdad, Iraq</p>
                  </div>
                </div>
                
                {/* Animated Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
                
                {/* Pulsing Dot */}
                <motion.div
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-cyan-500 rounded-full"
                />
              </motion.div>

              {/* Social Links Placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="flex gap-4"
              >
                {['Facebook', 'Instagram', 'LinkedIn', 'Twitter'].map((social, index) => (
                  <motion.div
                    key={social}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 p-4 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-lg border border-gray-700/50 hover:border-cyan-500/50 transition-all text-center cursor-pointer"
                  >
                    <p className="text-sm font-semibold">{social}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Additional CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-32 text-center"
          >
            <div className="relative p-12 rounded-3xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-lg border border-cyan-500/30">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how we can help transform your business
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-lg font-semibold shadow-lg shadow-cyan-500/50"
                >
                  Schedule a Call
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
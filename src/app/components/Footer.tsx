import React from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight
} from 'lucide-react';

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: t('home') },
    { path: '/services', label: t('services') },
    { path: '/about', label: t('about') },
    { path: '/contact', label: t('contact') },
  ];

  const solutions = [
    { path: '/solutions/online-presence', label: t('lackOnlinePresence') },
    { path: '/solutions/automation', label: t('noAutomation') },
    { path: '/solutions/customer-engagement', label: t('poorCustomerEngagement') },
  ];

  const technologies = [
    { path: '/tech/frontend', label: t('frontend') },
    { path: '/tech/backend', label: t('backend') },
    { path: '/tech/ai-chatbots', label: t('aiChatbots') },
    { path: '/tech/seo', label: t('seoService') },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <footer className="relative mt-20 border-t border-gray-800/50 bg-black/50 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4"
              >
                Digital Iraq
              </motion.div>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {t('footerTagline')}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">{t('location')}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">{t('email')}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">{t('phone')}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">{t('quickLinks')}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2 text-sm"
                    >
                      <ArrowRight className="w-3 h-3" />
                      {link.label}
                    </motion.div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">{t('solutions')}</h3>
            <ul className="space-y-3">
              {solutions.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2 text-sm"
                    >
                      <ArrowRight className="w-3 h-3" />
                      <span className="line-clamp-1">{link.label}</span>
                    </motion.div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">{t('technologies')}</h3>
            <ul className="space-y-3">
              {technologies.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2 text-sm"
                    >
                      <ArrowRight className="w-3 h-3" />
                      <span className="line-clamp-1">{link.label}</span>
                    </motion.div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="pt-8 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm">{t('followUs')}:</span>
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-cyan-500/50 flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all"
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center md:text-right">
              © {currentYear} Digital Iraq. {t('allRightsReserved')}.
            </div>
          </div>
        </div>
      </div>

      {/* Animated Bottom Border */}
      <motion.div
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
      />
    </footer>
  );
}

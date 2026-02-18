import { Award, Briefcase, Eye, GraduationCap, Heart, Target, Trophy, Users, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import React from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { SEO } from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  const values = [
    { icon: Heart, title: 'Passion', description: 'We love what we do and it shows in our work', color: 'from-red-500 to-pink-500' },
    { icon: Zap, title: 'Innovation', description: 'Always exploring cutting-edge solutions', color: 'from-yellow-500 to-orange-500' },
    { icon: Users, title: 'Client-Focused', description: 'Your success is our top priority', color: 'from-blue-500 to-cyan-500' },
    { icon: Award, title: 'Excellence', description: 'Committed to delivering the best quality', color: 'from-purple-500 to-indigo-500' },
  ];

  const teamMembers = [
    {
      name: 'Dhanmeet Nijhawan',
      image: '/team/dhanmeet.png',
      education: [
        { degree: 'M.Sc. Computer Software Technology', school: 'Hochschule für Technik Stuttgart', year: '2020–2023' },
      ],
      experience: [
        { role: 'Co-Founder & Software Developer', company: 'iknowly', years: 'Jul 2023–Present' },
        { role: 'Research Assistant', company: 'Hochschule für Technik Stuttgart', years: 'Jun–Nov 2021' },
        { role: 'Software Developer', company: 'LocalPay', years: 'Sep 2018–Jul 2020' },
      ],
      achievements: [
        'Developed 150+ projects across web & AI domains',
        'Building scalable platforms & diving into Agentic AI',
        'ML thesis: House price prediction with ensemble methods & PCA/LDA',
        'Skills: React.js · Node.js · Python · Docker · Machine Learning · Scikit-learn',
      ],
    },
    {
      name: 'Taha Al-Taie',
      image: '/team/taha.png',
      education: [
        { degree: 'MEng Smart City Solutions', school: 'Hochschule für Technik Stuttgart', year: '2019–2021' },
        { degree: 'Bachelor of Architecture', school: 'University of Petra', year: '2011–2017' },
      ],
      experience: [
        { role: 'Founder & CEO', company: 'iknowly (Self-employed)', years: 'Aug 2024–Present' },
      ],
      achievements: [
        'Bridging job seekers with top-tier companies across Germany',
        'Building Germany\'s leading 1:1 mentorship platform',
        'MEng thesis: Smart finance for sustainable infrastructure in developing countries',
        'Skills: Leadership · Mentoring · Smart City · Urban Development · Strategy',
      ],
    },
  ];

  return (
    <>
      <SEO
        title="About Us"
        description="Learn about our digital agency in Iraq. We're passionate about helping Iraqi businesses thrive with cutting-edge web development, AI automation, and digital marketing."
        keywords="digital agency Iraq, about us, web development team Iraq, Iraqi tech company, Baghdad digital services"
      />
      
      <div className="min-h-screen text-white pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">

          {/* Header — always visible, subtle slide in */}
          <div className="text-center mb-20">
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0.3, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                {t('aboutTitle')}
              </span>
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto"
              initial={{ opacity: 0.3, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              {t('aboutSubtitle')}
            </motion.p>
          </div>

          {/* Mission / Vision — always visible */}
          <div className="mb-32">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative p-8 md:p-10 rounded-3xl bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-lg border border-cyan-500/30 shadow-2xl"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-3">
                  <Target className="text-cyan-400" />
                  {t('ourMission')}
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">{t('missionText')}</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative p-8 md:p-10 rounded-3xl bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-rose-500/10 backdrop-blur-lg border border-purple-500/30 shadow-2xl"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-3">
                  <Eye className="text-purple-400" />
                  {t('ourVision')}
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">{t('visionText')}</p>
              </motion.div>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-32">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Meet Our Team
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 text-center mb-16">
              The talented people behind your digital success
            </p>

            <div className="grid md:grid-cols-2 gap-12">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0.4, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true, margin: '-50px' }}
                  whileHover={{ y: -10 }}
                  className="relative group"
                >
                  <div className="relative p-8 rounded-3xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-lg border border-gray-700/50 hover:border-cyan-500/50 transition-all shadow-2xl">
                    <div className="mb-6">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="relative w-48 h-48 mx-auto rounded-2xl overflow-hidden ring-4 ring-cyan-500/30"
                      >
                        <ImageWithFallback src={member.image} alt={member.name} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      </motion.div>
                    </div>

                    <div className="text-center mb-6">
                      <h3 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        {member.name}
                      </h3>
                      
                    </div>

                    <div className="mb-6">
                      <h4 className="text-xl font-semibold mb-4 flex items-center gap-2 text-cyan-400">
                        <GraduationCap className="w-5 h-5" /> Education
                      </h4>
                      <div className="space-y-3">
                        {member.education.map((edu, i) => (
                          <div key={i} className="pl-4 border-l-2 border-cyan-500/30">
                            <p className="font-semibold text-gray-200">{edu.degree}</p>
                            <p className="text-sm text-gray-400">{edu.school}</p>
                            <p className="text-xs text-gray-500">{edu.year}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-xl font-semibold mb-4 flex items-center gap-2 text-purple-400">
                        <Briefcase className="w-5 h-5" /> Experience
                      </h4>
                      <div className="space-y-3">
                        {member.experience.map((exp, i) => (
                          <div key={i} className="pl-4 border-l-2 border-purple-500/30">
                            <p className="font-semibold text-gray-200">{exp.role}</p>
                            <p className="text-sm text-gray-400">{exp.company}</p>
                            <p className="text-xs text-gray-500">{exp.years}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold mb-4 flex items-center gap-2 text-yellow-400">
                        <Trophy className="w-5 h-5" /> Achievements
                      </h4>
                      <ul className="space-y-2">
                        {member.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-300">
                            <span className="text-yellow-500 mt-1">★</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 rounded-3xl transition-opacity blur-xl -z-10" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-rose-500 bg-clip-text text-transparent">
                Our Values
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0.4, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  viewport={{ once: true, margin: '-50px' }}
                  whileHover={{ scale: 1.05 }}
                  className="p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-lg border border-gray-700/50 hover:border-cyan-500/50 transition-all"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 mb-6 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center shadow-lg`}
                  >
                    <value.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
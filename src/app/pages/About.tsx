import { Award, Briefcase, Eye, GraduationCap, Heart, Target, Trophy, Users, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import React from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { SEO } from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  const values = [
    { icon: Heart, titleKey: 'valuePassion', descKey: 'valuePassionDesc', color: 'from-red-500 to-pink-500' },
    { icon: Zap, titleKey: 'valueInnovation', descKey: 'valueInnovationDesc', color: 'from-yellow-500 to-orange-500' },
    { icon: Users, titleKey: 'valueClientFocused', descKey: 'valueClientFocusedDesc', color: 'from-blue-500 to-cyan-500' },
    { icon: Award, titleKey: 'valueExcellence', descKey: 'valueExcellenceDesc', color: 'from-purple-500 to-indigo-500' },
  ];

  const teamMembers = [
    {
      name: 'Dhanmeet Nijhawan',
      image: '/team/dhanmeet.png',
      roleKey: 'dhanmeetRole',
      education: [
        { degreeKey: 'dhanmeetEdu1Degree', schoolKey: 'dhanmeetEdu1School', yearKey: 'dhanmeetEdu1Year' },
      ],
      experience: [
        { roleKey: 'dhanmeetExp1Role', companyKey: 'dhanmeetExp1Company', yearsKey: 'dhanmeetExp1Years' },
        { roleKey: 'dhanmeetExp2Role', companyKey: 'dhanmeetExp2Company', yearsKey: 'dhanmeetExp2Years' },
        { roleKey: 'dhanmeetExp3Role', companyKey: 'dhanmeetExp3Company', yearsKey: 'dhanmeetExp3Years' },
      ],
      achievementKeys: ['dhanmeetAch1', 'dhanmeetAch2', 'dhanmeetAch3', 'dhanmeetAch4'],
    },
    {
      name: 'Taha Al-Taie',
      image: '/team/taha.png',
      roleKey: 'tahaRole',
      education: [
        { degreeKey: 'tahaEdu1Degree', schoolKey: 'tahaEdu1School', yearKey: 'tahaEdu1Year' },
        { degreeKey: 'tahaEdu2Degree', schoolKey: 'tahaEdu2School', yearKey: 'tahaEdu2Year' },
      ],
      experience: [
        { roleKey: 'tahaExp1Role', companyKey: 'tahaExp1Company', yearsKey: 'tahaExp1Years' },
      ],
      achievementKeys: ['tahaAch1', 'tahaAch2', 'tahaAch3', 'tahaAch4'],
    },
  ];

  return (
    <>
      <SEO
        title="About Us"
        description="Learn about our digital agency. We're passionate about helping businesses thrive with cutting-edge web development, AI automation, and digital marketing."
        keywords="digital agency, about us, web development team, tech company, digital services"
      />

      <div className="min-h-screen text-white pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
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

          {/* Mission / Vision */}
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
                {t('meetOurTeam')}
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 text-center mb-16">
              {t('teamSubtitle')}
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

                    {/* Photo */}
                    <div className="mb-6">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="relative w-48 h-48 mx-auto rounded-2xl overflow-hidden ring-4 ring-cyan-500/30"
                      >
                        <ImageWithFallback src={member.image} alt={member.name} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      </motion.div>
                    </div>

                    {/* Name & Role */}
                    <div className="text-center mb-6">
                      <h3 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        {member.name}
                      </h3>
                      <p className="text-gray-400 text-base">{t(member.roleKey)}</p>
                    </div>

                    {/* Education */}
                    <div className="mb-6">
                      <h4 className="text-xl font-semibold mb-4 flex items-center gap-2 text-cyan-400">
                        <GraduationCap className="w-5 h-5" /> {t('educationLabel')}
                      </h4>
                      <div className="space-y-3">
                        {member.education.map((edu, i) => (
                          <div key={i} className="pl-4 border-l-2 border-cyan-500/30">
                            <p className="font-semibold text-gray-200">{t(edu.degreeKey)}</p>
                            <p className="text-sm text-gray-400">{t(edu.schoolKey)}</p>
                            <p className="text-xs text-gray-500">{t(edu.yearKey)}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Experience */}
                    <div className="mb-6">
                      <h4 className="text-xl font-semibold mb-4 flex items-center gap-2 text-purple-400">
                        <Briefcase className="w-5 h-5" /> {t('experienceLabel')}
                      </h4>
                      <div className="space-y-3">
                        {member.experience.map((exp, i) => (
                          <div key={i} className="pl-4 border-l-2 border-purple-500/30">
                            <p className="font-semibold text-gray-200">{t(exp.roleKey)}</p>
                            <p className="text-sm text-gray-400">{t(exp.companyKey)}</p>
                            <p className="text-xs text-gray-500">{t(exp.yearsKey)}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="text-xl font-semibold mb-4 flex items-center gap-2 text-yellow-400">
                        <Trophy className="w-5 h-5" /> {t('achievementsLabel')}
                      </h4>
                      <ul className="space-y-2">
                        {member.achievementKeys.map((key, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-300">
                            <span className="text-yellow-500 mt-1">★</span>
                            <span>{t(key)}</span>
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
                {t('valuesTitle')}
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.titleKey}
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
                  <h3 className="text-2xl font-bold mb-3">{t(value.titleKey)}</h3>
                  <p className="text-gray-400">{t(value.descKey)}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
import React, { useState } from 'react';
import { FileText, Download, Calendar, Users, Heart, Target, Award, TrendingUp, Globe, Sparkles, ChevronRight, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const AnnualReports = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const reports = [
    {
        year: '2024-2025',
        title: 'Strengthening Foundations',
        description: 'A year focused on consolidating progress, enhancing operational excellence, and building stronger connections with communities for lasting impact.',
        highlights: ['750+ beneficiaries served', '15 programs sustained and scaled', '92% efficiency increase', '5 strategic global collaborations'],
        filename: '2081-82 Annual Report 2024-2025.pptx',
        isLatest: true,
        color: 'from-blue-400 to-indigo-500',
        bgPattern: 'bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50'
    },
    {
      year: '2023-2024',
      title: 'Expanding Horizons',
      description: 'A transformative year of unprecedented growth, innovation, and community impact that reshaped our approach to sustainable development.',
      highlights: ['500+ beneficiaries served', '12 new programs launched', '85% efficiency increase', '3 international partnerships'],
      filename: 'Annual Rport 2023-24.pptx',
      color: 'from-amber-400 to-yellow-500',
      bgPattern: 'bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50'
    },
    {
      year: '2022-2023',
      title: 'Building Bridges',
      description: 'Strengthening community connections through innovative partnerships and sustainable development programs that create lasting change.',
      highlights: ['400+ lives impacted', '8 strategic partnerships', '92% goal achievement', '5 community centers built'],
      filename: '2022-23 Annual Report 2079-80.pptx',
      color: 'from-yellow-500 to-amber-600',
      bgPattern: 'bg-gradient-to-br from-yellow-50 via-amber-50 to-yellow-100'
    },
    {
      year: '2021-2022',
      title: 'Resilience & Recovery',
      description: 'Demonstrating remarkable adaptability and strength while maintaining unwavering focus on our core mission and values.',
      highlights: ['300+ families supported', '95% program retention', '6 prestigious awards', '15 volunteer initiatives'],
      filename: 'Annaul Report 2021-22 2078-79.pptx',
      color: 'from-amber-500 to-orange-500',
      bgPattern: 'bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50'
    },
    {
      year: '2020-2021',
      title: 'Unity in Crisis',
      description: 'Rising to meet unprecedented global challenges with innovative solutions, digital transformation, and unwavering commitment.',
      highlights: ['250+ emergency responses', '100% digital transition', '20+ virtual programs', '98% stakeholder satisfaction'],
      filename: '2020-21 Annual Report 2077-78.pptx',
      color: 'from-yellow-600 to-amber-700',
      bgPattern: 'bg-gradient-to-br from-yellow-100 via-amber-100 to-orange-100'
    }
  ];

  const handleReportClick = (filename) => {
    const fileUrl = `/public/${filename}`;
    window.open(fileUrl, '_blank');
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const sparkleAnimation = {
    scale: [1, 1.2, 1],
    rotate: [0, 180, 360],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 relative overflow-hidden mt-0 md:mt-25 ">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none ">
        <motion.div 
          className="absolute -top-4 -left-4 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={floatingAnimation}
        />
        <motion.div 
          className="absolute top-1/3 -right-4 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{...floatingAnimation, transition: {...floatingAnimation.transition, delay: 1}}}
        />
        <motion.div 
          className="absolute -bottom-8 left-1/3 w-80 h-80 bg-orange-200  rounded-full mix-blend-multiply filter blur-xl opacity-30"
          animate={{...floatingAnimation, transition: {...floatingAnimation.transition, delay: 2}}}
        />
      </div>

      {/* Floating Sparkles */}
      <div className="absolute inset-0 pointer-events-none ">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={sparkleAnimation}
          >
            <Sparkles className="w-4 h-4 text-yellow-400 opacity-60" />
          </motion.div>
        ))}
      </div>

      {/* Header Section */}
      <motion.div 
        className="relative bg-gradient-to-r from-white via-yellow-50 to-amber-50 shadow-2xl border-gradient-to-r from-yellow-400 to-amber-500 "
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative   ">
          <div className="text-center ">
            <motion.div
              className="flex justify-center mb-8 "
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 100, damping: 10 }}
            >
              <div className="relative  ">
                <div className="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 p-5 rounded-3xl shadow-2xl">
                  <FileText className="h-10 w-10 text-white " />
                </div>
                <motion.div 
                  className="absolute -top-2 -right-2 bg-yellow-300 rounded-full p-2"
                  animate={sparkleAnimation}
                >
                  <Award className="h-6 w-6 text-yellow-700" />
                </motion.div>
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-gray-800 via-yellow-600 to-amber-700 bg-clip-text text-transparent mb-6 "
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Annual <span >Reports
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-0  rounded-full  "
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                />
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-md md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Embark on a journey through our <span className="text-yellow-600 font-bold">transformative impact</span>, 
              unwavering transparency, and relentless dedication to creating 
              <span className="text-amber-600 font-bold"> positive change</span> in communities worldwide.
            </motion.p>

            <motion.div
              className="mt-8 "
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <div className="inline-flex items-center bg-gradient-to-r from-yellow-100 to-amber-100 px-6 py-3 rounded-full border border-yellow-300 shadow-lg">
                <Globe className="w-5 h-5 text-yellow-600 mr-2" />
                <span className="text-yellow-700 font-semibold">Impacting Lives • Creating Change • Building Futures</span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Enhanced Stats Section */}
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 ">
          {[
            { icon: Users, value: "1,450+", label: "Lives Transformed", color: "from-yellow-400 to-amber-500" },
            { icon: Heart, value: "41", label: "Programs Launched", color: "from-amber-400 to-orange-500" },
            { icon: Target, value: "93%", label: "Success Rate", color: "from-yellow-500 to-amber-600" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 text-center border border-white/50 group-hover:shadow-3xl transition-all duration-500">
                <div className={`bg-gradient-to-r ${stat.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="h-10 w-10 text-white" />
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-3">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium text-lg">{stat.label}</div>
                
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-amber-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Enhanced Reports Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-yellow-600 bg-clip-text text-transparent mb-4">
            Our Journey Through Time
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Each report tells a unique story of growth, resilience, and unwavering commitment to our mission.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          {reports.map((report, index) => (
            <motion.div
              key={report.year}
              className="group cursor-pointer relative"
              onClick={() => handleReportClick(report.filename)}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 + index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.02, y: -8 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className={`${report.bgPattern} rounded-2xl shadow-xl overflow-hidden group-hover:shadow-2xl transition-all duration-500 border-2 border-white/50 group-hover:border-yellow-400/50 relative`}>
                {report.isLatest && (
                  <motion.div 
                    className="absolute top-3 right-3 z-10"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 2.5, type: "spring", stiffness: 200 }}
                  >
                    <div className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center">
                      <Sparkles className="w-3 h-3 mr-1" />
                      Latest
                    </div>
                  </motion.div>
                )}
                
                <div className="p-6 relative">
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
                    <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full transform rotate-45" />
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <motion.div 
                        className={`bg-gradient-to-r ${report.color} p-3 rounded-xl shadow-lg`}
                        whileHover={{ rotate: 5 }}
                      >
                        <Calendar className="h-5 w-5 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                          {report.year}
                        </h3>
                        <p className="text-yellow-600 font-bold text-sm">{report.title}</p>
                      </div>
                    </div>
                    
                    <AnimatePresence>
                      {hoveredCard === index && (
                        <motion.div
                          className="bg-gradient-to-r from-yellow-400 to-amber-500 p-2 rounded-xl shadow-xl"
                          initial={{ scale: 0, rotate: -90 }}
                          animate={{ scale: 1, rotate: 0 }}
                          exit={{ scale: 0, rotate: 90 }}
                          transition={{ type: "spring", stiffness: 200 }}
                        >
                          <Eye className="h-4 w-4 text-white" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed text-sm font-medium">
                    {report.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center mb-3">
                      <TrendingUp className="w-4 h-4 text-yellow-600 mr-2" />
                      <h4 className="font-bold text-gray-800 text-sm">Key Achievements:</h4>
                    </div>
                    {report.highlights.slice(0, 3).map((highlight, idx) => (
                      <motion.div 
                        key={idx} 
                        className="flex items-center space-x-3 group-hover:translate-x-1 transition-transform duration-300"
                        style={{ transitionDelay: `${idx * 50}ms` }}
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full shadow-sm flex-shrink-0" />
                        <span className="text-gray-700 font-medium text-xs">{highlight}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-white/50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="bg-gradient-to-r from-yellow-400 to-amber-500 p-2 rounded-lg">
                          <Download className="h-3 w-3 text-white" />
                        </div>
                        <div>
                          <div className="font-bold text-gray-800 text-sm">View Report</div>
                          <div className="text-xs text-gray-600">PowerPoint File</div>
                        </div>
                      </div>
                      <ChevronRight className="h-4 w-4 text-yellow-600 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Enhanced Footer CTA */}
      <motion.div 
        className="relative bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 py-20 overflow-hidden"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.8 }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black/10 ">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 to-orange-600/20" />
        </div>

        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <motion.div
            className="mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 3, type: "spring", stiffness: 100 }}
          >
            <div className="inline-block bg-white/20 backdrop-blur-sm p-4 rounded-full">
              <Globe className="w-12 h-12 text-white" />
            </div>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.2, duration: 0.8 }}
          >
            Stay Connected with Our Journey
          </motion.h2>
          
          <motion.p 
            className="text-yellow-100 mb-10 text-xl leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.4, duration: 0.8 }}
          >
            Be the first to receive our latest reports, impact stories, and updates on groundbreaking initiatives that are changing lives around the world.
          </motion.p>
          
          <Link to='/contact'>
          <motion.button 
            className="bg-white text-yellow-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 group"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.6, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center">
              Subscribe for Updates
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default AnnualReports;
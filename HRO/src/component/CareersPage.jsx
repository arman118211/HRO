import React from 'react';
import { 
  Users, 
  Heart, 
  Globe, 
  Briefcase, 
  Award, 
  ChevronRight, 
  Mail, 
  Phone, 
  Send, 
  Target, 
  Lightbulb, 
  HandHeart,
  ArrowRight,
  Upload
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CareersPage = () => {
  const benefits = [
    {
      icon: Heart,
      title: 'Meaningful Work',
      description: 'Make a real difference in communities and contribute to lasting social change.',
      color: 'from-red-400 to-pink-500'
    },
    {
      icon: Users,
      title: 'Professional Growth',
      description: 'Access to training programs, conferences, and skill development opportunities.',
      color: 'from-blue-400 to-indigo-500'
    },
    {
      icon: Users,
      title: 'Collaborative Culture',
      description: 'Work with passionate, like-minded individuals in a supportive environment.',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: Target,
      title: 'Work-Life Balance',
      description: 'Flexible working arrangements and emphasis on personal well-being.',
      color: 'from-purple-400 to-violet-500'
    },
    {
      icon: Award,
      title: 'Competitive Benefits',
      description: 'Comprehensive health coverage, retirement plans, and performance bonuses.',
      color: 'from-yellow-400 to-amber-500'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Opportunity to work on international projects and expand your worldview.',
      color: 'from-teal-400 to-cyan-500'
    }
  ];

  const values = [
    {
      icon: HandHeart,
      title: 'Compassion',
      description: 'We lead with empathy and understanding in all our interactions.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We embrace creative solutions to tackle complex social challenges.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of working together towards common goals.'
    },
    {
      icon: Target,
      title: 'Impact',
      description: 'We measure our success by the positive change we create.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 mt-0 md:mt-20 overflow-hidden">
      {/* Hero Section */}
      <motion.div 
        className="bg-gradient-to-r from-white via-yellow-50 to-amber-50 shadow-xl border-b-4 border-yellow-400"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <motion.div
              className="flex justify-center mb-8"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
            >
              <div className="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 p-6 rounded-3xl shadow-2xl">
                <Briefcase className="h-10 w-10 text-white" />
              </div>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-gray-800 via-yellow-600 to-amber-700 bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Join Our Mission
                
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Be part of something bigger. Join our team of passionate changemakers and help us create 
              <span className="text-yellow-600 font-bold"> lasting impact</span> in communities around the world.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <Link to='/donate'>
              <button className="border-2 border-yellow-400 text-yellow-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 hover:text-white transition-all duration-300 flex items-center">
                Donate
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Why Join Us Section */}
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-yellow-600 bg-clip-text text-transparent mb-4">
            Why Choose Us?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the benefits of joining a team that's committed to making a difference while investing in your growth.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
              whileHover={{ y: -10 }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 text-center border border-white/50 group-hover:shadow-2xl transition-all duration-500 h-full">
                <div className={`bg-gradient-to-r ${benefit.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Our Values Section */}
      <div className="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-xl text-yellow-100 max-w-3xl mx-auto">
              These principles guide everything we do and define who we are as an organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-yellow-100 leading-relaxed text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Application Form Section */}
      <div id="application-form" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 ">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-yellow-600 bg-clip-text text-transparent mb-4">
            Apply to Join Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to make a difference? Fill out the form below and we'll get back to you within 48 hours.
          </p>
        </div>

        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-yellow-100">
            <form className="space-y-8">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-3 text-lg">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-4 border-2 border-yellow-200 rounded-xl focus:border-yellow-400 focus:outline-none transition-all duration-300 text-lg"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-3 text-lg">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-4 border-2 border-yellow-200 rounded-xl focus:border-yellow-400 focus:outline-none transition-all duration-300 text-lg"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-3 text-lg">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-4 border-2 border-yellow-200 rounded-xl focus:border-yellow-400 focus:outline-none transition-all duration-300 text-lg"
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-3 text-lg">
                    Location *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-4 border-2 border-yellow-200 rounded-xl focus:border-yellow-400 focus:outline-none transition-all duration-300 text-lg"
                    placeholder="City, State"
                    required
                  />
                </div>
              </div>

              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-3 text-lg">
                    Position of Interest *
                  </label>
                  <select className="w-full px-4 py-4 border-2 border-yellow-200 rounded-xl focus:border-yellow-400 focus:outline-none transition-all duration-300 text-lg" required>
                    <option value="">Select a position</option>
                    <option value="program-manager">Program Manager</option>
                    <option value="fundraising-coordinator">Fundraising Coordinator</option>
                    <option value="field-operations">Field Operations Specialist</option>
                    <option value="communications-manager">Communications Manager</option>
                    <option value="senior-program-officer">Senior Program Officer</option>
                    <option value="grant-writer">Grant Writer</option>
                    <option value="other">Other / General Application</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-3 text-lg">
                    Years of Experience *
                  </label>
                  <select className="w-full px-4 py-4 border-2 border-yellow-200 rounded-xl focus:border-yellow-400 focus:outline-none transition-all duration-300 text-lg" required>
                    <option value="">Select experience</option>
                    <option value="0-1">0-1 years</option>
                    <option value="2-3">2-3 years</option>
                    <option value="4-5">4-5 years</option>
                    <option value="6-8">6-8 years</option>
                    <option value="9+">9+ years</option>
                  </select>
                </div>
              </div>

              
              <div>
                <label className="block text-gray-700 font-semibold mb-3 text-lg">
                  Cover Letter / Why do you want to join us? *
                </label>
                <textarea
                  rows="6"
                  className="w-full px-4 py-4 border-2 border-yellow-200 rounded-xl focus:border-yellow-400 focus:outline-none transition-all duration-300 text-lg resize-none"
                  placeholder="Tell us about yourself, your passion for social work, and why you want to join our mission..."
                  required
                ></textarea>
              </div>

              
              <div>
                <label className="block text-gray-700 font-semibold mb-3 text-lg">
                  Additional Information
                </label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-4 border-2 border-yellow-200 rounded-xl focus:border-yellow-400 focus:outline-none transition-all duration-300 text-lg resize-none"
                  placeholder="Any additional information you'd like to share (optional)"
                ></textarea>
              </div>

              
              <div className="text-center pt-8">
                <motion.button
                  type="submit"
                  className="bg-gradient-to-r from-yellow-400 to-amber-500 text-white px-12 py-4 rounded-full font-bold text-xl hover:from-yellow-500 hover:to-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center mx-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Submit Application
                  <Send className="ml-3 h-6 w-6" />
                </motion.button>
                <p className="text-gray-500 mt-4 text-lg">
                  We'll review your application and get back to you within 48 hours.
                </p>
              </div>
            </form>
          </div>
        </motion.div>
      </div>

     
      <div className="bg-gradient-to-br from-yellow-50 to-amber-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-yellow-600 bg-clip-text text-transparent mb-4">
              Application Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined process ensures we find the right fit while respecting your time and effort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Apply Online', description: 'Submit your application through our careers portal with your resume and cover letter.' },
              { step: '02', title: 'Initial Review', description: 'Our HR team reviews applications and shortlists candidates based on requirements.' },
              { step: '03', title: 'Interview', description: 'Selected candidates participate in video or in-person interviews with our team.' },
              { step: '04', title: 'Join the Team', description: 'Successful candidates receive an offer and begin their onboarding journey with us.' }
            ].map((process, index) => (
              <motion.div
                key={index}
                className="text-center relative"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + index * 0.2 }}
              >
                <div className="bg-gradient-to-r from-yellow-400 to-amber-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl shadow-lg">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{process.title}</h3>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
                
                {index < 3 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-yellow-400 to-amber-500 opacity-30 transform -translate-y-1/2" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      {/* <div className="bg-gradient-to-r from-gray-800 to-gray-900 py-20 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            className="mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 2, type: "spring", stiffness: 100 }}
          >
            <div className="inline-block bg-gradient-to-r from-yellow-400 to-amber-500 p-4 rounded-full">
              <Mail className="w-12 h-12 text-white" />
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Make a Difference?
          </h2>
          
          <p className="text-gray-300 mb-10 text-xl leading-relaxed max-w-2xl mx-auto">
            Don't see the perfect role? We're always interested in hearing from passionate individuals. 
            Send us your resume and let's explore possibilities together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-yellow-400 to-amber-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-yellow-500 hover:to-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center">
              Send General Application
              <Send className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-full font-bold text-lg hover:border-yellow-400 hover:text-yellow-400 transition-all duration-300 flex items-center justify-center">
              Contact HR Team
              <Phone className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default CareersPage;
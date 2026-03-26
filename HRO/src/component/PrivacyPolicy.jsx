import React, { useState, useEffect } from 'react';
import { Shield, Lock, Eye, Users, FileText, Bell, ChevronRight, Globe, Heart, Database, UserCheck, Mail, Phone, MapPin, Clock, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const sections = [
    {
      id: 1,
      icon: FileText,
      title: "Information Collection",
      subtitle: "What data we gather and why",
      content: "We collect personal information including your name, email address, phone number, postal address, and payment information when you make donations or register for our programs. We also gather demographic information, communication preferences, and feedback you provide. Additionally, we automatically collect technical data such as IP addresses, browser types, device information, and website usage patterns through cookies and analytics tools to enhance user experience and improve our services.",
      color: "from-amber-400 to-orange-500"
    },
    {
      id: 2,
      icon: Database,
      title: "Data Usage & Purpose",
      subtitle: "How we utilize your information",
      content: "Your information enables us to process donations securely, issue tax receipts, send program updates and impact reports, respond to inquiries, personalize your experience, and improve our services. We use data analytics to understand donor behavior, optimize fundraising campaigns, and measure the effectiveness of our programs. We may also use your information for research purposes to enhance our community impact and develop new initiatives that align with our mission.",
      color: "from-yellow-400 to-amber-500"
    },
    {
      id: 3,
      icon: Lock,
      title: "Security Measures",
      subtitle: "Protecting your data",
      content: "We implement comprehensive security protocols including SSL/TLS encryption for all data transmissions, secure servers with firewall protection, regular security audits and penetration testing, encrypted database storage, and multi-factor authentication for internal access. Our staff undergoes regular security training, and we maintain strict access controls. Payment information is processed through PCI-DSS compliant payment gateways, and we never store complete credit card numbers on our servers.",
      color: "from-orange-400 to-red-500"
    },
    {
      id: 4,
      icon: Users,
      title: "Third-Party Sharing",
      subtitle: "When and how we share data",
      content: "We do not sell or rent your personal information to any third parties. We may share data with trusted service providers who assist with payment processing, email communications, website hosting, and data analytics—all bound by strict confidentiality agreements. We may share information with partner organizations for collaborative programs (with your consent), legal authorities when required by law, or auditors and regulatory bodies for compliance purposes. You can opt out of data sharing for marketing purposes at any time.",
      color: "from-amber-500 to-yellow-600"
    },
    {
      id: 5,
      icon: UserCheck,
      title: "Your Rights & Control",
      subtitle: "Managing your information",
      content: "You have the right to access all personal data we hold about you, request corrections to inaccurate information, delete your data (subject to legal requirements), restrict or object to certain processing activities, receive your data in a portable format, and withdraw consent at any time. You can update communication preferences, opt out of marketing emails, request to be forgotten, and file complaints with data protection authorities. Contact our privacy team to exercise any of these rights.",
      color: "from-yellow-500 to-amber-600"
    },
    {
      id: 6,
      icon: Bell,
      title: "Cookies & Tracking",
      subtitle: "Understanding our tracking methods",
      content: "We use essential cookies for website functionality, analytical cookies to understand user behavior through tools like Google Analytics, functional cookies to remember your preferences, and marketing cookies for targeted campaigns (with your consent). You can control cookie settings through your browser, though disabling certain cookies may affect website functionality. We also use web beacons and pixels to track email engagement and measure campaign effectiveness.",
      color: "from-orange-500 to-amber-600"
    },
    {
      id: 7,
      icon: Globe,
      title: "International Data Transfers",
      subtitle: "Cross-border data handling",
      content: "As an international organization, we may transfer your data across borders to fulfill our mission. We ensure all international transfers comply with applicable data protection laws through standard contractual clauses, adequacy decisions, or Privacy Shield frameworks where applicable. We maintain the same level of protection regardless of where your data is processed and store data in secure facilities with appropriate safeguards.",
      color: "from-amber-400 to-yellow-500"
    },
    {
      id: 8,
      icon: Heart,
      title: "Children's Privacy",
      subtitle: "Protecting young supporters",
      content: "We are committed to protecting children's privacy and do not knowingly collect personal information from children under 13 without parental consent. Our youth programs require guardian authorization for participation. If we discover we've collected data from a child without proper consent, we will delete it immediately. Parents can review, modify, or delete their child's information by contacting us. We follow COPPA guidelines and other applicable children's privacy regulations.",
      color: "from-red-400 to-orange-500"
    },
    {
      id: 9,
      icon: Clock,
      title: "Data Retention",
      subtitle: "How long we keep your information",
      content: "We retain personal data only as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce agreements. Donation records are typically retained for 7 years for tax and audit purposes. Marketing data is kept until you opt out. Inactive accounts may be deleted after 3 years of no activity. Upon deletion request, we will remove or anonymize your data within 30 days, except where retention is legally required.",
      color: "from-yellow-400 to-orange-500"
    },
    {
      id: 10,
      icon: AlertCircle,
      title: "Data Breach Protocol",
      subtitle: "Our response to security incidents",
      content: "In the unlikely event of a data breach, we have established protocols to assess the incident, contain the breach, notify affected individuals within 72 hours, report to relevant authorities as required, provide guidance on protective measures, and implement additional safeguards. We maintain incident response plans, conduct regular drills, and work with cybersecurity experts to minimize risks and respond effectively to any security incidents.",
      color: "from-orange-400 to-red-500"
    }
  ];

  const features = [
    { icon: Shield, text: "256-bit Encryption" },
    { icon: Lock, text: "Secure Servers" },
    { icon: CheckCircle2, text: "GDPR Compliant" },
    { icon: Eye, text: "Transparent Practices" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Animated Background Patterns */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-amber-200/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-yellow-200/30 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-orange-200/20 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Hero Section */}
      <motion.div 
        style={{ opacity }}
        className="relative"
      >
        <div className="relative bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-600 text-white overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-black/10"></div>
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -top-1/2 -left-1/4 w-full h-full bg-white/5 rounded-full blur-3xl"
            ></motion.div>
            <motion.div 
              animate={{ 
                scale: [1.2, 1, 1.2],
                rotate: [0, -5, 0]
              }}
              transition={{ 
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -bottom-1/2 -right-1/4 w-full h-full bg-white/5 rounded-full blur-3xl"
            ></motion.div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24 relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="flex justify-center mb-6 sm:mb-8"
            >
              <div className="relative mt-10">
                <div className="absolute inset-0 bg-white/30 rounded-full blur-xl animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-full border-2 sm:border-4 border-white/50">
                  <Shield className="w-12 h-12 sm:w-16 md:w-20 sm:h-16 md:h-20" />
                </div>
              </div>
            </motion.div>
            
            <motion.h1 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-4 sm:mb-6 leading-tight px-4"
            >
              Privacy <span className="text-yellow-200">Policy</span>
            </motion.h1>
            
            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-center text-amber-100 max-w-3xl mx-auto mb-6 sm:mb-8 px-4"
            >
              Your trust drives our mission. We're committed to protecting your privacy with transparency and care.
            </motion.p>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex justify-center gap-2 sm:gap-4 flex-wrap px-4"
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.9 + index * 0.1, type: "spring" }}
                    className="bg-white/20 backdrop-blur-md px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-white/30 flex items-center gap-2"
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="font-semibold text-xs sm:text-base">{feature.text}</span>
                  </motion.div>
                );
              })}
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="text-center text-amber-200 mt-6 sm:mt-8 flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
              Last Updated: December 4, 2025
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 relative z-10">
        {/* Introduction Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 mb-8 sm:mb-12 md:mb-16 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-gradient-to-br from-amber-100 to-transparent rounded-full -mr-16 sm:-mr-24 md:-mr-32 -mt-16 sm:-mt-24 md:-mt-32"></div>
          <div className="relative">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
              <Heart className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-amber-600 flex-shrink-0" />
              <span>Our Commitment to You</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-3 sm:mb-4">
              At our organization, safeguarding your privacy isn't just a legal obligation—it's a fundamental value that guides everything we do. We believe that supporting our cause should never come at the expense of your personal security and privacy.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
              This comprehensive Privacy Policy explains in clear terms how we collect, use, protect, and respect your personal information. We encourage you to read through each section to understand your rights and our responsibilities. Your trust empowers us to create meaningful change in communities Nepal.
            </p>
          </div>
        </motion.div>

        {/* Policy Sections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
          {sections.map((section, index) => {
            const Icon = section.icon;
            const isActive = activeSection === section.id;
            
            return (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                onHoverStart={() => setActiveSection(section.id)}
                onHoverEnd={() => setActiveSection(null)}
                onClick={() => setActiveSection(isActive ? null : section.id)}
                className="group relative cursor-pointer"
              >
                <div className={`h-full bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden transition-all duration-300 ${isActive ? 'shadow-2xl lg:scale-105' : ''}`}>
                  <div className={`h-1 sm:h-2 bg-gradient-to-r ${section.color}`}></div>
                  
                  <div className="p-4 sm:p-6 md:p-8">
                    <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                      <div className={`bg-gradient-to-br ${section.color} p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl shadow-lg transform transition-transform group-hover:scale-110 group-hover:rotate-3 flex-shrink-0`}>
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-1 break-words">{section.title}</h3>
                        <p className="text-xs sm:text-sm text-amber-600 font-semibold">{section.subtitle}</p>
                      </div>
                    </div>
                    
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{section.content}</p>
                    
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: isActive ? '100%' : '0%' }}
                      className={`h-0.5 sm:h-1 bg-gradient-to-r ${section.color} mt-4 sm:mt-6 rounded-full`}
                    ></motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-amber-500 via-orange-500 to-yellow-500 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden"
        >
          <div className="relative p-6 sm:p-8 md:p-12">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-10 right-10 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 left-10 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-white rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3 flex-wrap">
                <Mail className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 flex-shrink-0" />
                <span>Have Questions?</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl">
                Our privacy team is here to help. Whether you have questions about how we handle your data or want to exercise your privacy rights, we're just a message away.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="bg-white/20 backdrop-blur-md rounded-lg sm:rounded-xl p-4 sm:p-6 border border-white/30">
                  <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-white mb-2 sm:mb-3" />
                  <p className="text-white font-semibold mb-1 text-sm sm:text-base">Email Us</p>
                  <p className="text-white/80 text-xs sm:text-sm break-all">info@hro.org.np</p>
                </div>
                <div className="bg-white/20 backdrop-blur-md rounded-lg sm:rounded-xl p-4 sm:p-6 border border-white/30">
                  <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-white mb-2 sm:mb-3" />
                  <p className="text-white font-semibold mb-1 text-sm sm:text-base">Call Us</p>
                  <p className="text-white/80 text-xs sm:text-sm">+977 984 7040 404</p>
                </div>
                <div className="bg-white/20 backdrop-blur-md rounded-lg sm:rounded-xl p-4 sm:p-6 border border-white/30 sm:col-span-2 lg:col-span-1">
                  <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-white mb-2 sm:mb-3" />
                  <p className="text-white font-semibold mb-1 text-sm sm:text-base">Visit Us</p>
                  <p className="text-white/80 text-xs sm:text-sm">Krishna Nagar Municipality,Ward No. 02, District: Kapilvastu Lumbini, Nepal</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <Link to='/contact' className="bg-white text-amber-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold hover:bg-amber-50 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group text-sm sm:text-base">
                  <span className="truncate">Contact Privacy Team</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer Note */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-8 sm:mt-12 text-center px-4"
        >
          <div className="inline-block bg-white rounded-full px-4 sm:px-6 md:px-8 py-3 sm:py-4 shadow-lg">
            <p className="text-xs sm:text-sm md:text-base text-gray-600">
              <span className="font-semibold text-amber-600">Note:</span> We may update this policy periodically. Significant changes will be communicated via email.
            </p>
          </div>
        </motion.div> */}
      </div>
    </div>
  );
}
import React, { useState } from 'react';
import { Scale, FileText, Users, Shield, AlertTriangle, Heart, CheckCircle2, XCircle, Clock, Mail, Phone, MapPin, ArrowRight, BookOpen, Gavel, UserCheck, Globe, Ban, RefreshCw } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function TermsOfService() {
    const [activeSection, setActiveSection] = useState(null);
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

    const sections = [
        {
            id: 1,
            icon: FileText,
            title: "Acceptance of Terms",
            subtitle: "Agreement to our conditions",
            content: "By accessing and using the Human Relief Organization (HRO) website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. These terms constitute a legally binding agreement between you and HRO. If you do not agree with any part of these terms, you must discontinue use of our website and services immediately. Your continued use of our platform signifies your acceptance of any updates or modifications to these terms.",
            color: "from-amber-400 to-orange-500"
        },
        {
            id: 2,
            icon: Users,
            title: "User Eligibility",
            subtitle: "Who can use our services",
            content: "Our services are available to individuals aged 18 years or older who have the legal capacity to enter into binding contracts. Minors may use our services only with parental or guardian consent and supervision. Organizations, corporations, and institutions may use our services through authorized representatives. By using our platform, you represent and warrant that you meet these eligibility requirements and that all information you provide is accurate and truthful.",
            color: "from-yellow-400 to-amber-500"
        },
        {
            id: 3,
            icon: Heart,
            title: "Donations & Contributions",
            subtitle: "Financial support guidelines",
            content: "All donations made through our platform are voluntary and non-refundable except as required by law or in cases of processing errors. Donations are tax-deductible to the extent permitted by law, and we will provide receipts for tax purposes. We reserve the right to refuse or return any donation at our discretion. Recurring donations can be cancelled at any time by contacting us. We commit to using donations responsibly for our stated charitable purposes and provide transparency through annual reports and impact statements.",
            color: "from-orange-400 to-red-500"
        },
        {
            id: 4,
            icon: UserCheck,
            title: "Volunteer Participation",
            subtitle: "Volunteer terms and responsibilities",
            content: "Volunteers must complete our registration process and comply with our volunteer policies and code of conduct. We reserve the right to accept, reject, or terminate volunteer participation at our discretion. Volunteers are expected to maintain confidentiality, act professionally, and represent HRO's values. Background checks may be required for certain volunteer positions. Volunteers participate at their own risk and should maintain appropriate insurance coverage. We provide training and support but cannot guarantee specific volunteer experiences or outcomes.",
            color: "from-amber-500 to-yellow-600"
        },
        {
            id: 5,
            icon: Shield,
            title: "Intellectual Property Rights",
            subtitle: "Content ownership and usage",
            content: "All content on our website, including text, graphics, logos, images, videos, and software, is the property of HRO or our licensors and is protected by copyright, trademark, and other intellectual property laws. You may view and download content for personal, non-commercial use only. Any reproduction, distribution, modification, or commercial use requires our prior written permission. User-generated content submitted to our platform grants us a non-exclusive, royalty-free license to use, display, and distribute such content for our charitable purposes.",
            color: "from-yellow-500 to-amber-600"
        },
        {
            id: 6,
            icon: Ban,
            title: "Prohibited Activities",
            subtitle: "Unacceptable use of our platform",
            content: "Users must not engage in activities that violate laws, infringe on rights of others, transmit harmful code or malware, attempt unauthorized access to our systems, harass or abuse other users or staff, misrepresent affiliation with HRO, use our platform for fraudulent purposes, or interfere with the proper functioning of our services. We reserve the right to investigate violations, remove content, suspend or terminate accounts, and cooperate with law enforcement authorities when necessary.",
            color: "from-orange-500 to-amber-600"
        },
        {
            id: 7,
            icon: AlertTriangle,
            title: "Disclaimer of Warranties",
            subtitle: "Service limitations and conditions",
            content: "Our website and services are provided 'as is' and 'as available' without warranties of any kind, either express or implied. We do not guarantee uninterrupted, secure, or error-free service. While we strive for accuracy, we do not warrant that content on our website is complete, current, or error-free. We make no guarantees regarding specific outcomes from our programs or the impact of donations. Users rely on our services at their own discretion and risk.",
            color: "from-amber-400 to-yellow-500"
        },
        {
            id: 8,
            icon: Scale,
            title: "Limitation of Liability",
            subtitle: "Legal responsibility boundaries",
            content: "To the fullest extent permitted by law, HRO and its directors, officers, employees, and volunteers shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services, including but not limited to loss of profits, data, or goodwill. Our total liability shall not exceed the amount you have donated to us in the past twelve months. Some jurisdictions do not allow limitation of liability, so these limitations may not apply to you.",
            color: "from-red-400 to-orange-500"
        },
        {
            id: 9,
            icon: RefreshCw,
            title: "Modifications to Terms",
            subtitle: "Updates and changes to agreement",
            content: "We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to our website with an updated 'Last Modified' date. Significant changes will be communicated via email to registered users. Your continued use of our services after changes are posted constitutes acceptance of the modified terms. We encourage you to review these terms periodically to stay informed of any updates.",
            color: "from-yellow-400 to-orange-500"
        },
        {
            id: 10,
            icon: Gavel,
            title: "Governing Law & Disputes",
            subtitle: "Legal jurisdiction and resolution",
            content: "These Terms of Service are governed by the laws of Nepal, without regard to conflict of law principles. Any disputes arising from these terms or your use of our services shall be resolved through good faith negotiations. If negotiations fail, disputes will be subject to the exclusive jurisdiction of the courts in Kapilvastu, Nepal. We encourage mediation or arbitration before litigation. Both parties agree to waive any right to a jury trial in any proceeding arising out of or relating to these terms.",
            color: "from-orange-400 to-red-500"
        },
        {
            id: 11,
            icon: Globe,
            title: "International Users",
            subtitle: "Cross-border usage considerations",
            content: "Our services are operated from Nepal and intended for global access. If you access our platform from outside Nepal, you are responsible for compliance with local laws. We make no representation that our services are appropriate or available for use in all locations. By using our services from outside Nepal, you consent to the transfer of your information to Nepal and acknowledge that data protection laws may differ from those in your jurisdiction.",
            color: "from-amber-500 to-yellow-600"
        },
        {
            id: 12,
            icon: BookOpen,
            title: "Severability & Waiver",
            subtitle: "Terms enforcement and validity",
            content: "If any provision of these Terms of Service is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect. Our failure to enforce any right or provision of these terms shall not be deemed a waiver of such right or provision. These terms, together with our Privacy Policy, constitute the entire agreement between you and HRO regarding use of our services.",
            color: "from-yellow-500 to-amber-600"
        }
    ];

    const highlights = [
        { icon: CheckCircle2, text: "Transparent Terms" },
        { icon: Shield, text: "Legal Protection" },
        { icon: Heart, text: "Fair & Ethical" },
        { icon: Scale, text: "Legally Binding" }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
            {/* Animated Background Patterns */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-amber-200/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-yellow-200/30 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-orange-200/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
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
                                    <Scale className="w-12 h-12 sm:w-16 md:w-20 sm:h-16 md:h-20" />
                                </div>
                            </div>
                        </motion.div>

                        <motion.h1
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-4 sm:mb-6 leading-tight px-4"
                        >
                            Terms of <span className="text-yellow-200">Service</span>
                        </motion.h1>

                        <motion.p
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="text-base sm:text-lg md:text-xl lg:text-2xl text-center text-amber-100 max-w-3xl mx-auto mb-6 sm:mb-8 px-4"
                        >
                            Clear guidelines for a trusted partnership in creating positive change together.
                        </motion.p>

                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                            className="flex justify-center gap-2 sm:gap-4 flex-wrap px-4"
                        >
                            {highlights.map((highlight, index) => {
                                const Icon = highlight.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.9 + index * 0.1, type: "spring" }}
                                        className="bg-white/20 backdrop-blur-md px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-white/30 flex items-center gap-2"
                                    >
                                        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                                        <span className="font-semibold text-xs sm:text-base">{highlight.text}</span>
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
                            <span>Welcome to Our Community</span>
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-3 sm:mb-4">
                            Thank you for joining Human Relief Organization in our mission to create lasting positive change. These Terms of Service establish a clear framework for our partnership with you, whether you're a donor, volunteer, beneficiary, or visitor to our platform.
                        </p>
                        <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                            We believe in transparency and fairness. Please take time to read these terms carefully. They outline your rights, our responsibilities, and the mutual commitments that enable us to work together effectively. By using our services, you become part of a global movement dedicated to education, healthcare, and sustainable development across Nepal.
                        </p>
                    </div>
                </motion.div>

                {/* Terms Sections Grid */}
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
                                <span>Questions About Our Terms?</span>
                            </h2>
                            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl">
                                Our team is here to clarify any questions you may have about these Terms of Service. We're committed to ensuring you feel confident and informed about your engagement with HRO.
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
                                    <p className="text-white/80 text-xs sm:text-sm">Krishna Nagar Municipality, Ward No. 02, District: Kapilvastu Lumbini, Nepal</p>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                                <Link to='/contact' className="bg-white text-amber-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold hover:bg-amber-50 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group text-sm sm:text-base">
                                    <span className="truncate">Contact Our Team</span>
                                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                                </Link>
                                <Link to='/privacy-policy' className="bg-white/20 backdrop-blur-md text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold hover:bg-white/30 transition-all border border-white/30 flex items-center justify-center gap-2 group text-sm sm:text-base">
                                    <Shield className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                                    <span className="truncate">View Privacy Policy</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Acknowledgment Note */}
                {/* <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-8 sm:mt-12 text-center px-4"
                >
                    <div className="inline-block bg-white rounded-2xl px-6 sm:px-8 md:px-10 py-4 sm:py-6 shadow-lg border-2 border-amber-200">
                        <div className="flex items-center justify-center gap-3 mb-3">
                            <CheckCircle2 className="w-6 h-6 text-amber-600" />
                            <p className="text-base sm:text-lg font-bold text-gray-800">
                                By using our services, you agree to these terms
                            </p>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-600">
                            We may update these terms periodically. Continued use after changes constitutes acceptance.
                        </p>
                    </div>
                </motion.div> */}
            </div>
        </div>
    );
}

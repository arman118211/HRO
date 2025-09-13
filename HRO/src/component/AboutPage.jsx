import React, { useState } from 'react';
import { 
  Heart,
  Users,
  Globe,
  Target,
  Award,
  Calendar,
  MapPin,
  Briefcase,
  GraduationCap,
  Shield,
  TrendingUp,
  CheckCircle,
  Eye,
  Compass,
  Star,
  ArrowRight,
  Play,
  User,
  Mail,
  Linkedin,
  Twitter,
  HandHeart,
  Building,
  Lightbulb,
  Clock,
  ChevronLeft,
  ChevronRight,
  PhilippinePeso,
  Phone
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('mission');
  const [showVideo, setShowVideo] = useState(false);
  const [currentTeamSlide, setCurrentTeamSlide] = useState(0);

  const stats = [
    { icon: Users, label: "Lives Impacted", value: "50,000+", color: "text-blue-600" },
    { icon: Globe, label: "Countries Reached", value: "25", color: "text-green-600" },
    { icon: HandHeart, label: "Active Volunteers", value: "2,500", color: "text-purple-600" },
    { icon: Calendar, label: "Years of Service", value: "15+", color: "text-orange-600" }
  ];

  const milestones = [
    {
      year: "2008",
      title: "Foundation",
      description: "Started with a small team of 5 passionate individuals in New York"
    },
    {
      year: "2012",
      title: "First International Program",
      description: "Expanded operations to serve communities in developing countries"
    },
    {
      year: "2016",
      title: "Major Grant Received",
      description: "Secured $2M funding to scale our education initiatives"
    },
    {
      year: "2019",
      title: "Digital Transformation",
      description: "Launched online platforms to reach remote communities"
    },
    {
      year: "2023",
      title: "50K Milestone",
      description: "Celebrated impacting over 50,000 lives worldwide"
    }
  ];

  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Executive Director",
      experience: "15+ years in nonprofit leadership",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      bio: "Former UN advisor with expertise in international development and humanitarian aid.",
      education: "PhD in International Relations, Harvard University"
    },
    {
      name: "Michael Chen",
      role: "Program Director",
      experience: "12+ years in program management",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Specializes in community-based development programs and impact measurement.",
      education: "MSW, Columbia University"
    },
    {
      name: "Dr. Amara Okafor",
      role: "Medical Director",
      experience: "20+ years in global health",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
      bio: "Leading our healthcare initiatives with focus on maternal and child health.",
      education: "MD, Johns Hopkins University"
    },
    {
      name: "James Rodriguez",
      role: "Operations Manager",
      experience: "10+ years in logistics",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "Ensures efficient delivery of programs and resources to beneficiaries.",
      education: "MBA in Operations Management"
    },
    {
      name: "Dr. Lisa Wang",
      role: "Education Director",
      experience: "18+ years in education",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
      bio: "Develops innovative learning programs for children in remote communities.",
      education: "PhD in Educational Psychology, Stanford"
    },
    {
      name: "Ahmed Hassan",
      role: "Field Coordinator",
      experience: "8+ years in field operations",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=400&h=400&fit=crop&crop=face",
      bio: "Manages on-ground operations and community engagement across Africa.",
      education: "MA in Development Studies, Oxford"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We approach every situation with empathy and understanding, putting human dignity at the center of our work."
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We maintain the highest ethical standards and are transparent in all our operations and communications."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of partnerships and work closely with communities, governments, and other organizations."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We continuously seek creative solutions to complex social problems and embrace new technologies and approaches."
    },
    {
      icon: Target,
      title: "Impact Focus",
      description: "Every decision we make is guided by its potential to create meaningful, lasting change in people's lives."
    },
    {
      icon: Globe,
      title: "Inclusivity",
      description: "We celebrate diversity and ensure our programs are accessible to all, regardless of background or circumstances."
    }
  ];

  const programs = [
    {
      title: "Education for All",
      description: "Providing quality education and learning opportunities to underserved communities worldwide.",
      impact: "15,000 children educated",
      icon: GraduationCap,
      color: "bg-blue-500"
    },
    {
      title: "Healthcare Access",
      description: "Delivering essential healthcare services and health education to remote and marginalized communities.",
      impact: "200,000 people served",
      icon: Shield,
      color: "bg-green-500"
    },
    {
      title: "Economic Empowerment",
      description: "Creating sustainable livelihood opportunities through skills training and microfinance programs.",
      impact: "5,000 families empowered",
      icon: TrendingUp,
      color: "bg-purple-500"
    },
    {
      title: "Emergency Response",
      description: "Providing immediate relief and long-term recovery support during natural disasters and crises.",
      impact: "50+ emergency responses",
      icon: HandHeart,
      color: "bg-red-500"
    }
  ];

  const achievements = [
    {
      year: "2023",
      award: "Global Impact Award",
      organization: "International Humanitarian Council",
      description: "Recognized for outstanding contribution to global development"
    },
    {
      year: "2022",
      award: "Innovation in Education",
      organization: "UNESCO",
      description: "Honored for innovative digital learning solutions"
    },
    {
      year: "2021",
      award: "Transparency Excellence",
      organization: "Charity Navigator",
      description: "Achieved 4-star rating for transparency and accountability"
    }
  ];

  const partnerships = [
    { name: "United Nations", type: "International Organization" },
    { name: "World Health Organization", type: "Health Partner" },
    { name: "Microsoft", type: "Technology Partner" },
    { name: "Google.org", type: "Funding Partner" },
    { name: "Local Government Partners", type: "15+ Countries" },
    { name: "University Collaborations", type: "Research Partners" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 mt-12 md:mt-25">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#2979FF] to-green-600 text-white py-9 px-4  md:py-12 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full translate-y-16 -translate-x-16"></div>
        
        <div className="relative max-w-5xl mx-auto text-center ">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full mb-4">
            <Heart className="w-4 h-4 mr-2 text-red-300" />
            <span className="text-sm font-medium">Since 2008 • Making a Difference</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            About <span className="text-yellow-300">Hope Foundation</span>
          </h1>
          <p className="text-lg md:text-xl mb-6 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Creating lasting positive change in underserved communities through education, healthcare, and economic empowerment.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-6 ">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm px-7 py-3 rounded-xl">
                <stat.icon className="w-6 h-6 mx-auto mb-1 text-white" />
                <div className="text-xl font-bold">{stat.value}</div>
                <div className="text-xs opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <Link to='/donate'>
            <button className="bg-white text-[#2979FF] px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 flex items-center space-x-2 group">
              <span>Donate</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            </Link>
            <Link to='/contact'>
            <button 
              onClick={() => setShowVideo(true)}
              className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-lg font-semibold hover:bg-white/30 transition-all duration-200 flex items-center space-x-2 border border-white/30"
            >
              <Phone className="w-4 h-4" />
              <span>Contact Us</span>
            </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mission, Vision, Values Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Foundation</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Everything we do is guided by our core mission, vision, and values that have shaped our organization since day one.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex  justify-center mb-8 bg-gray-100 rounded-2xl p-2 max-w-2xl mx-auto  overflow-hidden">
            {[
              { id: 'mission', label: 'Mission', icon: Target },
              { id: 'vision', label: 'Vision', icon: Eye },
              { id: 'values', label: 'Values', icon: Compass }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 md:px-6 py-3 rounded-xl transition-all duration-200 font-semibold  ${
                  activeTab === tab.id
                    ? 'bg-white text-[#2979FF] shadow-lg'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-blue-100">
            {activeTab === 'mission' && (
              <div className="text-center">
                <div className="bg-blue-100 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Target className="w-10 h-10 text-[#2979FF]" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h3>
                <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                  To empower underserved communities worldwide by providing access to quality education, 
                  essential healthcare services, and sustainable economic opportunities, while fostering 
                  dignity, self-reliance, and hope for a better future. We work collaboratively with 
                  local partners to create lasting positive change that transforms lives and strengthens communities.
                </p>
              </div>
            )}

            {activeTab === 'vision' && (
              <div className="text-center">
                <div className="bg-green-100 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Eye className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Vision</h3>
                <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                  A world where every person, regardless of their circumstances, has equal access to 
                  opportunities for growth, health, and prosperity. We envision thriving communities 
                  where children can learn and dream, families can build secure futures, and individuals 
                  can realize their full potential. Our vision is a future free from poverty, inequality, 
                  and injustice, where hope flourishes in every corner of the globe.
                </p>
              </div>
            )}

            {activeTab === 'values' && (
              <div>
                <div className="text-center mb-8">
                  <div className="bg-purple-100 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                    <Compass className="w-10 h-10 text-purple-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Values</h3>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    These core values guide every decision we make and every action we take.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {values.map((value, index) => (
                    <div key={index} className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                      <div className="bg-blue-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                        <value.icon className="w-8 h-8 text-[#2979FF]" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Our Story/Timeline Section */}
      <div className="bg-gradient-to-r from-blue-50 to-green-50 py-16 px-4  overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to global impact - here's how we've grown and evolved over the years.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#2979FF] opacity-20 "></div>
            <div className="space-y-12 ">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center  ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-4' : 'pl-4'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100  overflow-hidden">
                      <div className="text-xl font-bold text-[#2979FF] mb-2">{milestone.year}</div>
                      <h3 className="text-md font-bold text-gray-800 mb-3">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-6 h-6 bg-[#2979FF] rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Programs</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We focus on four key areas that create the most significant and sustainable impact in communities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden border border-blue-100 hover:shadow-2xl transition-all duration-300 group">
                <div className="p-8">
                  <div className={`${program.color} p-4 rounded-2xl w-16 h-16 mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <program.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{program.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>
                  <div className="bg-blue-50 p-4 rounded-xl">
                    <div className="text-sm text-gray-500 mb-1">Impact to Date</div>
                    <div className="text-lg font-bold text-[#2979FF]">{program.impact}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Leadership Team Section */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated professionals leading our mission to create positive change around the world.
            </p>
          </div>

          <div className="relative">
            {/* Desktop View - Show 3 cards */}
            <div className="hidden md:block">
              <div className="grid md:grid-cols-3 gap-8">
                {teamMembers.slice(currentTeamSlide, currentTeamSlide + 3).map((member, index) => (
                  <div key={index} className="bg-white rounded-3xl shadow-xl p-6 text-center border border-blue-100 hover:shadow-2xl transition-all duration-300 group">
                    <div className="relative mb-6">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-blue-100 group-hover:border-blue-200 transition-all duration-300"
                        onError={(e) => {
                          e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&size=400&background=2979FF&color=fff`;
                        }}
                      />
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-[#2979FF] text-white px-3 py-1 rounded-full text-xs font-medium">
                        {member.role.split(' ')[0]}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                    <div className="text-[#2979FF] font-semibold mb-2">{member.role}</div>
                    <div className="text-sm text-gray-500 mb-4">{member.experience}</div>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                    <div className="bg-blue-50 p-3 rounded-xl mb-4">
                      <div className="text-xs text-gray-500 mb-1">Education</div>
                      <div className="text-sm font-medium text-gray-700">{member.education}</div>
                    </div>
                    <div className="flex justify-center space-x-3">
                      <button className="p-2 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors">
                        <Mail className="w-4 h-4 text-[#2979FF]" />
                      </button>
                      <button className="p-2 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors">
                        <Linkedin className="w-4 h-4 text-[#2979FF]" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile View - Show 1 card */}
            <div className="md:hidden">
              <div className="max-w-sm mx-auto">
                {teamMembers.slice(currentTeamSlide, currentTeamSlide + 1).map((member, index) => (
                  <div key={index} className="bg-white rounded-3xl shadow-xl p-6 text-center border border-blue-100">
                    <div className="relative mb-6">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-blue-100"
                        onError={(e) => {
                          e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&size=400&background=2979FF&color=fff`;
                        }}
                      />
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-[#2979FF] text-white px-3 py-1 rounded-full text-xs font-medium">
                        {member.role.split(' ')[0]}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                    <div className="text-[#2979FF] font-semibold mb-2">{member.role}</div>
                    <div className="text-sm text-gray-500 mb-4">{member.experience}</div>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                    <div className="bg-blue-50 p-3 rounded-xl mb-4">
                      <div className="text-xs text-gray-500 mb-1">Education</div>
                      <div className="text-sm font-medium text-gray-700">{member.education}</div>
                    </div>
                    <div className="flex justify-center space-x-3">
                      <button className="p-2 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors">
                        <Mail className="w-4 h-4 text-[#2979FF]" />
                      </button>
                      <button className="p-2 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors">
                        <Linkedin className="w-4 h-4 text-[#2979FF]" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={() => setCurrentTeamSlide(Math.max(0, currentTeamSlide - (window.innerWidth >= 768 ? 3 : 1)))}
              disabled={currentTeamSlide === 0}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            
            <button
              onClick={() => {
                const increment = window.innerWidth >= 768 ? 3 : 1;
                const maxSlide = teamMembers.length - increment;
                setCurrentTeamSlide(Math.min(maxSlide, currentTeamSlide + increment));
              }}
              disabled={currentTeamSlide >= teamMembers.length - (window.innerWidth >= 768 ? 3 : 1)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: Math.ceil(teamMembers.length / (window.innerWidth >= 768 ? 3 : 1)) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTeamSlide(index * (window.innerWidth >= 768 ? 3 : 1))}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    Math.floor(currentTeamSlide / (window.innerWidth >= 768 ? 3 : 1)) === index
                      ? 'bg-[#2979FF]'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Achievements & Recognition */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Recognition & Awards</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence and transparency has been recognized by leading organizations worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl p-6 border border-blue-100 text-center">
                <div className="bg-yellow-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Award className="w-8 h-8 text-yellow-600" />
                </div>
                <div className="text-lg font-bold text-[#2979FF] mb-2">{achievement.year}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{achievement.award}</h3>
                <div className="text-sm text-gray-500 mb-3">{achievement.organization}</div>
                <p className="text-gray-600 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partnerships Section */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Partners</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We collaborate with leading organizations, governments, and institutions to maximize our impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {partnerships.map((partner, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-blue-100 flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Building className="w-6 h-6 text-[#2979FF]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">{partner.name}</h4>
                  <p className="text-sm text-gray-500">{partner.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-[#2979FF] to-green-600 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl mb-8 opacity-90">
            Together, we can create lasting change and build a better world for future generations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to='/volunteer'>
            <button className="bg-white text-[#2979FF] px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-200 flex items-center space-x-2 group">
              <HandHeart className="w-6 h-6" />
              <span>Volunteer With Us</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            </Link>
            <Link to='/donate'>
            <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-all duration-200 border border-white/30 flex items-center space-x-2">
              <Heart className="w-6 h-6" />
              <span>Make a Donation</span>
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
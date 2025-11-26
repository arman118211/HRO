"use client"

import { useParams } from "react-router-dom"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Users,
  BookOpen,
  Award,
  Globe,
  Heart,
  Stethoscope,
  Activity,
  Shield,
  Briefcase,
  TrendingUp,
  Target,
  Zap,
  Star,
  CheckCircle,
  Sparkles,
  School,
  GraduationCap,
  Droplet,
  ShowerHead,
  Leaf,
  Home,
  Package,
  Shirt,
  Utensils,
  Snowflake,
  Gift,
  Sun,
  LifeBuoy,
  Bandage,
  Eye,
  ChevronDown,
  ChevronUp,
  HelpCircle
} from "lucide-react"
import { Link } from "react-router-dom"
import React, { useEffect } from "react";

export default function DynamicCauses() {
  const { causeType } = useParams()
  const [activeTab, setActiveTab] = useState("overview")
  const [openFAQ, setOpenFAQ] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null)
  const faqs = [
    {
      question: "How can I get involved as a volunteer?",
      answer: "We welcome volunteers of all backgrounds and skill levels! Simply fill out our contact form with 'Volunteer Opportunities' selected, or call us directly. We'll schedule a brief orientation session where you'll learn about our various programs and find the perfect match for your interests and availability. No prior experience is necessary - we provide all necessary training."
    },
    {
      question: "What types of donations do you accept?",
      answer: "We accept monetary donations, in-kind donations such as food, clothing, school supplies, and medical equipment. For monetary donations, you can donate online through our secure portal or send checks to our office address. All donations are tax-deductible, and we'll provide you with proper documentation for your records."
    },
    {
      question: "How do you ensure transparency in fund usage?",
      answer: "Transparency is core to our mission. We publish annual reports detailing how every dollar is spent, maintain third-party audits, and provide regular updates to our donors. You can request detailed financial statements at any time, and we're proud to maintain a 4-star rating with charity watchdog organizations."
    },
    {
      question: "Can I visit your facilities or programs?",
      answer: "Absolutely! We encourage supporters to visit our facilities and see our programs in action. Please contact us at least 48 hours in advance to schedule a visit. We offer guided tours on weekdays and can arrange special group visits for organizations, schools, or corporate teams interested in learning more about our work."
    },
    {
      question: "Do you provide tax receipts for donations?",
      answer: "Yes, we provide official tax receipts for all donations. For online donations, you'll receive an automatic email receipt immediately. For other donations, we'll mail or email your receipt within 5 business days. As a registered 501(c)(3) organization, all donations are tax-deductible to the full extent allowed by law."
    },
    {
      question: "How can my company partner with your organization?",
      answer: "We offer various corporate partnership opportunities including sponsorships, employee volunteer programs, matching gift programs, and cause marketing collaborations. Each partnership is tailored to align with your company's values and CSR goals while maximizing impact for our beneficiaries. Contact us to discuss how we can work together."
    },
    {
      question: "What is your refund and cancellation policy?",
      answer: "For recurring donations, you can cancel at any time by contacting us. For event registrations, we offer full refunds up to 7 days before the event. For one-time donations, while we don't typically process refunds since funds are quickly deployed to programs, we'll work with you on a case-by-case basis if there are exceptional circumstances."
    },
    {
      question: "How do I know if someone claiming to represent your organization is legitimate?",
      answer: "All our official representatives carry identification cards with our logo and their photo. We never solicit donations door-to-door or through cold calls. If someone contacts you claiming to represent us, ask for their full name and ID number, then call our office to verify. When in doubt, donate directly through our official website or office."
    }
  ];

  const causesData = {
    education: {
      title: "Education for All",
      subtitle: "Transforming Lives Through Education",
      description:
        "Breaking barriers and building futures through quality education. Every child deserves the opportunity to learn, grow, and achieve their dreams.",
      impactStats: [
        {
          icon: BookOpen,
          number: "15,000+",
          label: "Students Educated",
          color: "from-blue-500 to-blue-600",
          bgColor: "bg-blue-500/10",
        },
        {
          icon: School,
          number: "1+",
          label: "Schools Built",
          color: "from-green-500 to-green-600",
          bgColor: "bg-green-500/10",
        },
        {
          icon: Globe,
          number: "45+",
          label: "Countries Reacherd",
          color: "from-purple-500 to-purple-600",
          bgColor: "bg-purple-500/10",
        },
        {
          icon: Globe,
          number: "8",
          label: "Districts Reached",
          color: "from-orange-500 to-orange-600",
          bgColor: "bg-orange-500/10",
        },
      ],
      programs: [
        {
          title: "School Construction",
          description:
            "Building modern, safe schools in underserved communities with sustainable materials and innovative designs",
          impact: "250+ schools built",
          cost: "$25,000 per school",
          icon: School,
          gradient: "from-[#2979FF] to-blue-500",
          features: ["Solar panels", "Water systems", "Safe playgrounds"],
        },
        {
          title: "Teacher Training",
          description: "Comprehensive training programs for local educators with modern teaching methodologies",
          impact: "800+ teachers trained",
          cost: "$500 per teacher",
          icon: GraduationCap,
          gradient: "from-green-500 to-emerald-500",
          features: ["Digital skills", "Curriculum design", "Student engagement"],
        },
        {
          title: "Scholarship Program",
          description: "Financial support for promising students to continue their education and achieve their dreams",
          impact: "5,000+ scholarships awarded",
          cost: "$200 per year per student",
          icon: Award,
          gradient: "from-purple-500 to-violet-500",
          features: ["Tuition coverage", "Books & supplies", "Mentorship"],
        },
      ],
      stories: [
        {
          name: "Maria Santos",
          age: 16,
          location: "Nepal",
          story:
            "Thanks to the scholarship program, I'm now studying engineering and dream of building schools in my community.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM9pZ3UFdOVhRuxuYz2SDRST2Za_vwVNdM5A&s",
          achievement: "Engineering Student",
        },
        {
          name: "Ahmed Hassan",
          age: 14,
          location: "Nepal",
          story: "The mobile library brought books to our village. Now I read every day and want to become a teacher.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM9pZ3UFdOVhRuxuYz2SDRST2Za_vwVNdM5A&s",
          achievement: "Future Teacher",
        },
        {
          name: "Priya Sharma",
          age: 17,
          location: "Nepal",
          story: "The computer lab at our school opened new possibilities. I'm learning coding and web development.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM9pZ3UFdOVhRuxuYz2SDRST2Za_vwVNdM5A&s",
          achievement: "Web Developer",
        },
      ],
    },
    healthcare: {
      title: "Healthcare for All",
      subtitle: "Transforming Lives Through Healthcare",
      description:
        "Bringing quality healthcare to every corner of the world. We're committed to ensuring that quality healthcare is accessible to everyone, regardless of their location or economic status.",
      impactStats: [
        {
          icon: Heart,
          number: "5.2M+",
          label: "Lives Saved",
          color: "from-red-500 to-red-600",
          bgColor: "bg-red-500/10",
        },
        {
          icon: Shield,
          number: "8",
          label: "Districts Reached",
          color: "from-purple-500 to-purple-600",
          bgColor: "bg-purple-500/10",
        },
      ],
      programs: [
            {
              title: "Medical Camp",
              description: "Providing free medical checkups, basic treatments, medications, and diagnostic services to underserved communities.",
              impact: "1,200+ patients treated monthly",
              cost: "$300 per medical camp",
              icon: Stethoscope,
              gradient: "from-blue-500 to-cyan-500",
              features: [
                "General health checkups",
                "Free medicines",
                "Basic diagnostic tests"
              ],
            },
            {
              title: "Eye Cataract Surgeries",
              description: "Restoring vision for elderly and low-income individuals through free cataract screening and surgeries.",
              impact: "200+ cataract screenings and 50 surgeries monthly",
              cost: "$150 per surgery",
              icon: Eye,
              gradient: "from-yellow-500 to-amber-500",
              features: [
                "Cataract screening",
                "Free surgeries",
                "Post-operative care"
              ],
            },
            {
              title: "Community Health Training",
              description: "Building local healthcare capacity through comprehensive training programs.",
              impact: "10 health workers trained",
              cost: "$75 per month",
              icon: Users,
              gradient: "from-green-500 to-emerald-500",
              features: [
                "Medical training",
                "First aid certification",
                "Health awareness"
              ],
            },
          ]
          ,
      stories: [
        {
          name: "Dr. Sarah Okonkwo",
          age: 34,
          location: "Nepal",
          story:
            "The mobile clinic program allowed me to reach villages that hadn't seen a doctor in years. We've reduced infant mortality by 60% in our coverage area.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM9pZ3UFdOVhRuxuYz2SDRST2Za_vwVNdM5A&s",
          achievement: "Established 15 health outposts",
        },
        {
          name: "Rosa Martinez",
          age: 28,
          location: "Nepal",
          story:
            "Thanks to the maternal health program, I had a safe delivery and my baby is healthy. Now I volunteer to help other expecting mothers.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM9pZ3UFdOVhRuxuYz2SDRST2Za_vwVNdM5A&s",
          achievement: "Community birth attendant",
        },
        {
          name: "James Kimani",
          age: 45,
          location: "Nepal",
          story:
            "The community health training saved my life. I learned to recognize diabetes symptoms and got treatment early.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM9pZ3UFdOVhRuxuYz2SDRST2Za_vwVNdM5A&s",
          achievement: "Diabetes support group leader",
        },
      ],
    },
    "skill-development": {
      title: "Skill Development & Livelihood",
      subtitle: "Transforming Lives Through Skills",
      description:
        "Empowering communities through skills training and economic opportunities. We focus on providing practical skills training that help individuals achieve economic independence.",
      impactStats: [
        {
          icon: Briefcase,
          number: "85,000+",
          label: "Lives Transformed",
          color: "from-blue-500 to-blue-600",
          bgColor: "bg-blue-500/10",
        },
        {
          icon: TrendingUp,
          number: "1+",
          label: "Training Centers Built",
          color: "from-green-500 to-green-600",
          bgColor: "bg-green-500/10",
        },
        {
          icon: Target,
          number: "2,800+",
          label: "Skilled Professionals Trained",
          color: "from-purple-500 to-purple-600",
          bgColor: "bg-purple-500/10",
        },
        {
          icon: Zap,
          number: "48",
          label: "Countries Served",
          color: "from-orange-500 to-orange-600",
          bgColor: "bg-orange-500/10",
        },
      ],
      programs: [
        {
          title: "Vocational Skills Training",
          description:
            "Hands-on training in high-demand trades and crafts with modern equipment and expert instructors",
          impact: "15 individuals trained monthly",
          cost: "$120 per month",
          icon: Briefcase,
          gradient: "from-[#2979FF] to-blue-500",
          features: ["Carpentry & construction", "Electrical & plumbing", "Tailoring & fashion"],
        },
        {
          title: "Digital Skills Development",
          description: "Technology training for the modern workforce with comprehensive digital literacy programs",
          impact: "25 people equipped with digital skills",
          cost: "$80 per month",
          icon: Zap,
          gradient: "from-purple-500 to-violet-500",
          features: ["Computer literacy", "Digital marketing", "Web development"],
        },
        {
          title: "Entrepreneurship Program",
          description: "Supporting small business creation and growth with comprehensive business training",
          impact: "10 new businesses launched",
          cost: "$200 per month",
          icon: TrendingUp,
          gradient: "from-green-500 to-emerald-500",
          features: ["Business planning", "Financial literacy", "Marketing strategies"],
        },
      ],
      stories: [
        {
          name: "Carlos Rodriguez",
          age: 32,
          location: "Nepal",
          story:
            "The carpentry training program changed my life. I now run my own furniture workshop and employ 8 people from my community.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM9pZ3UFdOVhRuxuYz2SDRST2Za_vwVNdM5A&s",
          achievement: "Successful furniture business owner",
        },
        {
          name: "Fatima Al-Zahra",
          age: 26,
          location: "Nepal",
          story:
            "Learning digital marketing opened up a world of opportunities. I now help local artisans sell their crafts online.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM9pZ3UFdOVhRuxuYz2SDRST2Za_vwVNdM5A&s",
          achievement: "Online marketplace creator",
        },
        {
          name: "Raj Patel",
          age: 29,
          location: "Nepal",
          story:
            "The entrepreneurship program gave me the knowledge to start my organic farming business. Now I supply 20 restaurants.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM9pZ3UFdOVhRuxuYz2SDRST2Za_vwVNdM5A&s",
          achievement: "Sustainable organic farmer",
        },
      ],
    },
    "water-for-life": {
        title: "Water for Life",
        subtitle: "Clean Water, Healthy Communities",
        description:
          "Providing sustainable access to clean and safe drinking water for underserved communities. Our initiatives focus on water purification, sanitation, and long-term infrastructure to improve health and well-being.",
        impactStats: [
          {
            icon: Droplet,
            number: "150,000+",
            label: "People with Clean Water Access",
            color: "from-blue-400 to-blue-600",
            bgColor: "bg-blue-500/10",
          },
          {
            icon: ShowerHead,
            number: "450+",
            label: "Community Wells Installed",
            color: "from-cyan-500 to-cyan-600",
            bgColor: "bg-cyan-500/10",
          },
          {
            icon: Leaf,
            number: "101+",
            label: "Filteration Plant Installed",
            color: "from-green-500 to-green-600",
            bgColor: "bg-green-500/10",
          },
          {
            icon: Globe,
            number: "8",
            label: "District Impacted",
            color: "from-teal-500 to-teal-600",
            bgColor: "bg-teal-500/10",
          },
        ],
        programs: [
          {
            title: "Community Wells Project",
            description:
              "Drilling and maintaining wells to provide villages with direct access to safe drinking water.",
            impact: "50 families supported per well",
            cost: "$300 per well",
            icon: ShowerHead,
            gradient: "from-[#2196F3] to-blue-500",
            features: ["Deep bore wells", "Hand pumps", "Maintenance training"],
          },
          {
            title: "Water Purification Initiative",
            description:
              "Introducing filtration and purification systems to ensure safe and potable water.",
            impact: "100 households served monthly",
            cost: "$150 per system",
            icon: Droplet,
            gradient: "from-blue-400 to-indigo-500",
            features: ["Community filters", "Household kits", "Chlorination training"],
          },
          {
            title: "Water Hand Pumps",
            description:
              "Installing durable hand pumps to provide reliable access to clean and safe drinking water in underserved communities.",
            impact: "50+ families served per pump",
            cost: "$350 per hand pump",
            icon: Droplet, // change if you want a different icon
            gradient: "from-blue-500 to-cyan-500",
            features: ["Deep well installation", "Clean water access", "Low maintenance system"],
          }
        ],
        stories: [
          {
            name: "Amina Hassan",
            age: 34,
            location: "Nepal",
            story:
              "Before the well installation, my family had to walk 5 kilometers daily to fetch water. Now, our village has safe water right here.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM9pZ3UFdOVhRuxuYz2SDRST2Za_vwVNdM5A&s",
            achievement: "Empowered village with safe water",
          },
          {
            name: "Luis Fernandez",
            age: 28,
            location: "Nepal",
            story:
              "The rainwater harvesting program changed our farming community. We now have enough water for both drinking and crops.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM9pZ3UFdOVhRuxuYz2SDRST2Za_vwVNdM5A&s",
            achievement: "Sustainable farming through rainwater",
          },
          {
            name: "Neha Sharma",
            age: 22,
            location: "Nepal",
            story:
              "Thanks to the purification project, our school children now drink clean water every day, reducing illness and absenteeism.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM9pZ3UFdOVhRuxuYz2SDRST2Za_vwVNdM5A&s",
            achievement: "Healthier school community",
          },
        ],
      },
    "orphans-destitute-children": {
      title: "Orphans & Destitute Children",
      subtitle: "Nurturing Hope, Building Futures",
      description:
        "Providing care, education, and protection to orphans and destitute children. Our programs ensure that every child receives love, shelter, and the opportunity to grow into a confident and independent adult.",
      impactStats: [
        {
          icon: Home,
          number: "3,500+",
          label: "Children Sheltered",
          color: "from-orange-400 to-orange-600",
          bgColor: "bg-orange-500/10"
        },
        {
          icon: BookOpen,
          number: "2,800+",
          label: "Children Educated",
          color: "from-blue-500 to-indigo-600",
          bgColor: "bg-blue-500/10"
        },
        {
          icon: Globe,
          number: "8+",
          label: "Districts Supported",
          color: "from-red-500 to-pink-600",
          bgColor: "bg-red-500/10"
        },
        {
          icon: Globe,
          number: "25+",
          label: "Countires Supported",
          color: "from-green-500 to-emerald-600",
          bgColor: "bg-green-500/10"
        }
      ],
      programs: [
        {
          title: "Child Shelter Homes",
          description:
            "Safe, nurturing homes for orphans and abandoned children, providing food, clothing, and emotional support.",
          impact: "50 children supported per home",
          cost: "$500 per child annually",
          icon: Home,
          gradient: "from-orange-400 to-orange-600",
          features: ["Nutritious meals", "Clothing & shelter", "Counseling services"]
        },
        {
          title: "Education for Every Child",
          description:
            "Ensuring access to quality education, skill development, and extracurricular activities.",
          impact: "100 children educated annually",
          cost: "$300 per child annually",
          icon: BookOpen,
          gradient: "from-blue-500 to-indigo-600",
          features: ["School enrollment", "Tutoring support", "Vocational training"]
        },
        {
          title: "Child Protection & Rehabilitation",
          description:
            "Rehabilitating destitute children by offering healthcare, counseling, and family reintegration support.",
          impact: "200+ children rehabilitated annually",
          cost: "$400 per child annually",
          icon: Heart,
          gradient: "from-red-500 to-pink-600",
          features: ["Healthcare services", "Family tracing", "Reintegration programs"]
        }
      ],
      stories: [
        {
          name: "Ravi Kumar",
          age: 12,
          location: "Nepal",
          story:
            "Ravi lost his parents at a young age. Through our shelter home and education program, he is now excelling in school and dreams of becoming a teacher.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM9pZ3UFdOVhRuxuYz2SDRST2Za_vwVNdM5A&s",
          achievement: "Shelter & education transformed his future"
        },
        {
          name: "Aisha Ahmed",
          age: 9,
          location: "Nepal",
          story:
            "Aisha was abandoned as a baby. With our support, she now lives in a safe home, goes to school, and participates in cultural activities.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM9pZ3UFdOVhRuxuYz2SDRST2Za_vwVNdM5A&s",
          achievement: "Safe home & education for a brighter future"
        },
        {
          name: "Daniel Mwangi",
          age: 15,
          location: "Nepal",
          story:
            "Daniel struggled on the streets before joining our rehabilitation program. Today, he is healthy, back in school, and reconnected with his extended family.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM9pZ3UFdOVhRuxuYz2SDRST2Za_vwVNdM5A&s",
          achievement: "Rehabilitation and family reintegration"
        }
      ]
    },
    "seasonal-programs": {
      title: "Seasonal Programs",
      subtitle: "Spreading Joy, Supporting Communities",
      description:
        "Our Seasonal Programs provide timely support during festivals, winters, and emergencies. From warm clothing drives to festive food distributions, we ensure that vulnerable families experience comfort, dignity, and joy throughout the year.",
      impactStats: [
        {
          icon: Snowflake,
          number: "12,000+",
          label: "Winter Kits Distributed",
          color: "from-cyan-500 to-blue-600",
          bgColor: "bg-cyan-500/10"
        },
        {
          icon: Gift,
          number: "8,500+",
          label: "Festive Gifts Shared",
          color: "from-pink-500 to-rose-600",
          bgColor: "bg-pink-500/10"
        },
        {
          icon: Utensils,
          number: "20,000+",
          label: "Festival Meals Served",
          color: "from-orange-500 to-amber-600",
          bgColor: "bg-orange-500/10"
        },
        {
          icon: Sun,
          number: "3,000+",
          label: "Summer Relief Packs",
          color: "from-yellow-500 to-amber-600",
          bgColor: "bg-yellow-500/10"
        }
      ],
      programs: [
        {
          title: "Winter Warmth Drive",
          description:
            "Distributing blankets, jackets, and heating essentials to families during the harsh winter season.",
          impact: "500 families supported each winter",
          cost: "$40 per winter kit",
          icon: Snowflake,
          gradient: "from-cyan-500 to-blue-600",
          features: ["Blankets & quilts", "Woolen clothing", "Heating packs"]
        },
        {
          title: "Festival Food & Gifts",
          description:
            "Providing special meals, gift hampers, and toys for children during festive seasons.",
          impact: "1,000 families supported during major festivals",
          cost: "$25 per festive kit",
          icon: Gift,
          gradient: "from-pink-500 to-rose-600",
          features: ["Nutritious meals", "Children’s toys", "Community celebrations"]
        },
        {
          title: "Summer Relief Packs",
          description:
            "Offering clean drinking water, coolers, and summer kits to families in heatwave-prone regions.",
          impact: "300 families supported annually",
          cost: "$30 per summer pack",
          icon: Sun,
          gradient: "from-yellow-500 to-amber-600",
          features: ["Water bottles", "Cooling fans", "Oral rehydration salts"]
        }
      ],
      stories: [
        {
          name: "Rekha Devi",
          age: 38,
          location: "Nepal",
          story:
            "During winter, Rekha’s family struggled with the cold. Our Winter Warmth Drive provided blankets and jackets, making their home much warmer.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM9pZ3UFdOVhRuxuYz2SDRST2Za_vwVNdM5A&s",
          achievement: "Survived harsh winter with dignity"
        },
        {
          name: "Mohammed Ali",
          age: 11,
          location: "Nepal",
          story:
            "Mohammed received a toy and food hamper during Eid. His smile reflected the true joy of celebrating like other children.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM9pZ3UFdOVhRuxuYz2SDRST2Za_vwVNdM5A&s",
          achievement: "Festive joy for orphaned child"
        },
        {
          name: "Grace Njeri",
          age: 29,
          location: "Nepal",
          story:
            "Grace’s family was supported with summer relief kits during a severe heatwave, ensuring hydration and safety.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM9pZ3UFdOVhRuxuYz2SDRST2Za_vwVNdM5A&s",
          achievement: "Protected from extreme heat"
        }
      ]
    },
    "emergency-relief": {
      title: "Emergency & Relief",
      subtitle: "Swift Response, Saving Lives",
      description:
        "Delivering immediate assistance during natural disasters, conflicts, and humanitarian crises. Our programs provide food, medical aid, shelter, and long-term support to help communities rebuild and recover.",
      impactStats: [
        {
          icon: LifeBuoy,
          number: "10,000+",
          label: "Lives Saved",
          color: "from-red-500 to-pink-600",
          bgColor: "bg-red-500/10"
        },
        {
          icon: Utensils,
          number: "50,000+",
          label: "Meals Distributed",
          color: "from-orange-400 to-orange-600",
          bgColor: "bg-orange-500/10"
        },
        {
          icon: Bandage,
          number: "8,500+",
          label: "Medical Kits Provided",
          color: "from-blue-500 to-indigo-600",
          bgColor: "bg-blue-500/10"
        },
        {
          icon: Home,
          number: "2,000+",
          label: "Families Sheltered",
          color: "from-green-500 to-emerald-600",
          bgColor: "bg-green-500/10"
        }
      ],
      programs: [
        {
          title: "Rapid Relief Kits",
          description:
            "Providing emergency food, water, and hygiene supplies to families affected by disasters.",
          impact: "5,000 families supported annually",
          cost: "$100 per family",
          icon: Package,
          gradient: "from-orange-400 to-orange-600",
          features: ["Nutritious food", "Clean water", "Hygiene essentials"]
        },
        {
          title: "Emergency Medical Aid",
          description:
            "Supplying first aid, mobile clinics, and essential medicines to disaster-hit communities.",
          impact: "10,000+ patients treated annually",
          cost: "$50 per patient",
          icon: Bandage,
          gradient: "from-blue-500 to-indigo-600",
          features: ["First aid care", "Mobile health camps", "Medicine supply"]
        },
        {
          title: "Temporary Shelter Support",
          description:
            "Building safe, temporary shelters for displaced families until permanent housing is restored.",
          impact: "2,000+ families sheltered annually",
          cost: "$250 per family",
          icon: Home,
          gradient: "from-green-500 to-emerald-600",
          features: ["Tent housing", "Warm bedding", "Basic utilities"]
        }
      ],
      stories: [
        {
          name: "Anita Sharma",
          age: 34,
          location: "Nepal",
          story:
            "After a devastating earthquake, Anita and her children received emergency shelter, food, and medical care. Today, they are rebuilding their home with community support.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM9pZ3UFdOVhRuxuYz2SDRST2Za_vwVNdM5A&s",
          achievement: "Rebuilt life after disaster"
        },
        {
          name: "Mohammed Ali",
          age: 42,
          location: "Nepal",
          story:
            "Mohammed’s family fled conflict and found safety in our relief shelters. With access to food, medical aid, and education for his children, they now live with dignity and hope.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM9pZ3UFdOVhRuxuYz2SDRST2Za_vwVNdM5A&s",
          achievement: "Safe shelter & restored dignity"
        },
        {
          name: "Grace Njeri",
          age: 28,
          location: "Nepal",
          story:
            "Grace’s village was hit by floods, leaving many homeless. Through our relief program, she received rapid food aid, a safe tent, and medical support for her children.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM9pZ3UFdOVhRuxuYz2SDRST2Za_vwVNdM5A&s",
          achievement: "Survived and recovered after floods"
        }
      ]
    },
  }
  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const images = {
    education: [
      "/education-program-hero-image.png",
      "/hro-1-1.png",
      "/HRO-2-img-41.png",
    ],
    healthcare: [
      "/healthcare-program-hero-image.png",
      "/emergency-relief-program-hero-image.png",
      
    ],
    "skill-development": [
      "/skill-development-program-hero-image.png",
      "/seasonal-programs-program-hero-image.png",
      "/HRO-2-img-41.png",
    ],
    "orphans-destitute-children": [
      "/Orphans-Support-.1.png",
      "/Seasonal-projects.jpg",
      "/hr4.png",
    ],
    "seasonal-programs": [
      "/Seasonal-projects.jpg",
      "/seasonal-programs-program-hero-image.png",
      "/hr5.png",
    ],
    "water-for-life": [
      "/water1.png",
      "https://waterforpeopleindia.org/wp-content/uploads/2021/02/water-for-people.jpg",
      "https://b2616979.smushcdn.com/2616979/wp-content/uploads/hero-water_for_life_charity.jpg?lossy=2&strip=1&webp=1",
    ],
    "emergency-relief": [
      "/emergency-relief-program-hero-image.png",
      "/d.png",
      "/Seasonal-projects.jpg",
    ],
  };

  const imageList = images[causeType] || images.education;
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imageList.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [imageList.length]);

  const currentCause = causesData[causeType] || causesData.education
  console.log(causesData[causeType],causeType)
  console.log("current",currentCause)
  console.log("cuasestype",causeType)

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50/30 to-orange-50 mt-0 md:mt-9 ">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-amber-400/10 to-yellow-400/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            x: [0, -25, 0],
            y: [0, 15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            x: [0, 20, 0],
            y: [0, -30, 0],
            rotate: [0, -10, 0],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 rounded-full blur-xl"
        />

        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-amber-500/20 rounded-full animate-ping" />
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-yellow-500/20 rounded-full animate-pulse" />
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-orange-400/30 rounded-full animate-bounce" />
      </div>

      <div className="relative bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />

        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-yellow-300/10 rounded-full blur-2xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <motion.div
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    className="bg-white/20 p-2 rounded-full"
                  >
                    <Sparkles className="h-6 w-6 text-yellow-200" />
                  </motion.div>
                  <span className="text-yellow-100 font-medium ">{currentCause.subtitle}</span>
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold mb-8 bg-gradient-to-r from-white via-yellow-100 to-amber-200 bg-clip-text text-transparent ">
                  {currentCause.title}
                </h1>

                <p className="text-xl text-yellow-100 mb-10 leading-relaxed max-w-lg">{currentCause.description}</p>

                <div className="flex gap-4">
                  <Link to="/donate">
                    <motion.button
                      whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white text-amber-600 px-6 md:px-10 md:py-4 py-4 rounded-full font-bold text-lg md:text-lg hover:bg-yellow-50 transition-all shadow-xl hover:shadow-2xl"
                    >
                      Donate Now
                    </motion.button>
                  </Link>
                  <Link to="/about">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="border-2 border-white text-white px-6 md:px-10 md:py-4 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-amber-600 transition-all backdrop-blur-sm"
                    >
                      Learn More
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </div>

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative bg-white/15 backdrop-blur-md rounded-3xl p-10 border border-white/30 shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl" />

                <div className="relative grid grid-cols-2 gap-8">
                  {currentCause.impactStats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="text-center group cursor-pointer"
                    >
                      <motion.div
                        className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${stat.color} mb-4 shadow-lg group-hover:shadow-xl transition-shadow`}
                        whileHover={{ rotate: [0, -5, 5, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <stat.icon className="h-8 w-8 text-white" />
                      </motion.div>
                      <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                      <div className="text-sm text-yellow-100 font-medium">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 180, 360] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full shadow-lg"
              />
              <motion.div
                animate={{ y: [0, 10, 0], x: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                className="absolute -bottom-6 -left-6 w-8 h-8 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full shadow-lg"
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="absolute top-1/2 -right-4 w-4 h-4 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-40 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            {[
              { id: "overview", label: "Overview", icon: Target },
              { id: "programs", label: "Programs", icon: BookOpen },
              { id: "stories", label: "Success Stories", icon: Star },
            ].map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center space-x-2 py-4 px-6 border-b-3 font-semibold text-sm whitespace-nowrap transition-all relative ${
                  activeTab === tab.id
                    ? "border-amber-500 text-amber-600 bg-amber-50/50"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 hover:bg-gray-50/50"
                }`}
              >
                <tab.icon className="h-4 w-4" />
                <span>{tab.label}</span>
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-amber-50/30 rounded-t-lg -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AnimatePresence mode="wait">
          {activeTab === "overview" && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="space-y-16"
            >
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="bg-amber-500/10 p-2 rounded-full">
                        <Target className="h-6 w-6 text-amber-600" />
                      </div>
                      <span className="text-amber-600 font-semibold">Our Mission</span>
                    </div>

                    <h2 className="text-4xl font-bold text-gray-900 mb-8 leading-tight">
                      Empowering Communities Through
                      <span className="text-amber-600"> {currentCause.title}</span>
                    </h2>

                    <p className="text-lg text-gray-600 mb-10 leading-relaxed">{currentCause.description}</p>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                      className="mt-10"
                    >
                      <Link to="/donate">
                        <motion.button
                          whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(245, 158, 11, 0.3)" }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-12 py-4 rounded-full font-bold text-lg hover:from-amber-600 hover:to-yellow-600 transition-all shadow-xl hover:shadow-2xl flex items-center space-x-3"
                        >
                          <Heart className="h-6 w-6" />
                          <span>Donate Now</span>
                        </motion.button>
                      </Link>
                    </motion.div>
                  </motion.div>
                </div>

                <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="relative"
    >
      <div className="relative overflow-hidden rounded-3xl shadow-2xl h-96">
        {/* 🌄 Image Slider */}
        {imageList.map((img, index) => (
          <motion.img
            key={index}
            src={img}
            alt={`${currentCause.title} program ${index + 1}`}
            className={`absolute inset-0 w-full h-96 object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentIndex ? 1 : 0 }}
            transition={{ duration: 1 }}
          />
        ))}

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* 🌟 Glassy Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute bottom-6 left-6 right-6 
                     bg-white/20 backdrop-blur-xl border border-white/30 
                     rounded-2xl p-6 shadow-lg shadow-white/10"
        >
          <div className="flex items-center justify-between text-white">
            <div className="text-center">
              <div className="text-2xl font-bold drop-shadow-md">98%</div>
              <div className="text-sm opacity-90">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold drop-shadow-md">24/7</div>
              <div className="text-sm opacity-90">Support</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-300 drop-shadow-md">100%</div>
              <div className="text-sm opacity-90">Transparency</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Circles */}
      <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full shadow-lg" />
      <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full shadow-lg" />
    </motion.div>
              </div>
            </motion.div>
          )}

          {activeTab === "programs" && (
            <motion.div
              key="programs"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              <div className="text-center mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-center justify-center space-x-3 mb-6">
                    <div className="bg-amber-500/10 p-2 rounded-full">
                      <BookOpen className="h-6 w-6 text-amber-600" />
                    </div>
                    <span className="text-amber-600 font-semibold">Our Impact Programs</span>
                  </div>

                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    Comprehensive <span className="text-amber-600">Solutions</span>
                  </h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Comprehensive initiatives designed to create lasting impact in communities in Nepal. Each program
                    is carefully crafted to address specific challenges.
                  </p>
                </motion.div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {currentCause.programs.map((program, index) => (
                  <motion.div
                    key={program.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    onHoverStart={() => setHoveredCard(index)}
                    onHoverEnd={() => setHoveredCard(null)}
                    className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 relative overflow-hidden group"
                  >
                    <div
                      className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${program.gradient}/5 rounded-full -translate-y-20 translate-x-20 transition-all group-hover:scale-150`}
                    />

                    <div className="relative">
                      <div
                        className={`bg-gradient-to-r ${program.gradient} p-4 rounded-2xl w-fit mb-6 shadow-lg group-hover:shadow-xl transition-shadow`}
                      >
                        <program.icon className="h-10 w-10 text-white" />
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{program.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                        <div className="space-y-2">
                          {program.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <span className="text-sm text-gray-600">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-3 mb-8">
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
                          <span className="text-gray-600 font-medium">Impact:</span>
                          <span className="font-bold text-amber-600">{program.impact}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
                          <span className="text-gray-600 font-medium">Investment:</span>
                          <span className="font-bold text-gray-900">{program.cost}</span>
                        </div>
                      </div>

                      <Link to='/donate'>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-full bg-gradient-to-r ${program.gradient} text-white py-4 rounded-2xl font-bold hover:shadow-lg transition-all`}
                      >
                        Support This Program
                      </motion.button>
                      </Link>
                    </div>

                    {hoveredCard === index && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg"
                      >
                        <TrendingUp className="h-4 w-4 text-amber-600" />
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "stories" && (
            <motion.div
              key="stories"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              <div className="text-center mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-center justify-center space-x-3 mb-6">
                    <div className="bg-amber-500/10 p-2 rounded-full">
                      <Star className="h-6 w-6 text-amber-600" />
                    </div>
                    <span className="text-amber-600 font-semibold">Success Stories</span>
                  </div>

                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    Lives <span className="text-amber-600">Transformed</span>
                  </h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Real stories from people whose lives have been transformed. These inspiring journeys show the power
                    of opportunity and determination.
                  </p>
                </motion.div>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {currentCause.stories.map((story, index) => (
                  <motion.div
                    key={story.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
                  >
                    <div className="relative h-72 overflow-hidden">
                      <img
                        src={story.image || "/placeholder.svg"}
                        alt={story.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="text-xs font-semibold text-amber-600">{story.achievement}</span>
                      </div>

                      <div className="absolute bottom-6 left-6 text-white">
                        <h3 className="text-2xl font-bold mb-1">{story.name}</h3>
                        <p className="text-sm opacity-90 flex items-center space-x-2">
                          <span>Age {story.age}</span>
                          <span>•</span>
                          <span>{story.location}</span>
                        </p>
                      </div>
                    </div>

                    <div className="p-8">
                      <blockquote className="text-gray-600 italic leading-relaxed mb-6 text-lg">
                        "{story.story}"
                      </blockquote>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-amber-400">
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: i * 0.1 }}
                            >
                              <Star className="h-5 w-5 fill-current" />
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className=" py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-yellow-50 px-4 py-2 rounded-full mb-4">
              <HelpCircle className="w-5 h-5 mr-2 text-amber-600" />
              <span className="text-sm font-medium text-amber-600">Got Questions?</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our organization, donations, volunteering, and more.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200 hover:border-yellow-200 transition-colors">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-yellow-50 transition-colors"
                >
                  <h3 className="font-semibold text-gray-800 pr-4">{faq.question}</h3>
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-amber-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <a
              href="mailto:info@hro.org.np?subject=Support%20Request&body=Hello%20Support%2C%0A%0AI%20have%20a%20question%20regarding..."
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-amber-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors">
                Contact Our Support Team
              </button>
            </a>
          </div>
        </div>
      </div>
      </div>
      
    </div>
  )
}

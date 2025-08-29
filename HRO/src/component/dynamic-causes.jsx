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
} from "lucide-react"
import { Link } from "react-router-dom"

export default function DynamicCauses() {
  const { causeType } = useParams()
  const [activeTab, setActiveTab] = useState("overview")
  const [hoveredCard, setHoveredCard] = useState(null)

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
          number: "250+",
          label: "Schools Built",
          color: "from-green-500 to-green-600",
          bgColor: "bg-green-500/10",
        },
        {
          icon: Users,
          number: "800+",
          label: "Teachers Trained",
          color: "from-purple-500 to-purple-600",
          bgColor: "bg-purple-500/10",
        },
        {
          icon: Globe,
          number: "45",
          label: "Countries Reached",
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
          location: "Philippines",
          story:
            "Thanks to the scholarship program, I'm now studying engineering and dream of building schools in my community.",
          image: "/student-maria-philippines-scholarship.png",
          achievement: "Engineering Student",
        },
        {
          name: "Ahmed Hassan",
          age: 14,
          location: "Kenya",
          story: "The mobile library brought books to our village. Now I read every day and want to become a teacher.",
          image: "/student-ahmed-kenya-mobile-library.png",
          achievement: "Future Teacher",
        },
        {
          name: "Priya Sharma",
          age: 17,
          location: "India",
          story: "The computer lab at our school opened new possibilities. I'm learning coding and web development.",
          image: "/student-priya-india-computer-lab.png",
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
          icon: Stethoscope,
          number: "2,800+",
          label: "Clinics Established",
          color: "from-blue-500 to-blue-600",
          bgColor: "bg-blue-500/10",
        },
        {
          icon: Activity,
          number: "18,000+",
          label: "Healthcare Workers Trained",
          color: "from-green-500 to-green-600",
          bgColor: "bg-green-500/10",
        },
        {
          icon: Shield,
          number: "92",
          label: "Countries Reached",
          color: "from-purple-500 to-purple-600",
          bgColor: "bg-purple-500/10",
        },
      ],
      programs: [
        {
          title: "Mobile Health Clinics",
          description: "Bringing medical care directly to remote communities with fully equipped medical units",
          impact: "1,000+ patients served monthly",
          cost: "$500 per month",
          icon: Stethoscope,
          gradient: "from-[#2979FF] to-blue-500",
          features: ["Fully equipped units", "Trained medical staff", "Essential medicines"],
        },
        {
          title: "Maternal & Child Health",
          description: "Specialized care for mothers and children with comprehensive health programs",
          impact: "20 safe deliveries monthly",
          cost: "$150 per month",
          icon: Heart,
          gradient: "from-pink-500 to-rose-500",
          features: ["Prenatal care", "Safe delivery", "Child immunization"],
        },
        {
          title: "Community Health Training",
          description: "Building local healthcare capacity through comprehensive training programs",
          impact: "10 health workers trained",
          cost: "$75 per month",
          icon: Users,
          gradient: "from-green-500 to-emerald-500",
          features: ["Medical training", "First aid certification", "Health awareness"],
        },
      ],
      stories: [
        {
          name: "Dr. Sarah Okonkwo",
          age: 34,
          location: "Nigeria",
          story:
            "The mobile clinic program allowed me to reach villages that hadn't seen a doctor in years. We've reduced infant mortality by 60% in our coverage area.",
          image: "/doctor-sarah-nigeria-mobile-clinic.png",
          achievement: "Established 15 health outposts",
        },
        {
          name: "Rosa Martinez",
          age: 28,
          location: "Peru",
          story:
            "Thanks to the maternal health program, I had a safe delivery and my baby is healthy. Now I volunteer to help other expecting mothers.",
          image: "/mother-rosa-peru-maternal-health.png",
          achievement: "Community birth attendant",
        },
        {
          name: "James Kimani",
          age: 45,
          location: "Kenya",
          story:
            "The community health training saved my life. I learned to recognize diabetes symptoms and got treatment early.",
          image: "/james-kenya-diabetes-support.png",
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
          number: "320+",
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
          location: "Mexico",
          story:
            "The carpentry training program changed my life. I now run my own furniture workshop and employ 8 people from my community.",
          image: "/carlos-mexico-furniture-workshop.png",
          achievement: "Successful furniture business owner",
        },
        {
          name: "Fatima Al-Zahra",
          age: 26,
          location: "Morocco",
          story:
            "Learning digital marketing opened up a world of opportunities. I now help local artisans sell their crafts online.",
          image: "/fatima-morocco-digital-marketing.png",
          achievement: "Online marketplace creator",
        },
        {
          name: "Raj Patel",
          age: 29,
          location: "India",
          story:
            "The entrepreneurship program gave me the knowledge to start my organic farming business. Now I supply 20 restaurants.",
          image: "/raj-india-organic-farming.png",
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
            number: "3,200+",
            label: "Rainwater Harvesting Systems",
            color: "from-green-500 to-green-600",
            bgColor: "bg-green-500/10",
          },
          {
            icon: Globe,
            number: "36",
            label: "Countries Impacted",
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
            title: "Rainwater Harvesting Program",
            description:
              "Harnessing rainwater to provide sustainable and eco-friendly water solutions.",
            impact: "20 villages benefiting annually",
            cost: "$500 per system",
            icon: Leaf,
            gradient: "from-green-500 to-emerald-500",
            features: ["Storage tanks", "Filtration units", "Community awareness"],
          },
        ],
        stories: [
          {
            name: "Amina Hassan",
            age: 34,
            location: "Kenya",
            story:
              "Before the well installation, my family had to walk 5 kilometers daily to fetch water. Now, our village has safe water right here.",
            image: "/amina-kenya-water-well.png",
            achievement: "Empowered village with safe water",
          },
          {
            name: "Luis Fernandez",
            age: 28,
            location: "Peru",
            story:
              "The rainwater harvesting program changed our farming community. We now have enough water for both drinking and crops.",
            image: "/luis-peru-rainwater-harvesting.png",
            achievement: "Sustainable farming through rainwater",
          },
          {
            name: "Neha Sharma",
            age: 22,
            location: "India",
            story:
              "Thanks to the purification project, our school children now drink clean water every day, reducing illness and absenteeism.",
            image: "/neha-india-water-purification.png",
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
          icon: Heart,
          number: "1,200+",
          label: "Children Rehabilitated",
          color: "from-red-500 to-pink-600",
          bgColor: "bg-red-500/10"
        },
        {
          icon: Users,
          number: "25+",
          label: "Communities Supported",
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
          location: "India",
          story:
            "Ravi lost his parents at a young age. Through our shelter home and education program, he is now excelling in school and dreams of becoming a teacher.",
          image: "/ravi-india-shelter.png",
          achievement: "Shelter & education transformed his future"
        },
        {
          name: "Aisha Ahmed",
          age: 9,
          location: "Kenya",
          story:
            "Aisha was abandoned as a baby. With our support, she now lives in a safe home, goes to school, and participates in cultural activities.",
          image: "/aisha-kenya-orphan.png",
          achievement: "Safe home & education for a brighter future"
        },
        {
          name: "Daniel Mwangi",
          age: 15,
          location: "Uganda",
          story:
            "Daniel struggled on the streets before joining our rehabilitation program. Today, he is healthy, back in school, and reconnected with his extended family.",
          image: "/daniel-uganda-rehabilitation.png",
          achievement: "Rehabilitation and family reintegration"
        }
      ]
    },
    "in-kind-gifts": {
      title: "In-Kind Gifts Program",
      subtitle: "Sharing Resources, Spreading Smiles",
      description:
        "Providing essential items such as food, clothing, school supplies, and medical kits to vulnerable families and children. Our program ensures dignity and relief through donations that directly impact daily lives.",
      impactStats: [
        {
          icon: Package,
          number: "15,000+",
          label: "Families Supported",
          color: "from-amber-500 to-yellow-600",
          bgColor: "bg-amber-500/10"
        },
        {
          icon: Shirt,
          number: "25,000+",
          label: "Clothing Items Distributed",
          color: "from-indigo-500 to-purple-600",
          bgColor: "bg-indigo-500/10"
        },
        {
          icon: Utensils,
          number: "40,000+",
          label: "Meals Provided",
          color: "from-green-500 to-emerald-600",
          bgColor: "bg-green-500/10"
        },
        {
          icon: GraduationCap,
          number: "5,500+",
          label: "School Kits Donated",
          color: "from-blue-500 to-cyan-600",
          bgColor: "bg-blue-500/10"
        }
      ],
      programs: [
        {
          title: "Food & Nutrition Support",
          description:
            "Distributing groceries, ready meals, and nutritional supplements to families in crisis.",
          impact: "200 families supported monthly",
          cost: "$50 per family per month",
          icon: Utensils,
          gradient: "from-green-500 to-emerald-600",
          features: ["Grocery kits", "Cooked meals", "Nutrition supplements"]
        },
        {
          title: "Clothing for Dignity",
          description:
            "Providing new and gently used clothing to children, women, and families in need.",
          impact: "500+ clothing items distributed monthly",
          cost: "$20 per clothing kit",
          icon: Shirt,
          gradient: "from-indigo-500 to-purple-600",
          features: ["Seasonal wear", "School uniforms", "Winter kits"]
        },
        {
          title: "School Supplies Drive",
          description:
            "Equipping children with books, stationery, and school bags to support their education.",
          impact: "1,000+ students supported annually",
          cost: "$35 per school kit",
          icon: GraduationCap,
          gradient: "from-blue-500 to-cyan-600",
          features: ["School bags", "Books & stationery", "Exam preparation kits"]
        }
      ],
      stories: [
        {
          name: "Fatima Noor",
          age: 10,
          location: "Pakistan",
          story:
            "Fatima received a school kit through our program. With books and stationery in hand, she now attends school with confidence.",
          image: "/fatima-pakistan-schoolkit.png",
          achievement: "Access to school essentials"
        },
        {
          name: "Samuel Johnson",
          age: 42,
          location: "Nigeria",
          story:
            "Samuel’s family struggled with food insecurity. Through our monthly grocery kits, his family now has regular meals and hope.",
          image: "/samuel-nigeria-foodkit.png",
          achievement: "Food security restored"
        },
        {
          name: "Maria Lopez",
          age: 35,
          location: "Colombia",
          story:
            "After losing her belongings in a flood, Maria received clothing and household items from our In-Kind Gifts Program. She says it restored her dignity.",
          image: "/maria-colombia-clothing.png",
          achievement: "Support during crisis recovery"
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
          location: "India",
          story:
            "During winter, Rekha’s family struggled with the cold. Our Winter Warmth Drive provided blankets and jackets, making their home much warmer.",
          image: "/rekha-india-winter.png",
          achievement: "Survived harsh winter with dignity"
        },
        {
          name: "Mohammed Ali",
          age: 11,
          location: "Pakistan",
          story:
            "Mohammed received a toy and food hamper during Eid. His smile reflected the true joy of celebrating like other children.",
          image: "/mohammed-pakistan-eid.png",
          achievement: "Festive joy for orphaned child"
        },
        {
          name: "Grace Njeri",
          age: 29,
          location: "Kenya",
          story:
            "Grace’s family was supported with summer relief kits during a severe heatwave, ensuring hydration and safety.",
          image: "/grace-kenya-summer.png",
          achievement: "Protected from extreme heat"
        }
      ]
    }



    

  }

  const currentCause = causesData[causeType] || causesData.education
  console.log(causesData[causeType],causeType)
  console.log("current",currentCause)
  console.log("cuasestype",causeType)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50 mt-0 md:mt-9">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-[#2979FF]/10 to-blue-400/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            x: [0, -25, 0],
            y: [0, 15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            x: [0, 20, 0],
            y: [0, -30, 0],
            rotate: [0, -10, 0],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-full blur-xl"
        />

        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-[#2979FF]/20 rounded-full animate-ping" />
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-purple-400/20 rounded-full animate-pulse" />
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-green-400/30 rounded-full animate-bounce" />
      </div>

      <div className="relative bg-gradient-to-r from-[#2979FF] via-[#1976D2] to-[#1565C0] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />

        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-blue-300/10 rounded-full blur-2xl" />
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
                    <Sparkles className="h-6 w-6 text-yellow-300" />
                  </motion.div>
                  <span className="text-blue-100 font-medium ">{currentCause.subtitle}</span>
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent ">
                  {currentCause.title}
                </h1>

                <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-lg">{currentCause.description}</p>

                <div className="flex gap-4">
                  <Link to="/donate">
                    <motion.button
                      whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white text-[#2979FF] px-6 md:px-10 md:py-4 py-4 rounded-full font-bold text-lg md:text-lg hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl"
                    >
                      Donate Now
                    </motion.button>
                  </Link>
                  <Link to="/about">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="border-2 border-white text-white px-6 md:px-10 md:py-4 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#2979FF] transition-all backdrop-blur-sm"
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
                      <div className="text-sm text-blue-100 font-medium">{stat.label}</div>
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
                className="absolute -bottom-6 -left-6 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full shadow-lg"
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="absolute top-1/2 -right-4 w-4 h-4 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full"
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
                    ? "border-[#2979FF] text-[#2979FF] bg-blue-50/50"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 hover:bg-gray-50/50"
                }`}
              >
                <tab.icon className="h-4 w-4" />
                <span>{tab.label}</span>
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-blue-50/30 rounded-t-lg -z-10"
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
                      <div className="bg-[#2979FF]/10 p-2 rounded-full">
                        <Target className="h-6 w-6 text-[#2979FF]" />
                      </div>
                      <span className="text-[#2979FF] font-semibold">Our Mission</span>
                    </div>

                    <h2 className="text-4xl font-bold text-gray-900 mb-8 leading-tight">
                      Empowering Communities Through
                      <span className="text-[#2979FF]"> {currentCause.title}</span>
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
                          whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(41, 121, 255, 0.3)" }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-gradient-to-r from-[#2979FF] to-blue-500 text-white px-12 py-4 rounded-full font-bold text-lg hover:from-blue-600 hover:to-blue-700 transition-all shadow-xl hover:shadow-2xl flex items-center space-x-3"
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
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl ">
                    <img
                      src={`/${causeType}-program-hero-image.png`}
                      alt={`${currentCause.title} program`}
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                      className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-2xl font-bold text-gray-900">98%</div>
                          <div className="text-sm text-gray-600">Success Rate</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-gray-900">24/7</div>
                          <div className="text-sm text-gray-600">Support</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-[#2979FF]">100%</div>
                          <div className="text-sm text-gray-600">Transparency</div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-[#2979FF] to-blue-500 rounded-full shadow-lg" />
                  <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full shadow-lg" />
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
                    <div className="bg-[#2979FF]/10 p-2 rounded-full">
                      <BookOpen className="h-6 w-6 text-[#2979FF]" />
                    </div>
                    <span className="text-[#2979FF] font-semibold">Our Impact Programs</span>
                  </div>

                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    Comprehensive <span className="text-[#2979FF]">Solutions</span>
                  </h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Comprehensive initiatives designed to create lasting impact in communities worldwide. Each program
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
                          <span className="font-bold text-[#2979FF]">{program.impact}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
                          <span className="text-gray-600 font-medium">Investment:</span>
                          <span className="font-bold text-gray-900">{program.cost}</span>
                        </div>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-full bg-gradient-to-r ${program.gradient} text-white py-4 rounded-2xl font-bold hover:shadow-lg transition-all`}
                      >
                        Support This Program
                      </motion.button>
                    </div>

                    {hoveredCard === index && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg"
                      >
                        <TrendingUp className="h-4 w-4 text-[#2979FF]" />
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
                    <div className="bg-[#2979FF]/10 p-2 rounded-full">
                      <Star className="h-6 w-6 text-[#2979FF]" />
                    </div>
                    <span className="text-[#2979FF] font-semibold">Success Stories</span>
                  </div>

                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    Lives <span className="text-[#2979FF]">Transformed</span>
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
                        <span className="text-xs font-semibold text-[#2979FF]">{story.achievement}</span>
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
      </div>
    </div>
  )
}

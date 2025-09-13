import { useState, useEffect } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import {
  BookOpen,
  GraduationCap,
  HeartHandshake,
  Droplet,
  BookMarked,
  ArrowLeft,
  Heart,
  Share2,
  MapPin,
  Calendar,
  Users,
  Target,
  CheckCircle,
  Clock,
  DollarSign,
  User,
  Star,
  TrendingUp,
  Gift,
  Award,
  Sparkles,
  Home,
  Droplets,
  Book
} from "lucide-react"

// Mock data - in real app, this would come from your API/database
const campaignsData = {
  "education-fund":{
    id: "education-fund",
    title: "Education Fund",
    subtitle: "Empowering Futures Through Learning",
    description: "Provide books, tuition, and mentorship so children can learn, grow, and lead brighter futures.",
    icon: BookOpen,
    heroImage: "/Slider/Picture11a.jpg",
    fullDescription: "Our Education Fund is dedicated to breaking the cycle of poverty through quality education. We provide comprehensive support including textbooks, school supplies, tuition assistance, and one-on-one mentorship programs. Every child deserves the opportunity to learn and grow, regardless of their family's financial situation.",
    
    // Financial details
    goalAmount: 50000,
    raisedAmount: 32750,
    donorsCount: 247,
    daysLeft: 45,
    
    // Impact & Statistics
    impact: {
      current: "Over 500 children supported with education in the last year",
      stats: [
        { label: "Students Supported", value: "500+" },
        { label: "Schools Partnered", value: "25" },
        { label: "Scholarships Given", value: "150" },
        { label: "Mentors Active", value: "80" }
      ]
    },
    
    // Location & Timeline
    location: "Rural Districts of Nepal",
    startDate: "January 2024",
    endDate: "December 2024",
    
    // What we provide
    provisions: [
      "Complete textbook sets for primary and secondary students",
      "School uniforms and essential supplies",
      "Monthly tuition fee assistance",
      "One-on-one mentorship programs",
      "Computer literacy training",
      "Career guidance and counseling"
    ],
    
    // Success stories
    stories: [
      {
        name: "Priya S.",
        age: 14,
        story: "Thanks to the Education Fund, I received books and mentorship that helped me excel in my studies. I'm now preparing for engineering entrance exams!",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
      },
      {
        name: "Arjun K.",
        age: 16,
        story: "The computer literacy program opened new doors for me. I can now help my family with digital tasks and dream of a career in technology.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
      }
    ],
    
    // Recent updates
    updates: [
      {
        date: "Aug 25, 2025",
        title: "New Partnership with Local Schools",
        content: "We've partnered with 5 additional schools to expand our reach and support more students in remote areas."
      },
      {
        date: "Aug 18, 2025",
        title: "Scholarship Recipients Announced",
        content: "25 deserving students have been selected for full scholarship support for the upcoming academic year."
      },
      {
        date: "Aug 10, 2025",
        title: "Mentor Training Program Completed",
        content: "Our volunteer mentors completed an intensive training program to better support students in their academic journey."
      }
    ]
  },
  
  "school-fund": {
    id: "school-fund",
    title: "School Fund",
    subtitle: "Building Better Learning Environments",
    description: "Equip classrooms and support teachers with essential resources for quality education.",
    icon: GraduationCap,
    heroImage: "/Slider/Picture6a.jpg",
    fullDescription: "The School Fund focuses on improving educational infrastructure and supporting teachers with the resources they need. We renovate classrooms, provide teaching materials, and offer professional development opportunities for educators to ensure every child receives quality education.",
    goalAmount: 75000,
    raisedAmount: 45200,
    donorsCount: 156,
    daysLeft: 62,
    impact: {
      current: "15 schools renovated and equipped with modern facilities",
      stats: [
        { label: "Schools Upgraded", value: "15" },
        { label: "Teachers Trained", value: "120" },
        { label: "Classrooms Renovated", value: "45" },
        { label: "Students Benefited", value: "2,500+" }
      ]
    },
    location: "Multiple Districts across Nepal",
    startDate: "March 2024",
    endDate: "February 2025",
    provisions: [
      "Classroom renovation and modernization",
      "Interactive whiteboards and projectors",
      "Library setup with age-appropriate books",
      "Teacher training and development programs",
      "Science laboratory equipment",
      "Computer labs with internet connectivity"
    ],
    stories: [
      {
        name: "Teacher Sunita",
        age: 35,
        story: "The new teaching resources have transformed my classroom. Students are more engaged and learning outcomes have improved significantly.",
        image: "https://images.unsplash.com/photo-1494790108755-2616c0763c52?w=100&h=100&fit=crop&crop=face"
      }
    ],
    updates: [
      {
        date: "Aug 28, 2025",
        title: "5 More Schools Added to Program",
        content: "We've expanded our school improvement program to include 5 additional schools in remote villages."
      }
    ]
  },
  "orphan-support": {
    id: "orphan-support",
    title: "Orphan Support",
    subtitle: "Nurturing Hope, Building Futures",
    description: "Provide shelter, care, and education for orphaned children to ensure they grow up safe, healthy, and hopeful.",
    icon: Home,
    heroImage: "/f.png",
    fullDescription: "Our Orphan Support program is dedicated to providing holistic care for children who have lost their parents. From safe shelter and nutritious meals to emotional care and quality education, we ensure every child has the opportunity to thrive. With community support and your contributions, we’re building a foundation of love and security for every orphaned child.",
    
    // Financial details
    goalAmount: 75000,
    raisedAmount: 41200,
    donorsCount: 318,
    daysLeft: 60,
    
    // Impact & Statistics
    impact: {
      current: "Over 800 orphaned children provided with food, shelter, and education in the last 2 years",
      stats: [
        { label: "Children Sheltered", value: "800+" },
        { label: "Meals Served", value: "250,000+" },
        { label: "Homes Established", value: "12" },
        { label: "Caregivers & Volunteers", value: "150+" }
      ]
    },
    
    // Location & Timeline
    location: "Nepal ",
    startDate: "February 2024",
    endDate: "January 2025",
    
    // What we provide
    provisions: [
      "Safe housing in orphanage homes",
      "Nutritious meals and clean drinking water",
      "Primary and secondary education support",
      "Healthcare and regular medical checkups",
      "Counseling and emotional support",
      "Skill-building and extracurricular activities"
    ],
    
    // Success stories
    stories: [
      {
        name: "Ayesha R.",
        age: 12,
        story: "Before joining the orphan support program, I struggled without proper care. Now I live in a safe home, attend school, and dream of becoming a doctor.",
        image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&h=100&fit=crop&crop=face"
      },
      {
        name: "Ravi M.",
        age: 15,
        story: "Thanks to the shelter and education provided, I no longer worry about basic needs. I’m now excelling in school and want to pursue a career in teaching.",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face"
      }
    ],
    
    // Recent updates
    updates: [
      {
        date: "Aug 28, 2025",
        title: "New Orphanage Home Opened",
        content: "We inaugurated a new home in Varanasi to accommodate 50 more children with proper facilities."
      },
      {
        date: "Aug 20, 2025",
        title: "Medical Camp Organized",
        content: "A free health checkup camp was conducted for over 200 children, ensuring timely vaccinations and treatments."
      },
      {
        date: "Aug 12, 2025",
        title: "Children’s Festival Celebration",
        content: "We organized a cultural event where children showcased their talents in art, music, and drama."
      }
    ]
  },
  "water-for-life": {
    id: "water-for-life",
    title: "Water for Life",
    subtitle: "Bringing Clean Water to Every Community",
    description: "Ensure access to safe drinking water through wells, filtration systems, and community awareness programs.",
    icon: Droplets,
    heroImage: "/water-for-life-program-hero-image.png",
    fullDescription: "Our Water for Life initiative is focused on solving one of the most basic human needs — access to clean water. Millions still lack safe drinking water, leading to health crises and lost educational opportunities. Through borewells, filtration plants, and hygiene training, we are transforming communities by providing sustainable water solutions that save lives and improve livelihoods.",
    
    // Financial details
    goalAmount: 100000,
    raisedAmount: 67850,
    donorsCount: 524,
    daysLeft: 75,
    
    // Impact & Statistics
    impact: {
      current: "Over 60 villages provided with safe drinking water access in the last year",
      stats: [
        { label: "Wells Constructed", value: "120+" },
        { label: "People Served", value: "25,000+" },
        { label: "Filtration Units Installed", value: "45" },
        { label: "Hygiene Workshops", value: "200+" }
      ]
    },
    
    // Location & Timeline
    location: "Rural Villages in Nepal",
    startDate: "March 2024",
    endDate: "March 2025",
    
    // What we provide
    provisions: [
      "Hand-pump wells for remote communities",
      "Solar-powered water filtration systems",
      "Rainwater harvesting solutions",
      "Water storage tanks for drought-prone areas",
      "Hygiene and sanitation awareness programs",
      "Community water management training"
    ],
    
    // Success stories
    stories: [
      {
        name: "Meena Devi",
        age: 34,
        story: "For years, my family walked 5 km daily for water. Now, with the village well, we have clean water nearby, and my daughters can focus on school instead of fetching water.",
        image: "https://images.unsplash.com/photo-1581579188871-45ea61f2a0c8?w=100&h=100&fit=crop&crop=face"
      },
      {
        name: "Rahul Singh",
        age: 10,
        story: "Thanks to the water filtration system, I no longer fall sick from dirty water. I can attend school regularly and play with my friends without worry.",
        image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&h=100&fit=crop&crop=face"
      }
    ],
    
    // Recent updates
    updates: [
      {
        date: "Aug 27, 2025",
        title: "10 New Wells Completed",
        content: "We successfully drilled 10 new borewells in drought-hit villages, providing clean water to over 3,000 people."
      },
      {
        date: "Aug 19, 2025",
        title: "Water Filtration Plant Inaugurated",
        content: "A solar-powered water filtration plant was installed in a desert community, serving 500 households."
      },
      {
        date: "Aug 05, 2025",
        title: "School Awareness Drive",
        content: "Conducted hygiene and sanitation awareness programs in 15 schools, educating 1,200 children about safe water practices."
      }
    ]
  },
  "sponsor-hafij-quran": {
    id: "sponsor-hafiz-quran",
    title: "Sponsor a Hafiz-e-Quran",
    subtitle: "Preserving Faith, Inspiring Generations",
    description: "Support underprivileged children to become Hafiz-e-Quran by sponsoring their education, accommodation, and daily needs.",
    icon: Book,
    heroImage: "/sponsor-haafiz.jpg",
    fullDescription: "Our Sponsor Hafiz-e-Quran program empowers orphans and underprivileged children to memorize and preserve the Holy Quran. We provide them with housing, nutritious meals, qualified teachers, and essential resources so they can focus on their sacred journey of becoming Hafiz-e-Quran. Through your sponsorship, you not only change a child's life but also contribute to spreading light for generations to come.",
    
    // Financial details
    goalAmount: 60000,
    raisedAmount: 35800,
    donorsCount: 290,
    daysLeft: 50,
    
    // Impact & Statistics
    impact: {
      current: "Over 300 children enrolled in Hifz programs across multiple madrasahs",
      stats: [
        { label: "Students Sponsored", value: "300+" },
        { label: "Qualified Teachers", value: "40" },
        { label: "Madrasahs Partnered", value: "15" },
        { label: "Graduated Hafiz", value: "120+" }
      ]
    },
    
    // Location & Timeline
    location: "Madrasahs in Uttar Pradesh, Pakistan & Bangladesh",
    startDate: "April 2024",
    endDate: "April 2025",
    
    // What we provide
    provisions: [
      "Full sponsorship of Quranic education",
      "Accommodation and safe living environment",
      "Nutritious meals and healthcare support",
      "Books, uniforms, and study materials",
      "Qualified and trained Quran teachers",
      "Islamic character-building activities"
    ],
    
    // Success stories
    stories: [
      {
        name: "Ahmed Khan",
        age: 13,
        story: "Thanks to the sponsorship, I completed my Hifz journey in just 3 years. I now teach younger children at my local madrasa and help them on their path.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
      },
      {
        name: "Fatima Begum",
        age: 11,
        story: "I always dreamed of becoming a Hafiza of the Quran. With this program’s support, I have a safe home, teachers, and all the resources I need to achieve my dream.",
        image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&h=100&fit=crop&crop=face"
      }
    ],
    
    // Recent updates
    updates: [
      {
        date: "Aug 29, 2025",
        title: "Graduation Ceremony Held",
        content: "25 students successfully completed their Hifz this year and received recognition at a community event."
      },
      {
        date: "Aug 21, 2025",
        title: "New Teacher Training Program",
        content: "We trained 10 new teachers to enhance teaching quality and provide better guidance for students."
      },
      {
        date: "Aug 15, 2025",
        title: "Ramadan Sponsorship Drive",
        content: "During Ramadan, 50 new children were enrolled into the program with full sponsorship coverage."
      }
    ]
  },

}

export default function CampaignDetailPage() {
  const { campaignId } = useParams()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState("overview")
  const [selectedAmount, setSelectedAmount] = useState(null)
  const [customAmount, setCustomAmount] = useState("")
  const [isLiked, setIsLiked] = useState(false)
  
  // Get campaign data
  const campaign = campaignsData[campaignId]
  
  // Handle case where campaign doesn't exist
  useEffect(() => {
    if (!campaign) {
      navigate("/campaigns")
    }
  }, [campaign, navigate])
  
  if (!campaign) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="text-center p-8 rounded-2xl bg-white/80 backdrop-blur-sm shadow-xl">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-zinc-900 mb-2">Campaign Not Found</h1>
          <p className="text-zinc-600 mb-6">The campaign you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate("/campaigns")}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-3 text-white font-medium hover:from-amber-600 hover:to-orange-600 transition-all transform hover:scale-105 shadow-lg"
          >
            <ArrowLeft className="w-4 h-4 " />
            Back to Campaigns
          </button>
        </div>
      </div>
    )
  }

  const Icon = campaign.icon
  const progressPercentage = Math.round((campaign.raisedAmount / campaign.goalAmount) * 100)

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-amber-50/30 to-orange-50/30 dark:from-zinc-900 dark:via-amber-950/10 dark:to-orange-950/10  mt-8 md:mt-12">
      {/* Floating particles background effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-2 h-2 bg-amber-300/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-orange-400/30 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-amber-200/20 rounded-full animate-bounce"></div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 via-orange-300/15 to-amber-500/20 dark:from-amber-600/10 dark:via-orange-500/5 dark:to-amber-700/10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
        
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:py-20 md:py-24">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left: Enhanced Campaign Info */}
            <div className="space-y-8 ">
              <div className="space-y-6">
                {/* Icon and title with floating effect */}
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl blur-lg opacity-30 animate-pulse"></div>
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-amber-100 to-orange-100 ring-2 ring-amber-200/50 shadow-xl dark:from-amber-900/30 dark:to-orange-900/30">
                      <Icon className="h-10 w-10 text-amber-600" />
                    </div>
                  </div>
                  <div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-zinc-900 to-zinc-700 bg-clip-text text-transparent dark:from-white dark:to-zinc-300">
                      {campaign.title}
                    </h1>
                    <p className="text-xl text-amber-600 font-semibold mt-2 dark:text-amber-400">
                      {campaign.subtitle}
                    </p>
                  </div>
                </div>
                
                <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
                  {campaign.description}
                </p>
              </div>

              {/* Enhanced stats with animations */}
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  { label: "Raised", value: `$${campaign.raisedAmount.toLocaleString()}`, icon: TrendingUp, color: "from-green-500 to-emerald-500" },
                  { label: "Donors", value: campaign.donorsCount, icon: Users, color: "from-blue-500 to-cyan-500" },
                  { label: "Complete", value: `${progressPercentage}%`, icon: Target, color: "from-amber-500 to-orange-500" },
                  { label: "Days Left", value: campaign.daysLeft, icon: Clock, color: "from-purple-500 to-pink-500" }
                ].map((stat, index) => (
                  <div key={index} className="group relative">
                    <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                    <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-4 text-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-white/50">
                      <stat.icon className="w-6 h-6 mx-auto mb-2 text-zinc-600" />
                      <div className="text-2xl font-bold text-zinc-900 dark:text-white mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs font-medium text-zinc-600 dark:text-zinc-400 uppercase tracking-wide">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Floating achievement badge */}
              <div className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-3 text-white shadow-xl">
                <Award className="w-5 h-5" />
                <span className="font-semibold">Verified Impact Campaign</span>
                <Sparkles className="w-5 h-5 animate-pulse" />
              </div>
            </div>

            {/* Right: Enhanced Hero Image */}
            <div className="relative">
              {/* Floating gradient orbs */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-r from-amber-300/30 to-orange-300/30 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-r from-orange-300/30 to-amber-300/30 rounded-full blur-xl animate-pulse delay-75"></div>
              
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity"></div>
                <img
                  src={campaign.heroImage}
                  alt={campaign.title}
                  className="relative w-full h-72 lg:h-96 object-cover rounded-3xl shadow-2xl transition-transform group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-3xl" />
                
                {/* Floating stats overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/50">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-zinc-600">Current Impact</p>
                        <p className="text-lg font-bold text-zinc-900">{campaign.impact.current.split(' ').slice(0, 3).join(' ')}</p>
                      </div>
                      <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
                        <Target className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-3 md:px-4 py-12 ">
        <div className="grid gap-8 lg:grid-cols-3  ">
          {/* Left Column: Main Content */}
          <div className="lg:col-span-2 space-y-8  overflow-hidden  rounded-b-3xl">
            {/* Enhanced Progress Section */}
            <div className="relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-sm p-8 shadow-xl border border-white/50 dark:bg-zinc-800/80 dark:border-zinc-700/50 ">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-200/20 to-orange-200/20 rounded-full -translate-y-16 translate-x-16 "></div>
              
              <div className="relative ">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Campaign Progress</h3>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">Track our journey to the goal</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-zinc-900 dark:text-white">
                      ${campaign.raisedAmount.toLocaleString()}
                    </div>
                    <div className="text-sm text-zinc-600 dark:text-zinc-400">
                      of ${campaign.goalAmount.toLocaleString()}
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="w-full bg-gradient-to-r from-zinc-200 to-zinc-300 rounded-full h-4 shadow-inner dark:from-zinc-700 dark:to-zinc-600">
                    <div 
                      className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 h-4 rounded-full transition-all duration-1000 ease-out shadow-lg relative overflow-hidden"
                      style={{ width: `${progressPercentage}%` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-white/30 animate-pulse"></div>
                    </div>
                  </div>
                  <div className="mt-3 flex justify-between text-sm">
                    <span className="font-semibold text-amber-600">{progressPercentage}% Complete</span>
                    <span className="text-zinc-600 dark:text-zinc-400">{campaign.donorsCount} supporters joined</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Navigation Tabs */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 dark:bg-zinc-800/80 dark:border-zinc-700/50 ">
              <nav className="flex p-2 ">
                {[
                  { id: "overview", label: "Overview", icon: BookOpen },
                  { id: "impact", label: "Impact", icon: Target },
                  { id: "stories", label: "Stories", icon: Heart },
                  { id: "updates", label: "Updates", icon: Clock }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative flex-1 flex items-center justify-center gap-2 py-3 px-1 text-sm font-medium rounded-xl transition-all  ${
                      activeTab === tab.id
                        ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg transform scale-105"
                        : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100/50 dark:text-zinc-400 dark:hover:text-white dark:hover:bg-zinc-700/50"
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    {tab.label}
                    {activeTab === tab.id && (
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl blur opacity-50"></div>
                    )}
                  </button>
                ))}
              </nav>
            </div>

            {/* Enhanced Tab Content */}
            <div className="space-y-8 ">
              {activeTab === "overview" && (
                <div className="space-y-8">
                  {/* About Section */}
                  <div className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-sm p-8 shadow-xl border border-white/50 dark:bg-zinc-800/80 dark:border-zinc-700/50">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-amber-100/50 to-orange-100/50 rounded-full -translate-y-20 translate-x-20 group-hover:scale-110 transition-transform"></div>
                    
                    <div className="relative">
                      <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center">
                          <BookOpen className="w-5 h-5 text-white" />
                        </div>
                        About This Campaign
                      </h3>
                      <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
                        {campaign.fullDescription}
                      </p>
                      
                      {/* Campaign Details Grid */}
                      <div className="grid gap-6 sm:grid-cols-2">
                        {[
                          { icon: MapPin, label: "Location", value: campaign.location },
                          { icon: Calendar, label: "Timeline", value: `${campaign.startDate} - ${campaign.endDate}` },
                        ].map((detail, index) => (
                          <div key={index} className="group/item flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 transition-all dark:from-amber-950/20 dark:to-orange-950/20">
                            <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg group-hover/item:scale-110 transition-transform">
                              <detail.icon className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <p className="font-semibold text-zinc-900 dark:text-white">{detail.label}</p>
                              <p className="text-zinc-600 dark:text-zinc-400">{detail.value}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* What We Provide - Enhanced */}
                  <div className="rounded-3xl bg-white/80 backdrop-blur-sm p-8 shadow-xl border border-white/50 dark:bg-zinc-800/80 dark:border-zinc-700/50">
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8 flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                        <Gift className="w-5 h-5 text-white" />
                      </div>
                      What We Provide
                    </h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {campaign.provisions.map((provision, index) => (
                        <div key={index} className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 transition-all dark:hover:from-green-950/20 dark:hover:to-emerald-950/20">
                          <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                            <CheckCircle className="h-5 w-5 text-white" />
                          </div>
                          <p className="text-zinc-700 dark:text-zinc-300 font-medium leading-relaxed">{provision}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "impact" && (
                <div className="space-y-8">
                  {/* Impact Stats - Enhanced */}
                  <div className="rounded-3xl bg-white/80 backdrop-blur-sm p-8 shadow-xl border border-white/50 dark:bg-zinc-800/80 dark:border-zinc-700/50">
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8 flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center">
                        <Target className="w-5 h-5 text-white" />
                      </div>
                      Our Impact So Far
                    </h3>
                    <div className="grid gap-6 grid-cols-2 sm:grid-cols-2">
                      {campaign.impact.stats.map((stat, index) => (
                        <div key={index} className="group relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-amber-200/30 to-orange-200/30 rounded-2xl blur group-hover:blur-md transition-all"></div>
                          <div className="relative text-center p-6 rounded-2xl bg-gradient-to-br from-amber-50 via-white to-orange-50 hover:from-amber-100 hover:to-orange-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 border border-amber-200/50 dark:from-amber-950/30 dark:via-zinc-800 dark:to-orange-950/30">
                            <div className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-2">
                              {stat.value}
                            </div>
                            <div className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wide">
                              {stat.label}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Impact Description - Enhanced */}
                  <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-100 via-orange-50 to-amber-100 p-8 shadow-xl dark:from-amber-950/30 dark:via-orange-950/20 dark:to-amber-950/30">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-amber-300/20 to-orange-300/20 rounded-full -translate-y-24 translate-x-24"></div>
                    
                    <div className="relative flex items-start gap-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl">
                        <Target className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3">
                          Transforming Lives Through Education
                        </h3>
                        <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
                          {campaign.impact.current}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "stories" && (
                <div className="space-y-8">
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center">
                      <Heart className="w-5 h-5 text-white" />
                    </div>
                    Success Stories
                  </h3>
                  {campaign.stories.map((story, index) => (
                    <div key={index} className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-sm p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all hover:-translate-y-2 dark:bg-zinc-800/80 dark:border-zinc-700/50">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-200/20 to-rose-200/20 rounded-full -translate-y-16 translate-x-16 group-hover:scale-110 transition-transform"></div>
                      
                      <div className="relative flex items-start gap-6">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl blur opacity-30"></div>
                          <img
                            src={story.image}
                            alt={story.name}
                            className="relative h-16 w-16 rounded-2xl object-cover shadow-lg group-hover:scale-105 transition-transform"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <h4 className="text-xl font-bold text-zinc-900 dark:text-white">
                              {story.name}
                            </h4>
                            <span className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 rounded-full">
                              Age {story.age}
                            </span>
                          </div>
                          <blockquote className="text-lg text-zinc-600 dark:text-zinc-400 italic leading-relaxed border-l-4 border-amber-500 pl-4">
                            "{story.story}"
                          </blockquote>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "updates" && (
                <div className="space-y-8">
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    Recent Updates
                  </h3>
                  {campaign.updates.map((update, index) => (
                    <div key={index} className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-sm p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all hover:-translate-y-1 dark:bg-zinc-800/80 dark:border-zinc-700/50">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-200/20 to-cyan-200/20 rounded-full -translate-y-12 translate-x-12 group-hover:scale-110 transition-transform"></div>
                      
                      <div className="relative flex items-start gap-6">
                        <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                          <Clock className="h-7 w-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <h4 className="text-xl font-bold text-zinc-900 dark:text-white">
                              {update.title}
                            </h4>
                            <span className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-full whitespace-nowrap">
                              {update.date}
                            </span>
                          </div>
                          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                            {update.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {/* new section */}
            <div className="flex gap-6 flex-col ">
              <div className="relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-sm p-8 shadow-xl border border-white/50 dark:bg-zinc-800/80 dark:border-zinc-700/50">
              <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-br from-amber-200/20 to-orange-200/20 rounded-full -translate-y-14 translate-x-14"></div>
              
              <div className="relative">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center">
                    <BookMarked className="w-5 h-5 text-white" />
                  </div>
                  Campaign Details
                </h3>
                <div className="space-y-6">
                  {[
                    { icon: Calendar, label: "Duration", value: `${campaign.startDate} - ${campaign.endDate}`, color: "from-blue-500 to-cyan-500" },
                    { icon: MapPin, label: "Location", value: campaign.location, color: "from-green-500 to-emerald-500" },
                    { icon: Users, label: "Beneficiaries", value: "Direct impact on local communities", color: "from-purple-500 to-violet-500" }
                  ].map((detail, index) => (
                    <div key={index} className="group/detail flex items-start gap-4 p-4 rounded-2xl hover:bg-gradient-to-r hover:from-zinc-50 hover:to-amber-50/50 transition-all dark:hover:from-zinc-800/50 dark:hover:to-amber-950/10">
                      <div className={`w-12 h-12 bg-gradient-to-r ${detail.color} rounded-xl flex items-center justify-center shadow-lg group-hover/detail:scale-110 transition-transform`}>
                        <detail.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-zinc-900 dark:text-white mb-1">{detail.label}</p>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{detail.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-100 via-emerald-50 to-green-100 p-8 shadow-xl dark:from-green-950/30 dark:via-emerald-950/20 dark:to-green-950/30 ">
              <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-br from-green-300/20 to-emerald-300/20 rounded-full -translate-y-18 translate-x-18"></div>
              
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Verified Campaign</h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      Trusted and actively monitored
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {[
                    "100% of donations go directly to beneficiaries",
                    "Regular progress reports and transparency", 
                    "Established organization with 5+ years experience"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/50 transition-all dark:hover:bg-green-950/20">
                      <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                        <Star className="h-4 w-4 text-white fill-current" />
                      </div>
                      <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            </div>

          </div>

          {/* Right Column: Enhanced Donation Sidebar */}
          <div className="space-y-8 ">
            {/* Main Donation Card */}
            <div className="sticky top-20 group relative overflow-hidden rounded-3xl bg-white/90 backdrop-blur-md p-8 shadow-2xl border border-white/50 dark:bg-zinc-800/90 dark:border-zinc-700/50">
              {/* Background decorations */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-amber-300/20 to-orange-300/20 rounded-full group-hover:scale-110 transition-transform"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-orange-300/20 to-amber-300/20 rounded-full group-hover:scale-110 transition-transform delay-75"></div>
              
              <div className="relative">
                {/* Goal display */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full mb-4">
                    <Sparkles className="w-4 h-4 text-amber-600" />
                    <span className="text-sm font-semibold text-amber-700">Funding Goal</span>
                  </div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-2">
                    ${campaign.goalAmount.toLocaleString()}
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400 font-medium">Help us reach our target</p>
                </div>

                {/* Enhanced Progress Ring */}
                <div className="relative flex items-center justify-center mb-8">
                  <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="8"
                      className="text-zinc-200 dark:text-zinc-700"
                    />
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray={`${progressPercentage * 3.14} 314`}
                      className="transition-all duration-1000 ease-out"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#f59e0b" />
                        <stop offset="100%" stopColor="#ea580c" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-zinc-900 dark:text-white">{progressPercentage}%</div>
                      <div className="text-xs text-zinc-600 dark:text-zinc-400 font-medium">Complete</div>
                    </div>
                  </div>
                </div>

                {/* Donation amount buttons */}
                <div className="space-y-3 mb-8">
                  <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-4">Choose an amount</p>
                  {[25, 50, 100, 250].map((amount) => (
                    <button
                      key={amount}
                      onClick={() => setSelectedAmount(amount)}
                      className={`w-full group/btn relative overflow-hidden rounded-2xl p-4 text-left transition-all hover:shadow-lg hover:-translate-y-0.5 ${
                        selectedAmount === amount
                          ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg scale-105"
                          : "bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 border border-amber-200/50 dark:from-amber-950/20 dark:to-orange-950/20 dark:border-amber-800/30"
                      }`}
                    >
                      <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full -translate-y-8 translate-x-8 group-hover/btn:scale-110 transition-transform"></div>
                      <div className="relative flex items-center justify-between">
                        <div>
                          <span className={`text-2xl font-bold ${selectedAmount === amount ? "text-white" : "text-zinc-900 dark:text-white"}`}>
                            ${amount}
                          </span>
                          <div className={`text-sm mt-1 ${selectedAmount === amount ? "text-amber-100" : "text-zinc-600 dark:text-zinc-400"}`}>
                            {amount === 25 && "Sponsor supplies for 1 student"}
                            {amount === 50 && "Fund textbooks for 2 students"}
                            {amount === 100 && "Support 1 month of tuition"}
                            {amount === 250 && "Full scholarship for 1 semester"}
                          </div>
                        </div>
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          selectedAmount === amount ? "bg-white/20" : "bg-amber-200 dark:bg-amber-800"
                        }`}>
                          <Gift className={`w-5 h-5 ${selectedAmount === amount ? "text-white" : "text-amber-600"}`} />
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Custom amount input */}
                {/* <div className="mb-8">
                  <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-3">
                    Or enter custom amount
                  </label>
                  <div className="relative group/input">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl blur opacity-0 group-focus-within/input:opacity-20 transition-opacity"></div>
                    <DollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-amber-600 z-10" />
                    <input
                      type="number"
                      placeholder="Enter amount"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      className="relative w-full pl-12 pr-4 py-4 border-2 border-amber-200/50 rounded-2xl focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 transition-all bg-white/50 backdrop-blur-sm dark:border-amber-800/30 dark:bg-zinc-900/50 dark:text-white text-lg font-medium"
                    />
                  </div>
                </div> */}

                {/* Enhanced donation buttons */}
                <div className="space-y-4">
                  <Link to='/donate'>
                  <button className="group/donate w-full relative overflow-hidden rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 px-6 py-5 font-bold text-white transition-all hover:from-amber-600 hover:to-orange-600 focus:ring-4 focus:ring-amber-500/30 shadow-xl hover:shadow-2xl hover:-translate-y-1 text-lg mb-2">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 opacity-0 group-hover/donate:opacity-100 transition-opacity"></div>
                    <div className="relative flex items-center justify-center gap-3">
                      <Heart className="w-6 h-6" />
                      Donate Now
                      <Sparkles className="w-5 h-5 animate-pulse" />
                    </div>
                  </button>
                  </Link>
                  
                  <Link to='/contact'>
                  <button className="group/monthly w-full relative overflow-hidden rounded-2xl border-2 border-amber-200 px-6 py-4 font-semibold text-amber-700 transition-all hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50 hover:border-amber-300 hover:-translate-y-0.5 shadow-lg hover:shadow-xl dark:border-amber-800/50 dark:text-amber-400 dark:hover:bg-gradient-to-r dark:hover:from-amber-950/30 dark:hover:to-orange-950/30">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-orange-500 transform scale-x-0 group-hover/monthly:scale-x-100 transition-transform origin-left"></div>
                    <div className="flex items-center justify-center gap-3">
                      <Calendar className="w-5 h-5" />
                      Become a Monthly Sponsor
                    </div>
                  </button>
                  </Link>
                </div>

                {/* Enhanced share section */}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
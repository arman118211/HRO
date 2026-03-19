"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowLeft,
  Heart,
  Zap,
  Target,
  Users,
  TrendingUp,
  CheckCircle,
  Quote,
  Award,
  Flame,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { useParams, useNavigate, Link } from "react-router-dom"

export default function SponsorshipDetail() {
  const { id } = useParams()
  const navigate = useNavigate()

  const programsData = {
    1: {
      title: "Adopt a School",
      subtitle: "Educate a Generation",
      summary:
        "The Adopt a School initiative aims to transform the lives of hundreds of underprivileged and orphaned children in Nepal by providing them with access to free, quality education.",
      challenge:
        "Across Nepal, especially in rural and marginalized communities, thousands of children are deprived of education due to poverty, lack of resources, and social challenges. Many schools struggle with poor infrastructure, untrained teachers, and a lack of basic learning materials. As a result, countless children—particularly orphans—are unable to attend school or receive the quality education they deserve.",
      solution: [
        "Teacher Support: Ensuring qualified, motivated teachers for effective learning.",
        "Infrastructure Development: Building and maintaining classrooms, libraries, and sanitation facilities.",
        "Learning Materials: Supplying books, uniforms, and school supplies for students in need.",
        "Student Welfare: Covering tuition, meals, and extracurricular activities that promote all-round growth.",
      ],
      impact:
        "Adopting a school today means educating a generation for tomorrow. Each child empowered through education becomes a beacon of hope for their family and community. Over time, the program will help reduce poverty, strengthen communities, and cultivate a new generation of educated, responsible citizens who contribute to Nepal's sustainable development.",
      image: "/Education/School Funds.6.png",
      stats: [
        { label: "Children Educated", value: "200+" },
        { label: "Schools Adopted", value: "15+" },
        { label: "Teachers Trained", value: "50+" },
        { label: "Lives Changed", value: "1000+" },
      ],
    },
    2: {
      title: "Water for Life",
      subtitle: "Sponsor a Hand Pump",
      summary:
        "The Water for Life project provides clean and safe drinking water to impoverished and underserved communities in Nepal by installing hand pumps in areas where access to water is limited or unsafe.",
      challenge:
        "In many rural and remote areas of Nepal, families struggle daily to access clean drinking water. Women and children often walk long distances to collect contaminated water from unsafe sources, leading to widespread waterborne diseases such as diarrhea, cholera, and typhoid. This not only endangers health but also deprives children—especially girls—of their right to education, as they spend hours fetching water instead of attending school.",
      solution: [
        "Provide access to safe and clean water for dozens of families.",
        "Reduce waterborne diseases and improve community health.",
        "Empower women and children by freeing them from the burden of fetching water from distant sources.",
        "Enhance livelihoods, as communities can focus on education, work, and development instead of water collection.",
      ],
      impact:
        "A single hand pump can serve a community for many years, creating lasting change. Access to clean water improves health, boosts school attendance, and strengthens economic resilience. Over time, entire communities become healthier, more productive, and self-reliant.",
      image: "/Water 4 Life/5cd77c86-7edd-4eae-b8e1-a21f92150907.png",
      stats: [
        { label: "Families Served", value: "50+" },
        { label: "Hand Pumps", value: "25+" },
        { label: "Lives Impacted", value: "500+" },
        { label: "School Attendance Up", value: "85%" },
      ],
    },
    3: {
      title: "Restore Sight",
      subtitle: "Sponsor a Cataract Surgery",
      summary:
        "The Sponsor a Cataract Surgery initiative brings the gift of sight to the poor, elderly, and vulnerable individuals in Nepal who suffer from blindness due to cataracts.",
      challenge:
        "Cataract blindness is one of the leading causes of visual impairment in Nepal, particularly among the elderly and those living in poverty. Many people lose their vision simply because they cannot afford the cost of surgery. Without treatment, cataract patients face severe hardship—losing their ability to work, care for themselves, or contribute to their families. In poor communities, blindness often leads to isolation, dependence, and extreme vulnerability.",
      solution: [
        "Medical assessment and diagnosis",
        "Surgical procedure and medication",
        "Post-operative care and follow-up",
        "Transportation for patients in need",
      ],
      impact:
        "Restoring sight transforms not only the life of the patient but also the lives of their family members. With their vision restored, individuals can return to normal life, earn an income, and contribute to their communities. The ripple effect of a single cataract surgery extends far beyond one person—it strengthens families, alleviates poverty, and brings renewed hope to entire communities.",
      image: "/HealthCare/HealthCare1.png",
      stats: [
        { label: "Surgeries Completed", value: "300+" },
        { label: "Sight Restored", value: "98%" },
        { label: "Patients Helped", value: "1000+" },
        { label: "Success Rate", value: "99.5%" },
      ],
    },
    4: {
      title: "Medical Care",
      subtitle: "Sponsor a Patient",
      summary:
        "The Sponsor a Patient initiative supports free medical camps that provide essential healthcare services to poor and underserved communities across Nepal.",
      challenge:
        "In rural and marginalized parts of Nepal, thousands of families live without access to affordable healthcare. Common illnesses often go untreated, leading to severe complications and unnecessary suffering. The poor, elderly, women, and children are most affected, as they cannot afford hospital visits or medication. Lack of healthcare not only weakens individuals but also hinders community development and productivity.",
      solution: [
        "Free medical consultations with qualified healthcare professionals",
        "Essential medicines and treatments for common illnesses",
        "Health awareness sessions on hygiene, nutrition, and disease prevention",
        "Referrals for patients requiring advanced care",
      ],
      impact:
        "Each medical camp serves as a lifeline for hundreds of patients, addressing immediate health concerns while promoting long-term well-being. Access to free healthcare reduces preventable diseases, strengthens families, and improves community resilience. Healthy individuals can work, study, and care for their loved ones—creating a stronger, healthier society.",
      image: "/HealthCare/HealthCare5.png",
      stats: [
        { label: "Patients Treated", value: "2000+" },
        { label: "Medical Camps", value: "40+" },
        { label: "Medicines Provided", value: "5000+" },
        { label: "Communities Served", value: "50+" },
      ],
    },
    5: {
      title: "Quranic Education",
      subtitle: "Sponsor a Hafiz",
      summary:
        "The Sponsor a Hafiz initiative supports orphaned and underprivileged students in Nepal who aspire to memorize the Holy Quran (become a Hafiz).",
      challenge:
        "Many children in Nepal yearn to learn and memorize the Holy Quran but are unable to do so because of poverty and lack of access to proper Islamic education. Orphans and children from disadvantaged families often have no means to afford schooling, accommodation, or basic living needs. Without support, their potential to become future scholars and role models for their communities remains unfulfilled.",
      solution: [
        "Comprehensive Quranic education under qualified teachers (Ustadhs)",
        "Accommodation and nutritious meals in a safe and caring environment",
        "Islamic values and moral development alongside academic guidance",
        "Clothing, learning materials, and healthcare support",
      ],
      impact:
        "When you sponsor a Hafiz, your contribution creates a lifelong ripple of blessings. Each verse memorized and each prayer recited by the Hafiz becomes a source of reward for you. Beyond memorization, these children grow to become teachers, Imams, and leaders who guide others in faith and righteousness.",
      image: "https://www.nanhikali.org/wp-content/uploads/2018/12/five-groups-advocating-for-girls-education-in-india-1.jpg",
      stats: [
        { label: "Hafiz Sponsored", value: "80+" },
        { label: "Verses Memorized", value: "10000+" },
        { label: "Orphans Helped", value: "200+" },
        { label: "Schools", value: "5+" },
      ],
    },
    6: {
      title: "Build a School",
      subtitle: "Empower a Generation",
      summary:
        "The Build a School initiative is a cornerstone of our mission to provide quality education to children from poor, orphaned, and marginalized families in Nepal.",
      challenge:
        "In many rural and impoverished regions of Nepal, children walk long distances—or do not attend school at all—because there are no proper educational facilities nearby. Existing schools often lack classrooms, sanitation, furniture, and trained teachers. As a result, thousands of children, especially orphans and girls, are deprived of their right to education and a chance for a better life.",
      solution: [
        "Construction of classrooms and essential infrastructure",
        "Provision of desks, chairs, books, and learning materials",
        "Clean water and sanitation facilities",
        "Qualified teachers and holistic learning programs",
        "Scholarships for orphans and disadvantaged children",
      ],
      impact:
        "A school built today educates generations tomorrow. Every classroom established becomes a place where children learn literacy, values, and life skills that empower them to break the cycle of poverty. Educated children grow into responsible adults who contribute to society, lead their communities, and uplift future generations.",
      image: "/Education/Education Funds.3.png",
      stats: [
        { label: "Schools Built", value: "20+" },
        { label: "Classrooms", value: "100+" },
        { label: "Students Enrolled", value: "5000+" },
        { label: "Teachers Hired", value: "200+" },
      ],
    },
    7: {
      title: "Educate a Child",
      subtitle: "Empower a Generation",
      summary:
        "The Educate a Child initiative aims to provide free, quality education to orphaned and underprivileged children across Nepal.",
      challenge:
        "In Nepal, thousands of children are unable to attend school because their families cannot afford even the most basic educational expenses. Orphans and children from impoverished backgrounds face even greater barriers—often forced into labor or early marriage instead of classrooms. The lack of education perpetuates poverty and limits opportunities for entire communities.",
      solution: [
        "Free schooling from primary to secondary levels",
        "School supplies, uniforms, and learning materials",
        "Nutritious meals and healthcare support",
        "Moral, emotional, and academic guidance",
        "A safe and nurturing learning environment",
      ],
      impact:
        "Education is the most powerful tool for lasting change. Each child who receives an education gains the ability to rise above poverty, secure meaningful employment, and contribute positively to their community. Over time, educated children become leaders, innovators, and role models who help shape a better and more equitable society.",
      image: "/Education/School Funds.2.png",
      stats: [
        { label: "Children Sponsored", value: "500+" },
        { label: "Education Years", value: "2000+" },
        { label: "Scholarships", value: "1000+" },
        { label: "School Attendance", value: "95%" },
      ],
    },
    8: {
      title: "Sewing Skills",
      subtitle: "Stronger Women",
      summary:
        "The Sewing Skills initiative empowers women from disadvantaged communities in Nepal by providing them with professional sewing and tailoring training.",
      challenge:
        "In many rural and marginalized areas, women struggle to find sustainable work due to poverty, lack of education, or limited opportunities. This economic dependence often keeps them vulnerable to social challenges and prevents them from contributing fully to their families and communities. Without skills or income, women remain trapped in cycles of poverty.",
      solution: [
        "Comprehensive sewing and tailoring courses taught by skilled instructors",
        "Practical hands-on training to build confidence and proficiency",
        "Treadle sewing machines and basic supplies to start small businesses",
        "Business guidance and support to help women manage their work independently",
      ],
      impact:
        "Skilled and financially independent women uplift their families and communities. By learning sewing, women gain the confidence to make decisions, educate their children, and invest in their family's future. Over time, the program strengthens the social and economic fabric of communities, reduces poverty, and fosters a generation of self-reliant women.",
      image: "/Skill Development/3.png",
      stats: [
        { label: "Women Trained", value: "300+" },
        { label: "Income Generated", value: "$50000+" },
        { label: "Businesses Started", value: "250+" },
        { label: "Families Supported", value: "1000+" },
      ],
    },
    9: {
      title: "Winter Relief",
      subtitle: "Bring Warmth and Hope",
      summary:
        "Every winter, thousands of vulnerable families and children in Nepal face freezing temperatures without adequate clothing, blankets, or heating.",
      challenge:
        "In Nepal's remote and mountainous regions, temperatures can drop below freezing, making survival extremely difficult for impoverished families. Many households lack warm clothing, blankets, and safe shelter. Children, the elderly, and the sick are especially at risk of hypothermia, illness, and other cold-related dangers. Poverty exacerbates the situation, leaving families unable to afford even basic necessities for survival.",
      solution: [
        "Warm blankets and quilts",
        "Winter clothing, including coats, gloves, and shoes",
        "Heaters or safe heating solutions where possible",
        "Emergency shelter support for families in need",
      ],
      impact:
        "Your support not only saves lives during winter but also alleviates long-term health risks and reduces the burden on vulnerable families. Children can continue attending school safely, adults can work without fear of illness, and communities gain resilience against seasonal hardships.",
      image: "/Seasionals/127.png",
      stats: [
        { label: "Families Helped", value: "1000+" },
        { label: "Blankets Distributed", value: "3000+" },
        { label: "Winter Seasons", value: "10+" },
        { label: "Lives Saved", value: "500+" },
      ],
    },
    10: {
      title: "School Bus",
      subtitle: "Sponsor Safe Transportation",
      summary:
        "Many children in Nepal, especially in remote and rural areas, face long and unsafe journeys to attend school.",
      challenge:
        "In remote regions, children often walk long distances on dangerous roads, through forests, rivers, or steep terrain, just to reach school. These journeys expose them to accidents, harsh weather, and physical exhaustion, discouraging attendance and putting their safety at risk. For orphaned and disadvantaged children, the lack of safe transportation is a significant barrier to education.",
      solution: [
        "Safe daily transportation to and from school",
        "Improved school attendance and punctuality",
        "Peace of mind for families, knowing their children are secure",
        "Access to quality education for orphaned and disadvantaged children",
      ],
      impact:
        "Safe transportation ensures that children remain in school consistently, enhancing literacy, learning outcomes, and personal development. Over time, improved education empowers children to break the cycle of poverty, become self-reliant, and contribute positively to their communities.",
      image: "https://images.hindustantimes.com/img/2024/07/09/1600x900/Students-of-School-of-Eminence--Jawahar-Nagar--boa_1720545884933.jpg",
      stats: [
        { label: "Buses Sponsored", value: "15+" },
        { label: "Children Transported", value: "2000+" },
        { label: "School Attendance", value: "99%" },
        { label: "Accidents Prevented", value: "100+" },
      ],
    },
  }

  const program = programsData[id]

  const testimonials = [
    {
      name: "Ramesh Kumar",
      role: "Teacher - Adopted School",
      text: "Thanks to this program, we now have proper classrooms and teaching materials. Our students' performance has improved dramatically, and they're excited about learning.",
      image: "/teacher-nepal.jpg",
    },
    {
      name: "Priya Sharma",
      role: "Beneficiary - Water Program",
      text: "Before, we spent hours fetching water. Now with the hand pump, our children go to school instead. This has changed our family's life completely.",
      image: "/woman-nepal.jpg",
    },
    {
      name: "Mohan Singh",
      role: "Cataract Surgery Patient",
      text: "I couldn't see anymore. After the surgery, I can work again and support my family. I'm grateful for this second chance at life.",
      image: "/elderly-man-nepal.jpg",
    },
  ]

  const howItWorks = [
    {
      step: 1,
      title: "Choose Your Impact",
      description: "Select a sponsorship program that aligns with your values and interests.",
      icon: Target,
    },
    {
      step: 2,
      title: "Make Your Contribution",
      description: "Contribute securely through our transparent and verified payment process.",
      icon: Heart,
    },
    {
      step: 3,
      title: "Support Direct Impact",
      description: "Your funds go directly to communities, creating measurable change.",
      icon: TrendingUp,
    },
    {
      step: 4,
      title: "Receive Updates",
      description: "Stay connected with regular progress reports and impact stories from the field.",
      icon: Award,
    },
  ]

  const [carouselIndex, setCarouselIndex] = useState(0)

  const carouselPrograms = [
    {
      id: 1,
      title: "Build a School",
      description:
        "Construct safe, inclusive learning spaces with proper classrooms, libraries, and sanitation facilities for underprivileged children.",
      image: "/new-school-building-construction-in-nepal-village.jpg",
      urgency: "Critical",
      urgencyColor: "from-red-600 to-red-700",
      amount: "$5,000",
      impact: "Educates 200+ children",
      progress: 65,
    },
    {
      id: 2,
      title: "Water for Life",
      description:
        "Install hand pumps to provide clean drinking water to remote communities, preventing waterborne diseases and improving health.",
      image: "/women-fetching-clean-water-from-hand-pump.jpg",
      urgency: "Urgent",
      urgencyColor: "from-orange-600 to-orange-700",
      amount: "$800",
      impact: "Serves 50+ families",
      progress: 45,
    },
    {
      id: 3,
      title: "Cataract Surgery",
      description:
        "Restore sight to elderly and vulnerable individuals through affordable cataract surgeries, enabling them to live independently.",
      image: "/elderly-patient-after-successful-cataract-surgery-.jpg",
      urgency: "High Priority",
      urgencyColor: "from-amber-600 to-amber-700",
      amount: "$300",
      impact: "1 surgery = 1 life restored",
      progress: 72,
    },
  ]

  const nextSlide = () => {
    setCarouselIndex((prev) => (prev + 1) % carouselPrograms.length)
  }

  const prevSlide = () => {
    setCarouselIndex((prev) => (prev - 1 + carouselPrograms.length) % carouselPrograms.length)
  }

  if (!program) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-amber-50 to-yellow-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Program Not Found</h1>
          <button onClick={() => navigate("/")} className="text-amber-600 hover:text-amber-700 font-semibold">
            Go Back to Programs
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-amber-50 to-yellow-50">

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center  md:mb-14 md:mt-16 mt-8">
          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <p className="text-amber-600 font-semibold mb-2">{program.subtitle}</p>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">{program.title}</h1>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">{program.summary}</p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="grid grid-cols-2 gap-6 mb-8"
            >
              {program.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  className="bg-gradient-to-br from-amber-100 to-yellow-100 border-2 border-amber-200 rounded-xl p-6"
                >
                  <p className="text-3xl font-bold text-amber-600 mb-2">{stat.value}</p>
                  <p className="text-sm font-semibold text-gray-700">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
            <Link to='/donate'>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Heart className="w-6 h-6 fill-white" />
              Sponsor This Program
            </motion.button>
            </Link>
          </div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="rounded-2xl overflow-hidden shadow-2xl border-4 border-amber-200"
          >
            <img src={program.image || "/placeholder.svg"} alt={program.title} className="w-full h-96 object-cover" />
          </motion.div>
        </div>
      </motion.div>

      {/* The Challenge Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-rose-50 to-red-50 py-16 border-y-2 border-rose-200 my-8"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-12 bg-gradient-to-b from-rose-600 to-red-600 rounded-full" />
            <h2 className="text-4xl font-bold text-gray-900">The Challenge</h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">{program.challenge}</p>
        </div>
      </motion.section>

      {/* The Solution Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="flex items-center gap-4 mb-8">
          <div className="w-1 h-12 bg-gradient-to-b from-emerald-600 to-green-600 rounded-full" />
          <h2 className="text-4xl font-bold text-gray-900">Our Solution</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {program.solution.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-gradient-to-br from-emerald-50 to-green-50 border-2 border-emerald-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center mt-1">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-700 font-semibold text-base leading-relaxed">{point}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>


      {/* Long-Term Impact Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-purple-50 to-indigo-50 py-16 border-y-2 border-purple-200 my-8"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-1 h-12 bg-gradient-to-b from-purple-600 to-indigo-600 rounded-full" />
            <h2 className="text-4xl font-bold text-gray-900">Long-Term Impact</h2>
          </div>
          <div className="bg-white rounded-xl p-8 border-2 border-purple-200">
            <p className="text-lg text-gray-700 leading-relaxed">{program.impact}</p>
          </div>
        </div>
      </motion.section>

      {/* Real Stories of Change Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Real Stories of Change</h2>
          <p className="text-lg text-gray-600">Hear from those whose lives have been transformed</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="bg-gradient-to-br from-amber-50 to-yellow-50 border-2 border-amber-200 rounded-xl p-8 hover:shadow-xl transition-shadow duration-300 relative"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.2 }}
                className="absolute -top-6 right-8"
              >
                <Quote className="w-8 h-8 text-amber-400 fill-amber-400 opacity-50" />
              </motion.div>

              <p className="text-gray-700 leading-relaxed mb-6 italic">"{testimonial.text}"</p>

              <div className="flex items-center gap-4 pt-6 border-t-2 border-amber-200">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-amber-300"
                />
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-amber-700 font-semibold">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Key Benefits Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-yellow-50 to-orange-50 py-16 border-y-2 border-yellow-200 my-8"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Key Benefits</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0">
                <CheckCircle className="w-8 h-8 text-emerald-600 fill-emerald-600 mt-1" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Transparency</h3>
                <p className="text-gray-700">
                  Track your contribution and see direct impact through regular reports and updates from the field.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0">
                <Flame className="w-8 h-8 text-rose-600 fill-rose-600 mt-1" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Direct Impact</h3>
                <p className="text-gray-700">
                  Your funds go directly to communities. No middlemen, just real change where it matters most.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0">
                <Users className="w-8 h-8 text-blue-600 fill-blue-600 mt-1" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Community Partnership</h3>
                <p className="text-gray-700">
                  Work alongside local communities who are actively involved in planning and implementing solutions.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0">
                <TrendingUp className="w-8 h-8 text-amber-600 fill-amber-600 mt-1" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Lasting Change</h3>
                <p className="text-gray-700">
                  Our programs create sustainable solutions that deliver impact for generations to come.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center"
      >
        <div className="bg-gradient-to-r from-amber-100 via-yellow-100 to-amber-100 border-2 border-amber-300 rounded-2xl p-12">
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
            className="mb-6"
          >
            <Target className="w-16 h-16 mx-auto text-amber-600 mb-4" />
          </motion.div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Be the Change Today</h2>
          <p className="text-gray-700 mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
            Your sponsorship creates a ripple effect of positive change. Every contribution transforms lives and builds
            hope for communities in Nepal. Take action now and become part of this movement.
          </p>
          <Link to='/donate'>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl text-lg"
          >
            <Heart className="w-6 h-6 fill-white" />
            Sponsor Now and Make a Difference
          </motion.button>
          </Link>
        </div>
      </motion.section>

      <div className="h-1 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 mt-16" />
    </div>
  )
}

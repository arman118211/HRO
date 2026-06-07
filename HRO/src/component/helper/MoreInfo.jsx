import { motion } from "framer-motion";
import {
	BookOpen,
	Users,
	MapPin,
	Calendar,
	Heart,
	Star,
	CheckCircle,
	ArrowRight,
	GraduationCap,
	School,
	UserCheck,
	TrendingUp,
	Globe,
	Lightbulb,
} from "lucide-react";
import { Link } from "react-router-dom";
import { trackEvent } from "../../utills/analytics";

// Reusable Project Page Component
export const ProjectPage = ({
	// Hero Section Props
	heroIcon: HeroIcon = BookOpen,
	heroTitle = "Project Title",
	heroSubtitle = "Project description goes here",
	heroCtaText = "Join Our Mission",
	heroCtaLink = "/contact",

	// Color Scheme
	colorScheme = {
		primary: "#F59E0B", // Amber-500
		primaryDark: "#D97706", // Amber-600
		primaryLight: "#FCD34D", // Amber-300
	},

	// Stats Section Props
	stats = [],

	// About Section Props
	aboutTitle = "About Our Project",
	aboutDescription = "",
	aboutImage = "",
	missionTitle = "Our Mission",
	missionDescription = "",
	missionPoints = [],

	// Objectives Section Props
	objectives = [],

	// Programs Section Props
	programs = [],

	// Achievements Section Props
	achievements = [],

	// Testimonials Section Props
	testimonials = [],

	// Impact Section Props
	impactTitle = "Creating Lasting Impact",
	impactDescription = "",
	impactPoints = [],
	impactImage = "",

	// CTA Section Props
	ctaTitle = "Join Us in Making a Difference",
	ctaDescription = "",
	ctaDonateLink = "/donate",
	ctaVolunteerLink = "/volunteer",
}) => {
	const fadeInUp = {
		initial: { opacity: 0, y: 60 },
		animate: { opacity: 1, y: 0 },
		transition: { duration: 0.6 },
	};

	const staggerContainer = {
		animate: {
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	return (
		<div className="min-h-screen bg-white overflow-hidden">
			{/* Stats Section */}
			{stats.length > 0 && (
				<section className="py-16 bg-gray-50">
					<div className="container mx-auto px-6">
						<motion.div
							className="grid grid-cols-2 md:grid-cols-4 gap-8"
							variants={staggerContainer}
							initial="initial"
							whileInView="animate"
							viewport={{ once: true }}
						>
							{stats.map((stat, index) => (
								<motion.div
									key={index}
									variants={fadeInUp}
									className="text-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
								>
									<div
										className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
										style={{ backgroundColor: `${colorScheme.primary}20` }}
									>
										<stat.icon
											style={{ color: colorScheme.primary }}
											size={32}
										/>
									</div>
									<h3 className="text-3xl font-bold text-gray-800 mb-2">
										{stat.number}
									</h3>
									<p className="text-gray-600">{stat.label}</p>
								</motion.div>
							))}
						</motion.div>
					</div>
				</section>
			)}

			{/* About Project Section */}
			{aboutDescription && (
				<section className="py-20">
					<div className="container mx-auto px-6">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className="max-w-4xl mx-auto text-center mb-16"
						>
							<h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
								{aboutTitle}
							</h2>
							<p className="text-xl text-gray-600 leading-relaxed">
								{aboutDescription}
							</p>
						</motion.div>

						<div className="grid md:grid-cols-2 gap-12 items-center">
							<motion.div
								initial={{ opacity: 0, x: -50 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6 }}
							>
								<img
									src={aboutImage}
									alt="Project"
									className="rounded-2xl shadow-2xl"
								/>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, x: 50 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6 }}
								className="space-y-6"
							>
								<h3 className="text-3xl font-bold text-gray-800">
									{missionTitle}
								</h3>
								<p className="text-gray-600 text-lg leading-relaxed">
									{missionDescription}
								</p>
								<div className="space-y-4">
									{missionPoints.map((point, index) => (
										<div key={index} className="flex items-center gap-3">
											<CheckCircle
												style={{ color: colorScheme.primary }}
												size={24}
											/>
											<span className="text-gray-700">{point}</span>
										</div>
									))}
								</div>
							</motion.div>
						</div>
					</div>
				</section>
			)}

			{/* Objectives Section */}
			{objectives.length > 0 && (
				<section className="py-20 bg-gray-50">
					<div className="container mx-auto px-6">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className="text-center mb-16"
						>
							<h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
								Our Objectives
							</h2>
							<p className="text-xl text-gray-600 max-w-3xl mx-auto">
								We work towards specific, measurable goals that create lasting
								impact
							</p>
						</motion.div>

						<motion.div
							className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
							variants={staggerContainer}
							initial="initial"
							whileInView="animate"
							viewport={{ once: true }}
						>
							{objectives.map((objective, index) => (
								<motion.div
									key={index}
									variants={fadeInUp}
									className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
								>
									<div
										className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
										style={{ backgroundColor: `${colorScheme.primary}20` }}
									>
										<objective.icon
											style={{ color: colorScheme.primary }}
											size={32}
										/>
									</div>
									<h3 className="text-xl font-bold text-gray-800 mb-4">
										{objective.title}
									</h3>
									<p className="text-gray-600 leading-relaxed">
										{objective.description}
									</p>
								</motion.div>
							))}
						</motion.div>
					</div>
				</section>
			)}

			{/* Programs Section */}
			{programs.length > 0 && (
				<section className="py-20">
					<div className="container mx-auto px-6">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className="text-center mb-16"
						>
							<h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
								Our Programs
							</h2>
							<p className="text-xl text-gray-600 max-w-3xl mx-auto">
								Comprehensive programs designed to address diverse needs
							</p>
						</motion.div>

						<motion.div
							className="grid md:grid-cols-2 gap-8"
							variants={staggerContainer}
							initial="initial"
							whileInView="animate"
							viewport={{ once: true }}
						>
							{programs.map((program, index) => (
								<motion.div
									key={index}
									variants={fadeInUp}
									className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
								>
									<h3 className="text-2xl font-bold text-gray-800 mb-4">
										{program.title}
									</h3>
									<p className="text-gray-600 mb-6 leading-relaxed">
										{program.description}
									</p>
									<div className="space-y-3">
										<div className="flex items-center gap-3">
											<Users style={{ color: colorScheme.primary }} size={20} />
											<span className="text-gray-700 font-medium">
												{program.beneficiaries}
											</span>
										</div>
										<div className="flex items-center gap-3">
											<Calendar
												style={{ color: colorScheme.primary }}
												size={20}
											/>
											<span className="text-gray-700 font-medium">
												{program.duration}
											</span>
										</div>
									</div>
								</motion.div>
							))}
						</motion.div>
					</div>
				</section>
			)}

			{/* Achievements Section */}
			{achievements.length > 0 && (
				<section
					className="py-20 text-white"
					style={{ backgroundColor: colorScheme.primary }}
				>
					<div className="container mx-auto px-6">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className="text-center mb-16"
						>
							<h2 className="text-4xl md:text-5xl font-bold mb-6">
								Our Achievements
							</h2>
							<p className="text-xl opacity-90 max-w-3xl mx-auto">
								Milestones that reflect our commitment to excellence
							</p>
						</motion.div>

						<motion.div
							className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
							variants={staggerContainer}
							initial="initial"
							whileInView="animate"
							viewport={{ once: true }}
						>
							{achievements.map((achievement, index) => (
								<motion.div
									key={index}
									variants={fadeInUp}
									className="flex items-start gap-4 bg-white/10 p-6 rounded-xl backdrop-blur-sm"
								>
									<CheckCircle
										className="text-white mt-1 flex-shrink-0"
										size={24}
									/>
									<p className="text-white leading-relaxed">{achievement}</p>
								</motion.div>
							))}
						</motion.div>
					</div>
				</section>
			)}

			{/* Testimonials Section */}
			{testimonials.length > 0 && (
				<section className="py-20 bg-gray-50">
					<div className="container mx-auto px-6">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className="text-center mb-16"
						>
							<h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
								Success Stories
							</h2>
							<p className="text-xl text-gray-600 max-w-3xl mx-auto">
								Hear from the lives we've touched and communities we've
								transformed
							</p>
						</motion.div>

						<motion.div
							className="grid md:grid-cols-3 gap-8"
							variants={staggerContainer}
							initial="initial"
							whileInView="animate"
							viewport={{ once: true }}
						>
							{testimonials.map((testimonial, index) => (
								<motion.div
									key={index}
									variants={fadeInUp}
									className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
								>
									<div className="flex gap-1 mb-4">
										{[...Array(testimonial.rating)].map((_, i) => (
											<Star
												key={i}
												style={{ color: colorScheme.primary }}
												className="fill-current"
												size={20}
											/>
										))}
									</div>
									<p className="text-gray-600 mb-6 leading-relaxed italic">
										"{testimonial.text}"
									</p>
									<div>
										<h4 className="font-bold text-gray-800">
											{testimonial.name}
										</h4>
										<p
											className="font-medium"
											style={{ color: colorScheme.primary }}
										>
											{testimonial.role}
										</p>
									</div>
								</motion.div>
							))}
						</motion.div>
					</div>
				</section>
			)}

			{/* Impact Section */}
			{impactDescription && (
				<section className="py-20">
					<div className="container mx-auto px-6">
						<div className="grid lg:grid-cols-2 gap-12 items-center">
							<motion.div
								initial={{ opacity: 0, x: -50 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6 }}
							>
								<h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
									{impactTitle}
								</h2>
								<p className="text-xl text-gray-600 mb-8 leading-relaxed">
									{impactDescription}
								</p>
								<div className="space-y-6">
									{impactPoints.map((point, index) => (
										<div key={index} className="flex items-center gap-4">
											<div
												className="w-12 h-12 rounded-full flex items-center justify-center"
												style={{ backgroundColor: `${colorScheme.primary}20` }}
											>
												<point.icon
													style={{ color: colorScheme.primary }}
													size={24}
												/>
											</div>
											<div>
												<h3 className="font-bold text-gray-800">
													{point.title}
												</h3>
												<p className="text-gray-600">{point.description}</p>
											</div>
										</div>
									))}
								</div>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, x: 50 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6 }}
							>
								<img
									src={impactImage}
									alt="Impact"
									className="rounded-2xl shadow-2xl"
								/>
							</motion.div>
						</div>
					</div>
				</section>
			)}

			{/* Call to Action Section */}
			<section
				className="py-20 text-white"
				style={{
					background: `linear-gradient(to right, ${colorScheme.primary}, ${colorScheme.primaryDark})`,
				}}
			>
				<div className="container mx-auto px-6 text-center">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="max-w-4xl mx-auto"
					>
						<h2 className="text-4xl md:text-5xl font-bold mb-6">{ctaTitle}</h2>
						<p className="text-xl mb-10 opacity-90">{ctaDescription}</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link
								to={ctaDonateLink}
								onClick={() =>
									trackEvent("project_donate_click", {
										project: heroTitle,
										destination: ctaDonateLink,
									})
								}
							>
								<motion.button
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className="bg-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300 inline-flex items-center justify-center gap-2"
									style={{ color: colorScheme.primary }}
								>
									<Heart size={20} />
									Donate Now
								</motion.button>
							</Link>
							<Link
								to={ctaVolunteerLink}
								onClick={() =>
									trackEvent("project_volunteer_click", {
										project: heroTitle,
										destination: ctaVolunteerLink,
									})
								}
							>
								<motion.button
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white transition-all duration-300 inline-flex items-center justify-center gap-2"
									style={{
										"&:hover": {
											color: colorScheme.primary,
										},
									}}
									onMouseEnter={(e) =>
										(e.currentTarget.style.color = colorScheme.primary)
									}
									onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
								>
									<Users size={20} />
									Volunteer With Us
								</motion.button>
							</Link>
						</div>
					</motion.div>
				</div>
			</section>
		</div>
	);
};

// Example usage with Education data
const EducationPage = () => {
	return (
		<ProjectPage
			// Hero Props
			heroIcon={BookOpen}
			heroTitle="Education for All"
			heroSubtitle="Empowering communities through quality education and creating pathways to a brighter future"
			heroCtaText="Join Our Mission"
			heroCtaLink="/contact"
			// Color Scheme (Golden Yellow)
			colorScheme={{
				primary: "#F59E0B",
				primaryDark: "#D97706",
				primaryLight: "#FCD34D",
			}}
			// Stats
			stats={[
				{ icon: Users, number: "5,000+", label: "Students Educated" },
				{ icon: School, number: "50+", label: "Schools Supported" },
				{ icon: GraduationCap, number: "95%", label: "Success Rate" },
				{ icon: MapPin, number: "25+", label: "Communities Reached" },
			]}
			// About Section
			aboutTitle="About Our Education Project"
			aboutDescription="Our education project is dedicated to breaking the cycle of poverty through quality education. We believe that every child deserves access to learning opportunities that can transform their lives and communities. Since our inception, we have been working tirelessly to bridge the educational gap in underserved communities."
			aboutImage="https://oecdedutoday.com/wp-content/uploads/2021/06/Skills-outlook-2021-blog.jpg"
			missionTitle="Our Mission"
			missionDescription="To provide inclusive, equitable, and quality education that empowers individuals and communities to achieve their full potential. We focus on creating sustainable educational ecosystems that continue to thrive long after our direct intervention."
			missionPoints={[
				"Accessible education for all children",
				"Community-driven learning initiatives",
				"Sustainable educational infrastructure",
			]}
			// Objectives
			objectives={[
				{
					icon: BookOpen,
					title: "Quality Education Access",
					description:
						"Providing access to quality education for underprivileged children in rural and urban areas.",
				},
				{
					icon: Users,
					title: "Teacher Training",
					description:
						"Training and supporting teachers with modern teaching methodologies and resources.",
				},
				{
					icon: Lightbulb,
					title: "Digital Literacy",
					description:
						"Introducing digital learning tools and computer literacy programs.",
				},
				{
					icon: Heart,
					title: "Holistic Development",
					description:
						"Focusing on overall personality development including life skills and values.",
				},
			]}
			// Programs
			programs={[
				{
					title: "Primary Education Support",
					description:
						"Supporting children aged 6-12 with basic education, learning materials, and nutritional support.",
					beneficiaries: "2,500+ children",
					duration: "Ongoing since 2018",
				},
				{
					title: "Adult Literacy Program",
					description:
						"Teaching reading, writing, and basic mathematics to adults who missed formal education.",
					beneficiaries: "1,200+ adults",
					duration: "Evening classes",
				},
				{
					title: "Scholarship Program",
					description:
						"Providing financial assistance to meritorious students from economically weak backgrounds.",
					beneficiaries: "500+ students",
					duration: "Annual program",
				},
				{
					title: "Digital Learning Centers",
					description:
						"Setting up computer labs and digital learning facilities in rural schools.",
					beneficiaries: "30+ schools",
					duration: "Established 2020",
				},
			]}
			// Achievements
			achievements={[
				"Established 15 learning centers across rural communities",
				"Trained over 200 teachers in modern teaching methods",
				"Distributed 10,000+ educational kits and supplies",
				"Achieved 95% literacy rate in target communities",
				"Launched mobile education units for remote areas",
				"Partnered with 25+ local schools for infrastructure development",
			]}
			// Testimonials
			testimonials={[
				{
					name: "Priya Sharma",
					role: "Parent",
					text: "Thanks to this program, my daughter can now read and write fluently. The teachers are so dedicated and caring.",
					rating: 5,
				},
				{
					name: "Rajesh Kumar",
					role: "Village Head",
					text: "The education project has transformed our village. Children who never went to school are now learning with enthusiasm.",
					rating: 5,
				},
				{
					name: "Sunita Devi",
					role: "Adult Learner",
					text: "At 45, I learned to read and write. Now I can help my children with their homework and manage my small business better.",
					rating: 5,
				},
			]}
			// Impact Section
			impactTitle="Creating Lasting Impact"
			impactDescription="Our education project goes beyond traditional learning. We create sustainable change that ripples through generations, building stronger communities and brighter futures."
			impactPoints={[
				{
					icon: TrendingUp,
					title: "Improved Literacy Rates",
					description: "95% improvement in reading and writing skills",
				},
				{
					icon: Globe,
					title: "Community Development",
					description: "Stronger, more educated communities",
				},
				{
					icon: UserCheck,
					title: "Employment Opportunities",
					description: "Better job prospects for educated individuals",
				},
			]}
			impactImage="https://cdn.teachstarter.com/fileserver/2019/07/kids-celebrating.jpg"
			// CTA Section
			ctaTitle="Join Us in Transforming Lives"
			ctaDescription="Your support can help us reach more children and communities. Together, we can build a world where quality education is accessible to all."
			ctaDonateLink="/donate"
			ctaVolunteerLink="/volunteer"
		/>
	);
};

export default EducationPage;

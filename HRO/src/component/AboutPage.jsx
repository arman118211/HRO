import React, { useState } from "react";
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
	Phone,
	Droplet,
} from "lucide-react";
import { Link } from "react-router-dom";

const AboutPage = () => {
	const [activeTab, setActiveTab] = useState("mission");
	const [showVideo, setShowVideo] = useState(false);
	const [currentExecutiveSlide, setCurrentExecutiveSlide] = useState(0);
	const [currentTeamSlide, setCurrentTeamSlide] = useState(0);

	const stats = [
		{
			icon: Users,
			label: "Lives Impacted",
			value: "50,000+",
			color: "text-blue-600",
		},
		{
			icon: Globe,
			label: "Districts Reached",
			value: "8+",
			color: "text-green-600",
		},
		{
			icon: HandHeart,
			label: "Active Volunteers",
			value: "2,500",
			color: "text-purple-600",
		},
		{
			icon: Calendar,
			label: "Years of Service",
			value: "15+",
			color: "text-orange-600",
		},
	];

	const milestones = [
		{
			year: "1997",
			title: "Organisation",
			description:
				"Started with a small team of 5 passionate individuals in Nepal",
		},
		{
			year: "2012",
			title: "In Different Districts",
			description:
				"Expanded operations to serve communities in developing districts",
		},
		{
			year: "2016",
			title: "Major Grant Received",
			description: "Secured $2M funding to scale our education initiatives",
		},
		{
			year: "2019",
			title: "Digital Transformation",
			description: "Launched online platforms to reach remote communities",
		},
		{
			year: "2023",
			title: "50K Milestone",
			description: "Celebrated impacting over 50,000 lives in the country",
		},
	];

	const teamMembers = [
		{
			name: "Ghufran Ahmad Shakir",
			role: "Secretary General",
			experience: "15+ years in nonprofit leadership",
			image: "/Executive/Ghufran Ahmad Shakir, Secretary General.JPG",
			bio: "Former UN advisor with expertise in international development and humanitarian aid.",
			education: "PhD in International Relations, Harvard University",
		},
		{
			name: "Abdus Salam Musalman",
			role: "Finance Secretary",
			experience: "12+ years in program management",
			image: "/Executive/Abdus Salam Musalman, Finance Secretary.jpg",
			bio: "Specializes in community-based development programs and impact measurement.",
			education: "MSW, Columbia University",
		},
		{
			name: "Khalil Ahmad Miya",
			role: "Executive Member",
			experience: "20+ years in global health",
			image: "/Executive/Khalil Ahmad Miya, Executive Member.jpg",
			bio: "Leading our healthcare initiatives with focus on maternal and child health.",
			education: "MD, Johns Hopkins University",
		},
		{
			name: "Nazir Ahmad Faquir",
			role: "Executive Member",
			experience: "10+ years in logistics",
			image: "/Executive/Nazir Ahmad Faquir, Executive Member.jpg",
			bio: "Ensures efficient delivery of programs and resources to beneficiaries.",
			education: "MBA in Operations Management",
		},
		{
			name: "Shamsul Huda Musalman",
			role: "Assistant Secretary",
			experience: "18+ years in education",
			image: "/Executive/Shamsul Huda Musalman, Assistant Secretary.jpeg",
			bio: "Develops innovative learning programs for children in remote communities.",
			education: "PhD in Educational Psychology, Stanford",
		},
		{
			name: "Tahir Mahmood",
			role: "Vice – Chairman",
			experience: "8+ years in field operations",
			image: "/Executive/Tahir Mahmood, Vice – Chairman.jpg",
			bio: "Manages on-ground operations and community engagement across Africa.",
			education: "MA in Development Studies, Oxford",
		},
	];

	const teams = [
		{
			name: "Ghufran Ahmad Shakir",
			role: "Executive Director",
			experience: "15+ years in nonprofit leadership",
			image: "/Executive/Ghufran Ahmad Shakir, Secretary General.JPG",
			bio: "Former UN advisor with expertise in international development and humanitarian aid.",
			education: "PhD in International Relations, Harvard University",
		},
		{
			name: "Hafiz Ziyaur Rahman",
			role: "Project coordinator",
			experience: "12+ years in program management",
			image: "/Our Team/Hafiz Ziyaur Rahman, Project coordinator.jpeg",
			bio: "Specializes in community-based development programs and impact measurement.",
			education: "MSW, Columbia University",
		},
		{
			name: "Md. Irshad Ansari",
			role: "Project Coordinator",
			experience: "20+ years in global health",
			image: "/Our Team/Md. Irshad Ansari, Project Coordinator.jpeg",
			bio: "Leading our healthcare initiatives with focus on maternal and child health.",
			education: "MD, Johns Hopkins University",
		},
		{
			name: "Mohammad Aslam Halwai",
			role: "Project coordinator",
			experience: "10+ years in logistics",
			image: "/Our Team/Mohammad Aslam Halwai,Project coordinator.jpeg",
			bio: "Ensures efficient delivery of programs and resources to beneficiaries.",
			education: "MBA in Operations Management",
		},
		{
			name: "Mozammil Haque",
			role: "Project Coordinator",
			experience: "18+ years in education",
			image: "/Our Team/Mozammil Haque,Project Coordinator.jpeg",
			bio: "Develops innovative learning programs for children in remote communities.",
			education: "PhD in Educational Psychology, Stanford",
		},
		{
			name: "Saddam Hussain",
			role: "Programs coordinator",
			experience: "8+ years in field operations",
			image: "/Our Team/Saddam Hussain, Programs coordinator.jpeg",
			bio: "Manages on-ground operations and community engagement across Africa.",
			education: "MA in Development Studies, Oxford",
		},
		{
			name: "Suhail Ahmad Shah",
			role: "Field officer",
			experience: "8+ years in field operations",
			image: "/Our Team/Suhail Ahmad Shah, Field officer.jpeg",
			bio: "Manages on-ground operations and community engagement across Africa.",
			education: "MA in Development Studies, Oxford",
		},
		{
			name: "Tahir Mahmood",
			role: "Program Manager",
			experience: "8+ years in field operations",
			image: "/Our Team/Tahir Mahmood, Program Manager.jpg",
			bio: "Manages on-ground operations and community engagement across Africa.",
			education: "MA in Development Studies, Oxford",
		},
	];

	const values = [
		{
			icon: Heart,
			title: "Mutual Respect",
			description:
				"Recognize the innate worth of all people and the value of diversity",
		},
		{
			icon: Shield,
			title: "Equity and Justice",
			description:
				"Work to ensure equal opportunity for everyone, irrespective of race, gender, color, class, ethnicity, disability and location.",
		},
		{
			icon: Users,
			title: "Care for All",
			description:
				"WProvide care for vulnerable groups; orphans, widows and elderly people.",
		},
		{
			icon: Lightbulb,
			title: "Honesty and Transparency",
			description:
				"Being accountable at all levels for the effectiveness of our actions and open in our judgments and communications with others.",
		},
		{
			icon: Target,
			title: "Self - Respect",
			description:
				"To help the poor without the feeling of humiliation.",
		},
		{
			icon: Globe,
			title: "Solidarity with the Poor",
			description:
				"Powerless and excluded will be the only bias in our commitment to the fight against poverty.",
		},
	];

	const programs = [
		{
			title: "Education for All",
			description:
				"Providing quality education and learning opportunities to underserved communities Nepal.",
			impact: "15,000 children educated",
			icon: GraduationCap,
			color: "bg-blue-500",
		},
		{
			title: "Healthcare Access",
			description:
				"Delivering essential healthcare services and health education to remote and marginalized communities.",
			impact: "200,000 people served",
			icon: Shield,
			color: "bg-green-500",
		},
		{
			title: "Skills Development & Livelihood",
			description:
				"Building employable skills and supporting long-term livelihood development for families in need.",
			impact: "5,000 individuals trained",
			icon: Briefcase,
			color: "bg-purple-600",
		},
		{
			title: "Orphan Support",
			description:
				"Providing care, protection, and essentials for orphaned and vulnerable children.",
			impact: "1,500 children supported",
			icon: Users,
			color: "bg-yellow-500",
		},
		{
			title: "Seasonal Project",
			description:
				"Helping communities through seasonal support including food packs, warm clothing, and festival aid.",
			impact: "10,000 families assisted seasonally",
			icon: Calendar,
			color: "bg-orange-500",
		},
		{
			title: "Water for Life",
			description:
				"Ensuring access to clean drinking water through wells, filtration systems, and water distribution.",
			impact: "20+ clean water projects completed",
			icon: Droplet,
			color: "bg-cyan-500",
		},
		{
			title: "Emergency Response",
			description:
				"Providing immediate relief and long-term recovery support during natural disasters and crises.",
			impact: "50+ emergency responses",
			icon: HandHeart,
			color: "bg-red-500",
		},
	];

	const achievements = [
		{
			year: "2023",
			award: "Global Impact Award",
			organization: "International Humanitarian Council",
			description:
				"Recognized for outstanding contribution to global development",
		},
		{
			year: "2022",
			award: "Innovation in Education",
			organization: "UNESCO",
			description: "Honored for innovative digital learning solutions",
		},
		{
			year: "2021",
			award: "Transparency Excellence",
			organization: "Charity Navigator",
			description: "Achieved 4-star rating for transparency and accountability",
		},
	];
	const partners = [
		{ name: "UNICEF", logo: "/partner/part3.jpeg" },
		{ name: "World Health Organization", logo: "/partner/part4.jpg" },
		{ name: "Red Cross", logo: "/partner/part5.jpg" },
		{ name: "Doctors Without Borders", logo: "/partner/part6.png" },
		{ name: "Oxfam", logo: "/partner/part7.png" },
		{ name: "Save the Children", logo: "/partner/part8.jpg" },
		{ name: "World Vision", logo: "/partner/part9.jpg" },
		// { name: "Habitat for Humanity", logo: "/partner/part11.png" },
		{ name: "Feeding America", logo: "/partner/part12.png" },
		{ name: "United Way", logo: "/partner/part13.png" },
		// { name: "Amnesty International", logo: "/partner/part14.png" },
		// { name: "Greenpeace", logo: "/partner/part15.png" },
	];

	const partnerships = [
		{ name: "United Nations", type: "International Organization" },
		{ name: "World Health Organization", type: "Health Partner" },
		{ name: "Microsoft", type: "Technology Partner" },
		{ name: "Google.org", type: "Funding Partner" },
		{ name: "Local Government Partners", type: "15+ Countries" },
		{ name: "University Collaborations", type: "Research Partners" },
	];

	// Navigation functions for Executive Team
	const nextExecutiveSlide = () => {
		const increment = window.innerWidth >= 768 ? 3 : 1;
		const maxSlide = teamMembers.length - increment;
		setCurrentExecutiveSlide(
			Math.min(maxSlide, currentExecutiveSlide + increment),
		);
	};

	const prevExecutiveSlide = () => {
		const increment = window.innerWidth >= 768 ? 3 : 1;
		setCurrentExecutiveSlide(Math.max(0, currentExecutiveSlide - increment));
	};

	// Navigation functions for Our Team
	const nextTeamSlide = () => {
		const increment = window.innerWidth >= 768 ? 3 : 1;
		const maxSlide = teams.length - increment;
		setCurrentTeamSlide(Math.min(maxSlide, currentTeamSlide + increment));
	};

	const prevTeamSlide = () => {
		const increment = window.innerWidth >= 768 ? 3 : 1;
		setCurrentTeamSlide(Math.max(0, currentTeamSlide - increment));
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 mt-12 md:mt-25">
			{/* Hero Section */}
			<div className="relative bg-gradient-to-r from-[#2979FF] to-green-600 text-white py-9 px-4 md:py-12 overflow-hidden">
				<div className="absolute inset-0 bg-black opacity-10"></div>
				<div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-16 translate-x-16"></div>
				<div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full translate-y-16 -translate-x-16"></div>

				<div className="relative max-w-5xl mx-auto text-center">
					<div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full mb-4">
						<Heart className="w-4 h-4 mr-2 text-red-300" />
						<span className="text-sm font-medium">
							Since 2008 • Making a Difference
						</span>
					</div>
					<h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
						About{" "}
						<span className="text-yellow-300">
							Human Relief Organization Nepal
						</span>
					</h1>
					<p className="text-lg md:text-xl mb-6 text-blue-100 max-w-3xl mx-auto leading-relaxed">
						Creating lasting positive change in underserved communities through
						education, healthcare, and economic empowerment.
					</p>

					<div className="flex flex-wrap justify-center gap-6 mb-6">
						{stats.map((stat, index) => (
							<div
								key={index}
								className="bg-white/10 backdrop-blur-sm px-7 py-3 rounded-xl"
							>
								<stat.icon className="w-6 h-6 mx-auto mb-1 text-white" />
								<div className="text-xl font-bold">{stat.value}</div>
								<div className="text-xs opacity-90">{stat.label}</div>
							</div>
						))}
					</div>

					<div className="flex flex-wrap justify-center gap-3">
						<Link to="/donate">
							<button className="bg-white text-[#2979FF] px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 flex items-center space-x-2 group">
								<span>Donate</span>
								<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
							</button>
						</Link>
						<Link to="/contact">
							<button className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-lg font-semibold hover:bg-white/30 transition-all duration-200 flex items-center space-x-2 border border-white/30">
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
						<h2 className="text-4xl font-bold text-gray-800 mb-4">
							Our Organization
						</h2>
						<p className="text-lg text-gray-600 max-w-3xl mx-auto">
							Everything we do is guided by our core mission, vision, and values
							that have shaped our organization since day one.
						</p>
					</div>

					{/* Tab Navigation */}
					<div className="flex justify-center mb-8 bg-gray-100 rounded-2xl p-2 max-w-2xl mx-auto overflow-hidden">
						{[
							{ id: "mission", label: "Mission", icon: Target },
							{ id: "vision", label: "Vision", icon: Eye },
							{ id: "values", label: "Values", icon: Compass },
						].map((tab) => (
							<button
								key={tab.id}
								onClick={() => setActiveTab(tab.id)}
								className={`flex items-center space-x-2 px-4 md:px-6 py-3 rounded-xl transition-all duration-200 font-semibold ${
									activeTab === tab.id
										? "bg-white text-[#2979FF] shadow-lg"
										: "text-gray-600 hover:text-gray-800"
								}`}
							>
								<tab.icon className="w-5 h-5" />
								<span>{tab.label}</span>
							</button>
						))}
					</div>

					{/* Tab Content */}
					<div className="bg-white rounded-3xl shadow-xl p-8 border border-blue-100">
						{activeTab === "mission" && (
							<div className="text-center">
								<div className="bg-blue-100 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
									<Target className="w-10 h-10 text-[#2979FF]" />
								</div>
								<h3 className="text-3xl font-bold text-gray-800 mb-6">
									Our Mission
								</h3>
								<p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
									HRO Nepal is committed to serve humanity by integrating
									resources for people in need. We strive to provide immediate
									response in disasters, and effective programs in place of
									suffering for the pleasure of Allah.
								</p>
							</div>
						)}

						{activeTab === "vision" && (
							<div className="text-center">
								<div className="bg-green-100 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
									<Eye className="w-10 h-10 text-green-600" />
								</div>
								<h3 className="text-3xl font-bold text-gray-800 mb-6">
									Our Vision
								</h3>
								<p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
									As a leader to empower lives, creating opportunities and strengthen the bond of humanity.
								</p>
							</div>
						)}

						{activeTab === "values" && (
							<div>
								<div className="text-center mb-8">
									<div className="bg-purple-100 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
										<Compass className="w-10 h-10 text-purple-600" />
									</div>
									<h3 className="text-3xl font-bold text-gray-800 mb-4">
										Our Values
									</h3>
									<p className="text-lg text-gray-600 max-w-3xl mx-auto">
										These core values guide every decision we make and every
										action we take.
									</p>
								</div>
								<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
									{values.map((value, index) => (
										<div
											key={index}
											className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors"
										>
											<div className="bg-blue-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
												<value.icon className="w-8 h-8 text-[#2979FF]" />
											</div>
											<h4 className="text-xl font-bold text-gray-800 mb-3">
												{value.title}
											</h4>
											<p className="text-gray-600 leading-relaxed">
												{value.description}
											</p>
										</div>
									))}
								</div>
							</div>
						)}
					</div>
				</div>
			</div>

			{/* Our Story/Timeline Section */}
			<div className="bg-gradient-to-r from-blue-50 to-green-50 py-16 px-4 overflow-hidden">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-4xl font-bold text-gray-800 mb-4">
							Our Journey
						</h2>
						<p className="text-lg text-gray-600 max-w-3xl mx-auto">
							From humble beginnings to global impact - here's how we've grown
							and evolved over the years.
						</p>
					</div>

					<div className="relative">
						<div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#2979FF] opacity-20"></div>
						<div className="space-y-12">
							{milestones.map((milestone, index) => (
								<div
									key={index}
									className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
								>
									<div className={`w-1/2 ${index % 2 === 0 ? "pr-4" : "pl-4"}`}>
										<div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100 overflow-hidden">
											<div className="text-xl font-bold text-[#2979FF] mb-2">
												{milestone.year}
											</div>
											<h3 className="text-md font-bold text-gray-800 mb-3">
												{milestone.title}
											</h3>
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
						<h2 className="text-4xl font-bold text-gray-800 mb-4">
							Our Programs
						</h2>
						<p className="text-lg text-gray-600 max-w-3xl mx-auto">
							We focus on four key areas that create the most significant and
							sustainable impact in communities.
						</p>
					</div>

					<div className="grid md:grid-cols-2 gap-8">
						{programs.map((program, index) => (
							<div
								key={index}
								className="bg-white rounded-3xl shadow-xl overflow-hidden border border-blue-100 hover:shadow-2xl transition-all duration-300 group"
							>
								<div className="p-8">
									<div
										className={`${program.color} p-4 rounded-2xl w-16 h-16 mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
									>
										<program.icon className="w-8 h-8 text-white" />
									</div>
									<h3 className="text-2xl font-bold text-gray-800 mb-4">
										{program.title}
									</h3>
									<p className="text-gray-600 mb-6 leading-relaxed">
										{program.description}
									</p>
									<div className="bg-blue-50 p-4 rounded-xl">
										<div className="text-sm text-gray-500 mb-1">
											Impact to Date
										</div>
										<div className="text-lg font-bold text-[#2979FF]">
											{program.impact}
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Executive Team Section */}
			<div className="bg-gray-50 py-16 px-4">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-4xl font-bold text-gray-800 mb-4">
							Executive Team
						</h2>
						<p className="text-lg text-gray-600 max-w-3xl mx-auto">
							Meet the dedicated professionals leading our mission to create
							positive change around the world.
						</p>
					</div>

					<div className="relative">
						{/* Desktop View - Show 3 cards */}
						<div className="hidden md:block">
							<div className="grid md:grid-cols-3 gap-8">
								{teamMembers
									.slice(currentExecutiveSlide, currentExecutiveSlide + 3)
									.map((member, index) => (
										<div
											key={index}
											className="bg-white rounded-3xl shadow-xl p-6 text-center border border-blue-100 hover:shadow-2xl transition-all duration-300 group"
										>
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
													{member.role.split(" ")[0]}
												</div>
											</div>
											<h3 className="text-xl font-bold text-gray-800 mb-2">
												{member.name}
											</h3>
											<div className="text-[#2979FF] font-semibold mb-2">
												{member.role}
											</div>
											{/* <div className="text-sm text-gray-500 mb-4">{member.experience}</div> */}
											{/* <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p> */}
											{/* <div className="bg-blue-50 p-3 rounded-xl mb-4">
                      <div className="text-xs text-gray-500 mb-1">Education</div>
                      <div className="text-sm font-medium text-gray-700">{member.education}</div>
                    </div> */}
											{/* <div className="flex justify-center space-x-3">
                      <button className="p-2 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors">
                        <Mail className="w-4 h-4 text-[#2979FF]" />
                      </button>
                      <button className="p-2 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors">
                        <Linkedin className="w-4 h-4 text-[#2979FF]" />
                      </button>
                    </div> */}
										</div>
									))}
							</div>
						</div>

						{/* Mobile View - Show 1 card */}
						<div className="md:hidden">
							<div className="max-w-sm mx-auto">
								{teamMembers
									.slice(currentExecutiveSlide, currentExecutiveSlide + 1)
									.map((member, index) => (
										<div
											key={index}
											className="bg-white rounded-3xl shadow-xl p-6 text-center border border-blue-100"
										>
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
													{member.role.split(" ")[0]}
												</div>
											</div>
											<h3 className="text-xl font-bold text-gray-800 mb-2">
												{member.name}
											</h3>
											<div className="text-[#2979FF] font-semibold mb-2">
												{member.role}
											</div>
											{/* <div className="text-sm text-gray-500 mb-4">{member.experience}</div>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p> */}
											{/* <div className="bg-blue-50 p-3 rounded-xl mb-4">
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
                    </div> */}
										</div>
									))}
							</div>
						</div>

						{/* Navigation Buttons for Executive Team */}
						<button
							onClick={prevExecutiveSlide}
							disabled={currentExecutiveSlide === 0}
							className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
						>
							<ChevronLeft className="w-6 h-6 text-gray-600" />
						</button>

						<button
							onClick={nextExecutiveSlide}
							disabled={
								currentExecutiveSlide >=
								teamMembers.length - (window.innerWidth >= 768 ? 3 : 1)
							}
							className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
						>
							<ChevronRight className="w-6 h-6 text-gray-600" />
						</button>

						{/* Dots Indicator for Executive Team */}
						<div className="flex justify-center mt-8 space-x-2">
							{Array.from({
								length: Math.ceil(
									teamMembers.length / (window.innerWidth >= 768 ? 3 : 1),
								),
							}).map((_, index) => (
								<button
									key={index}
									onClick={() =>
										setCurrentExecutiveSlide(
											index * (window.innerWidth >= 768 ? 3 : 1),
										)
									}
									className={`w-3 h-3 rounded-full transition-colors ${
										Math.floor(
											currentExecutiveSlide /
												(window.innerWidth >= 768 ? 3 : 1),
										) === index
											? "bg-[#2979FF]"
											: "bg-gray-300 hover:bg-gray-400"
									}`}
								/>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* Teams Team Section */}
			<div className="bg-gray-50 py-16 px-4">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-4xl font-bold text-gray-800 mb-4">Our Team</h2>
						<p className="text-lg text-gray-600 max-w-3xl mx-auto">
							Meet the dedicated professionals leading our mission to create
							positive change around the world.
						</p>
					</div>

					<div className="relative">
						{/* Desktop View - Show 3 cards */}
						<div className="hidden md:block">
							<div className="grid md:grid-cols-3 gap-8">
								{teams
									.slice(currentTeamSlide, currentTeamSlide + 3)
									.map((member, index) => (
										<div
											key={index}
											className="bg-white rounded-3xl shadow-xl p-6 text-center border border-blue-100 hover:shadow-2xl transition-all duration-300 group"
										>
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
													{member.role.split(" ")[0]}
												</div>
											</div>
											<h3 className="text-xl font-bold text-gray-800 mb-2">
												{member.name}
											</h3>
											<div className="text-[#2979FF] font-semibold mb-2">
												{member.role}
											</div>
											{/* <div className="text-sm text-gray-500 mb-4">{member.experience}</div>
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
                    </div> */}
										</div>
									))}
							</div>
						</div>

						{/* Mobile View - Show 1 card */}
						<div className="md:hidden">
							<div className="max-w-sm mx-auto">
								{teams
									.slice(currentTeamSlide, currentTeamSlide + 1)
									.map((member, index) => (
										<div
											key={index}
											className="bg-white rounded-3xl shadow-xl p-6 text-center border border-blue-100"
										>
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
													{member.role.split(" ")[0]}
												</div>
											</div>
											<h3 className="text-xl font-bold text-gray-800 mb-2">
												{member.name}
											</h3>
											<div className="text-[#2979FF] font-semibold mb-2">
												{member.role}
											</div>
											{/* <div className="text-sm text-gray-500 mb-4">{member.experience}</div>
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
                    </div> */}
										</div>
									))}
							</div>
						</div>

						{/* Navigation Buttons for Our Team */}
						<button
							onClick={prevTeamSlide}
							disabled={currentTeamSlide === 0}
							className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
						>
							<ChevronLeft className="w-6 h-6 text-gray-600" />
						</button>

						<button
							onClick={nextTeamSlide}
							disabled={
								currentTeamSlide >=
								teams.length - (window.innerWidth >= 768 ? 3 : 1)
							}
							className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
						>
							<ChevronRight className="w-6 h-6 text-gray-600" />
						</button>

						{/* Dots Indicator for Our Team */}
						<div className="flex justify-center mt-8 space-x-2">
							{Array.from({
								length: Math.ceil(
									teams.length / (window.innerWidth >= 768 ? 3 : 1),
								),
							}).map((_, index) => (
								<button
									key={index}
									onClick={() =>
										setCurrentTeamSlide(
											index * (window.innerWidth >= 768 ? 3 : 1),
										)
									}
									className={`w-3 h-3 rounded-full transition-colors ${
										Math.floor(
											currentTeamSlide / (window.innerWidth >= 768 ? 3 : 1),
										) === index
											? "bg-[#2979FF]"
											: "bg-gray-300 hover:bg-gray-400"
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
						<h2 className="text-4xl font-bold text-gray-800 mb-4">
							Recognition & Awards
						</h2>
						<p className="text-lg text-gray-600 max-w-3xl mx-auto">
							Our commitment to excellence and transparency has been recognized
							by leading organizations Nepal.
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						{achievements.map((achievement, index) => (
							<div
								key={index}
								className="bg-white rounded-2xl shadow-xl p-6 border border-blue-100 text-center"
							>
								<div className="bg-yellow-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
									<Award className="w-8 h-8 text-yellow-600" />
								</div>
								<h3 className="text-xl font-bold text-gray-800 mb-2">
									{achievement.award}
								</h3>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Partnerships Section */}
			<div className="bg-gradient-to-r from-green-50 to-blue-50 py-16 px-4">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-4xl font-bold text-gray-800 mb-4">
							Our Partners
						</h2>
						<p className="text-lg text-gray-600 max-w-3xl mx-auto">
							We collaborate with leading organizations, governments, and
							institutions to maximize our impact.
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-6">
						{partners.map((partner, index) => (
							<div
								key={index}
								className="bg-white rounded-xl p-6 shadow-lg border border-blue-100 flex items-center space-x-4"
							>
								<div className="bg-blue-100 p-3 rounded-lg">
									{/* <Building className="w-6 h-6 text-[#2979FF]" /> */}
									<img
										className="w-6 h-6"
										src={partner.logo}
										alt={partner.name}
									/>
								</div>
								<div>
									<h4 className="font-bold text-gray-800">{partner.name}</h4>
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
						Together, we can create lasting change and build a better Nepal for
						future generations.
					</p>
					<div className="flex flex-wrap justify-center gap-4">
						<Link to="/volunteer">
							<button className="bg-white text-[#2979FF] px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-200 flex items-center space-x-2 group">
								<HandHeart className="w-6 h-6" />
								<span>Volunteer With Us</span>
								<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
							</button>
						</Link>
						<Link to="/donate">
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

import React, { useState } from "react";
import {
	MapPin,
	Phone,
	Mail,
	Clock,
	Send,
	User,
	MessageSquare,
	Heart,
	Users,
	Globe,
	ArrowRight,
	CheckCircle,
	ChevronDown,
	ChevronUp,
	HelpCircle,
	Shield,
	Award,
	Headphones,
	FileText,
	Star,
	ChevronLeft,
	ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import StayConnected from "./StayConnected";
import { trackEvent } from "../utills/analytics";

const ContactPage = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		subject: "",
		message: "",
		volunteerInterest: false,
	});
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [submitting, setSubmitting] = useState(false);
	const [openFAQ, setOpenFAQ] = useState(null);
	const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

	// EmailJS configuration - Replace with your actual credentials
	const EMAILJS_SERVICE_ID = "service_iqusr2n";
	const EMAILJS_TEMPLATE_ID = "template_riu5epe";
	const EMAILJS_PUBLIC_KEY = "F_6wWHN285iK7ADKS";

	const handleInputChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: type === "checkbox" ? checked : value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setSubmitting(true);

		try {
			// Send email using EmailJS
			await emailjs.sendForm(
				EMAILJS_SERVICE_ID,
				EMAILJS_TEMPLATE_ID,
				e.target,
				EMAILJS_PUBLIC_KEY,
			);

			setIsSubmitted(true);

			// Reset form
			setFormData({
				name: "",
				email: "",
				phone: "",
				subject: "",
				message: "",
				volunteerInterest: false,
			});

			// Reset submission status after 3 seconds
			setTimeout(() => {
				setIsSubmitted(false);
			}, 3000);
		} catch (error) {
			console.error("Failed to send email:", error);
			alert("Failed to send message. Please try again.");
		} finally {
			setSubmitting(false);
		}
	};

	const toggleFAQ = (index) => {
		if (openFAQ !== index) {
			trackEvent("faq_open", {
				question: faqs[index].question,
			});
		}

		setOpenFAQ(openFAQ === index ? null : index);
	};

	// Carousel navigation functions
	const nextTestimonial = () => {
		setCurrentTestimonialIndex((prevIndex) =>
			prevIndex + 3 >= testimonials.length ? 0 : prevIndex + 3,
		);
	};

	const prevTestimonial = () => {
		setCurrentTestimonialIndex((prevIndex) =>
			prevIndex - 3 < 0
				? Math.floor((testimonials.length - 1) / 3) * 3
				: prevIndex - 3,
		);
	};

	const faqs = [
		{
			question: "How can I get involved as a volunteer?",
			answer:
				"We welcome volunteers of all backgrounds and skill levels! Simply fill out our contact form with 'Volunteer Opportunities' selected, or call us directly. We'll schedule a brief orientation session where you'll learn about our various programs and find the perfect match for your interests and availability. No prior experience is necessary - we provide all necessary training.",
		},
		{
			question: "What types of donations do you accept?",
			answer:
				"We accept monetary donations, in-kind donations such as food, clothing, school supplies, and medical equipment. For monetary donations, you can donate online through our secure portal or send checks to our office address. All donations are tax-deductible, and we'll provide you with proper documentation for your records.",
		},
		{
			question: "How do you ensure transparency in fund usage?",
			answer:
				"Transparency is core to our mission. We publish annual reports detailing how every dollar is spent, maintain third-party audits, and provide regular updates to our donors. You can request detailed financial statements at any time, and we're proud to maintain a 4-star rating with charity watchdog organizations.",
		},
		{
			question: "Can I visit your facilities or programs?",
			answer:
				"Absolutely! We encourage supporters to visit our facilities and see our programs in action. Please contact us at least 48 hours in advance to schedule a visit. We offer guided tours on weekdays and can arrange special group visits for organizations, schools, or corporate teams interested in learning more about our work.",
		},
		{
			question: "Do you provide tax receipts for donations?",
			answer:
				"Yes, we provide official tax receipts for all donations. For online donations, you'll receive an automatic email receipt immediately. For other donations, we'll mail or email your receipt within 5 business days. As a registered 501(c)(3) organization, all donations are tax-deductible to the full extent allowed by law.",
		},
		{
			question: "How can my company partner with your organization?",
			answer:
				"We offer various corporate partnership opportunities including sponsorships, employee volunteer programs, matching gift programs, and cause marketing collaborations. Each partnership is tailored to align with your company's values and CSR goals while maximizing impact for our beneficiaries. Contact us to discuss how we can work together.",
		},
		{
			question: "What is your refund and cancellation policy?",
			answer:
				"For recurring donations, you can cancel at any time by contacting us. For event registrations, we offer full refunds up to 7 days before the event. For one-time donations, while we don't typically process refunds since funds are quickly deployed to programs, we'll work with you on a case-by-case basis if there are exceptional circumstances.",
		},
		{
			question:
				"How do I know if someone claiming to represent your organization is legitimate?",
			answer:
				"All our official representatives carry identification cards with our logo and their photo. We never solicit donations door-to-door or through cold calls. If someone contacts you claiming to represent us, ask for their full name and ID number, then call our office to verify. When in doubt, donate directly through our official website or office.",
		},
	];

	const testimonials = [
		{
			name: "Ghufran Ahmad Shakir",
			role: "Executive Director",
			text: "Leading this organization has been an honor. Our team's passion and dedication consistently create meaningful change.",
			rating: 5,
		},
		{
			name: "Hafiz Ziyaur Rahman",
			role: "Project Coordinator",
			text: "Managing projects here feels fulfilling because every task contributes to improving lives in communities.",
			rating: 5,
		},
		{
			name: "Md. Irshad Ansari",
			role: "Project Coordinator",
			text: "The teamwork and project execution in this organization ensure that every initiative reaches those who need it the most.",
			rating: 5,
		},
		{
			name: "Mohammad Aslam Halwai",
			role: "Project Coordinator",
			text: "It's inspiring to be part of a mission-driven environment where results truly matter.",
			rating: 5,
		},
		{
			name: "Mozammil Haque",
			role: "Project Coordinator",
			text: "We plan, execute, and monitor projects with the utmost transparency to maximize community impact.",
			rating: 5,
		},
		{
			name: "Saddam Hussain",
			role: "Program Coordinator",
			text: "Working with multiple programs allows me to see firsthand how each effort transforms lives and empowers families.",
			rating: 5,
		},
		{
			name: "Suhail Ahmad Shah",
			role: "Field Officer",
			text: "Being on the ground gives me the opportunity to connect directly with beneficiaries and understand their real challenges.",
			rating: 5,
		},
		{
			name: "Tahir Mahmood",
			role: "Program Manager",
			text: "Managing different programs has helped create a sustainable and long-lasting impact in underserved communities.",
			rating: 5,
		},
	];

	// Get current testimonials to display (3 at a time)
	const currentTestimonials = testimonials.slice(
		currentTestimonialIndex,
		currentTestimonialIndex + 3,
	);

	return (
		<div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-amber-50 mt-12 md:mt-25">
			{/* Hero Section */}
			<div className="relative bg-gradient-to-r from-amber-500 to-yellow-600 text-white py-10 px-4 overflow-hidden">
				<div className="absolute inset-0 bg-black opacity-10"></div>
				<div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -translate-y-32 translate-x-32"></div>
				<div className="absolute bottom-0 left-0 w-72 h-72 bg-white opacity-5 rounded-full translate-y-32 -translate-x-32"></div>

				<div className="relative max-w-6xl mx-auto text-center">
					<div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
						<Heart className="w-5 h-5 mr-2 text-red-300" />
						<span className="text-sm font-medium">
							Making a Difference Together
						</span>
					</div>
					<h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
						Get in <span className="text-yellow-200">Touch</span>
					</h1>
					<p className="text-xl md:text-2xl mb-8 text-amber-100 max-w-3xl mx-auto leading-relaxed">
						We'd love to hear from you. Whether you want to volunteer, donate,
						or learn more about our mission, we're here to help.
					</p>
					<div className="flex flex-wrap justify-center gap-6 text-sm">
						<div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
							<Users className="w-4 h-4 mr-2" />
							<span>Join Our Community</span>
						</div>
						<div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
							<Globe className="w-4 h-4 mr-2" />
							<span>Across Nepal Impact</span>
						</div>
					</div>
				</div>
			</div>

			<div className="max-w-7xl mx-auto px-2 md:px-9 py-16 ">
				<div className="grid lg:grid-cols-2 gap-16">
					{/* Contact Form */}
					<div className="space-y-8">
						<div className="text-center lg:text-left">
							<h2 className="text-4xl font-bold text-gray-800 mb-4">
								Let's Start a Conversation
							</h2>
							<p className="text-lg text-gray-600 leading-relaxed">
								Fill out the form below and our team will get back to you within
								24 hours. We're excited to hear about your ideas and how we can
								work together.
							</p>
						</div>

						<form
							onSubmit={handleSubmit}
							className="bg-white rounded-2xl shadow-xl p-8 space-y-6 border border-yellow-100"
						>
							<div className="grid md:grid-cols-2 gap-6">
								<div className="space-y-2">
									<label className="block text-sm font-semibold text-gray-700">
										Full Name *
									</label>
									<div className="relative">
										<User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
										<input
											type="text"
											name="name"
											value={formData.name}
											onChange={handleInputChange}
											className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:ring-2 focus:ring-yellow-100 transition-all duration-200 outline-none"
											placeholder="Enter your name"
											required
										/>
									</div>
								</div>

								<div className="space-y-2">
									<label className="block text-sm font-semibold text-gray-700">
										Email Address *
									</label>
									<div className="relative">
										<Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
										<input
											type="email"
											name="email"
											value={formData.email}
											onChange={handleInputChange}
											className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:ring-2 focus:ring-yellow-100 transition-all duration-200 outline-none"
											placeholder="your@email.com"
											required
										/>
									</div>
								</div>
							</div>

							<div className="grid md:grid-cols-2 gap-6">
								<div className="space-y-2">
									<label className="block text-sm font-semibold text-gray-700">
										Phone Number
									</label>
									<div className="relative">
										<Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
										<input
											type="tel"
											name="phone"
											value={formData.phone}
											onChange={handleInputChange}
											className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:ring-2 focus:ring-yellow-100 transition-all duration-200 outline-none"
											placeholder="+977 984 7040 404"
										/>
									</div>
								</div>

								<div className="space-y-2">
									<label className="block text-sm font-semibold text-gray-700">
										Subject *
									</label>
									<select
										name="subject"
										value={formData.subject}
										onChange={handleInputChange}
										className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:ring-2 focus:ring-yellow-100 transition-all duration-200 outline-none bg-white"
										required
									>
										<option value="">Select a subject</option>
										<option value="volunteer">Volunteer Opportunities</option>
										<option value="donation">Make a Donation</option>
										<option value="partnership">Partnership Inquiry</option>
										<option value="general">General Information</option>
										<option value="other">Other</option>
									</select>
								</div>
							</div>

							<div className="space-y-2">
								<label className="block text-sm font-semibold text-gray-700">
									Message *
								</label>
								<div className="relative">
									<MessageSquare className="absolute left-3 top-4 text-gray-400 w-5 h-5" />
									<textarea
										name="message"
										value={formData.message}
										onChange={handleInputChange}
										rows={5}
										className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:ring-2 focus:ring-yellow-100 transition-all duration-200 outline-none resize-none"
										placeholder="Tell us how we can help you..."
										required
									></textarea>
								</div>
							</div>

							<div className="flex items-center space-x-3">
								<input
									type="checkbox"
									id="volunteer"
									name="volunteerInterest"
									checked={formData.volunteerInterest}
									onChange={handleInputChange}
									className="w-5 h-5 text-amber-500 border-2 border-gray-300 rounded focus:ring-2 focus:ring-yellow-100"
								/>
								<label htmlFor="volunteer" className="text-sm text-gray-600">
									I'm interested in volunteering opportunities
								</label>
							</div>

							<button
								type="submit"
								disabled={submitting || isSubmitted}
								className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:from-yellow-600 hover:to-amber-700 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
							>
								{isSubmitted ? (
									<>
										<CheckCircle className="w-6 h-6" />
										<span>Message Sent!</span>
									</>
								) : submitting ? (
									<>
										<div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
										<span>Sending...</span>
									</>
								) : (
									<>
										<Send className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
										<span>Send Message</span>
									</>
								)}
							</button>
						</form>

						<div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-2xl shadow-lg">
							<h3 className="text-xl font-bold mb-3">Emergency Contact</h3>
							<p className="mb-4 opacity-90">
								For urgent matters or emergencies, please call our 24/7
								helpline.
							</p>
							<div className="flex items-center space-x-2">
								<Phone className="w-5 h-5" />
								<span className="font-semibold text-lg">
									+977-76-520102-HELP
								</span>
							</div>
						</div>
						<div className="bg-gradient-to-r from-amber-500 to-yellow-600 text-white p-6 rounded-2xl shadow-lg">
							<h3 className="text-xl font-bold mb-3">Join Our Mission</h3>
							<p className="mb-4 opacity-90">
								Become part of our community and help us make a lasting impact
								in people's lives.
							</p>
							<Link to="/about">
								onClick=
								{() =>
									trackEvent("contact_page_learn_more_click", {
										location: "join_our_mission",
									})
								}
								<button className="bg-white text-amber-600 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-50 transition-colors flex items-center space-x-2 group">
									<span>Learn More</span>
									<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
								</button>
							</Link>
						</div>
					</div>

					{/* Contact Information */}
					<div className="space-y-8">
						<div className="bg-white rounded-2xl shadow-xl p-8 border border-yellow-100">
							<h3 className="text-2xl font-bold text-gray-800 mb-6">
								Contact Information
							</h3>
							<div className="space-y-6">
								<div className="flex items-start space-x-4 p-4 bg-yellow-50 rounded-xl">
									<div className="bg-amber-500 p-3 rounded-full">
										<MapPin className="w-6 h-6 text-white" />
									</div>
									<div>
										<h4 className="font-semibold text-gray-800 mb-1">
											Our Address
										</h4>
										<p className="text-gray-600">Krishna Nagar Municipality,</p>
										<p className="text-gray-600">
											Ward No. 02, District: Kapilvastu Lumbini, Nepal
										</p>
									</div>
								</div>

								<div className="flex items-start space-x-4 p-4 bg-green-50 rounded-xl">
									<div className="bg-green-500 p-3 rounded-full">
										<Phone className="w-6 h-6 text-white" />
									</div>
									<div>
										<h4 className="font-semibold text-gray-800 mb-1">
											Phone Number
										</h4>
										<p className="text-gray-600">+977 984 7040 404</p>
										<p className="text-sm text-gray-500">Mon-Fri 9AM-6PM EST</p>
									</div>
								</div>

								<div className="flex items-start space-x-4 p-4 bg-amber-50 rounded-xl">
									<div className="bg-amber-600 p-3 rounded-full">
										<Mail className="w-6 h-6 text-white" />
									</div>
									<div>
										<h4 className="font-semibold text-gray-800 mb-1">
											Email Address
										</h4>
										<p className="text-gray-600">info@hro.org.np</p>
										<p className="text-sm text-gray-500">
											We'll respond within 24 hours
										</p>
									</div>
								</div>

								<div className="flex items-start space-x-4 p-4 bg-orange-50 rounded-xl">
									<div className="bg-orange-500 p-3 rounded-full">
										<Clock className="w-6 h-6 text-white" />
									</div>
									<div>
										<h4 className="font-semibold text-gray-800 mb-1">
											Office Hours
										</h4>
										<p className="text-gray-600">
											Monday - Friday: 9:00 AM - 6:00 PM
										</p>
										<p className="text-gray-600">
											Saturday: 10:00 AM - 4:00 PM
										</p>
										<p className="text-gray-600">Sunday: Closed</p>
									</div>
								</div>
							</div>
						</div>

						{/* Trust & Credibility Section */}
						<div className="bg-white rounded-2xl shadow-xl p-8 border border-yellow-100">
							<h3 className="text-2xl font-bold text-gray-800 mb-6">
								Why Trust Us?
							</h3>
							<div className="grid grid-cols-2 gap-4">
								<div className="text-center p-4">
									<div className="bg-green-100 p-3 rounded-full w-fit mx-auto mb-3">
										<Shield className="w-8 h-8 text-green-600" />
									</div>
									<h4 className="font-semibold text-gray-800 mb-1">
										Verified NGO
									</h4>
									<p className="text-sm text-gray-600">501(c)(3) certified</p>
								</div>
								<div className="text-center p-4">
									<div className="bg-yellow-100 p-3 rounded-full w-fit mx-auto mb-3">
										<Award className="w-8 h-8 text-amber-600" />
									</div>
									<h4 className="font-semibold text-gray-800 mb-1">
										4-Star Rating
									</h4>
									<p className="text-sm text-gray-600">Charity Navigator</p>
								</div>
								<div className="text-center p-4">
									<div className="bg-amber-100 p-3 rounded-full w-fit mx-auto mb-3">
										<FileText className="w-8 h-8 text-amber-700" />
									</div>
									<h4 className="font-semibold text-gray-800 mb-1">
										Transparent
									</h4>
									<p className="text-sm text-gray-600">Annual reports</p>
								</div>
								<div className="text-center p-4">
									<div className="bg-orange-100 p-3 rounded-full w-fit mx-auto mb-3">
										<Headphones className="w-8 h-8 text-orange-600" />
									</div>
									<h4 className="font-semibold text-gray-800 mb-1">
										24/7 Support
									</h4>
									<p className="text-sm text-gray-600">Always here</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* FAQ Section */}
			<div className="bg-white py-16 px-4">
				<div className="max-w-4xl mx-auto">
					<div className="text-center mb-12">
						<div className="inline-flex items-center bg-yellow-50 px-4 py-2 rounded-full mb-4">
							<HelpCircle className="w-5 h-5 mr-2 text-amber-600" />
							<span className="text-sm font-medium text-amber-600">
								Got Questions?
							</span>
						</div>
						<h2 className="text-4xl font-bold text-gray-800 mb-4">
							Frequently Asked Questions
						</h2>
						<p className="text-lg text-gray-600 max-w-2xl mx-auto">
							Find answers to common questions about our organization,
							donations, volunteering, and more.
						</p>
					</div>

					<div className="space-y-4">
						{faqs.map((faq, index) => (
							<div
								key={index}
								className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200 hover:border-yellow-200 transition-colors"
							>
								<button
									onClick={() => toggleFAQ(index)}
									className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-yellow-50 transition-colors"
								>
									<h3 className="font-semibold text-gray-800 pr-4">
										{faq.question}
									</h3>
									{openFAQ === index ? (
										<ChevronUp className="w-5 h-5 text-amber-600 flex-shrink-0" />
									) : (
										<ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
									)}
								</button>
								{openFAQ === index && (
									<div className="px-6 pb-4">
										<div className="border-t border-gray-200 pt-4">
											<p className="text-gray-600 leading-relaxed">
												{faq.answer}
											</p>
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
							onClick={() =>
								trackEvent("support_email_click", {
									location: "faq_section",
								})
							}
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

			{/* Testimonials Section with Carousel */}
			<div className="bg-gradient-to-br from-yellow-50 to-white py-16 px-4">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-4xl font-bold text-gray-800 mb-4">
							What People Say About Us
						</h2>
						<p className="text-lg text-gray-600 max-w-2xl mx-auto">
							Hear from our volunteers, donors, and partners about their
							experience working with us.
						</p>
					</div>

					{/* Carousel Container */}
					<div className="relative">
						{/* Navigation Buttons */}
						<button
							onClick={prevTestimonial}
							className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-amber-50 transition-colors z-10"
							aria-label="Previous testimonials"
						>
							<ChevronLeft className="w-6 h-6 text-amber-600" />
						</button>

						<button
							onClick={nextTestimonial}
							className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-amber-50 transition-colors z-10"
							aria-label="Next testimonials"
						>
							<ChevronRight className="w-6 h-6 text-amber-600" />
						</button>

						{/* Testimonials Grid */}
						<div className="grid md:grid-cols-3 gap-8 px-4">
							{currentTestimonials.map((testimonial, index) => (
								<div
									key={currentTestimonialIndex + index}
									className="bg-white rounded-2xl p-6 shadow-lg border border-yellow-100 hover:shadow-xl transition-all duration-300"
								>
									<div className="flex items-center mb-4">
										{[...Array(testimonial.rating)].map((_, i) => (
											<Star
												key={i}
												className="w-5 h-5 text-amber-400 fill-current"
											/>
										))}
									</div>
									<p className="text-gray-600 mb-6 italic">
										"{testimonial.text}"
									</p>
									<div className="border-t pt-4">
										<h4 className="font-semibold text-gray-800">
											{testimonial.name}
										</h4>
										<p className="text-sm text-gray-500">{testimonial.role}</p>
									</div>
								</div>
							))}
						</div>

						{/* Carousel Indicators */}
						<div className="flex justify-center mt-8 space-x-2">
							{Array.from({ length: Math.ceil(testimonials.length / 3) }).map(
								(_, index) => (
									<button
										key={index}
										onClick={() => setCurrentTestimonialIndex(index * 3)}
										className={`w-3 h-3 rounded-full transition-colors ${
											currentTestimonialIndex === index * 3
												? "bg-amber-500"
												: "bg-gray-300 hover:bg-amber-300"
										}`}
										aria-label={`Go to testimonial group ${index + 1}`}
									/>
								),
							)}
						</div>
					</div>
				</div>
			</div>

			{/* Map Section */}
			<div className="bg-gray-100 py-16 px-4">
				<div className="max-w-6xl mx-auto text-center">
					<h2 className="text-3xl font-bold text-gray-800 mb-8">
						Visit Our Office
					</h2>

					<div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
						<div className="flex flex-col items-center justify-center">
							<MapPin className="w-16 h-16 text-amber-500 mx-auto mb-4" />
							<h3 className="text-xl font-semibold text-gray-700 mb-4">
								Our Location
							</h3>

							{/* Embedded Google Map */}
							<div className="w-full h-96 rounded-lg overflow-hidden shadow-md">
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d452805.87330041063!2d82.798396!3d27.545564!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39971ba7889e59a3%3A0xfb91e7058c137f88!2sKrishnanagar%2C%20Nepal!5e0!3m2!1sen!2sus!4v1759854314882!5m2!1sen!2sus"
									width="100%"
									height="100%"
									style={{ border: 0 }}
									allowFullScreen=""
									loading="lazy"
									referrerPolicy="no-referrer-when-downgrade"
								></iframe>
							</div>
						</div>
					</div>
				</div>
			</div>
			<StayConnected />
		</div>
	);
};

export default ContactPage;

"use client";

import {
	Heart,
	Mail,
	Phone,
	MapPin,
	Facebook,
	Twitter,
	Instagram,
	Play,
} from "lucide-react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { trackEvent } from "../utills/analytics";

export default function Footer() {
	const socialLinks = [
		{
			icon: Facebook,
			href: "https://facebook.com/hronepal.org",
			label: "Facebook",
		},
		{ icon: Twitter, href: "https://x.com/hronepalorg", label: "Twitter" },
		{
			icon: Instagram,
			href: "https://www.instagram.com/hro.org.np/",
			label: "Instagram",
		},
		{
			icon: Play,
			href: "https://www.youtube.com/@hro.org.np.1",
			label: "YouTube",
		},
		{
			icon: FaWhatsapp,
			href: "https://wa.me/9779847040404",
			label: "WhatsApp",
		},
	];

	const quickLinks = [
		{ name: "About Us", href: "/about" },
		{ name: "Our Programs", href: "/blog&news" },
		// { name: "Impact Stories", href: "#impact" },
		{ name: "Annual Reports", href: "/reports" },
		{ name: "Careers", href: "/career" },
	];

	const supportLinks = [
		{ name: "Donate", href: "/donate" },
		{ name: "Volunteer", href: "/volunteer" },
		{ name: "Fundraise", href: "/fundraiser" },
		// { name: "Corporate Partners", href: "#" },
		// { name: "FAQ", href: "#" },
		{ name: "Contact Us", href: "/contact" },
	];

	return (
		<footer className="bg-foreground text-background">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* Logo and Mission */}
					<div className="lg:col-span-1">
						<div className="flex items-center space-x-2 mb-6">
							<div className="bg-primary p-2 rounded-lg">
								{/* <Heart className="h-6 w-6 text-primary-foreground" /> */}
								<img
									src="/logo.png"
									alt=""
									srcset=""
									className="h-10 w-10 text-primary-foreground"
								/>
							</div>
							<span className="text-xl font-bold">
								Human Relief Organization
							</span>
						</div>
						<p className="text-background/80 mb-6 leading-relaxed">
							Creating lasting change through education, healthcare, and
							sustainable development programs across Nepal.
						</p>
						<div className="flex space-x-4">
							{socialLinks.map((social, index) => (
								<a
									key={index}
									href={social.href}
									aria-label={social.label}
									onClick={() =>
										trackEvent("footer_social_click", {
											platform: social.label,
										})
									}
									className="bg-background/10 hover:bg-primary p-2 rounded-lg transition-colors duration-200"
								>
									<social.icon className="h-5 w-5" />
								</a>
							))}
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="text-lg font-bold mb-6">Quick Links</h3>
						<ul className="space-y-3">
							{quickLinks.map((link, index) => (
								<li key={index}>
									<a
										href={link.href}
										onClick={() =>
											trackEvent("footer_quick_link_click", {
												link_name: link.name,
												destination: link.href,
											})
										}
										className="text-background/80 hover:text-background transition-colors duration-200"
									>
										{link.name}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Support */}
					<div>
						<h3 className="text-lg font-bold mb-6">Get Involved</h3>
						<ul className="space-y-3">
							{supportLinks.map((link, index) => (
								<li key={index}>
									<a
										href={link.href}
										onClick={() =>
											trackEvent("footer_support_link_click", {
												link_name: link.name,
												destination: link.href,
											})
										}
										className="text-background/80 hover:text-background transition-colors duration-200"
									>
										{link.name}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Contact Info */}
					<div>
						<h3 className="text-lg font-bold mb-6">Contact Us</h3>
						<div className="space-y-4">
							<div className="flex items-start space-x-3">
								<MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
								<div className="text-background/80">
									<p>Krishna Nagar Municipality,</p>
									<p>Ward No. 02, District: Kapilvastu Lumbini, Nepal</p>
								</div>
							</div>
							<div className="flex items-center space-x-3">
								<Phone className="h-5 w-5 text-primary flex-shrink-0" />
								<a
									href="https://wa.me/9779847040404"
									target="_blank"
									rel="noopener noreferrer"
									className="text-background/80 hover:text-green-400 transition-colors duration-200"
									onClick={() =>
										trackEvent("whatsapp_click", {
											location: "footer",
										})
									}
								>
									+977 984-7040404
								</a>
							</div>
							<div className="flex items-center space-x-3">
								<Mail className="h-5 w-5 text-primary flex-shrink-0" />
								<span className="text-background/80">info@hro.org.np</span>
							</div>
						</div>
					</div>
				</div>

				<div className="border-t border-background/20 mt-12 pt-8">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<p className="text-background/60 text-sm mb-4 md:mb-0">
							© 2023 Human Relief Organization Nepal. All rights reserved.
						</p>
						<div className="flex space-x-6 text-sm">
							<Link
								to="/privacy-policy"
								className="text-background/60 hover:text-background transition-colors duration-200"
								onClick={() =>
									trackEvent("footer_policy_click", {
										page: "privacy_policy",
									})
								}
							>
								Privacy Policy
							</Link>
							<Link
								to="/terms-of-service"
								className="text-background/60 hover:text-background transition-colors duration-200"
								onClick={() =>
									trackEvent("footer_policy_click", {
										page: "terms_of_service",
									})
								}
							>
								Terms of Service
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

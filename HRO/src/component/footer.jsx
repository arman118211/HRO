"use client"

import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ]

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Our Programs", href: "#programs" },
    { name: "Impact Stories", href: "#impact" },
    { name: "Annual Reports", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Press", href: "#" },
  ]

  const supportLinks = [
    { name: "Donate", href: "#donate" },
    { name: "Volunteer", href: "#" },
    { name: "Fundraise", href: "#" },
    { name: "Corporate Partners", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Contact Us", href: "#contact" },
  ]

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Mission */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-primary p-2 rounded-lg">
                {/* <Heart className="h-6 w-6 text-primary-foreground" /> */}
                <img src="/logo.png" alt="" srcset=""className="h-10 w-10 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Human Relief Organization</span>
            </div>
            <p className="text-background/80 mb-6 leading-relaxed">
              Creating lasting change through education, healthcare, and sustainable development programs worldwide.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
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
                  <p>123 Hope Street</p>
                  <p>New York, NY 10001</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-background/80">+97 7984 7040 404</span>
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
              © 2024 Hope Foundation. All rights reserved. | Tax ID: 12-3456789
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-background/60 hover:text-background transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors duration-200">
                Financial Transparency
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

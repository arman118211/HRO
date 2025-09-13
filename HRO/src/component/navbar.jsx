"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Menu, X, ChevronDown, Facebook, Twitter, Instagram, Linkedin, Phone, Mail } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState(null)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const aboutDropdown = [
    { name: "About Us", href: "/about" },
    // { name: "Our Partners", href: "/partners" },
    // { name: "Our Story", href: "/story" },
    // { name: "Leadership", href: "/leadership" },
    { name: "Annual Reports", href: "/reports" },
    { name: "Blog/News", href: "/blog&news" },
  ]

  const causesDropdown = [
    { name: "Education For All", href: "/causes/education" },
    { name: "Healthcare ", href: "/causes/healthcare" },
    // { name: "In Kind Donation", href: "/causes/in-kind-gifts" },
    { name: "Skill Development & Livelihood", href: "/causes/skill-development" },
    { name: "Orphans & Destitute ", href: "/causes/orphans-destitute-children" },
    { name: "Seasonal Projects", href: "/causes/seasonal-programs" },
    { name: "Water For Life", href: "/causes/water-for-life" },
    { name: "Emergency & Relief", href: "/causes/emergency-relief" },
    
  ]

  const involvedDropdown = [
    { name: "Volunteer", href: "/volunteer" },
    { name: "Fundraiser", href: "/fundraiser" },
    
  ]

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/", dropdown: aboutDropdown },
    { name: "Our Causes", href: "/", dropdown: causesDropdown },
    { name: "Get Involved", href: "/", dropdown: involvedDropdown },
    { name: "Contact Us", href: "/contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg">
      <AnimatePresence>
        {!isScrolled && (
          <motion.div
            initial={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="hidden md:block bg-gradient-to-r from-yellow-500 to-amber-600 text-white py-2 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-6 text-sm">
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <span>+977 984 7040 404</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <span>info@hro.org.np</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <span className="text-sm">Follow Us:</span>
                  <Facebook className="h-4 w-4 hover:text-yellow-200 cursor-pointer transition-colors" />
                  <Twitter className="h-4 w-4 hover:text-yellow-200 cursor-pointer transition-colors" />
                  <Instagram className="h-4 w-4 hover:text-yellow-200 cursor-pointer transition-colors" />
                  <Linkedin className="h-4 w-4 hover:text-yellow-200 cursor-pointer transition-colors" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3 relative">
            {/* Decorative floating orbs */}
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-gradient-to-r from-yellow-400/20 to-amber-500/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-gradient-to-r from-amber-400/30 to-orange-400/30 rounded-full animate-bounce"></div>

            <div className="relative">
              <div className=" w-12 h-12 rounded-full shadow-lg relative overflow-hidden">
                <img src="/logo.png" alt="" className="h-12 w-12 text-white relative z-10" />
                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent "></div>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full shadow-sm"></div>
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-rose-400 rounded-full shadow-sm"></div>
            </div>
            <div>
              <span className="text-sm md:text-2xl font-bold bg-gradient-to-r from-yellow-600 to-amber-700 bg-clip-text text-transparent ">
                Human Relief Organization Nepal
              </span>
              <div className="text-xs text-slate-500 font-medium">Serving Humanity</div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.href}
                  className="flex items-center space-x-1 px-4 py-2 text-slate-700 hover:text-yellow-600 transition-colors duration-200 font-medium rounded-lg hover:bg-yellow-50"
                >
                  <span>{item.name}</span>
                  {item.dropdown && <ChevronDown className="h-4 w-4" />}
                </Link>

                {item.dropdown && activeDropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50 "
                  >
                    {item.dropdown.map((dropItem) => (
                      <Link
                        key={dropItem.name}
                        to={dropItem.href}
                        className="block px-4 py-2 text-slate-600 hover:text-yellow-600 hover:bg-yellow-50 transition-colors duration-200"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {dropItem.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}

            <Link
              to="/donate"
              className="bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-amber-600 hover:to-yellow-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 ml-4"
            >
              Donate
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-yellow-600 transition-colors duration-200 p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-white border-t border-slate-200 max-h-[calc(100vh-4rem)] overflow-y-auto"
            >
              <div className="py-4 px-4 space-y-2">
                {navItems.map((item) => (
                  <div key={item.name} className="border-b border-slate-100 pb-2 last:border-b-0">
                    {item.dropdown ? (
                      <div>
                        <button
                          onClick={() => setMobileActiveDropdown(mobileActiveDropdown === item.name ? null : item.name)}
                          className="flex items-center justify-between w-full py-2 text-slate-800 hover:text-yellow-600 transition-colors duration-200 font-medium text-base"
                        >
                          <span>{item.name}</span>
                          <ChevronDown
                            className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${
                              mobileActiveDropdown === item.name ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {mobileActiveDropdown === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="mt-1 ml-3 space-y-1 border-l-2 border-yellow-100 pl-3">
                                {item.dropdown.map((dropItem) => (
                                  <Link
                                    key={dropItem.name}
                                    to={dropItem.href}
                                    className="block py-1.5 text-slate-600 hover:text-yellow-600 transition-colors duration-200 text-sm"
                                    onClick={() => {
                                      setIsOpen(false)
                                      setMobileActiveDropdown(null)
                                    }}
                                  >
                                    {dropItem.name}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        className="flex items-center justify-between py-2 text-slate-800 hover:text-yellow-600 transition-colors duration-200 font-medium text-base"
                        onClick={() => setIsOpen(false)}
                      >
                        <span>{item.name}</span>
                      </Link>
                    )}
                  </div>
                ))}

                {/* Compact Mobile Contact & Social Section */}
                <div className="mt-4 pt-4 border-t border-slate-200">
                  <div className="grid grid-cols-1 gap-2 mb-4 text-sm">
                    <a
                      href="tel:+15551234567"
                      className="flex items-center space-x-2 text-slate-600 hover:text-yellow-600 py-1"
                    >
                      <Phone className="h-4 w-4" />
                      <span>+977 984 7040 404</span>
                    </a>
                    <a
                      href="mailto:info@hopefoundation.org"
                      className="flex items-center space-x-2 text-slate-600 hover:text-yellow-600 py-1"
                    >
                      <Mail className="h-4 w-4" />
                      <span>info@hro.org.np</span>
                    </a>
                  </div>

                  {/* Compact Social Icons */}
                  <div className="flex items-center justify-center space-x-6 mb-4">
                    <Facebook className="h-5 w-5 text-yellow-600 hover:text-amber-700 cursor-pointer transition-colors" />
                    <Twitter className="h-5 w-5 text-yellow-600 hover:text-amber-700 cursor-pointer transition-colors" />
                    <Instagram className="h-5 w-5 text-yellow-600 hover:text-amber-700 cursor-pointer transition-colors" />
                    <Linkedin className="h-5 w-5 text-yellow-600 hover:text-amber-700 cursor-pointer transition-colors" />
                  </div>

                  <Link
                    to="/donate"
                    className="block w-full bg-gradient-to-r from-yellow-500 to-amber-600 text-white px-4 py-2.5 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 text-base text-center"
                    onClick={() => setIsOpen(false)}
                  >
                    Donate Now
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
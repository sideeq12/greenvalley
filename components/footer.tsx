import Link from "next/link"
import { Sprout, Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Sprout className="h-8 w-8 text-green-400" />
              <span className="font-bold text-xl">Balogun Family Farm</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Community-focused organic farm in Shaki, Oyo State, Nigeria. Fresh, healthy produce grown on 10 acres of land with a passion for sustainability and quality.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-green-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-green-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-green-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>Balogun Family Farm</p>
              <p>Shaki, Oyo State, Nigeria</p>
              <p>+234 800 000 0000</p>
              <p>hello@balogunfarm.ng</p>
            </div>
            <div className="mt-4">
              <h5 className="font-medium mb-2">Farm Stand Hours</h5>
              <p className="text-sm text-gray-300">Monday - Saturday: 8:00 AM - 6:00 PM</p>
              <p className="text-sm text-gray-300">Sunday: 10:00 AM - 4:00 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-300">&copy; {new Date().getFullYear()} Balogun Family Farm. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

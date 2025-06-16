import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Clock } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/placeholder.svg?height=800&width=1200')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Fresh from Farm
            <span className="block text-green-400">to Your Table</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Experience the finest organic produce grown with love and care on our family farm. Sustainable farming
            practices for a healthier tomorrow.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3">
              <Link href="#products" className="flex items-center">
                Shop Fresh Produce
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-gray-900 text-lg px-8 py-3"
            >
              <Link href="#about">Learn Our Story</Link>
            </Button>
          </div>

          {/* Quick Info */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center text-white">
            <div className="flex items-center justify-center">
              <MapPin className="h-5 w-5 mr-2 text-green-400" />
              <span>Located in Green Valley, CA</span>
            </div>
            <div className="flex items-center justify-center">
              <Clock className="h-5 w-5 mr-2 text-green-400" />
              <span>Open Daily 8AM - 6PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

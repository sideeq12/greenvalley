import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, MapPin, Clock, Leaf, Heart, Users, Star, Quote, Truck, Calendar, ShoppingCart } from "lucide-react"

export default function HomePage() {
  const features = [
    {
      icon: Leaf,
      title: "100% Organic",
      description: "All our produce is certified organic and grown without harmful chemicals.",
    },
    {
      icon: Heart,
      title: "Family Owned",
      description: "Three generations of farming expertise and passion for quality.",
    },
    {
      icon: Users,
      title: "Community Focused",
      description: "Supporting our local community with fresh, affordable produce.",
    },
  ]

  const featuredProducts = [
    {
      name: "Fresh Vegetables",
      image: "/bell pepper.jpg",
      description: "Crisp lettuce, juicy tomatoes, crunchy carrots, and seasonal vegetables.",
      price: "₦2,300 per kg",
      organic: true,
    },
    {
      name: "Seasonal Fruits",
      image: "/tomato.jpg",
      description: "Sweet strawberries, crisp apples, juicy peaches, and berries.",
      price: "₦2,300 per kg",
      organic: true,
    },
    {
      name: "Farm Fresh Eggs",
      image: "/yellow pepper.jpg",
      description: "Free-range eggs from our happy, healthy chickens.",
      price: "₦2,300 per kg",
      organic: false,
    },
  ]

  const testimonials = [
    {
      name: "Aisha Bello",
      location: "Ibadan, Oyo State",
      rating: 5,
      text: "The freshest produce I've ever tasted! You can really taste the difference when vegetables are grown with such care.",
    },
    {
      name: "Chinedu Okafor",
      location: "Enugu, Enugu State",
      rating: 5,
      text: "I've been buying from this farm for a year. Their organic vegetables are amazing and the family is so welcoming.",
    },
    {
      name: "Ngozi Adeyemi",
      location: "Lagos, Lagos State",
      rating: 5,
      text: "Love their weekly produce box! Getting fresh, seasonal produce has changed how our family eats.",
    },
  ]

  const services = [
    {
      icon: ShoppingCart,
      title: "Farm Stand",
      description: "Visit our on-site farm stand for daily fresh picks.",
    },
    {
      icon: Truck,
      title: "Local Delivery",
      description: "Fresh produce delivered directly to your door.",
    },
    {
      icon: Calendar,
      title: "CSA Program",
      description: "Weekly harvest boxes with seasonal variety.",
    },
  ]

  const stats = [
    { number: "2", label: "Years of Experience" },
    { number: "10", label: "Acres of Farmland" },
    { number: "50+", label: "Crop Varieties" },
    { number: "1000+", label: "Happy Customers" },
  ]

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Section 1: Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/herosection.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

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
                <Link href="/about" className="flex items-center">
                Learn Our Story
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
             
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center text-white">
              <div className="flex items-center justify-center">
                <MapPin className="h-5 w-5 mr-2 text-green-400" />
                <span>Located in Shaki, Oyo State, Nigeria</span>
              </div>
              <div className="flex items-center justify-center">
                <Clock className="h-5 w-5 mr-2 text-green-400" />
                <span>Open Daily 8AM - 6PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: About Us Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Three Generations of Farming Excellence
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Since 2024, the Johnson family has been cultivating the rich soil of Shaki, Oyo State, bringing you the
                freshest and most nutritious produce while caring for our land and community.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                What started as a small family garden has grown into a thriving organic farm, but our
                commitment to quality and sustainability remains unchanged.
              </p>
              <Button className="bg-green-600 hover:bg-green-700">
                <Link href="/about">Read Our Full Story</Link>
              </Button>
            </div>
            <div>
              <img
                src="/green house.jpg"
                alt="Farm family working in the fields"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Green Valley Farm?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to providing the freshest, highest quality produce while caring for our environment and
              community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Featured Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our most popular fresh produce, grown with care and harvested at peak ripeness.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-w-16 aspect-h-12">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                    {product.organic && (
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Organic</Badge>
                    )}
                  </div>
                  <p className="text-gray-600">{product.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Our Services */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How We Serve You</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple convenient ways to enjoy our fresh produce and connect with our farm.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-white">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <service.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">Ready to experience farm-fresh produce?</p>
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              <Link href="/contact">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Section 6: Customer Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from families who love our fresh produce.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-green-600 mb-4" />
                  <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Farm Stats & CTA */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Growing Together Since 1952</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Our numbers tell the story of our commitment to quality, sustainability, and community.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Ready to Experience Farm Fresh?</h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Visit our farm stand today or contact us to learn more about our products and services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                <Link href="/products">Shop Now</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-green-600 text-lg px-8 py-3"
              >
                <Link href="/contact">Visit Our Farm</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

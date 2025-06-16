import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Leaf, Heart, Users, Award } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Leaf,
      title: "Sustainable Farming",
      description: "We use eco-friendly practices that protect our soil and environment for future generations.",
    },
    {
      icon: Heart,
      title: "Grown with Love",
      description: "Every crop is tended with care and passion, ensuring the highest quality produce.",
    },
    {
      icon: Users,
      title: "Community Focused",
      description: "Supporting our local community with fresh, affordable, and nutritious food.",
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "Certified organic and regularly tested to meet the highest standards of quality.",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Story</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Since 2024, our farm in Shaki, Oyo State, Nigeria, has been dedicated to cultivating the land with sustainable practices and a passion for quality. We bring you the freshest and most nutritious produce while caring for our land and community.
            </p>
          </div>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="/green house.jpg"
                alt="Farm in Shaki, Oyo State"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">A New Chapter in Sustainable Farming</h2>
              <p className="text-gray-600 mb-6">
                What started as a small family garden in 2024 has quickly grown into a thriving organic farm. Our commitment to quality and sustainability remains unchanged as we embrace modern techniques to bring you the best produce possible.
              </p>
              <p className="text-gray-600 mb-6">
                Today, we grow a variety of fruits and vegetables, all while maintaining our organic principles and commitment to environmental stewardship. Our farm is not just a business—it's a community effort and a vision for a healthier future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do, from planting seeds to serving our community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Mission</h2>
            <p className="text-xl text-gray-600 mb-8">
              To provide our community with the freshest, most nutritious organic produce while practicing sustainable
              farming methods that preserve our environment for future generations. We believe that good food starts
              with good soil, and good soil starts with good stewardship.
            </p>
            <div className="bg-green-50 rounded-lg p-8">
              <blockquote className="text-2xl font-medium text-gray-900 italic">
                "We don't just grow food—we grow relationships, community, and a sustainable future."
              </blockquote>
              <cite className="block mt-4 text-lg text-gray-600">- The Balogun Family</cite>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

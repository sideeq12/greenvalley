import { Card, CardContent } from "@/components/ui/card"
import { Leaf, Heart, Users, Award } from "lucide-react"

export function AboutSection() {
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
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            For over three generations, the Johnson family has been cultivating the rich soil of Green Valley, bringing
            you the freshest and most nutritious produce while caring for our land.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="Farm family"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Three Generations of Farming Excellence</h3>
            <p className="text-gray-600 mb-6">
              What started as a small family garden in 1952 has grown into a thriving 200-acre farm. We've maintained
              our commitment to sustainable practices while embracing modern techniques to bring you the best produce
              possible.
            </p>
            <p className="text-gray-600 mb-6">
              Today, we grow over 50 varieties of fruits and vegetables, all while maintaining our organic certification
              and commitment to environmental stewardship.
            </p>
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">70+</div>
                <div className="text-sm text-gray-600">Years of Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">200</div>
                <div className="text-sm text-gray-600">Acres of Farmland</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">50+</div>
                <div className="text-sm text-gray-600">Crop Varieties</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

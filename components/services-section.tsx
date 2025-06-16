import { Card, CardContent } from "@/components/ui/card"
import { Truck, Calendar, Users, ShoppingCart } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: ShoppingCart,
      title: "Farm Stand",
      description: "Visit our on-site farm stand for the freshest daily picks. Open 8AM-6PM daily.",
      features: ["Fresh daily harvest", "Seasonal specialties", "Farm-made products", "Friendly service"],
    },
    {
      icon: Truck,
      title: "Local Delivery",
      description: "We deliver fresh produce directly to your door within a 20-mile radius.",
      features: ["Same-day delivery", "Minimum order $25", "Eco-friendly packaging", "Contactless delivery"],
    },
    {
      icon: Calendar,
      title: "CSA Program",
      description: "Join our Community Supported Agriculture program for weekly fresh produce boxes.",
      features: ["Weekly harvest boxes", "Seasonal variety", "Member discounts", "Recipe suggestions"],
    },
    {
      icon: Users,
      title: "Farm Tours",
      description: "Educational tours for families, schools, and groups to learn about sustainable farming.",
      features: ["Guided farm tours", "Educational programs", "Hands-on activities", "Group discounts"],
    },
  ]

  return (
    <section id="services" className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer various ways to enjoy our fresh produce and connect with our farm community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-white rounded-lg p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Experience Farm Fresh?</h3>
          <p className="text-gray-600 mb-6">
            Contact us today to learn more about our services or schedule a visit to our farm.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+1234567890"
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition-colors"
            >
              Call (123) 456-7890
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border border-green-600 text-green-600 font-medium rounded-md hover:bg-green-600 hover:text-white transition-colors"
            >
              Send Message
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

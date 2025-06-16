import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ProductsSection() {
  const products = [
    {
      name: "Fresh Vegetables",
      image: "/placeholder.svg?height=300&width=400",
      description: "Crisp lettuce, juicy tomatoes, crunchy carrots, and more seasonal vegetables.",
      season: "Year-round",
      organic: true,
    },
    {
      name: "Seasonal Fruits",
      image: "/placeholder.svg?height=300&width=400",
      description: "Sweet strawberries, crisp apples, juicy peaches, and seasonal berries.",
      season: "Spring-Fall",
      organic: true,
    },
    {
      name: "Fresh Herbs",
      image: "/placeholder.svg?height=300&width=400",
      description: "Aromatic basil, fresh cilantro, mint, rosemary, and other culinary herbs.",
      season: "Year-round",
      organic: true,
    },
    {
      name: "Farm Eggs",
      image: "/placeholder.svg?height=300&width=400",
      description: "Free-range eggs from our happy, healthy chickens.",
      season: "Year-round",
      organic: false,
    },
    {
      name: "Honey Products",
      image: "/placeholder.svg?height=300&width=400",
      description: "Pure, raw honey and beeswax products from our on-site beehives.",
      season: "Year-round",
      organic: true,
    },
    {
      name: "Preserved Goods",
      image: "/placeholder.svg?height=300&width=400",
      description: "Homemade jams, pickles, and preserved vegetables made from our harvest.",
      season: "Year-round",
      organic: true,
    },
  ]

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Fresh Products</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From our fields to your table, we offer a wide variety of fresh, organic produce and farm-made products
            throughout the year.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-w-16 aspect-h-12">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                  {product.organic && <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Organic</Badge>}
                </div>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Available: {product.season}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">Interested in bulk orders or wholesale pricing?</p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 border border-green-600 text-green-600 font-medium rounded-md hover:bg-green-600 hover:text-white transition-colors"
          >
            Contact Us for Pricing
          </a>
        </div>
      </div>
    </section>
  )
}

import { Link } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Star, ExternalLink, UtensilsCrossed, Coffee, IceCream, Fish, Pizza, Soup, Flame , Wine} from "lucide-react";

const categories = [
  { id: "all", name: "All", icon: UtensilsCrossed },

  { id: "seafood", name: "Seafood", icon: Fish },

  { id: "american", name: "American", icon: UtensilsCrossed },

  { id: "mexican", name: "Mexican", icon: UtensilsCrossed },

  { id: "pizza", name: "Pizza", icon: Pizza },

  { id: "bbq", name: "BBQ", icon: Flame },

];

const restaurants = [
  {
    "name": "AJ’s Seafood & Oyster Bar",
    "category": "seafood",
    "image": "https://images.pexels.com/photos/566345/pexels-photo-566345.jpeg",
    "description": "Popular harbor-side seafood restaurant known for oysters and fresh Gulf dishes.",
    "distance": "0.12 miles",
    "rating": 4.6,

  },
  {
    "name": "The Lucky Snapper",
    "category": "seafood",
    "image": "https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg",
    "description": "Casual grill and bar serving seafood and American favorites near the harbor.",
    "distance": "0.25 miles",
    "rating": 4.4,
    
  },
  {
    "name": "McGuire’s Irish Pub of Destin",
    "category": "pub",
    "image": "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg",
    "description": "Famous Irish pub offering hearty food, house-brewed beer, and lively atmosphere.",
    "distance": "0.28 miles",
    "rating": 4.8,
    
  },
  {
    "name": "The Shed BBQ & Blues Joint",
    "category": "bbq",
    "image": "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg",
    "description": "Southern BBQ restaurant with live blues music and smoky barbecue flavors.",
    "distance": "0.34 miles",
    "rating": 4.5,
    
  },
  {
    "name": "Fishbar",
    "category": "seafood",
    "image": "https://images.pexels.com/photos/3763847/pexels-photo-3763847.jpeg",
    "description": "Modern seafood restaurant offering fresh catch, cocktails, and harbor views.",
    "distance": "0.50 miles",
    "rating": 4.5,
    
  },
  {
    "name": "Gilligan’s Restaurant",
    "category": "seafood",
    "image": "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg",
    "description": "Family-friendly seafood restaurant known for classic Gulf Coast dishes.",
    "distance": "0.67 miles",
    "rating": 4.4,
   
  },
  {
    "name": "Harbor Docks Seafood Market",
    "category": "seafood",
    "image": "https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg",
    "description": "Local favorite offering sushi, seafood, and a fresh fish market.",
    "distance": "0.71 miles",
    "rating": 4.7,
   
  },
  {
    "name": "Graffiti",
    "category": "american",
    "image": "https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg",
    "description": "Family diner offering classic American comfort food and seafood.",
    "distance": "1.23 miles",
    "rating": 4.3,
   
  },
  {
    "name": "Pepito’s Mexican Grill",
    "category": "mexican",
    "image": "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
    "description": "Authentic Mexican cuisine with tacos, fajitas, and margaritas.",
    "distance": "1.48 miles",
    "rating": 4.4,
    
  },
  {
    "name": "La Paz Restaurant & Cantina",
    "category": "mexican",
    "image": "https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg",
    "description": "Vibrant cantina serving Tex-Mex favorites and fresh seafood dishes.",
    "distance": "1.88 miles",
    "rating": 4.4,
   
  },
  {
    "name": "Merlin’s Pizza",
    "category": "pizza",
    "image": "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg",
    "description": "Local pizza shop offering handmade pizzas and Italian comfort food.",
    "distance": "2.68 miles",
    "rating": 4.5,
   
  },
  {
    "name": "Landry’s Seafood House",
    "category": "seafood",
    "image": "https://images.pexels.com/photos/365459/pexels-photo-365459.jpeg",
    "description": "Upscale seafood restaurant featuring Gulf Coast specialties.",
    "distance": "3.23 miles",
    "rating": 4.6,
    
  },
  {
    "name": "Joe’s Crab Shack",
    "category": "seafood",
    "image": "https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg",
    "description": "Lively seafood chain known for crab buckets and coastal flavors.",
    "distance": "3.29 miles",
    "rating": 4.3,
   
  },
  {
    "name": "Ruth’s Chris Steak House",
    "category": "steakhouse",
    "image": "https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg",
    "description": "Luxury steakhouse famous for sizzling butter-topped steaks.",
    "distance": "3.40 miles",
    "rating": 4.8,
   
  },
  {
    "name": "Osaka Japanese Hibachi Steakhouse & Sushi Bar",
    "category": "japanese",
    "image": "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg",
    "description": "Japanese hibachi grills and sushi bar with entertaining chefs.",
    "distance": "4.95 miles",
    "rating": 4.6,
    
  },
  {
    "name": "The Crab Trap",
    "category": "seafood",
    "image": "https://tb-static.uber.com/prod/image-proc/processed_images/e4a43612cf9d0ad5d567c73823d761e9/0e8f477e8f858732b95bd74b5e07a538.jpeg",
    "description": "Beachfront seafood restaurant with Gulf views and family dining.",
    "distance": "6.42 miles",
    "rating": 4.7,
    
  },
  {
    "name": "Roberto’s Pizzeria",
    "category": "pizza",
    "image": "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg",
    "description": "Authentic Italian pizza and pasta served in a cozy atmosphere.",
    "distance": "9.80 miles",
    "rating": 4.4,
    
  },
  {
    "name": "Ocean Club",
    "category": "fine-dining",
    "image": "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg",
    "description": "Elegant restaurant serving prime steaks and fresh seafood.",
    "distance": "11.26 miles",
    "rating": 4.7,
    
  },
  {
    "name": "Bud & Alley’s Restaurant",
    "category": "seafood",
    "image": "https://images.pexels.com/photos/3763847/pexels-photo-3763847.jpeg",
    "description": "Iconic Gulf-front restaurant known for seafood and sunset views.",
    "distance": "20.13 miles",
    "rating": 4.8,
    
  }
]

const shops = [
  
  
  {
    "name": "Destin Commons",
    "type": "Shopping Center",
    "address": "4300 Legendary Dr, Destin, FL 32541",
    "description": "Open-air mall with major retailers, restaurants, and entertainment options.",
    "distance": "5.49 miles",
    "mapLink": "https://www.google.com/maps/search/Destin+Commons+Destin+Florida"
  },
  
  {
    "name": "Silver Sands Factory Stores",
    "type": "Outlet Mall",
    "address": "10562 Emerald Coast Pkwy, Destin, FL 32550",
    "description": "Popular outlet mall featuring designer brands and discounted factory stores.",
    "distance": "9.98 miles",
    "mapLink": "https://www.google.com/maps/search/Silver+Sands+Factory+Stores+Destin+Florida"
  }


];

export default function Restaurants() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredRestaurants = selectedCategory === "all"
    ? restaurants
    : restaurants.filter(r => r.category === selectedCategory);

  return (
    <div data-testid="restaurants-page">
      <Helmet>
        <title>Restaurants & Shops | Destin Inn & Suites - Destin, FL</title>
        <meta name="description" content="Find the best restaurants and shops near Destin Inn & Suites. Fresh seafood, casual dining, and shopping all within minutes of our hotel." />
      </Helmet>

      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden" data-testid="restaurants-hero">
        <img
          src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Restaurants"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="font-accent text-2xl text-accent mb-2">Dine & Shop</p>
            <h1 className="font-heading text-4xl md:text-6xl font-bold">Restaurants & Shops</h1>
          </div>
        </div>
      </section>

      {/* Restaurants Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="font-accent text-xl text-accent mb-3">Nearby Dining</p>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              Local Restaurants
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From fresh Gulf seafood to casual family dining, discover the best eats near Destine Inn
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12" data-testid="restaurant-filters">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? "bg-primary text-white"
                    : "bg-secondary text-gray-700 hover:bg-gray-200"
                }`}
                data-testid={`filter-${cat.id}`}
              >
                <cat.icon className="w-4 h-4" />
                {cat.name}
              </button>
            ))}
          </div>

          {/* Restaurant Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredRestaurants.map((restaurant, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group"
                data-testid={`restaurant-${index}`}
              >
                <div className="img-zoom h-48">
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-heading text-lg font-semibold text-gray-900">
                      {restaurant.name}
                    </h3>
                    <span className="text-sm text-gray-500">{restaurant.priceRange}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{restaurant.description}</p>
                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span>{restaurant.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{restaurant.distance}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shops Section */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="font-accent text-xl text-accent mb-3">Nearby Shopping</p>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              Shops & Stores
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need is just a short drive away
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {shops.map((shop, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
                data-testid={`shop-${index}`}
              >
                <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full mb-3">
                  {shop.type}
                </span>
                <h3 className="font-heading text-lg font-semibold text-gray-900 mb-2">
                  {shop.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{shop.address}</p>
                <p className="text-gray-600 text-sm mb-4">{shop.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <MapPin className="w-4 h-4" />
                    <span>{shop.distance}</span>
                  </div>
                  <a
                    href={shop.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Stay Close to It All
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Book your stay at Destin Inn and enjoy easy access to the best of Destin
          </p>
          <Link to="https://destininnsuites.bookmystay.io" data-testid="restaurants-book-now">
            <Button className="bg-white text-primary hover:bg-gray-100 rounded-full px-10 py-6 text-lg font-medium shadow-lg">
              Book Your Stay
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

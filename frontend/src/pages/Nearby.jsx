import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, ExternalLink, Umbrella, ShoppingBag, Camera, Compass, Waves } from "lucide-react";

const nearbyPlaces = [
  {
    category: "Beaches",
    icon: Umbrella,
    places: [
      {
        name: "Henderson Beach State Park",
        distance: "0.8 miles",
        time: "3 min drive",
        description: "Pristine white sand beach with nature trails and picnic areas",
        mapLink: "https://maps.app.goo.gl/example1"
      },
      {
        name: "Crystal Beach",
        distance: "1.2 miles",
        time: "5 min drive",
        description: "Popular beach with calm waters, perfect for families",
        mapLink: "https://maps.app.goo.gl/example2"
      },
      {
        name: "James Lee Park Beach",
        distance: "2.5 miles",
        time: "8 min drive",
        description: "Public beach with playground and fishing pier",
        mapLink: "https://maps.app.goo.gl/example3"
      }
    ]
  },
  {
    category: "Shopping",
    icon: ShoppingBag,
    places: [
      {
        name: "Destin Commons",
        distance: "3.2 miles",
        time: "10 min drive",
        description: "Open-air shopping center with retail stores and restaurants",
        mapLink: "https://maps.app.goo.gl/example4"
      },
      {
        name: "Silver Sands Premium Outlets",
        distance: "8.5 miles",
        time: "15 min drive",
        description: "Designer outlet mall with over 100 stores",
        mapLink: "https://maps.app.goo.gl/example5"
      },
      {
        name: "HarborWalk Village",
        distance: "4.8 miles",
        time: "12 min drive",
        description: "Waterfront shopping and entertainment district",
        mapLink: "https://maps.app.goo.gl/example6"
      }
    ]
  },
  {
    category: "Attractions",
    icon: Camera,
    places: [
      {
        name: "Big Kahuna's Water Park",
        distance: "2.0 miles",
        time: "6 min drive",
        description: "Family water park with slides and wave pool",
        mapLink: "https://maps.app.goo.gl/example7"
      },
      {
        name: "Destin History & Fishing Museum",
        distance: "4.5 miles",
        time: "11 min drive",
        description: "Learn about Destin's fishing heritage",
        mapLink: "https://maps.app.goo.gl/example8"
      },
      {
        name: "Gulfarium Marine Adventure Park",
        distance: "3.8 miles",
        time: "9 min drive",
        description: "Marine life exhibits and dolphin encounters",
        mapLink: "https://maps.app.goo.gl/example9"
      }
    ]
  },
  {
    category: "Activities",
    icon: Compass,
    places: [
      {
        name: "Destin Harbor Boardwalk",
        distance: "4.2 miles",
        time: "10 min drive",
        description: "Charter fishing, boat tours, and waterfront dining",
        mapLink: "https://maps.app.goo.gl/example10"
      },
      {
        name: "Track Recreation Center",
        distance: "1.5 miles",
        time: "5 min drive",
        description: "Go-karts, mini golf, and arcade games",
        mapLink: "https://maps.app.goo.gl/example11"
      },
      {
        name: "Henderson Park Inn",
        distance: "1.0 mile",
        time: "4 min drive",
        description: "Private beach access and fine dining",
        mapLink: "https://maps.app.goo.gl/example12"
      }
    ]
  },
  {
    category: "Rental Activities",
    icon: Waves,
    places: [
      {
        "name": "Destin Harbor Boardwalk Water Sports",
        "type": "Jet Ski Rental",
        "address": "102 Harbor Blvd, Destin, FL 32541",
        "description": "Popular water sports rental offering jet skis, parasailing, paddleboards, and harbor tours.",
        "distance": "0.5 miles",
        "mapLink": "https://www.google.com/maps/search/Destin+Harbor+Boardwalk+Water+Sports"
      },
      {
        "name": "Wet-N-Wild Watersports",
        "type": "Jet Ski Rental",
        "address": "119 Calhoun Ave, Destin, FL 32541",
        "description": "Jet ski rentals, dolphin tours, pontoon boat rentals, and parasailing adventures.",
        "distance": "1.2 miles",
        "mapLink": "https://www.google.com/maps/search/Wet-N-Wild+Watersports+Destin"
      },
      {
        "name": "Power Up Watersports",
        "type": "Water Sports Rental",
        "address": "Destin Harbor Boardwalk, Destin, FL 32541",
        "description": "Rent jet skis, kayaks, and paddleboards or enjoy parasailing and banana boat rides.",
        "distance": "0.6 miles",
        "mapLink": "https://www.google.com/maps/search/Power+Up+Watersports+Destin"
      },
      {
        "name": "Gilligan's Watersports",
        "type": "Jet Ski Rental",
        "address": "530 Harbor Blvd, Destin, FL 32541",
        "description": "Jet ski rentals, pontoon boats, and dolphin cruises located near the harbor.",
        "distance": "0.7 miles",
        "mapLink": "https://www.google.com/maps/search/Gilligan's+Watersports+Destin"
      }
    ]
  }
];

export default function Nearby() {
  return (
    <div data-testid="nearby-page">
      <Helmet>
        <title>Nearby Attractions | Destine Inn & Suites - Destin, FL</title>
        <meta name="description" content="Explore beaches, shopping, and attractions near Destine Inn & Suites. Henderson Beach, Destin Commons, and more just minutes away." />
      </Helmet>

      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden" data-testid="nearby-hero">
        <img
          src="https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Nearby Places"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="font-accent text-2xl text-accent mb-2">Explore</p>
            <h1 className="font-heading text-4xl md:text-6xl font-bold">Nearby Places</h1>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
            Discover the Best of Destin
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            From pristine beaches to exciting attractions, shopping destinations to outdoor adventures – everything you need for an unforgettable Florida vacation is right at your doorstep.
          </p>
        </div>
      </section>

      {/* Places by Category */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          {nearbyPlaces.map((category, catIndex) => (
            <div key={catIndex} className="mb-16 last:mb-0" data-testid={`category-${category.category.toLowerCase()}`}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-semibold text-gray-900">
                  {category.category}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.places.map((place, placeIndex) => (
                  <div
                    key={placeIndex}
                    className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 border border-gray-100"
                    data-testid={`place-${catIndex}-${placeIndex}`}
                  >
                    <h3 className="font-heading text-lg font-semibold text-gray-900 mb-2">
                      {place.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{place.description}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>{place.distance}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-primary" />
                        <span>{place.time}</span>
                      </div>
                    </div>
                    <a
                      href={place.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View on Map
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              Our Location
            </h2>
            <p className="text-gray-600">
              Conveniently located in the heart of Destin, Florida
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl max-w-4xl mx-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.5!2d-86.48861883619288!3d30.391743265658718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDIzJzMwLjMiTiA4NsKwMjknMTkuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Destine Inn Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Ready to Explore?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Book your stay and start your Destin adventure
          </p>
          <Link to="/booking" data-testid="nearby-book-now">
            <Button className="bg-white text-primary hover:bg-gray-100 rounded-full px-10 py-6 text-lg font-medium shadow-lg">
              Book Your Stay
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

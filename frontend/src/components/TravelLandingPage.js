import React, { useState, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { 
  Search, 
  MapPin, 
  Calendar, 
  Users, 
  Star, 
  Heart,
  MessageCircle,
  Sparkles,
  Globe,
  Camera,
  Mountain,
  Waves
} from 'lucide-react';

const TravelLandingPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const destinations = [
    {
      name: "Rajasthan Royal",
      image: "https://images.pexels.com/photos/31135690/pexels-photo-31135690.jpeg",
      description: "Majestic palaces & desert adventures",
      icon: <Mountain className="w-6 h-6" />
    },
    {
      name: "Kerala Backwaters",
      image: "https://images.pexels.com/photos/17245352/pexels-photo-17245352.jpeg",
      description: "Serene waters & lush landscapes",
      icon: <Waves className="w-6 h-6" />
    },
    {
      name: "Himalayan Escape",
      image: "https://images.unsplash.com/photo-1654239277329-84412c9b5c0e",
      description: "Spiritual peaks & adventure trails",
      icon: <Mountain className="w-6 h-6" />
    },
    {
      name: "Goa Vibes",
      image: "https://images.unsplash.com/photo-1615445679216-c724159ce92b",
      description: "Beach life & vibrant culture",
      icon: <Waves className="w-6 h-6" />
    },
    {
      name: "Golden Triangle",
      image: "https://images.unsplash.com/photo-1647962939133-7436f05ddf7d",
      description: "Historic monuments & royal heritage",
      icon: <Camera className="w-6 h-6" />
    },
    {
      name: "Coastal Paradise",
      image: "https://images.unsplash.com/photo-1717750781467-7b6ff4e8b8b8",
      description: "Pristine beaches & sunset views",
      icon: <Waves className="w-6 h-6" />
    }
  ];

  const features = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Chat-First Planning",
      description: "Simply tell us your dream, our AI-powered chat plans everything"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Luxury Experiences",
      description: "Curated premium stays, dining, and exclusive cultural experiences"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "All India Coverage",
      description: "From Kashmir to Kanyakumari, we cover every corner of incredible India"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      age: 29,
      location: "Mumbai",
      text: "The chat experience was so smooth! They planned my Rajasthan trip perfectly.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Arjun Patel",
      age: 34,
      location: "Bangalore",
      text: "Luxury travel made simple. The Kerala houseboat experience was magical!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Neha Gupta",
      age: 27,
      location: "Delhi",
      text: "From booking to the actual trip, everything was seamless. Highly recommend!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      {/* Hero Section */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1709620220232-12ecd7ca33a8"
            alt="Luxury India Travel"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/70 via-blue-900/50 to-orange-800/70"></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <motion.div variants={fadeInUp} className="mb-8">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
                Incredible
              </span>
              <br />
              <span className="text-white">India Awaits</span>
            </h1>
            <p className="text-xl sm:text-2xl text-orange-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Chat with our AI travel assistant and discover luxury experiences across India. 
              From royal palaces to serene backwaters - plan your perfect journey in minutes.
            </p>
          </motion.div>

          {/* Chat Search Interface */}
          <motion.div 
            variants={fadeInUp}
            className="max-w-4xl mx-auto mb-12"
          >
            <div className="relative">
              <div className="backdrop-blur-md bg-white/20 border border-white/30 rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center space-x-4">
                  <MessageCircle className="w-8 h-8 text-orange-400 flex-shrink-0" />
                  <input
                    type="text"
                    placeholder="Tell us your dream destination... 'I want to explore Rajasthan palaces' or 'Plan a Kerala backwater cruise'"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 bg-transparent text-white text-lg placeholder-orange-200 border-none outline-none"
                  />
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl transition-all duration-300"
                  >
                    Start Planning
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">100+</div>
              <div className="text-orange-200">Destinations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">50K+</div>
              <div className="text-orange-200">Happy Travelers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-orange-200">Chat Support</div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-orange-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-orange-400 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </motion.section>

      {/* How It Works Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-orange-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Travel Planning Made
              <span className="bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent"> Simple</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered chat interface revolutionizes how you plan your Indian adventures
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-orange-500 to-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Showcase */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              All of India at Your
              <span className="bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent"> Fingertips</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From royal palaces to serene backwaters, discover India's most stunning destinations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img 
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="bg-orange-500 p-2 rounded-xl">
                      {destination.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{destination.name}</h3>
                  </div>
                  <p className="text-orange-200">{destination.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Stories from Our
              <span className="bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent"> Travelers</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of satisfied travelers who discovered India through our platform
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}, {testimonial.age}</div>
                    <div className="text-gray-600">{testimonial.location}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Ready to Explore Incredible India?
            </h2>
            <p className="text-xl text-orange-100 mb-12 max-w-2xl mx-auto">
              Start chatting with our AI travel assistant and create your perfect Indian adventure in minutes
            </p>

            {/* Final Chat Interface */}
            <div className="backdrop-blur-md bg-white/20 border border-white/30 rounded-3xl p-8 shadow-2xl mb-8">
              <div className="flex items-center space-x-4">
                <MessageCircle className="w-8 h-8 text-orange-200 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Where in India would you like to go?"
                  className="flex-1 bg-transparent text-white text-lg placeholder-orange-200 border-none outline-none"
                />
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-orange-600 px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:bg-orange-50 transition-all duration-300"
                >
                  Let's Plan!
                </motion.button>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-8 text-orange-200">
              <div className="flex items-center space-x-2">
                <Heart className="w-5 h-5" />
                <span>Trusted by 50K+ travelers</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 fill-current" />
                <span>4.9/5 rating</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
                Incredible India Travel
              </h3>
              <p className="text-gray-400 text-lg mb-4">
                Your AI-powered travel companion for discovering the magic of India. 
                Chat, plan, and explore with confidence.
              </p>
              <div className="flex space-x-4">
                <div className="bg-gradient-to-r from-orange-500 to-blue-500 p-3 rounded-xl">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold">Start Planning Now</div>
                  <div className="text-gray-400">Available 24/7</div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Popular Destinations</li>
                <li>Travel Packages</li>
                <li>How It Works</li>
                <li>Customer Stories</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Travel Guidelines</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
            <p>&copy; 2024 Incredible India Travel. Making dreams come true through chat-powered travel planning.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TravelLandingPage;
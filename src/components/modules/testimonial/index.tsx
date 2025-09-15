"use client";
import React, { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";

const TestimonialsUi = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const featuredTestimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Fashion Blogger",
      company: "@stylishsarah",
      content:
        "The quality exceeded my expectations! The dress fits perfectly and the fabric feels luxurious. Delivery was super fast too. I'll definitely be ordering again.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      product: "Summer Midi Dress",
      verified: true,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Tech Executive",
      company: "TechCorp Inc.",
      content:
        "Outstanding customer service and product quality. The team went above and beyond to ensure my order was perfect. This is how e-commerce should be done.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      product: "Wireless Headphones",
      verified: true,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Small Business Owner",
      company: "Local Cafe",
      content:
        "I've been a customer for over 2 years now. Consistently high quality products, fair prices, and excellent support. They truly care about their customers.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      product: "Kitchen Equipment Set",
      verified: true,
    },
  ];

  const videoTestimonials = [
    {
      id: 1,
      name: "David Kim",
      title: "Unboxing Experience",
      thumbnail:
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=300&h=200&fit=crop",
      duration: "2:34",
    },
    {
      id: 2,
      name: "Lisa Thompson",
      title: "Product Review",
      thumbnail:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=200&fit=crop",
      duration: "3:12",
    },
  ];

  const quickTestimonials = [
    {
      name: "Alex Turner",
      content: "Fast shipping, great quality!",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
    },
    {
      name: "Maria Santos",
      content: "Love the new collection. Absolutely gorgeous!",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=60&h=60&fit=crop&crop=face",
    },
    {
      name: "James Wilson",
      content: "Customer service is top-notch. Highly recommend!",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&crop=face",
    },
    {
      name: "Sophie Brown",
      content: "Perfect fit and amazing quality. Will order again!",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&h=60&fit=crop&crop=face",
    },
  ];

  const stats = [
    { label: "Happy Customers", value: "50,000+" },
    { label: "5-Star Reviews", value: "48,000+" },
    { label: "Countries Served", value: "25+" },
    { label: "Average Rating", value: "4.9/5" },
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % featuredTestimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, featuredTestimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredTestimonials.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + featuredTestimonials.length) % featuredTestimonials.length
    );
    setIsAutoPlaying(false);
  };

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              What Our Customers Say
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
              Real stories from real customers who love our products
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-blue-200 text-sm sm:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </section>

      {/* Featured Testimonials Carousel */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Featured Customer Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from our amazing customers about their experiences
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-slate-50 to-white shadow-2xl">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {featuredTestimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="w-full flex-shrink-0 p-12 lg:p-16"
                  >
                    <div className="max-w-4xl mx-auto text-center">
                      <Quote className="w-16 h-16 text-purple-600 mx-auto mb-8 opacity-50" />

                      <blockquote className="text-2xl sm:text-3xl font-medium text-gray-900 mb-8 leading-relaxed">
                        {testimonial.content}
                      </blockquote>

                      <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-6">
                        <Image
                          height={100}
                          width={100}
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                        />
                        <div className="text-center sm:text-left">
                          <div className="flex items-center justify-center sm:justify-start space-x-2 mb-2">
                            <h4 className="text-xl font-semibold text-gray-900">
                              {testimonial.name}
                            </h4>
                            {testimonial.verified && (
                              <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                                Verified
                              </div>
                            )}
                          </div>
                          <p className="text-gray-600 mb-2">
                            {testimonial.role} • {testimonial.company}
                          </p>
                          <p className="text-sm text-purple-600 font-medium mb-2">
                            Purchased: {testimonial.product}
                          </p>
                          <StarRating rating={testimonial.rating} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow-xl rounded-full p-3 hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow-xl rounded-full p-3 hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>

            {/* Dots indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {featuredTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? "bg-purple-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 bg-gradient-to-r from-slate-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Video Reviews
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Watch our customers share their experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {videoTestimonials.map((video) => (
              <div key={video.id} className="relative group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300">
                  <Image
                    width={200}
                    height={200}
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 group-hover:scale-110 transition-transform">
                      <Play
                        className="w-8 h-8 text-gray-900 ml-1"
                        fill="currentColor"
                      />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-lg mb-1">
                      {video.name}
                    </h3>
                    <p className="text-white/90 text-sm">{video.title}</p>
                    <div className="bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 rounded mt-2 inline-block">
                      {video.duration}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Reviews Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Quick Reviews
            </h2>
            <p className="text-xl text-gray-600">
              Short and sweet feedback from our community
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickTestimonials.map((review, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-slate-50 p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Image
                    width={50}
                    height={50}
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">
                      {review.name}
                    </h4>
                    <StarRating rating={review.rating} />
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {review.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Join Thousands of Happy Customers?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Experience the quality and service that our customers rave about.
            Start shopping today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 font-semibold py-4 px-8 rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-xl">
              Shop Now
            </button>
            <button className="border-2 border-white text-white font-semibold py-4 px-8 rounded-full hover:bg-white hover:text-purple-600 transform hover:scale-105 transition-all duration-200">
              Leave a Review
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsUi;

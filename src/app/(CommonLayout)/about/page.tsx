import React from "react";
import { Star, Award, Truck, Shield, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const AboutPage = () => {
  const stats = [
    { number: "50K+", label: "Happy Customers" },
    { number: "10K+", label: "Products Sold" },
    { number: "5+", label: "Years Experience" },
    { number: "99%", label: "Customer Satisfaction" },
  ];

  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality Assured",
      description:
        "Every product is carefully curated and tested to meet our high standards of quality and durability.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Customer First",
      description:
        "Your satisfaction is our priority. We go above and beyond to ensure exceptional shopping experience.",
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Fast Delivery",
      description:
        "Lightning-fast shipping with real-time tracking so you know exactly when to expect your order.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Trusted Brand",
      description:
        "Built on trust and reliability, we have earned the confidence of thousands of customers worldwide.",
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRexo_WFhMwaXkLM3XKlVqxD8nitpZlS8HpDkfjZyg4bcjNfRnWP72soV2CWSDuEDn5Fog&usqp=CAU",
    },
    {
      name: "Michael Chen",
      role: "Head of Product",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "Emily Rodriguez",
      role: "Customer Success",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Our Story
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We&lsquo;re passionate about bringing you the finest products with
            exceptional service. Founded with a vision to revolutionize online
            shopping experience.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">Our Journey</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              What started as a small dream in 2019 has grown into a thriving
              e-commerce platform serving customers worldwide. We began with a
              simple mission: to make quality products accessible to everyone.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Today, we&lsquo;re proud to be a trusted destination for thousands
              of customers who rely on us for their shopping needs. Our
              commitment to excellence drives everything we do.
            </p>
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                Rated 4.9/5 by our customers
              </span>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8">
              <Image
                width={500}
                height={500}
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=500&fit=crop"
                alt="Our workspace"
                className="w-full h-full object-cover rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We&lsquo;re not just another online store. We&lsquo;re your
              trusted partner in finding exactly what you need with service that
              exceeds expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-primary mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The passionate people behind our success, working tirelessly to
              bring you the best shopping experience possible.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <Image
                    width={500}
                    height={500}
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-shadow"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-primary font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
          <p className="text-xl leading-relaxed text-muted-foreground mb-8">
            To create meaningful connections between people and the products
            they love, while building a sustainable future for online commerce
            that benefits everyone.
          </p>
          <div className="flex justify-center">
            <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl">
              Shop With Us Today
            </button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Have questions or want to learn more? We&lsquo;d love to hear from
            you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={"/contact"}>
              <button className="cursor-pointer border border-border text-foreground px-6 py-2 rounded-lg font-medium hover:bg-muted transition-colors">
                Contact Support
              </button>
            </Link>
            <Link href={"/products"}>
              <Button size={"lg"} variant={"default"}>Visit Our Store</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

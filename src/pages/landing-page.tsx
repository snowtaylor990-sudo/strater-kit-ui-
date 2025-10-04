import { Header } from '../components/marketing/header-navigation/header';
import { Button } from '../components/base/buttons/button';
import { FeaturedIcon } from '../components/foundations/featured-icon/featured-icon';
import { RatingStars } from '../components/foundations/rating-stars';
import { Badge } from '../components/base/badges/badges';
import { BackgroundPattern } from '../components/shared-assets/background-patterns';
import {
  Zap,
  Scissors01,
  Target01,
  CheckCircle,
  Phone,
  Mail01,
  MarkerPin01,
} from '@untitledui/icons';

export default function LandingPage() {
  const services = [
    {
      icon: Target01,
      title: 'Garden Design',
      description: 'Custom garden layouts that transform your outdoor space into a beautiful oasis.',
    },
    {
      icon: Scissors01,
      title: 'Tree Services',
      description: 'Professional tree trimming, removal, and planting for healthy landscapes.',
    },
    {
      icon: Zap,
      title: 'Lawn Care',
      description: 'Regular maintenance including mowing, fertilizing, and seasonal cleanups.',
    },
  ];

  const benefits = [
    'Licensed and insured professionals',
    'Free estimates and consultations',
    'Eco-friendly practices',
    'Satisfaction guaranteed',
    '24/7 emergency services',
    'Affordable pricing',
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Homeowner',
      content: 'Transformed our backyard into a stunning garden. Professional, reliable, and affordable!',
      rating: 5,
    },
    {
      name: 'Mike Roberts',
      role: 'Business Owner',
      content: 'Best landscaping service in town. They maintain our commercial property beautifully.',
      rating: 5,
    },
    {
      name: 'Emily Chen',
      role: 'Homeowner',
      content: 'From design to installation, everything was perfect. Highly recommend!',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50 px-6 pb-24 pt-32 sm:px-8 lg:px-12">
        <div className="absolute inset-0 opacity-30">
          <BackgroundPattern pattern="grid" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
              <Badge type="modern" color="gray" className="mb-6 w-fit">
                Trusted by 500+ Customers
              </Badge>

              <h1 className="mb-6 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
                Transform Your Outdoor Space
              </h1>

              <p className="mb-8 text-xl text-gray-600 sm:text-2xl">
                Professional landscaping services that bring your vision to life.
                From garden design to maintenance, we create beautiful, sustainable landscapes.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="xl" className="bg-green-600 hover:bg-green-700">
                  Get Free Quote
                </Button>
                <Button size="xl" color="secondary">
                  View Our Work
                </Button>
              </div>

              <div className="mt-10 flex items-center gap-6">
                <div>
                  <div className="flex items-center gap-1">
                    <RatingStars rating={5} />
                  </div>
                  <p className="mt-2 text-sm text-gray-600">
                    4.9/5 from 200+ reviews
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gray-200 shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Beautiful landscaped garden"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="px-6 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <Badge type="modern" color="gray" className="mb-4">
              Our Services
            </Badge>
            <h2 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
              Everything Your Landscape Needs
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              From initial design to ongoing maintenance, we provide comprehensive landscaping solutions.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:border-green-200 hover:shadow-lg"
              >
                <FeaturedIcon
                  icon={service.icon}
                  theme="modern"
                  color="success"
                  size="lg"
                  className="mb-6"
                />
                <h3 className="mb-3 text-2xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-green-600 px-6 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="mb-6 text-4xl font-bold text-white sm:text-5xl">
                Why Choose GreenScape?
              </h2>
              <p className="mb-8 text-xl text-green-100">
                We're committed to excellence in every project, big or small.
                Here's what sets us apart from the competition.
              </p>

              <div className="grid gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-6 w-6 flex-shrink-0 text-green-200" />
                    <span className="text-lg text-white">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-gray-200 shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Landscaping team at work"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="px-6 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <Badge type="modern" color="gray" className="mb-4">
              Testimonials
            </Badge>
            <h2 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
              What Our Clients Say
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Don't just take our word for it. Here's what our satisfied customers have to say.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
              >
                <div className="mb-4">
                  <RatingStars rating={testimonial.rating} />
                </div>
                <p className="mb-6 text-gray-700">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-gray-50 px-6 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold text-gray-900 sm:text-5xl">
            Ready to Get Started?
          </h2>
          <p className="mb-12 text-xl text-gray-600">
            Contact us today for a free consultation and quote. Let's create the outdoor space of your dreams.
          </p>

          <div className="mb-12 grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <Phone className="mx-auto mb-3 h-8 w-8 text-green-600" />
              <p className="font-semibold text-gray-900">Call Us</p>
              <p className="text-gray-600">(555) 123-4567</p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <Mail01 className="mx-auto mb-3 h-8 w-8 text-green-600" />
              <p className="font-semibold text-gray-900">Email Us</p>
              <p className="text-gray-600">info@greenscape.com</p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <MarkerPin01 className="mx-auto mb-3 h-8 w-8 text-green-600" />
              <p className="font-semibold text-gray-900">Visit Us</p>
              <p className="text-gray-600">123 Garden St</p>
            </div>
          </div>

          <Button size="xl" className="bg-green-600 hover:bg-green-700">
            Schedule Free Consultation
          </Button>
        </div>
      </section>

      <footer className="border-t border-gray-200 bg-white px-6 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xl font-bold text-green-600">GreenScape</p>
            <p className="text-sm text-gray-600">
              © 2025 GreenScape Landscaping. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

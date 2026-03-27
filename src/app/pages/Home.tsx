import React from 'react';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Users, BookOpen, Award, TrendingUp, Calendar, Bell } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Newsletter } from '../components/Newsletter';

const stats = [
  { label: 'Students Enrolled', value: '15,000+', icon: Users },
  { label: 'Programs Offered', value: '200+', icon: BookOpen },
  { label: 'Awards Won', value: '500+', icon: Award },
  { label: 'Placement Rate', value: '95%', icon: TrendingUp },
];

const announcements = [
  { title: 'Admissions Open for 2026', date: 'March 15, 2026', type: 'Admissions' },
  { title: 'Annual Tech Fest - Innovate 2026', date: 'April 10, 2026', type: 'Event' },
  { title: 'Research Grant Winners Announced', date: 'March 20, 2026', type: 'Research' },
  { title: 'New AI & Data Science Lab Inaugurated', date: 'March 12, 2026', type: 'Facilities' },
];

const highlights = [
  {
    title: 'World-Class Faculty',
    description: 'Learn from renowned professors and industry experts',
    image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwbGVjdHVyZSUyMGhhbGx8ZW58MXx8fHwxNzc0NTg3ODk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    title: 'Cutting-Edge Research',
    description: 'State-of-the-art labs and research facilities',
    image: 'https://images.unsplash.com/photo-1707944746058-4da338d0f827?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwbGFib3JhdG9yeSUyMHJlc2VhcmNofGVufDF8fHx8MTc3NDU0NjAwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    title: 'Vibrant Campus Life',
    description: 'Over 100 clubs and organizations to join',
    image: 'https://images.unsplash.com/photo-1758270704025-0e1a1793e1ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwc3R1ZGVudHMlMjBjYW1wdXN8ZW58MXx8fHwxNzc0NTg3ODk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

const heroImages = [
  'https://images.unsplash.com/photo-1764885518782-5d301f23f7a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYnVpbGRpbmclMjBlbnRyYW5jZXxlbnwxfHx8fDE3NzQ1OTI5ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'https://images.unsplash.com/photo-1623156167557-281309073eef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwY2FtcHVzJTIwbGlicmFyeSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzc0NTkyOTg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'https://images.unsplash.com/photo-1705727210721-961cc64a6895?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc2NpZW5jZSUyMGxhYm9yYXRvcnklMjBtb2Rlcm4lMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzc0NTkyOTg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <ImageWithFallback
                src={heroImages[currentSlide]}
                alt="RNS Institute Of Technology Campus"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-transparent dark:from-blue-950/95 dark:via-blue-900/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Badge className="mb-4 bg-blue-500/30 text-white border-blue-400">
                Ranked #1 in Innovation
              </Badge>
            </motion.div>
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Shape Your Future at RNS Institute Of Technology
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-8 text-blue-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Where excellence meets opportunity. Join thousands of students in pursuing academic excellence and innovation.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link to="/admissions">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 group">
                  Apply Now
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition" />
                </Button>
              </Link>
              <Link to="/academics">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Explore Programs
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </div>
        </motion.div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === currentSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Live Announcements Ticker */}
      <div className="bg-blue-600 dark:bg-blue-800 text-white py-3 overflow-hidden">
        <motion.div
          className="flex gap-8 whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
        >
          {[...announcements, ...announcements].map((announcement, idx) => (
            <div key={idx} className="flex items-center gap-2 px-4">
              <Bell className="w-4 h-4 flex-shrink-0" />
              <span className="font-medium">{announcement.title}</span>
              <span className="text-blue-200">•</span>
              <span className="text-blue-200 text-sm">{announcement.date}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="text-center hover:shadow-lg transition">
                  <CardContent className="pt-6">
                    <stat.icon className="w-8 h-8 mx-auto mb-3 text-blue-600" />
                    <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose RNS Institute Of Technology?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Experience world-class education with unmatched opportunities for growth and success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, idx) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="overflow-hidden h-full hover:shadow-xl transition">
                  <div className="h-48 overflow-hidden">
                    <ImageWithFallback
                      src={highlight.image}
                      alt={highlight.title}
                      className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                Latest Announcements
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Stay updated with our latest news and events
              </p>
            </div>
            <Link to="/news">
              <Button variant="outline">View All</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {announcements.map((announcement, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="hover:shadow-lg transition">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <Badge className="mb-2">{announcement.type}</Badge>
                      <h3 className="font-semibold text-lg mb-1 text-gray-900 dark:text-white">
                        {announcement.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {announcement.date}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Quick Access
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Apply Now', path: '/admissions', color: 'bg-blue-600 hover:bg-blue-700' },
              { name: 'Programs', path: '/academics', color: 'bg-blue-700 hover:bg-blue-800' },
              { name: 'Campus Tour', path: '/gallery', color: 'bg-slate-600 hover:bg-slate-700' },
              { name: 'Contact Us', path: '/contact', color: 'bg-slate-700 hover:bg-slate-800' },
            ].map((link, idx) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                <Link to={link.path}>
                  <div className={`${link.color} text-white p-6 rounded-xl text-center shadow-md transition cursor-pointer`}>
                    <div className="text-lg font-semibold">{link.name}</div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Our Alumni Say
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Hear from those who've walked these halls
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Software Engineer at Google',
                text: 'Elite University gave me the foundation I needed to excel in my career. The faculty and resources are truly world-class.',
              },
              {
                name: 'Michael Chen',
                role: 'Research Scientist',
                text: 'The research opportunities here are unparalleled. I was able to publish papers and work on cutting-edge projects.',
              },
              {
                name: 'Emily Davis',
                role: 'Entrepreneur',
                text: 'The entrepreneurship program helped me launch my startup. The mentorship and support were invaluable.',
              },
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 italic">
                      "{testimonial.text}"
                    </p>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.role}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Stay Informed
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest updates and news
            </p>
          </motion.div>

          <Newsletter />
        </div>
      </section>
    </div>
  );
}
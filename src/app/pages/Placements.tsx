import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, TrendingUp, Award, Building2, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const placementData = [
  { year: '2022', students: 850, avgPackage: 12 },
  { year: '2023', students: 920, avgPackage: 14 },
  { year: '2024', students: 980, avgPackage: 16 },
  { year: '2025', students: 1050, avgPackage: 18 },
  { year: '2026', students: 1100, avgPackage: 20 },
];

const sectorData = [
  { name: 'IT & Software', value: 45, color: '#3b82f6' },
  { name: 'Finance', value: 20, color: '#10b981' },
  { name: 'Consulting', value: 15, color: '#f59e0b' },
  { name: 'Manufacturing', value: 12, color: '#8b5cf6' },
  { name: 'Others', value: 8, color: '#6b7280' },
];

const topRecruiters = [
  'Google', 'Microsoft', 'Amazon', 'Apple', 'Goldman Sachs',
  'McKinsey', 'Deloitte', 'IBM', 'Intel', 'JP Morgan',
  'Tesla', 'Meta', 'Netflix', 'Adobe', 'Salesforce',
];

const testimonials = [
  {
    name: 'Alex Thompson',
    company: 'Google',
    role: 'Software Engineer',
    package: '$150,000',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    quote: 'The placement cell provided excellent guidance throughout the process.',
  },
  {
    name: 'Priya Sharma',
    company: 'Goldman Sachs',
    role: 'Financial Analyst',
    package: '$120,000',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    quote: 'Mock interviews and resume workshops were invaluable.',
  },
  {
    name: 'David Chen',
    company: 'McKinsey & Company',
    role: 'Management Consultant',
    package: '$140,000',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    quote: 'The career services team exceeded all my expectations.',
  },
];

export default function Placements() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1762341118920-0b65e8d88aa2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMG9mZmljZXxlbnwxfHx8fDE3NzQ1ODA5NjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Placements"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-teal-900/80 dark:from-emerald-950/95 dark:to-teal-950/90" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Briefcase className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Placements & Careers</h1>
            <p className="text-xl text-emerald-100">
              Launching successful careers worldwide
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Placement Highlights 2026</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Outstanding placement records year after year
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { label: 'Placement Rate', value: '95%', icon: TrendingUp, color: 'emerald' },
              { label: 'Average Package', value: '$85K', icon: Award, color: 'blue' },
              { label: 'Highest Package', value: '$200K', icon: TrendingUp, color: 'purple' },
              { label: 'Companies Visited', value: '250+', icon: Building2, color: 'orange' },
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="text-center hover:shadow-xl transition">
                  <CardContent className="pt-6 pb-6">
                    <div className={`w-12 h-12 bg-${stat.color}-100 dark:bg-${stat.color}-900 rounded-full flex items-center justify-center mx-auto mb-3`}>
                      <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
                    </div>
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

      {/* Placement Trends */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Placement Trends</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Growth in placements and packages over the years
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Students Placed (5-Year Trend)</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={placementData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="students" fill="#10b981" name="Students Placed" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Placement by Sector</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={sectorData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {sectorData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Top Recruiters */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Building2 className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Top Recruiters</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Leading companies that trust our talent
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6">
            {topRecruiters.map((company, idx) => (
              <motion.div
                key={company}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="w-40 hover:shadow-lg transition cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <span className="text-white font-bold text-xl">
                        {company.charAt(0)}
                      </span>
                    </div>
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">
                      {company}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Hear from our students about their placement journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <ImageWithFallback
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-emerald-600 dark:text-emerald-400">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <div className="mb-4">
                      <Badge className="bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300">
                        {testimonial.company}
                      </Badge>
                      <Badge variant="outline" className="ml-2">
                        {testimonial.package}
                      </Badge>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 italic">
                      "{testimonial.quote}"
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Career Services</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Comprehensive support for your career journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Resume Building', description: 'Professional resume reviews and workshops' },
              { title: 'Mock Interviews', description: 'Practice with industry experts' },
              { title: 'Career Counseling', description: 'One-on-one guidance from advisors' },
              { title: 'Networking Events', description: 'Connect with alumni and recruiters' },
            ].map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h3 className="font-bold mb-2 text-gray-900 dark:text-white">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, History, Users, Award, Globe } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const placeholderProfile = 'https://via.placeholder.com/400x400?text=Profile';

const leadership = [
  { name: 'Dr. Ananya Rao', role: 'Chancellor', image: placeholderProfile },
  { name: 'Dr. Vikram Singh', role: 'Vice Chancellor', image: placeholderProfile },
  { name: 'Prof. Kavita Menon', role: 'Dean of Academics', image: placeholderProfile },
  { name: 'Dr. Arjun Iyer', role: 'Dean of Research', image: placeholderProfile },
];

const milestones = [
  { year: '1950', event: 'University Founded' },
  { year: '1975', event: 'First Research Center Established' },
  { year: '1990', event: 'International Accreditation Received' },
  { year: '2005', event: 'State-of-the-art Campus Opened' },
  { year: '2015', event: 'Ranked Among Top 100 Universities' },
  { year: '2025', event: 'AI & Innovation Hub Launched' },
];

const values = [
  { icon: Award, title: 'Excellence', description: 'Pursuing the highest standards in education and research' },
  { icon: Users, title: 'Diversity', description: 'Fostering an inclusive and multicultural community' },
  { icon: Globe, title: 'Global Impact', description: 'Making a difference in the world through knowledge' },
];

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1600&q=80"
            alt="RNS Institute of Technology campus walkway"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/80 dark:bg-blue-950/90" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            About RNS University
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-blue-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Shaping minds, transforming lives since 1950
          </motion.p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6">
                    <Eye className="w-8 h-8 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Our Vision</h2>
                  <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                    To be a globally recognized institution that cultivates innovative thinkers, 
                    groundbreaking researchers, and ethical leaders who address the world's most 
                    pressing challenges through interdisciplinary collaboration and cutting-edge knowledge.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-green-600" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Our Mission</h2>
                  <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                    To provide exceptional education that combines theoretical knowledge with practical 
                    experience, fostering critical thinking, creativity, and social responsibility. We are 
                    committed to advancing research, promoting diversity, and preparing students for meaningful 
                    careers and lifelong learning.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="text-center h-full">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                      <value.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section id="history" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <History className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Over seven decades of academic excellence and innovation
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-800 hidden md:block" />

            <div className="space-y-8">
              {milestones.map((milestone, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`flex items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <Card className="hover:shadow-lg transition">
                      <CardContent className="p-6">
                        <div className="text-3xl font-bold text-blue-600 mb-2">
                          {milestone.year}
                        </div>
                        <div className="text-lg text-gray-900 dark:text-white font-semibold">
                          {milestone.event}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="hidden md:block w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10" />
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Leadership</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Experienced leaders committed to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, idx) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="overflow-hidden text-center h-full">
                  <div className="h-64 overflow-hidden">
                    <ImageWithFallback
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {leader.name}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {leader.role}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '75+', label: 'Years of Excellence' },
              { number: '500+', label: 'Faculty Members' },
              { number: '15,000+', label: 'Students' },
              { number: '100+', label: 'Countries Represented' },
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

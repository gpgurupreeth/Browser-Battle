import React from 'react';
import { motion } from 'motion/react';
import { Microscope, Award, TrendingUp, Lightbulb, Users, DollarSign } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const researchAreas = [
  { name: 'Artificial Intelligence & Machine Learning', icon: Lightbulb, projects: 45, funding: '$5M' },
  { name: 'Biotechnology & Healthcare', icon: Microscope, projects: 38, funding: '$4.2M' },
  { name: 'Sustainable Energy', icon: TrendingUp, projects: 30, funding: '$3.8M' },
  { name: 'Quantum Computing', icon: Lightbulb, projects: 25, funding: '$4.5M' },
  { name: 'Nanotechnology', icon: Microscope, projects: 20, funding: '$2.5M' },
  { name: 'Climate Science', icon: TrendingUp, projects: 28, funding: '$3.2M' },
];

const publications = [
  { title: 'Advances in Neural Network Architecture for Medical Imaging', journal: 'Nature AI', year: 2026 },
  { title: 'Sustainable Urban Planning with Smart Grid Technology', journal: 'Science Direct', year: 2026 },
  { title: 'Quantum Algorithm for Drug Discovery', journal: 'Physical Review', year: 2026 },
  { title: 'CRISPR Applications in Cancer Treatment', journal: 'Cell Journal', year: 2025 },
];

const achievements = [
  { title: 'Top 10 Research University', description: 'National ranking in research output', year: 2025 },
  { title: '$50M Research Funding', description: 'Secured in the past year', year: 2025 },
  { title: '500+ Publications', description: 'In peer-reviewed journals', year: 2025 },
  { title: '15 Patents Filed', description: 'Innovative discoveries commercialized', year: 2025 },
];

export default function Research() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1707944745911-64b7d6d1c31d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNlYXJjaCUyMHNjaWVudGlzdCUyMG1pY3Jvc2NvcGV8ZW58MXx8fHwxNzc0NTg4MTU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Research"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-purple-900/80 dark:from-indigo-950/95 dark:to-purple-950/90" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Microscope className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Research & Innovation</h1>
            <p className="text-xl text-indigo-100">
              Pioneering discoveries that shape the future
            </p>
          </motion.div>
        </div>
      </section>

      {/* Research Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '$50M+', label: 'Annual Research Funding', icon: DollarSign },
              { value: '200+', label: 'Active Research Projects', icon: Lightbulb },
              { value: '500+', label: 'Research Publications', icon: Award },
              { value: '100+', label: 'Research Scholars', icon: Users },
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card>
                  <CardContent className="pt-6 pb-6">
                    <stat.icon className="w-8 h-8 mx-auto mb-3 text-indigo-600" />
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

      {/* Research Areas */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Research Areas</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Cutting-edge research across diverse fields
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchAreas.map((area, idx) => (
              <motion.div
                key={area.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="h-full hover:shadow-xl transition">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-4">
                      <area.icon className="w-6 h-6 text-indigo-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                      {area.name}
                    </h3>
                    <div className="flex gap-3 flex-wrap">
                      <Badge variant="secondary">{area.projects} Projects</Badge>
                      <Badge variant="outline">{area.funding} Funding</Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Publications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Recent Publications</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our research making an impact worldwide
            </p>
          </motion.div>

          <div className="space-y-4">
            {publications.map((pub, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="hover:shadow-lg transition">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                          {pub.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          Published in <span className="font-medium">{pub.journal}</span>
                        </p>
                      </div>
                      <Badge>{pub.year}</Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Award className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Research Achievements</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Recognition and milestones in our research journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="hover:shadow-lg transition">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                          {achievement.title}
                        </h3>
                        <Badge variant="outline">{achievement.year}</Badge>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400">
                        {achievement.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <Card className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-800 dark:to-purple-800 text-white border-0">
            <CardContent className="p-12 text-center">
              <Lightbulb className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-4">Join Our Research Community</h3>
              <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
                Be part of groundbreaking research that makes a difference. Explore opportunities 
                for collaboration, funding, and innovation.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button className="px-6 py-3 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-100 transition">
                  Research Opportunities
                </button>
                <button className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition">
                  Contact Research Office
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

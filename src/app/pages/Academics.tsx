import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { BookOpen, Code, Beaker, Building, Palette, Calculator, Search, Filter } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const departments = [
  { name: 'Computer Science & Engineering', icon: Code, description: 'Cutting-edge technology and software development', courses: 15 },
  { name: 'Business Administration', icon: Building, description: 'Leadership and management excellence', courses: 12 },
  { name: 'Natural Sciences', icon: Beaker, description: 'Physics, Chemistry, and Biology', courses: 18 },
  { name: 'Mathematics & Statistics', icon: Calculator, description: 'Pure and applied mathematics', courses: 10 },
  { name: 'Arts & Humanities', icon: Palette, description: 'Literature, history, and philosophy', courses: 14 },
  { name: 'Engineering', icon: Building, description: 'Mechanical, Electrical, and Civil', courses: 20 },
];

const programs = [
  {
    level: 'Undergraduate',
    degrees: [
      { name: 'B.Tech in Computer Science', duration: '4 years', department: 'Computer Science', type: 'Full-time' },
      { name: 'B.Tech in Mechanical Engineering', duration: '4 years', department: 'Engineering', type: 'Full-time' },
      { name: 'B.Sc in Physics', duration: '3 years', department: 'Natural Sciences', type: 'Full-time' },
      { name: 'BBA in Business Management', duration: '3 years', department: 'Business', type: 'Full-time' },
      { name: 'B.A in English Literature', duration: '3 years', department: 'Arts & Humanities', type: 'Full-time' },
      { name: 'B.Sc in Mathematics', duration: '3 years', department: 'Mathematics', type: 'Full-time' },
    ],
  },
  {
    level: 'Postgraduate',
    degrees: [
      { name: 'M.Tech in Artificial Intelligence', duration: '2 years', department: 'Computer Science', type: 'Full-time' },
      { name: 'MBA in Marketing', duration: '2 years', department: 'Business', type: 'Full-time / Part-time' },
      { name: 'M.Sc in Data Science', duration: '2 years', department: 'Computer Science', type: 'Full-time' },
      { name: 'M.Sc in Biotechnology', duration: '2 years', department: 'Natural Sciences', type: 'Full-time' },
      { name: 'M.A in Psychology', duration: '2 years', department: 'Arts & Humanities', type: 'Full-time' },
    ],
  },
  {
    level: 'Doctoral',
    degrees: [
      { name: 'Ph.D in Computer Science', duration: '3-5 years', department: 'Computer Science', type: 'Research' },
      { name: 'Ph.D in Physics', duration: '3-5 years', department: 'Natural Sciences', type: 'Research' },
      { name: 'Ph.D in Economics', duration: '3-5 years', department: 'Business', type: 'Research' },
      { name: 'Ph.D in Engineering', duration: '3-5 years', department: 'Engineering', type: 'Research' },
    ],
  },
];

const faculty = [
  { name: 'Dr. Arjun Desai', specialization: 'Machine Learning', department: 'Computer Science', publications: 50 },
  { name: 'Prof. Meera Nair', specialization: 'Quantum Physics', department: 'Natural Sciences', publications: 75 },
  { name: 'Dr. Arvind Menon', specialization: 'Marketing Strategy', department: 'Business', publications: 40 },
  { name: 'Prof. Kavya Reddy', specialization: 'Robotics', department: 'Engineering', publications: 60 },
];

export default function Academics() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null);

  const filteredPrograms = programs.map(level => ({
    ...level,
    degrees: level.degrees.filter(degree =>
      degree.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!selectedDepartment || degree.department === selectedDepartment)
    ),
  }));

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-80 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=1600&q=80"
            alt="Academics"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/80 dark:from-blue-950/95 dark:to-purple-950/90" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <BookOpen className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Academics</h1>
            <p className="text-xl text-blue-100">
              World-class education across diverse disciplines
            </p>
          </motion.div>
        </div>
      </section>

      {/* Departments */}
      <section id="departments" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Departments</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Explore our comprehensive range of academic departments
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, idx) => (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="h-full hover:shadow-xl transition cursor-pointer">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                      <dept.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                      {dept.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      {dept.description}
                    </p>
                    <Badge variant="secondary">{dept.courses} Courses</Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Academic Programs</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Find the perfect program to match your aspirations
            </p>
          </motion.div>

          {/* Search and Filter */}
          <div className="mb-8 flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search programs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              <Button
                variant={selectedDepartment === null ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedDepartment(null)}
              >
                All
              </Button>
              {['Computer Science', 'Business', 'Engineering', 'Natural Sciences'].map(dept => (
                <Button
                  key={dept}
                  variant={selectedDepartment === dept ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedDepartment(dept)}
                  className="whitespace-nowrap"
                >
                  {dept}
                </Button>
              ))}
            </div>
          </div>

          {/* Programs Tabs */}
          <Tabs defaultValue="Undergraduate" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="Undergraduate">Undergraduate</TabsTrigger>
              <TabsTrigger value="Postgraduate">Postgraduate</TabsTrigger>
              <TabsTrigger value="Doctoral">Doctoral</TabsTrigger>
            </TabsList>

            {filteredPrograms.map(level => (
              <TabsContent key={level.level} value={level.level}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {level.degrees.length > 0 ? (
                    level.degrees.map((degree, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        <Card className="hover:shadow-lg transition">
                          <CardContent className="p-6">
                            <div className="flex justify-between items-start mb-3">
                              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                                {degree.name}
                              </h3>
                              <Badge>{degree.type}</Badge>
                            </div>
                            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                              <div className="flex items-center gap-2">
                                <span className="font-medium">Duration:</span>
                                <span>{degree.duration}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="font-medium">Department:</span>
                                <span>{degree.department}</span>
                              </div>
                            </div>
                            <Button variant="link" className="mt-4 p-0">
                              Learn More →
                            </Button>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))
                  ) : (
                    <div className="col-span-2 text-center py-12 text-gray-500 dark:text-gray-400">
                      No programs found matching your criteria
                    </div>
                  )}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Faculty */}
      <section id="faculty" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Distinguished Faculty</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Learn from world-renowned experts and researchers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {faculty.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="text-center h-full">
                  <CardContent className="p-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="font-bold text-lg mb-1 text-gray-900 dark:text-white">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 text-sm mb-2">
                      {member.specialization}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                      {member.department}
                    </p>
                    <Badge variant="outline">{member.publications} Publications</Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Excellence */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Begin Your Academic Journey?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of students pursuing excellence in their chosen fields
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50" asChild>
                <Link to="/admissions#apply-now">Apply Now</Link>
              </Button>
              <Button
                size="lg"
                className="bg-blue-900 text-white hover:bg-blue-800 border border-white/30"
                asChild
              >
                <a href="/brochure.pdf" download>
                  Download Brochure (PDF)
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Button } from '../components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { toast } from 'sonner';

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '+91 80 2861 3695', link: 'tel:+918028613695' },
  { icon: Mail, label: 'Email', value: 'info@rnsit.ac.in', link: 'mailto:info@rnsit.ac.in' },
  {
    icon: MapPin,
    label: 'Address',
    value: 'RNS Institute of Technology, Dr. Vishnuvardhan Road, RR Nagar, Bengaluru, Karnataka 560098',
    link: 'https://www.google.com/maps?q=12.9021902,77.518582',
  },
  { icon: Clock, label: 'Office Hours', value: 'Mon-Fri: 9:00 AM - 5:00 PM', link: null },
];

const departments = [
  { name: 'Admissions Office', email: 'admissions@university.edu', phone: '+91 1234567890' },
  { name: 'Academic Affairs', email: 'academics@university.edu', phone: '+91 4353543456' },
  { name: 'Student Services', email: 'studentservices@university.edu', phone: '+91 2345678902' },
  { name: 'Financial Aid', email: 'finaid@university.edu', phone: '+91 6666222290' },
  { name: 'International Office', email: 'international@university.edu', phone: '+91 9876543201' },
  { name: 'Career Services', email: 'careers@university.edu', phone: '+91 23456788900' },
];

const faqs = [
  {
    category: 'Admissions',
    questions: [
      {
        question: 'What are the admission requirements?',
        answer: 'Admission requirements vary by program. Generally, you need a high school diploma or equivalent for undergraduate programs, a bachelor\'s degree for graduate programs, standardized test scores, recommendation letters, and a statement of purpose.',
      },
      {
        question: 'When is the application deadline?',
        answer: 'For Fall 2026 admission, the early application deadline is March 15, 2026, and the regular deadline is May 31, 2026. We recommend applying early to maximize your chances of acceptance and financial aid.',
      },
      {
        question: 'Can international students apply?',
        answer: 'Yes! We welcome international students from around the world. International applicants need to submit TOEFL/IELTS scores and may require a student visa. Our International Office provides comprehensive support.',
      },
    ],
  },
  {
    category: 'Academics',
    questions: [
      {
        question: 'How many programs do you offer?',
        answer: 'We offer over 200 programs across undergraduate, graduate, and doctoral levels, spanning fields like Engineering, Business, Sciences, Arts, and more.',
      },
      {
        question: 'What is the student-to-faculty ratio?',
        answer: 'Our student-to-faculty ratio is 15:1, ensuring personalized attention and mentorship for every student.',
      },
      {
        question: 'Are there online programs available?',
        answer: 'Yes, we offer select online and hybrid programs for working professionals. Contact Academic Affairs for details on available online programs.',
      },
    ],
  },
  {
    category: 'Campus Life',
    questions: [
      {
        question: 'Is on-campus housing available?',
        answer: 'Yes, we provide on-campus housing for undergraduate and graduate students. Housing options include dormitories, apartments, and family housing.',
      },
      {
        question: 'What clubs and activities are available?',
        answer: 'We have over 100 student clubs covering technical, cultural, sports, and social interests. There\'s something for everyone!',
      },
      {
        question: 'Do you have sports facilities?',
        answer: 'Absolutely! Our campus features a sports complex with an Olympic-size pool, basketball and tennis courts, a fitness center, and a stadium.',
      },
    ],
  },
  {
    category: 'Financial',
    questions: [
      {
        question: 'What is the tuition cost?',
        answer: 'Tuition varies by program. Undergraduate tuition is approximately $35,000 per year, while graduate tuition ranges from $25,000 to $45,000. Visit our Financial Aid office for detailed information.',
      },
      {
        question: 'Are scholarships available?',
        answer: 'Yes! We offer merit-based, need-based, and diversity scholarships. Financial aid packages are available for eligible students. Apply early to be considered for all scholarships.',
      },
      {
        question: 'Can I work on campus?',
        answer: 'Yes, we offer work-study programs and part-time job opportunities for students. International students can work up to 20 hours per week on campus.',
      },
    ],
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formEndpoint = import.meta.env.VITE_FORM_ENDPOINT || 'https://formspree.io/f/mojpvrpv';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ ...formData, _subject: `New inquiry: ${formData.subject}` }),
      });

      if (response.ok) {
        toast.success('Message sent successfully! We will get back to you soon.');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        toast.error('Could not send your message. Please try again.');
      }
    } catch (error) {
      toast.error('Could not send your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-80 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-cyan-900/80 dark:from-teal-950/95 dark:to-cyan-950/90" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <MessageSquare className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-teal-100">
              We're here to help answer your questions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 -mt-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, idx) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="hover:shadow-xl transition h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center mx-auto mb-4">
                      <info.icon className="w-6 h-6 text-teal-600" />
                    </div>
                    <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">
                      {info.label}
                    </h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm text-gray-600 dark:text-gray-400">{info.value}</p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 808882345"
                      />
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="How can we help?"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us more about your inquiry..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                      <Send className="w-4 h-4 mr-2" />
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Map and Department Contacts */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Interactive Map */}
              <Card className="overflow-hidden">
                <div className="h-64 bg-gray-200 dark:bg-gray-700 relative">
                  <iframe
                    src="https://www.google.com/maps?q=12.9021902,77.518582&z=17&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="University Location"
                  />
                </div>
              </Card>

              {/* Department Contacts */}
              <Card>
                <CardHeader>
                  <CardTitle>Department Contacts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {departments.map((dept, idx) => (
                      <div
                        key={idx}
                        className="pb-4 border-b border-gray-200 dark:border-gray-700 last:border-0 last:pb-0"
                      >
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                          {dept.name}
                        </h4>
                        <div className="space-y-1 text-sm">
                          <a
                            href={`mailto:${dept.email}`}
                            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition"
                          >
                            <Mail className="w-3 h-3" />
                            {dept.email}
                          </a>
                          <a
                            href={`tel:${dept.phone}`}
                            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition"
                          >
                            <Phone className="w-3 h-3" />
                            {dept.phone}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Find answers to common questions about RNS Institute Of Technology
            </p>
          </motion.div>

          {faqs.map((section, idx) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="mb-8"
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                {section.category}
              </h3>
              <Card>
                <CardContent className="p-6">
                  <Accordion type="single" collapsible>
                    {section.questions.map((item, qIdx) => (
                      <AccordionItem key={qIdx} value={`${section.category}-${qIdx}`}>
                        <AccordionTrigger className="text-left">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 dark:text-gray-400">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, Rocket, Users } from 'lucide-react';
import { AnimatedCard } from '@/components/ui/animated-card';
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function AboutSection() {
  const highlights = [
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Associate Degree in Computer Science from Riphah International University',
    },
    {
      icon: Code2,
      title: 'Specialization',
      description: 'Full-stack web development with MERN stack and React Native mobile development',
    },
    {
      icon: Rocket,
      title: 'Experience',
      description: 'Built production-ready applications including e-learning platforms and e-commerce solutions',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Experienced in working with teams and delivering projects at ArSwift Pvt Ltd',
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            About{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I hold an Associate Degree in Computer Science from Riphah International University 
            and have experience in full-stack web development, especially in the MERN stack and 
            mobile apps using React Native. I'm passionate about creating modern, scalable 
            applications that solve real-world problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {highlights.map((item, index) => (
            <AnimatedCard key={index} delay={index * 0.2}>
              <CardHeader>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center mb-4"
                >
                  <item.icon className="h-8 w-8 text-primary" />
                </motion.div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </AnimatedCard>
          ))}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-wrap gap-3 justify-center">
            {['Problem Solving', 'Team Collaboration', 'UI/UX Design', 'API Development', 'Database Design', 'Mobile Development'].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
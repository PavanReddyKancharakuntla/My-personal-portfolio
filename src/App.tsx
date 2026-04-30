/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Download, 
  ArrowRight, 
  Code2, 
  Cpu, 
  Layers, 
  ExternalLink,
  ChevronRight,
  Github
} from 'lucide-react';
import { useState, useEffect } from 'react';

const COLORS = {
  primary: '#FF4D4D',
  background: '#050505',
};

const profileImage = new URL('./image/img.jpg', import.meta.url).href;
const ayurvedaImage = new URL('./image/ayurveda.png', import.meta.url).href;

const navLinks = [
  { name: 'Work', href: '#work' },
  { name: 'Expertise', href: '#expertise' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const projects = [
  {
    id: 1,
    title: 'Online Ayurvedic Medical Store',
    category: 'Full-stack Application',
    description: 'A comprehensive digital marketplace for traditional Ayurvedic medicine featuring robust search and order management.',
    image: ayurvedaImage,
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
  },
  {
    id: 2,
    title: 'Property Price Prediction',
    category: 'Machine Learning',
    description: 'Predictive analytics model leveraging XGBoost, AdaBoost, and CatBoost to forecast real estate trends with high precision.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop',
    tags: ['Python', 'XGBoost', 'Scikit-Learn', 'Pandas'],
  },
  {
    id: 3,
    title: 'Angular Homes App',
    category: 'Real Estate SPA',
    description: 'A lightning-fast single-page application for real estate browsing, featuring dynamic filtering and nested routing.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
    tags: ['Angular', 'TypeScript', 'RxJS', 'CSS Modules'],
  }
];

const skills = [
  { name: 'Java', icon: '☕' },
  { name: 'Python', icon: '🐍' },
  { name: 'HTML5', icon: '🌐' },
  { name: 'CSS3', icon: '🎨' },
  { name: 'JavaScript', icon: 'JS' },
  { name: 'Angular', icon: 'A' },
  { name: 'DBMS', icon: '🗄️' },
  { name: 'C++', icon: 'C++' },
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const downloadResume = () => {
    // Create a dummy blob to simulate download
    const blob = new Blob(["Pavan Kumar Reddy Kancharakuntla - Resume Content"], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Pavan_Reddy_Resume.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="relative min-h-screen">
      {/* Background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] left-[-5%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glass-navbar py-4' : 'py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-extrabold tracking-widest text-white"
          >
            PAVAN REDDY
          </motion.div>
          
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-xs uppercase tracking-[0.2em] font-medium text-neutral-400 hover:text-primary transition-colors duration-300"
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          <motion.a
            href="mailto:pavanreddykancharakuntla@gmail.com"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-primary text-white px-6 py-3 text-xs uppercase tracking-widest font-bold hover:bg-red-600 transition-all active:scale-95 hidden sm:block"
          >
            Let's Talk
          </motion.a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-6 md:px-12 pt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-full border border-primary p-0.5 relative group">
                <img 
                  src={profileImage} 
                  alt="Pavan Reddy" 
                  className="w-full h-full rounded-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 rounded-full border border-primary animate-ping opacity-20" />
              </div>
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-primary">Open to opportunities</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-[1.05] tracking-tighter">
              Hi, I'm <br />
              <span className="text-primary glow-text">Pavan Reddy</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-neutral-500 mb-10 max-w-lg leading-relaxed font-medium">
              Full Stack Developer | Java & Python Enthusiast
            </p>

            <div className="flex flex-wrap gap-6">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-primary text-white px-10 py-5 text-sm uppercase tracking-widest font-black shadow-[0_10px_30px_-5px_rgba(255,77,77,0.3)]"
              >
                Hire Me
              </motion.a>
              <motion.button
                onClick={downloadResume}
                whileHover={{ scale: 1.02, borderColor: '#fff' }}
                whileTap={{ scale: 0.98 }}
                className="border border-neutral-800 text-white px-10 py-5 text-sm uppercase tracking-widest font-black flex items-center gap-3"
              >
                <Download size={18} className="text-primary" />
                Resume
              </motion.button>
            </div>
          </motion.div>

          <div className="relative hidden lg:flex justify-end items-center">
            {/* PR Watermark Style background */}
            <div className="absolute right-0 text-[350px] font-black text-neutral-900/40 select-none -z-10 tracking-tighter transform translate-x-12">
              PR
            </div>
            
            <div className="relative">
              <motion.div 
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="w-[450px] h-[450px] rounded-full border border-neutral-800 flex items-center justify-center"
              >
                <motion.div 
                   animate={{ 
                    scale: [1.1, 1, 1.1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="w-[300px] h-[300px] rounded-full border border-neutral-900 flex items-center justify-center"
                >
                  <div className="w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-neutral-900/50">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-12 lg:col-span-5">
            <h2 className="text-primary text-xs uppercase tracking-[0.4em] font-bold mb-8 flex items-center gap-3">
              <div className="w-10 h-[1px] bg-primary" />
              About Me
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight tracking-tight">
              Crafting digital excellence <br />
              <span className="text-neutral-600">through elegant code.</span>
            </h3>
          </div>
          <div className="md:col-span-12 lg:col-span-7 flex flex-col justify-end">
            <p className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-2xl mb-8">
              Motivated Computer Science graduate skilled in Java, Python, and web technologies. 
              I am passionate about building scalable applications and solving real-world problems 
              through innovative technical solutions.
            </p>
            <p className="text-neutral-500 leading-relaxed max-w-xl">
              I bridge the gap between complex backend logic and seamless frontend experiences, 
              ensuring that every line of code serves the ultimate user experience.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="expertise" className="py-32 px-6 md:px-12 bg-neutral-950/30 border-y border-neutral-900/50">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h2 className="text-primary text-xs uppercase tracking-[0.4em] font-bold mb-6">Technical Arsenal</h2>
          <h3 className="text-4xl md:text-6xl font-black text-white">Digital Expertise.</h3>
        </div>

        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5, borderColor: COLORS.primary }}
              className="px-8 py-5 border border-neutral-900 bg-neutral-900/20 backdrop-blur-sm cursor-default transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <span className="text-xl">{skill.icon}</span>
                <span className="text-xs uppercase tracking-widest font-black text-white">{skill.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h2 className="text-primary text-xs uppercase tracking-[0.4em] font-bold mb-6">Portfolio</h2>
            <h3 className="text-4xl md:text-6xl font-black text-white">Selected Works.</h3>
          </div>
          <p className="text-neutral-500 max-w-xs md:text-right text-sm uppercase tracking-widest font-bold">
            A selection of projects that showcase my technical journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group"
            >
              <div className="relative h-[320px] overflow-hidden border border-neutral-900 mb-8 transition-all duration-500 group-hover:border-primary/50 bg-neutral-950">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-contain grayscale transition-all duration-1000 group-hover:grayscale-0"
                />
                <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase font-bold text-white bg-primary px-2 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-primary">
                  {project.category}
                </span>
                <h4 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-neutral-500 text-sm leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Global Contact Callout */}
      <section id="contact" className="py-32 px-6 md:px-12 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-primary text-xs uppercase tracking-[0.4em] font-bold mb-8">Connect</h2>
            <h3 className="text-5xl md:text-7xl font-black text-white mb-10 leading-tight">
              Let's build <br />
              something <span className="text-primary glow-text">exceptional.</span>
            </h3>
            <p className="text-neutral-500 text-lg max-w-md leading-relaxed">
              I'm always interested in hearing about new projects and opportunities. 
              Let's push the boundaries of technology together.
            </p>
          </div>

          <div className="space-y-12">
            {[
              { icon: <Mail className="text-primary" />, label: 'Email Me', value: 'pavanreddykancharakuntla@gmail.com', href: 'mailto:pavanreddykancharakuntla@gmail.com' },
              { icon: <Phone className="text-primary" />, label: 'Call Me', value: '+91 8019903465', href: 'tel:8019903465' },
              { icon: <Linkedin className="text-primary" />, label: 'Network', value: 'View LinkedIn Profile', href: 'http://www.linkedin.com/in/pavan-kumar-reddy-kancharakuntla-6459172b8' }
            ].map((contact, i) => (
              <motion.a
                key={i}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                whileHover={{ x: 15 }}
                className="flex items-center gap-8 group bg-neutral-900/20 p-6 border-l border-neutral-900 hover:border-primary transition-all"
              >
                <div className="w-12 h-12 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  {contact.icon}
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-neutral-600 font-black mb-1">
                    {contact.label}
                  </p>
                  <p className="text-lg md:text-xl text-white font-bold group-hover:text-primary transition-colors">
                    {contact.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 border-t border-neutral-900 text-center md:text-left">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-lg font-black text-white tracking-widest">PAVAN REDDY</div>
          
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] font-bold text-neutral-500">
            <a href="#" className="hover:text-white">Email</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-white">GitHub</a>
          </div>

          <div className="text-[10px] uppercase font-bold text-neutral-700 tracking-widest">
            © 2024 All rights reserved. Created with 
            <span className="text-primary mx-1">❤</span> 
            by Pavan Reddy
          </div>
        </div>
      </footer>
    </div>
  );
}

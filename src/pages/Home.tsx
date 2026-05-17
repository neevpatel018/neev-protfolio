import { motion, useScroll } from 'motion/react';
import { Mail, ArrowRight, Video, Palette, Code, Linkedin, Github, Instagram, Calendar, Sparkles, Zap, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ThreeHero } from '../components/ThreeHero';
import profileImg from '../profile.png';

export function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="relative">
      <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 px-6 overflow-hidden">
        <ThreeHero />
        <div className="relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="mb-12 relative inline-block"
          >
            <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-white/5 relative z-10 floating-avatar shadow-[0_0_50px_rgba(163,255,0,0.15)]">
              <img 
                src={profileImg} 
                alt="Neev Patel" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -inset-4 bg-brand-neon/10 blur-3xl rounded-full z-0 animate-pulse" />
          </motion.div>

          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-display text-6xl md:text-9xl mb-6 flex flex-col items-center justify-center gap-2"
          >
            <span className="opacity-40 text-4xl md:text-5xl font-light">I am</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon via-brand-neon to-brand-glow">Neev Patel</span>
          </motion.h1>

          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-2xl font-light text-white/40 mb-12 max-w-2xl mx-auto uppercase tracking-[0.2em]"
          >
            Visual Architect <span className="mx-4 text-brand-neon">/</span> CSE Explorer
          </motion.p>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-wrap gap-4 justify-center items-center"
          >
            <Link to="/gallery" className="px-10 py-5 bg-brand-neon text-black font-black text-[10px] tracking-[0.3em] uppercase rounded-full hover:scale-105 transition-all duration-500 shadow-[0_10px_30px_rgba(163,255,0,0.3)] flex items-center gap-3 active:scale-95 group">
              View Work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="https://calendly.com/nexagen2105" target="_blank" rel="noopener noreferrer" className="px-10 py-5 glass border border-white/10 text-white font-black text-[10px] tracking-[0.3em] uppercase rounded-full hover:bg-white/10 transition-all duration-500 flex items-center gap-3 active:scale-95">
              <Calendar className="w-4 h-4 text-brand-neon" /> Book a Meeting
            </a>
          </motion.div>
        </div>
        
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30"
        >
          <div className="w-px h-12 bg-white" />
        </motion.div>
      </section>

      {/* About Section - Editorial Style */}
      <section id="about" className="py-40 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-20 items-start">
            <div className="md:w-1/3">
              <h2 className="text-display text-5xl md:text-7xl mb-8 leading-none">THE <br /> VISION</h2>
            </div>
            <div className="md:w-2/3">
              <p className="text-2xl md:text-4xl text-white/80 leading-[1.3] font-light mb-12">
                I don’t just build projects — I craft digital experiences that <span className="text-brand-neon">merge logic, creativity, and emotion.</span>
              </p>
              <p className="text-lg text-white/40 leading-relaxed max-w-2xl">
                As a CSE student with a designer’s eye, I transform ideas into immersive visuals, intelligent systems, and cinematic interactions that people remember.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
                {[
                  { val: '02+', label: 'Experience' },
                  { val: '50+', label: 'Creations' },
                  { val: '100%', label: 'Precision' },
                  { val: '24/7', label: 'Exploration' }
                ].map((stat, i) => (
                  <div key={i} className="group">
                    <span className="text-display text-4xl block group-hover:text-brand-neon transition-colors duration-500">{stat.val}</span>
                    <span className="text-[10px] text-white/30 uppercase tracking-widest mt-2 block">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Identities Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto border-t border-white/5 pt-20">
          <div className="grid md:grid-cols-3 gap-20">
            <div>
              <span className="text-brand-neon text-[10px] font-black tracking-[0.5em] uppercase mb-4 block">VERY UNIQUE.</span>
              <h2 className="text-display text-4xl md:text-6xl mb-8 uppercase">DIGITAL <br /> IDENTITIES</h2>
            </div>
            <div className="md:col-span-2 space-y-20">
              {[
                { title: 'The Builder', desc: 'Creating systems and applications.' },
                { title: 'The Designer', desc: 'Crafting modern visual experiences.' },
                { title: 'The Storyteller', desc: 'Editing cinematic digital narratives.' },
                { title: 'The Innovator', desc: 'Exploring AI and futuristic tech.' }
              ].map((item, i) => (
                <div key={i} className="group flex flex-col relative border-l-2 border-brand-neon/20 hover:border-brand-neon pl-12 transition-all duration-700">
                  <span className="text-[10px] text-brand-neon font-black tracking-[0.4em] uppercase mb-4 opacity-50 group-hover:opacity-100 transition-opacity">Layer 0{i + 1}</span>
                  <h3 className="text-display text-3xl md:text-5xl mb-4 group-hover:translate-x-2 transition-transform duration-500">{item.title}</h3>
                  <p className="text-xl md:text-2xl text-white/40 font-light group-hover:text-white/80 transition-colors duration-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-40 px-6 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-24">
            <span className="text-brand-neon text-[10px] font-black tracking-[0.5em] uppercase mb-4 block">Archive 02</span>
            <h2 className="text-display text-5xl md:text-8xl">CAPABILITIES</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-1px bg-white/10 border border-white/10 rounded-[3rem] overflow-hidden">
            {[
              { 
                title: 'Visual Identity', 
                desc: 'Crafting premium brand identities, logos, and style systems that stand the test of time.',
                icon: <Palette className="w-10 h-10 text-brand-neon" />,
                tags: ['Branding', 'Typography', 'Logo']
              },
              { 
                title: 'Video Narrative', 
                desc: 'High-end reels and promotional video editing with a focus on cinematic storytelling.',
                icon: <Video className="w-10 h-10 text-brand-neon" />,
                tags: ['Editing', 'Color', 'Motion']
              },
              { 
                title: 'Digital Systems', 
                desc: 'Building clean, high-performance web experiences and technical prototypes.',
                icon: <Code className="w-10 h-10 text-brand-neon" />,
                tags: ['React', 'Python', 'Web']
              }
            ].map((service, i) => (
              <div key={i} className="bg-black p-12 md:p-16 hover:bg-white/[0.02] transition-colors duration-700 group">
                <div className="mb-10 group-hover:scale-110 transition-transform duration-500 origin-left">{service.icon}</div>
                <h3 className="text-display text-3xl mb-6">{service.title}</h3>
                <p className="text-white/40 leading-relaxed mb-10 min-h-[80px]">{service.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map(tag => (
                    <span key={tag} className="text-[8px] font-black tracking-widest uppercase px-3 py-1 border border-white/10 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <div className="py-20 border-b border-white/5 overflow-hidden whitespace-nowrap bg-black flex select-none">
        <div className="animate-marquee flex gap-20 items-center">
          {[
            'CINEMATIC DESIGN', 'TECHNICAL PRECISION', 'MOTION STORYTELLING', 'VISUAL ARCHITECTURE', 
            'CINEMATIC DESIGN', 'TECHNICAL PRECISION', 'MOTION STORYTELLING', 'VISUAL ARCHITECTURE'
          ].map((text, i) => (
            <div key={i} className="flex gap-20 items-center">
              <span className="text-display text-6xl md:text-8xl opacity-10 hover:opacity-100 transition-opacity duration-500 cursor-default">{text}</span>
              <Sparkles className="w-8 h-8 text-brand-neon opacity-20" />
            </div>
          ))}
        </div>
      </div>

      {/* Tools Marquee */}
      <div className="py-12 border-b border-white/5 overflow-hidden whitespace-nowrap bg-zinc-950 flex select-none">
        <div className="animate-marquee-reverse flex gap-32 items-center">
          {[
            'ADOBE PREMIERE', 'AFTER EFFECTS', 'CANVA', 'FIGMA', 'PYTHON', 'REACT', 'ARDUINO', 'BLENDER',
            'ADOBE PREMIERE', 'AFTER EFFECTS', 'CANVA', 'FIGMA', 'PYTHON', 'REACT', 'ARDUINO', 'BLENDER'
          ].map((tool, i) => (
            <span key={i} className="text-[10px] font-black tracking-[0.4em] opacity-30 hover:opacity-100 hover:text-brand-neon transition-all duration-500 cursor-default">{tool}</span>
          ))}
        </div>
      </div>

      {/* The Process Section */}
      <section className="py-40 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-brand-neon text-[10px] font-black tracking-[0.5em] uppercase mb-4 block">Archive 03</span>
            <h2 className="text-display text-5xl md:text-8xl">THE PROCESS</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { step: '01', title: 'DISCOVER', desc: 'Deep dive into vision and requirements.', icon: <Sparkles className="w-5 h-5 text-brand-neon" /> },
              { step: '02', title: 'CONCEPT', desc: 'Developing the visual architecture.', icon: <Layers className="w-5 h-5 text-brand-neon" /> },
              { step: '03', title: 'REFINE', desc: 'Polishing every pixel and frame.', icon: <Zap className="w-5 h-5 text-brand-neon" /> },
              { step: '04', title: 'LAUNCH', desc: 'Deploying the final masterpiece.', icon: <ArrowRight className="w-5 h-5 text-brand-neon" /> }
            ].map((p, i) => (
              <div key={i} className="glass p-10 rounded-[2.5rem] border border-white/5 hover:border-brand-neon/30 transition-all duration-700 group">
                <div className="flex justify-between items-start mb-12">
                  <span className="text-display text-3xl opacity-20">{p.step}</span>
                  <div className="p-3 bg-brand-neon/10 rounded-xl group-hover:bg-brand-neon group-hover:text-black transition-all duration-500">{p.icon}</div>
                </div>
                <h3 className="text-display text-2xl mb-4">{p.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 bg-black/50">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Core Expertise</h2>
          <p className="text-white/50 tracking-widest uppercase text-sm">Where Design Meets Tech</p>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { 
              title: 'Design', 
              icon: <Palette className="w-8 h-8 text-brand-neon" />,
              skills: ['Canva', 'Branding', 'UI Design', 'Social Media Graphics'],
              color: 'hover:shadow-[0_0_30px_rgba(0,242,255,0.2)]'
            },
            { 
              title: 'Video Editing', 
              icon: <Video className="w-8 h-8 text-brand-glow" />,
              skills: ['Reels Production', 'Promo Videos', 'Color Grading', 'Motion Graphics'],
              color: 'hover:shadow-[0_0_30px_rgba(112,0,255,0.2)]'
            },
            { 
              title: 'Tech', 
              icon: <Code className="w-8 h-8 text-white" />,
              skills: ['Python', 'Arduino', 'Web Dev', 'Chrome Extensions'],
              color: 'hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]'
            },
          ].map((cat, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className={`p-10 glass rounded-3xl transition-all duration-500 border border-white/5 ${cat.color}`}
            >
              <div className="mb-6">{cat.icon}</div>
              <h3 className="text-2xl font-bold mb-6">{cat.title}</h3>
              <ul className="space-y-3">
                {cat.skills.map((skill, j) => (
                  <li key={j} className="text-white/50 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20" /> {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>



      {/* Booking CTA Section */}
      <section id="booking" className="py-40 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-neon/5 blur-[150px] rounded-full -z-10" />
        <div className="max-w-5xl mx-auto glass p-12 md:p-24 rounded-[3rem] text-center border border-white/10 relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-neon/10 border border-brand-neon/20 mb-8">
            <Zap className="w-4 h-4 text-brand-neon animate-pulse" />
            <span className="text-brand-neon text-[10px] font-black tracking-[0.2em] uppercase">Limited Availability</span>
          </div>
          <h2 className="text-display text-5xl md:text-8xl mb-8">READY TO SCALE <br /> YOUR VISION?</h2>
          <p className="text-xl text-white/40 mb-12 max-w-2xl mx-auto leading-relaxed">
            Let's discuss how we can elevate your brand through high-end design and technical innovation. 
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="https://calendly.com/nexagen2105" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-12 py-6 bg-white text-black font-black text-xs tracking-[0.3em] uppercase rounded-2xl hover:scale-105 transition-all duration-500 flex items-center justify-center gap-3 shadow-[0_20px_50px_rgba(255,255,255,0.1)]"
            >
              <Calendar className="w-4 h-4" /> Schedule Vision Call
            </a>
            <a 
              href="mailto:nexagen2105@gmail.com" 
              className="px-12 py-6 glass border border-white/10 text-white font-black text-xs tracking-[0.3em] uppercase rounded-2xl hover:bg-white/10 transition-all duration-500 flex items-center justify-center gap-3"
            >
              <Layers className="w-4 h-4" /> Custom Proposal
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-7xl font-bold mb-8">Let's Create <br /> Something <span className="text-brand-neon">Futuristic</span>.</h2>
          <p className="text-xl text-white/50 mb-12">I'm currently open to freelance projects and collaborations.</p>
          
          <div className="flex flex-col gap-8 items-center">
            <a href="mailto:nexagen2105@gmail.com" className="w-full md:w-auto px-12 py-6 bg-white text-black font-bold text-xl rounded-2xl hover:scale-105 transition-transform flex items-center justify-center gap-3">
              <Mail className="w-6 h-6" /> nexagen2105@gmail.com
            </a>
            
            <div className="flex gap-6">
              {[
                { icon: <Linkedin />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/neev-patel-640918315/' },
                { icon: <Github />, label: 'Github', href: 'https://github.com/neevpatel018' },
                { icon: <Instagram />, label: 'Instagram', href: 'https://www.instagram.com/neevpatel_018/' },
              ].map((social, i) => (
                <motion.a 
                  key={i} 
                  href={social.href}
                  whileHover={{ y: -5 }}
                  className="w-14 h-14 glass rounded-xl flex items-center justify-center hover:text-brand-neon transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <p className="mt-32 text-sm text-white/20 uppercase tracking-[0.5em]">
            Designed by Neev &copy; 2024
          </p>
        </div>
      </section>

      <style>{`
        @keyframes floating {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .floating-avatar {
          animation: floating 6s ease-in-out infinite;
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
          width: max-content;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 40s linear infinite;
          width: max-content;
        }
        .scroll-progress {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: #a3ff00;
          transform-origin: 0%;
          z-index: 1000;
        }
      `}</style>
    </div>
  );
}

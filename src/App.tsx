import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'motion/react';
import { BrowserRouter, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  Rocket, Briefcase, ShoppingCart, MapPin, User, Settings, 
  ChevronDown, Instagram, Linkedin, Youtube, Twitter, 
  ArrowRight, CheckCircle2, Zap, BarChart3, Layers, 
  Camera, Code, Globe, MessageSquare, Menu, X,
  Plus, Minus
} from 'lucide-react';
import { Service, Achievement, Testimonial, FAQ, ProcessStep } from './types';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (location.pathname !== '/') {
      e.preventDefault();
      navigate('/#' + id);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-dark/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-display font-bold tracking-tighter">
          WE<span className="text-brand-primary">&</span>YOU
        </Link>
        
        <div className="hidden md:flex gap-8 items-center">
          {['Services', 'About', 'Process', 'FAQ'].map((item) => (
            <a 
              key={item} 
              href={`/#${item.toLowerCase()}`} 
              onClick={(e) => handleNavClick(e, item.toLowerCase())}
              className="text-sm font-medium hover:text-brand-primary transition-colors"
            >
              {item}
            </a>
          ))}
          <Link 
            to="/start"
            className="bg-brand-primary text-black px-6 py-2 rounded-full text-sm font-bold hover:scale-105 transition-transform"
          >
            Start Your Project
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-brand-dark border-b border-white/10 p-6 flex flex-col gap-4 md:hidden"
          >
            {['Services', 'About', 'Process', 'FAQ'].map((item) => (
              <a 
                key={item} 
                href={`/#${item.toLowerCase()}`} 
                className="text-lg font-medium"
                onClick={(e) => {
                  handleNavClick(e, item.toLowerCase());
                  setIsMobileMenuOpen(false);
                }}
              >
                {item}
              </a>
            ))}
            <Link 
              to="/start"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-brand-primary text-black px-6 py-3 rounded-xl text-lg font-bold text-center"
            >
              Start Your Project
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[120vh] flex flex-col items-center pt-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="grid-perspective">
          <div className="grid-lines" />
        </div>
        <div className="hero-glow" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-brand-dark via-transparent to-brand-dark" />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-8xl font-display font-bold leading-[1.1] tracking-tight mb-8">
            Making Your Brand <br />
            <span className="text-brand-primary">Visible, Valuable, and Viral</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto mb-12 leading-relaxed">
            WE&You helps businesses grow by building strong digital visibility. We combine digital marketing, creative storytelling, and modern technology to help brands reach the right audience, increase awareness, and drive measurable online growth.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              to="/start"
              className="bg-brand-primary text-black px-8 py-3 rounded-full text-sm font-bold hover:scale-105 transition-transform flex items-center gap-2 group"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="#services" className="bg-white/5 border border-white/10 hover:border-brand-primary/50 backdrop-blur-xl px-8 py-3 rounded-full text-sm font-medium transition-all">
              Explore Services
            </a>
          </div>
        </motion.div>
      </div>

      {/* Dashboard Preview Element */}
      
    </section>
  );
};

const About = () => {
  const industries = [
    { icon: <Rocket className="w-6 h-6" />, label: "Startups" },
    { icon: <Briefcase className="w-6 h-6" />, label: "Small & Medium Businesses" },
    { icon: <ShoppingCart className="w-6 h-6" />, label: "E-commerce Brands" },
    { icon: <MapPin className="w-6 h-6" />, label: "Local Businesses" },
    { icon: <User className="w-6 h-6" />, label: "Personal Brands" },
    { icon: <Settings className="w-6 h-6" />, label: "Service-Based Companies" },
  ];

  return (
    <section id="about" className="py-24 bg-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                alt="Our Team" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 glass p-8 rounded-2xl hidden md:block">
              <div className="text-4xl font-display font-bold text-brand-primary">50+</div>
              <div className="text-sm text-white/60 uppercase tracking-widest">Brands Helped</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-4">Who We Are</div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
              Helping Businesses Build a <span className="text-brand-primary">Strong Presence.</span>
            </h2>
            <p className="text-lg text-white/60 mb-10 leading-relaxed">
              WE&You is a creative digital agency focused on helping businesses build a strong presence in the online world. By combining marketing strategy, innovative technology, and creative storytelling, we help brands connect with their audience and stand out in the competitive digital landscape.
            </p>

            <h3 className="text-xl font-display font-bold mb-6 uppercase tracking-wider text-white/40">Industries We Work With</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {industries.map((ind, i) => (
                <div key={i} className="flex items-center gap-3 p-4 glass rounded-xl hover:border-brand-primary/50 transition-colors group">
                  <div className="text-brand-primary group-hover:scale-110 transition-transform">{ind.icon}</div>
                  <span className="text-sm font-medium">{ind.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Mission = () => {
  return (
    <section className="py-24 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-4">Our Mission</div>
          <h2 className="text-3xl md:text-5xl font-display font-bold max-w-4xl mx-auto leading-tight">
            Empowering businesses to succeed online through <span className="text-brand-primary">strategic marketing</span>, innovative technology, and powerful creative content.
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services: Service[] = [
    {
      id: '1',
      category: 'Digital Marketing',
      title: 'Social Media Management',
      description: 'Strategic campaigns designed to increase brand visibility. Includes Instagram portfolio management, content planning, and brand storytelling through reels.',
      icon: 'layers'
    },
    {
      id: '2',
      category: 'Paid Ads & SEO',
      title: 'Paid Advertising',
      description: 'Data-driven Google and Meta Ads designed to increase traffic and generate leads through precise audience targeting and campaign optimization.',
      icon: 'bar-chart'
    },
    {
      id: '3',
      category: 'Creative Content Studio',
      title: 'Photo & Video Production',
      description: 'High-quality visual content including brand video shoots, short-form reel production, and product photography that builds credibility.',
      icon: 'camera'
    },
    {
      id: '4',
      category: 'Creative Content Studio',
      title: 'Creative Content Production',
      description: 'Powerful visuals and storytelling that strengthen brand identity. Includes advertising scripts, reel concepts, and social media campaigns.',
      icon: 'message'
    },
    {
      id: '5',
      category: 'Website & App Development',
      title: 'Website Development',
      description: 'Modern digital platforms including business websites, e-commerce platforms, and responsive designs that help businesses scale online.',
      icon: 'globe'
    },
    {
      id: '6',
      category: 'Website & App Development',
      title: 'App Development',
      description: 'Custom mobile apps built with secure scalable architecture, performance optimization, and ongoing maintenance.',
      icon: 'code'
    },
    {
      id: '7',
      category: 'Influence & Reach',
      title: 'Influencer Marketing',
      description: 'Collaborate with the right creators to expand reach and build trust. Includes campaign strategy and performance tracking.',
      icon: 'user'
    },
    {
      id: '8',
      category: 'Paid Ads & SEO',
      title: 'SEO Optimization',
      description: 'Website SEO audits, keyword research, and on-page optimization to improve search rankings and organic visibility.',
      icon: 'bar-chart'
    }
  ];

  const getIcon = (icon: string) => {
    switch(icon) {
      case 'layers': return <Layers className="w-8 h-8" />;
      case 'bar-chart': return <BarChart3 className="w-8 h-8" />;
      case 'camera': return <Camera className="w-8 h-8" />;
      case 'message': return <MessageSquare className="w-8 h-8" />;
      case 'globe': return <Globe className="w-8 h-8" />;
      case 'code': return <Code className="w-8 h-8" />;
      case 'user': return <User className="w-8 h-8" />;
      default: return <Zap className="w-8 h-8" />;
    }
  };

  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Our <span className="text-brand-primary">Solutions.</span></h2>
          <p className="text-white/60 max-w-2xl mx-auto">Tailored digital services designed to scale your impact and build your legacy.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-8 glass rounded-3xl overflow-hidden hover:border-brand-primary/50 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 p-6 text-white/5 group-hover:text-brand-primary/10 transition-colors">
                {getIcon(service.icon)}
              </div>
              <div className="text-brand-primary mb-6 group-hover:scale-110 transition-transform origin-left">
                {getIcon(service.icon)}
              </div>
              <div className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-2">{service.category}</div>
              <h3 className="text-2xl font-display font-bold mb-4">{service.title}</h3>
              <p className="text-white/60 leading-relaxed">{service.description}</p>
              
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-2 text-sm font-bold group-hover:text-brand-primary transition-colors cursor-pointer">
                Learn More <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps: ProcessStep[] = [
    { number: '01', title: 'Discovery & Strategy', description: 'Understanding your brand, audience, and market opportunities.' },
    { number: '02', title: 'Creative Planning', description: 'Developing content, visuals, and storytelling aligned with your brand.' },
    { number: '03', title: 'Campaign Execution', description: 'Launching campaigns across social media, ads, and digital platforms.' },
    { number: '04', title: 'Optimization & Growth', description: 'Tracking performance and continuously improving campaigns for better results.' },
  ];

  return (
    <section id="process" className="py-24 bg-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-16 text-center">Our <span className="text-brand-primary">Process.</span></h2>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 hidden lg:block" />
          
          <div className="grid lg:grid-cols-4 gap-12 relative">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative"
              >
                <div className="w-16 h-16 bg-brand-dark border border-brand-primary rounded-2xl flex items-center justify-center text-2xl font-display font-bold text-brand-primary mb-8 relative z-10 lg:mx-auto">
                  {step.number}
                </div>
                <div className="lg:text-center">
                  <h3 className="text-2xl font-display font-bold mb-4">{step.title}</h3>
                  <p className="text-white/60 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const features = [
    { icon: <Layers />, title: 'Creative + Strategy', desc: 'We combine creativity with proven marketing strategies for real business results.' },
    { icon: <Settings />, title: 'End-to-End Solutions', desc: 'From content production to website development and marketing campaigns.' },
    { icon: <BarChart3 />, title: 'Data-Driven Marketing', desc: 'All decisions are based on analytics and audience insights.' },
    { icon: <User />, title: 'Experienced Team', desc: 'Designers, marketers, and developers working together for impactful campaigns.' },
  ];

  return (
    <section id="why-choose-us" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Why Choose <span className="text-brand-primary">WE&You.</span></h2>
          <p className="text-white/60 max-w-2xl mx-auto">We combine creativity with proven marketing strategies to deliver real business results.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 glass rounded-3xl text-center group"
            >
              <div className="w-16 h-16 bg-brand-primary/10 text-brand-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-primary group-hover:text-black transition-all duration-300">
                {f.icon}
              </div>
              <h3 className="text-xl font-display font-bold mb-4">{f.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SocialProof = () => {
  const achievements: Achievement[] = [
    { label: 'Brands Helped', value: '50', suffix: '+' },
    { label: 'Campaigns Delivered', value: '100', suffix: '+' },
    { label: 'Audience Reach', value: '10', suffix: 'M+' },
    { label: 'Client Satisfaction', value: '95', suffix: '%' },
  ];

  return (
    <section className="py-24 bg-brand-primary text-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {achievements.map((a, i) => (
            <div key={i}>
              <div className="text-5xl md:text-7xl font-display font-bold mb-2">
                {a.value}{a.suffix}
              </div>
              <div className="text-sm font-bold uppercase tracking-widest opacity-60">
                {a.label}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-24 max-w-4xl mx-auto">
          <div className="text-center italic text-2xl md:text-3xl font-display font-medium leading-relaxed">
            “WE&You transformed our digital presence in 3 months. Our lead flow tripled.”
          </div>
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="w-12 h-12 bg-black/10 rounded-full" />
            <div className="text-left">
              <div className="font-bold">John Smith</div>
              <div className="text-sm opacity-60">CEO, TechFlow</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StartProject = () => {
  const steps = [
    { 
      icon: <MessageSquare className="w-6 h-6" />, 
      title: 'Share Your Idea', 
      desc: 'Explain your project vision and goals to us.' 
    },
    { 
      icon: <User className="w-6 h-6" />, 
      title: 'Free Consultation', 
      desc: 'Our team analyzes your specific requirements.' 
    },
    { 
      icon: <Layers className="w-6 h-6" />, 
      title: 'Project Planning', 
      desc: 'We define scope, timeline, and growth strategy.' 
    },
    { 
      icon: <Code className="w-6 h-6" />, 
      title: 'Development', 
      desc: 'We build your solution with regular progress updates.' 
    },
    { 
      icon: <Rocket className="w-6 h-6" />, 
      title: 'Launch & Support', 
      desc: 'Seamless deployment and ongoing technical support.' 
    },
  ];

  const trustElements = [
    'No obligation consultation',
    'Transparent pricing',
    'Fast response within 24 hours',
    'Dedicated expert team'
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Cal.com Embed Implementation using namespace pattern
    (function (C: any, A: string, L: string) {
      let p = function (a: any, ar: any) { a.q.push(ar); };
      let d = C.document;
      // Initialize namespace "discoverycall"
      C[L] = C[L] || function () { (C[L].q = C[L].q || []).push(arguments); };
      C[L].q = C[L].q || [];
      C[L].ns = C[L].ns || {};
      C[L].ns["discoverycall"] = C[L].ns["discoverycall"] || function () {
        p(C[L].ns["discoverycall"], arguments);
      };
      C[L].ns["discoverycall"].q = C[L].ns["discoverycall"].q || [];

      // Load the script only once
      if (!d.getElementById("cal-embed-script")) {
        let b = d.createElement("script");
        b.id = "cal-embed-script";
        b.src = A;
        b.async = true;
        d.head.appendChild(b);
      }

      C[L]("init", "discoverycall", { origin: "https://cal.com" });
      C[L]("ui", "discoverycall", {
        styles: { branding: { brandColor: "#00ff00" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })(window, "https://app.cal.com/embed/embed.js", "Cal");
  }, []);

  const handleBooking = () => {
    // @ts-ignore
    const Cal = window.Cal;
    if (Cal && Cal.ns && Cal.ns["discoverycall"]) {
      Cal.ns["discoverycall"]("modal", {
        calLink: "we-you.in/discoverycall",
        config: { layout: "month_view" },
      });
    } else if (Cal) {
      // Fallback: direct modal open
      Cal("modal", {
        calLink: "we-you.in/discoverycall",
        config: { layout: "month_view" },
      });
    }
  };

  return (
    <div className="min-h-screen bg-brand-dark pt-32 pb-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-display font-bold mb-6"
          >
            Start Your Project With <span className="text-brand-primary">WE&You</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Turn your idea into a powerful digital solution. Our team guides you from concept to launch.
          </motion.p>
        </div>

        {/* 5-Step Process Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-24">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 glass rounded-[2.5rem] border border-white/5 hover:border-brand-primary/30 transition-all group relative"
            >
              <div className="w-12 h-12 bg-brand-primary/10 text-brand-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-black transition-all duration-300">
                {step.icon}
              </div>
              <h3 className="text-lg font-display font-bold mb-3">{step.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col items-center max-w-4xl mx-auto">
          {/* CTA & Trust */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full text-center"
          >
            <div className="space-y-12 mb-16">
              <div className="flex flex-col items-center gap-6">
                <h2 className="text-3xl font-display font-bold">Ready to take the next step?</h2>
                <button 
                  onClick={handleBooking}
                  data-cal-link="we-you.in/discoverycall"
                  data-cal-namespace="discoverycall"
                  data-cal-config='{"layout":"month_view"}'
                  className="bg-brand-primary text-black px-12 py-6 rounded-full text-2xl font-bold hover:scale-105 transition-transform shadow-[0_20px_40px_rgba(0,255,0,0.2)] flex items-center gap-3 group"
                >
                  Book Free Consultation
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              
              <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                {trustElements.map((text, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/60">
                    <CheckCircle2 className="w-5 h-5 text-brand-primary shrink-0" />
                    <span className="text-sm font-medium uppercase tracking-wider">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-10 rounded-[3rem] bg-brand-primary/5 border border-brand-primary/10 flex flex-col md:flex-row items-center justify-between gap-8 max-w-3xl mx-auto">
              <div className="text-left">
                <div className="text-sm font-bold uppercase tracking-widest text-brand-primary mb-1">Quick Contact</div>
                <div className="text-2xl font-display font-bold">Chat with an expert</div>
                <p className="text-white/40 text-sm mt-2">Get answers to your questions instantly.</p>
              </div>
              <button className="w-20 h-20 bg-brand-primary text-black rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg group">
                <MessageSquare className="w-8 h-8 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const faqs: FAQ[] = [
    { 
      question: 'Do you work with startups?', 
      answer: 'Yes, we help startups build strong digital presence and marketing strategies.' 
    },
    { 
      question: 'Do you provide website development?', 
      answer: 'Yes, we design and develop modern business websites and apps.' 
    },
    { 
      question: 'How long does a marketing campaign take?', 
      answer: 'Campaign timelines depend on goals, strategy, and platform.' 
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes, we provide continuous marketing, optimization, and technical support.'
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 bg-brand-dark text-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight"
          >
            Frequently Asked <span className="text-brand-primary">Questions</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/40 text-lg max-w-lg mx-auto"
          >
            Everything you need to know about working with us. These are common questions from our clients.
          </motion.p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="group">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className={`w-full p-6 flex items-center gap-6 text-left transition-all duration-500 rounded-[2.5rem] border ${
                  openIndex === i 
                    ? 'bg-white/10 border-brand-primary/30 shadow-[0_20px_50px_rgba(0,255,0,0.05)]' 
                    : 'bg-white/5 hover:bg-white/10 border-white/5 hover:border-white/10'
                }`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 shrink-0 ${
                  openIndex === i ? 'bg-brand-primary text-black rotate-180' : 'bg-white/5 text-white/40'
                }`}>
                  {openIndex === i ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
                <span className={`text-lg font-semibold transition-colors duration-300 ${openIndex === i ? 'text-white' : 'text-white/70'}`}>
                  {faq.question}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 px-6 pb-2">
                      <motion.div 
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white/5 p-8 rounded-[2.5rem] rounded-tl-none text-white/60 leading-relaxed border border-white/5"
                      >
                        {faq.answer}
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="pt-24 pb-12 bg-white/5 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-tight">
              Let’s Build Your <br />
              <span className="text-brand-primary">Brand Together</span>
            </h2>
            <p className="text-white/60 mb-8 text-lg">Ready to grow your business online? Connect with WE&You today.</p>
            <Link 
              to="/start"
              className="bg-brand-primary text-black px-10 py-5 rounded-full text-xl font-bold hover:scale-105 transition-transform inline-block"
            >
              Start Your Project
            </Link>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-12">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-6">Contact</h4>
              <div className="space-y-4 text-lg">
                <a href="mailto:hello@youragency.com" className="block hover:text-brand-primary transition-colors">hello@youragency.com</a>
                <a href="tel:+910000000000" className="block hover:text-brand-primary transition-colors">+91 XXXXX XXXXX</a>
                <p className="text-white/60">www.youragency.com</p>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-6">Follow Us</h4>
              <div className="flex gap-4">
                {[Instagram, Linkedin, Youtube, Twitter].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-brand-primary hover:text-black transition-all">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
              <div className="mt-4 text-white/60 text-sm">@youragencyname</div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-display font-bold tracking-tighter">
            WE<span className="text-brand-primary">&</span>YOU
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="text-sm text-white/40">Get digital growth tips in your inbox.</div>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-white/5 border border-white/10 rounded-full px-6 py-2 text-sm focus:outline-none focus:border-brand-primary transition-colors"
              />
              <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-bold hover:bg-brand-primary transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center text-xs text-white/20">
          © {new Date().getFullYear()} WE&You Digital Agency. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

const LandingPage = () => {
  return (
    <>
      <Hero />
      <About />
      <Mission />
      <Services />
      <Process />
      <WhyChooseUs />
      <SocialProof />
      <FAQSection />
    </>
  );
};

export default function AgencyWebsite() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <div className="selection:bg-brand-primary selection:text-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/start" element={<StartProject />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

const ScrollToHash = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return null;
};

import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageCircle, 
  Star, 
  MapPin, 
  Clock, 
  ChevronRight, 
  CheckCircle2, 
  Menu, 
  X, 
  Instagram, 
  Facebook, 
  Award,
  Users,
  ShieldCheck,
  Calendar,
  Sparkles,
  Smile,
  HeartPulse,
  Info
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Braces', href: '#braces' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className={`font-serif text-2xl font-bold ${scrolled ? 'text-teal-700' : 'text-teal-800'}`}>
              Dental Heritage
            </span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-slate-700 hover:text-teal-600 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#booking" 
              className="bg-teal-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-teal-700 transition-all shadow-lg shadow-teal-600/20"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-teal-600 transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-slate-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-all"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <a
                  href="#booking"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-teal-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-teal-700 transition-all"
                >
                  Book Appointment
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const whatsappUrl = "https://wa.me/60123456789?text=Hi%20Clinic%20Dental%20Heritage,%20I%20would%20like%20to%20book%20a%20dental%20appointment.";

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-50/50 rounded-l-[100px] hidden lg:block"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-teal-100 text-teal-800 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <Sparkles size={16} />
              <span>Premium Dental Care in Sepang</span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-slate-900">
              Your Trusted Dental Clinic in <span className="text-teal-600">Sepang</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-lg leading-relaxed">
              Providing gentle, professional and modern dental care for you and your family in the heart of Kota Warisan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#booking" 
                className="bg-teal-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-teal-700 transition-all shadow-xl shadow-teal-600/30 flex items-center justify-center"
              >
                Book Appointment
                <ChevronRight size={20} className="ml-2" />
              </a>
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-teal-700 border-2 border-teal-100 px-8 py-4 rounded-full font-bold text-lg hover:border-teal-600 transition-all flex items-center justify-center"
              >
                <MessageCircle size={20} className="mr-2" />
                Chat on WhatsApp
              </a>
            </div>

            <div className="mt-12 flex items-center space-x-6">
              <div className="flex -space-x-3">
                {[
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100",
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100",
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100"
                ].map((src, i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden">
                    <img 
                      src={src} 
                      alt="Patient" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center text-yellow-500">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={16} fill="currentColor" />)}
                  <span className="ml-2 text-slate-900 font-bold">4.9/5</span>
                </div>
                <p className="text-sm text-slate-500 font-medium">300+ Happy Patients in Sepang</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800" 
                alt="Modern Dental Suite" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Card */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-10 z-20 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-teal-100 p-3 rounded-full text-teal-600">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Safe & Gentle</h4>
                  <p className="text-sm text-slate-500">Modern equipment for a painless experience.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TrustSection = () => {
  return (
    <section className="py-16 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="max-w-xl">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">
              Trusted by hundreds of patients in Sepang
            </h2>
            <p className="text-slate-600 text-lg">
              We pride ourselves on providing professional, gentle and transparent dental care that makes every visit comfortable.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:gap-16">
            <div>
              <div className="text-4xl font-bold text-teal-600 mb-1">4.9</div>
              <div className="flex justify-center md:justify-start text-yellow-500 mb-2">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Google Rating</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-teal-600 mb-1">300+</div>
              <div className="h-4 mb-2"></div> {/* Spacer to align with stars */}
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Happy Patients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-wood/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="rounded-[40px] overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600" 
                  alt="Dr. Nadia" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-teal-600 text-white p-8 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold mb-1">10+</div>
                <div className="text-sm font-medium opacity-90 uppercase tracking-widest">Years Experience</div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-teal-600 font-bold tracking-widest uppercase text-sm mb-4 block">Meet Your Dentist</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-8">Dr. Nadia</h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Dr. Nadia is known for her exceptionally gentle approach and professional expertise. She believes that a dental visit should be a comfortable and stress-free experience for everyone.
              </p>
              <p>
                With a passion for restorative dentistry and a specialization in braces treatment, Dr. Nadia takes the time to explain every procedure clearly, ensuring her patients feel informed and at ease throughout their journey.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Gentle & Patient-Focused",
                "Braces Specialist",
                "Clear Procedure Explanations",
                "Family-Friendly Care"
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <div className="bg-teal-100 text-teal-600 p-1 rounded-full">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="font-semibold text-slate-800">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-4 flex items-center">
                <Award className="text-teal-600 mr-2" size={20} />
                Qualifications
              </h4>
              <ul className="space-y-2 text-slate-600">
                <li>• Bachelor of Dental Surgery (BDS)</li>
                <li>• Certified Invisalign Provider</li>
                <li>• Advanced Certification in Orthodontics (Braces)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: "General Dentistry",
      desc: "Comprehensive check-ups and treatments to maintain your overall oral health.",
      icon: <ShieldCheck size={32} />,
    },
    {
      title: "Scaling & Polishing",
      desc: "Comfortable, gentle scaling that keeps your smile healthy and bright.",
      icon: <Sparkles size={32} />,
    },
    {
      title: "Braces Treatment",
      desc: "Expert orthodontic care to straighten your teeth and boost your confidence.",
      icon: <Smile size={32} />,
    },
    {
      title: "Invisalign",
      desc: "Clear, nearly invisible aligners for a discreet way to straighten your smile.",
      icon: <Users size={32} />,
    },
    {
      title: "Teeth Whitening",
      desc: "Safe and effective whitening treatments for a radiant, Hollywood smile.",
      icon: <HeartPulse size={32} />,
    },
    {
      title: "Kids Dentistry",
      desc: "A warm, friendly environment designed to make children feel safe and happy.",
      icon: <Smile size={32} />,
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-teal-600 font-bold tracking-widest uppercase text-sm mb-4 block">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Comprehensive Care for Every Smile</h2>
          <p className="text-lg text-slate-600">
            From routine check-ups to specialized orthodontic treatments, we offer a full range of dental services focused on your comfort.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 bg-teal-50/50 rounded-3xl border border-teal-100 hover:bg-white hover:shadow-xl hover:border-teal-200 transition-all duration-300"
            >
              <div className="text-teal-600 mb-6 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm">
                {service.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BracesSpecialistSection = () => {
  return (
    <section id="braces" className="py-24 bg-teal-900 text-white overflow-hidden relative">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-800 rounded-full -mr-48 -mt-48 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-800 rounded-full -ml-32 -mb-32 opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-teal-300 font-bold tracking-widest uppercase text-sm mb-4 block">Braces Specialist</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Your Braces Journey in Safe Hands</h2>
            <p className="text-xl text-teal-100 mb-10 leading-relaxed">
              Straightening your teeth is a journey. We provide clear explanations, step-by-step guidance, and a comfortable experience every step of the way.
            </p>
            
            <div className="space-y-8">
              {[
                { title: "Clear Explanations", desc: "We explain every step of your treatment plan before we begin." },
                { title: "Comfortable Experience", desc: "Modern techniques to minimize discomfort during adjustments." },
                { title: "Ongoing Monitoring", desc: "Regular check-ups to ensure your progress is on track." }
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="bg-teal-700 p-2 rounded-lg mt-1">
                    <CheckCircle2 size={24} className="text-teal-300" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-teal-100/80">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <a 
                href="#booking" 
                className="inline-block bg-teal-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-teal-400 transition-all shadow-xl shadow-teal-500/20"
              >
                Schedule Braces Consultation
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-teal-800/50">
              <img 
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800" 
                alt="Braces Journey" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Stats */}
            <div className="absolute top-10 -left-10 bg-white text-slate-900 p-6 rounded-2xl shadow-2xl">
              <div className="flex items-center space-x-3">
                <Smile className="text-teal-600" size={32} />
                <div>
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-xs font-bold text-slate-500 uppercase">Smiles Transformed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Ahmad Zaki",
      role: "Braces Patient",
      text: "10/10 experience! Dr. Nadia is so professional and gentle. I was nervous about getting braces but she explained everything so clearly. Highly recommended!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100"
    },
    {
      name: "Siti Nurhaliza",
      role: "Family Patient",
      text: "The clinic is very clean and welcoming. The staff are friendly and Dr. Nadia makes my kids feel so comfortable. Best dental clinic in Sepang for families.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100"
    },
    {
      name: "Mohd Farhan",
      role: "Scaling & Polishing",
      text: "I've been coming here for a year now. Very happy with the service. The scaling process was painless and the results are great. Transparent pricing too.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-teal-600 font-bold tracking-widest uppercase text-sm mb-4 block">Patient Stories</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">What Our Patients Say</h2>
          <div className="flex justify-center text-yellow-500 mb-4">
            {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={24} fill="currentColor" />)}
          </div>
          <p className="text-lg text-slate-600">
            Join hundreds of happy patients who have experienced our professional and gentle care.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-wood/20 p-8 rounded-3xl border border-slate-100 flex flex-col h-full">
              <div className="flex-grow">
                <p className="text-slate-700 italic text-lg leading-relaxed mb-8">
                  "{t.text}"
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <p className="text-sm text-teal-600 font-semibold">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const EnvironmentSection = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=400" 
                alt="Bright Waiting Area" 
                className="rounded-3xl shadow-lg w-full h-64 object-cover"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=400" 
                alt="State-of-the-art Dental Chair" 
                className="rounded-3xl shadow-lg w-full h-48 object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="pt-12 space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400" 
                alt="Friendly Professional Staff" 
                className="rounded-3xl shadow-lg w-full h-48 object-cover"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400" 
                alt="Modern Treatment Room" 
                className="rounded-3xl shadow-lg w-full h-64 object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div>
            <span className="text-teal-600 font-bold tracking-widest uppercase text-sm mb-4 block">Our Clinic</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-8">A Comfortable Atmosphere for Your Family</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We've designed our clinic to be clean, modern, and welcoming. From our comfortable waiting area to our state-of-the-art treatment rooms, we ensure a relaxing environment for patients of all ages.
            </p>
            
            <div className="space-y-6">
              {[
                { title: "Modern & Clean", desc: "Strict hygiene protocols and the latest dental technology." },
                { title: "Welcoming Environment", desc: "Designed to reduce dental anxiety for children and adults." },
                { title: "Family-Friendly", desc: "Spacious areas and friendly staff to make everyone feel at home." }
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="bg-white p-3 rounded-xl shadow-sm text-teal-600">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const BookingSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    treatment: '',
    date: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a server
    alert(`Thank you ${formData.name}! We will contact you shortly to confirm your appointment.`);
  };

  return (
    <section id="booking" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-teal-900 rounded-[60px] overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-12 lg:p-20 text-white">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Secure Your Appointment Today</h2>
              <p className="text-xl text-teal-100 mb-12 leading-relaxed">
                Ready for a healthier, brighter smile? Fill out the form and our team will get back to you within 24 hours to confirm your slot.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="bg-teal-800 p-4 rounded-full">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="text-teal-300 text-sm font-bold uppercase tracking-widest">Call Us</div>
                    <div className="text-2xl font-bold">+60 3-8765 4321</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-teal-800 p-4 rounded-full">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="text-teal-300 text-sm font-bold uppercase tracking-widest">Visit Us</div>
                    <div className="text-lg font-medium">Kota Warisan, Sepang, Selangor</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-12 lg:p-20">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider mb-2">Full Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    required
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    placeholder="e.g. 0123456789"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider mb-2">Treatment Type</label>
                  <select 
                    required
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all appearance-none"
                    value={formData.treatment}
                    onChange={(e) => setFormData({...formData, treatment: e.target.value})}
                  >
                    <option value="">Select a treatment</option>
                    <option value="general">General Checkup</option>
                    <option value="scaling">Scaling & Polishing</option>
                    <option value="braces">Braces Consultation</option>
                    <option value="whitening">Teeth Whitening</option>
                    <option value="kids">Kids Dentistry</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider mb-2">Preferred Date</label>
                  <input 
                    type="date" 
                    required
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-teal-600 text-white py-5 rounded-2xl font-bold text-xl hover:bg-teal-700 transition-all shadow-xl shadow-teal-600/20 active:scale-[0.98]"
                >
                  Book Appointment
                </button>
                <p className="text-center text-slate-500 text-sm">
                  By booking, you agree to our privacy policy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const GoogleMapsSection = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-teal-600 font-bold tracking-widest uppercase text-sm mb-4 block">Find Us</span>
          <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">Our Location in Sepang</h2>
          <p className="text-lg text-slate-600">
            Conveniently located in Kota Warisan, Sepang. Easy access and ample parking for our patients.
          </p>
        </div>
        
        <div className="rounded-[40px] overflow-hidden shadow-xl h-[500px] relative border-8 border-white">
          {/* Placeholder for Google Maps */}
          <div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
            <div className="text-center">
              <MapPin size={64} className="text-teal-600 mx-auto mb-4" />
              <p className="text-xl font-bold text-slate-600">Google Maps Placeholder</p>
              <p className="text-slate-500">Kota Warisan, Sepang, Selangor, Malaysia</p>
            </div>
          </div>
          {/* In a real app, use an iframe or Google Maps API */}
          {/* <iframe src="..." width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe> */}
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      q: "Is braces treatment painful?",
      a: "Most patients experience some mild discomfort or soreness for a few days after getting braces or having them adjusted. This is normal and can be managed with over-the-counter pain relief. We use modern techniques to ensure the process is as comfortable as possible."
    },
    {
      q: "How long does braces treatment take?",
      a: "The duration varies depending on the complexity of the case, but typically ranges from 18 to 24 months. During your consultation, Dr. Nadia will provide a more specific timeline based on your individual needs."
    },
    {
      q: "Is scaling painful?",
      a: "Scaling is generally not painful. You might feel a vibrating sensation or slight pressure. If you have sensitive teeth, let us know and we can apply a numbing gel to ensure your comfort throughout the procedure."
    },
    {
      q: "Do you treat children?",
      a: "Yes! We love treating children and have created a warm, friendly environment to make their first dental visits positive and stress-free. We recommend children have their first check-up by age one."
    },
    {
      q: "Do you accept insurance?",
      a: "We accept various dental insurance plans. Please contact our clinic with your insurance details, and our staff will help you verify your coverage before your appointment."
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-teal-600 font-bold tracking-widest uppercase text-sm mb-4 block">Common Questions</span>
          <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden">
              <button 
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="text-lg font-bold text-slate-900">{faq.q}</span>
                <div className={`transform transition-transform duration-300 ${activeIndex === i ? 'rotate-180' : ''}`}>
                  <ChevronRight size={24} className="text-teal-600" />
                </div>
              </button>
              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {faq.a}
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
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <span className="font-serif text-3xl font-bold text-teal-400 block mb-6">
              Dental Heritage
            </span>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Providing premium, professional and gentle dental care for you and your family in Sepang.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-slate-800 p-3 rounded-full hover:bg-teal-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-slate-800 p-3 rounded-full hover:bg-teal-600 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#services" className="hover:text-teal-400 transition-colors">Our Services</a></li>
              <li><a href="#braces" className="hover:text-teal-400 transition-colors">Braces Treatment</a></li>
              <li><a href="#about" className="hover:text-teal-400 transition-colors">About Dr. Nadia</a></li>
              <li><a href="#testimonials" className="hover:text-teal-400 transition-colors">Testimonials</a></li>
              <li><a href="#booking" className="hover:text-teal-400 transition-colors">Book Appointment</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Operating Hours</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex justify-between">
                <span>Mon - Fri</span>
                <span>9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>9:00 AM - 3:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-teal-400">Closed</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-teal-400 mt-1 flex-shrink-0" />
                <span>123, Jalan Kota Warisan, 43900 Sepang, Selangor</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-teal-400 flex-shrink-0" />
                <span>+60 3-8765 4321</span>
              </li>
              <li className="flex items-center space-x-3">
                <MessageCircle size={20} className="text-teal-400 flex-shrink-0" />
                <span>+60 12-345 6789</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-10 text-center">
          <p className="text-slate-500 text-sm mb-4">
            &copy; {new Date().getFullYear()} Klinik Pergigian Dental Heritage. All rights reserved.
          </p>
          <div className="inline-block px-4 py-1 bg-slate-800 rounded-full text-[10px] text-slate-500 uppercase tracking-widest">
            This website was created as a portfolio demonstration.
          </div>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => {
  const whatsappUrl = "https://wa.me/60123456789?text=Hi%20Clinic%20Dental%20Heritage,%20I%20would%20like%20to%20book%20a%20dental%20appointment.";
  
  return (
    <motion.a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
    >
      <MessageCircle size={32} />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-500 font-bold whitespace-nowrap">
        Chat with us
      </span>
    </motion.a>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="font-sans selection:bg-teal-100 selection:text-teal-900">
      <Navbar />
      <main>
        <Hero />
        <TrustSection />
        <AboutSection />
        <ServicesSection />
        <BracesSpecialistSection />
        <TestimonialsSection />
        <EnvironmentSection />
        <BookingSection />
        <GoogleMapsSection />
        <FAQSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

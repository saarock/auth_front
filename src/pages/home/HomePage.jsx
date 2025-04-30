import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Home.css';

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  useEffect(() => {
    // Create a GSAP context to scope animations and enable cleanup
    const ctx = gsap.context(() => {
      // Hero Section Animations
      gsap.fromTo(
        '.hero-content',
        { opacity: 0, y: 150 },
        { opacity: 1, y: 0, duration: 1, ease: 'power4.out' }
      );
      gsap.fromTo(
        '.hero-cta a',
        { opacity: 0, scale: 0.6 },
        {
          opacity: 1,
          scale: 1,
          stagger: 0.3,
          delay: 0.8,
          duration: 1,
          ease: 'elastic.out(1, 0.5)',
        }
      );
      gsap.fromTo(
        '.hero-img',
        { opacity: 0, x: 100, rotation: 70 },
        { opacity: 1, x: 0, rotation: 0, duration: 1.5, ease: 'power3.out', delay: 0.5 }
      );

      // Features Section Animations
      gsap.fromTo(
        '.feature-card',
        { opacity: 0, y: 80, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.3,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.features-section', start: 'top 80%', toggleActions: 'play none none reset' },
        }
      );

      // About Section Animations
      gsap.fromTo(
        '.about-content',
        { opacity: 0, x: -150 },
        {
          opacity: 1,
          x: 0,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.about-section', start: 'top 80%', toggleActions: 'play none none reset' },
        }
      );
      gsap.fromTo(
        '.about-img',
        { opacity: 0, x: 150 },
        {
          opacity: 1,
          x: 0,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.about-section', start: 'top 80%', toggleActions: 'play none none reset' },
        }
      );

      // Testimonials Section Animations
      gsap.fromTo(
        '.testimonial',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.4,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.testimonials-section', start: 'top 80%', toggleActions: 'play none none reset' },
        }
      );

      // Contact Section Animations
      gsap.fromTo(
        '.contact-form',
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.contact-section', start: 'top 80%', toggleActions: 'play none none reset' },
        }
      );

      // Parallax Background
      gsap.to('.hero-advanced', {
        backgroundPosition: '50% 100%',
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero-advanced',
          scrub: true,
          start: 'top top',
          end: 'bottom top',
        },
      });
    });

    // Cleanup on component unmount to prevent memory leaks
    return () => ctx.revert();
  }, []);

  return (
    <div className="inventory-home">
      {/* Hero Section */}
      <header className="hero-advanced py-24 text-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="hero-content md:w-1/2 text-center md:text-left">
            <h1 className="text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-magenta-500">
              Master Your Inventory
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Streamline your operations with real-time stock tracking, predictive analytics, automated vendor sync, and dynamic reporting. Built for efficiency, designed for beauty.
            </p>
            <div className="hero-cta flex justify-center md:justify-start gap-6">
              <a
                href="#dashboard"
                className="btn filled bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-4 px-8 rounded-full transition-all transform hover:scale-110"
              >
                Start Managing
              </a>
              <a
                href="#features"
                className="btn outline border-2 border-lime-400 hover:bg-lime-400 hover:text-gray-900 py-4 px-8 rounded-full transition-all transform hover:scale-110"
              >
                Discover Features
              </a>
            </div>
          </div>
          <div className="hero-img md:w-1/2 mt-10 md:mt-0">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAUYAyXTwLM9UnVpkXh8RYOh2VmBGznEZaDw&s"
              alt="Inventory Dashboard"
              className="rounded-2xl shadow-2xl w-full transform hover:scale-105 transition-all"
            />
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="features-section py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-cyan-500">
            Inventory Features That Shine
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="feature-card bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl shadow-2xl p-8 text-center text-white transform hover:scale-105 transition-all">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3a8dd22"
                alt="Real-time Stock Tracking"
                className="mx-auto mb-4 rounded-lg w-32 h-32 object-cover"
              />
              <h3 className="text-2xl font-bold mb-3 text-cyan-400">Real-time Stock Tracking</h3>
              <p>
                Monitor inventory levels across warehouses with live updates, ensuring you never miss a beat. Supports multi-location syncing.
              </p>
            </div>
            <div className="feature-card bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl shadow-2xl p-8 text-center text-white transform hover:scale-105 transition-all">
              <img
                src="https://images.unsplash.com/photo-1551288049-b1f3a7c6f1e1"
                alt="Predictive Analytics"
                className="mx-auto mb-4 rounded-lg w-32 h-32 object-cover"
              />
              <h3 className="text-2xl font-bold mb-3 text-magenta-400">Predictive Analytics</h3>
              <p>
                Leverage AI to forecast demand, optimize stock levels, and reduce overstock with vibrant, easy-to-read charts.
              </p>
            </div>
            <div className="feature-card bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl shadow-2xl p-8 text-center text-white transform hover:scale-105 transition-all">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                alt="Automated Vendor Sync"
                className="mx-auto mb-4 rounded-lg w-32 h-32 object-cover"
              />
              <h3 className="text-2xl font-bold mb-3 text-lime-400">Automated Vendor Sync</h3>
              <p>
                Integrate with suppliers for automated purchase orders, delivery tracking, and vendor performance analytics.
              </p>
            </div>
            <div className="feature-card bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl shadow-2xl p-8 text-center text-white transform hover:scale-105 transition-all">
              <img
                src="https://images.unsplash.com/photo-1611224923851-80be6bc5c5b3"
                alt="Dynamic Reporting"
                className="mx-auto mb-4 rounded-lg w-32 h-32 object-cover"
              />
              <h3 className="text-2xl font-bold mb-3 text-yellow-400">Dynamic Reporting</h3>
              <p>
                Generate customizable reports on sales, stock turnover, and more, with export options for PDF and Excel.
              </p>
            </div>
            <div className="feature-card bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl shadow-2xl p-8 text-center text-white transform hover:scale-105 transition-all">
              <img
                src="https://images.unsplash.com/photo-1580894894513-541e068a3e2b"
                alt="Low Stock Alerts"
                className="mx-auto mb-4 rounded-lg w-32 h-32 object-cover"
              />
              <h3 className="text-2xl font-bold mb-3 text-pink-400">Low Stock Alerts</h3>
              <p>
                Get instant notifications for low stock levels via email or in-app, with automated reorder suggestions.
              </p>
            </div>
            <div className="feature-card bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl shadow-2xl p-8 text-center text-white transform hover:scale-105 transition-all">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                alt="Barcode Integration"
                className="mx-auto mb-4 rounded-lg w-32 h-32 object-cover"
              />
              <h3 className="text-2xl font-bold mb-3 text-orange-400">Barcode Integration</h3>
              <p>
                Scan and manage inventory with barcode support, streamlining check-ins and check-outs with mobile devices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section py-20 bg-gray-800">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="about-content md:w-1/2 md:pr-12">
            <h2 className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-magenta-400 to-cyan-500">
              Why Choose Our Platform?
            </h2>
            <p className="text-lg mb-6 text-gray-300">
              Our inventory management system is crafted for businesses seeking efficiency and elegance. With features like real-time tracking, AI-driven insights, and seamless integrations, we empower you to take control of your stock with confidence.
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-6">
              <li>Scalable for small businesses to enterprise-level operations.</li>
              <li>Secure cloud-based platform with 99.9% uptime.</li>
              <li>Intuitive interface with customizable dashboards.</li>
              <li>24/7 support and dedicated account managers.</li>
            </ul>
            <a
              href="#contact"
              className="btn filled bg-gradient-to-r from-lime-500 to-cyan-600 hover:from-lime-600 hover:to-cyan-700 text-white py-4 px-8 rounded-full transition-all transform hover:scale-110"
            >
              Contact Us
            </a>
          </div>
          <div className="about-img md:w-1/2 mt-10 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf"
              alt="Inventory Analytics Dashboard"
              className="rounded-2xl shadow-2xl w-full transform hover:scale-105 transition-all"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials-section py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500">
            Trusted by Businesses Worldwide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="testimonial bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-8 text-white transform hover:scale-105 transition-all">
              <p className="text-lg mb-4">"The real-time tracking and barcode integration slashed our processing time by 40%!"</p>
              <p className="font-semibold text-cyan-400">— Sarah Lee, Logistics Manager</p>
            </div>
            <div className="testimonial bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-8 text-white transform hover:scale-105 transition-all">
              <p className="text-lg mb-4">"Predictive analytics helped us avoid stockouts during peak season. Stunning platform!"</p>
              <p className="font-semibold text-magenta-400">— Michael Chen, Retail Owner</p>
            </div>
            <div className="testimonial bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-8 text-white transform hover:scale-105 transition-all">
              <p className="text-lg mb-4">"The vibrant reports make data analysis a breeze. Our team loves it!"</p>
              <p className="font-semibold text-lime-400">— Emily Davis, Operations Head</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
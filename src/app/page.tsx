"use client";

import Image from "next/image";
import DotTrickGenerator from "./components/DotTrickGenerator";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import { handleSmoothScroll } from "./utils/scrollUtils";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navbar />

      {/* Scroll to Top Button */}
      <ScrollToTop />

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="glass-effect p-6 flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Gmail <span className="gradient-text">Dot Trick</span> Generator
            </h1>
            <p className="text-lg mb-8 opacity-80">
              Create all possible email variations with the Gmail dot trick. Gmail ignores dots in email addresses, so you can use this to your advantage!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#generator" 
                className="btn-primary text-center"
                onClick={(e) => handleSmoothScroll(e)}
              >
                Try Generator
              </a>
              <a 
                href="#explanation" 
                className="btn-secondary text-center"
                onClick={(e) => handleSmoothScroll(e)}
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="flex-1 relative h-[300px] md:h-[400px] w-full">
            <Image
              src="/generator-illustration.svg"
              alt="Gmail Dot Trick Generator"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Generator Section */}
      <section id="generator" className="section px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Gmail <span className="gradient-text">Dot Trick</span> Generator
        </h2>
        <DotTrickGenerator />
      </section>

      {/* Explanation Section */}
      <section id="explanation" className="section px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="glass-effect p-6">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:flex-1">
              <h2 className="text-3xl font-bold mb-6">What is the Gmail Dot Trick?</h2>
              <p className="mb-4">
                The Gmail dot trick is based on a simple fact: <strong>Gmail ignores all dots (periods) in the username part of Gmail addresses</strong>.
              </p>
              <p className="mb-4">
                This means that if your email is <code className="bg-white/10 px-2 py-1 rounded">johndoe@gmail.com</code>, all of these variations will deliver to your inbox:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><code className="bg-white/10 px-2 py-1 rounded">john.doe@gmail.com</code></li>
                <li><code className="bg-white/10 px-2 py-1 rounded">j.ohndoe@gmail.com</code></li>
                <li><code className="bg-white/10 px-2 py-1 rounded">j.o.h.n.d.o.e@gmail.com</code></li>
              </ul>
              <p className="mb-4">
                Our generator creates all possible dot variations of your Gmail address, which you can use for:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Creating multiple accounts on websites that require unique emails</li>
                <li>Organizing emails by using different variations for different services</li>
                <li>Tracking which services share your email with others</li>
              </ul>
            </div>
            <div className="md:flex-1">
              <Image
                src="/dot-trick-illustration.svg"
                alt="Gmail Dot Trick Explanation"
                width={600}
                height={300}
                className="object-contain"
              />
            </div>
          </div>
          <div className="bg-[var(--primary)]/10 p-4 rounded-lg mt-6">
            <h3 className="text-xl font-semibold mb-2">Important Note:</h3>
            <p>This trick only works with Gmail addresses and does not work with other email providers.</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Other Gmail <span className="gradient-text">Features</span> You Should Know
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="glass-effect p-6">
              <div className="w-12 h-12 rounded-full bg-[var(--primary)]/10 flex items-center justify-center mb-4">
                <Image 
                  src={feature.iconSrc}
                  alt={feature.title}
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="opacity-80">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tips Section */}
      <section id="tips" className="section px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Essential <span className="gradient-text">Tips</span> & Tricks
        </h2>
        <div className="glass-effect p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tips.map((tip, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[var(--primary)]/10 flex-shrink-0 flex items-center justify-center">
                  <span className="font-bold text-[var(--primary)]">{index + 1}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{tip.title}</h3>
                  <p className="opacity-80">{tip.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="section px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Helpful <span className="gradient-text">Resources</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <a 
              href={resource.link} 
              target="_blank" 
              rel="noopener noreferrer"
              key={index} 
              className="glass-effect p-6 hover:translate-y-[-5px] block"
            >
              <h3 className="text-xl font-semibold mb-3">{resource.title}</h3>
              <p className="opacity-80 mb-4">{resource.description}</p>
              <span className="text-[var(--primary)] font-medium flex items-center gap-2">
                Learn More <span>→</span>
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="section px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="glass-effect p-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated with Gmail Tips</h2>
          <p className="opacity-80 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest Gmail tips, tricks, and productivity hacks directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-2 rounded-full border border-[var(--glass-border)] bg-white/10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            />
            <button className="btn-primary whitespace-nowrap">Subscribe</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 py-8 px-4 border-t border-[var(--glass-border)]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Image 
              src="/gmail-logo.svg" 
              alt="Gmail Logo" 
              width={24} 
              height={24}
              className="object-contain"
            />
            <span className="font-bold">Dot Trik Gmail</span>
          </div>
          <div className="flex gap-6">
            <a 
              href="#generator" 
              className="hover:text-[var(--primary)] transition-colors"
              onClick={(e) => handleSmoothScroll(e)}
            >
              Privacy Policy
            </a>
            <a 
              href="#features" 
              className="hover:text-[var(--primary)] transition-colors"
              onClick={(e) => handleSmoothScroll(e)}
            >
              Terms of Service
            </a>
            <a 
              href="#" 
              className="hover:text-[var(--primary)] transition-colors"
            >
              Contact
            </a>
          </div>
          <p className="text-sm opacity-70"> {new Date().getFullYear()} Dot Trik Gmail. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

// Sample data
const features = [
  {
    iconSrc: "/icons/smart-compose.svg",
    title: "Smart Compose",
    description: "Let Gmail intelligently autocomplete your sentences as you type to save time."
  },
  {
    iconSrc: "/icons/advanced-search.svg",
    title: "Advanced Search",
    description: "Master Gmail's powerful search operators to find any email in seconds."
  },
  {
    iconSrc: "/icons/schedule-send.svg",
    title: "Schedule Send",
    description: "Write emails now and schedule them to be sent at the perfect time."
  },
  {
    iconSrc: "/icons/email-templates.svg",
    title: "Email Templates",
    description: "Create and save templates for messages you send frequently."
  },
  {
    iconSrc: "/icons/mobile-optimization.svg",
    title: "Mobile Optimization",
    description: "Get the most out of Gmail on your smartphone with these mobile-specific tricks."
  },
  {
    iconSrc: "/icons/security-features.svg",
    title: "Security Features",
    description: "Protect your account with Gmail's advanced security features and best practices."
  }
];

const tips = [
  {
    title: "Use Keyboard Shortcuts",
    description: "Enable keyboard shortcuts in Settings to navigate and manage emails faster."
  },
  {
    title: "Create Filters",
    description: "Set up filters to automatically organize incoming emails based on sender, subject, or content."
  },
  {
    title: "Use Labels Effectively",
    description: "Create a system of nested labels to categorize emails for better organization."
  },
  {
    title: "Enable Undo Send",
    description: "Set a longer 'undo send' window to catch mistakes before emails are delivered."
  },
  {
    title: "Use Multiple Inboxes",
    description: "Configure multiple inboxes to view different categories of emails side by side."
  },
  {
    title: "Enable Offline Mode",
    description: "Access and work with your emails even when you don't have an internet connection."
  }
];

const resources = [
  {
    title: "Gmail Keyboard Shortcuts Cheatsheet",
    description: "Download our comprehensive guide to all Gmail keyboard shortcuts.",
    link: "#"
  },
  {
    title: "Gmail Search Operators Guide",
    description: "Learn how to use advanced search operators to find any email instantly.",
    link: "#"
  },
  {
    title: "Gmail Productivity Course",
    description: "A complete video course to master Gmail and boost your productivity.",
    link: "#"
  }
];

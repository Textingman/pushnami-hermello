import Link from 'next/link';
import { Shield, Target, Users, TrendingUp, Award, BarChart3 } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-[#F6B26B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <img src="/logo.png" alt="Hermello" className="h-10 w-auto" />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-[#4A234F] hover:text-[#272329] px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link href="/about" className="text-[#272329] hover:text-[#272329] px-3 py-2 rounded-md text-sm font-medium">
                  About
                </Link>
                <Link href="/privacy" className="text-[#4A234F] hover:text-[#272329] px-3 py-2 rounded-md text-sm font-medium">
                  Privacy
                </Link>
                <Link href="/terms" className="text-[#4A234F] hover:text-[#272329] px-3 py-2 rounded-md text-sm font-medium">
                  Terms
                </Link>
                <Link href="/contact" className="text-[#4A234F] hover:text-[#272329] px-3 py-2 rounded-md text-sm font-medium">
                  Contact
                </Link>
                <Link href="/signup" className="bg-[#F26B5E] text-[#272329] hover:bg-[#d4503f] px-4 py-2 rounded-md text-sm font-semibold">
                  Request Access
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#FFF8F2] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-extrabold text-[#272329] mb-6">
              About Hermello
            </h1>
            <p className="text-xl text-[#4A234F] max-w-3xl mx-auto">
              We&apos;re building the future of employee engagement — helping companies of all sizes create recognition programs that actually work, drive retention, and turn employees into advocates.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[#272329] mb-6">Our Mission</h2>
            <p className="text-lg text-[#4A234F] mb-4">
              Hermello was built to solve a fundamental workplace problem: companies spend enormous resources acquiring talent, yet invest almost nothing in keeping employees engaged, recognized, and motivated to stay.
            </p>
            <p className="text-lg text-[#4A234F] mb-4">
              We provide a simple, powerful employee engagement platform that makes it easy to recognize effort, reward performance, and build a culture people genuinely love — from day one through every milestone.
            </p>
            <p className="text-lg text-[#4A234F]">
              Our goal is to make enterprise-grade engagement programs accessible to every workplace — from small teams to large enterprises.
            </p>
          </div>
          <div className="bg-[#FFF8F2] rounded-2xl p-8 border border-[#F6B26B]">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-[#F26B5E] rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6 text-[#272329]" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-[#272329] mb-2">Results-Driven</h3>
                  <p className="text-[#4A234F]">
                    Every feature is built to drive measurable outcomes — higher engagement, lower turnover, and stronger team culture.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-[#F26B5E] rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-[#272329]" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-[#272329] mb-2">Privacy First</h3>
                  <p className="text-[#4A234F]">
                    Employee data is protected with enterprise-grade security. We never sell employee data to third parties.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-[#F26B5E] rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-[#272329]" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-[#272329] mb-2">Built to Scale</h3>
                  <p className="text-[#4A234F]">
                    Start with a simple recognition program and grow into advanced tiers, segmentation, and team-wide automation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-[#FFF8F2] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#272329] mb-4">Why Companies Choose Hermello</h2>
            <p className="text-xl text-[#4A234F]">
              Trusted by teams that understand the value of keeping employees engaged and recognized
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#F26B5E] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-[#272329]" />
              </div>
              <h3 className="text-lg font-semibold text-[#272329] mb-2">Flexible Recognition</h3>
              <p className="text-[#4A234F]">
                Points, badges, peer shoutouts, milestone rewards — build the program that fits your culture.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#F26B5E] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-[#272329]" />
              </div>
              <h3 className="text-lg font-semibold text-[#272329] mb-2">Engagement Analytics</h3>
              <p className="text-[#4A234F]">
                Understand exactly which programs drive the most participation, morale, and retention.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#F26B5E] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-[#272329]" />
              </div>
              <h3 className="text-lg font-semibold text-[#272329] mb-2">Multi-Team Support</h3>
              <p className="text-[#4A234F]">
                Run engagement programs across multiple departments, locations, or remote teams from one dashboard.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#F26B5E] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-[#272329]" />
              </div>
              <h3 className="text-lg font-semibold text-[#272329] mb-2">Easy Onboarding</h3>
              <p className="text-[#4A234F]">
                Employees join with a simple Company ID — no complex setup, no IT required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#4A234F] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Build a Culture People Love?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join companies using Hermello to recognize, reward, and retain their best people. Request access today.
          </p>
          <Link
            href="/signup"
            className="inline-block px-8 py-4 bg-[#F26B5E] text-[#272329] text-lg font-semibold rounded-lg hover:bg-[#d4503f] transition-colors shadow-lg"
          >
            Request Access
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#4A234F] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <span className="text-2xl font-extrabold text-white tracking-tight">Hermello</span>
              <p className="text-gray-400 mt-3">
                Employee engagement software that drives real culture.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/signup" className="text-gray-400 hover:text-white">
                    Request Access
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-400 hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/sms-policy" className="text-gray-400 hover:text-white">
                    SMS Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">
                support@tryhermello.com
              </p>
              <p className="text-gray-400 mt-1">
                (855) 610-6247
              </p>
              <p className="text-gray-400 mt-2 text-sm">
                7421 Burnet Rd, Suite 184<br />
                Austin, TX 78757<br />
                United States
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400">
            <p>&copy; 2026 Hermello. All rights reserved.</p>
            <div className="flex items-center gap-4">
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/hermello/?viewAsMember=true" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              {/* Google */}
              <a href="https://share.google/Nl9xEk7kfvDH5ZuOs" target="_blank" rel="noopener noreferrer" aria-label="Google" className="text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

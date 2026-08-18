import Link from 'next/link';
import { Star, TrendingUp, Users, Award, BarChart3, Zap, Heart, CheckCircle } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-[#F6B26B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <span className="text-2xl font-extrabold text-[#272329] tracking-tight">Hermello</span>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-[#272329] hover:text-[#272329] px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link href="/about" className="text-[#4A234F] hover:text-[#272329] px-3 py-2 rounded-md text-sm font-medium">
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <div className="inline-flex items-center bg-[#F26B5E] text-[#272329] px-4 py-2 rounded-full text-sm font-semibold mb-8">
            <Star className="w-4 h-4 mr-2" />
            Reimagining How Teams Stay Engaged
          </div>
          <h1 className="text-5xl font-extrabold text-[#272329] sm:text-6xl md:text-7xl leading-tight">
            Build a Workplace Where
            <span className="block text-[#F26B5E] [-webkit-text-stroke:2px_#272329]">People Actually Thrive</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-[#4A234F]">
            From peer recognition to performance rewards, Hermello gives your team the tools to feel valued every day. Stronger culture, lower turnover, better results.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link
              href="/signup"
              className="px-8 py-4 bg-[#F26B5E] text-[#272329] text-lg font-semibold rounded-lg hover:bg-[#d4503f] transition-colors shadow-md"
            >
              Request Access
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 bg-white text-[#272329] text-lg font-semibold rounded-lg hover:bg-[#FFF8F2] transition-colors border-2 border-[#4A234F]"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#4A234F] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-extrabold text-[#F26B5E]">4x</p>
              <p className="text-white/70 mt-2">More productive when employees feel recognized</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-[#F26B5E]">59%</p>
              <p className="text-white/70 mt-2">Reduction in turnover with structured recognition</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-[#F26B5E]">21%</p>
              <p className="text-white/70 mt-2">Increase in profitability from engaged workforces</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-[#F26B5E]">87%</p>
              <p className="text-white/70 mt-2">Of employees say recognition motivates them</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#272329]">One Platform. Every Tool You Need.</h2>
          <p className="mt-4 text-xl text-[#4A234F]">
            Built for teams that want to recognize, reward, and retain their best people
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-[#F6B26B]">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 bg-[#F26B5E] rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 text-[#272329]" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-[#272329] text-center mb-3">
              Points & Recognition
            </h3>
            <p className="text-[#4A234F] text-center">
              Reward employees for hitting milestones, going above and beyond, peer recognition, and any custom achievement that matters to your culture.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-[#F6B26B]">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 bg-[#F26B5E] rounded-full flex items-center justify-center">
                <BarChart3 className="w-8 h-8 text-[#272329]" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-[#272329] text-center mb-3">
              Engagement Analytics
            </h3>
            <p className="text-[#4A234F] text-center">
              Track participation rates, recognition trends, team morale scores, and at-risk employees with live dashboards and actionable insights.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-[#F6B26B]">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 bg-[#F26B5E] rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-[#272329]" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-[#272329] text-center mb-3">
              Team Segmentation
            </h3>
            <p className="text-[#4A234F] text-center">
              Organize employees by department, tenure, performance tier, and role to deliver personalized recognition experiences at scale.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-[#FFF8F2] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#272329]">How Employee Engagement Works</h2>
            <p className="mt-4 text-xl text-[#4A234F]">
              Get your team energized in minutes, not months
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#F26B5E] rounded-full flex items-center justify-center font-bold text-[#272329] text-lg mr-6">1</div>
                <div>
                  <h3 className="text-2xl font-bold text-[#272329] mb-3">Set Up Your Program</h3>
                  <p className="text-lg text-[#4A234F] leading-relaxed">
                    Define your recognition structure, reward tiers, and earning rules. Customize the experience to match your company culture in minutes.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#F26B5E] rounded-full flex items-center justify-center font-bold text-[#272329] text-lg mr-6">2</div>
                <div>
                  <h3 className="text-2xl font-bold text-[#272329] mb-3">Recognize Your Team</h3>
                  <p className="text-lg text-[#4A234F] leading-relaxed">
                    Employees earn points for every achievement — project completions, peer shoutouts, attendance streaks, birthdays, and more.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#F26B5E] rounded-full flex items-center justify-center font-bold text-[#272329] text-lg mr-6">3</div>
                <div>
                  <h3 className="text-2xl font-bold text-[#272329] mb-3">Watch Culture Thrive</h3>
                  <p className="text-lg text-[#4A234F] leading-relaxed">
                    Track results in real time. See which programs drive the most engagement and optimize your culture for maximum retention and performance.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#4A234F] rounded-2xl p-10 text-white">
              <div className="space-y-6">
                <div className="flex items-center justify-between bg-white/10 rounded-xl p-4">
                  <div className="flex items-center">
                    <Award className="w-8 h-8 text-[#F26B5E] mr-3" />
                    <div>
                      <p className="font-semibold">Top Performer Badge</p>
                      <p className="text-white/60 text-sm">Sarah M. — Q2 Sales Leader</p>
                    </div>
                  </div>
                  <span className="text-[#F26B5E] font-bold">+500 pts</span>
                </div>
                <div className="flex items-center justify-between bg-white/10 rounded-xl p-4">
                  <div className="flex items-center">
                    <Heart className="w-8 h-8 text-[#F26B5E] mr-3" />
                    <div>
                      <p className="font-semibold">Peer Recognition</p>
                      <p className="text-white/60 text-sm">James K. — &quot;Team MVP&quot;</p>
                    </div>
                  </div>
                  <span className="text-[#F26B5E] font-bold">+150 pts</span>
                </div>
                <div className="flex items-center justify-between bg-white/10 rounded-xl p-4">
                  <div className="flex items-center">
                    <TrendingUp className="w-8 h-8 text-[#F26B5E] mr-3" />
                    <div>
                      <p className="font-semibold">Engagement This Month</p>
                      <p className="text-white/60 text-sm">Across all departments</p>
                    </div>
                  </div>
                  <span className="text-[#F26B5E] font-bold">+41%</span>
                </div>
                <div className="flex items-center justify-between bg-white/10 rounded-xl p-4">
                  <div className="flex items-center">
                    <Zap className="w-8 h-8 text-[#F26B5E] mr-3" />
                    <div>
                      <p className="font-semibold">Milestone Bonus</p>
                      <p className="text-white/60 text-sm">Maria L. — 2-Year Anniversary</p>
                    </div>
                  </div>
                  <span className="text-[#F26B5E] font-bold">+300 pts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#272329]">Built for Every Workplace</h2>
          <p className="mt-4 text-xl text-[#4A234F]">
            Whether you&apos;re a startup or an enterprise, engagement scales with you
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="border-2 border-[#F6B26B] rounded-xl p-8 hover:border-[#F26B5E] transition-colors">
            <h3 className="text-xl font-bold text-[#272329] mb-4">Small & Mid-Size Teams</h3>
            <p className="text-[#4A234F] mb-6">
              Build a strong culture from day one. Recognize wins, celebrate milestones, and keep your team motivated as you grow.
            </p>
            <ul className="space-y-2 text-[#4A234F]">
              <li className="flex items-center"><span className="w-2 h-2 bg-[#F26B5E] rounded-full mr-3"></span>Easy onboarding</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-[#F26B5E] rounded-full mr-3"></span>Peer-to-peer recognition</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-[#F26B5E] rounded-full mr-3"></span>Birthday & work anniversary rewards</li>
            </ul>
          </div>

          <div className="border-2 border-[#F26B5E] rounded-xl p-8 bg-[#FFFDE7]">
            <div className="inline-block bg-[#F26B5E] text-[#272329] text-xs font-bold px-3 py-1 rounded-full mb-4">MOST POPULAR</div>
            <h3 className="text-xl font-bold text-[#272329] mb-4">Corporate & Enterprise</h3>
            <p className="text-[#4A234F] mb-6">
              Drive engagement across departments, locations, and remote teams with a unified recognition platform that scales.
            </p>
            <ul className="space-y-2 text-[#4A234F]">
              <li className="flex items-center"><span className="w-2 h-2 bg-[#F26B5E] rounded-full mr-3"></span>Multi-department support</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-[#F26B5E] rounded-full mr-3"></span>Manager-led recognition</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-[#F26B5E] rounded-full mr-3"></span>Advanced analytics & reporting</li>
            </ul>
          </div>

          <div className="border-2 border-[#F6B26B] rounded-xl p-8 hover:border-[#F26B5E] transition-colors">
            <h3 className="text-xl font-bold text-[#272329] mb-4">Remote & Hybrid Teams</h3>
            <p className="text-[#4A234F] mb-6">
              Keep distributed teams connected and motivated. Bridge the gap between remote and in-office employees with digital recognition.
            </p>
            <ul className="space-y-2 text-[#4A234F]">
              <li className="flex items-center"><span className="w-2 h-2 bg-[#F26B5E] rounded-full mr-3"></span>Virtual shoutouts & badges</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-[#F26B5E] rounded-full mr-3"></span>SMS & email notifications</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-[#F26B5E] rounded-full mr-3"></span>Team leaderboards</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-[#FFF8F2] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#272329]">Why Employees Love Hermello</h2>
            <p className="mt-4 text-xl text-[#4A234F]">Real rewards for real effort</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <CheckCircle className="w-7 h-7 text-[#272329]" />, title: 'Instant Recognition', desc: 'Get recognized the moment you achieve something great — no waiting for annual reviews.' },
              { icon: <Award className="w-7 h-7 text-[#272329]" />, title: 'Meaningful Rewards', desc: 'Redeem points for gift cards, extra PTO, experiences, and perks that actually matter.' },
              { icon: <Users className="w-7 h-7 text-[#272329]" />, title: 'Team Connection', desc: 'Celebrate wins together. Peer recognition builds stronger bonds and a more supportive culture.' },
              { icon: <TrendingUp className="w-7 h-7 text-[#272329]" />, title: 'Career Growth', desc: 'Track your achievements, build your recognition history, and showcase your impact over time.' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="bg-[#F26B5E] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#272329] mb-2">{item.title}</h3>
                <p className="text-[#4A234F]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-[#4A234F] rounded-2xl shadow-2xl overflow-hidden">
          <div className="px-6 py-16 sm:px-12 sm:py-20 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Your Team Deserves Better Than Annual Reviews
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Give your employees the recognition they deserve — in real time, every day. Join companies using Hermello to build cultures that last.
            </p>
            <Link
              href="/signup"
              className="inline-block px-8 py-4 bg-[#F26B5E] text-[#272329] text-lg font-semibold rounded-lg hover:bg-[#d4503f] transition-colors shadow-lg"
            >
              Request Access
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#4A234F] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <span className="text-2xl font-extrabold text-white tracking-tight">Hermello</span>
              <p className="text-gray-400 mt-3">
                Hermello — employee engagement software that drives real culture.
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

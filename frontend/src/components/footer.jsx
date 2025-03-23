import { 
    Youtube, 
    Linkedin, 
    Twitter, 
    Instagram, 
    Github, 
    Mail, 
    Send, 
    MessageSquare,
    Book,
    GraduationCap,
    Video,
    FileText 
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Organization Column */}
          <div className="space-y-6">
            <h3 className="font-medium text-4xl border-b border-slate-700 pb-2 inline-block">
              Organization
            </h3>
            <ul className="space-y-5 text-2xl">
              <li><a href="#" className="hover:text-blue-400 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Join</a></li>
            </ul>
          </div>

          {/* Community Column */}
          <div className="space-y-6">
            <h3 className="font-medium text-4xl border-b border-slate-700 pb-2 inline-block">
              Community
            </h3>
            <ul className="space-y-5 text-2xl">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Telegram</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Events Column */}
          <div className="space-y-6">
            <h3 className="font-medium text-4xl border-b border-slate-700 pb-2 inline-block">
              Events
            </h3>
            <ul className="space-y-5 text-2xl">
              <li className="flex items-center">
                <Book className="mr-2" size={24} />
                <a href="#" className="hover:text-blue-400 transition-colors">Courses</a>
              </li>
              <li className="flex items-center">
                <GraduationCap className="mr-2" size={24} />
                <a href="#" className="hover:text-blue-400 transition-colors">Webinars</a>
              </li>
            </ul>
          </div>

          {/* Socials Column */}
          <div className="space-y-6">
            <h3 className="font-medium text-4xl border-b border-slate-700 pb-2 inline-block">
              Socials
            </h3>
            <ul className="space-y-5 text-2xl">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Linkedin</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">YouTube</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-6">
            <h3 className="font-medium text-4xl border-b border-slate-700 pb-2 inline-block">
              Contact
            </h3>
            <p className="text-2xl">
              <a href="mailto:contact@learnhub.org" className="hover:text-blue-400 transition-colors">
                contact@learnhub.org
              </a>
            </p>
          </div>
        </div>

        {/* Logo and Copyright Section */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Logo and Text */}
            <div className="flex items-center mb-6 md:mb-0">
              <div className="flex mr-2">
                <div className="bg-blue-500 w-8 h-8 transform rotate-45 mr-1"></div>
                <div className="bg-cyan-400 w-8 h-8 transform rotate-45"></div>
              </div>
              <span className="text-5xl font-semibold ml-2">LearnHub</span>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-6">
              <a href="#" className="text-white hover:text-blue-400 transition-colors">
                <Youtube size={28} />
              </a>
              <a href="#" className="text-white hover:text-blue-400 transition-colors">
                <Linkedin size={28} />
              </a>
              <a href="#" className="text-white hover:text-blue-400 transition-colors">
                <Twitter size={28} />
              </a>
              <a href="#" className="text-white hover:text-blue-400 transition-colors">
                <Instagram size={28} />
              </a>
              <a href="#" className="text-white hover:text-blue-400 transition-colors">
                <Github size={28} />
              </a>
              <a href="#" className="text-white hover:text-blue-400 transition-colors">
                <Mail size={28} />
              </a>
              <a href="#" className="text-white hover:text-blue-400 transition-colors">
                <Send size={28} />
              </a>
              <a href="#" className="text-white hover:text-blue-400 transition-colors">
                <MessageSquare size={28} />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center mt-8">
            <p className="text-2xl">© 2024 LearnHub. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

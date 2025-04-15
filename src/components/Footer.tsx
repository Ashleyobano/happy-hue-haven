
import { Link } from "react-router-dom";
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white px-6 md:px-12 lg:px-24 pt-16 pb-8 border-t border-gray-100 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <Link to="/" className="text-2xl font-display font-bold gradient-text mb-4 inline-block">
              Lifestyle Bloom
            </Link>
            <p className="text-gray-600 mb-6">
              Curating a colorful and balanced approach to modern living.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-blog-coral transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blog-coral transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blog-coral transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blog-coral transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><Link to="/lifestyle" className="text-gray-600 hover:text-blog-coral transition-colors">Lifestyle</Link></li>
              <li><Link to="/food" className="text-gray-600 hover:text-blog-coral transition-colors">Food</Link></li>
              <li><Link to="/travel" className="text-gray-600 hover:text-blog-coral transition-colors">Travel</Link></li>
              <li><Link to="/wellness" className="text-gray-600 hover:text-blog-coral transition-colors">Wellness</Link></li>
              <li><Link to="/garden" className="text-gray-600 hover:text-blog-coral transition-colors">Garden</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-blog-coral transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-blog-coral transition-colors">Contact</Link></li>
              <li><Link to="/advertise" className="text-gray-600 hover:text-blog-coral transition-colors">Advertise</Link></li>
              <li><Link to="/privacy" className="text-gray-600 hover:text-blog-coral transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-blog-coral transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Get in Touch</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">hello@lifestylebloom.com</li>
              <li className="text-gray-600">123 Blossom Street</li>
              <li className="text-gray-600">San Francisco, CA 94107</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} Lifestyle Bloom. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-gray-500 text-sm hover:text-blog-coral transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="text-gray-500 text-sm hover:text-blog-coral transition-colors">
              Terms
            </Link>
            <Link to="/sitemap" className="text-gray-500 text-sm hover:text-blog-coral transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

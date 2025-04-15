
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X, User } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="py-4 px-6 md:px-12 lg:px-24 animate-fade-in bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <div className="flex items-center justify-between">
        <Link to="/" className="text-2xl md:text-3xl font-display font-bold gradient-text">
          Lifestyle Bloom
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-8">
            <Link to="/" className="nav-link font-medium">Home</Link>
            <Link to="/lifestyle" className="nav-link font-medium">Lifestyle</Link>
            <Link to="/food" className="nav-link font-medium">Food</Link>
            <Link to="/travel" className="nav-link font-medium">Travel</Link>
            <Link to="/wellness" className="nav-link font-medium">Wellness</Link>
          </div>
          <div className="flex gap-3">
            <Button variant="ghost" size="sm" className="gap-1.5 rounded-full">
              <User size={18} />
              <span>Login</span>
            </Button>
            <Button size="sm" className="rounded-full bg-blog-coral hover:bg-blog-coral/90">Sign up</Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 py-4 flex flex-col gap-6 animate-fade-in">
          <div className="flex flex-col gap-4">
            <Link to="/" className="nav-link font-medium py-2">Home</Link>
            <Link to="/lifestyle" className="nav-link font-medium py-2">Lifestyle</Link>
            <Link to="/food" className="nav-link font-medium py-2">Food</Link>
            <Link to="/travel" className="nav-link font-medium py-2">Travel</Link>
            <Link to="/wellness" className="nav-link font-medium py-2">Wellness</Link>
          </div>
          <div className="flex gap-3 mt-2">
            <Button variant="ghost" size="sm" className="gap-1.5 rounded-full">
              <User size={18} />
              <span>Login</span>
            </Button>
            <Button size="sm" className="rounded-full bg-blog-coral hover:bg-blog-coral/90">Sign up</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

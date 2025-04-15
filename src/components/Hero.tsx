
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero-gradient py-16 md:py-24 px-6 md:px-12 lg:px-24 animate-fade-in">
      <div className="max-w-5xl mx-auto flex flex-col gap-8 items-center text-center">
        <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight">
          Embracing the <span className="gradient-text">colorful moments</span> of everyday life
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl">
          Discover inspiration for a vibrant, balanced lifestyle through our curated stories, tips, and guides for modern living.
        </p>
        <Button className="rounded-full mt-4 bg-blog-coral hover:bg-blog-coral/90 px-6 py-6 text-lg gap-2">
          Explore Articles <ArrowRight size={18} />
        </Button>
      </div>
    </section>
  );
};

export default Hero;

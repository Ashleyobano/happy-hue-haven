
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useToast } from "./ui/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (email) {
      toast({
        title: "Subscription successful!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-gradient-to-r from-blog-blush/30 to-blog-lavender/30 animate-fade-in">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
          Join Our Newsletter
        </h2>
        <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
          Get our latest articles, tips, and inspiration delivered straight to your inbox. No spam, just the good stuff.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="rounded-full px-6 border-gray-200"
          />
          <Button type="submit" className="rounded-full bg-blog-coral hover:bg-blog-coral/90">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;

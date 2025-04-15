
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Clock, Heart } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "10 Morning Rituals to Boost Your Energy",
    excerpt: "Start your day right with these energizing morning habits that will transform your routine.",
    category: "Wellness",
    readTime: "5 min read",
    likes: 124,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    color: "bg-blog-mint"
  },
  {
    id: 2,
    title: "Simple Yet Elegant Summer Table Setting Ideas",
    excerpt: "Transform your dining experience with these effortless table decoration ideas perfect for summer gatherings.",
    category: "Lifestyle",
    readTime: "4 min read",
    likes: 89,
    image: "https://images.unsplash.com/photo-1559554706-e823489a5eb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    color: "bg-blog-coral"
  },
  {
    id: 3,
    title: "5 Plant-Based Recipes Everyone Will Love",
    excerpt: "Delicious plant-based meals that will satisfy even the most dedicated meat-eaters in your family.",
    category: "Food",
    readTime: "7 min read",
    likes: 215,
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    color: "bg-blog-sunshine"
  },
  {
    id: 4,
    title: "Budget-Friendly Weekend Getaways",
    excerpt: "Discover charming destinations perfect for a refreshing weekend escape without breaking the bank.",
    category: "Travel",
    readTime: "6 min read",
    likes: 156,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    color: "bg-blog-lavender"
  },
];

const FeaturedPosts = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
          Featured Articles
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <Link to={`/post/${post.id}`} key={post.id} className="group">
              <Card className="post-card h-full flex flex-col">
                <CardHeader className="p-0">
                  <div className="relative h-56 w-full overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className={`absolute top-4 left-4 ${post.color} text-white border-0`}>
                      {post.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow p-6">
                  <h3 className="text-xl font-display font-bold mb-3 group-hover:text-blog-coral transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-1.5">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Heart size={14} />
                    <span>{post.likes}</span>
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;

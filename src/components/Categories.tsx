
import { Link } from "react-router-dom";
import { Coffee, Utensils, Plane, Flower, Heart } from "lucide-react";

const categories = [
  {
    name: "Lifestyle",
    icon: Coffee,
    color: "bg-blog-peach",
    description: "Home decor, organization, and daily life",
    path: "/lifestyle"
  },
  {
    name: "Food",
    icon: Utensils,
    color: "bg-blog-mint",
    description: "Recipes, meal planning, and food adventures",
    path: "/food"
  },
  {
    name: "Travel",
    icon: Plane,
    color: "bg-blog-lavender",
    description: "Destinations, travel tips, and itineraries",
    path: "/travel"
  },
  {
    name: "Wellness",
    icon: Heart,
    color: "bg-blog-coral",
    description: "Self-care, fitness, and mental wellbeing",
    path: "/wellness"
  },
  {
    name: "Garden",
    icon: Flower,
    color: "bg-blog-sunshine",
    description: "Plants, outdoor spaces, and green living",
    path: "/garden"
  }
];

const Categories = () => {
  return (
    <section className="py-16 bg-gray-50 px-6 md:px-12 lg:px-24 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">
          Explore by Category
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Discover content tailored to your interests across our diverse collection of topics
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((category) => (
            <Link 
              to={category.path} 
              key={category.name}
              className="flex flex-col items-center p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all border border-gray-100"
            >
              <div className={`${category.color} p-4 rounded-full mb-4`}>
                <category.icon size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{category.name}</h3>
              <p className="text-gray-600 text-sm text-center">{category.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;

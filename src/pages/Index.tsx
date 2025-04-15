
import Hero from "@/components/Hero";
import FeaturedPosts from "@/components/FeaturedPosts";
import Categories from "@/components/Categories";
import Newsletter from "@/components/Newsletter";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <FeaturedPosts />
      <Categories />
      <Newsletter />
    </main>
  );
};

export default Index;

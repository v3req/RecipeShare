import CommentsSection from "./CommentsSection";
import DetailsSection from "./DetailsSection";

export default function DetailsPageSection() {
  return (
    <section id="recipe-details" >
    <div className="container">
           <DetailsSection title="Fresh Garden Salad" description="Fresh vegetables with your favorite dressing." imageUrl="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80" category='Italian' difficulty="Easy" time="15 min" servings={4} ingridients='tomato, something' instructions='prepare'/>
           <CommentsSection />
    </div>
  </section>
  );
}
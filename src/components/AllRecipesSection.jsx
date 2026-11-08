import RecipeCard from "./RecipeCard";

export default function AllRecipesSection() {
  return (
    <section id="explore" >
    <div className="container">
      <div className="page-header">
        <h1>Explore Recipes</h1>
        <p>Browse delicious ideas for your next meal.</p>
      </div>
      <div className="recipe-grid">
        
        <RecipeCard title="Fresh Garden Salad" description="Fresh vegetables with your favorite dressing." imageUrl="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80"  time="15 min" difficulty="Easy" />
        <RecipeCard title="Homemade Pizza" description="Cheesy pizza topped with fresh ingredients." imageUrl="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80"  time="40 min" difficulty="Medium" />
        <RecipeCard title="Strawberry Cake" description="A sweet treat made for sharing." imageUrl="https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80"  time="50 min" difficulty="Medium" />
        <RecipeCard title="Healthy Buddha Bowl" description="A colorful bowl full of delicious ingredients." imageUrl="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80" />

        
      </div>
    </div>
  </section>
  );
}
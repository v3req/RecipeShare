import { useEffect, useState } from "react";
import { apiKey, baseUrl } from "../../api/baseurl";
import CommentsSection from "./CommentsSection";
import DetailsSection from "./DetailsSection";

export default function DetailsPageSection({
  id,
  onClose
}) {
  const [recipe, setRecipe] = useState(null);
  useEffect(() => {
    fetch(baseUrl + `recipes?=eq.${id}`, {
        method: 'GET',
         headers: {
        'apikey': apiKey,}
    })
      .then(response => response.json())
      .then(data => setRecipe(data[0]))
      .catch(error => console.error('Error fetching recipes:', error));
  },[id]);
  

  return (
    <section id="recipe-details" >
    <div className="container">
           <DetailsSection {...recipe} onClose = {onClose}/>
           <CommentsSection recipeId = {id}/>
    </div>
  </section>
  );
}
import { useState, useEffect } from 'react'
import Header from './components/header/Header.jsx'
import HomePage from './components/HomePage/HomePage.jsx'
import LoginSection from './components/login/Login.jsx'
import SignupSection from './components/register/Register.jsx'
import Catalog from './components/catalog/Catalog.jsx'
import CreateRecipeSection from './components/create-recipe/CreateRecipe.jsx'
import EditRecipeSection from './components/edit-recipe/EditRecipe.jsx'
import DetailsPageSection from './components/details/details.jsx'
import FooterSection from './components/footer/Footer.jsx'
import { apiKey, baseUrl } from './api/baseurl.js'
import { Route, Routes } from "react-router"



function App() {

   const [recipes, setRecipes] = useState([]);
   useEffect(() => {
      fetch(baseUrl + 'recipes', {
         method: 'GET',
         headers: {
            'apikey': apiKey,}
      })
         .then(response => response.json())
         .then(data => setRecipes(data))
         .catch(error => console.error('Error fetching recipes:', error));
   }, []);

   const [selectedRecipe, setSelectedRecipe] = useState(null)

   const [showAllRecipesModal, setShowAllRecipesModal] = useState(false)
   
 
   const [showDetails, setShowDetails] = useState(false)
   const clickRecipeCardHandler = (recipeId) => {
      setShowDetails(true)
      setShowAllRecipesModal(false)
      setSelectedRecipe(recipeId)
   }


    const hideModalHandler = (e) => {
    e.preventDefault();
    setShowDetails(false);
    setShowAllRecipesModal(true);
    setSelectedRecipe(null)
  }

  return (
   <>

    <Header />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/catalog" element={<Catalog recipes={recipes} onClickRecipeCard = {clickRecipeCardHandler}/>} />
                <Route path="/games/create" element={<CreateRecipeSection />} />
                <Route path="/games/:gameId" element={<DetailsPageSection recipeId = {selectedRecipe} onClose = {hideModalHandler}/>} />
                <Route path="/games/:gameId/edit" element={<EditRecipeSection />} />
                <Route path="/register" element={<SignupSection />} />
                <Route path="/login" element={<LoginSection />} />
                <Route path="/logout"  />
            </Routes>

            <FooterSection />

  
</>
  )
}

export default App

import { useState, useEffect } from 'react'
import Header from './components/HomePage/Header.jsx'
import HomePage from './components/HomePage/HoemPage.jsx'
import LoginSection from './components/LoginSection.jsx'
import SignupSection from './components/SignupSection.jsx'
import AllRecipesSection from './components/AllRecipesSection.jsx'
import CreateRecipeSection from './components/CreateRecipeSection.jsx'
import EditRecipeSection from './components/EditRecipeSection.jsx'
import DetailsPageSection from './components/DetailsPage.jsx/DetailsPageSection.jsx'
import FooterSection from './components/FooterSection.jsx'
import { apiKey, baseUrl } from './api/baseurl.js'


function App() {

   const [recipes, setRecipes] = useState([]);
   useEffect(() => {
      fetch(baseUrl, {
         method: 'GET',
         headers: {
            'apikey': apiKey,}
      })
         .then(response => response.json())
         .then(data => setRecipes(data))
         .catch(error => console.error('Error fetching recipes:', error));
   }, []);
  

  return (
   <>
  {/* ===== SHARED NAVIGATION ===== */}
  <Header />  
  {/* ==================================================
     1. HOME PAGE
     ================================================== */}
  <HomePage />
  {/* ==================================================
     2. LOGIN PAGE
     ================================================== */}
  <LoginSection />
  {/* ==================================================
     3. SIGN UP PAGE
     ================================================== */}
  <SignupSection />
  {/* ==================================================
     4. EXPLORE ALL RECIPES
     ================================================== */}
  <AllRecipesSection recipes={recipes}/>
  
  {/* ==================================================
     6. CREATE RECIPE PAGE
     ================================================== */}
  <CreateRecipeSection />
  {/* ==================================================
     7. EDIT RECIPE PAGE
     ================================================== */}
  <EditRecipeSection />
  {/* ==================================================
     8. RECIPE DETAILS & COMMENTS
     ================================================== */}
  <DetailsPageSection />
  
  {/* ===== FOOTER ===== */}
  <FooterSection />
</>
  )
}

export default App

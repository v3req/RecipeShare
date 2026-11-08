import { useState } from 'react'
import Header from './components/HomePage/Header.jsx'
import HomePage from './components/HomePage/HoemPage.jsx'
import LoginSection from './components/LoginSection.jsx'
import SignupSection from './components/SignupSection.jsx'
import AllRecipesSection from './components/AllRecipesSection.jsx'
import CreateRecipeSection from './components/CreateRecipeSection.jsx'
import EditRecipeSection from './components/EditRecipeSection.jsx'
import DetailsPageSection from './components/DetailsPage.jsx/DetailsPageSection.jsx'
import FooterSection from './components/FooterSection.jsx'


function App() {
  

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
  <AllRecipesSection />
  
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

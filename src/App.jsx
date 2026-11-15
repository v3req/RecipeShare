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
import Logout from './components/logout/Logout.jsx'
import { Route, Routes } from "react-router"



function App() {


  return (
   <>

    <Header />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/recipes/create" element={<CreateRecipeSection />} />
                <Route path="/recipes/:recipeId" element={<DetailsPageSection />} />
                <Route path="/recipes/:recipeId/edit" element={<EditRecipeSection />} />
                <Route path="/register" element={<SignupSection />} />
                <Route path="/login" element={<LoginSection />} />
                <Route path="/logout" element={<Logout/>}/>
            </Routes>

            <FooterSection />

  
</>
  )
}

export default App

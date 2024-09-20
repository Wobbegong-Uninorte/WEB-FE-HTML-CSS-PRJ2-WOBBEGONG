import React from 'react';
import ProductosDestacados from './components/ProductsMP';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Subheader from './components/Subheader';
import PLP from './components/Plplista';
import PromoImage from './components/ImagenInicio';
import Footer from './components/Footer';
import Filter from './components/Filter';


const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header
                cartLink="/cart"
                accountLink="/account"
            />
        <Subheader />
        <main>
          <Routes>
            <Route path="/" element={<h2>Home Page Content</h2>} />
          </Routes>
          <PromoImage imageId={1}/>
          <PromoImage imageId={2}/>
          <Filter></Filter>
          <PLP /> 
          <ProductosDestacados />

        </main>
        <PromoImage imageId={3}/>
        <Footer></Footer>      
      </div>
    </Router>
  );
};

export default App;
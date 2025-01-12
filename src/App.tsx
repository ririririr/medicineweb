import React from 'react';
import { useState } from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import PhoneDevice from './components/PhoneDevice';
import Contact from './components/Contact';
//import QRPage from './components/qr/QRPage';
import AboutPage from './components/about/AboutPage';
import ShopPage from './components/shop/ShopPage';
import ProductPage from './components/product/ProductPage';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  const [currentPage, setCurrentPage] = useState('what-we-do');

  const renderContent = () => {
    if (currentPage.includes('what-we-do') || 
        currentPage.includes('our-mission') || 
        currentPage.includes('who-we-are')) {
      return <AboutPage />;
    }

    switch (currentPage) {
      case 'contact':
        return <Contact />;
      case 'shop':
        return <ShopPage />;
      case 'product':
        return <ProductPage />;
      case 'phone':
        return (
          <div className="min-h-screen bg-gray-100">
            <Header />
            <PhoneDevice />
          </div>
        );
      //case 'qr':
       // return < />;
      default:
        return <AboutPage />;
    }
  };

  return (
    <LanguageProvider>
      <div>
        <Navigation setCurrentPage={setCurrentPage} />
        {renderContent()}
      </div>
    </LanguageProvider>
  );
}

export default App;
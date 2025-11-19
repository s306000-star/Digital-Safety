import React from 'react';
import Header from './components/Header';
import InfoSection from './components/InfoSection';
import RisksTable from './components/RisksTable';
import ImageGallery from './components/ImageGallery';
import LinksSection from './components/LinksSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col" dir="rtl">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 md:px-8 max-w-5xl">
        <InfoSection />
        <RisksTable />
        <ImageGallery />
        <LinksSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;

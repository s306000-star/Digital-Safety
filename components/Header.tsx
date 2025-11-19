import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-brand-700 to-brand-500 text-white shadow-lg py-10 mb-8 rounded-b-[3rem]">
      <div className="container mx-auto px-4 text-center flex flex-col items-center justify-center">
        <div className="bg-white/20 p-4 rounded-full mb-4 backdrop-blur-sm">
          <ShieldCheck size={64} className="text-white" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-2">السلامة الرقمية</h1>
        <h2 className="text-xl md:text-2xl font-light opacity-90 tracking-widest">Digital Safety</h2>
      </div>
    </header>
  );
};

export default Header;

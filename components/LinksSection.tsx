import React from 'react';
import { USEFUL_LINKS } from '../constants';
import { ExternalLink, Globe } from 'lucide-react';

const LinksSection: React.FC = () => {
  return (
    <section className="bg-slate-800 text-white rounded-2xl shadow-md p-8 my-8">
      <div className="flex items-center gap-2 mb-6">
        <Globe className="text-brand-400" size={24} />
        <h3 className="text-2xl font-bold">روابط ومصادر مفيدة</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {USEFUL_LINKS.map((link, index) => (
          <a 
            key={index} 
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-between bg-slate-700 hover:bg-brand-600 p-4 rounded-xl transition-all duration-300 group"
          >
            <span className="font-medium">{link.title}</span>
            <ExternalLink size={18} className="text-slate-400 group-hover:text-white" />
          </a>
        ))}
      </div>
    </section>
  );
};

export default LinksSection;

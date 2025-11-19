import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-12 border-t border-slate-200 py-8 text-center text-slate-500 bg-white rounded-t-3xl shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
      <div className="container mx-auto px-4 space-y-2">
        <p className="font-semibold text-lg text-brand-700">مشروع السلامة الرقمية</p>
        <div className="flex flex-col md:flex-row justify-center gap-2 md:gap-8 text-sm">
             <p>إعداد: الطالبة/الطالب (—)</p>
             <span className="hidden md:inline text-slate-300">|</span>
             <p>المدرسة: (—)</p>
             <span className="hidden md:inline text-slate-300">|</span>
             <p>السنة الدراسية: 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { Info, Lock, UserCheck, Wifi } from 'lucide-react';

const InfoSection: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Introduction Card */}
      <section className="bg-white rounded-2xl shadow-md p-8 border-r-4 border-brand-500 transform hover:-translate-y-1 transition-transform duration-300">
        <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-brand-100 text-brand-600 rounded-lg">
                <Info size={24} />
            </div>
            <h3 className="text-2xl font-bold text-brand-900">مقدمة</h3>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed">
          السلامة الرقمية هي مجموعة من الإجراءات والسلوكيات التي تساعد الطلاب على استخدام الإنترنت والأجهزة الذكية بطريقة آمنة ومسؤولة. هي الدرع الذي يحميك في العالم الافتراضي.
        </p>
      </section>

      {/* Main Info Card */}
      <section className="bg-white rounded-2xl shadow-md p-8 border-r-4 border-brand-500 transform hover:-translate-y-1 transition-transform duration-300">
         <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-brand-100 text-brand-600 rounded-lg">
                <Lock size={24} />
            </div>
            <h3 className="text-2xl font-bold text-brand-900">ما هي السلامة الرقمية؟</h3>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          تُعد السلامة الرقمية جزءاً أساسياً من حياة الطالب في العصر الحديث، حيث تساعده على حماية بياناته، خصوصيته، أجهزته، وهويته الرقمية.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex flex-col items-center text-center">
                <UserCheck className="text-brand-500 mb-2" size={32}/>
                <span className="font-semibold text-slate-700">حماية الخصوصية</span>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex flex-col items-center text-center">
                <ShieldCheck className="text-brand-500 mb-2" size={32}/>
                <span className="font-semibold text-slate-700">الوعي بالاحتيال</span>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex flex-col items-center text-center">
                <Wifi className="text-brand-500 mb-2" size={32}/>
                <span className="font-semibold text-slate-700">السلوك المسؤول</span>
            </div>
        </div>
        
        <p className="text-gray-600 mt-6 text-sm">
            وتشمل السلامة الرقمية عدة مجالات أخرى، مثل حماية الحسابات، إدارة الوقت على الإنترنت، ومعرفة السلوكيات الصحيحة أثناء استخدام وسائل التواصل.
        </p>
      </section>
    </div>
  );
};

// Helper component for local usage
const ShieldCheck = ({className, size}: {className?: string, size?: number}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
)

export default InfoSection;

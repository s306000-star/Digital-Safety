import React from 'react';
import { RISK_DATA } from '../constants';
import { AlertTriangle } from 'lucide-react';

const RisksTable: React.FC = () => {
  return (
    <section className="bg-white rounded-2xl shadow-md overflow-hidden border border-slate-200 my-8">
      <div className="bg-brand-50 p-4 border-b border-brand-100 flex items-center gap-2">
        <AlertTriangle className="text-amber-500" size={24} />
        <h3 className="text-xl font-bold text-brand-900">المخاطر والحماية</h3>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-right">
          <thead>
            <tr className="bg-slate-100 text-slate-700">
              <th className="p-4 font-bold border-b border-slate-200 w-1/4">الخطر الرقمي</th>
              <th className="p-4 font-bold border-b border-slate-200 w-1/3">الوصف</th>
              <th className="p-4 font-bold border-b border-slate-200">طريقة الحماية</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {RISK_DATA.map((item, index) => (
              <tr key={index} className="hover:bg-slate-50 transition-colors">
                <td className="p-4 font-semibold text-red-600">{item.risk}</td>
                <td className="p-4 text-slate-600">{item.description}</td>
                <td className="p-4">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium inline-block">
                        {item.protection}
                    </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default RisksTable;

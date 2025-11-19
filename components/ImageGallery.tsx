import React from 'react';

const ImageGallery: React.FC = () => {
  return (
    <section className="my-10">
      <h3 className="text-2xl font-bold text-brand-900 mb-6 text-center">معرض الصور التوضيحية</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Image 1: Technology/Code */}
        <div className="group relative overflow-hidden rounded-2xl shadow-lg aspect-video">
            <img 
                src="https://picsum.photos/seed/security/600/400" 
                alt="Digital Lock" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <p className="text-white font-bold">أمن المعلومات</p>
            </div>
        </div>

        {/* Image 2: Connection/Network */}
        <div className="group relative overflow-hidden rounded-2xl shadow-lg aspect-video">
            <img 
                src="https://picsum.photos/seed/network/600/400" 
                alt="Network Connection" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <p className="text-white font-bold">التواصل الآمن</p>
            </div>
        </div>

        {/* Image 3: Student/Learning */}
        <div className="group relative overflow-hidden rounded-2xl shadow-lg aspect-video">
            <img 
                src="https://picsum.photos/seed/laptop/600/400" 
                alt="Student Learning" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <p className="text-white font-bold">التعليم الرقمي</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;

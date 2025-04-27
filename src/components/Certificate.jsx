// src/components/Certificate.jsx
import { useState } from 'react';
import certificates from '../data/certificates';
import CertificateModal from './CertificateModal';

export default function Certificate() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-8 text-center dark:text-white border-b pb-2">
        My <span className="text-primary-500">Certificates</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {certificates.map((cert) => (
          <CertificateCard 
            key={cert.id} 
            cert={cert}
            onClick={() => setSelectedCert(cert)}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedCert && (
        <CertificateModal 
          certificate={selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      )}
    </section>
  );
}

function CertificateCard({ cert, onClick }) {
  return (
    <div 
      onClick={onClick}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-xl border border-gray-200 dark:border-gray-700 cursor-pointer"
    >
      <div className="h-48 overflow-hidden relative">
        <img 
          src={cert.imageUrl} 
          alt={cert.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/400x300?text=Certificate+Image';
            e.target.className = 'w-full h-full object-contain p-4 bg-gray-100 dark:bg-gray-700';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span className="text-white font-medium">Click to View</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 dark:text-white line-clamp-2">{cert.title}</h3>
        <div className="space-y-2">
          <p className="text-gray-600 dark:text-gray-300">
            <span className="font-semibold">Issuer:</span> {cert.issuer}
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            <span className="font-semibold">Date:</span> {cert.date}
          </p>
        </div>
      </div>
    </div>
  );
}
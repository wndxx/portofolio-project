import { useEffect, useState, useRef } from 'react';
import { X, ZoomIn, ZoomOut, Download, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

export default function CertificateModal({ certificate, onClose }) {
  const [isZoomed, setIsZoomed] = useState(false);
  const modalRef = useRef(null);

  // Close modal dengan ESC atau klik outside
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = certificate.imageUrl;
    link.download = `${certificate.title.replace(/\s+/g, '_')}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
      >
        <motion.div
          ref={modalRef}
          initial={{ y: 20, scale: 0.98 }}
          animate={{ y: 0, scale: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ type: 'spring', damping: 25 }}
          className="relative max-w-6xl w-full max-h-[90vh] bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden flex flex-col"
        >
          {/* Header dengan tombol aksi */}
          <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold dark:text-white line-clamp-1">
              {certificate.title}
            </h3>
            <div className="flex space-x-2">
              {/* <button
                onClick={handleDownload}
                className="p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition"
                aria-label="Download certificate"
                title="Download"
              >
                <Download size={20} />
              </button> */}
              <button
                onClick={onClose}
                className="p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition"
                aria-label="Close modal"
                title="Close"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Konten utama dengan zoom */}
          <div className="flex-1 overflow-hidden relative">
            <TransformWrapper
              initialScale={1}
              minScale={1}
              maxScale={5}
              onZoomChange={(ref) => setIsZoomed(ref.state.scale > 1)}
            >
              {({ zoomIn, zoomOut, resetTransform }) => (
                <>
                  <TransformComponent
                    wrapperClass="!w-full !h-full"
                    contentClass="!flex !items-center !justify-center"
                  >
                    <img
                      src={certificate.imageUrl}
                      alt={certificate.title}
                      className="max-w-full max-h-[70vh] object-contain"
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml;base64,...'; // SVG placeholder
                        e.target.className = 'w-full h-[50vh] object-contain p-8 bg-gray-100 dark:bg-gray-700';
                      }}
                      loading="eager"
                    />
                  </TransformComponent>

                  {/* Controls untuk zoom */}
                  <div className="absolute bottom-4 right-4 flex space-x-2 bg-white dark:bg-gray-700 p-2 rounded-lg shadow-md">
                    <button
                      onClick={() => zoomIn()}
                      className="p-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded transition"
                      aria-label="Zoom in"
                    >
                      <ZoomIn size={18} />
                    </button>
                    <button
                      onClick={() => zoomOut()}
                      className="p-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded transition"
                      aria-label="Zoom out"
                    >
                      <ZoomOut size={18} />
                    </button>
                    {isZoomed && (
                      <button
                        onClick={() => resetTransform()}
                        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded transition"
                        aria-label="Reset zoom"
                      >
                        <span className="text-xs">Reset</span>
                      </button>
                    )}
                  </div>
                </>
              )}
            </TransformWrapper>
          </div>

          {/* Footer dengan informasi */}
          <div className="p-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-1">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Issuer
                </p>
                <p className="dark:text-white">{certificate.issuer}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Date Earned
                </p>
                <p className="dark:text-white">{certificate.date}</p>
              </div>
              {/* <div className="flex justify-end items-end">
                <a
                  href={certificate.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors text-sm"
                >
                  Verify Certificate
                  <ExternalLink size={16} className="ml-2" />
                </a>
              </div> */}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
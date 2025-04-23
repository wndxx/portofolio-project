import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function MusicNotification() {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(true);
      
      // Auto-hide setelah 8 detik
      const autoHideTimer = setTimeout(() => {
        setShowNotification(false);
      }, 8000);
      
      return () => clearTimeout(autoHideTimer);
    }, 5000); // Muncul setelah 5 detik

    return () => clearTimeout(timer);
  }, []);

  if (!showNotification) return null;

  return (
    <div className="fixed bottom-20 right-4 z-50">
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 max-w-xs relative">
        <button
          onClick={() => setShowNotification(false)}
          className="absolute top-1 right-1 p-1 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          aria-label="Close notification"
        >
          <X size={16} />
        </button>
        <p className="text-sm text-gray-700 dark:text-gray-300 pr-4">
          <span className="font-semibold">Tip:</span> You can control the background music 
          using the player at the bottom right corner.
        </p>
      </div>
    </div>
  );
}
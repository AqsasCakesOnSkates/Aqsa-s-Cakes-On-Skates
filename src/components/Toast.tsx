import React from 'react';
import { ToastMessage } from '../types';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

interface ToastProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export const ToastContainer: React.FC<ToastProps> = ({ toasts, onDismiss }) => {
  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-2 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`pointer-events-auto flex items-start justify-between p-4 rounded-2xl shadow-xl border backdrop-blur-md transition-all transform animate-in slide-in-from-bottom-3 duration-300 ${
            toast.type === 'success'
              ? 'bg-[#2C1810]/95 text-[#FDFBF7] border-[#E8A598]/30 shadow-[#2C1810]/20'
              : toast.type === 'error'
              ? 'bg-rose-950/95 text-rose-50 border-rose-800 shadow-rose-950/30'
              : 'bg-[#2C1810]/95 text-[#FDFBF7] border-white/10'
          }`}
        >
          <div className="flex items-start gap-3">
            {toast.type === 'success' && (
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            )}
            {toast.type === 'error' && (
              <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
            )}
            {toast.type === 'info' && (
              <Info className="w-5 h-5 text-[#E8A598] shrink-0 mt-0.5" />
            )}
            <div>
              {toast.title && (
                <h4 className="text-xs font-serif font-bold text-white">{toast.title}</h4>
              )}
              <p className="text-xs font-sans text-white/90 leading-snug mt-0.5">
                {toast.message}
              </p>
            </div>
          </div>
          <button
            onClick={() => onDismiss(toast.id)}
            className="p-1 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors ml-2"
            aria-label="Close notification"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
};

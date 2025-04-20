'use client';

import { useEffect } from 'react';

interface DialogProps {
  open: boolean;
  title?: string;
  description?: string;
  onClose: () => void;
  actions?: {
    label: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary';
  }[];
}

export default function Dialog({
  open,
  title,
  description,
  onClose,
  actions = [],
}: DialogProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (open) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  const formatDescription = (text: string) => {
    return text.split('\n').join('<br />');
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-lg w-full max-w-sm p-6 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        {title && <h2 className="text-lg font-bold mb-2">{title}</h2>}

        {description && (
          <p
            className="text-sm text-gray-700 mb-4"
            dangerouslySetInnerHTML={{ __html: formatDescription(description) }}
          />
        )}

        <div className="flex justify-center gap-2">
          {actions.map((action, index) => (
            <button
              key={index}
              onClick={action.onClick}
              className={`px-4 py-2 rounded cursor-pointer ${
                action.variant === 'secondary'
                  ? 'bg-gray-200 text-gray-800'
                  : 'bg-blue hover:bg-blue-hover text-white'
              }`}
            >
              {action.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

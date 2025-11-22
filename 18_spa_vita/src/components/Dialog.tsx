import React from 'react';

export default function Dialog({ open, onClose, children }: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-card p-6 rounded-lg shadow-lg border border-border w-full max-w-sm">
        {children}
        <button
          className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
          onClick={onClose}
          aria-label="Close dialog"
        >
          ×
        </button>
      </div>
    </div>
  );
}

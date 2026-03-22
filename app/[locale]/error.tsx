'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Error boundary caught:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-4">
      <h2 className="text-2xl font-bold text-[#1A1A1A]">Something went wrong</h2>
      {process.env.NODE_ENV === 'development' && (
        <p className="text-sm text-red-600 bg-red-50 p-4 rounded-xl max-w-lg text-center">
          {error?.message || 'Unknown error'}
        </p>
      )}
      <button
        onClick={reset}
        className="px-6 py-3 bg-[#1A1A1A] text-white rounded-full font-medium hover:bg-[#333] transition-all"
      >
        Try again
      </button>
    </div>
  );
}

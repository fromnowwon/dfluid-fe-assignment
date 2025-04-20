'use client';

import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="mt-10 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded text-sm transition-bg duration-200 ease-in-out"
    >
      ← Back
    </button>
  );
}

import { useQuery, QueryFunction } from '@tanstack/react-query';

const UNSPLASH_URL = 'https://api.unsplash.com';
const UNSPLASH_ACCESS_KEY = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;

type UnsplashResponse = {
  urls: {
    full: string;
  };
};

export const useUnsplashRandom = (query: string) => {
  const fetchRandomImage: QueryFunction<UnsplashResponse> = async () => {
    const storageKey = `unsplash-bg-${query}`;
    const storedUrl = localStorage.getItem(storageKey);

    if (storedUrl) {
      return { urls: { full: storedUrl } };
    }

    const res = await fetch(
      `${UNSPLASH_URL}/photos/random?query=${query}&client_id=${UNSPLASH_ACCESS_KEY}`
    );

    if (!res.ok) {
      throw new Error('Failed to fetch random image');
    }

    const data = await res.json();
    localStorage.setItem(storageKey, data.urls.full);

    return data;
  };

  return useQuery<UnsplashResponse>({
    queryKey: ['unsplash', 'random', query],
    queryFn: fetchRandomImage,
    staleTime: Infinity,
    gcTime: Infinity,
  });
};

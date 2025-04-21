'use client';

import { useEffect, useState, useRef } from 'react';
import Divider from '@/shared/ui/Divider';
import EmailInput from '../molecules/EmailInput';
import { useUnsplashRandom } from '@/shared/api/queries/useUnsplashRandom';

export default function SubscribeSection() {
  const { data } = useUnsplashRandom('subscribe');
  const backgroundImage = data?.urls?.full || '/assets/images/subscribe_bg.jpg';

  const [isLoaded, setIsLoaded] = useState(false);
  const hasLoadedOnce = useRef(false);

  useEffect(() => {
    if (!backgroundImage || hasLoadedOnce.current) return;

    const img = new Image();
    img.src = backgroundImage;
    img.onload = () => {
      setIsLoaded(true);
      hasLoadedOnce.current = true;
    };
  }, [backgroundImage]);

  return (
    <section
      aria-label="Subscribe Section"
      className={`relative flex items-center w-full h-185 px-10 lg:px-20 py-38 bg-cover bg-center transition-opacity duration-700 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#d9d9d9',
      }}
    >
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      <div className="relative z-10 flex flex-col items-center text-center text-white">
        <h3 className="font-bold text-2xl leading-9">
          Sed ut perspiciatis unde omnis
        </h3>
        <p className="mt-5.75 text-white/80 text-md lg:text-lg leading-6 lg:leading-7.5">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary.
        </p>

        <Divider className="mt-8 bg-white/50" />

        <div className="pt-8">
          <p className="text-white/50 text-sm leading-5.5">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore.
          </p>
          <div className="mt-10 lg:mt-23.75">
            <h4 className="font-exo font-bold">Subscribe to our newsletter</h4>
            <div className="relative mt-4 w-full flex justify-center">
              <EmailInput />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

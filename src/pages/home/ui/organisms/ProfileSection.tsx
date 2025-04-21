'use client';

import { useEffect, useState } from 'react';

import SectionTitle from '@/pages/home/ui/atoms/SectionTitle';
import ProfileCard from '../molecules/ProfileCard';
import { Profile, PROFILES_DATA } from '@/shared/data/profiles';

function shuffleArray<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function ProfileSection() {
  const [shuffledProfiles, setShuffledProfiles] = useState<Profile[]>([]);

  useEffect(() => {
    const shuffled = shuffleArray(PROFILES_DATA);
    setShuffledProfiles(shuffled);
  }, []);

  return (
    <section
      aria-label="Profile Section"
      className="px-10 lg:px-20 pt-20 lg:pt-30 pb-20 lg:pb-27.5"
    >
      <SectionTitle>
        Snap photos and share like
        <br />
        never before
      </SectionTitle>

      <div className="flex flex-col lg:flex-row justify-center gap-10 lg:gap-5 mt-17.5 divide-y divide-gray-300 lg:divide-y-0">
        {shuffledProfiles.map((profile) => (
          <ProfileCard key={profile.id} {...profile} />
        ))}
      </div>
    </section>
  );
}

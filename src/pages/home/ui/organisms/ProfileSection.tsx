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
    setShuffledProfiles(shuffleArray(PROFILES_DATA));
  }, []);

  return (
    <section className="px-20 pt-30 pb-27.5">
      <SectionTitle>
        Snap photos and share like
        <br />
        never before
      </SectionTitle>

      <div className="flex justify-center gap-5 mt-17.5">
        {shuffledProfiles.map((profile) => (
          <ProfileCard key={profile.id} {...profile} />
        ))}
      </div>
    </section>
  );
}

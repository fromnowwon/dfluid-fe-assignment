'use client';

import { useState } from 'react';
import { HERITAGES_DATA, Region } from '@/shared/data/heritages';

import SectionTitle from '../atoms/SectionTitle';
import HeritageCard from '../molecules/HeritageCard';
import RegionFilter from '../molecules/RegionFilter';

export default function HeritageSection() {
  const [selectedRegion, setSelectedRegion] = useState<Region | 'All'>('All');

  const filteredData =
    selectedRegion === 'All'
      ? HERITAGES_DATA
      : HERITAGES_DATA.filter((item) => item.region === selectedRegion);

  return (
    <section className="pl-20 pt-30 pb-20">
      <SectionTitle>Duis tincidunt ut ligula vitae mollis.</SectionTitle>

      <div className="mt-15">
        <div className="flex gap-5 items-center">
          <RegionFilter
            selectedRegion={selectedRegion}
            setSelectedRegion={setSelectedRegion}
          />
        </div>

        <div className="mt-17 pr-10 overflow-x-auto scrollbar-thin scrollbar-thumb-sky-700 scrollbar-track-sky-300">
          <div className="flex gap-10 w-max">
            {filteredData.map((heritage) => (
              <HeritageCard key={heritage.id} {...heritage} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import SectionTitle from '../atoms/SectionTitle';
import { HERITAGES_DATA } from '@/shared/data/heritages';
import HeritageCard from '../molecules/HeritageCard';

export default function HeritageSection() {
  return (
    <section className="px-20 pt-30 pb-20">
      <SectionTitle>Duis tincidunt ut ligula vitae mollis.</SectionTitle>
      <div className="mt-15">
        <div></div>

        <div className="mt-17 overflow-x-auto scrollbar-thin scrollbar-thumb-sky-700 scrollbar-track-sky-300">
          <div className="flex gap-10 w-max">
            {HERITAGES_DATA.map((heritage) => (
              <HeritageCard key={heritage.id} {...heritage} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

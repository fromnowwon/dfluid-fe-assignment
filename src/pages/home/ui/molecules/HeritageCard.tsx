import { Heritage } from '@/shared/data/heritages';
import Image from 'next/image';
import Link from 'next/link';

type HeritageCardProps = Heritage;

export default function HeritageCard({
  id,
  country,
  name,
  year,
  image,
  description,
}: HeritageCardProps) {
  return (
    <Link href={`/heritages/${id}`} passHref>
      <div
        key={id}
        className="px-5 pt-3.75 pb-5.75 bg-gray-light w-100 h-103.75 rounded-[10px] transition-all duration-300 hover:bg-[#cccccc]"
      >
        <div className="flex justify-between items-center pl-[3px]">
          <h3 className="font-bold leading-[100%]">
            {country}, {name}
          </h3>
          <p>{year}</p>
        </div>
        <div className="w-[360px] h-[227px] mt-2.25 overflow-hidden rounded-[5px]">
          <Image
            src={image}
            alt={name}
            width={360}
            height={227}
            className="w-full h-full object-cover"
          />
        </div>
        <p className="mt-5 pl-[3px] text-sm leading-[100%] overflow-hidden line-clamp-6">
          {description}
        </p>
      </div>
    </Link>
  );
}

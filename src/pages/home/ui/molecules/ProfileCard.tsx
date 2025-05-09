import { Profile } from '@/shared/data/profiles';
import Image from 'next/image';
import Link from 'next/link';

type ProfileCardProps = Profile;

export default function ProfileCard({
  id,
  name,
  image,
  description,
}: ProfileCardProps) {
  return (
    <div className="flex flex-col items-center lg:items-start pb-5 lg:pb-0">
      <Image
        src={image}
        alt={name}
        width={108}
        height={108}
        className="rounded-full"
      />
      <div className="mt-10">
        <h2 className="font-bold text-2xl leading-9">{name}</h2>
        <p className="mt-6 text-lg leading-7">{description}</p>
        <div className="mt-6">
          <Link
            href={`/profiles/${id}`}
            className="font-bold text-blue hover:text-blue-hover transition-colors duration-200"
          >
            LEARN MORE
          </Link>
        </div>
      </div>
    </div>
  );
}

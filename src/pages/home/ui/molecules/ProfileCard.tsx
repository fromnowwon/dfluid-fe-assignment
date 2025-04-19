import Image from 'next/image';
import Link from 'next/link';

interface ProfileCardProps {
  name: string;
  image: string;
  description: string;
  link?: string;
}

export default function ProfileCard({
  name,
  image,
  description,
  link = '#',
}: ProfileCardProps) {
  return (
    <div className="flex flex-col items-start">
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
            href={link}
            target="_blank"
            className="font-bold text-[var(--color-blue)] hover:text-[var(--color-blue-hover)]"
          >
            LEARN MORE
          </Link>
        </div>
      </div>
    </div>
  );
}

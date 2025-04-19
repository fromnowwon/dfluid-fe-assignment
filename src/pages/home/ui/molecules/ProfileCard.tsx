import Image from 'next/image';
import Link from 'next/link';

export default function ProfileCard() {
  return (
    <div className="flex flex-col">
      <Image
        src="/assets/images/profile_a.png"
        alt="profile"
        width="108"
        height="108"
        className="rounded-full"
      />
      <div className="mt-10">
        <h2 className="font-bold text-2xl leading-9">John Doe</h2>
        <p className="mt-6 text-lg leading-7">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.
        </p>
        <div className="mt-6">
          <Link href="" target="_blank" className="font-bold text-blue">
            LEARN MORE
          </Link>
        </div>
      </div>
    </div>
  );
}

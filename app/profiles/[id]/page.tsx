import Image from 'next/image';
import { notFound } from 'next/navigation';
import { PROFILES_DATA } from '@/shared/data/profiles';
import BackButton from '@/shared/ui/BackButton';

export default async function ProfileDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const profileId = Number(id);

  const profile = PROFILES_DATA.find((p) => p.id === profileId);

  if (!profile) {
    return notFound();
  }

  return (
    <div className="p-10 max-w-2xl mx-auto">
      <div className="flex flex-col items-center text-center">
        <Image
          src={profile.image}
          alt={profile.name}
          width={150}
          height={150}
          className="rounded-full"
        />
        <h2 className="mt-6 text-3xl font-bold">{profile.name}</h2>
        <p className="mt-3 text-gray-600">{profile.bio}</p>
        <p className="mt-6 text-lg text-gray-700">{profile.description}</p>

        <div className="mt-8 w-full text-left text-sm text-gray-500 space-y-2">
          {profile.email && (
            <p>
              <strong>Email:</strong> {profile.email}
            </p>
          )}
          {profile.location && (
            <p>
              <strong>Location:</strong> {profile.location}
            </p>
          )}
          {profile.joinedAt && (
            <p>
              <strong>Joined:</strong> {profile.joinedAt}
            </p>
          )}
          {profile.interests && (
            <p>
              <strong>Interests:</strong> {profile.interests.join(', ')}
            </p>
          )}
        </div>
        <BackButton />
      </div>
    </div>
  );
}

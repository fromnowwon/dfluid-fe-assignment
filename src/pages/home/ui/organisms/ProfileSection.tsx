import SectionTitle from '@/pages/home/ui/atoms/SectionTitle';
import ProfileCard from '../molecules/ProfileCard';
import { PROFILES_DATA } from '@/shared/data/profiles';

export default function ProfileSection() {
  return (
    <section>
      <SectionTitle>
        Snap photos and share like
        <br />
        never before
      </SectionTitle>

      <div className="flex justify-center gap-5">
        {PROFILES_DATA.map((profile) => (
          <ProfileCard key={profile.id} {...profile} />
        ))}
      </div>
    </section>
  );
}

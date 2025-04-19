import SectionTitle from '@/shared/ui/SectionTitle';
import ProfileCard from '../molecules/ProfileCard';

export default function ProfileSection() {
  return (
    <section>
      <SectionTitle>
        Snap photos and share like
        <br />
        never before
      </SectionTitle>

      <div className="flex justify-center gap-5">
        <ProfileCard />
      </div>
    </section>
  );
}

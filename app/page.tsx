import HeritageSection from '@/pages/home/ui/organisms/HeritageSection';
import ProfileSection from '@/pages/home/ui/organisms/ProfileSection';
import SubscribeSection from '@/pages/home/ui/organisms/SubscribeSection';

export default function HomePage() {
  return (
    <main>
      <ProfileSection />
      <SubscribeSection />
      <HeritageSection />
    </main>
  );
}

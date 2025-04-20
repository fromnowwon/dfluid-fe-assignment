import HeritageSection from './organisms/HeritageSection';
import ProfileSection from './organisms/ProfileSection';
import SubscribeSection from './organisms/SubscribeSection';

export default function HomePage() {
  return (
    <main>
      <ProfileSection />
      <SubscribeSection />
      <HeritageSection />
    </main>
  );
}

import CardSection from './organisms/CardSection';
import ProfileSection from './organisms/ProfileSection';
import SubscribeSection from './organisms/SubscribeSection';

export default function HomePage() {
  return (
    <main>
      <ProfileSection />
      <SubscribeSection />
      <CardSection />
    </main>
  );
}

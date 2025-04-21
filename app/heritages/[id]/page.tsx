import Image from 'next/image';
import { notFound } from 'next/navigation';
import { HERITAGES_DATA } from '@/shared/data/heritages';
import BackButton from '@/shared/ui/BackButton';

export default async function HeritageDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const heritageId = Number(id);

  const heritage = HERITAGES_DATA.find((h) => h.id === heritageId);

  if (!heritage) {
    return notFound();
  }

  return (
    <div className="p-10 max-w-2xl mx-auto">
      <div className="flex flex-col items-center text-center">
        <Image
          src={heritage.image}
          alt={heritage.name}
          width={300}
          height={200}
          className="rounded-lg"
        />
        <h2 className="mt-6 text-3xl font-bold">{heritage.name}</h2>
        <p className="mt-3 text-gray-600">{heritage.country}</p>
        <p className="mt-6 text-lg text-gray-700">{heritage.description}</p>
        <p className="mt-3 text-sm">
          <strong>Visit Info:</strong> {heritage.visitInfo}
        </p>

        <BackButton />
      </div>
    </div>
  );
}

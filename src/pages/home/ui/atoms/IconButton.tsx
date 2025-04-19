import Image from 'next/image';

interface IconButtonProps {
  icon: string;
  onClick?: () => void;
  alt?: string;
  className?: string;
}

export default function IconButton({
  icon,
  onClick,
  alt = 'icon',
  className = '',
}: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`absolute right-2.5 top-1/2 -translate-y-1/2 flex items-center justify-center ${className}`}
    >
      <Image
        src={icon}
        alt={alt}
        aria-hidden
        width={32}
        height={32}
        className="inline-block w-8 h-8"
      />
    </button>
  );
}

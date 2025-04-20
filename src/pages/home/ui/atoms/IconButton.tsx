import Image from 'next/image';

interface IconButtonProps {
  icon: string;
  onClick?: () => void;
  alt?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function IconButton({
  icon,
  onClick,
  alt = 'icon',
  className = '',
  type = 'button',
  disabled = false,
}: IconButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`absolute right-2.5 top-1/2 -translate-y-1/2 flex items-center justify-center transition-opacity ${
        disabled
          ? 'opacity-50 cursor-not-allowed'
          : 'opacity-100 cursor-pointer'
      } ${className}`}
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

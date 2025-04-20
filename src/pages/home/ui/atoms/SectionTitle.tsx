interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionTitle({
  children,
  className = '',
}: SectionTitleProps) {
  return (
    <h2
      className={`font-exo text-4xl lg:text-5xl leading-13 lg:leading-18 ${className}`}
    >
      {children}
    </h2>
  );
}

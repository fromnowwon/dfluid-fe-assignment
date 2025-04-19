interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionTitle({
  children,
  className = '',
}: SectionTitleProps) {
  return <h2 className={`text-5xl leading-18 ${className}`}>{children}</h2>;
}

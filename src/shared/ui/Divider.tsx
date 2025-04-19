interface DividerProps {
  className?: string;
}

export default function Divider({ className = '' }: DividerProps) {
  return <div className={`w-full border-t ${className}`} />;
}

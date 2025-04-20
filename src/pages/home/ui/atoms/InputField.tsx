interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export default function InputField({
  className = '',
  ...props
}: InputFieldProps) {
  return (
    <input
      {...props}
      className={`w-full h-12.5 py-1 pl-4 font-exo placeholder:text-white text-white border rounded-[7px] focus:outline-none bg-white/10 backdrop-blur-sm appearance-none ${className}`}
      autoComplete="off"
    />
  );
}

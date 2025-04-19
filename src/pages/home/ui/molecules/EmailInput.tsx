import IconButton from '../atoms/IconButton';
import InputField from '../atoms/InputField';

export default function EmailInput() {
  return (
    <div className="w-full max-w-lg relative">
      <InputField
        type="email"
        placeholder="Enter your email"
        className="w-full h-12.5 py-1 pl-4 font-exo placeholder:text-white text-white border border-white rounded-[7px] focus:outline-none bg-white/10 backdrop-blur-sm"
      />
      <IconButton icon="/assets/icons/ico_paper-plane.svg" />
    </div>
  );
}

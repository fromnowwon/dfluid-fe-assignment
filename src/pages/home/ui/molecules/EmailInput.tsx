'use client';

import { useForm } from 'react-hook-form';
import IconButton from '../atoms/IconButton';
import InputField from '../atoms/InputField';

type FormValues = {
  email: string;
};

export default function EmailInput() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, dirtyFields },
    reset,
  } = useForm<FormValues>({
    mode: 'onChange',
  });

  const onSubmit = (data: FormValues) => {
    console.log('Submitted email:', data.email);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="w-full max-w-lg relative"
    >
      <InputField
        type="email"
        placeholder="Enter your email"
        className={`w-full h-12.5 py-1 pl-4 font-exo placeholder:text-white text-white border rounded-[7px] focus:outline-none bg-white/10 backdrop-blur-sm ${
          errors.email
            ? 'border-orange'
            : dirtyFields.email
              ? 'border-green'
              : 'border-white'
        }`}
        {...register('email', {
          required: true,
          pattern: {
            value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: 'Please enter a valid email!',
          },
        })}
      />
      <IconButton
        icon="/assets/icons/ico_paper-plane.svg"
        type="submit"
        disabled={!isValid}
      />
      {errors.email && (
        <p className="text-orange text-sm mt-2 absolute left-0">
          {errors.email.message}
        </p>
      )}
    </form>
  );
}

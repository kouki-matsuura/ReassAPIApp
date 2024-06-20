import { useFormContext } from 'react-hook-form';

type CheckboxProps = {
  name: string;
  label: string;
};

export const Checkbox: React.FC<CheckboxProps> = ({ name, label }) => {
  const { register } = useFormContext();
  return (
    <label>
      <input type="checkbox" {...register(name)} />
      {label}
    </label>
  );
};

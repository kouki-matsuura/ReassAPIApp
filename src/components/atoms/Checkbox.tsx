import { memo } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

type CheckboxProps = {
  name: string;
  label: string;
  register: UseFormRegister<FieldValues>;
};

const M_Checkbox: React.FC<CheckboxProps> = ({ name, label, register }) => {
  return (
    <label>
      <input type="checkbox" {...register(name)} />
      {label}
    </label>
  );
};

export const Checkbox = memo(M_Checkbox);

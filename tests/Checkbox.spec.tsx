import { render, screen } from '@testing-library/react';
import { ReactNode } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Checkbox } from '../src/components/atoms/Checkbox';

describe('Checkboxコンポーネントのテスト', () => {
  const Wrapper = ({ children }: { children: ReactNode }) => {
    const method = useForm();
    return <FormProvider {...method}>{children}</FormProvider>;
  };

  it('指定したラベルのチェックボックスが生成されること', async () => {
    // Arange
    render(<Checkbox name={'テスト'} label={'テスト'} />, {
      wrapper: Wrapper,
    });

    // Assert
    expect(screen.getByLabelText('テスト')).toBeTruthy();
  });
});

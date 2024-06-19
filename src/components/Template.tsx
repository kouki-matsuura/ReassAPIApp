import Title from './atoms/Title/Title';

export const Template: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <header>
        <Title color="red">人口構成グラフ</Title>
      </header>
      <main>{children}</main>
      <footer />
    </div>
  );
};

import { FormProvider, useForm } from 'react-hook-form';
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import { Template } from './components/Template';
import { AppContainer } from './features/container/AppContainer';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 10,
      retry: 1,
    },
  },
});
function App() {
  const method = useForm();
  return (
    <div className="App">
      <Template>
        <QueryClientProvider client={queryClient}>
          <FormProvider {...method}>
            <AppContainer />
          </FormProvider>
        </QueryClientProvider>
      </Template>
    </div>
  );
}

export default App;

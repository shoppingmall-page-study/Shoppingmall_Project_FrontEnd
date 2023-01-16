import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './ components/header/Header';
import ShopRouters from './routes/ShopRouters';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
  const [queryClient] = useState(() => new QueryClient())
  return (
    <QueryClientProvider client={queryClient}>
      <ShopRouters/>
    </QueryClientProvider>
  );
}

export default App;

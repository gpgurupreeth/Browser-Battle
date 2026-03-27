import { RouterProvider } from 'react-router';
import { router } from './routes';
import { ThemeProvider } from './contexts/ThemeContext';
import { Toaster } from './components/ui/sonner';
import { Chatbot } from './components/Chatbot';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
      <Toaster />
      <Chatbot />
      <ScrollToTop />
    </ThemeProvider>
  );
}

export default App;
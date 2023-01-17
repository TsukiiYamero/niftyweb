import './App.css'
import { SnackbarProvider } from '@/context/snackbar/provider';
import { CustomThemeProvider } from '@/theme/provider';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <SnackbarProvider>
      <CustomThemeProvider>
        <Outlet />
      </CustomThemeProvider>
    </SnackbarProvider>
  );
};

export default App

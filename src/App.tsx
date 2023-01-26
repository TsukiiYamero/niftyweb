import './App.css'
import { SnackbarProvider } from '@/context/snackbar/provider';
import { CustomThemeProvider } from '@/theme/provider';
import { MainRouting } from '@/router/MainRouting';

function App() {

  return (
    <SnackbarProvider>
      <CustomThemeProvider>
        <MainRouting />
      </CustomThemeProvider>
    </SnackbarProvider>
  );
};

export default App

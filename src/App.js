import { ThemeProvider } from 'styled-components';
import MainBar from './Components/MainBar/MainBar';
import Sidebar from './Components/Sidebar/Sidebar';
import SalaryCounter from './Components/SalaryCounter/SalaryCounter';

// pick a theme of your choice
import lilac from "react95/dist/themes/lilac";
import GlobalStyles from './GlobalStyles';
import * as S from './AppStyles';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={ lilac }>
        <S.AppWrapper>
          <S.Content>
            <Sidebar />
          </S.Content>
          <MainBar />
          <SalaryCounter />          
        </S.AppWrapper>
      </ThemeProvider>
    </>
  );
};

export default App;
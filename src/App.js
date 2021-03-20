import { ThemeProvider } from 'styled-components';
import MainBar from './Components/MainBar/MainBar';
import SalaryCounter from './Components/SalaryCounter/SalaryCounter';

// pick a theme of your choice
import original from "react95/dist/themes/original";
import GlobalStyles from './GlobalStyles';
import * as S from './AppStyles';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={ original }>
        <S.AppWrapper>
          <MainBar />
          <SalaryCounter />
        </S.AppWrapper>
      </ThemeProvider>
    </>
  );
};

export default App;
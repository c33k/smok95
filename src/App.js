import { ThemeProvider } from 'styled-components';
import MainBar from './Components/MainBar';

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
        </S.AppWrapper>
      </ThemeProvider>
    </>
  );
};

export default App;
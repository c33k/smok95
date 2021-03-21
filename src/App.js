import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import MainBar from './Components/MainBar/MainBar';
import Sidebar from './Components/Sidebar/Sidebar';
import SalaryCounter from './Components/SalaryCounter/SalaryCounter';
import Content from './Components/Content/Content';

// pick a theme of your choice
import original from "react95/dist/themes/original";
import lilac from "react95/dist/themes/lilac";
import rainyDay from "react95/dist/themes/rainyDay";
import tokyoDark from "react95/dist/themes/tokyoDark";
import rose from "react95/dist/themes/rose";
import matrix from "react95/dist/themes/matrix";

import GlobalStyles from './GlobalStyles';
import * as S from './AppStyles';

const App = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const onSelectMenuItem = (itemName) => setSelectedItem(itemName);
  const [selectedTheme, setSelectedTheme] = useState(original);
  const [selectedBackground, setSelectedBackground] = useState(null);

  const onChangeTheme = (themeName) => {
    switch(themeName) {
      case 'lilac': {
        setSelectedTheme(lilac);
        break;
      }
      case 'rainyDay': {
        setSelectedTheme(rainyDay);
        break;
      }
      case 'tokyoDark': {
        setSelectedTheme(tokyoDark);
        break;
      }
      case 'rose': {
        setSelectedTheme(rose);
        break;
      }
      case 'matrix': {
        setSelectedTheme(matrix);
        break;
      }
      case 'original':
      default: {
        setSelectedTheme(original)
      }
    }
  };

  const onChangeBackground = (background) => setSelectedBackground(background);

  const onClose = () => setSelectedItem(null);

  const backgroundStyle = (!!selectedBackground && selectedBackground !== '<Custom>') ? {
      backgroundImage: `url("./backgrounds/${selectedBackground}")`,
      backgroundRepeat: 'repeat',
  } : undefined;

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={ selectedTheme }>
        <S.AppWrapper style={ backgroundStyle }>
          <S.Container>
            <Sidebar />
            <Content 
              openWindow={ selectedItem }
              changeTheme={ onChangeTheme }
              changeBackground={ onChangeBackground }
              onClose={ onClose }
            />
          </S.Container>
          <MainBar onClick={ onSelectMenuItem }/>
          <SalaryCounter />          
        </S.AppWrapper>
      </ThemeProvider>
    </>
  );
};

export default App;
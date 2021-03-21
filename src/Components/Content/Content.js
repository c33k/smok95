import React from 'react'
import Settings95 from '../Settings95/Settings95';
import Expenses95 from '../Expenses95/Expenses95';

import * as S from './ContentStyles';

const Content = ({ openWindow, changeTheme, changeBackground }) => {
  return (
    <S.Content>
      { openWindow === 'settings' &&
        <Settings95 onChangeTheme={ changeTheme } onChangeBackground={ changeBackground }/>
      }
      { openWindow === 'expenses' && <Expenses95 /> }
    </S.Content>
  )
};

export default Content

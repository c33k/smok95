import React from 'react'
import Settings95 from '../Settings95/Settings95';

import * as S from './ContentStyles';

const Content = ({ openWindow, changeTheme, changeBackground }) => {
  return (
    <S.Content>
      { openWindow === 'settings' &&
        <Settings95 changeTheme={ changeTheme } changeBackground={ changeBackground }/>
      }
    </S.Content>
  )
};

export default Content

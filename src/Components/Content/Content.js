import React from 'react'
import Settings95 from '../Settings95/Settings95';

import * as S from './ContentStyles';

const Content = ({ openWindow, changeTheme }) => {
  return (
    <S.Content>
      { openWindow === 'settings' &&
        <Settings95 changeTheme={ changeTheme }/>
      }
    </S.Content>
  )
};

export default Content

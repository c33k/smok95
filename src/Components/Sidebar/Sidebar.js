import React from 'react'
import Calendar95 from '../Calendar95/Calendar95';
import Categories from '../Categories/Categories';

import * as S from './SidebarStyles';

function Sidebar() {
  return (
    <S.Sidebar>
      <Calendar95 />
      <Categories />
    </S.Sidebar>
  )
}

export default Sidebar;

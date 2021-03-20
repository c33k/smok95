import React from 'react'
import {
  Desktop,
  Fieldset,
  Select,
  Window,
  WindowContent,
  WindowHeader,
} from 'react95';

import * as S from './Settings95Styles';

const OPTIONS = [
  { value: 1, label: 'original' },
  { value: 2, label: 'lilac' },
  { value: 3, label: 'rainyDay' },
  { value: 4, label: 'tokyoDark' },
  { value: 5, label: 'rose' },
  { value: 6, label: 'matrix' },
];

const Settings95 = ({ changeTheme }) => {
  const onSelectTheme = (evt, nextSelection) => changeTheme(nextSelection.label);

  return (
    <S.Settings>
      <Window className='WindowCategories'>
        <WindowHeader>settings.exe</WindowHeader>
        <WindowContent>          
          <Desktop backgroundStyles={{ background: '#008080' }} />
          <Fieldset label='Theme'>            
            
          <Select
            defaultValue={ 1 }
            options={ OPTIONS }
            menuMaxHeight={ 160 }
            width={ 160 }
            onChange={ onSelectTheme }
          />
            
          </Fieldset>
        </WindowContent>
      </Window>
    </S.Settings>
  )
};

export default Settings95;

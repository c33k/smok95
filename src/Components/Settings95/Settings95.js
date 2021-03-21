import React, { useState } from 'react'
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

const CUSTOM_LABEL = '<Custom>';

const BACKGROUND_OPTIONS = [
  { value: 0, label: CUSTOM_LABEL },
  { value: 1, label: 'honey.png' },
  { value: 2, label: 'Purple.png' },
  { value: 3, label: 'Rivet.png' },
  { value: 4, label: 'sky.gif' },
];

const Settings95 = ({ onChangeTheme, onChangeBackground }) => {
  const [selectedBackground, setSelectedBackground] = useState(null);

  const onSelectTheme = (evt, nextSelection) => onChangeTheme(nextSelection.label);

  const onSelectBackground = (evt, nextSelection) => {
    onChangeBackground(nextSelection.label);
    setSelectedBackground(nextSelection.label);
  };

  const backgroundStyles = selectedBackground && selectedBackground !== CUSTOM_LABEL ? {
    backgroundImage: `url("./backgrounds/${selectedBackground}")`,
    backgroundRepeat: 'repeat',
  } : { background: '#008080' };

  return (
    <S.Settings>
      <Window className='WindowCategories'>
        <WindowHeader>settings.exe</WindowHeader>
        <WindowContent className='WindowContent'>          
          <Desktop className='Desktop' backgroundStyles={ backgroundStyles } />
          <Fieldset label='Theme'>            
            <Select
              className='Select'
              defaultValue={ 1 }
              options={ OPTIONS }
              menuMaxHeight={ 160 }
              onChange={ onSelectTheme }
            />
          </Fieldset>
          <Fieldset label='Backgrounds'>            
            <Select
              className='Select'
              defaultValue={ 0 }
              options={ BACKGROUND_OPTIONS }
              menuMaxHeight={ 160 }
              onChange={ onSelectBackground }
            />
          </Fieldset>
        </WindowContent>
      </Window>
    </S.Settings>
  )
};

export default Settings95;

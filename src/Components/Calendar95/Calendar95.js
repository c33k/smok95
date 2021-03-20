import React, { useCallback, useState } from 'react'
import Calendar from 'react-calendar';
import { 
  Button,
  Window, 
  WindowContent, 
  WindowHeader, 
} from 'react95';

import * as S from './Calendar95Styles';

const Calendar95 = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [today] = useState(new Date());

  const getDayStyle = useCallback(
    ({ date, view }) => {
      let classes = [];

      if (view === 'month') {
        if (date.getDate() === today.getDate() &&
          date.getFullYear() === today.getFullYear() &&
          date.getMonth() === today.getMonth()) {
          classes = [...classes, 'today'];
        }

        if (date.getDate() === selectedDate.getDate() && 
            date.getFullYear() === selectedDate.getFullYear() &&
            date.getMonth() === selectedDate.getMonth()) {
          classes = [...classes, 'selected'];
        }
      }
      
      return classes;
    }, [selectedDate, today]);

  const handleClickToday = useCallback(() => {
    setSelectedDate(today);
  }, [today]);

  return (
    <S.CalendarWrapper>
      <Window className='WindowCalendar'>
        <WindowHeader>Date.exe</WindowHeader>
        <WindowContent>
          <Calendar 
            onChange={ setSelectedDate }
            value={ selectedDate }
            tileClassName={ getDayStyle }
          />
          <Button size='lg' onClick={ handleClickToday }>Today</Button>
        </WindowContent>
      </Window>
    </S.CalendarWrapper>
  );
};

export default Calendar95;

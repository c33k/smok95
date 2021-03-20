import React, { useRef, useCallback, useState } from 'react'
import { Button, Counter, NumberField, Panel } from 'react95';

import * as S from './SalaryCounterStyles';

const SalaryCounter = () => {
  const cashInRef = useRef(null);
  const [salary, setSalary] = useState(17000);
  const [cashIn, setCashIn] = useState(0);
  
  const handleSalaryChange = useCallback((value) => setCashIn(parseInt(value)), []);
  const handleSubmitSalary = useCallback((event) => {
    event.preventDefault();
    setSalary(parseInt(cashInRef.current.value) + salary);
  }, [salary]);

  return (
    <S.Wrapper>
      <Panel className='wrapper'>
        <Counter value={ salary } minLength={ 7 } size='lg' />
        <S.AddSalaryForm onSubmit={ handleSubmitSalary }>
          <NumberField 
            ref={ cashInRef } 
            defaultValue={ cashIn } 
            step={ 100 } 
            min={ 0 } 
            max={1_000_000} 
            onChange={ handleSalaryChange }
          />
          <Button onClick={ handleSubmitSalary }>+</Button>
        </S.AddSalaryForm>
        <Panel variant='well' className='footer'>
          Whenever you earn some money, add it here!
        </Panel>
      </Panel>
    </S.Wrapper>
  )
};

export default SalaryCounter;

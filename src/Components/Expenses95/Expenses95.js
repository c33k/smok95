import { useCallback, useEffect, useState } from 'react';

import {
  Button,
  Panel,
  Window, 
  WindowContent, 
  Table, 
  TableDataCell,
  TableHead,
  TableHeadCell,
  TableBody, 
  TableRow,
  WindowHeader 
} from 'react95';

import * as S from './Expenses95Styles';

const Expenses95 = ({ onClose }) => {
  const [expenses, setExpenses] = useState([]);
  useEffect(() => {
    const data = require('./data').default;
    const categoriesData = require('../Categories/data').default;

    const newExpenses = data.expenses.map(expense => {
      const category = categoriesData.categories.find(category => category.id === expense.category);

      return (category)
        ? { ...expense, category }
        : expense;
    });

    setExpenses(newExpenses);    
  }, []);

  return (
    <S.Expenses>
      <Window className='WindowExpenses'>
        <WindowHeader className='WindowsHeader'>
          <span>expenses.exe</span>
          <Button square onClick={ onClose }>X</Button>
        </WindowHeader>
        <WindowContent className='WindowContent'>
          <Table>
            <TableHead>
              <TableRow head>
                <TableHeadCell>Category</TableHeadCell>
                <TableHeadCell>Name</TableHeadCell>
                <TableHeadCell>Price (PLN)</TableHeadCell>
                <TableHeadCell>Notes</TableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ overflow: 'scroll' }}>
              { expenses.map(expense => (
                <TableRow key={ expense.id }>
                  <TableDataCell>
                    <span 
                      role='img' 
                      aria-label={ expense.category.name }
                      alt={ expense.category.name }
                    >
                      { expense.category.icon }
                    </span>
                  </TableDataCell>
                  <TableDataCell>{ expense.name }</TableDataCell>
                  <TableDataCell>{ expense.value }</TableDataCell>
                  <TableDataCell>{ expense.notes }</TableDataCell>
                </TableRow>
              )) }                  
            </TableBody>
          </Table>
          <Panel variant='well'>
            Total expenses: <span style={{ fontWeight: 'bold' }}>
              { expenses.reduce((sum,e) => sum + e.value, 0) }</span>
          </Panel>
        </WindowContent>
      </Window>
    </S.Expenses>
  );
}

export default Expenses95;

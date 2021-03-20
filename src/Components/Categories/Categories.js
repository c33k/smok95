import React, { useState } from 'react'
import { 
  Window, 
  WindowContent, 
  Table, 
  TableDataCell,
  TableHead,
  TableHeadCell,
  TableBody, 
  TableRow,
  TextField, 
  WindowHeader 
} from 'react95';
import INITIAL_CATEGORIES from './data';

import * as S from './CategoriesStyles';

function Categories() {
  const [state, setState] = useState({ newName: '', categories: INITIAL_CATEGORIES.categories });
  const handleChange = (e, value) => setState({ newName: value, categories: state.categories });

  return (
    <S.Categories>
      <Window style={{ width: 350 }}>
        <WindowHeader>categories.exe</WindowHeader>
        <WindowContent>
          <Table>
            <TableHead>
              <TableRow head>
                <TableHeadCell>Type</TableHeadCell>
                <TableHeadCell>Name</TableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ overflow: 'scroll' }}>
              { state.categories.map(category => (
                <TableRow>
                  <TableDataCell style={{ textAlign: 'center' }}>
                    <span role='img' aria-label='LEAF'>
                      { category.icon }
                    </span>
                  </TableDataCell>
                  <TableDataCell>{ category.name }</TableDataCell>
                </TableRow>
              )) }                  
            </TableBody>
          </Table>
          <S.CategoriesForm>
            <TextField
              value={ state.newName }
              placeholder='Type a name...'
              onChange={ handleChange }
              fullWidth
            />
          </S.CategoriesForm>
        </WindowContent>
      </Window>
    </S.Categories>
  )
}

export default Categories;

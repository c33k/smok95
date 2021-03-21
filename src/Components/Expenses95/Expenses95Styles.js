import styled from 'styled-components';

export const Expenses = styled.section`
  display: flex;
  flex: 1;

  .WindowContent thead > tr {
    display: block;
  }

  .WindowContent thead > tr > th {
    width: 200px;
  }

  .WindowContent tbody {
    display: block;
    height: 300px;
    width: 100%;
    overflow: auto;
  }

  .WindowContent tbody > tr > td {
    width: 200px;
  }

  td {
    border: 1px solid #AAA;
  }
`;
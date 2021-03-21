import styled from 'styled-components';

export const Settings = styled.div`
  .WindowContent {
    display: flex;
    flex-direction: column;
    width: 300px;
    justify-content: space-between;
    align-items: center;
  }

  .WindowHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .Desktop {
    flex: 0.8;
  }

  fieldset {
    flex: 0.2;
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .Select {
    flex: 1;
  }
`;
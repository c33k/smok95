import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 5rem;
  background: teal;

  .wrapper {
    position: absolute;
    display: flex;
    flex-direction: column;
    bottom: 0;
    right: 0;
    padding: 1rem;

    .footer {
      margin-top: 0.5rem;
      padding: 0.1rem 0.25rem; 
    }
  }
`;

export const AddSalaryForm = styled.form`
  display: flex;
`;
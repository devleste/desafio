import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #cccccc;
  @media (max-width: 1024px) {
    border-right: none;
    border-top: 1px solid #cccccc;
  }
`;
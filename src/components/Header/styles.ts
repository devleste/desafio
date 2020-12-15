import styled from 'styled-components';

export const Container = styled.div`
  grid-area: header;
  background: #00AD4F;
  display: flex;
  align-items: center;
  justify-content: center;
  strong {
    font-family: 'Dancing Script', cursive;
    font-size: 40px;
    font-weight: bold;
    color: #ffffff;
  }
  @media (max-width: 1024px) {
    border-bottom: 2px solid #fff;
  }
`;
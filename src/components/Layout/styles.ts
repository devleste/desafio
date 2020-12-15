import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 280px auto;
  grid-template-rows: 96px auto 40px;
  grid-template-areas:
    'header header'
    'drawer routes'
    'footer routes';
  height: 100vh;
  @media (max-width: 1024px){
    grid-template-columns: auto;
    grid-template-rows: 72px 64px auto 40px;
    grid-template-areas:
      'header'
      'drawer'
      'routes'
      'footer';
  }
`;
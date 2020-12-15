import styled from 'styled-components';

export const Container = styled.div`
  overflow-y: scroll;
  padding: 24px;
  grid-area: routes;
  div.title {
    display: flex;
    align-items: center;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 2px;
  background: #333333;
  margin-top: 8px;
  margin-bottom: 16px;
`;

export const ArrowButton = styled.button`
  height: 24px;
  width: 24px;
  background: none;
  color: #00ad4f;
  margin-left: 8px;
  border-radius: 50%;
  svg {
    height: 100%;
    width: 100%;
  }
  :hover {
    background: #00ad4f;
    color: #ffffff;
    transition: 200ms;
  }
`;
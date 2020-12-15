import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 8px 0 24px;
  div {
    display: flex;
    input {
      height: 16px;
      width: 16px;
      margin-right: 8px;
      :checked ~ label {
        color: #00ad4f;
        font-weight: 500;
      }
    }
    label {
      font-size: 16px;
      font-weight: 400;
    }
  }
  span {
    text-align: right;
    color: red;
  }
`;
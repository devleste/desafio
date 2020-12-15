import styled from 'styled-components';

export const Container = styled.div`
  grid-area: drawer;
  border-right: 1px solid #cccccc;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  a {
    color: #333333;
    text-decoration: none;
    width: 85%;
    height: 40px;
    border-radius: 0 32px 32px 0;
    margin-bottom: 4px;
    display: flex;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    cursor: pointer;
    :hover{
      color: #ffffff;
      background: #00AD4F;
      font-weight: 600;
    }
    svg{  
      margin-left: 24px;
      margin-right: 8px;
    }
  }
  @media (max-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 0 1fr 1fr;
    border: none;
    a {
      width: 100%;
      height: 100%;
      margin-bottom: 0;
      border-radius: 0;
      justify-content: center;
      background: #999;
      color: #cccccc;
      font-size: 16px;
      font-weight: 400;
      border-right: 2px solid #ffffff;
      :hover{
        opacity: 80%;
        background: #999;
        font-weight: 400;
      }
      svg {
        margin-left: 0;
      }
    }
  }
`;

export const Separator = styled.div`
  width: 80%;
  height: 2px;
  background: #cccccc;
  margin: 24px auto;
`;

export const AddButton = styled.button`
  width: 80%;
  height: 56px;
  background: #00AD4F;
  border-radius: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  margin: 24px auto 0;
  svg{
    color: #ffffff;
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }
  :hover {
    box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.2);
    transform: translate(-2px, -2px);
    transition: 200ms;
  }
  @media (max-width: 1024px) {
    width: 100%;
    height: 100%;
    border-radius: 0;
    margin-top: 0;
    border-right: 2px solid #ffffff;
    :hover {
      opacity: 0.8;
      transform: none;
      box-shadow: none;
    }
  }
`;
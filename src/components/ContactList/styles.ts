import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const ListHeader = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr 2fr 0.5fr 1fr 0.5fr 0.2fr 0.5fr;
  gap: 16px;
  padding: 8px 8px;
  strong {
    font-size: 15px;
    font-weight: 500;
  }
  @media (max-width: 768px) {
    grid-template-columns: 40px 1fr 0 0 0 0 0 0;
    strong {
      visibility: hidden;
      :first-child,
      :nth-child(2) {
        visibility: visible;
      }
    }
  }
`;

export const ListedContact = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr 2fr 0.5fr 1fr 0.5fr 0.2fr 0.5fr;
  gap: 16px;
  border: 1px solid #cccccc;
  border-radius: 32px;
  align-items: center;
  padding: 8px 8px;
  margin-bottom: 8px;
  cursor: pointer;
  :hover {
    transform: translate(-2px, -2px);
    box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.2);
    border-color: #00AD4F;
    color: #00AD4F;
    font-weight: 500;
    transition: 200ms;
  }
  img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
  }
  div {
    button {
      cursor: pointer;
      background: none;
    }
    button.edit {
      margin-right: 8px;
      :hover {
        svg{
          color: #00AD4F;
        }
      }
    }
    button.delete {
      :hover {
        svg{
          color: firebrick;
        }
      }
    }
  }
  @media (max-width: 768px) {
    grid-template-columns: 40px 1fr 0 0 0 0 0 0;
    span {
      visibility: hidden;
      :nth-child(2) {
        visibility: visible;
        font-size: 16px;
      }
    }
    div {
      visibility: hidden;
    }
  }
`;

export const NoContact = styled.div`
  padding-top: 32px;
  p {
    font-size: 16px;
    text-align: center;
  }
`;
import styled from 'styled-components';

interface GridBarProps {
  malesPercent: number;
  femalesPercent: number;
}

interface BarProps {
  percent: number;
}

export const Container = styled.div`
  grid-area: routes;
  overflow-y: scroll;
  padding: 24px;
`;

export const Divider = styled.div`
  width: 100%;
  height: 2px;
  background: #333333;
  margin-top: 8px;
  margin-bottom: 16px;
`;

export const GenderGridTitle = styled.div`
  margin-top: 16px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  div {
    padding: 16px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    strong {
      font-weight: 500;
      font-size: 16px;
    }
    span {
      margin-top: 4px;
      color: #999999;
    }
  }
`;

export const GenderGridBar = styled.div<GridBarProps>`
  display: grid;
  grid-template-columns: ${props => `${props.malesPercent}% ${props.femalesPercent}%`};
  width: 100%;
  margin-bottom: 40px;
`;

const ProgressBar = styled.div<BarProps>`
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    font-weight: 500;
    font-size: 20px;
    color: #ffffff;
  }
`;

export const MaleBar = styled(ProgressBar)`
  background: #48A9E0;
  border-radius: ${props => props.percent === 100 ? '32px' : '32px 0 0 32px'};
`;

export const FemaleBar = styled(ProgressBar)`
  background: #EA5EDC;
  border-radius: ${props => props.percent === 100 ? '32px' : '0 32px 32px 0'};
`;

export const LanguageCardGrid = styled.div`
  margin-top: 24px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 160px);
  gap: 16px;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #cccccc;
    border-radius: 16px;
    padding: 16px;
    width: 100%;
    p {
      font-size: 16px;
      font-weight: 500;
    }
    strong {
      font-weight: 500;
      color: #00ad4f;
      font-size: 20px;
      margin: 8px 0;
    }
    span {
      color: #999999;
    }
  }
`;

export const NoData = styled.div`
  p {
    font-size: 20px;
  }
`;
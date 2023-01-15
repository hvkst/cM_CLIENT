import styled from 'styled-components';

export const ControlsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  .timeLeftSpan {
    font-size: 0.95em;
    font-weight: 600;
    padding: 2px;
    border-radius: 4px;
    color: ${(props) => (props.timeLeft.substring(0, 2) * 1 > 10 ? '#4caf50' : '#ff6f6f')};
    /* background-color: ${(props) => (props.timeLeft.substring(0, 2) * 1 > 10 ? '#4caf50' : '#ff6f6f')}; */
    /* border: 1px solid ${(props) => (props.timeLeft.substring(0, 2) * 1 > 10 ? '#4caf50' : '#ff6f6f')}; */
    /* color: ${(props) => (props.timeLeft.substring(0, 2) * 1 > 10 ? '#000' : '#fff')}; */
  }
`;

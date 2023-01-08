import styled from 'styled-components';

export const Content = styled.div`
  h4 {
    margin: 0;
    text-align: right;
  }
  .timeLeftSpan {
    padding: 2px;
    border-radius: 4px;
    /* background-color: ${(props) => (props.timeLeft.substring(0, 2) * 1 > 10 ? 'lightgreen' : 'red')};
    color: ${(props) => (props.timeLeft.substring(0, 2) * 1 > 10 ? '#000' : '#fff')}; */
  }
`;

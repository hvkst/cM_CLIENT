import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 40px;
`;

export const ContactFormContainer = styled.div`
  position: relative;
  &:after {
    background-color: #d6c8df;
    width: 92%;
    height: 92%;
    transform: rotate(5deg);
    position: absolute;
    left: 4%;
    top: 4%;
    z-index: -1;
    content: '';
    transition: all 0.5s ease-in-out;
  }
`;

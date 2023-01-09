import styled from 'styled-components';

export const DataInput = styled.input`
  max-width: 100%;
  padding: 11px 13px;
  background: #f9f9fa;
  color: rgb(72, 61, 139);
  margin: 0.4rem;
  border-radius: 4px;
  outline: 0;
  border: 1px solid rgba(245, 245, 245, 0.7);
  font-size: 14px;
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  :focus,
  :hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.2), 0 1px 5px rgba(0, 0, 0, 0.2);
  }
`;

const FlexDiv = styled('div')`
  display: flex;
  flex-wrap: wrap;
  & Button {
    margin: 2px;
  }
`;

export const SectionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 20px 0;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export { FlexDiv };

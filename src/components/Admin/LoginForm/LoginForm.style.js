import styled from 'styled-components';
import Paper from '@mui/material/Paper';

export const LoginFormContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

// export const UserDataInput = styled.input`
//   max-width: 100%;
//   padding: 11px 13px;
//   background: #f9f9fa;
//   color: rgb(72, 61, 139);
//   margin-bottom: 0.9rem;
//   border-radius: 4px;
//   outline: 0;
//   border: 1px solid rgba(245, 245, 245, 0.7);
//   font-size: 14px;
//   transition: all 0.3s ease-out;
//   box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
//   :focus,
//   :hover {
//     box-shadow: 0 0 3px rgba(0, 0, 0, 0.2), 0 1px 5px rgba(0, 0, 0, 0.1);
//   }
// `;

// export const Button = styled.button`
//   max-width: 100%;
//   padding: 12px 13px;
//   color: rgb(253, 249, 243);
//   font-weight: 600;
//   text-transform: uppercase;
//   background: rgb(72, 61, 139);
//   border: none;
//   border-radius: 3px;
//   outline: 0;
//   cursor: pointer;
//   margin-top: 0.6rem;
//   box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
//   /* transition: all 0.1s ease-out; */
//   :hover {
//     background: rgb(92, 81, 159);
//   }
// `;

export const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContactPaper = styled(Paper)`
  margin: 20px;
  padding: 20px;
  /* h2 {
    margin: 0;
  }
  p {
    width: 80%;
    margin: 10px;
  } */
`;

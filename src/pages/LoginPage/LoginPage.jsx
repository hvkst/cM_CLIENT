// import axios from 'axios';
import SimplePaper from '../../components/Main/SimplePaper/SimplePaper';
import { LoginFormContainer, PageContainer } from './LoginPage.style';
import LoginForm from '../../components/Main/LoginForm/LoginForm';

export default function LoiginPage() {
  return (
    <div className="content-container">
      <PageContainer>
        {/* <LoginFormContainer> */}
        <SimplePaper>
          <h1>Login</h1>
          <LoginForm size="normal" />
        </SimplePaper>
        {/* </LoginFormContainer> */}
      </PageContainer>
    </div>
  );
}

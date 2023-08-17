// import axios from 'axios';
import SimplePaper from '../../components/Main/SimplePaper/SimplePaper';
import { PageContainer } from './LoginPage.style';
import LoginForm from '../../components/Main/LoginForm/LoginForm';

export default function LoiginPage() {
  return (
    <div className="content-container">
      <PageContainer>
        <SimplePaper>
          <h1>Login</h1>
          <LoginForm size="normal" />
        </SimplePaper>
      </PageContainer>
    </div>
  );
}

import moment from 'moment/moment';
import SimplePaper from '../../Main/SimplePaper/SimplePaper';
import { Content } from './UserDataContainer.style';

function UserDataContainer({ fullUserData }) {
  const timeLeft = new moment().to(moment(fullUserData.projects[0].dueDate), true);

  return (
    <SimplePaper>
      <Content {...{ timeLeft }}>
        <h4>{fullUserData.username}</h4>
        <p>
          {fullUserData.projects[0].title}
          <span className="timeLeftSpan">will be finished in {timeLeft}.</span>
        </p>
      </Content>
    </SimplePaper>
  );
}
export default UserDataContainer;

import * as React from 'react';
import { germanDate } from '../../../utils';
import moment from 'moment/moment';
import SimplePaper from '../../Main/SimplePaper/SimplePaper';
import { UserData, UserCardLink } from './UserCard.style';

export default function UserCard({ user, setAllUsers }) {
  const projectLink = `/adminbackend/user/${user._id}`;

  const timeLeft = new moment().to(moment(user.projects[0].dueDate), true);

  return (
    <UserCardLink to={projectLink}>
      <SimplePaper>
        <UserData {...{ timeLeft }}>
          <h3>{user.username}</h3>
          <p>{user.projects[0].title}</p>
          <p>created at: {germanDate(user.projects[0].createdAt)}</p>
          <p>due date: {germanDate(user.projects[0].dueDate)}</p>
          <p>
            <span className="timeLeftSpan">{timeLeft} left.</span>
          </p>
        </UserData>
      </SimplePaper>
    </UserCardLink>
  );
}

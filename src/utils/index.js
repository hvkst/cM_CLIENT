// import { BASE_URL } from '../hooks/config';

import moment from 'moment/moment';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { useNavigate } from 'react-router-dom';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export function shorterTime(str) {
  if (str === undefined) return null;
  const letterT = str.indexOf('T');
  return str.substring(0, letterT);
}

// 2022-12-14T14:50:31.924Z -> 14.12. 15:50
export function germanDate(str) {
  if (str === undefined) return null;
  const newOrder = str.split('-');
  const day = newOrder[2].substring(0, 2);
  const month = newOrder[1];
  const year = newOrder[0];
  return `${day}.${month}.${year}`;
}

export function commentTime(str) {
  if (str === undefined) return null;
  const newOrder = str.split('-');
  const day = newOrder[2].substring(0, 2);
  const month = newOrder[1];
  const year = newOrder[0];
  const time = newOrder[2].substring(3, 8);
  return `${day}.${month} - ${time}`;
}

export async function logout(logoutUser) {
  try {
    await fetch(BASE_URL + '/auth/logout', {
      method: 'POST',
      credentials: 'include',
    });
    logoutUser();
    // navigate('/');
  } catch (error) {
    console.warn(error.message);
  }
}

export async function confirmDelete(callback, arg1, arg2, arg3) {
  confirmAlert({
    title: 'Confirm to DELETE',
    message: 'Are you sure to do this?',
    buttons: [
      {
        label: 'Yes',
        onClick: () => callback(arg1, arg2, arg3),
      },
      {
        label: 'No',
      },
    ],
  });
}

export async function deleteSection(section, project, setProject) {
  try {
    const body = { sectionId: section._id, projectId: project._id };

    console.log(typeof setProject);

    const url = BASE_URL + '/admin/user/section/remove';

    const res = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(body),
    });
    const data = await res.json();
    setProject(data.updatedProject);

    console.log('Section deleted on Clientside');
  } catch (err) {
    console.error(err);
  }

  console.log('The end of...deleteSection');
}

export async function updateSection(newSectionData, section, project, setProject) {
  try {
    const body = { ...newSectionData, sectionId: section._id, projectId: project._id };

    const url = BASE_URL + '/admin/user/section/update';

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(body),
    });
    const data = await res.json();
    // console.log('server ANSWER', data.updatedProject[0]);
    setProject(data.updatedProject[0]);

    console.log('Section updated on Clientside');
  } catch (err) {
    console.error(err);
  }

  console.log('The end of...section update');
}

export async function updateUser(updatedUserData, setFullUserdata, setProject) {
  try {
    const body = { ...updatedUserData };

    const url = BASE_URL + '/admin/user/update';

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(body),
    });
    const data = await res.json();

    setProject(data.updatedUser.projects[0]);
    setFullUserdata(data.updatedUser);

    console.log('Section updated on Clientside');
  } catch (err) {
    console.error(err);
  }

  console.log('The end of...USER update');
}

// export { shorterTime, confirmDelete, deleteSection, updateSection };

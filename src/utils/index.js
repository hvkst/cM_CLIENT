// import { BASE_URL } from '../hooks/config';

import moment from 'moment/moment';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const BASE_URL = process.env.REACT_APP_BASE_URL;

export function germanDate(str) {
  return moment(str).format('DD.MM.YYYY');
}

export function commentTime(str) {
  return moment(str).format('DD-MM - HH:MM');
}

export async function logout(logoutUser) {
  try {
    await fetch(`${BASE_URL}/auth/logout`, {
      method: 'POST',
      credentials: 'include',
    });
    logoutUser();
  } catch (error) {
    console.warn(error.message);
  }
}

export async function confirmDelete(callback, arg1, arg2, arg3) {
  confirmAlert({
    customUI: ({ onClose }) => {
      return (
        <div className="custom-ui">
          <h1>Are you sure?</h1>
          <p>You want to delete this file?</p>
          <button onClick={onClose}>No</button>
          <button
          // onClick={() => {
          //   removeRecord(indexToRemove)
          //   onClose();
          // }}
          >
            Yes, Delete it!
          </button>
        </div>
      );
    },
  });
}
// export async function confirmDelete(callback, arg1, arg2, arg3) {
//   confirmAlert({
//     title: 'Confirm to DELETE',
//     message: 'Are you sure to do this?',
//     buttons: [
//       {
//         label: 'Yes',
//         onClick: () => callback(arg1, arg2, arg3),
//       },
//       {
//         label: 'No',
//       },
//     ],
//   });
// }

export async function addSection(newSectionState, project, setProject) {
  try {
    if (newSectionState.section === '') return;
    const formBody = { ...newSectionState, projectId: project._id };
    console.log(formBody);

    const url = `${BASE_URL}/admin/user/section/add`;
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(formBody),
    });
    const data = await res.json();
    console.log('data:', data);
    setProject(data.project);
    console.log('Project edited on Client');
  } catch (err) {
    console.error(err);
  }

  console.log('We reach here... AddSectionForm');
}

export async function updateSection(newSectionData, section, project, setProject) {
  try {
    const body = { ...newSectionData, sectionId: section._id, projectId: project._id };

    const url = `${BASE_URL}/admin/user/section/update`;

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(body),
    });
    const data = await res.json();
    setProject(data.updatedProject[0]);

    console.log('Section updated on Clientside');
  } catch (err) {
    console.error(err);
  }
  // console.log('The end of...section update');
}

export async function deleteSection(section, project, setProject) {
  try {
    const body = { sectionId: section._id, projectId: project._id };

    console.log(typeof setProject);

    const url = `${BASE_URL}/admin/user/section/remove`;
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
  // console.log('The end of...section delete');
}

export async function updateUser(updatedUserData, setFullUserdata, setProject) {
  try {
    const body = { ...updatedUserData };

    const url = `${BASE_URL}/admin/user/update`;
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

    console.log('User updated on Clientside');
  } catch (err) {
    console.error(err);
  }
  // console.log('The end of...user update');
}

// import { BASE_URL } from '../hooks/config';

const BASE_URL = process.env.REACT_APP_BASE_URL;

function shorterTime(str) {
  if (str === undefined) return null;
  const letterT = str.indexOf('T');
  return str.substring(0, letterT);
}

async function deleteUser(id, setAllUsers) {
  try {
    const body = { userId: id };
    console.log('delete this', body);

    const url = BASE_URL + '/admin/user/remove';

    const res = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(body),
    });
    const data = await res.json();
    setAllUsers(data.allUsers);

    console.log('User deleted on Clientside');
  } catch (err) {
    console.error(err);
  }

  console.log('The end of...deleteUser');
}

async function deleteSection(section, project, setProject) {
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

async function updateSection(newSectionData, section, project, setProject) {
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

export { shorterTime, deleteUser, deleteSection, updateSection };

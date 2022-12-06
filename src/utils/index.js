import { BASE_URL } from '../hooks/config';

function shorterTime(str) {
  const letterT = str.indexOf('T');
  return str.substring(0, letterT);
}

async function deleteUser(id, setAllUsers) {
  try {
    const body = { userId: id };
    console.log('delete this', body);

    const url = BASE_URL + '/admin/user/remove';

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(body),
    });
    const data = await res.json();
    console.log('data:', data);
    setAllUsers(data.allUsers);

    console.log('User deleted on Clientside');

    // navigate('/adminbackend');
  } catch (err) {
    console.error(err);
  }

  console.log('The end of...deleteUser');
}

export { shorterTime, deleteUser };

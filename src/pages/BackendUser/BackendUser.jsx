import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserSectionCard from '../../components/User/UserSectionCard/UserSectionCard';
import { ProjectContext } from '../../context/ProjectContext';
// import { BASE_URL } from '../../consts';
import { UserContext } from '../../context/UserContext';
// import { useGetFetch } from '../../hooks/useGetFetch';
import { FlexDiv } from '../../styles';

const BASE_URL = process.env.REACT_APP_BASE_URL;

function BackendUser() {
  const { user, loading } = useContext(UserContext);
  const { project, setProject } = useContext(ProjectContext);
  const [fullUserData, setFullUserdata] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    } else if (user) {
      if (user.isAdmin) {
        navigate('/adminbackend');
      }
    }
  }, [user, navigate]);

  // Get full user
  // const data = useGetFetch('/admin/user/' + user.id);
  // console.log(user.id);
  // console.log('DATA', data);

  useEffect(() => {
    if (user) {
      const { id } = user;
      async function fetchData() {
        try {
          const res = await fetch(BASE_URL + '/admin/user/' + id, {
            method: 'GET',
            credentials: 'include',
          });

          const resData = await res.json();
          console.log(resData);
          if (res.ok) {
            setFullUserdata(resData.user[0]);
            setProject(resData.user[0].projects[0]);
          } else {
            throw new Error(resData.error);
          }
        } catch (error) {
          console.error(error);
        }
      }
      fetchData();
    }
  }, [user, loading, setProject]);

  return (
    <div className="content-container">
      <h1>BackendUser</h1>
      {fullUserData && (
        <>
          <h1> {fullUserData.username} </h1>
          {project && (
            <>
              <h2> {project.title} </h2>
              <FlexDiv>
                {project.sections.map((section) => {
                  return <UserSectionCard key={section._id} {...{ section }}></UserSectionCard>; // No need for full project here
                })}
              </FlexDiv>
            </>
          )}
        </>
      )}
    </div>
  );
}
export default BackendUser;

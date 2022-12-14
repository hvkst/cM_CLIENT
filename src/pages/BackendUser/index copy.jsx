import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserSectionCard from '../../components/User/UserSectionCard';
import { ProjectContext } from '../../context/ProjectContext';
// import { BASE_URL } from '../../consts';
import { UserContext } from '../../context/UserContext';
import { useGetFetch } from '../../hooks/useGetFetch';
import { FlexDiv } from '../../styles';

const BASE_URL = process.env.REACT_APP_BASE_URL;

function BackendUser() {
  const { user } = useContext(UserContext);
  const { project, setProject } = useContext(ProjectContext);
  const [fullUserData, setFullUserdata] = useState();
  // const [projectData, setProjectData] = useState();
  // const params = useParams();
  const navigate = useNavigate();
  // Get full user
  const data = useGetFetch('/admin/user/' + user.id);
  console.log(user.id);
  console.log('DATA', data);

  useEffect(() => {
    data && setFullUserdata(data.user[0]);
  }, [data]);

  // This might be unnecessary if there is only one project,
  //  same could be done with const project = data.user[0].projects[0]
  useEffect(() => {
    data && setProject(data.user[0].projects[0]);
  }, [data, setProject]);

  useEffect(() => {
    if (!user) {
      navigate('/login');
    } else if (user) {
      if (user.isAdmin) {
        navigate('/adminbackend');
      }
    }
  }, [user, navigate]);

  return (
    <>
      <h1>BackendUser</h1>
      {user && (
        <>
          <h1> {user.username} </h1>
          {project && (
            <>
              <h2> {project.title} </h2>
              <FlexDiv>
                {project.sections.map((section) => {
                  return <UserSectionCard key={section._id} {...{ section }}></UserSectionCard>;
                })}
              </FlexDiv>
            </>
          )}
        </>
      )}
    </>
  );
}
export default BackendUser;

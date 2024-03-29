import { useContext, useEffect, useState } from 'react';
import { ProjectContext } from '../../context/ProjectContext';
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import SimplePaper from '../../components/Main/SimplePaper/SimplePaper';
import UserDataContainer from '../../components/User/UserDataContainer/UserDataContainer';
import { AlertTitle } from '@mui/material';
import { UserBackendContainer, UpperContainer, UserAlert } from './UserBackend.style';
import SectionCard from '../../components/Main/SectionCard/SectionCard';
import { SectionsContainer } from '../../styles';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export default function BackendUser() {
  const { user, loading } = useContext(UserContext);
  const { project, setProject } = useContext(ProjectContext);
  const [fullUserData, setFullUserdata] = useState();
  const [showAlert, setShowAlert] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/');
    } else if (user) {
      if (user.isAdmin) {
        navigate('/adminbackend');
      }
      if (!user.isAdmin) {
        navigate('/userbackend');
      }
    }
  }, [user, navigate]);

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

  const closeAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className="content-container">
      <UserBackendContainer>
        <h1>BackendUser</h1>
        {fullUserData && (
          <>
            <UpperContainer>
              {showAlert && (
                <SimplePaper>
                  <UserAlert severity="info" onClose={closeAlert}>
                    <AlertTitle>Welcome, {fullUserData.username}!</AlertTitle>
                    <p>
                      This is your backend. <br /> Here you can track our progress and chat with me about our progress.
                    </p>
                    <p>Please remember to upload texts and images in time ;)</p>
                  </UserAlert>
                </SimplePaper>
              )}
            </UpperContainer>
            {project && (
              <>
                <UserDataContainer {...{ fullUserData }} />

                <SectionsContainer>
                  {project.sections.map((section) => {
                    return <SectionCard key={section._id} {...{ section, project, setProject }} />;
                  })}
                </SectionsContainer>
              </>
            )}
          </>
        )}
      </UserBackendContainer>
    </div>
  );
}

import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetFetch } from '../../hooks/useGetFetch';
import { germanDate } from '../../utils';
import AddSection from '../../components/Admin/AddSection/AddSection';
import { ProjectContext } from '../../context/ProjectContext';
import SectionCard from '../../components/Admin/SectionCard/SectionCard';
import { FlexDiv } from '../../styles';
import { AdminUserPageContainer, UserDataContainer } from './AdminUserPage.style';
import UpdateUserForm from '../../components/Admin/UpdateUserForm/UpdateUserForm';

function AdminUserPage() {
  const { project, setProject } = useContext(ProjectContext);
  const [fullUserData, setFullUserdata] = useState();
  // const [projectData, setProjectData] = useState();
  const params = useParams();

  // Get full user
  const data = useGetFetch('/admin/user/' + params.id);

  useEffect(() => {
    data && setFullUserdata(data.user[0]);
    console.log('data', data);
  }, [data]);

  // This might be unnecessary if there is only one project,
  //  same could be done with const project = data.user[0].projects[0]

  useEffect(() => {
    data && setProject(data.user[0].projects[0]);
  }, [data, setProject]);

  return (
    <AdminUserPageContainer>
      {fullUserData && (
        <>
          <UserDataContainer>
            <UpdateUserForm {...{ fullUserData, setFullUserdata, setProject }} />
          </UserDataContainer>
          <AddSection {...{ project, setProject }} />

          {project.sections && (
            <>
              <FlexDiv>
                {project.sections.map((section) => {
                  return <SectionCard key={section._id} {...{ section, project, setProject }} />;
                })}
              </FlexDiv>
            </>
          )}
        </>
      )}
    </AdminUserPageContainer>
  );
}

export default AdminUserPage;

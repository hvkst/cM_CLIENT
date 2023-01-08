import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetFetch } from '../../hooks/useGetFetch';
import { ProjectContext } from '../../context/ProjectContext';
import AddSection from '../../components/Admin/AddSection/AddSection';
import SectionCard from '../../components/Admin/SectionCard/SectionCard';
import UpdateUserForm from '../../components/Admin/UpdateUserForm/UpdateUserForm';
import SimplePaper from '../../components/Main/SimplePaper/SimplePaper';
import DeleteUser from '../../components/Admin/DeleteUser/DeleteUser';
import { AdminUserPageContainer, SectionContainer, UpperContainer, RightContainer } from './AdminUserPage.style';

function AdminUserPage() {
  const { project, setProject } = useContext(ProjectContext);
  const [fullUserData, setFullUserdata] = useState();
  const params = useParams();

  // Get full user
  const data = useGetFetch('/admin/user/' + params.id);

  useEffect(() => {
    data && setFullUserdata(data.user[0]);
    console.log('data', data);
  }, [data]);

  useEffect(() => {
    data && setProject(data.user[0].projects[0]);
  }, [data, setProject]);

  return (
    <div className="content-container">
      <AdminUserPageContainer>
        <h1>AdminUserPage</h1>
        {fullUserData && (
          <>
            <UpperContainer>
              <SimplePaper>
                <UpdateUserForm {...{ fullUserData, setFullUserdata, setProject }} />
              </SimplePaper>
              <RightContainer>
                <DeleteUser user={fullUserData} />
                <AddSection {...{ project, setProject }} />
              </RightContainer>
            </UpperContainer>
            {project.sections && (
              <>
                <SectionContainer>
                  {project.sections.map((section) => {
                    return <SectionCard key={section._id} {...{ section, project, setProject }} />;
                  })}
                </SectionContainer>
              </>
            )}
          </>
        )}
      </AdminUserPageContainer>
    </div>
  );
}

export default AdminUserPage;

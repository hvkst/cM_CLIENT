import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetFetch } from '../../hooks/useGetFetch';
import { ProjectContext } from '../../context/ProjectContext';
import AddSection from '../../components/Admin/AddSection/AddSection';
import UpdateUserForm from '../../components/Admin/UpdateUserForm/UpdateUserForm';
import DeleteUser from '../../components/Admin/DeleteUser/DeleteUser';
import { AdminUserPageContainer, UpperContainer, RightContainer } from './AdminUserPage.style';
import SectionCard from '../../components/Main/SectionCard/SectionCard';
import { SectionsContainer } from '../../styles';

export default function AdminUserPage() {
  const { project, setProject } = useContext(ProjectContext);
  const [fullUserData, setFullUserdata] = useState();
  const [showDeleteOption, setShowDeleteOption] = useState(false);
  const [showAddSectionOption, setShowAddSectionOption] = useState(false);

  const params = useParams();

  // Get full user
  const data = useGetFetch('/admin/user/' + params.id);

  useEffect(() => {
    data && setFullUserdata(data.user[0]);
    // console.log('data', data);
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
              <UpdateUserForm {...{ fullUserData, setFullUserdata, setProject, setShowDeleteOption, setShowAddSectionOption }} />
              <RightContainer>
                {showDeleteOption && <DeleteUser showDeleteOption={showDeleteOption} userId={fullUserData._id} userName={fullUserData.username} />}
                {showAddSectionOption && <AddSection {...{ project, setProject }} />}
              </RightContainer>
            </UpperContainer>
            {project.sections && (
              <>
                <SectionsContainer>
                  {project.sections.map((section) => {
                    return <SectionCard key={section._id} {...{ section, project, setProject }} />;
                  })}
                </SectionsContainer>
              </>
            )}
          </>
        )}
      </AdminUserPageContainer>
    </div>
  );
}

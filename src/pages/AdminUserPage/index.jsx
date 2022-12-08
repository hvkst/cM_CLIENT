import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetFetch } from '../../hooks/useGetFetch';
import { shorterTime } from '../../utils';
import AddSection from '../../components/AddSection';
import { ProjectContext } from '../../context/ProjectContext';
import SectionCard from '../../components/SectionCard';
import { FlexDiv } from '../../styles';

function AdminUserPage({ user }) {
  const { project, setProject } = useContext(ProjectContext);
  const [fullUserData, setFullUserdata] = useState();
  // const [projectData, setProjectData] = useState();
  const params = useParams();

  // Get full user
  const data = useGetFetch('/admin/user/' + params.id);

  // console.log('DATA', data);

  useEffect(() => {
    data && setFullUserdata(data.user[0]);
  }, [data]);

  useEffect(() => {
    data && setProject(data.user[0].projects[0]);
  }, [data, setProject]);

  return (
    <>
      <h1>AdminUserPage</h1>
      {fullUserData && (
        <>
          <p>user: {fullUserData.username}</p>
          <p>project: {project.title}</p>
          <p>created at: {shorterTime(project.createdAt)}</p>
          <p>due date: {project.dueDate}</p>
          <p>Sections: </p>
          {project.sections && (
            <>
              <FlexDiv>
                {project.sections.map((section) => {
                  return <SectionCard key={section._id} {...{ section, project, setProject }} />;
                })}
              </FlexDiv>
            </>
          )}

          <AddSection {...{ project, setProject }} />
        </>
      )}
    </>
  );
}
export default AdminUserPage;

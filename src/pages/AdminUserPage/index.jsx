import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetFetch } from '../../hooks/useGetFetch';
import { shorterTime } from '../../utils';
import AddSection from '../../components/AddSection';
import { ProjectContext } from '../../context/ProjectContext';

function AdminUserPage({ user }) {
  const { project, setProject, updateproject } = useContext(ProjectContext);
  const [fullUserData, setFullUserdata] = useState();
  // const [projectData, setProjectData] = useState();
  const params = useParams();

  // Get full user
  const data = useGetFetch('/admin/user/' + params.id);

  // console.log(projectData);

  useEffect(() => {
    data && setFullUserdata(data);
  }, [data]);

  useEffect(() => {
    data && setProject(data.user[0].project[0]);
  }, [data, setProject]);

  return (
    <>
      <h1>AdminUserPage</h1>
      {fullUserData && (
        <>
          <p>params.id {params.id}</p>
          <p>user: {fullUserData.user[0].username}</p>
          <p>
            project: {project.title} - {project._id}
          </p>
          <p>created at: {shorterTime(project.createdAt)}</p>
          <p>due date: {project.dueDate}</p>
          <p>
            Sections:{' '}
            {project.sections.map((section) => {
              return <span>{section.title}, </span>;
            })}
          </p>
          <AddSection {...{ project, updateproject }} />
        </>
      )}
    </>
  );
}
export default AdminUserPage;

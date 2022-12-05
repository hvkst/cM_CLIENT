import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetFetch } from '../../hooks/useGetFetch';
import { shorterTime } from '../../utils';
import EditProject from '../EditProject';

function AdminUserPage({ user }) {
  const [fullUserData, setFullUserdata] = useState();
  const [projectData, setProjectData] = useState();
  const params = useParams();

  // Get all users
  const data = useGetFetch('/admin/user/' + params.id);

  console.log(projectData);

  useEffect(() => {
    data && setFullUserdata(data);
  }, [data]);

  useEffect(() => {
    data && setProjectData(data.user[0].project[0]);
  }, [data]);

  return (
    <>
      <h1>AdminUserPage</h1>
      {fullUserData && (
        <>
          <p>params.id {params.id}</p>
          <p>user: {fullUserData.user[0].username}</p>
          <p>
            project: {projectData.title} - {projectData._id}
          </p>
          <p>created at: {shorterTime(projectData.createdAt)}</p>
          <p>due date: {projectData.dueDate}</p>
          <p>
            Sections:{' '}
            {projectData.sections.map((section) => {
              return <span>{section.title}, </span>;
            })}
          </p>
          <EditProject project={projectData} />
        </>
      )}
    </>
  );
}
export default AdminUserPage;

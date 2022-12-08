import { createContext, useState } from 'react';

export const ProjectContext = createContext();

export function ProjectContextProvider({ children }) {
  const [project, setProject] = useState(null);

  // const updateproject = (projectDataFromDb) => {
  //   setProject(projectDataFromDb);
  // };

  return <ProjectContext.Provider value={{ project, setProject }}>{children}</ProjectContext.Provider>;
}

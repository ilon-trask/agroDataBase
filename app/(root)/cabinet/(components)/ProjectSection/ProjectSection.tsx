"use client";
import ProjectTable from "@/app/(root)/(components)/ProjectTable";
import Div from "@/components/ui/Div";
import React, { useState } from "react";
import ProjectSectionDialog from "./ProjectSectionDialog.tsx/ProjectSectionDialog";
import { ProjectWithUser } from "@/types/ProjectTypes";

function ProjectSection({ projects }: { projects: ProjectWithUser[] }) {
  const [projectsData, setProjectsData] = useState<ProjectWithUser[] | []>(
    projects
  );
  return (
    <Div>
      <ProjectTable
        projectsData={projectsData}
        setProjectsData={setProjectsData}
      />
      <ProjectSectionDialog setProjectsData={setProjectsData} />
    </Div>
  );
}

export default ProjectSection;

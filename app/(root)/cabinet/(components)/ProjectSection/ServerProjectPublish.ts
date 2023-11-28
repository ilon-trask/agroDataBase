"use server";
import prismadb from "@/lib/prismadb";
import { ProjectWithUser } from "@/types/ProjectTypes";

async function ProjectPublish(id: number, isPublic: boolean) {
  const res: ProjectWithUser = await prismadb.project.update({
    data: {
      isPublic,
    },
    where: { id },
    include: { initiator: true },
  });
  return res;
}

export default ProjectPublish;

import prismadb from "@/lib/prismadb";
import { ProjectWithUser } from "@/types/ProjectTypes";

export default async function getProjectPublic(): Promise<
  ProjectWithUser[] | []
> {
  const projects = await prismadb.project.findMany({
    include: { initiator: true },
    where: { isPublic: true },
    orderBy: { id: "asc" },
  });
  return projects;
}

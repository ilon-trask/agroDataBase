"use server";

import { User } from "@prisma/client";
import { ProjectCreateData } from "./ProjectSectionDialog.tsx/ProjectSectionDialog";
import prismadb from "@/lib/prismadb";
import { ProjectWithUser } from "@/types/ProjectTypes";

async function ServerProjectCreate(data: ProjectCreateData, user: User) {
  const res: ProjectWithUser = await prismadb.project.create({
    data: {
      ...data,
      initiatorId: user.id,
    },
    include: { initiator: true },
  });

  return res;
}

export default ServerProjectCreate;

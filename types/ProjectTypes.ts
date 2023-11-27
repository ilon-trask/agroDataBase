import { User, Project } from "@prisma/client";
export interface ProjectWithUser extends Project {
  initiator: User | null;
}

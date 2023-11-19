import { User, Project } from "@prisma/client";
export interface ProjectWithUser extends Project {
  user: User;
}

import { User, Project } from "@prisma/client";
export interface ProjectWithUser extends Project {
  //треба забрати
  initiator?: User | null;
}

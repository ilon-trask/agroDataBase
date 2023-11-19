import { DemonstrationActivity, User } from "@prisma/client";
export interface DemonstrationActivityWithUser extends DemonstrationActivity {
  user: User;
}

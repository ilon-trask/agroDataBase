import { Event, User } from "@prisma/client";
export interface EventWithUser extends Event {
  user: User | undefined | null;
}

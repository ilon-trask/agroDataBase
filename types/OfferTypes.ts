import { User, Offer, POU } from "@prisma/client";

export interface OfferWithUserAndPOU extends Omit<Offer, "type" | "category"> {
  POU: POU | undefined | null;
  user: User;
  type: "Купівля" | "Продаж" | string;
  category: "Товари" | "Роботи" | "Послуги" | string;
}

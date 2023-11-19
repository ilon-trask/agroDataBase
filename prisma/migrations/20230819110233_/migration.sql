/*
  Warnings:

  - You are about to drop the column `positon` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "positon",
ADD COLUMN     "position" TEXT,
ALTER COLUMN "workPhone" DROP NOT NULL,
ALTER COLUMN "phone" DROP NOT NULL;

/*
  Warnings:

  - You are about to drop the column `name` on the `Enterprise` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[code]` on the table `Enterprise` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Enterprise" DROP CONSTRAINT "Enterprise_userId_fkey";

-- AlterTable
ALTER TABLE "Enterprise" DROP COLUMN "name",
ALTER COLUMN "userId" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Enterprise_code_key" ON "Enterprise"("code");

-- CreateIndex
CREATE INDEX "Enterprise_userId_regionId_demonstrationFarmId_code_idx" ON "Enterprise"("userId", "regionId", "demonstrationFarmId", "code");

-- AddForeignKey
ALTER TABLE "Enterprise" ADD CONSTRAINT "Enterprise_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

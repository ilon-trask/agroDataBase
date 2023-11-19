/*
  Warnings:

  - A unique constraint covering the columns `[demonstrationFarmId]` on the table `Enterprise` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Enterprise_demonstrationFarmId_key" ON "Enterprise"("demonstrationFarmId");

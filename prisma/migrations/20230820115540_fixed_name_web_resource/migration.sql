/*
  Warnings:

  - You are about to drop the `WebResorce` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "WebResorce" DROP CONSTRAINT "WebResorce_demonstrationFarmId_fkey";

-- DropTable
DROP TABLE "WebResorce";

-- CreateTable
CREATE TABLE "WebResource" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "demonstrationFarmId" INTEGER NOT NULL,

    CONSTRAINT "WebResource_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "WebResource" ADD CONSTRAINT "WebResource_demonstrationFarmId_fkey" FOREIGN KEY ("demonstrationFarmId") REFERENCES "DemonstrationFarm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- CreateTable
CREATE TABLE "WebResorce" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "demonstrationFarmId" INTEGER NOT NULL,

    CONSTRAINT "WebResorce_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "WebResorce" ADD CONSTRAINT "WebResorce_demonstrationFarmId_fkey" FOREIGN KEY ("demonstrationFarmId") REFERENCES "DemonstrationFarm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

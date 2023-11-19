-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "sub" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'user',
    "positon" TEXT NOT NULL,
    "workPhone" INTEGER NOT NULL,
    "phone" INTEGER NOT NULL,
    "firstName" TEXT,
    "secondName" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DemonstrationActivity" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DemonstrationActivity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DemonstrationFarm" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "DemonstrationFarm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Specialization" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "userId" INTEGER,

    CONSTRAINT "Specialization_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FarmSpecialization" (
    "id" SERIAL NOT NULL,
    "areaOrPopulation" DOUBLE PRECISION NOT NULL,
    "specializationId" INTEGER NOT NULL,
    "demonstrationFarmId" INTEGER NOT NULL,

    CONSTRAINT "FarmSpecialization_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AmountSpecialization" (
    "id" SERIAL NOT NULL,
    "year" INTEGER NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "farmSpecializationId" INTEGER NOT NULL,

    CONSTRAINT "AmountSpecialization_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Trainer" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "direction" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Trainer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Direction" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "userId" INTEGER,

    CONSTRAINT "Direction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Enterprise" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "code" INTEGER NOT NULL,
    "district" TEXT NOT NULL,
    "village" TEXT NOT NULL,
    "pagesOnInternet" TEXT NOT NULL,
    "pagesOnNetworks" TEXT NOT NULL,
    "creatorId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "regionId" INTEGER NOT NULL,
    "demonstrationFarmId" INTEGER NOT NULL,

    CONSTRAINT "Enterprise_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Region" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Region_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_DirectionToTrainer" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE INDEX "User_sub_idx" ON "User"("sub");

-- CreateIndex
CREATE INDEX "DemonstrationActivity_userId_idx" ON "DemonstrationActivity"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "_DirectionToTrainer_AB_unique" ON "_DirectionToTrainer"("A", "B");

-- CreateIndex
CREATE INDEX "_DirectionToTrainer_B_index" ON "_DirectionToTrainer"("B");

-- AddForeignKey
ALTER TABLE "DemonstrationActivity" ADD CONSTRAINT "DemonstrationActivity_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DemonstrationFarm" ADD CONSTRAINT "DemonstrationFarm_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Specialization" ADD CONSTRAINT "Specialization_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FarmSpecialization" ADD CONSTRAINT "FarmSpecialization_specializationId_fkey" FOREIGN KEY ("specializationId") REFERENCES "Specialization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FarmSpecialization" ADD CONSTRAINT "FarmSpecialization_demonstrationFarmId_fkey" FOREIGN KEY ("demonstrationFarmId") REFERENCES "DemonstrationFarm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AmountSpecialization" ADD CONSTRAINT "AmountSpecialization_farmSpecializationId_fkey" FOREIGN KEY ("farmSpecializationId") REFERENCES "FarmSpecialization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trainer" ADD CONSTRAINT "Trainer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Direction" ADD CONSTRAINT "Direction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Enterprise" ADD CONSTRAINT "Enterprise_demonstrationFarmId_fkey" FOREIGN KEY ("demonstrationFarmId") REFERENCES "DemonstrationFarm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Enterprise" ADD CONSTRAINT "Enterprise_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Enterprise" ADD CONSTRAINT "Enterprise_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Enterprise" ADD CONSTRAINT "Enterprise_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "Region"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DirectionToTrainer" ADD CONSTRAINT "_DirectionToTrainer_A_fkey" FOREIGN KEY ("A") REFERENCES "Direction"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DirectionToTrainer" ADD CONSTRAINT "_DirectionToTrainer_B_fkey" FOREIGN KEY ("B") REFERENCES "Trainer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

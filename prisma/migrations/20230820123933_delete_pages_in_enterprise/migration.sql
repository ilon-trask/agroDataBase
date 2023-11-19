/*
  Warnings:

  - You are about to drop the column `pagesOnInternet` on the `Enterprise` table. All the data in the column will be lost.
  - You are about to drop the column `pagesOnNetworks` on the `Enterprise` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Enterprise" DROP COLUMN "pagesOnInternet",
DROP COLUMN "pagesOnNetworks";

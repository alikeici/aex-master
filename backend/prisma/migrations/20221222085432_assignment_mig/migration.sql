/*
  Warnings:

  - You are about to drop the column `namn` on the `users` table. All the data in the column will be lost.
  - Added the required column `name` to the `users` table without a default value. This is not possible if the table is not empty.
  - Made the column `email` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `password` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "namn",
ADD COLUMN     "name" TEXT NOT NULL,
ALTER COLUMN "email" SET NOT NULL,
ALTER COLUMN "password" SET NOT NULL;

-- CreateTable
CREATE TABLE "cleanings" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "timeDate" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "customer" INTEGER NOT NULL,
    "dustAndGrimeSpecialist" INTEGER NOT NULL,

    CONSTRAINT "cleanings_pkey" PRIMARY KEY ("id")
);

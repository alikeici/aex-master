/*
  Warnings:

  - You are about to drop the column `customer` on the `cleanings` table. All the data in the column will be lost.
  - You are about to drop the column `dustAndGrimeSpecialist` on the `cleanings` table. All the data in the column will be lost.
  - You are about to drop the column `timeDate` on the `cleanings` table. All the data in the column will be lost.
  - You are about to drop the column `cleaner` on the `user_cleanings` table. All the data in the column will be lost.
  - You are about to drop the column `customer` on the `user_cleanings` table. All the data in the column will be lost.
  - Added the required column `completed` to the `cleanings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customerId` to the `cleanings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ordered` to the `cleanings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cleaningId` to the `user_cleanings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `specialistId` to the `user_cleanings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "cleanings" DROP COLUMN "customer",
DROP COLUMN "dustAndGrimeSpecialist",
DROP COLUMN "timeDate",
ADD COLUMN     "completed" TEXT NOT NULL,
ADD COLUMN     "customerId" INTEGER NOT NULL,
ADD COLUMN     "ordered" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "user_cleanings" DROP COLUMN "cleaner",
DROP COLUMN "customer",
ADD COLUMN     "cleaningId" INTEGER NOT NULL,
ADD COLUMN     "specialistId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "role" TEXT NOT NULL;

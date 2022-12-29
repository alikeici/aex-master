/*
  Warnings:

  - You are about to drop the column `name` on the `users` table. All the data in the column will be lost.
  - Added the required column `fname` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lname` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "name",
ADD COLUMN     "fname" TEXT NOT NULL,
ADD COLUMN     "lname" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "user_cleanings" (
    "id" SERIAL NOT NULL,
    "cleaner" INTEGER NOT NULL,
    "customer" INTEGER NOT NULL,

    CONSTRAINT "user_cleanings_pkey" PRIMARY KEY ("id")
);

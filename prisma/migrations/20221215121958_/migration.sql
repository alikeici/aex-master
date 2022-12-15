-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "namn" TEXT,
    "email" TEXT,
    "password" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

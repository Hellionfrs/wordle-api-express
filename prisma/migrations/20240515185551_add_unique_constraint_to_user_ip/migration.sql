/*
  Warnings:

  - A unique constraint covering the columns `[user_ip]` on the table `Gamer` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Gamer_user_ip_key" ON "Gamer"("user_ip");

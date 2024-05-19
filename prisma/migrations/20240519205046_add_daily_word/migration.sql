/*
  Warnings:

  - A unique constraint covering the columns `[word]` on the table `DailyWord` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "DailyWord_word_key" ON "DailyWord"("word");

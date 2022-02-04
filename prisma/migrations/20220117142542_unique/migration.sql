/*
  Warnings:

  - A unique constraint covering the columns `[validationCode]` on the table `estimate` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `estimate_validationCode_key` ON `estimate`(`validationCode`);

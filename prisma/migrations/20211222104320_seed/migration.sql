/*
  Warnings:

  - You are about to alter the column `deadLine` on the `estimate` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.

*/
-- AlterTable
ALTER TABLE `estimate` MODIFY `deadLine` DATETIME(3) NULL;

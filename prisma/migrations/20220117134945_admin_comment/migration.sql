/*
  Warnings:

  - You are about to drop the column `adminCommnent` on the `estimate` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `estimate` DROP COLUMN `adminCommnent`,
    ADD COLUMN `adminComment` LONGTEXT NULL;

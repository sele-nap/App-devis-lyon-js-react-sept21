/*
  Warnings:

  - Made the column `additionalInformation` on table `estimate` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `estimate` ADD COLUMN `waitingDate` DATETIME(3) NULL,
    MODIFY `additionalInformation` LONGTEXT NOT NULL;

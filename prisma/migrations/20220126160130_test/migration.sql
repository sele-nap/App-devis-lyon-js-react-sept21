/*
  Warnings:

  - Made the column `additionalInformation` on table `estimate` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `estimate` MODIFY `additionalInformation` LONGTEXT NOT NULL;

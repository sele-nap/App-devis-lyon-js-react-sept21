/*
  Warnings:

  - Made the column `role` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `activationCode` VARCHAR(191) NULL,
    ADD COLUMN `inscriptionDate` DATETIME(3) NULL,
    MODIFY `address1` VARCHAR(191) NULL,
    MODIFY `address2` VARCHAR(191) NULL,
    MODIFY `city` VARCHAR(191) NULL,
    MODIFY `firstname` VARCHAR(191) NULL,
    MODIFY `lastname` VARCHAR(191) NULL,
    MODIFY `managerName` VARCHAR(191) NULL,
    MODIFY `organizationName` VARCHAR(191) NULL,
    MODIFY `organizationType` VARCHAR(191) NULL,
    MODIFY `phone` VARCHAR(191) NULL,
    MODIFY `siretNumber` VARCHAR(191) NULL,
    MODIFY `zipCode` VARCHAR(191) NULL,
    MODIFY `role` VARCHAR(191) NOT NULL DEFAULT 'client';

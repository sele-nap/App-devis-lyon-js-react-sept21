/*
  Warnings:

  - Added the required column `activationCode` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address1` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address2` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstname` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `inscriptionDate` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastname` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `managerName` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `organizationName` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `organizationType` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `siretNumber` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zipCode` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `activationCode` VARCHAR(191) NOT NULL,
    ADD COLUMN `address1` VARCHAR(191) NOT NULL,
    ADD COLUMN `address2` VARCHAR(191) NOT NULL,
    ADD COLUMN `city` VARCHAR(191) NOT NULL,
    ADD COLUMN `firstname` VARCHAR(191) NOT NULL,
    ADD COLUMN `inscriptionDate` DATETIME(3) NOT NULL,
    ADD COLUMN `lastname` VARCHAR(191) NOT NULL,
    ADD COLUMN `managerName` VARCHAR(191) NOT NULL,
    ADD COLUMN `organizationName` VARCHAR(191) NOT NULL,
    ADD COLUMN `organizationType` VARCHAR(191) NOT NULL,
    ADD COLUMN `phone` VARCHAR(191) NOT NULL,
    ADD COLUMN `siretNumber` VARCHAR(191) NOT NULL,
    ADD COLUMN `zipCode` VARCHAR(191) NOT NULL;

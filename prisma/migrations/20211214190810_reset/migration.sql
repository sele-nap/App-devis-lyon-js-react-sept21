/*
  Warnings:

  - You are about to drop the column `activationCode` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `inscriptionDate` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `activationCode`,
    DROP COLUMN `inscriptionDate`;

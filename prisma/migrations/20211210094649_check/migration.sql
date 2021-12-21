/*
  Warnings:

  - You are about to drop the column `activationCode` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `address1` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `address2` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `city` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `firstname` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `inscriptionDate` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `lastname` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `managerName` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `organizationName` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `organizationType` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `siretNumber` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `zipCode` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `activationCode`,
    DROP COLUMN `address1`,
    DROP COLUMN `address2`,
    DROP COLUMN `city`,
    DROP COLUMN `firstname`,
    DROP COLUMN `inscriptionDate`,
    DROP COLUMN `lastname`,
    DROP COLUMN `managerName`,
    DROP COLUMN `organizationName`,
    DROP COLUMN `organizationType`,
    DROP COLUMN `phone`,
    DROP COLUMN `siretNumber`,
    DROP COLUMN `zipCode`;

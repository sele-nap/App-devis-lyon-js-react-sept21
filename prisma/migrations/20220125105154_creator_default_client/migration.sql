/*
  Warnings:

  - Made the column `creator` on table `attachedFile` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `attachedFile` MODIFY `creator` VARCHAR(191) NOT NULL DEFAULT 'client';

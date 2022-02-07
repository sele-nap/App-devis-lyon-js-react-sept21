/*
  Warnings:

  - You are about to drop the `attachedFileOnEstimate` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `estimateId` to the `attachedFile` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `attachedFileOnEstimate` DROP FOREIGN KEY `attachedFileOnEstimate_attachedFileId_fkey`;

-- DropForeignKey
ALTER TABLE `attachedFileOnEstimate` DROP FOREIGN KEY `attachedFileOnEstimate_estimateId_fkey`;

-- AlterTable
ALTER TABLE `attachedFile` ADD COLUMN `estimateId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `inscriptionDate` DATETIME(3) NULL;

-- DropTable
DROP TABLE `attachedFileOnEstimate`;

-- AddForeignKey
ALTER TABLE `attachedFile` ADD CONSTRAINT `attachedFile_estimateId_fkey` FOREIGN KEY (`estimateId`) REFERENCES `estimate`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

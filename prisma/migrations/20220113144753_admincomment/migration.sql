-- DropForeignKey
ALTER TABLE `attachedFile` DROP FOREIGN KEY `attachedFile_estimateId_fkey`;

-- AlterTable
ALTER TABLE `attachedFile` MODIFY `estimateId` INTEGER NULL;

-- AlterTable
ALTER TABLE `estimate` ADD COLUMN `adminComment` LONGTEXT NULL;

-- AddForeignKey
ALTER TABLE `attachedFile` ADD CONSTRAINT `attachedFile_estimateId_fkey` FOREIGN KEY (`estimateId`) REFERENCES `estimate`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

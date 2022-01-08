-- DropForeignKey
ALTER TABLE `estimate` DROP FOREIGN KEY `estimate_userId_fkey`;

-- AlterTable
ALTER TABLE `estimate` MODIFY `userId` INTEGER NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `inscriptionDate` DATETIME(3) NULL;

-- AddForeignKey
ALTER TABLE `estimate` ADD CONSTRAINT `estimate_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

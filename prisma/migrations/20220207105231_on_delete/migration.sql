-- DropForeignKey
ALTER TABLE `estimate` DROP FOREIGN KEY `estimate_userId_fkey`;

-- AddForeignKey
ALTER TABLE `estimate` ADD CONSTRAINT `estimate_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

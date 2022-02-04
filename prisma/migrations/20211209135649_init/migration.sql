/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `user` will be added. If there are existing duplicate values, this will fail.
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
    ADD COLUMN `organizationType` ENUM('NON_PROFIT_ORGANIZATION', 'TOWN_HALL', 'MILITARY') NOT NULL,
    ADD COLUMN `phone` VARCHAR(191) NOT NULL,
    ADD COLUMN `siretNumber` VARCHAR(191) NOT NULL,
    ADD COLUMN `zipCode` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `estimate` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `status` ENUM('DRAFT', 'WAITING_FOR_VALIDATION', 'VALIDATED') NOT NULL,
    `signature` VARCHAR(191) NOT NULL,
    `validationDate` DATETIME(3) NULL,
    `deadLine` DATETIME(3) NOT NULL,
    `wantedDeadline` DATETIME(3) NOT NULL,
    `additionalInformation` LONGTEXT NOT NULL,
    `validationCode` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `estimatesOnProducts` (
    `estimateId` INTEGER NOT NULL,
    `productId` INTEGER NOT NULL,
    `quantity` INTEGER NOT NULL,
    `estimateDescription` LONGTEXT NOT NULL,

    PRIMARY KEY (`estimateId`, `productId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `product` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `reference` VARCHAR(191) NOT NULL,
    `stock` INTEGER NOT NULL,
    `description` LONGTEXT NOT NULL,
    `unitPrice` DECIMAL(65, 30) NOT NULL,
    `imageUrl` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `attachedFile` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `attachedFileOnEstimate` (
    `attachedFileId` INTEGER NOT NULL,
    `estimateId` INTEGER NOT NULL,

    PRIMARY KEY (`attachedFileId`, `estimateId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `user_email_key` ON `user`(`email`);

-- AddForeignKey
ALTER TABLE `estimate` ADD CONSTRAINT `estimate_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `estimatesOnProducts` ADD CONSTRAINT `estimatesOnProducts_estimateId_fkey` FOREIGN KEY (`estimateId`) REFERENCES `estimate`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `estimatesOnProducts` ADD CONSTRAINT `estimatesOnProducts_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `attachedFileOnEstimate` ADD CONSTRAINT `attachedFileOnEstimate_attachedFileId_fkey` FOREIGN KEY (`attachedFileId`) REFERENCES `attachedFile`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `attachedFileOnEstimate` ADD CONSTRAINT `attachedFileOnEstimate_estimateId_fkey` FOREIGN KEY (`estimateId`) REFERENCES `estimate`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

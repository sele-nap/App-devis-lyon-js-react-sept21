/*
  Warnings:

  - You are about to drop the column `wantedDeadline` on the `estimate` table. All the data in the column will be lost.
  - You are about to drop the `estimatesOnProducts` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `createDate` to the `estimate` table without a default value. This is not possible if the table is not empty.
  - Made the column `inscriptionDate` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `estimatesOnProducts` DROP FOREIGN KEY `estimatesOnProducts_estimateId_fkey`;

-- DropForeignKey
ALTER TABLE `estimatesOnProducts` DROP FOREIGN KEY `estimatesOnProducts_productId_fkey`;

-- AlterTable
ALTER TABLE `estimate` DROP COLUMN `wantedDeadline`,
    ADD COLUMN `createDate` DATETIME(3) NOT NULL,
    MODIFY `status` ENUM('DRAFT', 'TO_DO', 'WAITING_FOR_VALIDATION', 'VALIDATED') NOT NULL DEFAULT 'TO_DO',
    MODIFY `signature` VARCHAR(191) NULL,
    MODIFY `validationCode` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `inscriptionDate` DATETIME(3) NOT NULL;

-- DropTable
DROP TABLE `estimatesOnProducts`;

-- CreateTable
CREATE TABLE `estimateLine` (
    `estimateId` INTEGER NOT NULL,
    `productId` INTEGER NOT NULL,
    `quantity` INTEGER NOT NULL,
    `estimateDescription` LONGTEXT NOT NULL,
    `createDate` DATETIME(3) NOT NULL,

    PRIMARY KEY (`estimateId`, `productId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `estimateLine` ADD CONSTRAINT `estimateLine_estimateId_fkey` FOREIGN KEY (`estimateId`) REFERENCES `estimate`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `estimateLine` ADD CONSTRAINT `estimateLine_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

/*
  Warnings:

  - You are about to drop the column `activationCode` on the `user` table. All the data in the column will be lost.
  - You are about to alter the column `organizationType` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum("user_organizationType")`.
  - A unique constraint covering the columns `[emailVerificationCode]` on the table `user` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `activationCode`,
    ADD COLUMN `emailVerificationCode` VARCHAR(191) NULL,
    MODIFY `organizationType` ENUM('INDIVIDUAL', 'NON_PROFIT_ORGANIZATION', 'TOWN_HALL', 'BUISNESS') NULL;

-- CreateIndex
CREATE UNIQUE INDEX `user_emailVerificationCode_key` ON `user`(`emailVerificationCode`);

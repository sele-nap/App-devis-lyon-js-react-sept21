/*
  Warnings:

  - You are about to alter the column `organizationType` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum("user_organizationType")`.

*/
-- AlterTable
ALTER TABLE `user` MODIFY `organizationType` ENUM('INDIVIDUAL', 'NON_PROFIT_ORGANIZATION', 'TOWN_HALL', 'BUISNESS') NULL;

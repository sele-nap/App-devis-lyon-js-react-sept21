/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `reference` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `stock` on the `product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `product` DROP COLUMN `imageUrl`,
    DROP COLUMN `reference`,
    DROP COLUMN `stock`,
    MODIFY `description` LONGTEXT NULL;

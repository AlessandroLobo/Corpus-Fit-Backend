/*
  Warnings:

  - Added the required column `url` to the `exercises` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `exercises` ADD COLUMN `url` VARCHAR(191) NOT NULL;

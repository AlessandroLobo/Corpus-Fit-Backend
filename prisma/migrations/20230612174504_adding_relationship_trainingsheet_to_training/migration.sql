/*
  Warnings:

  - You are about to drop the column `routineId` on the `trainings` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `trainings` DROP FOREIGN KEY `trainings_routineId_fkey`;

-- AlterTable
ALTER TABLE `trainings` DROP COLUMN `routineId`,
    ADD COLUMN `trainingSheetId` VARCHAR(191) NULL;

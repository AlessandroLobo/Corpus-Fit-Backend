/*
  Warnings:

  - You are about to drop the column `trainingId` on the `training_Sheet` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `training_Sheet` DROP FOREIGN KEY `training_Sheet_trainingId_fkey`;

-- AlterTable
ALTER TABLE `training_Sheet` DROP COLUMN `trainingId`;

-- AddForeignKey
ALTER TABLE `trainings` ADD CONSTRAINT `trainings_trainingSheetId_fkey` FOREIGN KEY (`trainingSheetId`) REFERENCES `training_Sheet`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

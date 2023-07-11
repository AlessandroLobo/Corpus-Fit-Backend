/*
  Warnings:

  - You are about to drop the `training_sheet` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `training_sheet` DROP FOREIGN KEY `training_sheet_exerciseId_fkey`;

-- DropForeignKey
ALTER TABLE `training_sheet` DROP FOREIGN KEY `training_sheet_routineId_fkey`;

-- DropForeignKey
ALTER TABLE `trainings` DROP FOREIGN KEY `trainings_trainingSheetId_fkey`;

-- DropTable
DROP TABLE `training_sheet`;

-- CreateTable
CREATE TABLE `training_Sheet` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `workoutType` VARCHAR(191) NULL,
    `duration` INTEGER NULL,
    `routineId` VARCHAR(191) NULL,
    `exerciseId` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `training_Sheet` ADD CONSTRAINT `training_Sheet_routineId_fkey` FOREIGN KEY (`routineId`) REFERENCES `routines`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `training_Sheet` ADD CONSTRAINT `training_Sheet_exerciseId_fkey` FOREIGN KEY (`exerciseId`) REFERENCES `exercises`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `trainings` ADD CONSTRAINT `trainings_trainingSheetId_fkey` FOREIGN KEY (`trainingSheetId`) REFERENCES `training_Sheet`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

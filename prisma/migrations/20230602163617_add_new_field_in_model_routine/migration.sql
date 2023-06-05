/*
  Warnings:

  - You are about to drop the column `exercise` on the `trainings` table. All the data in the column will be lost.
  - You are about to drop the column `muscleGroup` on the `trainings` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `routines` ADD COLUMN `studentId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `trainings` DROP COLUMN `exercise`,
    DROP COLUMN `muscleGroup`,
    ADD COLUMN `exerciseId` VARCHAR(191) NULL,
    ADD COLUMN `muscleGroupId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `routines` ADD CONSTRAINT `routines_studentId_fkey` FOREIGN KEY (`studentId`) REFERENCES `students`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `trainings` ADD CONSTRAINT `trainings_muscleGroupId_fkey` FOREIGN KEY (`muscleGroupId`) REFERENCES `muscle_groups`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `trainings` ADD CONSTRAINT `trainings_exerciseId_fkey` FOREIGN KEY (`exerciseId`) REFERENCES `exercises`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

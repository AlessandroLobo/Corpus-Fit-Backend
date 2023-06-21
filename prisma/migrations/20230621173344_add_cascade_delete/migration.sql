-- DropForeignKey
ALTER TABLE `training_Sheet` DROP FOREIGN KEY `training_Sheet_routineId_fkey`;

-- DropForeignKey
ALTER TABLE `training_Sheet` DROP FOREIGN KEY `training_Sheet_trainingId_fkey`;

-- AddForeignKey
ALTER TABLE `training_Sheet` ADD CONSTRAINT `training_Sheet_routineId_fkey` FOREIGN KEY (`routineId`) REFERENCES `routines`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `training_Sheet` ADD CONSTRAINT `training_Sheet_trainingId_fkey` FOREIGN KEY (`trainingId`) REFERENCES `trainings`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

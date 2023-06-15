-- AlterTable
ALTER TABLE `training_Sheet` ADD COLUMN `routineId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `training_Sheet` ADD CONSTRAINT `training_Sheet_routineId_fkey` FOREIGN KEY (`routineId`) REFERENCES `routines`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

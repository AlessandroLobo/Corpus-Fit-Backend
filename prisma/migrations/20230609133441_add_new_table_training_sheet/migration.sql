-- CreateTable
CREATE TABLE `training_Sheet` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `workoutType` VARCHAR(191) NULL,
    `trainingId` VARCHAR(191) NULL,
    `exerciseId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `training_Sheet` ADD CONSTRAINT `training_Sheet_trainingId_fkey` FOREIGN KEY (`trainingId`) REFERENCES `trainings`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `training_Sheet` ADD CONSTRAINT `training_Sheet_exerciseId_fkey` FOREIGN KEY (`exerciseId`) REFERENCES `exercises`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

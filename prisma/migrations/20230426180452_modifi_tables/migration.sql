-- DropForeignKey
ALTER TABLE `users` DROP FOREIGN KEY `users_planId_fkey`;

-- AlterTable
ALTER TABLE `users` MODIFY `planId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_planId_fkey` FOREIGN KEY (`planId`) REFERENCES `Plan`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

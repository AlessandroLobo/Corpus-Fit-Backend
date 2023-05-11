/*
  Warnings:

  - You are about to drop the column `dueData` on the `student_plans` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `student_plans` table. All the data in the column will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `dueDate` to the `student_plans` table without a default value. This is not possible if the table is not empty.
  - Added the required column `studentId` to the `student_plans` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `student_plans` DROP FOREIGN KEY `student_plans_userId_fkey`;

-- DropForeignKey
ALTER TABLE `users` DROP FOREIGN KEY `users_planId_fkey`;

-- AlterTable
ALTER TABLE `student_plans` DROP COLUMN `dueData`,
    DROP COLUMN `userId`,
    ADD COLUMN `dueDate` DATETIME(3) NOT NULL,
    ADD COLUMN `studentId` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `users`;

-- CreateTable
CREATE TABLE `students` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL DEFAULT 'N/A',
    `cpf` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL DEFAULT 'N/A',
    `status` VARCHAR(191) NOT NULL,
    `birthDate` DATETIME(3) NOT NULL,
    `weight` VARCHAR(191) NOT NULL DEFAULT 'N/A',
    `gender` VARCHAR(191) NOT NULL DEFAULT 'N/A',
    `phone` VARCHAR(191) NOT NULL DEFAULT 'N/A',
    `CEP` VARCHAR(191) NOT NULL DEFAULT 'N/A',
    `city` VARCHAR(191) NOT NULL DEFAULT 'N/A',
    `address` VARCHAR(191) NOT NULL DEFAULT 'N/A',
    `number` VARCHAR(191) NOT NULL DEFAULT 'N/A',
    `state` VARCHAR(191) NOT NULL DEFAULT 'N/A',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `planId` VARCHAR(191) NULL,

    UNIQUE INDEX `students_cpf_key`(`cpf`),
    UNIQUE INDEX `students_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `financials` (
    `id` VARCHAR(191) NOT NULL,
    `studentId` VARCHAR(191) NOT NULL,
    `paymentDate` DATETIME(3) NOT NULL,
    `paymentType` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `studentPlanId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `students` ADD CONSTRAINT `students_planId_fkey` FOREIGN KEY (`planId`) REFERENCES `plans`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `student_plans` ADD CONSTRAINT `student_plans_studentId_fkey` FOREIGN KEY (`studentId`) REFERENCES `students`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `financials` ADD CONSTRAINT `financials_studentId_fkey` FOREIGN KEY (`studentId`) REFERENCES `students`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `financials` ADD CONSTRAINT `financials_studentPlanId_fkey` FOREIGN KEY (`studentPlanId`) REFERENCES `student_plans`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

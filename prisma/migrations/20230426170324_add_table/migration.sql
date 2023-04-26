-- CreateTable
CREATE TABLE `users` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL DEFAULT 'N/A',
    `cpf` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL DEFAULT 'N/A',
    `birth_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `weight` VARCHAR(191) NOT NULL DEFAULT 'N/A',
    `gender` VARCHAR(191) NOT NULL DEFAULT 'N/A',
    `phone` VARCHAR(191) NOT NULL DEFAULT 'N/A',
    `CEP` VARCHAR(191) NOT NULL DEFAULT 'N/A',
    `city` VARCHAR(191) NOT NULL DEFAULT 'N/A',
    `address` VARCHAR(191) NOT NULL DEFAULT 'N/A',
    `number` VARCHAR(191) NOT NULL DEFAULT 'N/A',
    `state` VARCHAR(191) NOT NULL DEFAULT 'N/A',
    `planId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `users_cpf_key`(`cpf`),
    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Plan` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `duration` INTEGER NOT NULL,
    `price` DOUBLE NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_planId_fkey` FOREIGN KEY (`planId`) REFERENCES `Plan`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

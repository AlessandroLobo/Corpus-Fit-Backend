/*
  Warnings:

  - You are about to drop the column `birth_date` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `users` DROP COLUMN `birth_date`,
    ADD COLUMN `birthDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

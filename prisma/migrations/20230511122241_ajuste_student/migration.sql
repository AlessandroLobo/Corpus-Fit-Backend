/*
  Warnings:

  - You are about to alter the column `status` on the `students` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `TinyInt`.

*/
-- AlterTable
ALTER TABLE `students` MODIFY `status` BOOLEAN NOT NULL DEFAULT true;

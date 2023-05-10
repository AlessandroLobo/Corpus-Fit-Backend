/*
  Warnings:

  - Added the required column `dueData` to the `student_plans` table without a default value. This is not possible if the table is not empty.
  - Added the required column `planValue` to the `student_plans` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `student_plans` ADD COLUMN `dueData` DATETIME(3) NOT NULL,
    ADD COLUMN `planValue` DOUBLE NOT NULL;

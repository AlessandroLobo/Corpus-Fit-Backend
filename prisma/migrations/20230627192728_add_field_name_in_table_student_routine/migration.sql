/*
  Warnings:

  - Added the required column `name` to the `student_routines` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `student_routines` ADD COLUMN `name` VARCHAR(191) NOT NULL;

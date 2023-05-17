/*
  Warnings:

  - Added the required column `paymentValue` to the `financials` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `financials` ADD COLUMN `paymentValue` DOUBLE NOT NULL;

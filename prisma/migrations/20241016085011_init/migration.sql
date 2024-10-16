/*
  Warnings:

  - You are about to drop the column `hash_value` on the `groups` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[uuid]` on the table `groups` will be added. If there are existing duplicate values, this will fail.
  - The required column `uuid` was added to the `groups` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropIndex
DROP INDEX "groups_hash_value_key";

-- AlterTable
ALTER TABLE "groups" DROP COLUMN "hash_value",
ADD COLUMN     "uuid" UUID NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "groups_uuid_key" ON "groups"("uuid");

-- AlterTable
ALTER TABLE "groups" ALTER COLUMN "uuid" SET DEFAULT gen_random_uuid();

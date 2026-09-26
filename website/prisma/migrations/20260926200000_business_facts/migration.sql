-- AlterTable
ALTER TABLE "Business" ADD COLUMN     "facts" TEXT[] DEFAULT ARRAY[]::TEXT[];

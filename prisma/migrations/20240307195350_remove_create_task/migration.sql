/*
  Warnings:

  - You are about to drop the `CreateTask` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `categoryId` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CreateTask" DROP CONSTRAINT "CreateTask_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "CreateTask" DROP CONSTRAINT "CreateTask_projectId_fkey";

-- DropForeignKey
ALTER TABLE "CreateTask" DROP CONSTRAINT "CreateTask_taskId_fkey";

-- DropForeignKey
ALTER TABLE "CreateTask" DROP CONSTRAINT "CreateTask_userId_fkey";

-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "categoryId" TEXT NOT NULL;

-- DropTable
DROP TABLE "CreateTask";

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

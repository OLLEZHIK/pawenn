-- CreateTable
CREATE TABLE "IssueReport" (
    "id" SERIAL NOT NULL,
    "businessId" INTEGER NOT NULL,
    "kind" TEXT NOT NULL,
    "message" TEXT,
    "page" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "resolvedAt" TIMESTAMP(3),

    CONSTRAINT "IssueReport_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "IssueReport_createdAt_idx" ON "IssueReport"("createdAt");

-- AddForeignKey
ALTER TABLE "IssueReport" ADD CONSTRAINT "IssueReport_businessId_fkey" FOREIGN KEY ("businessId") REFERENCES "Business"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

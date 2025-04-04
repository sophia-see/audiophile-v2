-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "documentId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "isNew" BOOLEAN,
    "description" TEXT NOT NULL,
    "features" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "featuredDesc" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "publishedAt" TIMESTAMP(3),

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Inclusion" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "Inclusion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ImageSet" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "full" TEXT NOT NULL,
    "preview" TEXT NOT NULL,
    "gallery" TEXT[],

    CONSTRAINT "ImageSet_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_documentId_key" ON "Product"("documentId");

-- AddForeignKey
ALTER TABLE "Inclusion" ADD CONSTRAINT "Inclusion_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImageSet" ADD CONSTRAINT "ImageSet_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

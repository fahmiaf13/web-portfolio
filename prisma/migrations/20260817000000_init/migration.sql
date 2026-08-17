-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateTable
CREATE TABLE "projects" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "image_key" TEXT NOT NULL,
    "icon_key" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "sort_order" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "experiences" (
    "id" INTEGER NOT NULL,
    "company" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "icon_key" TEXT NOT NULL,
    "period" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "description" TEXT[],
    "sort_order" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "experiences_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "skills" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "description" TEXT,
    "color" TEXT,
    "category" TEXT NOT NULL,
    "sort_order" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "skills_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "links" (
    "id" SERIAL NOT NULL,
    "key" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "sort_order" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "links_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "projects_sort_order_key" ON "projects"("sort_order");
CREATE UNIQUE INDEX "experiences_sort_order_key" ON "experiences"("sort_order");
CREATE UNIQUE INDEX "skills_name_key" ON "skills"("name");
CREATE UNIQUE INDEX "skills_category_sort_order_key" ON "skills"("category", "sort_order");
CREATE UNIQUE INDEX "links_key_key" ON "links"("key");
CREATE UNIQUE INDEX "links_category_sort_order_key" ON "links"("category", "sort_order");

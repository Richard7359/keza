ALTER TABLE "courses" ALTER COLUMN "id" SET DATA TYPE uuid;--> statement-breakpoint
ALTER TABLE "courses" ALTER COLUMN "id" SET DEFAULT uuid_generate_v4();
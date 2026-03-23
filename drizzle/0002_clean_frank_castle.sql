ALTER TABLE `contacts` RENAME COLUMN "timestamp2" TO "created_at";--> statement-breakpoint
ALTER TABLE `contacts` ADD `message_id` text;
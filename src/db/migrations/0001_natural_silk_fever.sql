CREATE TABLE `workouts` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`name` varchar(100),
	`description` text,
	`exercises` json,
	`done_at` date,
	`time_elapsed` time,
	`user_id` bigint,
	CONSTRAINT `workouts_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
RENAME TABLE `user` TO `users`;
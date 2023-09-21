CREATE TABLE `user` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`username` varchar(256),
	`email` varchar(50),
	`password` varchar(20),
	CONSTRAINT `user_id` PRIMARY KEY(`id`)
);

-- CreateTable
CREATE TABLE `Test` (
    `id` VARCHAR(191) NOT NULL,
    `subject` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `questionCount` INTEGER NOT NULL,
    `difficulty` ENUM('EASY', 'NORMAL', 'HARD') NOT NULL DEFAULT 'EASY',
    `tags` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AlterTable
ALTER TABLE `user` MODIFY `mobile` VARCHAR(15) NULL,
    MODIFY `registeredAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `lastLogin` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `intro` TINYTEXT NULL,
    MODIFY `profile` TEXT NULL;
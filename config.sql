CREATE DATABASE IF NOT EXISTS `nestjs_typeorm`;

GRANT ALL ON `nestjs_typeorm`.* TO 'nest_db' @'%';

SET
    session wait_timeout = 300;
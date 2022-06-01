CREATE SCHEMA user;
USE user;

CREATE TABLE IF NOT EXISTS `UserPro` (
  Navn VARCHAR(50),
  Addre VARCHAR(50),
  TLF INT,
  Fodsel Date
) ENGINE=InnoDB;
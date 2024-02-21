INSERT INTO 
    "Project" ("name", "enabled", "time_zone", "createdAt", "updatedAt")
VALUES
    ('Apple',     TRUE,  'America/California', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('Trudeau',   TRUE,  'America/Toronto',	   CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('Nikiforov', TRUE,  'Europe/Moscow',      CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('Franco',	  TRUE,  'Europe/Paris',       CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('BairesDev', TRUE,  'Europe/Madrid',      CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('IoComune',  FALSE, 'Europe/Roma',        CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

SELECT * FROM "Project";

SELECT
    TABLE_SCHEMA, COLUMN_NAME, DATA_TYPE, IS_NULLABLE
FROM
    INFORMATION_SCHEMA.COLUMNS
WHERE
    TABLE_NAME = 'Project';
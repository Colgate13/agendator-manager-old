-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Service" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "idUser" TEXT NOT NULL,
    "Description" TEXT NOT NULL,
    "DurationTime" TEXT NOT NULL,
    "Price" REAL NOT NULL,
    CONSTRAINT "Service_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Service" ("Description", "DurationTime", "Price", "id", "idUser") SELECT "Description", "DurationTime", "Price", "id", "idUser" FROM "Service";
DROP TABLE "Service";
ALTER TABLE "new_Service" RENAME TO "Service";
CREATE UNIQUE INDEX "Service_id_key" ON "Service"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

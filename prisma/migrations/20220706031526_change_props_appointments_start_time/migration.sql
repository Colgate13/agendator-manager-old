/*
  Warnings:

  - You are about to drop the column `Startime` on the `Appointments` table. All the data in the column will be lost.
  - Added the required column `StartTime` to the `Appointments` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Appointments" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "idClient" TEXT NOT NULL,
    "idService" TEXT NOT NULL,
    "Year" INTEGER NOT NULL,
    "Day" INTEGER NOT NULL,
    "Month" INTEGER NOT NULL,
    "Hour" TEXT NOT NULL,
    "Status" INTEGER NOT NULL,
    "StartTime" TEXT NOT NULL,
    "EndTime" TEXT NOT NULL,
    CONSTRAINT "Appointments_idClient_fkey" FOREIGN KEY ("idClient") REFERENCES "Client" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Appointments_idService_fkey" FOREIGN KEY ("idService") REFERENCES "Service" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Appointments" ("Day", "EndTime", "Hour", "Month", "Status", "Year", "id", "idClient", "idService") SELECT "Day", "EndTime", "Hour", "Month", "Status", "Year", "id", "idClient", "idService" FROM "Appointments";
DROP TABLE "Appointments";
ALTER TABLE "new_Appointments" RENAME TO "Appointments";
CREATE UNIQUE INDEX "Appointments_id_key" ON "Appointments"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

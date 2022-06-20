/*
  Warnings:

  - Added the required column `Price` to the `Service` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Appointments" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "idBusiness" TEXT NOT NULL,
    "agendaId" TEXT NOT NULL,
    "idClient" TEXT NOT NULL,
    "Data" TEXT NOT NULL,
    "Request" BOOLEAN NOT NULL,
    "serviceId" TEXT,
    CONSTRAINT "Appointments_idBusiness_fkey" FOREIGN KEY ("idBusiness") REFERENCES "Business" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Appointments_idClient_fkey" FOREIGN KEY ("idClient") REFERENCES "Client" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Appointments_agendaId_fkey" FOREIGN KEY ("agendaId") REFERENCES "Agenda" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Appointments_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Appointments" ("Data", "Request", "agendaId", "id", "idBusiness", "idClient") SELECT "Data", "Request", "agendaId", "id", "idBusiness", "idClient" FROM "Appointments";
DROP TABLE "Appointments";
ALTER TABLE "new_Appointments" RENAME TO "Appointments";
CREATE UNIQUE INDEX "Appointments_id_key" ON "Appointments"("id");
CREATE TABLE "new_Service" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "idBusiness" TEXT NOT NULL,
    "idUser" TEXT NOT NULL,
    "agendaId" TEXT NOT NULL,
    "Description" TEXT NOT NULL,
    "DurationTime" TEXT NOT NULL,
    "Price" TEXT NOT NULL,
    CONSTRAINT "Service_idBusiness_fkey" FOREIGN KEY ("idBusiness") REFERENCES "Business" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Service_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Service_agendaId_fkey" FOREIGN KEY ("agendaId") REFERENCES "Agenda" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Service" ("Description", "DurationTime", "agendaId", "id", "idBusiness", "idUser") SELECT "Description", "DurationTime", "agendaId", "id", "idBusiness", "idUser" FROM "Service";
DROP TABLE "Service";
ALTER TABLE "new_Service" RENAME TO "Service";
CREATE UNIQUE INDEX "Service_id_key" ON "Service"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

/*
  Warnings:

  - Added the required column `agendaId` to the `Appointments` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Service" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "idBusiness" TEXT NOT NULL,
    "idUser" TEXT NOT NULL,
    "agendaId" TEXT NOT NULL,
    "Description" TEXT NOT NULL,
    "DurationTime" TEXT NOT NULL,
    CONSTRAINT "Service_idBusiness_fkey" FOREIGN KEY ("idBusiness") REFERENCES "Business" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Service_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Service_agendaId_fkey" FOREIGN KEY ("agendaId") REFERENCES "Agenda" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Appointments" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "idBusiness" TEXT NOT NULL,
    "agendaId" TEXT NOT NULL,
    "idClient" TEXT NOT NULL,
    "Data" TEXT NOT NULL,
    "Request" BOOLEAN NOT NULL,
    CONSTRAINT "Appointments_idBusiness_fkey" FOREIGN KEY ("idBusiness") REFERENCES "Business" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Appointments_idClient_fkey" FOREIGN KEY ("idClient") REFERENCES "Client" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Appointments_agendaId_fkey" FOREIGN KEY ("agendaId") REFERENCES "Agenda" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Appointments" ("Data", "Request", "id", "idBusiness", "idClient") SELECT "Data", "Request", "id", "idBusiness", "idClient" FROM "Appointments";
DROP TABLE "Appointments";
ALTER TABLE "new_Appointments" RENAME TO "Appointments";
CREATE UNIQUE INDEX "Appointments_id_key" ON "Appointments"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "Service_id_key" ON "Service"("id");

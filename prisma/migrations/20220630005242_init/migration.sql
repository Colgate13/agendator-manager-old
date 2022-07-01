-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "idUserPermission" INTEGER NOT NULL,
    "Name" TEXT NOT NULL,
    "Birthday" TEXT NOT NULL,
    "Cpf_cnpj" TEXT NOT NULL,
    "Phone" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Password" TEXT NOT NULL,
    CONSTRAINT "User_idUserPermission_fkey" FOREIGN KEY ("idUserPermission") REFERENCES "UserPermissions" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "UserPermissions" (
    "id" INTEGER NOT NULL,
    "Description" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Client" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "Phone" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Name" TEXT NOT NULL,
    "Birthday" TEXT NOT NULL,
    "Password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Service" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "idUser" TEXT NOT NULL,
    "Description" TEXT NOT NULL,
    "DurationTime" REAL NOT NULL,
    "Price" REAL NOT NULL,
    CONSTRAINT "Service_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Appointments" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "idClient" TEXT NOT NULL,
    "idService" TEXT NOT NULL,
    "Year" INTEGER NOT NULL,
    "Day" INTEGER NOT NULL,
    "Month" INTEGER NOT NULL,
    "Hour" TEXT NOT NULL,
    "Status" INTEGER NOT NULL,
    CONSTRAINT "Appointments_idClient_fkey" FOREIGN KEY ("idClient") REFERENCES "Client" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Appointments_idService_fkey" FOREIGN KEY ("idService") REFERENCES "Service" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_Cpf_cnpj_key" ON "User"("Cpf_cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "User_Phone_key" ON "User"("Phone");

-- CreateIndex
CREATE UNIQUE INDEX "User_Email_key" ON "User"("Email");

-- CreateIndex
CREATE UNIQUE INDEX "UserPermissions_id_key" ON "UserPermissions"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Client_id_key" ON "Client"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Client_Phone_key" ON "Client"("Phone");

-- CreateIndex
CREATE UNIQUE INDEX "Client_Email_key" ON "Client"("Email");

-- CreateIndex
CREATE UNIQUE INDEX "Service_id_key" ON "Service"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Appointments_id_key" ON "Appointments"("id");

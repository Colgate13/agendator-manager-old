-- CreateTable
CREATE TABLE "Business" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "Name" TEXT NOT NULL,
    "CompanyName" TEXT NOT NULL,
    "Cpf_cnpj" TEXT NOT NULL,
    "Domain" TEXT,
    "MailDefault" TEXT NOT NULL,
    "MailSuport" TEXT,
    "MailPagament" TEXT,
    "MailNoreply" TEXT
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "idBusiness" TEXT NOT NULL,
    "idUserPermission" INTEGER NOT NULL,
    "Name" TEXT NOT NULL,
    "Birthday" TEXT NOT NULL,
    "Cpf_cnpj" TEXT NOT NULL,
    "Phone" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Password" TEXT NOT NULL,
    CONSTRAINT "User_idBusiness_fkey" FOREIGN KEY ("idBusiness") REFERENCES "Business" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
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
    "idBusiness" TEXT NOT NULL,
    "Phone" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Name" TEXT NOT NULL,
    "Birthday" TEXT NOT NULL,
    "Address" TEXT NOT NULL,
    "Password" TEXT NOT NULL,
    "CheckMail" BOOLEAN NOT NULL,
    "Balance" TEXT NOT NULL,
    CONSTRAINT "Client_idBusiness_fkey" FOREIGN KEY ("idBusiness") REFERENCES "Business" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Agenda" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "idBusiness" TEXT NOT NULL,
    "idUser" TEXT NOT NULL,
    "Name" TEXT NOT NULL,
    "Colors" TEXT NOT NULL,
    CONSTRAINT "Agenda_idBusiness_fkey" FOREIGN KEY ("idBusiness") REFERENCES "Business" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Agenda_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Appointments" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "idBusiness" TEXT NOT NULL,
    "idClient" TEXT NOT NULL,
    "Data" TEXT NOT NULL,
    "Request" BOOLEAN NOT NULL,
    CONSTRAINT "Appointments_idBusiness_fkey" FOREIGN KEY ("idBusiness") REFERENCES "Business" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Appointments_idClient_fkey" FOREIGN KEY ("idClient") REFERENCES "Client" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Business_id_key" ON "Business"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Business_Cpf_cnpj_key" ON "Business"("Cpf_cnpj");

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
CREATE UNIQUE INDEX "Agenda_id_key" ON "Agenda"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Appointments_id_key" ON "Appointments"("id");

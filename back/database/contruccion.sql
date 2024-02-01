# docker pull mcr.microsoft.com/mssql/server
# docker run --name "SQL-Server_Local" -e "ACCEPT_EULA=Y" -e "MSSQL_SA_PASSWORD=Adm.1n1strad0r" -p 1433:1433 -d mcr.microsoft.com/mssql/server

CREATE DATABASE entradas;
USE entradas;
CREATE TABLE publicaciones (
    id INT PRIMARY KEY IDENTITY(1,1),
    Titulo NVARCHAR(MAX) NOT NULL,
    Autor NVARCHAR(MAX) NOT NULL,
    FechaPublicacion DATE DEFAULT GETDATE(),
    Contenido NVARCHAR(MAX) NOT NULL
);

INSERT INTO publicaciones (Titulo, Autor, Contenido) VALUES ('Título de ejemplo', 'Autor de ejemplo', 'Contenido de ejemplo');
SELECT * FROM publicaciones;

# npx sequelize-auto -o "./models" -d entradas -l esm -T p -h localhost -u sa -p 1433 -x Adm.1n1strad0r -e mssql
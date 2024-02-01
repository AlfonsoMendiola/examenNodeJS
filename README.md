

Instalacion
base de datos
    La base de datos es sql server, en este examen use docker (debe estar instalado en la pc) para instalarlo
    los pasos opcionales de instalacion son la ejecucion de los siguentes comendos:
    docker pull mcr.microsoft.com/mssql/server
    docker run --name "SQL-Server_Local" -e "ACCEPT_EULA=Y" -e "MSSQL_SA_PASSWORD=Adm.1n1strad0r" -p 1433:1433 -d mcr.microsoft.com/mssql/server
    cuando ya se tenga el sgbd funcionando, entrar a back/database/construccion.sql y ejecutar el codigo sql para la creacion de la base de datos y la tabla
Backend
    se requiere una version 20 de node o superior. una vez que se tenga el proyecto clonado, se deben instalar las dependencias con npm install
    su ejecucion es con el comando npm run dev
    cuando el proyecto este funcionando saldran 3 avisos por consola: el puerto de funcionamiento, una consulta sql de prueba y si la bd esta en linea
    si todo esta funcionando correctamente, se puede ver el build de react al abrir el localhost del back pero no es necesario
frontend
    se requiere una version 20 de node o superior. una vez que se tenga el proyecto clonado, se deben instalar las dependencias con npm install
    su ejecucion es con el comando npm run dev
    

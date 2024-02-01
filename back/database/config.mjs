import { Sequelize } from 'sequelize';

const dbSequelize = new Sequelize(`${process.env.SQLSERVER_DB_NAME}`, `${process.env.SQLSERVER_USERNAME}`, `${process.env.SQLSERVER_PASS}`, {
    dialect: 'mssql',
    dialectOptions: {
      options: {
        useUTC: false,
        dateFirst: 1,
      },
    },
  });

const MssqlConnection = async() => {
    try {
        await dbSequelize.authenticate();
        console.log('SQL Server en linea');
    } catch (error) {
        console.log(`${error}`);
        throw new Error('Error al conectar en SQL Server');
    }
}



export {MssqlConnection, dbSequelize}
import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _publicaciones from  "./publicaciones.js";

export function initModels(sequelize) {
  const publicaciones = _publicaciones.init(sequelize, DataTypes);


  return {
    publicaciones,
  };
}

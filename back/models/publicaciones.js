import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class publicaciones extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Titulo: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    Autor: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    FechaPublicacion: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    },
    Contenido: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'publicaciones',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__publicac__3213E83F620FABFE",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

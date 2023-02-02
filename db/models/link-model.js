module.exports = (sequelize, DataTypes) => {
  const linkTable = sequelize.define(
    "link",
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      url: { type: DataTypes.STRING },
      hash: { type: DataTypes.STRING },
      createdAt: { type: DataTypes.DATE },
      updateAt: { type: DataTypes.DATE },
      deletedAt: { type: DataTypes.DATE },
    },
    {
      timestamps: true,
    }
  );

  return linkTable;
};

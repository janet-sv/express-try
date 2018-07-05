'use strict';
module.exports = (sequelize, DataTypes) => {
  var Warehouse = sequelize.define('Warehouse', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Warehouse.associate = function(models) {
    // associations can be defined here
    Warehouse.hasMany(models.Lot);
  };
  return Warehouse;
};
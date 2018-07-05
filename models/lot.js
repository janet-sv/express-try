'use strict';
module.exports = (sequelize, DataTypes) => {
  var Lot = sequelize.define('Lot', {
    code: DataTypes.STRING,
    expiration: DataTypes.DATE,
  }, {});
  Lot.associate = function(models) {
    // associations can be defined here
    Lot.hasOne(models.Warehouse);
    Lot.belongsToMany(models.Product, {through: 'ProductLot', foreignKey: 'lotId'});
  };
  return Lot;
};
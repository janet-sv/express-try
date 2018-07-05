'use strict';
module.exports = (sequelize, DataTypes) => {
  var Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    expiration: DataTypes.DATE,
    description: DataTypes.STRING
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
    Product.belongsToMany(models.Lot, {through: 'ProductLot', foreignKey: 'productId'});
  };
  return Product;
};
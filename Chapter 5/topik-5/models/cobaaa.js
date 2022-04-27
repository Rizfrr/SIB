'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cobaaa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Cobaaa.init({
    coba1: DataTypes.STRING,
    coba2: DataTypes.STRING,
    coba3: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cobaaa',
  });
  return Cobaaa;
};
"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Profile.hasOne(models.Users, { foreignKey: "profileId", as: "profile" });
    }
  }
  Profile.init(
    {
      name: DataTypes.STRING,
      alamat: DataTypes.STRING,
      pekerjaan: DataTypes.STRING,
      pendidikan: DataTypes.STRING,
      telp: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Profile",
    }
  );
  return Profile;
};

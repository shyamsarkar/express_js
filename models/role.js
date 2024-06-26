'use strict';

module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});

  Role.associate = function (models) {
    Role.belongsToMany(models.User, { through: 'UserRoles', foreignKey: 'roleId' });
  };

  // Role.ALL_ROLES = {
  //   SUPER_ADMIN: 'super_admin',
  //   COMPANY_ADMIN: 'company_admin',
  //   BRANCH_ADMIN: 'branch_admin',
  //   END_USER: 'end_user',
  // };

  return Role;
};
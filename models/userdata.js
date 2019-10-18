module.exports = function(sequelize, DataTypes) {
    var Data = sequelize.define("Data", {
      body: {
        type: DataTypes.INTEGER,
        allowNull: false,
        len: [1, 9]
      }
    });
  
    Data.associate = function (models) {
      Data.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        },
        onDelete: "CASCADE",
      });
    };
    // Add a belongsTo association to user here
    // Example: https://github.com/sequelize/express-example/blob/master/models/task.js
    return Data;
  };
  
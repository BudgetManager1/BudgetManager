module.exports = function (sequelize, DataTypes) {
    //creating my table
    var Goals = sequelize.define('Goals', {
        wish: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        total: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            validate: { len: [1, 1000000] }
        },
        // progress: {
        //     type: DataTypes.DECIMAL(10, 2),
        //     allowNull: true,
        //     validate: { len: [1, 1000000] }
        // }
    });
    
    Goals.associate = function (models) {
        Goals.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            },
        });
    };
    return Goals;
};      
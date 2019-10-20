module.exports = function (sequelize, DataTypes) {
    var Budget = sequelize.define('Budget', {
        category: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        amount_spent: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            validate: { len: [1, 1000000] }
        }, 
        
    });
    
    Budget.associate = function (models) {
        Budget.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            },
        });
    };
    return Budget;
};